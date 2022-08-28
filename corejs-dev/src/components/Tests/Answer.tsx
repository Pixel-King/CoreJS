import React, { Component } from "react";
import { AnswerType } from "./textTest";
import Button from 'react-bootstrap/Button';

interface IProps {
    answer: string,
    isCorrect: boolean,
}

type PropsType = {
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

    handleAnswerButtonClick(isCorrect: boolean) {
        if (isCorrect) {
            this.setState({
                color: 'success'
            });
        } else {
            this.setState({
                color: 'danger'
            });
        }
    };

    render(): React.ReactNode {
        const {answer, isCorrect} = this.props;
        return (
            <Button onClick={
                () => this.handleAnswerButtonClick(isCorrect)
            } className='button_answer' variant={this.state.color} >
                {answer}
            </Button>
        )
    }
}

export default Answer;