import { z } from "zod";
import { INTERESTS, SLOTS } from "./data";

export const meetingRequestSchema = z.object({
  interests: z
    .array(z.string())
    .min(1, "Хамгийн багадаа 1 сонголт хийнэ үү")
    .refine(
      (arr) => arr.every((v) => INTERESTS.includes(v)),
      "Буруу сонголт байна"
    ),
  date: z
    .string()
    .refine((v) => {
      const d = new Date(v);
      if (isNaN(d.getTime())) return false;
      const day = d.getUTCDay();
      return day !== 0 && day !== 6; // weekday only
    }, "Зөвхөн ажлын өдөр сонгоно уу"),
  time: z
    .string()
    .refine((v) => SLOTS.includes(v), "Буруу цаг сонгосон байна"),
  fullName: z
    .string()
    .trim()
    .min(2, "Нэр 2-оос дээш тэмдэгт байх ёстой")
    .max(120),
  organization: z
    .string()
    .trim()
    .min(2, "Байгууллагын нэр 2-оос дээш тэмдэгт байх ёстой")
    .max(120),
  phone: z
    .string()
    .trim()
    .regex(
      /^\+?9\d{2,3}[\s-]?\d{4}[\s-]?\d{4}$/,
      "Монгол утасны дугаар буруу байна"
    ),
  email: z.string().email("И-мэйл буруу байна").optional().or(z.literal("")),
  notes: z.string().max(2000).optional(),
});

export type MeetingRequestInput = z.infer<typeof meetingRequestSchema>;
