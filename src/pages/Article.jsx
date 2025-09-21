import React from 'react'
import { useParams } from 'react-router-dom'

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Integer non velit nec nulla ultricies feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`

export default function Article() {
  const { slug } = useParams()

  return (
    <article className="article-page">
      <h2>{slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : 'Article'}</h2>
      <p>{lorem}</p>
      <p>{lorem}</p>
      <p>{lorem}</p>
    </article>
  )
}
