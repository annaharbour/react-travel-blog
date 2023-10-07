import React from 'react'
import { Link } from 'react-router-dom'
import articles from '../data/articles'

function LaFortuna() {
  const laFortunaArticles = articles.filter((article) => article.location === 'La Fortuna');

  return (
    <div className='la-fortuna background-container'>
      <div className="text-container">
          <h1>La Fortuna, Costa Rica</h1>
      <p>
              Nestled at the base of the majestic Arenal Volcano, La Fortuna is a small town in Costa Rica that beckons travelers with its enchanting blend of natural beauty, adventure, and culture. Known for its breathtaking landscapes, thermal hot springs, and lush rainforests, La Fortuna is a must-visit destination for those seeking an authentic Costa Rican experience. Its proximity to the Arenal Volcano, natural hot springs, and diverse array of outdoor activities make it a destination that captures the essence of Costa Rica's Pura Vida spirit. Whether you're hiking through the rainforest, basking in thermal waters, or exploring the town's vibrant culture, La Fortuna promises an unforgettable journey into one of nature's wonders.
          </p>
          <ul>
          {laFortunaArticles.map((article) => (
                <li key={article.title}>
                  <Link to={`/article/${article.id}`}>{article.title}</Link>
                </li>
              ))}
          </ul>
      </div>  
    </div>
  )
}

export default LaFortuna