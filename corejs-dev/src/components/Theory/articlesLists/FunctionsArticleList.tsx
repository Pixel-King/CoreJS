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


const FunctionsArticleList: React.FC = () => {
    const [isOpen, setOpenClose] = useState<boolean>(false);
    const loc = useLocation();

    const auth = useAppSelector(selectAuth);
    const [statusFunctions, setStatusFunctions] = useState<string>('');
    const [statusFunctionExpressions, setStatusFunctionExpressions] = useState<string>('');
    const [statusArrowFunctions, setStatusArrowFunctions] = useState<string>('');
    const [statusPolyfills, setStatusPolyfills] = useState<string>('');
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
                    if (article.articleId.includes('Functions')) {
                        setStatusFunctions(`&#10003;`)
                    }
                    if (article.articleId.includes('FunctionExpressions')) {
                        setStatusFunctionExpressions(`&#10003;`)
                    }
                    if (article.articleId.includes('ArrowFunctions')) {
                        setStatusArrowFunctions(`&#10003;`)
                    }
                    if (article.articleId.includes('Polyfills')) {
                        setStatusPolyfills(`&#10003;`)
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
            setStatusFunctions
            setStatusFunctionExpressions
            setStatusArrowFunctions
            setStatusPolyfills
        }
    })

    const body = isOpen && [
        <Nav.Item key={'Functions-article'}>
            <Link to='./articlesTheory/Functions' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Functions' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Date`}>Функции</Link>
            <div dangerouslySetInnerHTML={{__html: statusFunctions  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'FunctionExpressions-article'}>
            <Link to='./articlesTheory/FunctionExpressions' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/FunctionExpressions' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} FunctionExpressions`}>Function Expressions</Link>
            <div dangerouslySetInnerHTML={{__html: statusFunctionExpressions  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'ArrowFunctions-article'}>
            <Link to='./articlesTheory/ArrowFunctions' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/ArrowFunctions' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} ArrowFunctions`}>Стрелочные функции</Link>
            <div dangerouslySetInnerHTML={{__html: statusArrowFunctions  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'Polyfills-article'}>
            <Link to='./articlesTheory/Polyfills' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Polyfills' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Polyfills`}>Полифилы</Link>
            <div dangerouslySetInnerHTML={{__html: statusPolyfills  || ''}}></div> 
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