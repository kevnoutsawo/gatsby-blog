import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
        <div style={{
            background: '#f4f4f4',
            paddingTop: '10x'
        }}>
            
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/services">services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
        </ul>

        </div>
    )

export default Menu
