import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
/* import App from './App.jsx'
import Header from './Header.jsx' 
import Counter from './Counter.jsx'*/
import Footer from './Footer.jsx'
import Toggle from './Toggle.jsx'
import Submit from './Submit.jsx'
import Onchange from './Onchange.tsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header />
    <App /> 
    <Counter />*/}
    <Toggle/>
    <Submit/>
    <Onchange/>
    <Footer />
  </StrictMode>,
)
