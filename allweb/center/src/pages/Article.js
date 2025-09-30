import React from 'react';
import '../style/article.scss';

import Menu from './object/Menu';
import MenuPage from './object/MenuPage';
import ArticleCard from './object/ArticleCard';
import Footer from './object/Footer';

import articles from '../data/articlesData';

const Article = () => {
    return (
        <div className='w100 article-card'>
            <Menu />
            <MenuPage title="最新文章" />
            <div className='content c'>
                {articles.map(article => (
                    <ArticleCard
                        key={article.id}
                        id={article.id}
                        img={article.img}
                        label={article.label}
                        title={article.title}
                        describe={article.describe}
                        labels={article.labels}
                        date={article.date}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Article;
