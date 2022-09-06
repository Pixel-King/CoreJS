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


const VariableArticlelList: React.FC = () => {
    const [isOpen, setOpenClose] = useState<boolean>(false);
    const loc = useLocation();

    const auth = useAppSelector(selectAuth);
    const [statusVariables, setStatusVariables] = useState<string>('');
    const [statusLetVarConst, setStatusLetVarConst] = useState<string>('');
    const [statusHoisting, setStatusHoisting] = useState<string>('');
    const [statusTempDeadZone, setStatusTempDeadZone] = useState<string>('');
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
                    if (article.articleId.includes('Variables')) {
                        setStatusVariables(`&#10003;`)
                    }
                    if (article.articleId.includes('LetVarConst')) {
                        setStatusLetVarConst(`&#10003;`)
                    }
                    if (article.articleId.includes('Hoisting')) {
                        setStatusHoisting(`&#10003;`)
                    }
                    if (article.articleId.includes('TempDeadZone')) {
                        setStatusTempDeadZone(`&#10003;`)
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
            setStatusVariables
            setStatusLetVarConst
            setStatusHoisting
            setStatusTempDeadZone
        }
    })

    const body = isOpen && [
        <Nav.Item key={'Variables-article'}>
            <Link to='./articlesTheory/Variables' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Variables' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Variables`}>Переменные</Link>
            <div dangerouslySetInnerHTML={{__html: statusVariables  || ''}}></div>
        </Nav.Item>,
        <Nav.Item key={'LetVarConst-article'}>
            <Link to='./articlesTheory/LetVarConst' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/LetVarConst' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} LetVarConst`}>Let, const, var</Link>
            <div dangerouslySetInnerHTML={{__html: statusLetVarConst  || ''}}></div>
        </Nav.Item>,
        <Nav.Item key={'Hoisting-article'}>
            <Link to='./articlesTheory/Hoisting' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Hoisting' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Hoisting`}>Hoisting</Link>
            <div dangerouslySetInnerHTML={{__html: statusHoisting  || ''}}></div>
        </Nav.Item>,
        <Nav.Item key={'TempDeadZone-article'}>
            <Link to="./articlesTheory/TempDeadZone" onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/TempDeadZone' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} TempDeadZone`}>Temporal Dead Zone</Link>
            <div dangerouslySetInnerHTML={{__html: statusTempDeadZone  || ''}}></div>
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