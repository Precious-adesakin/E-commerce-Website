// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <nav
        style={{
        backgroundColor: 'black',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}
    >
        <div
        style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '60px',
        }}
        >
        {/* LOGO / HOME */}
        <Link
            to="/home"
            style={{
            color: '#f9a825',
            fontSize: '24px',
            fontWeight: 'bold',
            textDecoration: 'none',
            }}
        >
            TechStore
        </Link>

        {/* DESKTOP LINKS */}
        <div
            className="d-none d-md-flex"
            style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
            }}
        >
            <Link to="/home" style={navLinkStyle}>
            Home
            </Link>
            <Link to="/log" style={navLinkStyle}>
            Log In
            </Link>
            <Link to="/sign" style={navLinkStyle}>
            Sign Up
            </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
            background: 'none',
            border: 'none',
            color: '#f9a825',
            fontSize: '28px',
            cursor: 'pointer',
            display: 'block',
            padding: '8px',
            }}
            className="d-md-none"
        >
            {isOpen ? '✖' : 'Menu'}
        </button>
        </div>

      {/* MOBILE MENU */}
        {isOpen && (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
            // backgroundColor: 'black',
            color: '#f9a825',
            borderTop: '1px solid #e0e0e0',
            padding: '16px 0',
            }}
        >
            <div
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 16px',
                display: 'flex',
                flexDirection: 'column',
            gap: '16px',
            }}
            >
            <Link
                to="/home"
                style={mobileLinkStyle}
                onClick={() => setIsOpen(false)}
            >
                Home
            </Link>
            <Link
                to="/log"
                style={mobileLinkStyle}
                onClick={() => setIsOpen(false)}
            >
                Log In
            </Link>
            <Link
                to="/sign"
                style={mobileLinkStyle}
                onClick={() => setIsOpen(false)}
            >
                Sign Up
            </Link>
            </div>
        </motion.div>
        )}
    </nav>
    );
};

// STYLES
const navLinkStyle = {
    color: '#f9a825',
    fontSize: '18px',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'color 0.2s',
};

const mobileLinkStyle = {
    color: '#f9a825',
    fontSize: '20px',
    ontWeight: '600',
    textDecoration: 'none',
    padding: '12px 0',
    textAlign: 'center',
};

export default Navbar;