import './Styles/Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
        <div className='Home_Container'>
            <h1>Home Page</h1>
            <Link to="/about">About</Link>
        </div>
    </>
  )
}

export default Home