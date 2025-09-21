import React from 'react'
import { Link } from 'react-router-dom'

const articles = ['april', 'may', 'june', 'july', 'august']

export default function Home() {
  return (
    <div className="home-container">
      <section className="intro">
        <p>
          August Issue Preview: Lorem Ipsum....
        </p>
      </section>
      <div className="group-photo">*group image*</div>
      <div className="bio">brief bio...</div>
    </div>
  )
}
