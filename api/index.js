// Vercel serverless function for TanStack Start
export default async function (req, res) {
  try {
    // Dynamically import the server handler
    const { default: handler } = await import('../dist/server/index.js');
    
    // Build full URL
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const url = `${protocol}://${host}${req.url}`;
    
    // Create Web API Request
    const request = new Request(url, {
      method: req.method,
      headers: new Headers(req.headers),
    });

    // Get response from TanStack Start server
    const response = await handler.fetch(request, {}, {
      waitUntil: () => {},
      passThroughOnException: () => {}
    });

    // Set status and headers
    res.status(response.status);
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Send body
    const body = await response.text();
    res.send(body);
    
  } catch (error) {
    console.error('Serverless function error:', error);
    console.error('Error stack:', error.stack);
    res.status(500).send(`
      <!DOCTYPE html>
      <html>
        <head><title>500 Error</title></head>
        <body>
          <h1>Internal Server Error</h1>
          <p>Something went wrong. Please try again later.</p>
          <pre style="background: #f5f5f5; padding: 10px; margin-top: 20px;">${error.message}</pre>
        </body>
      </html>
    `);
  }
}
