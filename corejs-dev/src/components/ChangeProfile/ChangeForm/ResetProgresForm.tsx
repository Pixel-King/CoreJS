import axios, { AxiosError } from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useAppSelector } from '../../../app/hooks';
import { selectUserState } from '../../User/userSlice';

const ResetProgresForm: React.FC = () =>{
    const user = useAppSelector(selectUserState);

    async function resetProgreAsync() {
        try {
            let config = {
                headers: {
                  Authorization: `Bearer ${user.token}`
                }
              }

            const res = await axios.post(`https://corejs-server.herokuapp.com/users/resetprogress/${user.id}`, config);
        } catch (e: unknown) {
            const err = e as AxiosError;
            console.error(err);

        }
    }

    return (
        <>
            <form className='simple_form edit_user'>
                <section>
                    <div className='inf-header reset-progres'>
                        <h4>Прогресс</h4>
                        {' '}
                        <Button variant="danger" onClick={()=>resetProgreAsync()}>Сбросить</Button>
                    </div>
                </section>
            </form>
        </>
    );
}

export default ResetProgresForm;