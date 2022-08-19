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

const TheoryPage: React.FC = () => {
    const [activePage, setActivatePage] = useState<string>('art1');
    return (
        <div className="theory-page-wrap">
            <div className="articles-nav-wrap">
                <Nav className="articles-nav flex-column">
                    <Nav.Item>
                        <Link to="" onClick={()=>{setActivatePage('art1')}} className={`article-nav-link ${activePage === 'art1'?'active':''}`}>Типы данных</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="" onClick={()=>{setActivatePage('art2')}} className={`article-nav-link ${activePage === 'art2'?'active':''}`}>Числа Number</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="" onClick={()=>{setActivatePage('art3')}} className={`article-nav-link ${activePage === 'art3'?'active':''}`}>Строки String</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="" onClick={()=>{setActivatePage('art4')}} className={`article-nav-link ${activePage === 'art4'?'active':''}`}>Переменные</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="" onClick={()=>{setActivatePage('art5')}} className={`article-nav-link ${activePage === 'art5'?'active':''}`}>Let, const, var</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="" onClick={()=>{setActivatePage('art6')}} className={`article-nav-link ${activePage === 'art6'?'active':''}`}>Условное ветвление: if, '?'</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="" onClick={()=>{setActivatePage('art7')}} className={`article-nav-link ${activePage === 'art7'?'active':''}`}>Конструкция switch</Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className="articles-wrap">
                {activePage === 'art1'? <DataTypes/>:<a></a>  }
                {activePage === 'art2'? <Numbers/>:<a></a>  }
                {activePage === 'art3'? <Strings/>:<a></a>  }
                {activePage === 'art4'? <Variables/>:<a></a>  }
                {activePage === 'art5'? <LetVarConst/>:<a></a>  }
                {activePage === 'art6'? <TernaryOperator/>:<a></a>  }
                {activePage === 'art7'? <SwitchCase/>:<a></a>  }
            </div>
        </div> 
    );
}

export default TheoryPage;