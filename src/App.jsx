import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ArticleList from './pages/ArticleList'
import Article from './pages/Article'

export default function App() {
  return (
    <div className="site">
      <header className="site-header">
        <h1 className="site-title">Culture of Business</h1>
        <nav className="site-nav">
          <Link to="">Home</Link>
          <Link to="about">About Us</Link>
          <Link to="articles">Article List</Link>
        </nav>
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
