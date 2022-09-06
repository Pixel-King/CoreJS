import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import "./registration.css";
import Loading from '../../Loading/Loading';
import SuccessReg from './SuccessfulReg';
import validator from "validator";
import ShowPas from '../SignInForm/ShowPasSVG/ShowPas';
import { Overlay, Spinner } from 'react-bootstrap';
import { dbHostURL } from '../../../dburl';

interface regBody {
    email: string,
    userName: string,
    password: string,
}

const Regestraition: React.FC = () => {
    const [regStatus, setRegStatus] = useState<boolean>(false);
    const [LoadingStatus, setLoadingStatus] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [emailMesValid, setEmailMesValid] = React.useState<string>('');

    const [username, setUsername] = useState<string>('');

    const [password, setPassword] = useState<string>('');
    const [showPas, setShowPas] = React.useState<boolean>(false);
    const [showButPas, setShowButPas] = React.useState<boolean>(false);
    const [passwordMesValid, setPasswordMesValid] = React.useState<string>('');

    const [error, setError] = useState<string>('');

    const target = React.useRef(null);

    function ValidEmail() {
        if (validator.isEmail(email)) {
          setEmailMesValid('');
        } else {
          setEmailMesValid('Введен некорректный адрес эл.почты');
        }
    }

    function validPassword() {
        if ((password.length >= 8 && password.length <= 20) && (password.search(/\s/g) < 0)) {
          setPasswordMesValid('')
        } else {
          setPasswordMesValid('Введите пароль 8-20 символов и без пробелов');
        }
      }

    useEffect(() => {
        ValidEmail();
    }, [email]);

    useEffect(() => {
        validPassword()
    }, [password]);

    async function regAsync(email: string, userName: string, password: string) {
        try {
            setLoadingStatus(true);
            setError('');
            const body: regBody = {
                email, userName, password
            }
            const res = await axios.post(`${dbHostURL}/auth/signup`, body);
            if (res.status === 201) {
                setRegStatus(true)
            }
            setLoadingStatus(false);
        } catch (e: unknown) {
            const err = e as AxiosError;
            setError(err.message);
            setLoadingStatus(false);
        }
    }

    return (
        <>
            {!regStatus && <div className="auth-wrap">
                <form className='reg-form'>
                    <div className='reg-email' ref={target}>
                    <Overlay target={target.current} show={error ? true : false} placement="top">
                        {({ placement, arrowProps, show: _show, popper, ...props }) => (
                        <div
                            {...props}
                        style={{
                            position: 'absolute',
                            backgroundColor: 'rgba(255, 100, 100, 0.85)',
                            padding: '2px 10px',
                            color: 'white',
                            borderRadius: 3,
                            ...props.style,
                        }}
                    >
                        Пользователь с таким эл. адресом уже существует!
                    </div>
                    )}
                    </Overlay>
                        <label htmlFor="reg-email" className='m-2 fs-4'>Адрес эл. почты:</label>
                        <input
                            type="email"
                            name="reg-email"
                            id="reg-email"
                            className={emailMesValid ? "wrong-input mb-4 fs-5" : "success-input mb-4 fs-5"}
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className="auth-err">{emailMesValid}</span>
                    </div>
                    <div 
                        className='reg-username'>
                        <label htmlFor="reg-username" className='m-2 fs-4'>Никнейм:</label>
                        <input
                            type="text"
                            id='reg-username'
                            defaultValue={username}
                            autoComplete={"off"}
                            className='fs-5 mb-4'
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div 
                        className='reg-pas'
                        onMouseEnter={()=> setShowButPas(true)}
                        onMouseLeave={() => setShowButPas(false)}
                    >
                        <label htmlFor="reg-pas" className='m-2 fs-4'>Пароль:</label>
                        <input
                            type={showPas ? "text" : "password"}
                            name="reg-pas"
                            id="reg-pas"
                            className={passwordMesValid ? "wrong-input mb-4 fs-5" : "success-input mb-4 fs-5"}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="auth-err">{passwordMesValid}</span>
                        {showButPas &&
                        <div className="show-pas-img" onClick={() => { setShowPas(!showPas) }}>
                            <ShowPas></ShowPas>
                        </div>
                        }
                    </div>

                    {/* <input type="checkbox" name="Show Password" id="checked-pas__auth" checked={checked} onChange={()=>setChecked(!checked)}/> Показать пароль */}
                    <button 
                        className="mt-4 btn btn-primary"
                        disabled={!emailMesValid && !passwordMesValid ? false : true} 
                        onClick={(e) => {
                            e.preventDefault();
                            regAsync(email, username, password);
                    }}>{LoadingStatus ? <Spinner animation="border" variant="primary" /> : "Подтвердить"}</button>
                </form>
            </div>}
            {regStatus && <SuccessReg />}
        </>
    );
}

export default Regestraition;