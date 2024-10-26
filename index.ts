import express from 'express';
import tokenRoute from './src/routes/token-route';
import { loadConfig } from './src/config/config';

const config = loadConfig('src/config/config.yaml');
const app = express();
const PORT = config.server.port;


// Middleware to parse JSON
app.use(express.json());



app.use('/api', tokenRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
