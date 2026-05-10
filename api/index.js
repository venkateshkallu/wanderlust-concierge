// Vercel serverless function entry point for TanStack Start
import { createServer } from '../.output/server/index.mjs';

const server = createServer();

export default async function handler(req, res) {
  try {
    const url = new URL(req.url || '/', `http://${req.headers.host}`);
    
    const request = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req.body : undefined,
    });

    const response = await server.fetch(request);
    
    // Set response headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    
    // Set status
    res.status(response.status);
    
    // Send body
    const body = await response.text();
    res.send(body);
  } catch (error) {
    console.error('Vercel handler error:', error);
    res.status(500).send('Internal Server Error');
  }
}
