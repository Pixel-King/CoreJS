import * as React from 'react';
import './App.css';
import Home from './components/Home/Home';
import TheoryPage from './components/Theory/TheoryPage';
import { Routes, Route, Link} from "react-router-dom";
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import TestPage from './components/Tests/testPage'; 
import Regestraition from './components/regestraition/Regestraition';
import SignInForm from './components/SignInForm/SignInForm';
import 'bootstrap/dist/css/bootstrap.css';
import Toggle from './components/Theme/Toggle';
import Statistics from './components/Statistics/Statistics';
import Devs from './components/Developers/Developers';
import TestsRender from './components/Tests/TestsRender';
import logo from './logo3.png';

const App: React.FC = () => {

    return (
      <div className='App'>
        <header className='header'>
          <Navbar className='header-navbar'>
            <div className='header-container'>
              <Navbar.Brand>
                <Link to="/" className='header-title'>
                  <img
                  src={logo}
                  className="logo d-inline-block align-top"
                  alt="logo" />  
                </Link>
              </Navbar.Brand>
              <Nav className='nav-link-container fs-5'>
                  <Link to="/" className='nav-link'>Home</Link>
                  <Link to="/theory" className='nav-link'>Theory</Link>
                  <Link to="/tests" className='nav-link'>Tests</Link>
                  <Link to='/statistics' className='nav-link'>Statistics</Link>
                  <Toggle />
              </Nav>
              <div className='account-buttons'>
                <Link to="/registraition"><Button variant="primary">Registration</Button></Link>
                {' '}
                <Link to="/SignIn"><Button variant="outline-primary">Sign in</Button></Link>
              </div>
            </div>
          </Navbar>
        </header>
        <main className='main'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="theory" element={<TheoryPage />} />
            <Route path="tests" element={<TestPage />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path='registraition' element={<Regestraition/>}/>
            <Route path='SignIn' element={<SignInForm/>}/>
            <Route path='Devs' element={<Devs/>}/>
            <Route path='teststheory' element={ <TestsRender type='theory'/> } />
            <Route path='testspractice' element={ <TestsRender type='practice'/> } />
            <Route path='testsmix' element={ <TestsRender type='mix'/> } />
          </Routes>
        </main>
        <footer className='footer'>
          <div className='footer-container fs-5'>
            &copy; {new Date().getFullYear()}
            <Link to="/Devs"><Button variant="outline-secondary">Developers</Button></Link>
          </div>
        </footer>
      </div>
      );
  }


export default App;
