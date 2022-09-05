import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectUserState } from '../../User/userSlice';
import { setEmailAndUsername } from "../../User/userSlice";

interface userBody{
    id: string;
    email: string;
    role: string;
    userName: string;
    rating: string;
    passedTests: { date: string, testId: string}[];
    readedArticle: { date: string, articleId: string}[];
}


const ChangeInfForm: React.FC = () =>{

    const [email, setEmail] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const user = useAppSelector(selectUserState);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        setEmail(user.email);
        setUserName(user.userName)
    }, []);

    async function changeInfSubmit() {
        try {
            const body: any = {
                email,
                userName
            }
            let config = {
                headers: {
                  Authorization: `Bearer ${user.token}`
                }
              }
            const res = await axios.post(`http://localhost:4200/users/changeinf/${user.id}`, body, config);
            const resData = res.data;
            dispatch(setEmailAndUsername(resData));
        } catch (e: unknown) {
            const err = e as AxiosError;
            console.error(err);
        }
    }

    return (
    <form className='simple_form edit_user'>
        <section>
            <div className='inf-header'>
                <h4>Общая информация</h4>
                {' '}
                <Button onClick={()=>changeInfSubmit()}>Изменить</Button>
            </div>
            <div className='inf-col'>
                <div className='inf-item'>
                    <label htmlFor="">
                        <span>Email:</span>
                    </label>
                    <div>
                        <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className='inf-item'>
                <label htmlFor="">
                        <span>Username:</span>
                    </label>
                    <div>
                        <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
                    </div>
                </div>
            </div>
        </section>
    </form>
    );
}

export default ChangeInfForm;