
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
<nav className='nav'>

         <Link to='/'>Blog</Link>
                 <Link to='/create-post'>Create Post</ Link>
        <button className="login-btn">Sign Out</button>



</nav>
  )
}

export default Navbar
