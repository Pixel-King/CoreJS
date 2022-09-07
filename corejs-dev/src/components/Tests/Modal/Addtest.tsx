import axios, { AxiosError } from 'axios';
import React, { useState, useRef } from 'react';
import { Button, Modal, Overlay, Spinner } from 'react-bootstrap';
import { useAppSelector } from '../../../app/hooks';
import { dbHostURL } from '../../../dburl';
import { selectUserState } from '../../User/userSlice';

const AddTest: React.FC<{show: boolean, onHide: ()=>void}> = (props) =>{
    const [loading, setLoading] = useState<boolean>(false);

    const [name, setName] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [rating, setRating] = useState<string>('');
    const [topic, setTopic] = useState<string>('');

    const [resMes, setResMas] = useState<string>('');
    const target = useRef(null);

    const user = useAppSelector(selectUserState);

    async function AddTestAsync() {
        try {
            setLoading(true);
            const body: any = {
                name,
                type,
                topic,
                rating
            }
            let config = {
                headers: {
                  Authorization: `Bearer ${user.token}`
                }
              }
            const res = await axios.post(`${dbHostURL}/tests`, body, config);
            if (res.status === 201) {
                setResMas('Успех!');
            }
            setLoading(false);
        } catch (e: unknown) {
            setLoading(false);
            const err = e as AxiosError;
            console.error(err.message);
            setResMas('Ошибка!');
        }
    }

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='add-test-modal__body'>
                <label >Название теста:</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
                <label >Тема:</label>
                <input type="text" onChange={(e)=>setTopic(e.target.value)}/>
                <label htmlFor="" >Тип:</label>
                <input type="text" onChange={(e)=>setType(e.target.value)}/>
                <label htmlFor="">Сложность:{rating}</label>
                <input type="range"
                    min={0}
                    max={10} 
                    onChange={(e)=>{
                        setRating(e.target.value)
                    }}/>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button ref={target} onClick={()=>AddTestAsync()}>{loading ? <Spinner animation="border" variant="primary"/> :<>Добавить</> }</Button>
            <Button onClick={props.onHide}>Отмена</Button>
        </Modal.Footer>
        <Overlay target={target.current} show={resMes !== '' ? true : false} placement="left">
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
            {resMes}
          </div>
        )}
      </Overlay>
      </Modal>
    );
}

export default AddTest;