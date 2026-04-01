# Vertex

Mobile-first prototype for a premium smart living storefront in Baku.

## Stack

- Next.js App Router
- React
- TypeScript

## Features

- Premium dark-mode landing page for 5 branded products
- RU/AZ language switch
- QuickBuy form with only name and phone
- Telegram owner notifications for new orders
- Sticky mobile CTA and WhatsApp consult button
- Fade-in scroll reveal and content-protection behavior

## Run locally

1. Install Node.js 20+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Fill in:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
5. Run `npm run dev`.

## Telegram setup

- Create a bot with BotFather.
- Start a chat with the bot.
- Get the target chat ID for Jalil.
- Every QuickBuy submission posts a formatted message through `/api/orders`.

## Media optimization notes

- Replace the current atmospheric visual placeholders with local files in `public/media/`.
- Recommended hero assets:
  - `hero-loop.webm`
  - `hero-loop.mp4`
- Recommended product loops:
  - `gravity-loop.webm`
  - `secure-touch-loop.webm`
  - `glide-loop.webm`
  - `prism-loop.webm`
  - `pulse-dock-loop.webm`
- Keep each loop around 3-5 seconds, muted, compressed for mobile-first loading.
- Prefer WebM for primary delivery and MP4 as fallback.

## WhatsApp

Update the placeholder number in `components/vertex-landing.tsx`:

- `https://wa.me/994706642848`

## Notes

- The workspace did not have Node.js installed, so build verification could not be completed in this environment.
