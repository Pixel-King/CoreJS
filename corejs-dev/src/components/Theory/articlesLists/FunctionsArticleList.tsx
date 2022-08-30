import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const FunctionsArticleList: React.FC = () => {
    const [isOpen, setOpenClose] = useState<boolean>(false);
    const loc = useLocation();
    const body = isOpen && [
        <Nav.Item key={'Functions-article'}>
            <Link to='./articlesTheory/Functions' onClick={ () => scrollUp()} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Functions' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} Date`}>Функции</Link>
        </Nav.Item>,
        <Nav.Item key={'FunctionExpressions-article'}>
            <Link to='./articlesTheory/FunctionExpressions' onClick={ () => scrollUp()} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/FunctionExpressions' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} FunctionExpressions`}>Function Expressions</Link>
        </Nav.Item>,
        <Nav.Item key={'ArrowFunctions-article'}>
            <Link to='./articlesTheory/ArrowFunctions' onClick={ () => scrollUp()} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/ArrowFunctions' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} ArrowFunctions`}>Стрелочные функции</Link>
        </Nav.Item>,
        <Nav.Item key={'Polyfills-article'}>
            <Link to='./articlesTheory/Polyfills' onClick={ () => scrollUp()} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Polyfills' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} Polyfills`}>Полифилы</Link>
        </Nav.Item>
    ];

    function scrollUp() {
        window.scrollBy(0, -window.pageYOffset);
    };

    return (
        <div className="p-3 bg-dark bg-opacity-10 border border-light border-dark-0 rounded">
            <h4 className="articles-nav-container-head" onClick={ () => setOpenClose(!isOpen) }>Функции</h4>
            {body}
        </div>
    )
}

export default FunctionsArticleList;