# EDUZONE frontend demo

A responsive React, Vite and TypeScript frontend for EDUZONE. The project uses React Router for page navigation, Framer Motion for transitions, Lucide icons and Tailwind CSS alongside a custom editorial stylesheet.

## Run locally

1. Install Node.js 20 or later.
2. Run `npm install`.
3. Run `npm run dev` and open the local URL Vite prints.
4. Run `npm run build` to produce the static site in `dist/`.

## Deploy to Vercel

Import this project into Vercel. Set the build command to `npm run build` and the output directory to `dist`. Vercel detects Vite automatically and serves the app entry for client-side routes.

## Assets and content

Put the official EDUZONE logo at `public/assets/eduzone-logo.jpg`. The site uses that file in the header, footer and favicon. Photos currently load from Unsplash and are labelled as illustrative; they do not represent EDUZONE's campus, students or staff. Faculty names and published roles, course offerings, address, phone numbers and business hours are based on EDUZONE's public website. Student outcomes and testimonials are not presented.

Contact form submissions are prepared in WhatsApp for the visitor to review and send. No information is sent to a backend.
