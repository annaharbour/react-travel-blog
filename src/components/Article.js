import React from 'react'
import { Link } from 'react-router-dom'

function Article({article}) {
  let country;
  let location;
  if(article.country === "Costa Rica"){
    switch (article.location){
      case "La Fortuna":
        location = <Link to='/LaFortuna'>La Fortuna</Link>;
        break;
      case "Dominical":
        location = <Link to='/LaFortuna'>La Fortuna</Link>;
        break;
      case "Jaco":
        location = <Link to='/LaFortuna'>Jaco</Link>;
        break;
      default: 
        location = "";
    }
    country = <Link to="/CostaRica">Costa Rica</Link>
  }


  return (
    <div className="article">

      <div className="gallery">
          {article.images.map((image, index) => (
            <img key={index} src={image} alt=""/>
          ))}
      </div>

      <div className="articleBody">
          <h1 className="articleTitle">{article.title}</h1>
          <p className='location'>
            <b>Location:</b> {location}, {country}</p>
          <br></br>
          {article.textBlocks.map((textBlock, index) => (
            <div className='textblock'>
            <p key={index}>{textBlock}</p>
            <br></br>
            </div>
          ))}

      </div> 

</div>
)
}

export default Article