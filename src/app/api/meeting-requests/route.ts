import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { meetingRequestSchema } from "@/lib/validation";
import { sendNotificationEmail, sendConfirmationEmail } from "@/lib/email";

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 3600000 }); // 1 hour
    return false;
  }
  entry.count++;
  return entry.count > 5;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Хэт олон хүсэлт илгээсэн байна. 1 цагийн дараа дахин оролдоно уу." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = meetingRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Мэдээлэл буруу байна",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const meeting = await prisma.meetingRequest.create({
      data: {
        interests: data.interests,
        scheduledDate: new Date(data.date),
        scheduledTime: data.time,
        fullName: data.fullName,
        organization: data.organization,
        phone: data.phone,
        email: data.email || null,
        notes: data.notes || null,
        ipAddress: ip,
        userAgent: request.headers.get("user-agent") || null,
      },
    });

    // Send emails (non-blocking)
    const emailPromises: Promise<void>[] = [
      sendNotificationEmail(meeting).catch(console.error),
    ];
    if (data.email) {
      emailPromises.push(
        sendConfirmationEmail(meeting).catch(console.error)
      );
    }
    await Promise.allSettled(emailPromises);

    return NextResponse.json(
      { id: meeting.id, status: "pending" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Meeting request error:", error);
    return NextResponse.json(
      { message: "Серверийн алдаа гарлаа" },
      { status: 500 }
    );
  }
}
