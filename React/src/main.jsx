import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
/* import Header from './Header.jsx' 
import Footer from './Footer.jsx'
import Toggle from './components/Toggle.jsx'
import Submit from './components/Submit.jsx'
import Onchange from './components/Onchange.jsx'
import List from './components/list.jsx' 
import StudentProfile from'./components/StudentProfile.jsx'
import CounterApp from './components/CounterApp.jsx'
import StudentList from './components/StudentList.jsx'
import ShowHideApp from './components/ShowHideApp.jsx'
import Calculator from "./components/Calculator"; 
import Counter from './components/Counter.jsx'
import WelcomeMessage from './components/WelcomeMessage.jsx' */
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header />
    <Toggle/>
    <Submit/>
    <Onchange/> 
    <List/> 
    <StudentProfile name="John Doe" age={20} course="Computer Science" place="New York" />
    <StudentProfile name="Jane Smith" age={22} course="Mathematics" place="Los Angeles" />
    <StudentProfile name="Bob Johnson" age={21} course="Physics" place="Chicago" />
    <CounterApp/>
    <StudentList/>
    <ShowHideApp/>
    <Calculator/> 
    <Footer /> 
    <Counter/>
    <WelcomeMessage/> */}
    <App/>
  </StrictMode>,
)
