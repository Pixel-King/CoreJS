import axios from 'axios';
import * as React from 'react';
import { Accordion } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { dbHostURL } from '../../dburl';
import testSlice, { selectTestState } from './testSlice';

type questionsStateType = {
    isLoaded: boolean,
    content: questionsType[]
}

type questionsType = {
    _id: string,
    testId: string,
    questId: string,
    text: string,
    code: string,
    complexity: number,
    answers:
        {
            answer: string,
            isCorrect: boolean
        }[],
    __v: number
}

type testsType = {
    _id: string,
    id: string,
    name: string,
    topic: string,
    type: string,
    rating: string,
    __v: number
}[]

const ChangeQuest: React.FC = () => {
    const history = useNavigate();
    const test = useAppSelector(selectTestState);
    const [complexityRangeValue, setComplexity] = React.useState(1);
    
    const [questions, setQuestions] = React.useState<questionsStateType>({
        isLoaded: false,
        content: []
    });

    const [isEdit, setEdit] = React.useState('');
    const [isPosting, setPosting] = React.useState(false);

    const userToken = localStorage.token;
    const config = {
        headers: {
            'Authorization':`Bearer ${userToken}`,
        }
    };
    
    React.useEffect(() => {
        ( async () => {
            try {
                const quests = await axios.get(`${dbHostURL}/tests/questions/${test.testId || localStorage.getItem('testId')}`, config);
                const questsData: questionsType[] = await quests.data;
                if (questsData.length !== 0) {
                    setQuestions({
                        isLoaded: true,
                        content: questsData
                    });
                }
            } catch (e) {
                console.error(e);
            }
        })();
    }, [])

    async function deleteHandler(idForDelete: string) {
        try {
            const del = await axios.delete(`${dbHostURL}/tests/questions/${idForDelete}`, config);
            if (del.status === 200) {
                console.log('deleted');
                location.reload();
            }
        } catch (e) {
            console.error(e);
        }
    }

    function discardHandler() {
        history('/tests');
    }

    function clickOnCreateHandler() {
        history('/create-question');
    }

    function rangeComplexityHandler() {
        const question = document.getElementById(isEdit);
        if (question) {
            const value = (question.querySelector('.form-range') as HTMLInputElement).value;
            setComplexity(+value);
        } 
    }


    async function submitClickHandler() {
        try {
            setPosting(true);
            const question = document.getElementById(isEdit);
            if (question) {
                const text = (question.querySelector('.question-text') as HTMLInputElement).value;
                const code = question.querySelector('.question-code') ? (question.querySelector('.question-code') as HTMLInputElement).value : null;
                const answersElem = question.querySelector(`.change-quest-answers-${isEdit}`);
                if (answersElem) {
                    const answers = Array.prototype.slice.call(answersElem.getElementsByTagName('textarea'));
                    const flags = Array.prototype.slice.call(answersElem.getElementsByTagName('input'));
                    const complexity = (question.querySelector('.form-range') as HTMLInputElement).value;
                    const changedAnswers: { answer: string, isCorrect: boolean }[] = [];
                    answers.forEach((answer, index) => {
                        changedAnswers.push({
                            answer: answer.value,
                            isCorrect: flags[index].checked
                        })
                    })
                    const body = code ? 
                        {
                            "questId": isEdit,
                            "text": text,
                            "code": code,
                            "complexity": + complexity,
                            "answers": changedAnswers,
                        }
                        :
                        {
                            "questId": isEdit,
                            "text": text,
                            "code": "<code></code>",
                            "complexity": + complexity,
                            "answers": changedAnswers,
                        }
                    const updateQuery = await axios.post(`${dbHostURL}/tests/questions/change/${isEdit}`, body, config);
                    if (updateQuery.status === 201) {
                        setPosting(false);
                        setEdit('');
                        console.log('success');
                    } else {
                        setEdit('');
                    }
                }
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className='change-quests-wrap container-md'>
            <div className={`change-quests-button-block-${test.testId} position-sticky`}>
                { questions.content.length !== 0 && <button className='change-quests-button-new btn btn-primary m-2' onClick={ clickOnCreateHandler }>Создать вопрос</button> }
                <button className='change-quests-button-new btn btn-warning m-2' onClick={discardHandler}>Назад</button>
            </div>
            <Accordion>
            {
                questions.content.map((el, index) => {
                    return (
                        <Accordion.Item eventKey={`${index}`}>
                            <Accordion.Header><h3>Вопрос <small className="text-muted">{`${index + 1}`}</small></h3></Accordion.Header>
                                <Accordion.Body>
                                <div key={el.questId} id={el.questId} className={ `change-quest-${el.questId}  border border-4 rounded mt-2 mb-2` }>
                                <div className={ `change-quest-text-${el.questId} m-2 p-2` }>
                                <p>Текст вопроса:</p>
                                <textarea id={`${el.questId}-text`} disabled={ isEdit === el.questId ? false : true } className='question-text form-control' defaultValue={ el.text }></textarea>
                            </div>
                            { el.code && 
                            <div key={`change-quest-code-${el.questId}`} className={`change-quest-code-${el.questId}`}>
                                <p>Код из вопроса:</p>
                                <textarea id={`${el.questId}-code`} disabled={ isEdit === el.questId ? false : true } className='question-code form-control' defaultValue={el.code}></textarea>
                            </div> }
                            <div key={`change-quest-complexity-${el.questId}`} className={`change-quest-complexity-${el.questId}`}>
                                <p key={`change-quest-complexity-value-${el.questId}`}>Сложность вопроса (от 1 до 5): {isEdit === el.questId ? `${complexityRangeValue}` : el.complexity}</p>
                                <input id={'range-complexity'} type="range" disabled={ isEdit === el.questId ? false : true } onChange={rangeComplexityHandler} defaultValue={`${el.complexity}`} min="1" max="5" step="1" className="form-range m-2 p-2"></input>
                            </div>
                            <div key={`change-quest-answers-${el.questId}`} className={`change-quest-answers-${el.questId} m-2 p-2`}>
                                {
                                    el.answers.map((answer, index) => {
                                        return (
                                            <div key={`change-quest-answer-${index}-${el.questId}`} className={`change-quest-answer-${index}-${el.questId} border border-2 rounded m-2 p-2`}>
                                                <p>{`Ответ ${index + 1}`}</p>
                                                <textarea id={`${el.questId}-answer${index + 1}`} disabled={ isEdit === el.questId ? false : true } className='form-control' defaultValue={answer.answer}></textarea>
                                                <div key={`change-quest-answer-correct-${index}-${el.questId}`} className='d-flex align-items-center'>
                                                    <p style={{ padding: '0', margin: '0 2%' }}>Ответ правильный?</p>
                                                    <input type={'radio'} className="answer" name={`radio-${el.questId}`} disabled={ isEdit === el.questId ? false : true } defaultChecked={answer.isCorrect ? true : false}></input>
                                                </div>
                                            </div>
                                        )
                                    })
                                }        
                            </div>
                            <button key={`ok-button-${el.questId}`} className={`btn btn-primary m-2 ${isEdit === el.questId ? '' : 'disabled'}`} disabled={isPosting} onClick={ submitClickHandler }>Ок</button>
                            <button key={`cancel-button-${el.questId}`} className={`btn btn-primary m-2 ${isEdit === el.questId ? '' : 'disabled'}`} disabled={isPosting} onClick={ () => setEdit('') }>Отмена</button>
                            <button key={`edit-button-${el.questId}`} className='btn btn-warning m-2' disabled={ isEdit === el.questId ? true : false } onClick={ () => setEdit(el.questId) }>Редактировать вопрос</button>
                            <button key={`delete-button-${el.questId}`} className='btn btn-danger m-2' disabled={ isEdit === el.questId ? true : false } onClick={ () => deleteHandler(el.questId) }>Удалить вопрос</button>

                                </div>
                                </Accordion.Body>                                    
                        </Accordion.Item>
                    )
                })
            }       
            </Accordion>
        </div>
    )
}

export default ChangeQuest;