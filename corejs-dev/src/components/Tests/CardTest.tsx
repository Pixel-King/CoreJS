import React from "react";
import { questions } from './textTest';
import Answer from "./Answer";
import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap'
import { useAppSelector } from "../../app/hooks";
import { selectAuth } from "../Autorisation/SignInForm/authSlice";
import axios, { AxiosError } from 'axios';

type Test = {
    testId: string;
    date: string;
}
function CardTest(props: string) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [btnsortup, setBtnsortup] = useState<string>('light');
    const [btnsortdown, setBtnsortdown] = useState<string>('light');
    const [status, setStatus] = useState<string>('Не пройдено');
    const auth = useAppSelector(selectAuth);
    const url = 'https://corejs-server.herokuapp.com';
                const userToken = localStorage.token;
                const config = {
                    headers: {
                        'Authorization':`Bearer ${userToken}`,
                    }
                };

    async function passed() {
        try {
            if (auth) {
                const userId = localStorage.getItem('userID');
                const resp = await axios.get(`${url}/users/${userId}`, config);
                const currentStat = await resp.data;
                const passedTests = currentStat.passedTests;
                console.log(passedTests)
                passedTests.forEach((test: Test) => {
                    if (test.testId === String(questionsFilter[currentQuestion].id)) {
                        setStatus('Пройдено')
                    }
                });
            }
        } catch(e: unknown) {
            const err = e as AxiosError;
            console.log(err);
        }
    }
    
    useEffect(()=>{
        passed()
        console.log(currentQuestion, questionsFilter[currentQuestion].id)
        return function cleanup() {
            setStatus
        }
    } 
    

    )

    let questionsFilter = questions.filter((item) => item.type === props);
  
    let classPrev = currentQuestion > 0 ? 'button_var btn_prev' : 'button_var btn_prev disabled';
    let classNext = currentQuestion < questionsFilter.length - 1 ? 'button_var btn_next' : 'button_var btn_next disabled';

    const nextQuestion = () => {     
        if (currentQuestion === questionsFilter.length - 1) {
            setCurrentQuestion(currentQuestion);
        } else {
            const nextQuestion = currentQuestion + 1;
            setCurrentQuestion(nextQuestion);
        }
        setStatus('Не пройдено');
        //passed();
    }
    const prevQuestion = () => {
        if (currentQuestion === 0) {
            setCurrentQuestion(currentQuestion);
        } else {
            const nextQuestion = currentQuestion - 1;
            setCurrentQuestion(nextQuestion);
        }
        setStatus('Не пройдено');
        //passed();
    }

    const sortUp = () => {
        questionsFilter = questions.sort((a, b) => a.complexity - b.complexity);
        setBtnsortup('info');
        setBtnsortdown('light');
        setCurrentQuestion(0);
        //passed();
    }
    const sortDown = () => {
        questionsFilter = questions.sort((a, b) => b.complexity - a.complexity);
        setBtnsortdown('info');
        setBtnsortup('light');
        setCurrentQuestion(0);
        //passed();
    }

    document.addEventListener('keyup', (event) => {
        if (event.code === 'ArrowRight') {
            if (currentQuestion === questionsFilter.length - 1) {
                setCurrentQuestion(currentQuestion);
            } else {
                const nextQuestion = currentQuestion + 1;
                setCurrentQuestion(nextQuestion);
            }
            setStatus('Не пройдено');
            //passed();
        }
        if (event.code === 'ArrowLeft') {
            if (currentQuestion === 0) {
                setCurrentQuestion(currentQuestion);
            } else {
                const nextQuestion = currentQuestion - 1;
                setCurrentQuestion(nextQuestion);
            }
            setStatus('Не пройдено');
            //passed();
        }
    }, {once: true})
    
    return (
        <div className='question-section' key={questionsFilter[currentQuestion].id}>
            <div className="question-content">
                <div className="question-header">
                    <div className="section_nextprev">
                        <button onClick={prevQuestion} className={classPrev}>Prev</button>
                        <button onClick={nextQuestion} className={classNext}>Next</button>
                    </div>
                    <div className="question-number">
                        Вопрос {currentQuestion+1}/{questionsFilter.length}
                    </div>
                    {auth ? 
                    <div className="question-status">
                        {status}
                    </div>
                    : <div></div>}
                    <div className="question-complexity">
                        Сложность: {questionsFilter[currentQuestion].complexity}
                        <Button className="btn-compl complexity-up" onClick={sortUp} variant={btnsortup}>&uarr;</Button>
                        <Button className="btn-compl complexity-down" onClick={sortDown} variant={btnsortdown}>&darr;</Button>
                    </div>
                </div>
                <div className='question-title'>{questionsFilter[currentQuestion].question}</div>
                <div className='question-code' dangerouslySetInnerHTML={{__html: questionsFilter[currentQuestion].code || ''}}></div>
                <div className='answer-section'>
                    {questionsFilter[currentQuestion].answerOptions.map((answerOption, index) => (
                        <Answer {...answerOption} weight={questionsFilter[currentQuestion].complexity} id={questionsFilter[currentQuestion].id} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardTest