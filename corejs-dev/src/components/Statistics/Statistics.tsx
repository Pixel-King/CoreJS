import * as React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectAuth } from '../Autorisation/SignInForm/authSlice';
import { selectUserState } from '../User/userSlice';
import { StatisticUser } from './statisticUser';

const Statistics: React.FC = () => {
    const number_tests = localStorage.getItem('tests_number');
    const score_tests = localStorage.getItem('tests_score');
    const auth = useAppSelector(selectAuth);
    // const user = useAppSelector(selectUserState);
    // console.log('user', user.id);
    //console.log(auth);
    return (
        <div>
            {auth ?
            <StatisticUser />
            :
            <h2>
                Статистика доступна только зарегистрированным пользователям
            </h2>}
        </div>
    )
}

export default Statistics;