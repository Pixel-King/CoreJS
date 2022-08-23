import * as React from "react";
import './articlesPage.css';
import { Nav, Col, Row, Tab } from 'react-bootstrap';
import { Routes, Route, Link} from "react-router-dom";
import { useState } from "react";
import { getValue } from "@testing-library/user-event/dist/utils";
import DataTypes from "./articlesTheory/DataTypes";
import Numbers from "./articlesTheory/Numbers";
import Strings from "./articlesTheory/Strings";
import Variables from "./articlesTheory/Variables";
import LetVarConst from "./articlesTheory/LetVarConst";
import TernaryOperator from "./articlesTheory/TernaryOperator";
import SwitchCase from "./articlesTheory/SwitchCase";
import TypeConversions from "./articlesTheory/TypeConversions";
import Comparison from "./articlesTheory/Comparison";
import Polyfills from "./articlesTheory/Polyfills";
import Functions from "./articlesTheory/Functions";
import FunctionExpressions from "./articlesTheory/FunctionExpressions";
import ArrowFunctions from "./articlesTheory/ArrowFunctions";
import Button from 'react-bootstrap/Button';
import Date from "./articlesTheory/Date";
import ObjectsBasics from "./articlesTheory/ObjectsBasics";
import ObjectsCopy from "./articlesTheory/ObjectsCopy";
import ObjectMethods from "./articlesTheory/ObjectMethods";
import Arrays from "./articlesTheory/Arrays";
import ArrayMethods from "./articlesTheory/ArrayMethods";
import Loops from "./articlesTheory/Loops";
import Hoisting from "./articlesTheory/Hoisting";
import TempDeadZone from "./articlesTheory/TempDeadZone";
import GlobalObject from "./articlesTheory/GlobalObject";
import Document from "./articlesTheory/Document";
import Events from "./articlesTheory/Events";
import EventsBubblingCapturing from "./articlesTheory/EventsBubblingCapturing";
import EventDelegation from "./articlesTheory/EventDelegation";

