-- Create leads table with AI tagging
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  company TEXT NOT NULL,
  product_interest TEXT NOT NULL,
  notes TEXT,
  ai_tag TEXT CHECK (ai_tag IN ('Hot Lead', 'Warm Lead', 'Cold Lead')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policies for lead access
-- Only authenticated users can view leads (for dashboard)
CREATE POLICY "Authenticated users can view leads" 
ON public.leads 
FOR SELECT 
TO authenticated
USING (true);

-- Allow anonymous users to insert leads (for form submission)
CREATE POLICY "Anyone can create leads" 
ON public.leads 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Only authenticated users can update leads (for manual tag updates if needed)
CREATE POLICY "Authenticated users can update leads" 
ON public.leads 
FOR UPDATE 
TO authenticated
USING (true);

-- Add trigger for automatic timestamp updates
CREATE TRIGGER update_leads_updated_at
BEFORE UPDATE ON public.leads
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();