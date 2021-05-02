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
        <section className="intro-container">
          <section className="intro-img-container">
            <img src={IntroImg} alt="intro" className="intro-img" />
          </section>
          <section className="intro-text-container">
            <h1 className="intro-heading">Track all your habits so you can make the bed.</h1>
            <p>We understand that sometimes shitting the bed is very annoying. What we have done at HabitTracker is track when you need to take a massive dookie.</p>
            <button className="secondary-btn">Get Started</button>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
