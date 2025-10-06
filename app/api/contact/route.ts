import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.info("Contact request received", body);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Invalid request", error);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
