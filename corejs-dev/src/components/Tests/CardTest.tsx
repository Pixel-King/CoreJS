import React, { Component, MouseEvent } from "react";
import { QuestionType } from "./textTest";
import { questions } from './textTest';
import { Button } from "react-bootstrap";
import Answer from "./Answer";
import { useState } from "react";
import { FiBell, FiBellOff } from 'react-icons/fi';

function CardTest(props: string) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    //const [score, setScore] = useState(0);
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

    }
    const prevQuestion = () => {
        if (currentQuestion === 0) {
            setCurrentQuestion(currentQuestion);
        } else {
            const nextQuestion = currentQuestion - 1;
            setCurrentQuestion(nextQuestion);
        }
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
        }
        if (event.code === 'ArrowLeft') {
            if (currentQuestion === 0) {
                setCurrentQuestion(currentQuestion);
            } else {
                const nextQuestion = currentQuestion - 1;
                setCurrentQuestion(nextQuestion);
            }
        }
    }, {once: true})

    
    return (
        <div className='question-section' key={questionsFilter[currentQuestion].id}>
            <div className="question-content">
                <div className="question-header">
                    <div className="question-number fs-5">
                        Вопрос {currentQuestion+1}/{questionsFilter.length}
                    </div>
                    <div className="question-complexity fs-5">
                        Сложность: {questionsFilter[currentQuestion].complexity}
                    </div>
                </div>
                <div className='question-title'>{questionsFilter[currentQuestion].question}</div>
                <div className='question-code' dangerouslySetInnerHTML={{__html: questionsFilter[currentQuestion].code || ''}}></div>
                <div className='answer-section'>
                    {questionsFilter[currentQuestion].answerOptions.map((answerOption, index) => (
                        <Answer {...answerOption} weight={questionsFilter[currentQuestion].complexity} id={questionsFilter[currentQuestion].id} key={index}/>
                    ))}
                </div>
                <div className="section_nextprev">
                    <button onClick={prevQuestion} className={classPrev}>Prev</button>
                    <button onClick={nextQuestion} className={classNext}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default CardTest