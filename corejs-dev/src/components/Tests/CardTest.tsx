import React, { Component } from "react";
import { QuestionType } from "./textTest";
import { questions } from './textTest';
import { Button } from "react-bootstrap";
import Answer from "./Answer";
import { useState } from "react";

function CardTest(props: string) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    let questionsFilter = questions;
    if (props === 'theory' || props === 'practice') {
        questionsFilter = questions.filter((item) => item.type === props)
    }

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
    return (
        <div className='question-section' key={questionsFilter[currentQuestion].id}>
            <div className='question-title'>{questionsFilter[currentQuestion].question}</div>
            <div className='question-code' dangerouslySetInnerHTML={{__html: questionsFilter[currentQuestion].code || ''}}></div>
            <div className='answer-section'>
                {questionsFilter[currentQuestion].answerOptions.map((answerOption, index) => (
                    <Answer {...answerOption} key={index}/>
                ))}
            </div>
            <div className="section_nextprev">
                <Button onClick={prevQuestion} variant="dark">Prev</Button>
                <Button onClick={nextQuestion} variant="dark">Next</Button>
            </div>
        </div>
    )
}

export default CardTest