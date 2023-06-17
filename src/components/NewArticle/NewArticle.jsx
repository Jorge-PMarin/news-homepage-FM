import React from 'react'
import './new-article.css'

export default function NewArticle({title, body}) {
  return (
    <section className='newArticle'>
        <h3 className="newArticle-heading">{title}</h3>
        <p className="newArticle-body">{body}</p>
    </section>
  )
}
