import { Link } from "react-router-dom"
import Button from "./Components/Button"

function Test(){
    return(
        <div>
            <h1>Hello React Js.</h1>
             <Link to='/about'>Demo</Link>
            <Button label='Learn More'/>
        </div>
    )
}

export default Test