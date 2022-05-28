import React, { useState } from 'react'

import "./Home.css"

const Home = () => {

      const [input,setInput]=useState(null)









  return (
    <div className="container">
        
        <div className="emptyDiv">




        </div>


    <div className="circleDiv">

             <div className="first circle">
                 
             </div>
             <div className="second circle"></div>
             <div className="third circle"></div>
             <div className="fourth circle"></div>
             <div className="fiveth circle"></div>

    </div>
      
      <div className="buttonDiv">

             <input type="number"
              value={input}
              placeholder="Enter Number"
              onChange={(event)=> setInput(event.target.value)}

              />
             <button
             
             
             >shoot</button>
           


      </div>
    .
    
    
    
    
    
    
    </div>
  )
}

export default Home