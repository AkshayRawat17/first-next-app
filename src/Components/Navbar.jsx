import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <ul className='navbar-container'>
                <li className='list-item'><Link className='nav-links' href="/">Home</Link></li>
                <li className='list-item'><Link className='nav-links' href="/about">About</Link></li>
                <li className='list-item'><Link className='nav-links' href="/contact">Contact</Link></li>
                <li className='list-item'><Link className='nav-links' href="/profile">Profile</Link></li>
            </ul>
        </>
    )
}
