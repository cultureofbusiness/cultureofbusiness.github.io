import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ArticleList from './pages/ArticleList'
import Article from './pages/Article'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="site">
      <header className="site-header a24-header">
        <div className="a24-nav-left">
          <button className="menu-btn" onClick={() => setMenuOpen(true)}>
            <span className="menu-icon">&#9776;</span> MENU
          </button>
        </div>
        <div className="site-title a24-title">Culture of Business</div>
        <div className="a24-header-right" />
      </header>

      <div className={`menu-overlay${menuOpen ? ' open' : ''}`}> 
        <button className="close-btn" onClick={() => setMenuOpen(false)}>&times;</button>
        <nav className="menu-nav">
          <Link to="" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="articles" onClick={() => setMenuOpen(false)}>Article List</Link>
        </nav>
      </div>

      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:slug" element={<Article />} />
        </Routes>
      </main>
    </div>
  )
}
