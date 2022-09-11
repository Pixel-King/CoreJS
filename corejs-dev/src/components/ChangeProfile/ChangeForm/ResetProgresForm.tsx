import axios, { AxiosError } from 'axios';
import React, { useState, useRef } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Button, Overlay } from 'react-bootstrap';
import { useAppSelector } from '../../../app/hooks';
import { dbHostURL } from '../../../dburl';
import { selectUserState } from '../../User/userSlice';

const ResetProgresForm: React.FC = () =>{
    const user = useAppSelector(selectUserState);
    const [loading, setLoading] = useState<boolean>(false);
    const target = useRef(null);
    const [show, setShow] = useState<boolean>(false);

    async function resetProgreAsync() {
        
        try {
            setShow(false);
            setLoading(true);
            let config = {
                headers: {
                  Authorization: `Bearer ${user.token}`
                }
              }
            const res = await axios.post(`${dbHostURL}/users/resetprogress/${user.id}`, config);
            console.log(res);
            if (res.status === 201) {
                setShow(true);
            }
            setLoading(false);
        } catch (e: unknown) {
            const err = e as AxiosError;
            console.error(err);
            setLoading(false);
        }
    }

    return (
        <>
            <form className='simple_form edit_user'>
                <section>
                    <div className='inf-header reset-progres'>
                        <h4>Прогресс</h4>
                        {' '}
                        <Button 
                            variant="danger"
                            ref={target}
                            disabled={loading}
                            onClick={()=>resetProgreAsync()}
                        >
                            {loading ? <Spinner animation="border" variant="dark"></Spinner>: <>Сбросить</>}
                        </Button>
                        <Overlay target={target.current} show={show} placement="bottom">
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
                              Прогресс сброшен!
                            </div>
                          )}
                        </Overlay>
                    </div>
                </section>
            </form>
        </>
    );
}

export default ResetProgresForm;