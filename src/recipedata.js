import React from 'react'
import "../src/recipedata.css"
import { useNavigate } from 'react-router-dom'

const Recipedata = (props) => {

  const navigate=useNavigate()



  const recipehandle=(data)=>{
   
  
// console.log(data)
    const data1={ingrediant:data}
    navigate("/ingrediant",{state:data1})
  
  }



  return (
   
    <div className='recipe-main'  onClick={()=>recipehandle(props.data["recipe"])}>
      <img className='recipe-img' src={props.data["recipe"]["image"]}></img>
    <p className='recipe-name'> { props.data["recipe"]["label"]}</p>
   
    </div>
  
  )
}

export default Recipedata
