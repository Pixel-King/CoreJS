import axios, { AxiosError } from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Button, Modal, Overlay } from 'react-bootstrap';
import { useAppSelector } from '../../../app/hooks';
import { dbHostURL } from '../../../dburl';
import { selectUserState } from '../../User/userSlice';

interface testBody{
    id: string;
    rating: string;
    name: string;
    type: string;
    topic: string;
}

const ChangeTestModal: React.FC<{show: boolean, onHide: ()=>void, test: testBody}> = (props) =>{
    const [loading, setLoading] = useState<boolean>(false);

    const [name, setName] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [rating, setRating] = useState<string>('');
    const [topic, setTopic] = useState<string>('');

    const [resMes, setResMas] = useState<string>('');

    const user = useAppSelector(selectUserState);
    const target = useRef(null);

    useEffect(()=>{
        setName(props.test.name);
        setType(props.test.type);
        setRating(props.test.rating);
        setTopic(props.test.topic);
    }, [props.test]);

    async function ChangeTestAsync() {
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
            const res = await axios.post(`${dbHostURL}/tests/${props.test.id}`, body, config);
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
            Изменить тест:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='add-test-modal__body'>
                <label >Название теста:</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <label >Тема:</label>
                <input type="text" value={topic} onChange={(e)=>setTopic(e.target.value)}/>
                <label htmlFor="" >Тип:</label>
                <input type="text" value={type} onChange={(e)=>setType(e.target.value)}/>
                <label>Сложность:{rating}</label>
                <input type="range"
                    min={0}
                    max={10}
                    value={rating} 
                    onChange={(e)=>{
                        setRating(e.target.value)
                    }}/>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button ref={target} variant="warning" onClick={()=>ChangeTestAsync()}>Изменить</Button>
            <Button onClick={props.onHide}>Отмена</Button>
        </Modal.Footer>
        <Overlay target={target.current} show={resMes ? true : false} placement="left">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 193, 7, 0.85)',
              padding: '2px 10px',
              color: 'white',
              zIndex: '10000',
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

export default ChangeTestModal;