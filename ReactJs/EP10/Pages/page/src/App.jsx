import './App.css'
import Home from "./Pages/Home"
import About from "./Pages/About"
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
