import React from "react";
//import { questions } from './textTest';
import Answer from "./Answer";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useAppSelector } from "../../app/hooks";
import { selectAuth } from "../Autorisation/SignInForm/authSlice";
import axios, { AxiosError } from "axios";

type testsType = {
    _id: string,
    id: string,
    name: string,
    topic: string,
    type: string,
    rating: string,
    __v: number
}[]

type questionsType = {
    isLoaded: boolean,
    content: {
        _id: string,
        testId: string,
        questId: string,
        text: string,
        code: string,
        answers:
            {
                answer: string,
                isCorrect: boolean
            }[],
        __v: number 
    }[]
}

type Test = {
    testId: string;
    date: string;
}

function CardTest(props: string) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [btnsortup, setBtnsortup] = useState<string>('light');
    const [btnsortdown, setBtnsortdown] = useState<string>('light');
    const [status, setStatus] = useState<string>('Не пройдено');
    const [isEditMode, setEditMode] = useState(false);
    const [questions, setQuestions] = useState<questionsType>({
        isLoaded: false,
        content: []
    });
    const auth = useAppSelector(selectAuth);
    const url = 'https://corejs-server.herokuapp.com/';
    const userToken = localStorage.token;
    const config = {
        headers: {
            'Authorization':`Bearer ${userToken}`,
        }
    };

    let complexity: string | undefined = '';

    async function passed() {
        try {
            if (auth) {
                const userId = localStorage.getItem('userID');
                const resp = await axios.get(`${url}users/${userId}`, config);
                const currentStat = await resp.data;
                const passedTests = currentStat.passedTests;
                console.log(passedTests)
                passedTests.forEach((test: Test) => {
                    if (test.testId === String(questionsFilter[currentQuestion].questId)) {
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
        return function cleanup() {
            setStatus
        }
    })

    React.useEffect(() => {
        ( async () => {
            const allTests = await axios.get(`${url}tests`);
            const allTestsData: testsType = await allTests.data;
            console.log(allTestsData);
            const filteredAllTestsData = allTestsData.filter((test) => {
                if (test.type === props) {
                    return true;
                }
            });
            console.log(filteredAllTestsData);
            const ID = filteredAllTestsData[0]!.id;
            complexity = filteredAllTestsData[0]!.rating;
            const questResp = await axios.get(`${url}tests/questions/${ID}`);
            const questData = await questResp.data;
            setQuestions({
                isLoaded: true,
                content: questData
            });
        })();
    }, [])

    let questionsFilter = questions.content;
    console.log(questionsFilter);
    //let questionsFilter = questions.filter((item) => item.type === props);
  
    
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
        //questionsFilter = questionsFilter.sort((a, b) => a.complexity - b.complexity);
        setBtnsortup('info');
        setBtnsortdown('light');
        setCurrentQuestion(0);
        //passed();
    }
    const sortDown = () => {
        //questionsFilter = questionsFilter.sort((a, b) => b.complexity - a.complexity);
        setBtnsortdown('info');
        setBtnsortup('light');
        setCurrentQuestion(0);
        //passed();
    }

    document.addEventListener('keyup', (event) => {
        //console.log(event);
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

    const body = questions.isLoaded ?
        <div className='question-section' key={questionsFilter[currentQuestion].questId}>
            <div className="question-content">
                <div className="question-header">
                <div className="section_nextprev">
                        <button onClick={prevQuestion} className={classPrev}>Prev</button>
                        <button onClick={nextQuestion} className={classNext}>Next</button>
                    </div>
                    <div className="question-number">
                        Вопрос {currentQuestion+1}/{questionsFilter.length}
                    </div>
                    { auth ? 
                        <div className="question-status">
                            {status}
                        </div>
                        : 
                        <div></div>
                    }
                    { isEditMode ?
                        <div className="question-complexity-edit">
                            Сложность: <input type={'text'} defaultValue={`${complexity}`}></input>
                        </div>
                        :
                        <div className="question-complexity">
                            Сложность: {complexity}
                            <Button className="btn-compl complexity-up" onClick={sortUp} variant={btnsortup}>&uarr;</Button>
                            <Button className="btn-compl complexity-down" onClick={sortDown} variant={btnsortdown}>&darr;</Button>
                        </div>
                    }
                </div>
                { isEditMode ?
                    <div className='question-title-edit'><input type={'text'} defaultValue={`${questionsFilter[currentQuestion].text}`}></input></div>
                    :
                    <div className='question-title'>{questionsFilter[currentQuestion].text}</div>
                }
                { isEditMode ?
                    <div className='question-code-edit'><input type={'text'} defaultValue={`${questionsFilter[currentQuestion].code}` || ''}></input></div>
                    :
                    <div className='question-code' dangerouslySetInnerHTML={{__html: questionsFilter[currentQuestion].code || ''}}></div>
                }
                <div className='answer-section'>
                    {questionsFilter[currentQuestion].answers.map((answerOption, index) => (
                        <Answer {...answerOption} weight={`${complexity}`} id={questionsFilter[currentQuestion].questId} key={index}/>
                    ))}
                </div>
            </div>
            <button onClick={() => setEditMode(true)}>Редактировать</button>
        </div>
        :
        ''

    return (
        <>{body}</>
    )
    
}

export default CardTest