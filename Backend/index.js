// server.js
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());

// ---------- MONGODB ----------
const uri = "YOUR_MONGODB_URI"; // ← REPLACE WITH YOUR ATLAS URI
const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db('e-commerce_db');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB failed:', err.message);
    process.exit(1);
  }
}

// ---------- ROUTES ----------
app.get('/api/products', async (req, res) => {
  try {
    const products = await db.collection('products').find().toArray();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch' });
  }
});

app.post('/api/products', async (req, res) => {
  const { name, price, quantity, picture } = req.body;
  if (!name || !price || !quantity) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  try {
    const result = await db.collection('products').insertOne({
      name,
      price: Number(price),
      quantity: Number(quantity),
      picture: picture || 'https://via.placeholder.com/150',
      createdAt: new Date(),
    });
    res.status(201).json({ message: 'Added', id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.collection('products').deleteOne({ _id: new ObjectId(id) });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

// ---------- START ----------
const PORT = 5173;

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`API LIVE: http://localhost:${PORT}`);
    console.log(`Test: http://localhost:${PORT}/api/products`);
  });
})();