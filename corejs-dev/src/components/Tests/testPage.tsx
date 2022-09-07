import * as React from 'react';
import { useState, useEffect } from 'react';
import { questions } from './textTest';
import Button from 'react-bootstrap/Button';
import './testPage.css'
import CardTest from './CardTest';
import { Routes, Route, Link, useNavigate} from "react-router-dom";
import TestsRender from './TestsRender';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectAuth } from '../Autorisation/SignInForm/authSlice';
import axios, { AxiosError } from 'axios';
import { dbHostURL } from '../../dburl';
import { selectUserState } from '../User/userSlice';
import { selectTestState, setTestId } from './testSlice';
import AddTest from './Modal/Addtest';
import ChangeTestModal from './Modal/ChangeTestModal';

interface testBody{
    id: string;
    rating: string;
    name: string;
    type: string;
    topic: string;
}

const TestPage: React.FC = () => {
    //const auth = useAppSelector(selectAuth);
    const auth = useAppSelector(selectAuth);
    const user = useAppSelector(selectUserState);
    const [tests, setTests] = useState<testBody[] | []>([]);
    const [point, setPoint] = useState<testBody>({
        id: '',
        rating: '',
        name: '',
        type: '',
        topic: '',
    });
    const [showAddTestModal, setShowAddTestModal] = useState<boolean>(false);
    const [showChangeTestModal, setShowChangeTestModal] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const history = useNavigate();

    useEffect(()=>{
        getAllTests();
    }, []);

    async function delTest() {
        try {
            let config = {
                headers: {
                  Authorization: `Bearer ${user.token}`
                }
              }
            await axios.delete(`${dbHostURL}/tests/${point.id}`, config);
            getAllTests();
        } catch (e: unknown) {
            const err = e as AxiosError
            console.error(err.message);
        }
    }

    async function getAllTests() {
        try {
            const res = await axios.get(`${dbHostURL}/tests`);
            setTests(res.data);
        } catch (e: unknown) {
            const err = e as AxiosError
            console.error(err.message);
        }
    }

    function testRunClick(testId: string) {
        dispatch(setTestId(testId));
        localStorage.setItem('testId', testId);
        history('/run-test');
    }

    function runQuestionsChange(testId: string) {
        dispatch(setTestId(testId));
        localStorage.setItem('testId', testId);
        history('/change-test-questions');
    }

    return (
        <div className='testpage'>
            {user.isAdmin && <div className='test-button-group'>
                <Button variant="primary" onClick={()=>setShowAddTestModal(true)}>Добавить</Button>
                <Button variant="warning" onClick={()=>setShowChangeTestModal(true)}>Изменить</Button>
                <Button variant="danger" onClick={()=>delTest()}>Удалить</Button>
            </div>
            }
            <div className='testpage_title fs-5'>
                    {tests.map((el, idx)=>{
                        return (
                            <>
                            <div key={el.name} className={`testCard  ${point.id === el.id ? 'shadow-lg' : ''}`} onClick={()=>setPoint(
                                {
                                    id: el.id,
                                    rating: el.rating,
                                    name: el.name,
                                    type: el.type,
                                    topic: el.topic,
                                }
                            )}>
                                <div className='test-card__title'>
                                    <div>Название:</div>
                                    <h5>{el.name}</h5>
                                </div>
                                <div className='test-card__type'>
                                    <div>Тема:</div>
                                    <div>{el.topic}</div>
                                </div>
                                <div className='test-card__type'>
                                    <div>Тип:</div>
                                    <div>{el.type}</div>
                                </div>
                                <div className='test-card__rate'>
                                    <div>Сложность:</div>
                                    <div>{el.rating}</div>
                                </div>
                                { user.isAdmin && <Button onClick={() => runQuestionsChange(el.id)} variant={`warning`} disabled={ point.id === el.id ? false : true }>Изменить <br />вопросы</Button>}
                                <Button 
                                    variant='primary ' 
                                    value={el.id} 
                                    onClick={()=>testRunClick(el.id)}
                                >Пройти тест</Button>
                            </div>
                            </>
                        )
                    })}
            </div>
            <AddTest show={showAddTestModal} onHide={()=>setShowAddTestModal(false)}></AddTest>
            <ChangeTestModal 
                show={showChangeTestModal} 
                onHide={()=>{
                    setShowChangeTestModal(false);
                    getAllTests();
                    }}
                test={point}
            />
        </div>
    )
}


export default TestPage;