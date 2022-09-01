import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import "./registration.css";
import Loading from '../../Loading/Loading';
import SuccessReg from './SuccessfulReg';
import RegErrMessage from './RegErrMessage';

interface regBody{ 
    email: string,
    userName: string,
    password: string,
}

const Regestraition: React.FC = () =>{
    const [checked, setChecked] = React.useState<boolean>(false);
    const [regStatus, setRegStatus] = useState<boolean>(false);
    const [LoadingStatus, setLoadingStatus] = useState<boolean>(false);
    const [email, setEmail] = useState<string>(sessionStorage.getItem('reg-email') ? `${sessionStorage.getItem('reg-email')}`: '');
    const [username, setUsername] = useState<string>(sessionStorage.getItem('reg-username') ? `${sessionStorage.getItem('reg-username')}` : '');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string[]>([]);

    useEffect(()=>{
        sessionStorage.setItem('reg-email', email);
    }, [email]);

    useEffect(()=>{
        sessionStorage.setItem('reg-username', username);
    }, [username]);

    async function regAsync(email :string, userName: string, password: string) {
        try {
        setLoadingStatus(true);
        setError([]);
        const body:regBody = {
            email, userName, password
        }
        const res = await axios.post('http://localhost:4200/auth/signup', body);
        if (res.status === 201) {
            setRegStatus(true)
        } 
        setLoadingStatus(false);
        } catch (e: unknown) {
            const err = e as AxiosError;
            const errResp: any = err.response!.data;
            if (errResp) {
                if ( Array.isArray(errResp.message)) {
                    setError(errResp.message); 
                } else {
                    setError([errResp.message]);
                }
            }
            setLoadingStatus(false);
        }
    } 

    function sendAuthForm() {}

    return (
        <>
        {!regStatus && <div className="auth-wrap">
            <form className='reg-form'>
                <label htmlFor="reg-email" className='mb-2'>Адрес эл. почты:</label>
                <input type="email" name="reg-email" id="reg-email" defaultValue={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="reg-username" className='mb-2'>Никнейм:</label>
                <input type="text" id='reg-username' defaultValue={username} autoComplete={"off"} onChange={(e)=>setUsername(e.target.value)}/>
                <label htmlFor="reg-pas" className='mb-2'>Пароль:</label>
                <input type={checked? "text" : "password"} name="reg-pas" id="reg-pas" onChange={(e)=>setPassword(e.target.value)}/>
                <input type="checkbox" name="Show Password" id="checked-pas__auth" checked={checked} onChange={()=>setChecked(!checked)}/> Показать пароль
                <button className="mt-4 btn btn-primary" onClick={(e)=>{
                 e.preventDefault();
                 regAsync(email, username, password);   
                }} disabled={LoadingStatus}>{LoadingStatus? <Loading classStr={ {"width": "35px"} }/>: "Подтвердить"}</button>
                <RegErrMessage err={error}/>
            </form>
        </div>}
        {regStatus && <SuccessReg/>}
        </>
    );
}

export default Regestraition;