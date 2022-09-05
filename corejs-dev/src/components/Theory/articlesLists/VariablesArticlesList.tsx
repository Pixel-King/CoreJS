import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { addStat } from "../articleStatistics";

const VariableArticlelList: React.FC = () => {
    const [isOpen, setOpenClose] = useState<boolean>(false);
    const loc = useLocation();
    const body = isOpen && [
        <Nav.Item key={'Variables-article'}>
            <Link to='./articlesTheory/Variables' onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/Variables') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Variables' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Variables`}>Переменные</Link>
        </Nav.Item>,
        <Nav.Item key={'LetVarConst-article'}>
            <Link to='./articlesTheory/LetVarConst' onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/LetVarConst') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/LetVarConst' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} LetVarConst`}>Let, const, var</Link>
        </Nav.Item>,
        <Nav.Item key={'Hoisting-article'}>
            <Link to='./articlesTheory/Hoisting' onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/Hoisting') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Hoisting' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Hoisting`}>Hoisting</Link>
        </Nav.Item>,
        <Nav.Item key={'TempDeadZone-article'}>
            <Link to="./articlesTheory/TempDeadZone" onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/TempDeadZone') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/TempDeadZone' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} TempDeadZone`}>Temporal Dead Zone</Link>
        </Nav.Item>
    ];

    function scrollUp() {
        window.scrollBy(0, -window.pageYOffset);
    };

    return (
        <div className="p-3 bg-dark bg-opacity-10 border border-light border-dark-0 rounded">
            <h4 className="articles-nav-container-head" onClick={ () => setOpenClose(!isOpen) }>Переменные в JS</h4>
            {body}
        </div>
    )
}

export default VariableArticlelList;