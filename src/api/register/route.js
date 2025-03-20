import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();

    // ✅ Forward request to third-party API
    const response = await fetch("https://backendbatd.clinstitute.co.uk/api/course-register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-Language": "en",
      },
      body: formData,
    });

    const result = await response.json();

    if (response.ok) {
      return NextResponse.json({ message: "Registration Successful", result }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Registration Failed", details: result }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
