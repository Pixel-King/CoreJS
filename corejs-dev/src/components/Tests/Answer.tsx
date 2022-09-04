import React, { Component } from "react";
import { AnswerType } from "./textTest";
import Button from 'react-bootstrap/Button';
import CardTest from './CardTest';
import axios, { AxiosError } from 'axios';

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

class Answer extends React.Component<IProps, IState> {
    constructor(props: PropsType) {
        super(props)
        this.state = {
            color: 'light',
        };
        this.handleAnswerButtonClick = this.handleAnswerButtonClick.bind(this);
    }

    async handleAnswerButtonClick(isCorrect: boolean, weight: number, id: number) {
        try {
            const url = 'http://localhost:4200';
            const userToken = localStorage.token;
            const config = {
                headers: {
                    Authorization:`Bearer ${userToken}`,
                }
            }
            if (isCorrect) {
                this.setState({
                    color: 'success'
                });
    
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
                        date: (new Date()).toISOString().split('T')[0],
                        testId: `${id}`,
                    },
                    config
                );
            } else {
                this.setState({
                    color: 'danger'
                });
                return 0;
            }
        } catch (e: unknown) {
            const err = e as AxiosError;
            console.log(err);
        }
    };

    render(): React.ReactNode {
        const {answer, isCorrect, weight, id} = this.props;
        return (
            <Button onClick={
                () => this.handleAnswerButtonClick(isCorrect, weight, id)
            } className='button_answer' variant={this.state.color} >
                {answer}
            </Button>
        )
    }
}

export default Answer;