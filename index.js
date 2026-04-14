const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Docker Demo App</title>
      <style>
        body { font-family: Arial; text-align: center; padding: 50px; }
        h1 { color: #0db7ed; }
        .container { border: 2px solid #0db7ed; border-radius: 10px; padding: 20px; max-width: 500px; margin: 0 auto; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🐳 Docker is Working!</h1>
        <p>This app is running inside a Docker container</p>
        <p>Hostname: ${require('os').hostname()}</p>
        <p>Time: ${new Date().toLocaleString()}</p>
      </div>
    </body>
    </html>
  `);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
