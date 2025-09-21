import React from 'react'
import { Link } from 'react-router-dom'

const articles = ['april', 'may', 'june', 'july', 'august']

export default function Home() {
  return (
    <div className="home-container">
      <section className="intro">
        <p>
          Welcome to Culture of Business, a monthly publication made by the
          titular club at Brooklyn Technical High School. We discuss different
          markets in New York City, creating informative and clear articles
          about them.
        </p>
      </section>

      <aside className="articles-list">
        <h3>*list of articles*</h3>
        <ul>
          {articles.map((a) => (
            <li key={a}>
              <Link to={`/articles/${a}`}>{a.charAt(0).toUpperCase() + a.slice(1)}</Link>
            </li>
          ))}
        </ul>
      </aside>

      <div className="group-photo">*group image*</div>
    </div>
  )
}
