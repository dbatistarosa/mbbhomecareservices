-- ============================================================
-- MBB Homecare Services — Initial Schema
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- ── Bookings ─────────────────────────────────────────────────
create table if not exists public.bookings (
  id               uuid        primary key default gen_random_uuid(),
  created_at       timestamptz default now(),

  -- Step 1: Services
  services         text[]      not null,

  -- Step 2: Schedule
  frequency        text,
  schedule         text,
  start_date       text,

  -- Step 3: Client info
  client_name      text        not null,
  client_age       text,
  relationship     text,
  care_address     text,
  city             text,
  county           text,
  medical_notes    text,

  -- Step 4: Contact info
  contact_name     text        not null,
  contact_phone    text        not null,
  contact_email    text        not null,
  contact_method   text,
  best_time        text,
  additional_notes text,

  -- Admin
  status           text        default 'pending'
);

alter table public.bookings enable row level security;

-- Allow anonymous users to submit bookings
create policy "anon can insert bookings"
  on public.bookings for insert
  to anon
  with check (true);

-- ── Contact Inquiries ─────────────────────────────────────────
create table if not exists public.contact_inquiries (
  id         uuid        primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name       text        not null,
  phone      text,
  email      text        not null,
  service    text,
  message    text        not null,
  status     text        default 'new'
);

alter table public.contact_inquiries enable row level security;

-- Allow anonymous users to submit contact inquiries
create policy "anon can insert contact inquiries"
  on public.contact_inquiries for insert
  to anon
  with check (true);
