import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import App from './App';
import Recipedata from './recipedata';
import Ingrediant from './ingrediant';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar className=' justify-content-around bg-warning  h-25 fs-5'>
      <div className=' fs-4 fw-bold d-flex justify-align-content-lg-start'>Recipe App</div>
      <div className='d-flex justify-content-between gap-lg-5'>
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link' to="/about">About Us</Link>
        

      </div>
    </Navbar>
    
    <Routes>
      <Route path='/'element={<App></App>}></Route>
      <Route path='/ingrediant' element={<Ingrediant></Ingrediant>}></Route>
    </Routes>
    </BrowserRouter>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
