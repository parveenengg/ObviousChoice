import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validation
    if (!email) {
      return NextResponse.json(
        { message: "Email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format." },
        { status: 400 }
      );
    }

    // Mock newsletter subscription.
    // Real implementation would connect to ConvertKit, Mailchimp, Loops, etc.
    console.log("Newsletter subscription received:", {
      email,
      subscribedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Successfully subscribed to the newsletter." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in newsletter API:", error);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
