import './App.css'
import Test from './Test'
import Car from './Components/Car'

function App() {
  
  const Value = "BMW"
  const Car1 = "Hundai"
  const Car2 = "Bense"
  const Car3 = "Tata"
  const Car4 = "Adi"

  return (
    <>
        <Test Value={Value}/>
        <Car C1 = {Car1} C2 = {Car2} C3 = {Car3} C4 = {Car4}/>
    </>
  )
}

export default App
