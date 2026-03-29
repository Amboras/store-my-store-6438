# Storefront AI Instructions

You are working on a Medusa v2 eCommerce storefront built with Next.js (App Router), React 19, Tailwind CSS, and the Medusa JS SDK.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Server Components by default)
- **Styling**: Tailwind CSS (no custom CSS unless absolutely necessary)
- **Data**: Medusa JS SDK via `lib/medusa-client.ts`
- **State**: React hooks + TanStack Query for server state
- **Forms**: React Hook Form + Zod validation
- **Payments**: Stripe (react-stripe-js)
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Project Structure

```
app/                    # Pages (App Router)
  page.tsx              # Homepage
  products/             # Product listing + detail ([handle])
  collections/          # Collection listing + detail ([handle])
  checkout/             # Checkout + success
  account/              # Customer account (orders, addresses, profile)
  auth/                 # Login, register, forgot password
  search/               # Search results
  about/, contact/, faq/, privacy/, terms/, shipping/  # Static pages
components/
  layout/               # Header, footer, announcement bar
  product/              # Product card, grid, actions, add-to-cart
  cart/                 # Cart drawer
  checkout/             # Stripe payment form
  account/              # Account layout
  marketing/            # Collection section (homepage)
lib/
  medusa-client.ts      # Medusa JS SDK instance
hooks/                  # Custom React hooks
types/                  # TypeScript types
```

## Rules

- Always use Tailwind CSS for styling
- Prefer editing existing components over creating new ones
- Use Server Components by default, only add 'use client' when needed
- Fetch data via Medusa JS SDK, never direct API calls
- Keep changes minimal and focused
- Read a file before editing it
- Follow existing naming conventions and patterns in the project
