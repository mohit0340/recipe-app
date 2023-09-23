import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import "./App.css"
import Recipedata from './recipedata';
import  Axios from 'axios';



function App() {

  const[recipedata,setRecipedata]=useState([])
  const[recipenm,setRecipenm]=useState("mango")
  const[healthlabel,setHelthlabel]=useState("vegan")

  const hlabelarr=["alcohol-cocktail",
  "alcohol-free ",
  "celery-free",
  "crustacean-free ",
  "dairy-free ",
  "DASH ",
  "egg-free ",
  "fish-free ",
  "fodmap-free ",
  "gluten-free ",
  "immuno-supportive ",
  "keto-friendly ",
  "kidney-friendly ",
  "kosher",
  "low-potassium ",
  "low-sugar ",
  "lupine-free",
  "Mediterranean ",
  "mollusk-free ",
  "mustard-free",
  "No-oil-added ",
  "paleo ",
  "peanut-free ",
  "pecatarian ",
  "pork-free ",
  "red-meat-free ",
  "sesame-free",
  "shellfish-free ",
  "soy-free ",
  "sugar-conscious ",
  "sulfite-free ",
  "tree-nut-free ",
  "vegan ",
  "vegetarian ",
  "wheat-free "]
  



let url=`https://api.edamam.com/search?q=${recipenm}&app_id=21357b65&app_key=18445b49125a4e37659e22c6ac77780b&health=${healthlabel}`

  
// useEffect(()=>{
//  if( recipenm=="mango"){
//   submithandle();
// }


// },[])


    async function data(){
      var response = await Axios.get(url);
       setRecipedata(response.data.hits)
      console.log(recipedata)
 
      // setRecipedata(result);    
    }
    
  const submithandle=(e)=>{
    e.preventDefault();
    data();
   }
    


  return (
    <div className="App"> 
      <h2 className=''>Recipe App</h2>
   <form onSubmit={submithandle} className='search-main'>
    <input type='text' onChange={(e)=>setRecipenm(e.target.value)} placeholder='Enter Your Recipe'></input>
    <button type='submit'  >Search</button>
    <select className='label-option'>
      <option  disabled selected>Add Food Type</option>
      {hlabelarr.map((item,index)=>{
        return<option value={item} key={index} onClick={()=>setHelthlabel(item)}>{item}</option>
      })}
    </select>
   </form>
   {recipedata!=""?(
 <div className='app-recipe-main'>{recipedata.map((item)=>{
  
  return(<Recipedata data={item}></Recipedata>)
  // return(<p>{item["recipe"]["label"]}</p>)

 }
 
  
 )}</div>):<h2 className='mt-5'>Enter the recipe you want to make.......</h2>}
    </div>
  );
}

export default App;
