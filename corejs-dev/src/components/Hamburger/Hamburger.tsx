import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Toggle from '../Theme/Toggle';
import ToggleSound from '../Sound/ToggleSound';
import './hamburger.css';
import { useAppSelector } from '../../app/hooks';
import { selectAuth } from '../Autorisation/SignInForm/authSlice';
import User from '../User/User';
import { Button } from 'react-bootstrap';

const Hamburger: React.FC = () => {
    const auth = useAppSelector(selectAuth);
    const [open, setOpen] = useState<boolean>(false);
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
    const overlay = document.querySelector('.burgermenu-overlay') as HTMLElement;
    
    document.addEventListener('click', (event) => {
        if (event.target == overlay) {
            burgerHandler();
        }
    })

    function burgerHandler() {
        if (!open) {
            setOpen(true);
            components.forEach((component) => {
                root.style.setProperty(`--${component}-default`, `var(--${component}-open)`)
              })
        } else {
            setOpen(false);
            components.forEach((component) => {
                root.style.setProperty(`--${component}-default`, `var(--${component}-close)`)
              })
        }
    }

    return (
        <div className='burger-wrap'>
            <div className='burger burger1' onClick={burgerHandler}>
                <span className='span-burger span-burger1' />
                <span className='span-burger span-burger2' />
                <span className='span-burger span-burger3' />
            </div>
            <div className='burgermenu-overlay'>
            <div className='header-navbar-burger'>
                <div className='burger burger2' onClick={burgerHandler}>
                    <span className='span-burger span-burger1' />
                    <span className='span-burger span-burger2' />
                    <span className='span-burger span-burger3' />
                </div>
                <div className='nav-link-container-burger fs-5'>
                    <div className='user-burger'>
                        { auth ?
                            <User/> :
                            <div className='account-buttons' onClick={burgerHandler}>
                            <Link to="/registraition"><Button variant="primary">Регистрация</Button></Link>
                            {' '}
                            <Link to="/SignIn"><Button variant="outline-primary">Войти</Button></Link>
                        </div>}
                    </div>
                    
                <Link to="/" className='nav-link' onClick={burgerHandler}>Главная</Link>
                <Link to="/theory" className='nav-link' onClick={burgerHandler}>Теория</Link>
                <Link to="/tests" className='nav-link' onClick={burgerHandler}>Тесты</Link>
                <Link to="/tasks" className='nav-link' onClick={burgerHandler}>Задачи</Link>
                <Link to='/statistics' className='nav-link' onClick={burgerHandler}>Статистика</Link>
                <Toggle />
                <ToggleSound />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Hamburger;