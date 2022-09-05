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


const ModulesArticlesList: React.FC = () => {
    const [isOpen, setOpenClose] = useState<boolean>(false);
    const loc = useLocation();

    const auth = useAppSelector(selectAuth);
    const [statusModulesIntro, setStatusModulesIntro] = useState<string>('');
    const [statusExportImport, setStatusExportImport] = useState<string>('');
    const [statusDynamicImport, setStatusDynamicImport] = useState<string>('');
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
                    if (article.articleId.includes('ModulesIntro')) {
                        setStatusModulesIntro(`&#10003;`)
                    }
                    if (article.articleId.includes('ExportImport')) {
                        setStatusExportImport(`&#10003;`)
                    }
                    if (article.articleId.includes('DynamicImport')) {
                        setStatusDynamicImport(`&#10003;`)
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
            setStatusModulesIntro
            setStatusExportImport
            setStatusDynamicImport
        }
    })


    const body = isOpen && [
        <Nav.Item key={'ModulesIntro-article'}>
            <Link to='./articlesTheory/ModulesIntro' onClick={ () => scrollUp()} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/ModulesIntro' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} ModulesIntro`}>Модули, введение</Link>
            <div dangerouslySetInnerHTML={{__html: statusModulesIntro  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'ExportImport-article'}>
            <Link to='./articlesTheory/ExportImport' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/ExportImport' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} ExportImport`}>Экспорт и импорт</Link>
            <div dangerouslySetInnerHTML={{__html: statusExportImport  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'DynamicImport-article'}>
            <Link to='./articlesTheory/DynamicImport' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/DynamicImport' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} DynamicImport`}>Динамические импорты</Link>
            <div dangerouslySetInnerHTML={{__html: statusDynamicImport  || ''}}></div> 
        </Nav.Item>
    ];

    function scrollUp() {
        window.scrollBy(0, -window.pageYOffset);
    };

    return (
        <div className="p-3 bg-dark bg-opacity-10 border border-light border-dark-0 rounded">
            <h4 className="articles-nav-container-head" onClick={ () => setOpenClose(!isOpen) }>Модули</h4>
            {body}
        </div>
    )
}

export default ModulesArticlesList;