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

type PropsType = {
    id: number;
    weight: number,
    answer: string,
    isCorrect: boolean,
}

interface IState {
  color: string;
}

// class Answer extends React.Component<IProps, IState> {
//     constructor(props: PropsType) {
//         super(props)
//         this.state = {
//             color: 'light',
//         };
//         this.handleAnswerButtonClick = this.handleAnswerButtonClick.bind(this);
//     }
const Answer: React.FC<PropsType> = ({id, weight, answer, isCorrect}) => {
    const [state, setState] = useState('light');
    const sound = useAppSelector(selectSound);

    async function handleAnswerButtonClick(isCorrect: boolean, weight: number, id: number) {
        //const [playSound] = useSound(correctSound);
        const alarmCorrect = new Audio(correctSound);
        const alarmWrong = new Audio(wrongSound);

        try {
            const url = 'http://localhost:4200';
            const userToken = localStorage.token;
            const config = {
                headers: {
                    Authorization:`Bearer ${userToken}`,
                }
            }
            if (isCorrect) {
                setState( 'success');
                if (sound) {
                    alarmCorrect.play();
                }
                //playSound();

                const LS_tests_score = localStorage.getItem('tests_score');
                const LS_tests_number = localStorage.getItem('tests_number');
                if (LS_tests_score && LS_tests_number) {
                    const score = (Number(LS_tests_score) + weight).toString();
                    const number_tests = (Number(LS_tests_number) + 1).toString(); 
                    localStorage.setItem('tests_score', score);
                    localStorage.setItem('tests_number', number_tests)
                } else {
                    localStorage.setItem('tests_score', weight.toString());
                    localStorage.setItem('tests_number', '1');
                }
                await axios.post(`${url}/users/updatepastest/${localStorage.userID}`,
                    {
                        rating: `${weight}`,
                        date: `${(new Date()).getDate()}.${(new Date()).getMonth() + 1}.${(new Date()).getFullYear()}`,
                        testId: `${id}`,
                    },
                    config
                );
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