import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../data/articlesData';
import '../style/article.scss';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === parseInt(id));

  if (!article) return <div>文章不存在</div>;

  return (
    <div className="article-detail">
      <h1 className="title">{article.title}</h1>
      <div className="meta">
        <div className="author">
          <img className="avatar" src={article.posterImg} alt={article.posterName} />
          <div className="info">
            <span className="name">{article.posterName}</span>
            <span className="date">{article.date}</span>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={article.img} alt={article.title} />
      </div>
      <div className="content">
        {article.content.map((item, index) => {
          if (typeof item === "string") {
            return <p key={index}>{item}</p>;
          } else if (item.type === "image") {
            return (
              <figure key={index}>
                <img src={item.src} alt={item.alt} />
                {item.caption && <figcaption>{item.caption}</figcaption>}
              </figure>
            );
          } else if (item.type === "highlight") {
            return <p key={index} className="highlight">{item.text}</p>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ArticleDetail;
