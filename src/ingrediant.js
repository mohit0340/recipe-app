import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./ingrediant.css"


const Ingrediant = () => {

 const[ingrediant,setIngrediant]=useState()

    const rdata=useLocation()
    // console.log(rdata.state.ingrediant)


    useEffect(()=>{

console.log(rdata.state.ingrediant)

      setIngrediant(rdata.state.ingrediant)
      // console.log(ingrediant)

    },[])

  return (
    <div className='ingrediant text-center'>
      {ingrediant!=undefined?(
        <>
      <p className=' fs-2 fw-bold'>{ingrediant["label"]}</p>
            <div className='ingrediant-main d-flex ' >
              
              <img src={ingrediant["image"]} ></img>
             
              
              <div className='ingrediant-data'>
                <p className='fs-3  fw-semibold text-decoration-underline'>Ingrediant :</p>
                <ul className=' text-md-start'>
                  {
                    ingrediant["ingredientLines"].map((item,index)=>(
                      <li key={index}>{item}</li>
                    ))
                  }
                </ul>
               <p> <p className='fs-3  fw-semibold text-decoration-underline'>MealType : </p><li className='mealtype'>{ingrediant["mealType"]}</li></p>



            
              </div>

            </div>

            <div className='ingredint-indetail mt-5 mb-5'>
              <p className='fs-3  fw-semibold text-decoration-underline mb-5'>Ingrediant In Details</p>
              {
                ingrediant.ingredients.map((item,index)=>(
                  <div key={index} className='ingrediantindetail-main d-flex mb-5 gap-5'>
                    <img className='ingrediantindetail' src={item.image}></img>
                    <div className='ingrediantindetail-data'>
                    <p>food : {item.food}</p>
                    <p>food-Category : {item.foodCategory}</p>
                    <p>mesure : {item.measure}</p>
                    <p>quintity : {item.quantity}</p>
                    <p>text : {item.text}</p>
                    <p>weight : {item.weight}</p>


                    </div>
                  </div>
                ))
              }
            </div>
            </>):null}
    </div>
  )
}

export default Ingrediant
