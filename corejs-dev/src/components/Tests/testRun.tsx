import axios, { AxiosError } from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { dbHostURL } from '../../dburl';
import { selectAuth } from '../Autorisation/SignInForm/authSlice';
import { selectUserState } from '../User/userSlice';
import AnswerNotFounModal from './Modal/AnswerNotFounModal';
import PassedTestModal from './Modal/PassedTestModal';
import TestQuest from './TestQuestion';
import { selectTestState } from './testSlice';
import { AnswerType, QuestionType } from './textTest';
import { questions } from './textTest';
import correctSound from '../../sound/correct-answer-sound.mp3';
import wrongSound from '../../sound/wrong-sound.mp3';
import { selectSound } from '../Sound/ToggleSoundSlice';

const RunTest:React.FC = () =>{
    const [loading, setLoading] = useState<boolean>(false);
    const [testIsFinis, setTestIsFinis] = useState<boolean>(false);
    const [userReplied, setUserReplied] = useState<boolean>(false);
    const [quest, setQuest] = useState<{text: string, code: string, answers: AnswerType[]}[]>([]);
    const [counter, setCounter] = useState<number>(0);
    const [countCorrectAns, setCountCorrectAns] = useState<number>(0);

    const alarmCorrect = new Audio(correctSound);
    const alarmWrong = new Audio(wrongSound);
    const sound = useAppSelector(selectSound);
    const test = useAppSelector(selectTestState);
    const user = useAppSelector(selectUserState);
    const auth = useAppSelector(selectAuth);
    const history = useNavigate();

    useEffect(()=>{
        if (!test.testId) {
            history('/tests');
        } else {
            getQuestAsync();
        }
        // ЭТО МОЖНО ИСПОЛЬЗОВАТЬ ТОЛЬКО ДЛЯ ПРОВЕРКИ РАБОТОСПОСОБНОСТИ, ВОПРОСЫ К ТЕСТАМ ГРУЗЯТСЯ с БД (33 строка)
        // setQuest([ 
        //     {
        //     text: "А почему так? Метод find ищет один (первый попавшийся) элемент, на котором функция-колбэк вернёт trueНа тот случай, если найденных элементов может быть много, предусмотрен метод arr.filter(fn)Синтаксис этого метода схож с find, но filter возвращает массив из всех подходящих элементов:",
        //     code: '<span>12341234sdfasdf</span>',
        //     answers: [
        //         {isCorrect: false, answer: '1'},
        //         {isCorrect: true, answer: '1'},
        //         {isCorrect: false, answer: '1'},
        //         {isCorrect: false, answer: '1'},
        //         ]
        //     },
        //     {
        //     text: "А мб так так?",
        //     code: '<span>12341234sdfasdf</span>',
        //     answers: [
        //         {isCorrect: true, answer: '2'},
        //         {isCorrect: false, answer: '2'},
        //         {isCorrect: false, answer: '2'},
        //         {isCorrect: false, answer: '2'},
        //         ]
        //     },
        // ]);
    }, []);

    async function getQuestAsync() {
        try {
            setLoading(true);
            const res = await axios.get(`${dbHostURL}/tests/questions/${test.testId}`);
            setQuest(res.data);
            setLoading(false);
        } catch (e: unknown) {
            const err = e as AxiosError;
            console.error(err.message);
            setLoading(false);
        }
    }

    function swQuest(){
        setUserReplied(false);
        if (quest[counter + 1]) {
            setCounter(counter + 1)
        } else (
            setTestIsFinis(true)
        )
    }

    function increment(yes: boolean) {
        setUserReplied(true);
        if (yes) {
            if (sound) {
                alarmCorrect.play();
            }
            setCountCorrectAns(countCorrectAns + 1); 
        } else {
            if (sound) {
                alarmWrong.play();
            }
        }
    }

    function finishTest() {
        const persent = countCorrectAns * 100 / quest.length;
        if (persent >= 70) {
            console.log('testId', test.testId);
            updateUserPassedTest();
        }
        setTestIsFinis(false);
        history('/tests');
    }

    async function updateUserPassedTest() {
        try {
            const testRes:any = await axios.get(`${dbHostURL}/tests/${test.testId}`);
            const date = `${new Date()}`.split(' ');
            const body: any = {
                rating: testRes.data.rating,
                date: `${date[3]}.${new Date().getMonth() + 1}.${date[2]}`,
                testId: test.testId
            }
            let config = {
                headers: {
                  Authorization: `Bearer ${user.token}`
                }
            }
            if (auth) {
                await axios.post(`${dbHostURL}/users/updatepastest/${user.id}`, body, config);
            }
            
        } catch (e: unknown) {
            const err = e as AxiosError;
            console.error(err.message);
        }
    }

    return (
        <>
        <div className='test-courusel'>
            <div className='test-courusel__item'>
            {quest.length &&
             !testIsFinis &&
             !loading && <>
            <TestQuest 
                text={quest[counter].text} 
                code={quest[counter].code }
                answers={quest[counter].answers}
                onAnswer={increment}
                />
                <div className='text-next-quest'>
                <Button className='btn-primary' disabled={!userReplied} onClick={()=>swQuest()}>Следующий Вопрос</Button>
            </div>
            </>
            }
            {testIsFinis && <>
                <PassedTestModal 
                    show={testIsFinis}
                    persent={`${countCorrectAns * 100 / quest.length}`}
                    onHide={()=>finishTest()}
                    />
            </> 
            }
            {!quest.length && <AnswerNotFounModal/>}
            {loading && <Spinner animation="border" variant="primary"/>}
            </div>

        </div>
        </>
    );
}

export default RunTest;