import React, { useMemo, useState } from 'react'

import "./Home.css"

const Home = () => {

      const [input,setInput]=useState("")

      const [color,setColor]=useState([]);

       const [shootingColor,setShootingColor]=useState([])

      let arr=[];

      let randomColor=()=>{
     
         let r=Math.floor(Math.random()*255)
         let g=Math.floor(Math.random()*255)
         let b=Math.floor(Math.random()*255)
       arr.push(`rgb(${r},${g},${b})`)

      }

      useMemo(()=>{
      
        for(let i=0;i<5;i++){
           randomColor()
        }

        setColor(arr)
      },[])


      //  move to box 
       const moveToBox=()=>{

        setShootingColor([...shootingColor ,...color.splice(input-1,1)])

        

       }

       // move  box to circle div
        
        const moveToCircle=(index)=>{

          setColor([...color ,...shootingColor.splice(index,1)])
          

        }







  return (
    <div className="container">
        
        <div className="emptyDiv">
        {
          shootingColor && shootingColor.map((colorItem,index)=>{

              return  <div key={index} className="circle boxcircle"
              
              style={{ backgroundColor: `${colorItem}` }}
          
               onClick={()=>{moveToCircle(index) }}

              >
              </div>

              })

              }
          



        </div>


    <div className="circleDiv">

              {
              color && color.map((colorItem,index)=>{

              return  <div key={index} className="circle"
              
              style={{ backgroundColor: `${colorItem}` }}
              >
              </div>

              })

              }
          

    </div>
      
      <div className="buttonDiv">

             <input type="number"
              value={input}
              placeholder="Enter Number"
              onChange={(event)=> setInput(event.target.value)}

              />
             <button
              
              onClick={() => moveToBox()}
             >shoot</button>
           


      </div>
    .
    
    
    
    
    
    
    </div>
  )
}

export default Home