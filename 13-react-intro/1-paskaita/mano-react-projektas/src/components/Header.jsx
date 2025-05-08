import '../css/Header.css';
import viteLogo from '/vite.svg';
import reactLogo from '../assets/react.svg';

const Header = () => {
  return (
    <div className='container'>
      <p>Mano Pirmas Vite React Projektas</p>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <div id='header'>
        <div className='container'>
          <nav>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Services</a></li>
              <li><a href='#'>Portfolio</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    
  );
};

export default Header;
