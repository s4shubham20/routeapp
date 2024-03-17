import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';
export default function () {
  return (
    <>
        <h1>Header Part</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to="/contact">Contactus</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/form">Form</Link></li>
                <li><Link to="/enquiry">Enquiry</Link></li>
            </ul>
        </nav>
    </>
  )
}
