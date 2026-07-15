-- Migration for Strategy Calls Table

CREATE TABLE IF NOT EXISTS strategy_calls (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  website text,
  industry text,
  challenge text,
  goals text,
  budget text,
  source text,
  status text DEFAULT 'new',
  notes text
);

-- Note: Ensure Row Level Security (RLS) is handled appropriately depending on your security setup.
-- If the API route runs server-side with a service_role key, it can bypass RLS.
-- If using anon key, you may need policies to allow inserts.
-- For a founder dashboard, only authenticated users (the founder) should be able to SELECT.

ALTER TABLE strategy_calls ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (from the public website form)
CREATE POLICY "Allow public inserts" ON strategy_calls
  FOR INSERT TO anon
  WITH CHECK (true);

-- Allow founder (authenticated) to view and edit
CREATE POLICY "Allow authenticated full access" ON strategy_calls
  FOR ALL TO authenticated
  USING (true);
