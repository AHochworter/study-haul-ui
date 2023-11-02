import logo from '../../Assets/StudyHaul_logo.png';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  return (
    <div className="header">
      <img src={logo} alt="study-haul-logo" className="logo-img" />
      <h1 className="sr-only">Study Hall</h1>
      {location.pathname !== '/' && (
        <Link className="home-link" to="/">
          Home
        </Link>
      )}
    </div>
  );
}

export default Header;
