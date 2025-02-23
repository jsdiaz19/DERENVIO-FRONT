import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductPage from './features/product/product.tsx'
import PricePage from './features/price/price.tsx'
import { RequestProvider } from "./provider/request";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RequestProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <App />}>
            <Route path='article' element={ <ProductPage/>}/>
            <Route path='price' element={ <PricePage/>}/>
          </Route>
        </Routes>

      </BrowserRouter>
    </RequestProvider>
    
   
  </StrictMode>,
)
