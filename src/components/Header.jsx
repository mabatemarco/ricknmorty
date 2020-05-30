import React from 'react';
import '../css/header.css';
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav>
        <Link to='/'>
          <p>Home</p>
        </Link>
        <Link to='/create'>
          <p>Create a new Character</p>
          </Link>
      </nav>
    </header>
  )
}
