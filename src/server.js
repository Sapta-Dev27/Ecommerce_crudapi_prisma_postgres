import express from 'express';
import 'dotenv/config';

import product from './routes/products.js';
import category from './routes/category.js'

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json())

app.use('/api/v1/products', product);
app.use('/api/v1/category', category);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})