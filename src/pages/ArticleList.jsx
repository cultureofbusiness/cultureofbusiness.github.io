import React from 'react'
import { Link } from 'react-router-dom'

const months = ['april', 'may', 'june', 'july', 'august']

export default function ArticleList() {
  return (
    <div className="article-list-page">
      <h2>Articles</h2>
      <ul>
        {months.map((m) => (
          <li key={m}>
            <Link to={`/articles/${m}`}>{m.charAt(0).toUpperCase() + m.slice(1)}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
