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

const DateArticlesList: React.FC = () => {
    const [isOpen, setOpenClose] = useState<boolean>(false);
    const loc = useLocation();

    const auth = useAppSelector(selectAuth);
    const [statusDate, setStatusDate] = useState<string>('');
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
                    if (article.articleId.includes('Date')) {
                        setStatusDate(`&#10003;`)
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
            setStatusDate
        }
    })

    const body = isOpen && [
        <Nav.Item key={'Date-article'}>
            <Link to='./articlesTheory/Date' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Date' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Date`}>Дата и время</Link>
            <div dangerouslySetInnerHTML={{__html: statusDate  || ''}}></div> 
        </Nav.Item>
    ];

    function scrollUp() {
        window.scrollBy(0, -window.pageYOffset);
    };

    return (
        <div className="p-3 bg-dark bg-opacity-10 border border-light border-dark-0 rounded">
            <h4 className="articles-nav-container-head" onClick={ () => setOpenClose(!isOpen) }>Date</h4>
            {body}
        </div>
    )
}

export default DateArticlesList;