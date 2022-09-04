import * as React from 'react';
import { useState } from 'react';
import { questions } from './textTest';
import Button from 'react-bootstrap/Button';
import './testPage.css'
import CardTest from './CardTest';
import { Routes, Route, Link} from "react-router-dom";
import TestsRender from './TestsRender';
import { useAppSelector } from '../../app/hooks';
import { selectAuth } from '../Autorisation/SignInForm/authSlice';


const TestPage: React.FC = () => {
    //const auth = useAppSelector(selectAuth);
    const auth = useAppSelector(selectAuth);
    return (
        <div className='testpage'>
            <div className='testpage_title fs-5'>
                <h3>Проходите тесты, чтобы проверить свой уровень знаний</h3>
                {auth ?
                    <p>Посмотреть свой прогресс можно на вкладке "Статистика"</p>
                    : <p> Для авторизованных пользователей доступен просмотр прогресса на вкладке "Статистика"</p>
                }
            </div>
            <div className='testpage_content'>
                <Link to='/testsdatatypes' className='nav-link'>
                    <p>
                        Типы данных
                    </p> 
                </Link>
            
                <Link to='/testsvariable' className='nav-link'>
                    <p>
                        Переменные
                    </p> 
                </Link>
                <Link to='/testsoperators' className='nav-link'>
                    <p>
                        Операторы и циклы
                    </p> 
                </Link>
                <Link to='/testsfunction' className='nav-link'>
                    <p>
                        Функции
                    </p> 
                </Link>
                <Link to='/testsbrowser' className='nav-link'>
                    <p>
                        JS в браузере
                    </p> 
                </Link>
                <Link to='/testsother' className='nav-link'>
                    <p>
                        Другое
                    </p> 
                </Link>


                {/* <div className='test_description'>
                    <p className='test_description_text'>
                        Здесь Вы можете пройти тест по практическим вопросам из разряда "Что выведет консоль?"
                    </p>
                    <Link to='/testspractice' className='nav-link'>
                        <Button className='btn-dark fs-5 btn_tests' variant='dark'>Начать</Button>
                    </Link>
                </div>
                <div className='test_description'>
                    <p className='test_description_text'>
                        Здесь Вы можете пройти теоретические вопросы на знание особенностей языка
                    </p>
                    <Link to='/teststheory' className='nav-link'>
                        <Button className='btn-dark fs-5 btn_tests' variant='dark'>Начать</Button>
                    </Link>
                </div>
                <div className='test_description'>
                    <p className='test_description_text'>
                        Здесь Вы найдете микс из вопросов по теории и практике
                    </p>
                    <Link to='/testsmix' className='nav-link'>
                        <Button className='btn-dark fs-5 btn_tests' variant='dark'>Начать</Button>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}


export default TestPage;