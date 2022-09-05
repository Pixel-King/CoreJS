import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Toggle from '../Theme/Toggle';
import ToggleSound from '../Sound/ToggleSound';
import './hamburger.css';

const HamburgerMenu: React.FC = () => {
    const [open, setOpen] = useState<boolean>(true);
    const root = document.querySelector(':root') as HTMLElement;
    const components: string[] = [
        'burgermenu',
        'scroll',
        'span1',
        'span2',
        'span3',
        'span3-y',
        'span1-x'
    ];
    
    function menuHandler() {
        if (open) {
            setOpen(false);
            components.forEach((component) => {
                root.style.setProperty(`--${component}-default`, `var(--${component}-close)`)
            })
        }
    }

    return (
        <div className='burgermenu-overlay'>
            <div className='header-navbar-burger'>
                <div className='nav-link-container-burger fs-5'>
                <Link to="/" className='nav-link' onClick={menuHandler}>Главная</Link>
                <Link to="/theory" className='nav-link' onClick={menuHandler}>Теория</Link>
                <Link to="/tests" className='nav-link' onClick={menuHandler}>Тесты</Link>
                <Link to='/statistics' className='nav-link' onClick={menuHandler}>Статистика</Link>
                <Toggle />
                <ToggleSound />
                </div>
            </div>
        </div>
    )
}

export default HamburgerMenu;