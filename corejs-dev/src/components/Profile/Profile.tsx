import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectAuth } from '../Autorisation/SignInForm/authSlice';
import { selectUserState } from '../User/userSlice';
import './Profile.css';
import userImg from './user-icon.jpg';

const Profile = () => {
    const [red, setRed] = useState<boolean>(false);
    const auth = useAppSelector(selectAuth);
    const user = useAppSelector(selectUserState);
    const history = useNavigate();

    useEffect(()=>{
        if(!auth) history("/");
    }, []);

    return (
        <>
            <div className='user-profile__wrap'>
                <section className='profile-inf__wrap'>
                    <div className="profile-img__wrap">
                        <img src={userImg} className="profile-img"></img>
                    </div>
                    <div className='user-inf m-4'>
                        <h3>Эл. почта: </h3>
                        <div className='fs-5 m-2'>{user.email}</div>
                        <h3>Позывной:</h3>
                        <div className='fs-5 m-2'>{user.userName}</div>
                        <h3>Рейтинг: <div>0</div></h3>
                    </div>
                </section>
                <section className='user-stat__wrap'>
                    
                </section>
            </div>
        </>
    );
}

export default Profile;