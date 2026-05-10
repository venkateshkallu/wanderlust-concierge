#!/usr/bin/env node
import { writeFileSync, mkdirSync, cpSync, existsSync } from 'fs';
import { join } from 'path';

const outputDir = '.vercel/output';

// Clean and create output directory structure
mkdirSync(join(outputDir, 'functions', 'index.func'), { recursive: true });
mkdirSync(join(outputDir, 'static'), { recursive: true });

// Create config.json for Vercel Build Output API
const config = {
  version: 3,
  routes: [
    {
      src: '^/assets/(.*)$',
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
      continue: true
    },
    {
      handle: 'filesystem'
    },
    {
      src: '/(.*)',
      dest: '/index'
    }
  ]
};

writeFileSync(
  join(outputDir, 'config.json'),
  JSON.stringify(config, null, 2)
);

// Copy static assets if they exist
if (existsSync('dist/client')) {
  cpSync('dist/client', join(outputDir, 'static'), { recursive: true });
}

// Create function config
const funcConfig = {
  runtime: 'nodejs24.x',
  handler: 'index.js',
  launcherType: 'Nodejs'
};

writeFileSync(
  join(outputDir, 'functions', 'index.func', '.vc-config.json'),
  JSON.stringify(funcConfig, null, 2)
);

// Copy server bundle
if (existsSync('dist/server')) {
  cpSync('dist/server', join(outputDir, 'functions', 'index.func'), { recursive: true });
}

console.log('✓ Vercel build output generated');
