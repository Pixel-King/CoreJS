import * as React from "react";
import sucImg from "./SuccessImg.png"

export default function SuccessReg() {
    return (
        <>
        <div className="success-wrap">
            <img src={sucImg} alt="Success!" style={{ "width": "300px"}}/>
            <h2>Регистрация прошла успешно! Перейдите во вкладку "Войти" чтобы авторизироваться на сайте.</h2>
        </div>
        </>
    );
}