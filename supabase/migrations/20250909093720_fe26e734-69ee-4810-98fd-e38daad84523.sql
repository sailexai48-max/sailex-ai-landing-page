-- Fix security vulnerability: Remove overly permissive SELECT policy on beta_signups
-- The current policy allows any authenticated user to view all beta signups
-- This exposes sensitive data like emails, names, and company information

-- Drop the existing overly permissive SELECT policy
DROP POLICY IF EXISTS "Users can view their own signups" ON public.beta_signups;

-- Since this is a lead collection form and doesn't have user_id tracking,
-- we don't need any SELECT policy for regular users.
-- Admin access should be handled through the Supabase dashboard or dedicated admin functions.

-- If you need programmatic admin access later, create a specific admin role and policy:
-- CREATE POLICY "Admin can view all signups" ON public.beta_signups
-- FOR SELECT USING (auth.jwt() ->> 'role' = 'admin');