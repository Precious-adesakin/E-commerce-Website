// src/components/Nav.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../assets/Cartcontent';

const Nav = () => {
  const { cart } = useCart();  // SAFE

    return (
    <nav style={{ /* your style */ }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
        Cart ({cart.length})
        </Link>
        <Link to="/cart"> 
        <button>Cart</button>
        </Link>
      // YOUR OTHER LINKS
    </nav>
    );
};