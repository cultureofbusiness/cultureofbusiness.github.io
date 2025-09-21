import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ArticleList from './pages/ArticleList'
import Article from './pages/Article'

export default function App() {
  return (
    <div className="site">
      <header className="site-header a24-header">
        <nav className="site-nav a24-nav">
          <Link to="">Home</Link>
          <Link to="about">About Us</Link>
          <Link to="articles">Article List</Link>
        </nav>
        <div className="site-title a24-title">Culture of Business</div>
        <div className="a24-header-right" />
      </header>

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
