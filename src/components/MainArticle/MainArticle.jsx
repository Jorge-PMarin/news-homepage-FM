import React from 'react';
import ArticleImgDesktop from '../../assets/images/image-web-3-desktop.jpg';
import ArticleImgMobile from '../../assets/images/image-web-3-mobile.jpg';
import './main-article.css';

export default function MainArticle({ title, body }) {
  return (
    <article className="mainArticle">
      <div className="mainArticle-top">
        <img
          src={ArticleImgDesktop}
          alt=""
          aria-hidden="true"
          className="mainArticle-img-desktop"
        />
        <img
          src={ArticleImgMobile}
          alt=""
          aria-hidden="true"
          className="mainArticle-img-mobile"
        />
      </div>
      <div className="mainArticle-bottom">
        <h1 className="mainArticle-heading">{title}</h1>
        <div className="mainArticle-body">
          <p className="mainArticle-paragraph">{body}</p>
          <button className="mainArticle-btn">Read more</button>
        </div>
      </div>
    </article>
  );
}
