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
            
        </p>    
    </div>
    </div>
  )
}

export default Home