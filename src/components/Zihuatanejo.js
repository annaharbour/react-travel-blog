import React from 'react'
import { Link } from 'react-router-dom'
import articles from '../data/articles'

function Zihuatanejo() {
  const zihuatanejoArticles = articles.filter((article) => article.location === 'Zihuatanejo');

  return (
    <div className='bg-zih background-container'>
      <div className="low-opacity text-container">
          <h1>Zihuatanejo, Mexico</h1>
        <p>
            Nestled along the sun-kissed shores of the Pacific Ocean, Zihuatanejo is a coastal gem that epitomizes the beauty and charm of Mexico's Pacific coast. Located in the southwestern state of Guerrero, this picturesque destination is a harmonious blend of natural splendor, vibrant culture, and relaxed seaside living. Zihuatanejo, often referred to simply as "Zihua" by its affectionate visitors, offers a delightful escape from the hustle and bustle of more touristy Mexican destinations. With its pristine beaches, warm hospitality, and a captivating mix of traditional Mexican authenticity and modern amenities, Zihuatanejo beckons travelers seeking a tranquil and enchanting getaway in a truly paradisiacal setting. Whether you're drawn to its azure waters, colorful streets, or rich cultural heritage, Zihuatanejo promises an unforgettable experience that captures the essence of Mexico's coastal allure.
          </p>
          <ul className="article-list">
          {zihuatanejoArticles.map((article) => (
                <li key={article.title}>
                  <Link to={`/article/${article.id}`}>{article.title}</Link>
                </li>
              ))}
          </ul>
      </div>  
    </div>
  )
}

export default Zihuatanejo