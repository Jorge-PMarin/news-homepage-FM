import React from 'react';
import './article.css';

export default function Article({ position, title, body, image }) {
  return (
    <article className="article">
      <img
        src={image}
        alt="post image"
        aria-hidden="true"
        className="article-image"
      />
      <div className="article-wrapper">
        <span className="article-position">{position}</span>
        <h2 className="article-title">{title}</h2>
        <p className="article-body">{body}</p>
      </div>
    </article>
  );
}
