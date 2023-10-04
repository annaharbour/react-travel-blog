import React from 'react'

function Article({article}) {
  return (
    <div className="article">

      <div className="gallery">
          {article.image.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index}`} />
          ))}
      </div>

      <div className="articleBody">
          <h1 className="articleTitle">{article.title}</h1>
          <p>Location: {article.location}</p>
          {article.textBlocks.map((textBlock, index) => (
            <p key={index}>{textBlock}</p>
          ))}

      </div> 

</div>
)
}

export default Article