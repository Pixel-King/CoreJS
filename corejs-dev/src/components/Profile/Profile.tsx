import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useAppSelector } from '../../app/hooks';
import { selectUserState } from '../User/userSlice';
import './Profile.css';
import ProfileImg from './ProfileImg/ProfileImg';
import { Spinner } from 'react-bootstrap';

interface userBody{
    id: string;
    email: string;
    role: string;
    userName: string;
    rating: string;
    passedTests: { date: string, testId: string}[];
    readedArticle: { date: string, articleId: string}[];
}

const Profile = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const user = useAppSelector(selectUserState);

    const [email, setEmail] = useState<string>('');
    const [NickName, setNickName] = useState<string>('');
    const [rang, setRang] = useState<string>('');
    const [rangProgress, setRangProgres] = useState('');
    const [passedTests, setPasedTest] = useState<{ date: string, testId: string}[]>([]);

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
            const res = await axios.get(`http://localhost:4200/users/${user.id}`, config);
            const data: userBody = res.data;
            setEmail(data.email);
            setNickName(data.userName);
            setRang(+data.rating < 50 ? "Junior" : +data.rating < 150 ? "Middle" : "Senior");
            setPasedTest(data.passedTests);
            setLoading(false);
        } catch (e: unknown) {
            const err = e as AxiosError;
            setLoading(false);
        }
    }

    return (
        <>
        {!loading && <div className='user-profile__wrap'>
                <section className='profile-inf__wrap'>
                    <div className="profile-img__wrap">
                        <ProfileImg developer={user.rating}></ProfileImg>
                    </div>
                    <div className='user-inf m-4'>
                        <h3>Эл. почта: </h3>
                        <div className='p-r fs-5 typewriter'>
                            <div className='transform-translate-x'>{email}</div>
                        </div>
                        <h3>Позывной:</h3>
                        <div className='p-r fs-5 typewriter'>
                            <div className='transform-translate-x'>{NickName}</div>
                        </div>
                        <h3>Ранг:</h3>
                        <div className='typewriter p-r fs-5'>
                            <div className='transform-translate-x'>{rang}</div>
                        </div>
                    </div>
                </section>
                <section className='user-stat__wrap'>
                    
                </section>
            </div>}
            {loading && <Spinner animation="border" variant="primary" />}
        </>
    );
}

export default Profile;