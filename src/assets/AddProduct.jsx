// src/components/AddProduct.jsx
import { useState } from 'react';
import axios from 'axios';

export default function AddProduct() {
  const [form, setForm] = useState({ name: '', price: '', quantity: '', picture: '' });
  const [uploading, setUploading] = useState(false);

  // CLOUDINARY UPLOAD FUNCTION
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ecommerce'); // ← CREATE THIS IN CLOUDINARY

    try {
      const res = await axios.post(
        '',
        formData
      );
      setForm({ ...form, picture: res.data.secure_url });
      alert('Image uploaded!');
    } catch (err) {
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.picture) return alert('Upload an image first!');

    try {
      await axios.post('/api/products', {
        name: form.name,
        price: (form.price),
        quantity: Number(form.quantity),
        picture: form.picture,
      });
      alert('Product added!');
      setForm({ name: '', price: '', quantity: '', picture: '' });
    } catch (err) {
      alert('Error');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          required
        />

        <div style={{ margin: '15px 0' }}>
          <label>Product Image:</label><br />
          <input type="file" accept="image/*" onChange={uploadImage} disabled={uploading} />
          {uploading && <p>Uploading...</p>}
          {form.picture && (
            <div>
              <img src={form.picture} alt="preview" width="150" style={{ marginTop: 10 }} />
            </div>
          )}
        </div>

        <button type="submit" disabled={uploading || !form.picture}>
          Add Product
        </button>
      </form>
    </div>
  );
}

