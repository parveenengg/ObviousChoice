import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createClient } from '@/utils/supabase/server'; // We can use the server client to push data, but actually we should use a service role key if we want to bypass RLS entirely, or anon key because we enabled public inserts via RLS. Let's use anon key via standard client or server client.

// Schema matching the StrategyForm inputs
const strategyCallSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  challenge: z.string().min(1, "Challenge description is required"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 1. Validation
    const parsedData = strategyCallSchema.safeParse(body);
    
    if (!parsedData.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: parsedData.error.format() },
        { status: 400 }
      );
    }
    
    const { name, email, company, challenge } = parsedData.data;

    // 2. Supabase Insert
    const supabase = await createClient();
    
    // We parse "company & URL" into company field.
    const { error } = await supabase
      .from('strategy_calls')
      .insert([
        {
          name,
          email,
          company, // Mapping the form's "Company & URL" to the company column
          challenge,
          status: 'new',
          source: 'website_strategy_form',
        }
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Failed to save submission. Please try again.' },
        { status: 500 }
      );
    }

    // 3. Return Success
    return NextResponse.json(
      { message: 'Strategy call request received successfully.' },
      { status: 200 }
    );
    
  } catch (err) {
    console.error('API Route Error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
