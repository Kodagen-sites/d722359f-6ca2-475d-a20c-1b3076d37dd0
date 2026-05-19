import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Contact form handler (landing build — static site + contact form).
 * Validates the submission and acknowledges it. No database is provisioned
 * in landing mode; wire an email provider or CRM here when upgrading.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 422 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 422 },
    );
  }

  // Landing mode: acknowledge receipt. No database is provisioned and no PII
  // is persisted. Wire an email provider or CRM here when upgrading to
  // fullstack — the `name`, `email` and `message` fields are validated above.
  void name;

  return NextResponse.json({ ok: true });
}
