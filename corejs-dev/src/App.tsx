import * as React from 'react';
import './App.css';
import Home from './components/Home/Home';
import TheoryPage from './components/Theory/TheoryPage';
import { Routes, Route, Link} from "react-router-dom";
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import TestPage from './components/Tests/testPage'; 
import Regestraition from './components/regestraition/Regestraition';
import SignInForm from './components/SignInForm/SignInForm';


function App () {
  return (
  <div className='App'>
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className='header-title'><h1>Core<span className='special'>JS</span></h1></Link>
          </Navbar.Brand>
          <Nav className='me-auto' variant="pils">
              <Link to="/" className='nav-link'>Home</Link>
              <Link to="/theory" className='nav-link'>Theory</Link>
              <Link to="/tests" className='nav-link'>Tests</Link>
          </Nav>
          <div className='account-buttons'>
            <Link to="/registraition"><Button variant="primary">Registration</Button></Link>
            {' '}
            <Link to="/SignIn"><Button variant="outline-primary">Sign in</Button></Link>
          </div>
        </Container>
      </Navbar>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="theory" element={<TheoryPage />} />
        <Route path="tests" element={<TestPage />} />
        <Route path='registraition' element={<Regestraition/>}/>
        <Route path='SignIn' element={<SignInForm/>}/>
      </Routes>
    </main>
  </div>
  );
}

export default App;
