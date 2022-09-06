import axios, { AxiosError } from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { Button, Overlay, Spinner } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { dbHostURL } from '../../../dburl';
import { selectUserState } from '../../User/userSlice';
import { setEmailAndUsername } from "../../User/userSlice";
import validator from "validator";

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
    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const [email, setEmail] = useState<string>('');
    const [emailMesValid, setEmailMesValid] = React.useState<string>('');

    const [userName, setUserName] = useState<string>('');
    const [resMessage, setResNessage] = useState<string>('');
    const user = useAppSelector(selectUserState);

    const target = useRef(null);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        setEmail(user.email);
        setUserName(user.userName)
    }, []);

    useEffect(()=>{
        ValidEmail();
    }, [email]);

    function ValidEmail() {
        if (validator.isEmail(email)) {
          setEmailMesValid('');
        } else {
          setEmailMesValid('Введен некорректный адрес эл.почты');
        }
    }

    async function changeInfSubmit() {
        try {
            setShow(false);
            setLoading(true);
            const body: any = {
                email,
                userName
            }
            let config = {
                headers: {
                  Authorization: `Bearer ${user.token}`
                }
              }
            const res = await axios.post(`${dbHostURL}/users/changeinf/${user.id}`, body, config);
            const resData = res.data;
            setShow(true);
            setResNessage('Успех!');
            dispatch(setEmailAndUsername(resData));
            setLoading(false);
        } catch (e: unknown) {
            const err = e as AxiosError;
            console.error(err);
            setShow(true);
            setLoading(false);
            setResNessage('этот адрес эл. почты занят');
        }
    }

    return (
    <form className='simple_form edit_user'>
        <section>
            <div className='inf-header'>
                <h4>Общая информация</h4>
                {' '}
                <Button
                ref={target}
                    disabled={emailMesValid ? true : false} 
                    onClick={()=>changeInfSubmit()}
                >
                    {loading ? <Spinner animation="border" variant="dark"></Spinner>: <>Изменить</>}
                </Button>
            </div>
            <div className='inf-col'>
                <div className='inf-item'>
                    <label htmlFor="">
                        <span>Эл. почта:</span>
                    </label>
                    <div>
                        <input 
                            value={email} 
                            type="email"
                            className={emailMesValid ? "wrong-input" : "success-input"}
                            onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <span className='form-error'></span>
                </div>
                <div className='inf-item'>
                <label htmlFor="">
                        <span>Позывной:</span>
                    </label>
                    <div>
                        <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
                    </div>
                </div>
            </div>
            <Overlay target={target.current} show={show} placement="bottom">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                  <div
                    {...props}
                    style={{
                      position: 'absolute',
                      backgroundColor: 'rgba(13, 110, 253, 0.85)',
                      padding: '2px 10px',
                      color: 'white',
                      borderRadius: 3,
                      ...props.style,
                    }}
                  >
                    {resMessage}
                  </div>
                )}
            </Overlay>
        </section>
    </form>
    );
}

export default ChangeInfForm;