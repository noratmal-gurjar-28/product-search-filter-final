import {Link} from 'react-router-dom'

const NavigationBar = () => (
    <header>
        <nav className="navbar navbar-light bg-navbar">
            <Link to="/" className="navbar-brand text-white px-5 my-2" >Navbar</Link>
        </nav>
    </header>
);  
export default NavigationBar;
  