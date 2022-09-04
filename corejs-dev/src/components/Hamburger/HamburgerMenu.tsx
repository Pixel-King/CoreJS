import React from 'react';
import { Link } from 'react-router-dom';
import Toggle from '../Theme/Toggle';
import ToggleSound from '../Sound/ToggleSound';
import './hamburger.css';
import Hamburger from './Hamburger';

const HamburgerMenu: React.FC = () => {

    return (
        <div className='header-navbar-burger'>
            <div className='nav-link-container-burger fs-5'>
              <Link to="/" className='nav-link'>Главная</Link>
              <Link to="/theory" className='nav-link'>Теория</Link>
              <Link to="/tests" className='nav-link'>Тесты</Link>
              <Link to='/statistics' className='nav-link'>Статистика</Link>
              <Toggle />
              <ToggleSound />
            </div>
        </div>
    )
}

export default HamburgerMenu;