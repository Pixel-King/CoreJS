import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAppSelector } from '../../app/hooks';
import { selectUserState } from '../User/userSlice';
import ChangeInfForm from './ChangeForm/ChangeInfForm';
import ChangePasswordForm from './ChangeForm/ChangePasswordForm';
import ResetProgresForm from './ChangeForm/ResetProgresForm';
import './ChangeProfile.css';

interface userBody{
    id: string;
    email: string;
    role: string;
    userName: string;
    rating: string;
    passedTests: { date: string, testId: string}[];
    readedArticle: { date: string, articleId: string}[];
}

const ChangeProfile: React.FC = () =>{
    const [loading, setLoading] = useState<boolean>(true);
    const user = useAppSelector(selectUserState);

  

    useEffect(()=>{
        getUserAsync();
    }, []);

    async function getUserAsync() {
        try {
            setLoading(true);
            let config = {
                headers: {
                  Authorization: `Bearer ${user.token}`
                }
              }
            const res = await axios.get(`https://corejs-server.herokuapp.com/users/${user.id}`, config);
            const data: userBody = res.data;
            setLoading(false);
        } catch (e: unknown) {
            const err = e as AxiosError;
            setLoading(false);
        }
    }

    return (
        <>
        <div className='change-profile_wrap'>
            <ChangeInfForm />
            <ChangePasswordForm />
            <ResetProgresForm />
        </div>
        </>
    );
}

export default ChangeProfile;