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

const ConditionsComparisonLoopsArticlesList: React.FC = () => {

    const [isOpen, setOpenClose] = useState<boolean>(false);
    const loc = useLocation();
    const auth = useAppSelector(selectAuth);
    const [statusComparison, setStatusComparison] = useState<string>('');
    const [statusTernaryOperator, setStatusTernaryOperator] = useState<string>('');
    const [statusSwitchCase, setStatusSwitchCase] = useState<string>('');
    const [statusLoops, setStatusLoops] = useState<string>('');
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
                    if (article.articleId.includes('Comparison')) {
                        setStatusComparison(`&#10003;`)
                    }
                    if (article.articleId.includes('TernaryOperator')) {
                        setStatusTernaryOperator(`&#10003;`)
                    }
                    if (article.articleId.includes('SwitchCase')) {
                        setStatusSwitchCase(`&#10003;`)
                    }
                    if (article.articleId.includes('Loops')) {
                        setStatusLoops(`&#10003;`)
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
            setStatusComparison
            setStatusTernaryOperator
            setStatusSwitchCase
            setStatusLoops
        }
    })
                
    const body = isOpen && [
        <Nav.Item key={'Comparison-article'}>
            <Link to='./articlesTheory/Comparison' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Comparison' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Comparison`}>Операторы сравнения
            <div dangerouslySetInnerHTML={{__html: statusComparison  || ''}}></div> 
            </Link>
        </Nav.Item>,
        <Nav.Item key={'TernaryOperator-article'}>
            <Link to='./articlesTheory/TernaryOperator' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/TernaryOperator' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} TernaryOperator`}>Условное ветвление: if, '?'</Link>
            <div dangerouslySetInnerHTML={{__html: statusTernaryOperator  || ''}}></div>
        </Nav.Item>,
        <Nav.Item key={'SwitchCase-article'}>
            <Link to='./articlesTheory/SwitchCase' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/SwitchCase' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} SwitchCase`}>Конструкция switch</Link>
            <div dangerouslySetInnerHTML={{__html: statusSwitchCase  || ''}}></div>
        </Nav.Item>,
        <Nav.Item key={'Loops-article'}>
            <Link to="./articlesTheory/Loops" onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Loops' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Loops`}>Циклы</Link>
            <div dangerouslySetInnerHTML={{__html: statusLoops  || ''}}></div>
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