import { Routes, Route } from "react-router-dom"
import './App.css'
import { Header } from './components/Header'
import { Projects } from "./pages/Projects"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Footer } from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
      
      <Header label="Reformas Integrales"/>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="projects" element={ <Projects />}/>
        <Route path="contact" element={ <Contact />}/>

      </Routes>
      <Footer label="Reformas Integrales" />
    </>
  )
}

export default App
