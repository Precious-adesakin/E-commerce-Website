// src/components/CartNavLink.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../assets/Cartcontent';

export default function CartNavLink() {
  const { cart } = useCart(); // SAFE: inside Provider

  return (
    <Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>
      Cart ({cart.length})
    </Link>
  );
}