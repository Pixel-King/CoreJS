import React, { Component } from "react";
import { AnswerType } from "./textTest";
import Button from 'react-bootstrap/Button';
import CardTest from './CardTest';

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

    handleAnswerButtonClick(isCorrect: boolean, weight: number) {
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
        } else {
            this.setState({
                color: 'danger'
            });
            return 0;
        }
    };

    render(): React.ReactNode {
        const {answer, isCorrect, weight, id} = this.props;
        return (
            <Button onClick={
                () => this.handleAnswerButtonClick(isCorrect, weight)
            } className='button_answer' variant={this.state.color} >
                {answer}
            </Button>
        )
    }
}

export default Answer;