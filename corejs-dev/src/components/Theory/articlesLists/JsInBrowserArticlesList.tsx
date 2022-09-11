import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectAuth } from "../../Autorisation/SignInForm/authSlice";
import axios, { AxiosError } from 'axios';
import { useState, useEffect } from "react";

type Article = {
    articleId: string;
    date: string;
}


const JsInBrowserArticlesList: React.FC = () => {
    const [isOpen, setOpenClose] = useState<boolean>(false);
    const loc = useLocation();

    const auth = useAppSelector(selectAuth);
    const [statusGlobalObject, setStatusGlobalObject] = useState<string>('');
    const [statusDocument, setStatusDocument] = useState<string>('');
    const [statusEvents, setStatusEvents] = useState<string>('');
    const [statusEventsBubblingCapturing, setStatusEventsBubblingCapturing] = useState<string>('');
    const [statusEventDelegation, setStatusEventDelegation] = useState<string>('');
    const [statusMouseEvents, setStatusMouseEvents] = useState<string>('');
    const [statusMouseMove, setStatusMouseMove] = useState<string>('');
    const [statusDragDrop, setStatusDragDrop] = useState<string>('');
    const [statusKeyboardEvents, setStatusKeyboardEvents] = useState<string>('');
    const [statusPointerEvents, setStatusPointerEvents] = useState<string>('');
    const [statusScroll, setStatusScroll] = useState<string>('');
   
   
    const url = 'https://corejs-server.herokuapp.com';
                const userToken = localStorage.token;
                const config = {
                    headers: {
                        'Authorization':`Bearer ${userToken}`,
                    }
                };


    async function completed() {
        try {
            if (auth) {
                const userId = localStorage.getItem('userID');
                const resp = await axios.get(`${url}/users/${userId}`, config);
                const currentStat = await resp.data;
                const readedArticle = currentStat.readedArticle;
                readedArticle.forEach((article: Article) => {
                    if (article.articleId.includes('GlobalObject')) {
                        setStatusGlobalObject(`&#10003;`)
                    }
                    if (article.articleId.includes('Document')) {
                        setStatusDocument(`&#10003;`)
                    }
                    if (article.articleId.includes('/Events')) {
                        setStatusEvents(`&#10003;`)
                    }
                    if (article.articleId.includes('EventsBubblingCapturing')) {
                        setStatusEventsBubblingCapturing(`&#10003;`)
                    }
                    if (article.articleId.includes('EventDelegation')) {
                        setStatusEventDelegation(`&#10003;`)
                    }
                    if (article.articleId.includes('MouseEvents')) {
                        setStatusMouseEvents(`&#10003;`)
                    }
                    if (article.articleId.includes('MouseMove')) {
                        setStatusMouseMove(`&#10003;`)
                    }
                    if (article.articleId.includes('DragDrop')) {
                        setStatusDragDrop(`&#10003;`)
                    }
                    if (article.articleId.includes('KeyboardEvents')) {
                        setStatusKeyboardEvents(`&#10003;`)
                    }
                    if (article.articleId.includes('PointerEvents')) {
                        setStatusPointerEvents(`&#10003;`)
                    }
                    if (article.articleId.includes('Scroll')) {
                        setStatusScroll(`&#10003;`)
                    }
                });
            }
        } catch(e: unknown) {
            const err = e as AxiosError;
            console.log(err);
        }
    }

    useEffect(()=>{
        completed()
        return function cleanup() {
            setStatusGlobalObject
            setStatusDocument
            setStatusEvents
            setStatusEventsBubblingCapturing
            setStatusEventDelegation
            setStatusMouseEvents
            setStatusMouseMove
            setStatusDragDrop
            setStatusKeyboardEvents
            setStatusPointerEvents
            setStatusScroll
        }
    })

    const body = isOpen && [
        <Nav.Item key={'GlobalObject-article'}>
            <Link to='./articlesTheory/GlobalObject' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/GlobalObject' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} GlobalObject`}>Глобальный объект</Link>
            <div dangerouslySetInnerHTML={{__html: statusGlobalObject  || ''}}></div>
        </Nav.Item>,
        <Nav.Item key={'Document-article'}>
            <Link to='./articlesTheory/Document' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Document' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Document`}>Document</Link>
            <div dangerouslySetInnerHTML={{__html: statusDocument  || ''}}></div>
        </Nav.Item>,
        <Nav.Item key={'Events-article'}>
            <Link to='./articlesTheory/Events' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Events' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Events`}>Введение в события</Link>
            <div dangerouslySetInnerHTML={{__html: statusEvents  || ''}}></div>
        </Nav.Item>,
        <Nav.Item key={'EventsBubblingCapturing-article'}>
            <Link to='./articlesTheory/EventsBubblingCapturing' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/EventsBubblingCapturing' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} EventsBubblingCapturing`}>События. Всплытие и погружение</Link>
            <div dangerouslySetInnerHTML={{__html: statusEventsBubblingCapturing  || ''}}></div>
        </Nav.Item>,
        <Nav.Item key={'EventDelegation-article'}>
            <Link to='./articlesTheory/EventDelegation' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/EventDelegation' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} EventDelegation`}>Делегирование событий</Link>
            <div dangerouslySetInnerHTML={{__html: statusEventDelegation  || ''}}></div>
        </Nav.Item>,
        <Nav.Item key={'MouseEvents-article'}>
            <Link to='./articlesTheory/MouseEvents' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/MouseEvents' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} MouseEvents`}>События "мыши"</Link>
            <div dangerouslySetInnerHTML={{__html: statusMouseEvents  || ''}}></div>
        </Nav.Item>,
        <Nav.Item key={'MouseMove-article'}>
            <Link to='./articlesTheory/MouseMove' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/MouseMove' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} MouseMove`}>Движение "мыши"</Link>
            <div dangerouslySetInnerHTML={{__html: statusMouseMove  || ''}}></div>
        </Nav.Item>,
        <Nav.Item key={'DragDrop-article'}>
            <Link to='./articlesTheory/DragDrop' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/DragDrop' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} DragDrop`}>Drag'n'Drop</Link>
            <div dangerouslySetInnerHTML={{__html: statusDragDrop  || ''}}></div>
        </Nav.Item>,
        <Nav.Item key={'KeyboardEvents-article'}>
            <Link to='./articlesTheory/KeyboardEvents' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/KeyboardEvents' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} KeyboardEvents`}>События клавиатуры</Link>
            <div dangerouslySetInnerHTML={{__html: statusKeyboardEvents  || ''}}></div>
        </Nav.Item>,
        <Nav.Item key={'PointerEvents-article'}>
            <Link to='./articlesTheory/PointerEvents' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/PointerEvents' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} PointerEvents`}>События указателя</Link>
            <div dangerouslySetInnerHTML={{__html: statusPointerEvents  || ''}}></div>
        </Nav.Item>,
        <Nav.Item key={'Scroll-article'}>
            <Link to='./articlesTheory/Scroll' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Scroll' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Scroll`}>Прокрутка</Link>
            <div dangerouslySetInnerHTML={{__html: statusScroll || ''}}></div>
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