import React, { Component, useState } from "react";
import { AnswerType } from "./textTest";
import Button from 'react-bootstrap/Button';
import CardTest from './CardTest';
import axios, { AxiosError } from 'axios';
//import useSound from 'use-sound';
import correctSound from '../../sound/correct-answer-sound.mp3';
import wrongSound from '../../sound/wrong-sound.mp3';
import { useAppSelector } from "../../app/hooks";
import { selectSound } from "../Sound/ToggleSoundSlice";
import { selectAuth } from "../Autorisation/SignInForm/authSlice";

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
    const sound = useAppSelector(selectSound);
    const auth = useAppSelector(selectAuth);

    async function handleAnswerButtonClick(isCorrect: boolean, weight: number, id: number) {
        //const [playSound] = useSound(correctSound);
        const alarmCorrect = new Audio(correctSound);
        const alarmWrong = new Audio(wrongSound);

        try {
            if (isCorrect) {
                const url = 'https://corejs-server.herokuapp.com';
                const userToken = localStorage.token;
                const config = {
                    headers: {
                        'Authorization':`Bearer ${userToken}`,
                    }
                };

                setState( 'success');
                if (sound) {
                    alarmCorrect.play();
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
                if (sound) {
                    alarmWrong.play();
                }
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