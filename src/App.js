import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './ScreenComponents/Home';
import About from './About/About';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar/>

      {/* <Home/> */}

      <main>
        <Outlet/>
      </main>


      {/* <About/> */}
    </>
  );
}

export default App;
