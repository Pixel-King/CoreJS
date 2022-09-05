import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { addStat } from "../articleStatistics";

const PromisesArticlesList: React.FC = () => {
    const [isOpen, setOpenClose] = useState<boolean>(false);
    const loc = useLocation();
    const body = isOpen && [
        <Nav.Item key={'Callbacks-article'}>
            <Link to='./articlesTheory/Callbacks' onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/Callbacks') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Callbacks' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Callbacks`}>Введение: колбэки</Link>
        </Nav.Item>,
        <Nav.Item key={'PromisesBasics-article'}>
            <Link to='./articlesTheory/PromisesBasics' onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/PromisesBasics') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/PromisesBasics' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} PromisesBasics`}>Промисы</Link>
        </Nav.Item>,
        <Nav.Item key={'PromiseChaining-article'}>
            <Link to='./articlesTheory/PromiseChaining' onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/PromiseChaining') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/PromiseChaining' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} PromiseChaining`}>Цепочка промисов</Link>
        </Nav.Item>,
        <Nav.Item key={'PromisesErrorHandling-article'}>
            <Link to='./articlesTheory/PromisesErrorHandling' onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/PromisesErrorHandling') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/PromisesErrorHandling' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} PromisesErrorHandling`}>Промисы: обработка ошибок</Link>
        </Nav.Item>,
        <Nav.Item key={'PromiseApi-article'}>
            <Link to='./articlesTheory/PromiseApi' onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/PromiseApi') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/PromiseApi' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} PromiseApi`}>Promise API</Link>
        </Nav.Item>,
        <Nav.Item key={'Promisification-article'}>
            <Link to='./articlesTheory/Promisification' onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/Promisification') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Promisification' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Promisification`}>Промисификация</Link>
        </Nav.Item>,
        <Nav.Item key={'Microtasks-article'}>
            <Link to='./articlesTheory/Microtasks' onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/Microtasks') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Microtasks' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Microtasks`}>Микрозадачи</Link>
        </Nav.Item>,
        <Nav.Item key={'AsyncAwait-article'}>
            <Link to='./articlesTheory/AsyncAwait' onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/AsyncAwait') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/AsyncAwait' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} AsyncAwait`}>async / await</Link>
        </Nav.Item>
    ];

    function scrollUp() {
        window.scrollBy(0, -window.pageYOffset);
    };

    return (
        <div className="p-3 bg-dark bg-opacity-10 border border-light border-dark-0 rounded">
            <h4 className="articles-nav-container-head" onClick={ () => setOpenClose(!isOpen) }>Промисы, async/await</h4>
            {body}
        </div>
    )
}

export default PromisesArticlesList;