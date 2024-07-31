import {Link} from 'react-router-dom'
import Logo from '../../assets/GOQii_logo_log.jpg'

const NavigationBar = () => (
    <header>
        <nav className="navbar navbar-light bg-navbar">
            <Link to="/" className="navbar-brand logo-img text-white px-5 my-2" ><img src={Logo} className='p-2 m-1' /></Link>
        </nav>
    </header>
);  
export default NavigationBar;
  