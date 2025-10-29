// src/components/AdminDashboard.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AdminDash() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/products')
      .then(res => {
        console.log('Products:', res.data); // ← CHECK THIS
        setProducts(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setProducts([]);
        setLoading(false);
      });
  }, []);

  const deleteProduct = async (id) => {
    if (!confirm('Delete?')) return;
    await axios.delete(`/api/products/${id}`);
    setProducts(products.filter(p => p._id !== id));
  };

  if (loading) return <p>Loading...</p>;
  if (!products.length) return <p>No products. Add one!</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>
      <Link to="/admin/add">
        <button style={{ marginBottom: 20 }}>Add Product</button>
      </Link>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p._id}>
              <td><img src={p.picture || 'https://via.placeholder.com/50'} width="50" /></td>
              <td>{p.name}</td>
              <td>₦{p.price}</td>
              <td>{p.quantity}</td>
              <td>
                <button onClick={() => deleteProduct(p._id)} style={{ color: 'red' }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// export default AdminDash