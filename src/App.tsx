import { Routes, Route } from "react-router-dom"
import './App.css'
import { Header } from './components/Header'
//import { Navbar } from './components/Navbar'
import { Projects } from "./pages/Projects"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
//import { Footer } from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
      
      <Header />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="projects" element={ <Projects />}/>
        <Route path="contact" element={ <Contact />}/>

      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
