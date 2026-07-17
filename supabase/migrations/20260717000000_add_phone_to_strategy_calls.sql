-- Migration: Ensure phone column exists on strategy_calls table
-- This column was present in the original table definition (20260715000000_strategy_calls.sql)
-- but was not being populated by the form. This migration is a no-op safety net.

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'strategy_calls' AND column_name = 'phone'
  ) THEN
    ALTER TABLE strategy_calls ADD COLUMN phone text;
  END IF;
END $$;
