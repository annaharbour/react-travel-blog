import React from 'react'

function Mexico({backgroundImage}) {
  const pageStyle = {
    backgroundImage: backgroundImage
    
  }

  return (

    <div className="bg-mexico background-container" style={pageStyle}>

    <div className="low-opacity text-container">
        <h1>Mexico</h1>
		<p>
        Mexico, a land of captivating contrasts and rich heritage, beckons travelers with its vibrant tapestry of culture, history, and natural beauty. Nestled in North America and stretching from the azure waters of the Pacific Ocean to the turquoise Gulf of Mexico, this diverse nation is a mosaic of ancient civilizations, colonial legacies, and modern marvels. From the bustling metropolis of Mexico City to the tranquil villages hidden in lush jungles and arid deserts, Mexico offers an array of experiences that appeal to every adventurer's soul. With its mouthwatering cuisine, lively fiestas, and warm-hearted people, Mexico extends an irresistible invitation to explore its treasures and immerse oneself in a world where tradition and innovation intertwine, creating an unforgettable tapestry of experiences. Welcome to Mexico, where the past dances gracefully with the present, creating a tapestry of enchantment that leaves an indelible mark on all who visit.
        </p>    
    </div>
    </div>
  )
}

export default Mexico