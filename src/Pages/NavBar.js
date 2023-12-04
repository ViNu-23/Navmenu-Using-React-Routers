import React from 'react'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark nav-bar">
    <a className="navbar-brand" href='/'><i className="bi bi-person-circle"></i></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav nav-bar">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/more">More</a>
        </li>
      </ul>
    </div>
  </nav>
  
  )
}
