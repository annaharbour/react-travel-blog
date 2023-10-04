import React from 'react'
import { Link } from 'react-router-dom';
import articles from '../data/articles';


function Jaco() {
  const jacoArticles = articles.filter((article) => article.location === 'Jaco');

  return (
    <div className='background-container jaco'>
    <div className="low-opacity text-container">
        <h1>Jaco</h1>
		<p>
        Nestled along the Central Pacific coast of Costa Rica, Jaco is a vibrant beach town that offers an irresistible mix of natural beauty, thrilling adventures, and a laid-back atmosphere. Known for its world-class surf breaks, lively nightlife, and proximity to pristine rainforests, Jaco is a haven for travelers seeking a perfect blend of relaxation and excitement. 
        <br></br>
        Jaco, Costa Rica, is a destination that caters to surfers, adventure seekers, nature enthusiasts, and those simply looking to unwind by the beach. Its winning combination of thrilling activities, natural beauty, and a vibrant local culture make it a must-visit spot on Costa Rica's Pacific coast. Whether you're riding the waves, exploring the rainforest, or enjoying the nightlife, Jaco promises an unforgettable experience in the heart of Pura Vida country.
        </p>
        <ul className="article-list">
        {jacoArticles.map((article) => (
                <li key={article.title}>
                  <Link to={`/article/${article.id}`}>{article.title}</Link>
                </li>
              ))}
        </ul>
    </div>  
    </div>
  )
}

export default Jaco