const TheoryPage: React.FC = () => {
    const [activePage, setActivatePage] = useState<string>('art1');
    const scrollButton = <Button variant="outline-danger position-fixed bottom-0 end-0 mx-3 my-3" onClick={scrollUp}>В начало ↑</Button>;
    function scrollUp() {
        window.scrollBy(0, -window.pageYOffset);
    }
    return (
        <div className="theory-page-wrap d-flex flex-row">
            <div className="articles-nav-wrap">
                <Nav className="articles-nav flex-column">
                    <div className="p-3 bg-dark bg-opacity-10 border border-light border-dark-0 rounded">
                        <h4>Типы данных в JS</h4>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art1'); scrollUp()}} className={`article-nav-link ${activePage === 'art1'?'active':''}`}>Типы данных</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art2'); scrollUp()}} className={`article-nav-link ${activePage === 'art2'?'active':''}`}>Числа Number</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art3'); scrollUp()}} className={`article-nav-link ${activePage === 'art3'?'active':''}`}>Строки String</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art4'); scrollUp()}} className={`article-nav-link ${activePage === 'art4'?'active':''}`}>Объекты. Основы</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art5'); scrollUp()}} className={`article-nav-link ${activePage === 'art5'?'active':''}`}>Объекты. Копирование</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art6'); scrollUp()}} className={`article-nav-link ${activePage === 'art6'?'active':''}`}>Методы объектов</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art7'); scrollUp()}} className={`article-nav-link ${activePage === 'art7'?'active':''}`}>Массивы</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art8'); scrollUp()}} className={`article-nav-link ${activePage === 'art8'?'active':''}`}>Методы массивов</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art9'); scrollUp()}} className={`article-nav-link ${activePage === 'art9'?'active':''}`}>Преобразование типов</Link>
                        </Nav.Item>
                    </div>

                    <div className="p-3 bg-dark bg-opacity-10 border border-light border-dark-0 rounded">
                        <h4>Переменные в JS</h4>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art10'); scrollUp()}} className={`article-nav-link ${activePage === 'art10'?'active':''}`}>Переменные</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art11'); scrollUp()}} className={`article-nav-link ${activePage === 'art11'?'active':''}`}>Let, const, var</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art12'); scrollUp()}} className={`article-nav-link ${activePage === 'art12'?'active':''}`}>Hoisting</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art13'); scrollUp()}} className={`article-nav-link ${activePage === 'art13'?'active':''}`}>Temporal Dead Zone</Link>
                        </Nav.Item>
                    </div>

                    <div className="p-3 bg-dark bg-opacity-10 border border-light border-dark-0 rounded">
                        <h4>Условия, сравнения, циклы</h4>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art14'); scrollUp()}} className={`article-nav-link ${activePage === 'art14'?'active':''}`}>Операторы сравнения</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art15'); scrollUp()}} className={`article-nav-link ${activePage === 'art15'?'active':''}`}>Условное ветвление: if, '?'</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art16'); scrollUp()}} className={`article-nav-link ${activePage === 'art16'?'active':''}`}>Конструкция switch</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art17'); scrollUp()}} className={`article-nav-link ${activePage === 'art17'?'active':''}`}>Циклы</Link>
                        </Nav.Item>
                    </div>
                    
                    <div className="p-3 bg-dark bg-opacity-10 border border-light border-dark-0 rounded">
                        <h4>Date</h4>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art18'); scrollUp()}} className={`article-nav-link ${activePage === 'art18'?'active':''}`}>Дата и время</Link>
                        </Nav.Item>
                    </div>

                    <div className="p-3 bg-dark bg-opacity-10 border border-light border-dark-0 rounded">
                        <h4>Функции</h4>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art19'); scrollUp()}} className={`article-nav-link ${activePage === 'art19'?'active':''}`}>Функции</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art20'); scrollUp()}} className={`article-nav-link ${activePage === 'art20'?'active':''}`}>Function Expressions</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art21'); scrollUp()}} className={`article-nav-link ${activePage === 'art21'?'active':''}`}>Стрелочные функции</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art22'); scrollUp()}} className={`article-nav-link ${activePage === 'art22'?'active':''}`}>Полифилы</Link>
                        </Nav.Item>
                    </div>
                    
                    <div className="p-3 bg-dark bg-opacity-10 border border-light border-dark-0 rounded">
                        <h4>JS в браузере</h4>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art23'); scrollUp()}} className={`article-nav-link ${activePage === 'art23'?'active':''}`}>Глобальный объект</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art24'); scrollUp()}} className={`article-nav-link ${activePage === 'art24'?'active':''}`}>Document</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art25'); scrollUp()}} className={`article-nav-link ${activePage === 'art25'?'active':''}`}>Введение в события</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art26'); scrollUp()}} className={`article-nav-link ${activePage === 'art26'?'active':''}`}>События. Всплытие и погружение</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="" onClick={()=>{setActivatePage('art27'); scrollUp()}} className={`article-nav-link ${activePage === 'art27'?'active':''}`}>Делегирование событий</Link>
                        </Nav.Item>
                    </div>        
                </Nav>
            </div>
            <div className="articles-wrap">
                {activePage === 'art1'? <DataTypes/>:<a></a>  }
                {activePage === 'art2'? <Numbers/>:<a></a>  }
                {activePage === 'art3'? <Strings/>:<a></a>  }
                {activePage === 'art4'? <ObjectsBasics/>:<a></a>  }
                {activePage === 'art5'? <ObjectsCopy/>:<a></a>  }
                {activePage === 'art6'? <ObjectMethods/>:<a></a>  }
                {activePage === 'art7'? <Arrays/>:<a></a>  }
                {activePage === 'art8'? <ArrayMethods/>:<a></a>  }
                {activePage === 'art9'? <TypeConversions/>:<a></a>  }
                {activePage === 'art10'? <Variables/>:<a></a>  }
                {activePage === 'art11'? <LetVarConst/>:<a></a>  }
                {activePage === 'art12'? <Hoisting/>:<a></a>  }
                {activePage === 'art13'? <TempDeadZone/>:<a></a>  }
                {activePage === 'art14'? <Comparison/>:<a></a>  }
                {activePage === 'art15'? <TernaryOperator/>:<a></a>  }
                {activePage === 'art16'? <SwitchCase/>:<a></a>  }
                {activePage === 'art17'? <Loops/>:<a></a>  }
                {activePage === 'art18'? <Date/>:<a></a>  }
                {activePage === 'art19'? <Functions/>:<a></a>  }
                {activePage === 'art20'? <FunctionExpressions/>:<a></a>  }
                {activePage === 'art21'? <ArrowFunctions/>:<a></a>  }
                {activePage === 'art22'? <Polyfills/>:<a></a>  }
                {activePage === 'art23'? <GlobalObject/>:<a></a>  }
                {activePage === 'art24'? <Document/>:<a></a>  }
                {activePage === 'art25'? <Events/>:<a></a>  }
                {activePage === 'art26'? <EventsBubblingCapturing/>:<a></a>  }
                {activePage === 'art27'? <EventDelegation/>:<a></a>  }
            </div>
            {scrollButton}
        </div> 
    );
}

export default TheoryPage;