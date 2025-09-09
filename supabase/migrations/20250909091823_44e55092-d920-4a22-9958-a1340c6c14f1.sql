-- Create a table for beta signups
CREATE TABLE public.beta_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  company TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.beta_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (since this is a public signup form)
CREATE POLICY "Anyone can create beta signups" 
ON public.beta_signups 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow users to view their own signups (if needed later)
CREATE POLICY "Users can view their own signups" 
ON public.beta_signups 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_beta_signups_updated_at
BEFORE UPDATE ON public.beta_signups
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();