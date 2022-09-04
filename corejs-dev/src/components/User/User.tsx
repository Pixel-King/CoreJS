import React, { useState } from "react";
import userImg from "./user-icon.jpg"
import { Dropdown } from 'react-bootstrap';
import "./User.css"
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { removeAuth } from "../Autorisation/SignInForm/authSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectUserState } from "./userSlice";
import UserIcon from "./UserIcon/UserIcon";

const User: React.FC = () => {
    const user = useAppSelector(selectUserState);
    const [show, setShow] = useState<boolean>(false);
    const [modalShow, setModalShow] = React.useState(false);
    const dispatch = useAppDispatch();
    let history = useNavigate();
    
    return (<>
    <div className="user-wrap">
        <div className="user-img">
            <UserIcon developer={user.rating}></UserIcon>
        </div>
        <div className="nav-item nav-link user-dropdown fs-5" onClick={()=>setShow(!show)}>
            {user.userName}
            {' '}
            {show? <>&#9650;</> : <>&#9660;</>}
        </div>
        <Dropdown.Menu show={show} className="mt-2" 
            style={{    
                "left": "-7%",
                "top": "90%",
                }}>
            <Link to='/my-profile' className="dropdown-item" >Мой профиль</Link>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2" onClick={()=>setModalShow(true)}>Выйти</Dropdown.Item>
        </Dropdown.Menu>
    </div>
    <Modal
      show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      onHide={() => setModalShow(false)}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="ta-center">
          Ты уверен?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
            Потом придется снова заходить! 
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={()=>{
            dispatch(removeAuth());
            localStorage.removeItem('userID');
            localStorage.removeItem('token');
            history("/");
            setModalShow(false)}}>Я уверен! Выйти</Button>
        <Button variant="secondary" onClick={()=>setModalShow(false)}>Отмена</Button>
      </Modal.Footer>
    </Modal>
    </>);
};

export default User;