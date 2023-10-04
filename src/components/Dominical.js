import React from 'react'
import { Link } from 'react-router-dom';
import articles from '../data/articles';

function Dominical() {
  const dominicalArticles = articles.filter((article) => article.location === 'Dominical');

  return (
    <div className='dominical background-container'>
      <div className="text-container">
          <h1>Dominical</h1>
      <p>
              Nestled along the picturesque coastline of Costa Rica's Pacific Ocean, the town of Dominical stands as a hidden gem waiting to be discovered by adventurous travelers and nature enthusiasts. With its unspoiled natural beauty, laid-back atmosphere, and vibrant culture, Dominical offers a unique blend of relaxation and adventure that makes it a must-visit destination for anyone exploring this stunning region of Central America.
          </p>
          <ul className="article-list">
              {dominicalArticles.map((article) => (
                <li key={article.title}>
                  <Link to={`/article/${article.id}`}>{article.title}</Link>
                </li>
              ))}
          </ul>
      </div>  
    </div>
  )
}

export default Dominical