import React from 'react'

function Article({article}) {
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
            Location: {article.location}</p>
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