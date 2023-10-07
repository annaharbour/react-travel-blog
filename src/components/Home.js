import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Home({articles, backgroundImage}) {
  const [searchTerm, setSearchTerm]= useState('');
  const [searchResults, setSearchResults] = useState([]);

  const pageStyle = {
    backgroundImage: backgroundImage  
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
   
    const filteredArticles = articles.filter((article) => article.title.toLowerCase().includes(searchTerm.toLowerCase()) || article.textBlocks.some((block) => block.toLowerCase().includes(searchTerm.toLowerCase())))
    
    setSearchResults(filteredArticles);
  }

  return (
  <div className="home background-container" style={pageStyle}>
    <div className="low-opacity text-container">
      <h1>Welcome</h1>
		  <p>
         I'm Anna Harbour, a software developer by day and a passionate traveler by heart. As someone who spends her days immersed in lines of code, I have always sought solace, inspiration, and adventure beyond the digital realm. While my profession revolves around the virtual world, my passion extends to exploring the real world – its diverse cultures, stunning landscapes, and the remarkable stories that every corner of this planet has to offer. Here, you'll find a collection of travel tales, tips, and insights that I've gathered from my globetrotting escapades. So, fasten your virtual seatbelts, dear readers, and let's embark on a journey of discovery together one byte-sized adventure at a time!
        </p>    
      <div className='article-search'>
        <form onSubmit = {handleSearchSubmit} className='search-form'>
          <input type="text" 
            placeholder='Search articles' 
            value={searchTerm} 
            onChange={handleSearchChange}
          />
          <button type='submit'>Search</button>
        </form>
        <ul className='article-list'>
          {searchResults.map((article) => (
            <li key={article.id}>
              <Link to={`/article/${article.id}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Home