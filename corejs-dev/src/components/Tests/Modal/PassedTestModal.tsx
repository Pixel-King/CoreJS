import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PassedTestModal: React.FC<{show: boolean, onHide:()=>void, persent: string}> = (props) =>{
    return (
        <>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Тест сдан!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Процент правильных ответов: {" " + Math.ceil(+props.persent) }. {+props.persent < 70? "Попробуй еще раз!": "Успех!"}</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>props.onHide()}>Закрыть</Button>
          </Modal.Footer>
        </Modal>
        </>
    );
}

export default PassedTestModal;