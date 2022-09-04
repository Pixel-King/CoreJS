import React, { Component, useState } from "react";
import { AnswerType } from "./textTest";
import Button from 'react-bootstrap/Button';
import CardTest from './CardTest';
import axios, { AxiosError } from 'axios';
//import useSound from 'use-sound';
// import correctSound from '../../sound/correct-answer-sound.mp3';
// import wrongSound from '../../sound/wrong-sound.mp3';
import { useAppSelector } from "../../app/hooks";
import { selectAuth } from "../Autorisation/SignInForm/authSlice";
// import { selectSound } from "../Sound/ToggleSoundSlice";


interface IProps {
    id: number;
    weight: number,
    answer: string,
    isCorrect: boolean,
}

type PropsType = {
    id: number;
    weight: number,
    answer: string,
    isCorrect: boolean,
}

interface IState {
  color: string;
}

const Answer: React.FC<PropsType> = ({id, weight, answer, isCorrect}) => {
    const [state, setState] = useState('light');
    const auth = useAppSelector(selectAuth);

    async function handleAnswerButtonClick(isCorrect: boolean, weight: number, id: number) {

        try {
            if (isCorrect) {
                const url = 'http://localhost:4200';
                const userToken = localStorage.token;
                const config = {
                    headers: {
                        'Authorization':`Bearer ${userToken}`,
                    }
                };

                const LS_tests_score = localStorage.getItem('tests_score');
                const LS_tests_number = localStorage.getItem('tests_number');

                setState( 'success');

                if (LS_tests_score && LS_tests_number) {
                    const score = (Number(LS_tests_score) + weight).toString();
                    const number_tests = (Number(LS_tests_number) + 1).toString(); 
                    localStorage.setItem('tests_score', score);
                    localStorage.setItem('tests_number', number_tests)
                } else {
                    localStorage.setItem('tests_score', weight.toString());
                    localStorage.setItem('tests_number', '1');
                }
                if (auth) {
                    const userId = localStorage.getItem('userID');
                    const resp = await axios.get(`${url}/users/${userId}`, config);
                    const currentStat = await resp.data;
                    const passedTests = currentStat.passedTests;
                    if (!passedTests.some((item: { date: string; testId: string }) => {
                        if (item.testId === `${id}`) {
                            return true;
                        } else {
                            return false;
                        }
                    })) {
                        await axios.post(`${url}/users/updatepastest/${localStorage.userID}`,
                            {
                                rating: `${weight}`,
                                date: (new Date()).toISOString().split('T')[0],
                                testId: `${id}`,
                            },
                            config
                        );
                    }
                }
            } else {
                setState('danger');
                return 0;
            }
        } catch (e: unknown) {
            const err = e as AxiosError;
            console.log(err);
        }
    };

    return (
        <Button 
        onClick={async () => await handleAnswerButtonClick(isCorrect, weight, id)} 
        className='button_answer' 
        variant={state} >
            {answer}
        </Button>
    )
}


export default Answer;