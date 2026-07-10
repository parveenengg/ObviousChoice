import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, website, challenge, message } = body;

    // Validation
    if (!name || !email || !company || !challenge || !message) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format." },
        { status: 400 }
      );
    }

    // In a real environment, you would:
    // 1. Send an email using Resend, Nodemailer, etc.
    // 2. Save it to a database (PostgreSQL, Firestore, etc.)
    // For now, we mock the success state as requested.
    console.log("Contact submission received:", {
      name,
      email,
      company,
      website,
      challenge,
      message,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Inquiry successfully received." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
