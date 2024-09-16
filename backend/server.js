const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const port = 3000;

// Use default middlewares (logger, static files, etc.)
server.use(middlewares);

// Custom route to add `/api` prefix to all routes
server.use('/api', router);

// Start the server
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}/api`);
});


// npm run dev