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

const PromisesArticlesList: React.FC = () => {
    const [isOpen, setOpenClose] = useState<boolean>(false);
    const loc = useLocation();

    const auth = useAppSelector(selectAuth);
    const [statusCallbacks, setStatusCallbacks] = useState<string>('');
    const [statusPromisesBasics, setStatusPromisesBasics] = useState<string>('');
    const [statusPromiseChaining, setStatusPromiseChaining] = useState<string>('');
    const [statusPromisesErrorHandling, setStatusPromisesErrorHandling] = useState<string>('');
    const [statusPromisification, setStatusPromisification] = useState<string>('');
    const [statusPromiseApi, setStatusPromiseApi] = useState<string>('');
    const [statusMicrotasks, setStatusMicrotasks] = useState<string>('');
    const [statusAsyncAwait, setStatusAsyncAwait] = useState<string>('');
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
                console.log(readedArticle)
                readedArticle.forEach((article: Article) => {
                    if (article.articleId.includes('Callbacks')) {
                        setStatusCallbacks(`&#10003;`)
                    }
                    if (article.articleId.includes('PromisesBasics')) {
                        setStatusPromisesBasics(`&#10003;`)
                    }
                    if (article.articleId.includes('PromiseChaining')) {
                        setStatusPromiseChaining(`&#10003;`)
                    }
                    if (article.articleId.includes('PromisesErrorHandling')) {
                        setStatusPromisesErrorHandling(`&#10003;`)
                    }
                    if (article.articleId.includes('PromiseApi')) {
                        setStatusPromiseApi(`&#10003;`)
                    }
                    if (article.articleId.includes('Promisification')) {
                        setStatusPromisification(`&#10003;`)
                    }
                    if (article.articleId.includes('Microtasks')) {
                        setStatusMicrotasks(`&#10003;`)
                    }
                    if (article.articleId.includes('AsyncAwait')) {
                        setStatusAsyncAwait(`&#10003;`)
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
            setStatusCallbacks
            setStatusPromisesBasics
            setStatusPromiseChaining
            setStatusPromisesErrorHandling
            setStatusPromiseApi
            setStatusPromisification
            setStatusMicrotasks
            setStatusAsyncAwait
        }
    })

    const body = isOpen && [
        <Nav.Item key={'Callbacks-article'}>
            <Link to='./articlesTheory/Callbacks' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Callbacks' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Callbacks`}>Введение: колбэки</Link>
            <div dangerouslySetInnerHTML={{__html: statusCallbacks  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'PromisesBasics-article'}>
            <Link to='./articlesTheory/PromisesBasics' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/PromisesBasics' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} PromisesBasics`}>Промисы</Link>
            <div dangerouslySetInnerHTML={{__html: statusPromisesBasics  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'PromiseChaining-article'}>
            <Link to='./articlesTheory/PromiseChaining' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/PromiseChaining' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} PromiseChaining`}>Цепочка промисов</Link>
            <div dangerouslySetInnerHTML={{__html: statusPromiseChaining  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'PromisesErrorHandling-article'}>
            <Link to='./articlesTheory/PromisesErrorHandling' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/PromisesErrorHandling' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} PromisesErrorHandling`}>Промисы: обработка ошибок</Link>
            <div dangerouslySetInnerHTML={{__html: statusPromisesErrorHandling  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'PromiseApi-article'}>
            <Link to='./articlesTheory/PromiseApi' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/PromiseApi' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} PromiseApi`}>Promise API</Link>
            <div dangerouslySetInnerHTML={{__html: statusPromiseApi  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'Promisification-article'}>
            <Link to='./articlesTheory/Promisification' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Promisification' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Promisification`}>Промисификация</Link>
            <div dangerouslySetInnerHTML={{__html: statusPromisification  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'Microtasks-article'}>
            <Link to='./articlesTheory/Microtasks' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Microtasks' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Microtasks`}>Микрозадачи</Link>
            <div dangerouslySetInnerHTML={{__html: statusMicrotasks  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'AsyncAwait-article'}>
            <Link to='./articlesTheory/AsyncAwait' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/AsyncAwait' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} AsyncAwait`}>async / await</Link>
            <div dangerouslySetInnerHTML={{__html: statusAsyncAwait  || ''}}></div> 
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