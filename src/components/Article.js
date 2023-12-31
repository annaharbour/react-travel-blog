import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Article({article}) {
  let country;
  let location;
  if(article.country === "Costa Rica"){
    switch (article.location){
      case "La Fortuna":
        location = <Link to='/LaFortuna'>
          La Fortuna
          </Link>;
        break;
      case "Dominical":
        location = <Link to='/Dominical'>
          Dominical
          </Link>;
        break;
      case "Jaco":
        location = <Link to='/Jaco'>
          Jaco
          </Link>;
        break;
      default: 
        location = "";
    }
    country = <Link to="/CostaRica">Costa Rica</Link>
  } else if (article.country === "Mexico"){
      switch(article.location){
        case "Zihuatanejo":
          location = <Link to='/Zihuatanejo'>
            Zihuatanejo
            </Link>;
          break;
          default:
            location="";
      }
    country = <Link to='/Mexico'>Mexico</Link>
  }

  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
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
            <b>
              <button onClick={goBack}><i class="fa-solid fa-left-long"></i></button>
              Location:
            </b> 
            <span className='location'>{location}, {country}</span>
          </p>
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