import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { addStat } from "../articleStatistics";

const ConditionsComparisonLoopsArticlesList: React.FC = () => {
    const [isOpen, setOpenClose] = useState<boolean>(false);
    const loc = useLocation();
    const body = isOpen && [
        <Nav.Item key={'Comparison-article'}>
            <Link to='./articlesTheory/Comparison' onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/Comparison') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Comparison' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} Comparison`}>Операторы сравнения</Link>
        </Nav.Item>,
        <Nav.Item key={'TernaryOperator-article'}>
            <Link to='./articlesTheory/TernaryOperator' onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/TernaryOperator') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/TernaryOperator' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} TernaryOperator`}>Условное ветвление: if, '?'</Link>
        </Nav.Item>,
        <Nav.Item key={'SwitchCase-article'}>
            <Link to='./articlesTheory/SwitchCase' onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/SwitchCase') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/SwitchCase' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} SwitchCase`}>Конструкция switch</Link>
        </Nav.Item>,
        <Nav.Item key={'Loops-article'}>
            <Link to="./articlesTheory/Loops" onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/Loops') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Loops' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} Loops`}>Циклы</Link>
        </Nav.Item>
    ];

    function scrollUp() {
        window.scrollBy(0, -window.pageYOffset);
    };

    return (
        <div className="p-3 bg-dark bg-opacity-10 border border-light border-dark-0 rounded">
            <h4 className="articles-nav-container-head" onClick={ () => setOpenClose(!isOpen) }>Условия, сравнения, циклы</h4>
            {body}
        </div>
    )
}

export default ConditionsComparisonLoopsArticlesList;