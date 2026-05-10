# Project Structure

Production-grade folder organization for Voyago India travel platform.

## Directory Layout

```
voyago-india/
├── api/                    # Vercel serverless functions
├── deployment/             # Docker configurations
├── docs/                   # Documentation
├── scripts/                # Deployment scripts
├── src/                    # Source code
│   ├── assets/            # Images and static files
│   ├── components/        # React components
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilities and data
│   └── routes/            # Page routes
├── vercel.json            # Vercel config
└── package.json           # Dependencies
```

## Key Directories

- **src/routes/** - TanStack Router pages
- **src/components/site/** - Custom components
- **src/components/ui/** - Reusable UI components
- **src/lib/data.ts** - All tour and vehicle data
- **deployment/** - Docker files
- **docs/** - Project documentation
