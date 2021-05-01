import './styles/style.css';
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import NavFill from './components/NavFill';
import NavLogo from './components/NavLogo';

import IntroImg from './icons/illustration-intro.png'

function App() {
  return (
    <div>
      <Navbar>
        <NavItem>
          <NavLogo href="#"/>
        </NavItem>
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
        <section className="intro-img-container">
          <img src={IntroImg} className="intro-img" />
          <h1>Track all your habits so you can shit the bed.</h1>
          <p>We understand that sometimes shitting the bed is very annoying, so what we have done at HabitTracker is track when you need to take a massive dookie.</p>
          <button className="secondary-btn">Get Started</button>
        </section>
      </main>
    </div>
  );
}

export default App;
