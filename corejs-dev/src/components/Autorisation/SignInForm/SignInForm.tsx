import * as React from "react";
import axios, { AxiosError } from 'axios';
import "./SignIn.css";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { initAuth, selectAuth } from "./authSlice";
import { Button, Modal, Overlay, Tooltip } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { setState } from "../../User/userSlice";
import validator from "validator";
import ShowPas from "./ShowPasSVG/ShowPas";

const SignInForm: React.FC = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [email, setEmail] = React.useState<string>('');
  const [emailMesValid, setEmailMesValid] = React.useState<string>('');

  const [password, setPassword] = React.useState<string>('');
  const [showPas, setShowPas] = React.useState<boolean>(false);
  const [showButPas, setShowButPas] = React.useState<boolean>(false);
  const [passwordMesValid, setPasswordMesValid] = React.useState<string>('');

  const [error, setError] = React.useState<string>('');

  let history = useNavigate();
  const auth = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const target = React.useRef(null);

  React.useEffect(() => {
    ValidEmail();
  }, [email]);

  React.useEffect(() => {
    validPassword()
  }, [password]);

  function validPassword() {
    if ((password.length >= 8 && password.length <= 20) && (password.search(/\s/g) < 0)) {
      setPasswordMesValid('')
    } else {
      setPasswordMesValid('Введите пароль 8-20 символов и без пробелов');
    }
  }

  function ValidEmail() {
    if (validator.isEmail(email)) {
      setEmailMesValid('');
    } else {
      setEmailMesValid('Введен некорректный адрес эл.почты');
    }
  }

  async function authAsync() {
    try {
      const res = await axios.post('https://corejs-server.herokuapp.com/auth/login', { email, password });
      if (res.status === 201) {
        dispatch(initAuth());
        setModalShow(true);
        dispatch(setState(res.data));
      }
    } catch (e: unknown) {
      const err = e as AxiosError;
      const errResp: any = err.response!.data;
      if (errResp) {
        setError(errResp.message);
      }
    }
  }

  function hide() {
    history("/my-profile");
    setModalShow(false);
  }

  return (
    <>
      {!auth && <div className="auth-wrap" >
        <form className="auth-form">
          <div className="auth-email" ref={target}>
            <label htmlFor="auth-email" className='m-2 fs-4'>Адрес эл. почты:</label>
            <input
              type="email"
              name="auth-email"
              id="auth-email"
              className={emailMesValid ? "wrong-input mb-4 fs-5" : "success-input mb-4 fs-5"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="auth-err">{emailMesValid}</span>
          </div>
          <div
            className="auth-pas"
            onMouseEnter={() => setShowButPas(true)}
            onMouseLeave={() => setShowButPas(false)}
          >
            <label htmlFor="auth-pas" className='m-2 fs-4'>Пароль:</label>
            <input
              type={showPas ? "text" : "password"}
              name="auth-pas"
              id="auth-pas"
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
          {/* <input 
          type="checkbox" 
          name="Show Password" 
          id="checked-pas__auth"
          checked={checked} 
          onChange={()=>setChecked(!checked)}
        /> 
        Показать пароль */}
          <button
            className="mt-4 btn btn-primary"

            disabled={!emailMesValid && !passwordMesValid ? false : true}
            onClick={(e) => {
              e.preventDefault();
              authAsync();
            }}>Подтвердить</button>
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
                Не правильный адрес эл. почты или пароль!
              </div>
            )}
          </Overlay>
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
          <Button variant="secondary" onClick={() => hide()}>
            <Link to='/' className="nav-link">Продолжить</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default SignInForm;