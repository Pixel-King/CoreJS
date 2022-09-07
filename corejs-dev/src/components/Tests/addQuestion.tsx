import axios from 'axios';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { JsxElement } from 'typescript';
import { useAppSelector } from '../../app/hooks';
import testSlice, { selectTestState } from './testSlice';

const AddQuest: React.FC = () => {
    const history = useNavigate();
    const [rangeValue, setRangeValue] = React.useState(3);
    const [complexityRangeValue, setComplexity] = React.useState(1);
    const [inProcess, setProcessing] = React.useState(false);

    const url = 'https://corejs-server.herokuapp.com/';
    const userToken = localStorage.token;
    const config = {
        headers: {
            'Authorization':`Bearer ${userToken}`,
        }
    };

    function rangeHandler() {
        const value = (document.getElementById('range') as HTMLInputElement).value;
        setRangeValue(+value);
    }

    function rangeComplexityHandler() {
        const value = (document.getElementById('range-complexity') as HTMLInputElement).value;
        setComplexity(+value);
    }

    function clickOnBackHandler() {
        history('/change-test-questions');
    }

    function generateAnswersFields() {
        const answers: JSX.Element[] = [];
        for (let i = 0; i < rangeValue; i ++) {
            answers.push(
                <div key={`create-quest-answer-${i + 1}`} className='answer'>
                    <p>Ответ {`${i + 1}`}</p>
                    <textarea className='form-control'></textarea>
                    <div key={`create-quest-answer-valid-${i + 1}`} className='valid d-flex align-items-center'>
                        <p style={{ padding: '0', margin: '0 2%' }}>Ответ правильный?</p>
                        <input type={'radio'} className="answer-radio" name={`radio`}></input>
                    </div>
                </div>
            )
        }
        return answers;
    }
    
    async function creationHandler() {
        try {
            setProcessing(true);
            const question = document.getElementById('create-quest');
            if (question) {
                const text = (question.querySelector('.question-text') as HTMLInputElement).value;
                const code = question.querySelector('.question-code') ? (question.querySelector('.question-code') as HTMLInputElement).value : null;
                const answersElem = question.querySelector('.create-quest-answers');
                if (answersElem) {
                    const answers = Array.prototype.slice.call(answersElem.getElementsByTagName('textarea'));
                    const flags = Array.prototype.slice.call(answersElem.querySelectorAll('input[type=radio]'));

                    const changedAnswers: { answer: string, isCorrect: boolean }[] = [];
                    answers.forEach((answer, index) => {
                        changedAnswers.push({
                            answer: answer.value,
                            isCorrect: flags[index].checked
                        })
                    })

                    const body = code ? 
                        {
                            "testId": localStorage.getItem('testId'),
                            "text": text,
                            "code": `<code>${code}</code>`,
                            "complexity": + complexityRangeValue,
                            "answers": changedAnswers,
                        }
                        :
                        {
                            "testId": localStorage.getItem('testId'),
                            "text": text,
                            "code": "<code></code>",
                            "complexity": + complexityRangeValue,
                            "answers": changedAnswers,
                        }
                    const createQuery = await axios.post(`${url}tests/questions/${localStorage.getItem('testId')}`, body, config);
                    if (createQuery.status === 201) {
                        setProcessing(false);
                        history('/change-test-questions');
                    } else {
                        setProcessing(false);
                    }
                }
            }


        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div id={'create-quest'} className='create-quest-wrap container-md border border-4 rounded m-2 p-2'>
            <h2>Создание вопроса</h2>
            <div key={'create-quest-text'} className='create-quest-text border border-2 rounded m-2 p-2'>
                <p>Текст вопроса:</p>
                <textarea className='question-text form-control'></textarea>
            </div>
            <div key={'create-quest-code'} className='create-quest-code border border-2 rounded m-2 p-2'>
                <p>Код вопроса:</p>
                <textarea className='question-code form-control'></textarea>
            </div>
            <div key={'create-quest-complexity'} className='create-quest-complexity border border-2 rounded m-2 p-2'>
                <p>Сложность вопроса (от 1 до 5): {`${complexityRangeValue}`}</p>
                <input id={'range-complexity'} type="range" onChange={rangeComplexityHandler} defaultValue={'1'} min="1" max="5" step="1" className="form-range m-2 p-2"></input>
            </div>
            <div key={'create-quest-answers'} className='create-quest-answers border border-2 rounded m-2 p-2'>
                <p>Выберите количество ответов (от 3 до 5): {`${rangeValue}`}</p>
                <input id={'range'} type="range" onChange={rangeHandler} defaultValue={'3'} min="3" max="5" step="1" className="form-range m-2 p-2"></input>
                {
                    generateAnswersFields()
                }
            </div>
            <button className='btn btn-primary m-2' onClick={creationHandler} disabled={inProcess}>Создать</button>
            <button className='btn btn-primary m-2' onClick={clickOnBackHandler} disabled={inProcess}>Назад</button>
        </div>
    )
}

export default AddQuest;