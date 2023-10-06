import React from 'react'

function Home({backgroundImage}) {
  const pageStyle = {
    backgroundImage: backgroundImage
    
  }

  return (

    <div className="home background-container" style={pageStyle}>

    <div className="low-opacity text-container">
      <h1>Welcome</h1>
		  <p>
         I'm Anna Harbour, a software developer by day and a passionate traveler by heart. As someone who spends her days immersed in lines of code, I have always sought solace, inspiration, and adventure beyond the digital realm. Through this blog, I invite you to join me on a virtual journey across the globe as I share my adventures, discoveries, and the incredible places I've had the privilege to explore.
       <br></br>
       <br></br>
        While my profession revolves around the virtual world, my passion extends to exploring the real world – its diverse cultures, stunning landscapes, and the remarkable stories that every corner of this planet has to offer. Here, you'll find a collection of travel tales, tips, and insights that I've gathered from my globetrotting escapades. So, fasten your virtual seatbelts, dear readers, and let's embark on a journey of discovery together. Welcome aboard, and let's explore this incredible planet one byte-sized adventure at a time!
        </p>    
    </div>
    </div>
  )
}

export default Home