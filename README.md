# Flash Gift Delivery - Luxury Flower Delivery Application

A high-converting luxury flower delivery web application with a complete sales funnel, admin dashboard, and order tracking system.

## Project Overview

Flash Gift Delivery is a premium 2-hour rose delivery service targeting affluent busy professionals who need to impress their partners quickly. The application features:

- **Conversion-Optimized Landing Page** with emotional, persuasive copy
- **Complete Sales Funnel** (Checkout → Upsell → Downsell → Thank You)
- **Admin Dashboard** for order management
- **Order Tracking System** for customers
- **Store Management** with closure functionality and service area configuration

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with luxury color scheme
- **Database**: PostgreSQL (Prisma ORM)
- **Payments**: Stripe Checkout + Payment Intents
- **Authentication**: NextAuth.js for admin
- **External Services**: Google Places API for address autocomplete

## Color Scheme (Luxury Theme)

- Primary Gold: `#d4af37`
- Primary Dark: `#b8941f`
- Secondary (Black): `#0a0a0a`
- Background: `#fafafa`
- Accent: `#f5f5dc`
- Success: `#50c878`
- Error: `#dc143c`

## Database Schema

### Order Model
- Complete order tracking from checkout through delivery
- Supports main product, order bumps, upsells, and downsells
- Greeting card customization
- Delivery time slot management
- Photo proof of delivery

### StoreSettings Model
- Singleton model for global store configuration
- Phone number management
- Metro area with coordinates and radius
- Store closure functionality with reopen date

## Business Logic

### Package Options
1. **50 Red Roses** - $399 (The Grand Gesture)
2. **24 Red Roses** - $299 (The Classic - Most Popular)
3. **12 Red Roses** - $249 (The Essential)

### Sales Funnel
1. **Landing Page** → Package selection
2. **Checkout** → 2-step process with order bump ($79 crystal vase)
3. **Upsell 1** → Complete Romance Package ($199)
4. **Downsell 1** → Essentials Package ($89)
5. **Thank You** → Order confirmation with complete summary

### Delivery Logic
- 2-hour delivery guarantee
- Operating hours: 7 AM - 7 PM daily
- Service area validation using coordinates and radius
- Dynamic time slot calculation (2 hours from now, in 30-min increments)

## Admin Credentials

- **Username**: `mgarcia4`
- **Password**: `FlashG1ft2024!Secure`

## Environment Variables

See `.env.example` for required environment variables:

```env
DATABASE_URL=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

## Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your actual values

# Generate Prisma client (when database is available)
# npx prisma generate

# Run database migrations (when database is available)
# npx prisma migrate dev

# Start development server
npm run dev
```

## Project Structure

```
/app
  page.tsx                  # Landing page with conversion copy
  /checkout                 # 2-step checkout flow (TODO)
  /upsell-1                 # Complete Romance Package upsell (TODO)
  /downsell-1               # Essentials Package downsell (TODO)
  /thank-you                # Order confirmation page (TODO)
  /track                    # Order tracking (TODO)
  /admin                    # Admin dashboard (TODO)

/lib
  prisma.ts                 # Prisma client singleton
  store-settings.ts         # Store settings helpers
  utils.ts                  # Utility functions

/prisma
  schema.prisma             # Database schema (Order + StoreSettings)
```

## Development Status

### ✅ Completed
- [x] Next.js 14 project initialization with TypeScript
- [x] Tailwind CSS configuration with luxury theme
- [x] Prisma schema (Order and StoreSettings models)
- [x] Landing page with conversion-focused copy
- [x] Luxury fonts (Inter + Playfair Display)
- [x] Store settings utility functions
- [x] Environment variables structure
- [x] Project documentation

### 🚧 To Be Implemented
- [ ] Complete remaining landing page sections (Social Proof, FAQ, etc.)
- [ ] Checkout flow (2-step with order bump)
- [ ] Stripe payment integration
- [ ] Upsell page (Complete Romance Package - $199)
- [ ] Downsell page (Essentials Package - $89)
- [ ] Thank you/confirmation page
- [ ] Order tracking page
- [ ] Admin authentication (NextAuth)
- [ ] Admin dashboard with orders list
- [ ] Admin order details page
- [ ] Admin settings page
- [ ] Google Places API integration
- [ ] Service area validation logic
- [ ] Email notifications
- [ ] Legal pages (Terms, Privacy, Refund, Contact)
- [ ] Store closure overlay functionality
- [ ] Responsive mobile optimization
- [ ] Database migrations and seeding

## Copywriting Philosophy

All copy follows these principles:
- **Emotional Triggers**: Fear of loss, time scarcity, social proof, instant gratification
- **Target Audience**: Busy affluent men (30+, $200K+ income) who forgot important occasions
- **Tone**: Conversational, direct, helpful ("We've got you covered")
- **Focus**: Relationship insurance, peace of mind, being the hero

## Key Features (Planned)

### Landing Page Sections
1. ✅ Hero with main value proposition
2. ✅ "As Seen On" media logos
3. ✅ Problem/Solution framework
4. ✅ Three pricing tiers with "Most Popular" highlight
5. ✅ Package comparison with CTA buttons
6. ⏳ Social proof testimonials
7. ⏳ How It Works (3 steps)
8. ⏳ FAQ section
9. ⏳ Guarantee section
10. ⏳ Final CTA with urgency

### Checkout Features (Planned)
- Google Places autocomplete for addresses
- Service area validation
- Delivery time slot selection (dynamic, 2-hour windows)
- Optional greeting card customization
- Order bump (crystal vase - $79)
- Stripe Checkout integration

### Admin Features (Planned)
- Order management with status updates
- Delivery photo upload
- Store closure functionality
- Service area configuration (metro area + radius)
- Phone number management
- Order filtering and search

## Running the Application

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Next Steps

1. Complete remaining landing page sections
2. Implement checkout flow with Stripe
3. Build upsell/downsell pages
4. Create admin dashboard
5. Add order tracking functionality
6. Integrate Google Places API
7. Set up email notifications
8. Deploy to Vercel

## Notes

- Database connection requires PostgreSQL instance (configure DATABASE_URL in .env)
- Stripe integration requires test/production keys
- Google Places API key needed for address autocomplete
- Admin password: `FlashG1ft2024!Secure` (change in production)

## License

Proprietary - Flash Gift Delivery © 2025
