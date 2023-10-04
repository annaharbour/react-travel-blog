import React from 'react'

function PuraVida({backgroundImage}) {
  const pageStyle = {
    backgroundImage: backgroundImage
    
  }

  return (

    <div className="background-container" style={pageStyle}>

    <div className="low-opacity text-container">
        <h1>Pura Vida</h1>
		<p>
            The essence of "Pura Vida" - this phrase encapsulates the very soul of Costa Rica and its people. This enchanting expression, more than just words, holds the vibration of a tranquil sunrise, the gentle sway of palms, and the whispers of ancient forests.
            <br></br>
            Pura Vida is more than a greeting; it's a philosophy, a way of life embraced by the Ticos. It's an invitation to live in harmony with nature, to treasure the simple joys, and to celebrate the interconnectedness of all things. Imagine a world where time is measured in the rhythm of laughter, where worries dissolve in the dance of the ocean waves.
            <br></br>
            Join us on a journey of discovery, where the warmth of the sun touches not only your skin but also your soul. Embrace the esoteric energy that resonates within these pages, and let the essence of Pura Vida infuse your being. Through our words and stories, may you find your own connection to the sacred rhythms of life, and may the beauty of Costa Rica's spirit become a part of your own.
            <br></br>
            Breathe. Explore. Immerse.
        </p>    
    </div>
    </div>
  )
}

export default PuraVida