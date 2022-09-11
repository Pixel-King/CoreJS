import React from 'react';
import { Button } from 'react-bootstrap';
import './CodewarsForm.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Accordion from 'react-bootstrap/Accordion';
import dataListTasks from './refs';

const CodewarsForm: React.FC = () => {
    //const data = dataListTasks;
    return (
        
        <div className='tasks-wrap'>
        <h4>Выберите задачу из списка:</h4>
        <Accordion id='accordion-1'>
          {
            dataListTasks.map((data, index) => {
                return (
                    <Accordion.Item eventKey={`${index}`}>
                        <Accordion.Header><h3 className='text-center'>{data.theme}</h3></Accordion.Header>
                            <Accordion.Body>
                                
                                <Accordion id='accordion-2'>
                                    {
                                        data.tasks.map((elem, indexRef) => {
                                            return (
                                                <Accordion.Item eventKey={`${indexRef}`}>
                                                <Accordion.Header>
                                                    <div className='tasks-header flex-row'>
                                                        <h6>{elem.title}</h6>
                                                        <div>{elem.kyu} kyu</div>
                                                    </div>
                                                    
                                                    </Accordion.Header>
                                                    <Accordion.Body bsPrefix=''>
                                                        <div className='task-description'>
                                                            
                                                            <div className='task-text'>
                                                                {elem.description}
                                                            </div>
                                                            
                                                            <a href={elem.ref} target="_blank">
                                                            <Button variant='primary'>
                                                                Решить задачу
                                                            </Button>
                                                            </a>
                                                            
                                                        </div>
                                                        
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            )
                                        })
                                    }
                                </Accordion>

                            </Accordion.Body>
                    </Accordion.Item>
                )
            })
          }
        </Accordion>
        </div>

        // <div className='codewars-form'>
        //     <div className='codewars-type'>
        //         <div>
        //             Ваша следующая задача
        //         </div>
        //         <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        //             <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        //             <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        //             <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        //         </DropdownButton>

        //         <Button variant='primary'>Начать</Button>
        //         <Button variant='primary'>Пропустить</Button>
        //     </div>
        //     <div className='codewars-description'>
        //         <div className='codewars-description-title text-left'>
        //             Найдите следующий идеальный квадрат!
        //         </div>
        //         <div>
        //             Возможно, вы знаете несколько довольно больших идеальных квадратов. Но как насчет СЛЕДУЮЩЕГО?

        //             Завершите findNextSquareметод, который находит следующий интегральный идеальный квадрат после переданного в качестве параметра. Напомним, что интегральный совершенный квадрат - это целое число n такое, что sqrt(n) также является целым числом.

        //             Если параметр сам по себе не является идеальным квадратом, тогда -1он должен быть возвращен. Можно предположить, что параметр неотрицательный.
        //         </div>
        //     </div>
        // </div>

    )
}

export default CodewarsForm