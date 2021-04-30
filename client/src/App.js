import './styles/style.css';
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';

function App() {
  return (
    <div>
      <Navbar>
        <NavItem href="#">
          Home
        </NavItem>
        <NavItem href="#">
          About
        </NavItem>
        <NavItem href="#">
          Contact
        </NavItem>
      </Navbar>
    </div>
  );
}

export default App;
