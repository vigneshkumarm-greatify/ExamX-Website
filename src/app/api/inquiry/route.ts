import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiKey = process.env.INQUIRY_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { message: "Server configuration error" },
      { status: 500 }
    );
  }

  const body = await request.json();

  const upstream = await fetch(
    "https://klockwork.ai/api/v1/leads/web-inquiry/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify(body),
    }
  );

  const data = await upstream.json().catch(() => null);

  return NextResponse.json(data, { status: upstream.status });
}
