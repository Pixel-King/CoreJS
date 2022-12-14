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
import { Form, Pagination, Spinner } from 'react-bootstrap';

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
    const [loading, setLoading] = useState<boolean>(true);
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
    const [activePage, setActivePage] = useState(1);
    const [sort, setSort] = useState<string>('az');

    const dispatch = useAppDispatch();
    const history = useNavigate();

    useEffect(()=>{
        getAllTests();
    }, []);

    useEffect(()=>{
        getAllTests();
    }, [sort]);

    useEffect(()=>{
        getAllTests();
    }, [showAddTestModal, showChangeTestModal]);

    async function delTest() {
        try {
            let config = {
                headers: {
                  Authorization: `Bearer ${user.token}`
                }
              }
            await axios.delete(`${dbHostURL}/tests/${point.id}`, config);
            await getAllTests();
        } catch (e: unknown) {
            const err = e as AxiosError
            console.error(err.message);
        }
    }

    async function getAllTests() {
        try {
            setLoading(true);
            const res = await axios.get(`${dbHostURL}/tests`);
            const allTests: testBody[] = res.data;
            switch (sort) {
                case '2':
                    setTests(allTests.sort((first, second) => second.name.localeCompare(first.name)));
                    setLoading(false);
                    break;
                case '3':
                    setTests(allTests.sort((first, second) => +first.rating - +second.rating ));
                    setLoading(false);
                    break;
                case '4':
                    setTests(allTests.sort((first, second) => +second.rating - +first.rating ));
                    break;
                default:
                    setLoading(false);
                    setTests(allTests.sort((first, second) =>`${first.name}`.localeCompare(`${second.name}`)));
                    break;
            }
            setTests(allTests);
            setLoading(false);
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

    // useEffect(()=>{
    //     switch (sort) {
    //         case '2':
    //             setTests(tests.sort((first, second) => second.name.localeCompare(first.name)));
    //             break;
    //         case '3':
    //             setTests(tests.sort((first, second) => +first.rating - +second.rating ));
    //             break;
    //         case '4':
    //             setTests(tests.sort((first, second) => +second.rating - +first.rating ));
    //             break;
    //         default:
    //             setTests(tests.sort((first, second) =>`${first.name}`.localeCompare(`${second.name}`)));
    //             break;
    //     }
    // }, [sort]);

    function runQuestionsChange(testId: string) {
        dispatch(setTestId(testId));
        localStorage.setItem('testId', testId);
        history('/change-test-questions');
    }

    return (
        <div className='testpage'>
            <div className="manage-tests">
                    <Form.Select
                    onChange={(e)=>setSort(e.target.value)} 
                        aria-label="Default select example">
                      <option value="1">???? A ???? ??</option>
                      <option value="2">???? ?? ???? ??</option>
                      <option value="3">?????????????? ????????????</option>
                      <option value="4">?????????????? ??????????????</option>
                    </Form.Select>
            {user.isAdmin && <div className='test-button-group'>
                <Button variant="primary" onClick={()=>setShowAddTestModal(true)}>????????????????</Button>
                <Button variant="outline-primary" disabled={point.id?false : true} onClick={()=>setShowChangeTestModal(true)}>????????????????</Button>
                <Button variant="outline-danger" disabled={point.id?false : true} onClick={()=>delTest()}>??????????????</Button>
            </div>
            }
            </div>
 
            
            {tests.length && <div className='testpage_title fs-5'>
                     <>{ tests.map((el, idx)=>{
                        return (
                            <>
                            <div key={el.name} className={`testCard ${point.id === el.id ? "point": ""}`} onClick={()=>setPoint(
                                {
                                    id: el.id,
                                    rating: el.rating,
                                    name: el.name,
                                    type: el.type,
                                    topic: el.topic,
                                }
                            )}>
                                <div className='test-card__title'>
                                    <h4>{el.topic}</h4>
                                </div>
                                <div className='test-param'></div>
                                <div className='test-card type'>
                                    <div className='fs-5'>??????:</div>
                                    <h5>{el.type}</h5>
                                </div>
                                <div className='test-card dif'>
                                    <div className='fs-5'>??????????????????:</div>
                                    <h5>{el.rating}</h5>
                                </div>
                                <div className='test-button_group'>
                                <Button 
                                        variant='primary' 
                                        value={el.id} 
                                        onClick={()=>testRunClick(el.id)}
                                    >???????????? ????????</Button>
                                {user.isAdmin && <Button variant='outline-primary' className='mr-2' onClick={() => runQuestionsChange(el.id)}>???????????????? ??????????????</Button>}
                                </div>

                            </div>
                            </>
                        )
                    })}
                    </>
            
                    {loading && <Spinner animation="border" variant="primary"/>}
            </div>
            }
            <div>
                
                <Pagination>

                </Pagination>
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