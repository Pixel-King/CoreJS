import * as React from 'react';
import { useState } from 'react';
import { questions } from './textTest';
import Button from 'react-bootstrap/Button';
import './testPage.css'
import CardTest from './CardTest';
import { Routes, Route, Link} from "react-router-dom";
import TestsRender from './TestsRender';



const TestPage: React.FC = () => {
    
    return (
        <div className='testpage'>
            <div className='testpage_title fs-2'>
                <h1>Проходите тесты, чтобы проверить свой уровень знаний</h1>
                <p> Для авторизованных пользователей доступен просмотр прогресса на вкладке "Статистика"</p>
            </div>
            <div className='testpage_content'>
                <div className='test_description'>
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
                </div>
            </div>
        </div>
    )
}


export default TestPage;