import * as React from "react";
import axios, { AxiosError } from 'axios';
import "./SignIn.css";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { initAuth, selectAuth } from "./authSlice";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { setState } from "../../User/userSlice";

const SignInForm:React.FC = () =>{
  const [modalShow, setModalShow] = React.useState(false);
  const [checked, setChecked] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  let history = useNavigate();
  const auth = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  async function authAsync() {
    try {
      const res = await axios.post('http://localhost:4200/auth/login', {email, password});
      if (res.status === 201) {
        dispatch(initAuth());
        setModalShow(true);
        dispatch(setState(res.data));
      }
    } catch (e: unknown) {
      const err = e as AxiosError;
      console.log(err.message);
    }
    
  }

  function hide() {
    history("/my-profile");
    setModalShow(false);
  }

  return (
    <>
    {!auth && <div className="auth-wrap">
      <form className="auth-form">
        <label htmlFor="auth-email" className='m-2'>Адрес эл. почты:</label>
        <input type="email" name="auth-email" id="auth-email" onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="auth-pas" className='m-2'>Пароль:</label>
        <input type={checked? "text" : "password"} name="auth-pas" id="auth-pas" onChange={(e)=>setPassword(e.target.value)}/>
        <input type="checkbox" name="Show Password" id="checked-pas__auth" checked={checked} onChange={()=>setChecked(!checked)}/> Показать пароль
        <button className="mt-4 btn btn-primary" onClick={(e)=>{
          e.preventDefault();
          authAsync();
        }}>Подтвердить</button>
      </form>
    </div>}
    <Modal
      show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      onHide={() => hide()}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="ta-center">
          Успех!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
            Поздравляю! Вы успешно авторизировались на сайте. 
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>hide()}>
          <Link to='/' className="nav-link">Продолжить</Link>
        </Button>
      </Modal.Footer>
    </Modal>
    </> 
  );
}
export default SignInForm;