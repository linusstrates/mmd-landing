# MMD — Mongolian Medical Device

Landing page for **MMD (Mongolian Medical Device)**. Visitors can request a meeting; requests are
stored in PostgreSQL and emailed to the team.

## Stack
Next.js 16 · React 19 · Tailwind CSS 4 · Framer Motion · Prisma 7 + PostgreSQL · NextAuth 5 · SMTP email.

## Run
```bash
npm install
npx prisma migrate deploy   # create the MeetingRequest table
npm run dev
```

## Environment
| Variable | Used for |
|---|---|
| `DATABASE_URL` | PostgreSQL connection |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` | Outgoing email |
| `NOTIFY_TO` | Address that receives new meeting requests |

API: `POST /api/meeting-requests`.
