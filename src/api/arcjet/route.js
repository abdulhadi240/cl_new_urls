import { NextResponse } from "next/server";
import arcjet, { shield, tokenBucket } from "@arcjet/next";

const aj = arcjet({
  key: process.env.NEXT_PUBLIC_ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    shield({ mode: "LIVE" }), // Protection against SQL Injection, XSS, etc.
    tokenBucket({
      mode: "LIVE",
      refillRate: 15, // Allow 5 requests per interval
      interval: 10, // Refill every 10 seconds
      capacity: 10, // Max capacity 10 requests
    }),
  ],
});

export async function POST(req) {
  try {
    const decision = await aj.protect(req, { requested: 1 });

    if (decision.isDenied()) {
      return NextResponse.json(
        { error: "Request Denied", reason: decision.reason },
        { status: 403 }
      );
    }

    // ✅ Read the formData from the request
    const formData = await req.formData();

    // ✅ Manually forward the request to `/api/register`
    const response = await fetch(`${req.nextUrl.origin}/api/register`, {
      method: "POST",
      headers: { Accept: "application/json", "Accept-Language": "en" },
      body: formData, // Pass the same FormData
    });

    const result = await response.json();
    return NextResponse.json(result, { status: response.status });

  } catch (error) {
    return NextResponse.json({ error: "Arcjet Validation Failed" }, { status: 500 });
  }
}
