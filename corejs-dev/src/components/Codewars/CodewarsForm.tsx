import React from 'react';
import { Button } from 'react-bootstrap';
import './CodewarsForm.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const CodewarsForm: React.FC = () => {
    return (
        <div className='codewars-form'>
            <div className='codewars-type'>
                <div>
                    Ваша следующая задача
                </div>
                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>

                <Button variant='primary'>Начать</Button>
                <Button variant='primary'>Пропустить</Button>
            </div>
            <div className='codewars-description'>
                <div className='codewars-description-title text-left'>
                    Найдите следующий идеальный квадрат!
                </div>
                <div>
                    Возможно, вы знаете несколько довольно больших идеальных квадратов. Но как насчет СЛЕДУЮЩЕГО?

                    Завершите findNextSquareметод, который находит следующий интегральный идеальный квадрат после переданного в качестве параметра. Напомним, что интегральный совершенный квадрат - это целое число n такое, что sqrt(n) также является целым числом.

                    Если параметр сам по себе не является идеальным квадратом, тогда -1он должен быть возвращен. Можно предположить, что параметр неотрицательный.
                </div>
            </div>
        </div>
    )
}

export default CodewarsForm