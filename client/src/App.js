import './styles/style.css';
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import NavFill from './components/NavFill';
import NavLogo from './components/NavLogo';

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

      <main>
        Hello!
      </main>
    </div>
  );
}

export default App;
