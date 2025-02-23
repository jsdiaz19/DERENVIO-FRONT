import { NavLink, Outlet } from "react-router-dom";
import './App.css'
import { useEffect, useState } from "react";
import { useRequestContext } from "./context/requestContext";

function App() {

  const [theme, setTheme] = useState(false);

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme ? 'light' : 'dark' );
  },[theme]);

 
  return (
    <>
      
        
        <nav>
          
          <div className="groupButton">
            <NavLink className="linkNavigation" to="/article">Articulos</NavLink>
            <NavLink className="linkNavigation" to="/price">Precios especiales</NavLink>
          </div>
          
          <div>

          <div className="toggle-switch">
            <label className="switch-label">
              <input type="checkbox" className="checkbox" onChange={($event)=>setTheme($event.target.checked)}/>
              <span className="slider"></span>
            </label>
          </div>  
            
          </div>
        </nav>

        <div className='content-container'>
          <Outlet />
        </div>
        <GlobalLoader />
        
      
    </>
  );
  
}

/**
 * Componente de carga global
 * @returns 
 */  
const GlobalLoader = () => {
  const { state } = useRequestContext();
  return state.loading ? <div className="loader">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>: null;
};

export default App
