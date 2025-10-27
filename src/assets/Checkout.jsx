// src/pages/CheckoutSuccess.jsx
import { Link } from 'react-router-dom';

const Checkout = () => (
    <div style={{ padding: '100px 40px', textAlign: 'center', backgroundColor: '#121212', color: '#fff' }}>
    <h1>Payment Successful!</h1>
    <p>Thank you for your purchase.</p>
    <Link to="/dash">
        <button style={{ backgroundColor: '#f9a825', color: '#000', padding: '14px 32px', border: 'none', borderRadius: '30px', marginTop: '20px' }}>
        Continue Shopping
        </button>
    </Link>
    </div>
);

export default Checkout;