import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const JsInBrowserArticlesList: React.FC = () => {
    const [isOpen, setOpenClose] = useState<boolean>(false);
    const loc = useLocation();
    const body = isOpen && [
        <Nav.Item key={'GlobalObject-article'}>
            <Link to='./articlesTheory/GlobalObject' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/GlobalObject' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} GlobalObject`}>Глобальный объект</Link>
        </Nav.Item>,
        <Nav.Item key={'Document-article'}>
            <Link to='./articlesTheory/Document' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Document' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Document`}>Document</Link>
        </Nav.Item>,
        <Nav.Item key={'Events-article'}>
            <Link to='./articlesTheory/Events' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Events' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Events`}>Введение в события</Link>
        </Nav.Item>,
        <Nav.Item key={'EventsBubblingCapturing-article'}>
            <Link to='./articlesTheory/EventsBubblingCapturing' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/EventsBubblingCapturing' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} EventsBubblingCapturing`}>События. Всплытие и погружение</Link>
        </Nav.Item>,
        <Nav.Item key={'EventDelegation-article'}>
            <Link to='./articlesTheory/EventDelegation' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/EventDelegation' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} EventDelegation`}>Делегирование событий</Link>
        </Nav.Item>,
        <Nav.Item key={'MouseEvents-article'}>
            <Link to='./articlesTheory/MouseEvents' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/MouseEvents' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} MouseEvents`}>События "мыши"</Link>
        </Nav.Item>,
        <Nav.Item key={'MouseMove-article'}>
            <Link to='./articlesTheory/MouseMove' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/MouseMove' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} MouseMove`}>Движение "мыши"</Link>
        </Nav.Item>,
        <Nav.Item key={'DragDrop-article'}>
            <Link to='./articlesTheory/DragDrop' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/DragDrop' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} DragDrop`}>Drag'n'Drop</Link>
        </Nav.Item>,
        <Nav.Item key={'KeyboardEvents-article'}>
            <Link to='./articlesTheory/KeyboardEvents' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/KeyboardEvents' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} KeyboardEvents`}>События клавиатуры</Link>
        </Nav.Item>,
        <Nav.Item key={'PointerEvents-article'}>
            <Link to='./articlesTheory/PointerEvents' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/PointerEvents' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} PointerEvents`}>События указателя</Link>
        </Nav.Item>,
        <Nav.Item key={'Scroll-article'}>
            <Link to='./articlesTheory/Scroll' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Scroll' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Scroll`}>Прокрутка</Link>
        </Nav.Item>
    ];

    function scrollUp() {
        window.scrollBy(0, -window.pageYOffset);
    };

    return (
        <div className="p-3 bg-dark bg-opacity-10 border border-light border-dark-0 rounded">
            <h4 className="articles-nav-container-head" onClick={ () => setOpenClose(!isOpen) }>JS в браузере</h4>
            {body}
        </div>
    )
}

export default JsInBrowserArticlesList;