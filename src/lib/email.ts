import nodemailer from "nodemailer";

interface MeetingData {
  id: string;
  fullName: string;
  organization: string;
  phone: string;
  email: string | null;
  interests: string[];
  scheduledDate: Date;
  scheduledTime: string;
  notes: string | null;
}

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendNotificationEmail(meeting: MeetingData) {
  if (!process.env.SMTP_HOST) {
    console.log("[Email] SMTP not configured, skipping notification email");
    return;
  }

  const transporter = getTransporter();
  const date = new Date(meeting.scheduledDate).toLocaleDateString("mn-MN");

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.NOTIFY_TO || "info@mmd.mn",
    subject: `Шинэ уулзалтын хүсэлт: ${meeting.fullName} — ${meeting.organization}`,
    html: `
      <h2>Шинэ уулзалтын хүсэлт</h2>
      <table style="border-collapse:collapse;">
        <tr><td style="padding:4px 12px;font-weight:bold;">Нэр:</td><td style="padding:4px 12px;">${meeting.fullName}</td></tr>
        <tr><td style="padding:4px 12px;font-weight:bold;">Байгууллага:</td><td style="padding:4px 12px;">${meeting.organization}</td></tr>
        <tr><td style="padding:4px 12px;font-weight:bold;">Утас:</td><td style="padding:4px 12px;">${meeting.phone}</td></tr>
        <tr><td style="padding:4px 12px;font-weight:bold;">И-мэйл:</td><td style="padding:4px 12px;">${meeting.email || "—"}</td></tr>
        <tr><td style="padding:4px 12px;font-weight:bold;">Огноо:</td><td style="padding:4px 12px;">${date} ${meeting.scheduledTime}</td></tr>
        <tr><td style="padding:4px 12px;font-weight:bold;">Сонирхол:</td><td style="padding:4px 12px;">${meeting.interests.join(", ")}</td></tr>
        <tr><td style="padding:4px 12px;font-weight:bold;">Тэмдэглэл:</td><td style="padding:4px 12px;">${meeting.notes || "—"}</td></tr>
      </table>
      <p style="margin-top:16px;color:#888;">ID: ${meeting.id}</p>
    `,
  });
}

export async function sendConfirmationEmail(meeting: MeetingData) {
  if (!process.env.SMTP_HOST || !meeting.email) {
    console.log("[Email] SMTP not configured or no email, skipping confirmation");
    return;
  }

  const transporter = getTransporter();
  const date = new Date(meeting.scheduledDate).toLocaleDateString("mn-MN");

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: meeting.email,
    subject: "MMD — Уулзалтын хүсэлт баталгаажлаа",
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;">
        <h2 style="color:#2A2A2A;">Хүсэлт хүлээн авлаа</h2>
        <p style="color:#5A5A56;line-height:1.7;">
          Сайн байна уу, ${meeting.fullName}. Таны уулзалтын хүсэлтийг бид хүлээн авлаа.
          Манай мэргэжилтэн удахгүй холбогдож, дэлгэрэнгүйг тохирох болно.
        </p>
        <div style="background:#F4EEE2;padding:16px 20px;margin:20px 0;">
          <p style="margin:0;font-size:13px;"><strong>Огноо:</strong> ${date}, ${meeting.scheduledTime}</p>
          <p style="margin:4px 0 0;font-size:13px;"><strong>Сонирхол:</strong> ${meeting.interests.join(", ")}</p>
        </div>
        <p style="color:#888;font-size:12px;">Mongolian Medical Device · info@mmd.mn · +976 7700 0000</p>
      </div>
    `,
  });
}
