import './styles/style.css';
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import NavFill from './components/NavFill';
import NavLogo from './components/NavLogo';

import IntroImg from './icons/illustration-intro.png'
import { ReactComponent as NinjaIcon } from './icons/ninja.svg';

function App() {
  return (
    <div>
      <Navbar>
        <NavItem>
          <NavLogo href="#"/>
        </NavItem>
        <NinjaIcon className="ninja" />
        <NavFill/>
        <NavItem href="#">
          Home
        </NavItem>
        <NavItem href="#">
          Blog
        </NavItem>
        <NavItem href="#">
          Contact
        </NavItem>
      </Navbar>

      <main className="intro-main">
        <section className="intro-container">
          <section className="intro-img-container">
            <img src={IntroImg} alt="intro" className="intro-img" />
          </section>
          <section className="intro-text-container">
            <h1 className="intro-heading">Dolor proident tempor commodo tempor.</h1>
            <p>Reprehenderit nostrud tempor minim minim irure dolore proident sint elit qui aliquip minim culpa et. Dolore minim ullamco deserunt cillum non.</p>
            <button className="secondary-btn">Get Started</button>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
