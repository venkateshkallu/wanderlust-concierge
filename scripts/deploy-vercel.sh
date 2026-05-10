#!/bin/bash

echo "🚀 Deploying Voyago India to Vercel..."
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🌐 Deploying to Vercel..."
    
    # Deploy to production
    vercel --prod
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Deployment successful!"
        echo ""
        echo "🎉 Your site is now live on Vercel!"
        echo ""
        echo "Next steps:"
        echo "1. Visit your Vercel dashboard to see the deployment"
        echo "2. Configure custom domain if needed"
        echo "3. Set up environment variables if required"
    else
        echo "❌ Deployment failed. Check the error messages above."
        exit 1
    fi
else
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi
