import * as React from 'react';
import './App.css';
import axios, { AxiosError } from 'axios';
import Home from './components/Home/Home';
import TheoryPage from './components/Theory/TheoryPage';
import { Routes, Route, Link, useNavigate, useLocation} from "react-router-dom";
import { Navbar, Nav, Button } from 'react-bootstrap'
import TestPage from './components/Tests/testPage'; 
import Regestraition from './components/Autorisation/regestraition/Regestraition';
import SignInForm from './components/Autorisation/SignInForm/SignInForm';
import 'bootstrap/dist/css/bootstrap.css';
import Toggle from './components/Theme/Toggle';
import Statistics from './components/Rating/Rating';
import Devs from './components/Developers/Developers';
import TestsRender from './components/Tests/TestsRender';
import logo from './logo3.png';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { initAuth, selectAuth } from './components/Autorisation/SignInForm/authSlice';
import User from './components/User/User';
import Profile from './components/Profile/Profile';
import { setState } from './components/User/userSlice';
import ToggleSound from './components/Sound/ToggleSound';
import logoRSS from './rs_school_js.png';
import Hamburger from './components/Hamburger/Hamburger';
import HamburgerMenu from './components/Hamburger/HamburgerMenu';
import ChangeProfile from './components/ChangeProfile/ChangeProfile';

const App: React.FC = () => {
  const auth = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const history = useNavigate();
  let location = useLocation();

  React.useEffect(()=>{
    authCheck();
  }, []);

  async function authCheck() {
    try {
      if (localStorage.getItem("userID") && localStorage.getItem("token")) {
        const userID = localStorage.getItem("userID");
        const userToken = localStorage.getItem("token");
        let config = {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        }
        const res = await axios.get(`https://corejs-server.herokuapp.com/users/${userID}`, config);
        const body = res.data;
        body.token = userToken;
        if (res.status === 200) {
          dispatch(initAuth());
          dispatch(setState(body));
          if (location.pathname === '/SignIn') history("/my-profile");
        }
      }
    } catch (e: unknown) {
      const err = e as AxiosError;
      console.log(err);
      if (!auth && location.pathname === '/my-profile') history("/SignIn");
    }
  }

  return (
    <div className='App'>
      <header className='header'>
        
        <Navbar className='header-navbar'>
          <div className='header-container'>
            <Hamburger/>
            <Navbar.Brand>
              <Link to="/" className='header-title'>
                <img
                src={logo}
                className="logo d-inline-block align-top"
                alt="logo" />  
              </Link>
            </Navbar.Brand>
            <Nav className='nav-link-container fs-5'>
              <Link to="/" className='nav-link'>Главная</Link>
              <Link to="/theory" className='nav-link'>Теория</Link>
              <Link to="/tests" className='nav-link'>Тесты</Link>
              <Link to='/statistics' className='nav-link'>Статистика</Link>
              <Toggle />
              <ToggleSound />
            </Nav>
            <div className='user-header'>
              { auth ?
              <User/> :
              <div className='account-buttons'>
                <Link to="/registraition"><Button variant="primary">Регистрация</Button></Link>
                {' '}
                <Link to="/SignIn"><Button variant="outline-primary">Войти</Button></Link>
              </div>}
            </div>
          </div>
        </Navbar>
      </header>
      <main className='main'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="theory/*" element={<TheoryPage />} />
          <Route path="tests" element={<TestPage />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path='registraition' element={<Regestraition/>}/>
          <Route path='SignIn' element={<SignInForm/>}/>
          <Route path='Devs' element={<Devs/>}/>
          <Route path='testsdatatypes' element={ <TestsRender type='data types'/> } />
          <Route path='testsvariable' element={ <TestsRender type='variable'/> } />
          <Route path='testsoperators' element={ <TestsRender type='loops and operators'/> } />
          <Route path='testsfunction' element={ <TestsRender type='function'/> } />
          <Route path='testsbrowser' element={ <TestsRender type='browser'/> } />
          <Route path='testsother' element={ <TestsRender type='other'/> } />
          { auth && <Route path='my-profile' element={ <Profile/> } />}
          { auth && <Route path='change' element={ <ChangeProfile/> } />}
        </Routes>
      </main>
      <footer className='footer'>
        <div className='footer-container fs-5'>
          <Link to="/Devs"><button className='dev-button'>Разработчики</button></Link>
          &copy; {new Date().getFullYear()}
          <div className="footer-rss"><a href="https://rs.school/js/">
                <img id="rss-img" src={logoRSS} alt="rss"></img>
            </a></div>
        </div>
      </footer>
    </div>
    );
  }


export default App;
