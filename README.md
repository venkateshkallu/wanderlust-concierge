# Voyago India - Premium Travel Platform

A modern, production-ready travel booking platform built with TanStack Start, React, and TypeScript.

## 🚀 Features

- **India Tours** - Curated tours across North, South, East, and West India
- **International Tours** - Premium international holiday packages
- **Car & Bus Rentals** - Vehicle rental services for all needs
- **Travel Blog** - Destination guides and travel inspiration
- **WhatsApp Integration** - Instant booking and quotes via WhatsApp
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **SSR & SEO Optimized** - Server-side rendering for better performance and SEO

## 📁 Project Structure

```
voyago-india/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # React components
│   │   ├── site/       # Site-specific components
│   │   └── ui/         # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and data
│   ├── routes/         # TanStack Router pages
│   ├── polyfills.ts    # Browser polyfills
│   ├── router.tsx      # Router configuration
│   ├── server.ts       # Server entry point
│   ├── start.ts        # TanStack Start configuration
│   └── styles.css      # Global styles
├── api/                # Vercel serverless functions
├── deployment/         # Docker and deployment configs
├── docs/              # Documentation
├── scripts/           # Build and deployment scripts
├── public/            # Public static files
└── package.json       # Dependencies and scripts
```

## 🛠️ Tech Stack

- **Framework:** TanStack Start (React SSR)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI
- **Forms:** React Hook Form + Zod
- **Routing:** TanStack Router
- **State Management:** TanStack Query
- **Build Tool:** Vite
- **Deployment:** Vercel

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

Or use the deployment script:
```bash
./scripts/deploy-vercel.sh
```

See [docs/DEPLOY.md](docs/DEPLOY.md) for detailed deployment instructions.

### Docker

```bash
# Development
docker-compose -f deployment/docker-compose.dev.yml up

# Production
docker-compose -f deployment/docker-compose.yml up
```

See [docs/DOCKER_README.md](docs/DOCKER_README.md) for Docker setup.

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=production
VITE_WHATSAPP_NUMBER=919121878363
```

### Vercel Configuration

The project includes `vercel.json` with optimized settings for:
- Serverless functions
- Static asset caching
- Security headers
- Automatic redirects

## 📱 Features in Detail

### Tours System
- Region-based tour organization (North, South, East, West India)
- Detailed itineraries with pricing
- Sample day-by-day breakdowns
- WhatsApp booking integration

### Vehicle Rentals
- Multiple vehicle categories (Economy, Sedan, SUV, Luxury, Tempo, Bus)
- Detailed specifications and pricing
- Instant WhatsApp quotes

### Blog System
- Travel guides and destination articles
- Category-based organization
- SEO-optimized content

## 🎨 Design System

- **Colors:** Luxury cinematic travel palette
- **Typography:** Playfair Display (headings) + Inter (body)
- **Components:** Glass morphism effects, gradient accents
- **Animations:** Smooth reveal animations, hover effects

## 🔒 Security

- XSS protection headers
- Content Security Policy
- HTTPS enforcement (Vercel)
- Input validation with Zod
- Secure form handling

## 📊 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Optimized images and assets
- Code splitting and lazy loading

## 🧪 Testing

```bash
# Run linter
npm run lint

# Format code
npm run format
```

## 📝 License

Private - All rights reserved

## 👥 Support

For support, email concierge@voyagoindia.com or message us on WhatsApp at +91 91218 78363.

## 🗺️ Roadmap

- [ ] Payment gateway integration
- [ ] User authentication
- [ ] Booking management dashboard
- [ ] Multi-language support
- [ ] Advanced search and filters
- [ ] Customer reviews and ratings

---

Built with ❤️ for travelers by Voyago India
