import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AnswerNotFounModal: React.FC = () =>{
    const history = useNavigate();
    return (
        <>
        <Modal
          show={true}
          onHiden={()=>history('/tests')}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Упс!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>Вопросов по этому тесту нету(</h2>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>history('/tests')}>Close</Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}

export default AnswerNotFounModal;