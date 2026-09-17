-- Smart signature Phase 2: link registry + click tracking.
-- Applied to the brandonmicci-web Supabase project (updxevgdetmsoznzbkqh) on 2026-09-07.

create table if not exists sig_links (
  slug text primary key,
  destination text not null,
  label text,
  active boolean default true,
  updated_at timestamptz default now()
);

create table if not exists sig_clicks (
  id bigint generated always as identity primary key,
  slug text references sig_links(slug),
  clicked_at timestamptz default now(),
  user_agent text,
  referrer text,
  country text,
  city text,
  device text  -- mobile | desktop | unknown
);

create index if not exists sig_clicks_slug_clicked_at_idx
  on sig_clicks (slug, clicked_at desc);

alter table sig_links enable row level security;
alter table sig_clicks enable row level security;

-- The /go/<slug> redirect runs with the publishable (anon) key:
-- it may read active links and record clicks, nothing else.
create policy "anon reads active sig links" on sig_links
  for select to anon using (active);

create policy "anon inserts sig clicks" on sig_clicks
  for insert to anon
  with check (
    slug is not null
    and coalesce(length(user_agent), 0) <= 1000
    and coalesce(length(referrer), 0) <= 1000
    and coalesce(length(country), 0) <= 100
    and coalesce(length(city), 0) <= 200
    and device in ('mobile', 'desktop', 'unknown')
  );

insert into sig_links (slug, destination, label) values
  ('site', 'https://brandonmicci.com', 'Website'),
  ('linkedin', 'https://linkedin.com/in/brandonmicci', 'LinkedIn'),
  ('phone', 'tel:+16103100066', 'Phone'),
  ('featured', 'https://brandonmicci.com/executive-brief.pdf', 'Executive Brief'),
  ('calendar', 'https://brandonmicci.com/contact', 'Calendar')
on conflict (slug) do nothing;
