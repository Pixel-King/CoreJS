import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { AnswerType } from './textTest';

const TestQuest: React.FC<{
        text: string, 
        code: string, 
        answers: any[],
        onAnswer: (yes: boolean)=>void,
    }> = ({ text, code, answers, onAnswer})=>{

    const [thisAns, setThisAns] = useState<any[]>([]);

    useEffect(()=>{
        setThisAns(answers.map((el) =>{
            el.isSubmit = false
            return el;
        }));
    }, [answers]);

    function submitAnswer(corect: boolean) {
        setThisAns(answers.map((el) =>{
            el.isSubmit = true
            return el;
        }));
        onAnswer(corect);
    }

    return (
        <>
        <div className="quest-wrap">
            <div className="quest-text_wrap">
                <div className='quest-text'>
                    {text}
                </div>
                <div className='quest-code'>
                <div className='question-code' dangerouslySetInnerHTML={{__html: code || ''}}></div>
                </div>
            </div>
            <div className='quest-answer__wrap'>
                {thisAns.map((el, idx)=>{
                    return (
                        <Button
                            variant={`${el.isCorrect && el.isSubmit ?
                                 "success" : !el.isCorrect && el.isSubmit ?
                                 "danger" : "secondary"
                                }`} 
                            key={idx + 1}
                            disabled={el.isSubmit}
                            className={`quest-submit-answer ${el.isCorrect && el.isSubmit ? "btn-success" : ""}`} 
                            onClick={()=>submitAnswer(el.isCorrect)
                        }>
                            {el.answer}
                        </Button>
                    )
                })}
            </div>
        </div>
        </>
    );
}

export default  TestQuest;