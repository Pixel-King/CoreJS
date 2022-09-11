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

const DataTypesArticleList: React.FC = () => {
    const [isOpen, setOpenClose] = useState<boolean>(false);
    const loc = useLocation();
    const auth = useAppSelector(selectAuth);
    const [statusDataTypes, setStatusDataTypes] = useState<string>('');
    const [statusNumbers, setStatusNumbers] = useState<string>('');
    const [statusStrings, setStatusStrings] = useState<string>('');
    const [statusObjectsBasics, setStatusObjectsBasics] = useState<string>('');
    const [statusObjectsCopy, setStatusObjectsCopy] = useState<string>('');
    const [statusObjectMethods, setStatusObjectMethods] = useState<string>('');
    const [statusArrays, setStatusArrays] = useState<string>('');
    const [statusArrayMethods, setStatusArrayMethods] = useState<string>('');
    const [statusTypeConversions, setStatusTypeConversions] = useState<string>('');
    const [statusSymbolType, setStatusSymbolType] = useState<string>('');
    const [statusIterable, setStatusIterable] = useState<string>('');
    const [statusMapSet, setStatusMapSet] = useState<string>('');
    const [statusObjectKeysValuesEntries, setStatusObjectKeysValuesEntries] = useState<string>('');
    const [statusDestructuringAssignment, setStatusDestructuringAssignment] = useState<string>('');
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
                    if (article.articleId.includes('DataTypes')) {
                        setStatusDataTypes(`&#10003;`)
                    }
                    if (article.articleId.includes('Numbers')) {
                        setStatusNumbers(`&#10003;`)
                    }
                    if (article.articleId.includes('Strings')) {
                        setStatusStrings(`&#10003;`)
                    }
                    if (article.articleId.includes('ObjectsBasics')) {
                        setStatusObjectsBasics(`&#10003;`)
                    }
                    if (article.articleId.includes('ObjectsCopy')) {
                        setStatusObjectsCopy(`&#10003;`)
                    }
                    if (article.articleId.includes('ObjectMethods')) {
                        setStatusObjectMethods(`&#10003;`)
                    }
                    if (article.articleId.includes('Arrays')) {
                        setStatusArrays(`&#10003;`)
                    }
                    if (article.articleId.includes('ArrayMethods')) {
                        setStatusArrayMethods(`&#10003;`)
                    }
                    if (article.articleId.includes('TypeConversions')) {
                        setStatusTypeConversions(`&#10003;`)
                    }
                    if (article.articleId.includes('SymbolType')) {
                        setStatusSymbolType(`&#10003;`)
                    }
                    if (article.articleId.includes('Iterable')) {
                        setStatusIterable(`&#10003;`)
                    }
                    if (article.articleId.includes('MapSet')) {
                        setStatusMapSet(`&#10003;`)
                    }
                    if (article.articleId.includes('ObjectKeysValuesEntries')) {
                        setStatusObjectKeysValuesEntries(`&#10003;`)
                    }
                    if (article.articleId.includes('DestructuringAssignment')) {
                        setStatusDestructuringAssignment(`&#10003;`)
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
            setStatusDataTypes
            setStatusNumbers
            setStatusStrings
            setStatusObjectsBasics
            setStatusObjectsCopy
            setStatusObjectMethods
            setStatusArrays
            setStatusArrayMethods
            setStatusTypeConversions
            setStatusSymbolType
            setStatusMapSet
            setStatusIterable
            setStatusObjectKeysValuesEntries
            setStatusDestructuringAssignment
        }
    })

    const body = isOpen && [
        <Nav.Item key={'DataTypes-article'}>
            <Link to='./articlesTheory/DataTypes' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/DataTypes' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} DataTypes`}>Типы данных </Link>
            <div dangerouslySetInnerHTML={{__html: statusDataTypes  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'Numbers-article'}>
            <Link to='./articlesTheory/Numbers' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Numbers' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Numbers`}>Числа Number</Link>
            <div dangerouslySetInnerHTML={{__html: statusNumbers  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'Strings-article'}>
            <Link to='./articlesTheory/Strings' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Strings' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Strings`}>Строки String</Link>
            <div dangerouslySetInnerHTML={{__html: statusStrings  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'ObjectsBasics-article'}>
            <Link to="./articlesTheory/ObjectsBasics" onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/ObjectsBasics' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} ObjectsBasics`}>Объекты. Основы</Link>
            <div dangerouslySetInnerHTML={{__html: statusObjectsBasics  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'ObjectsCopy-article'}>
            <Link to='./articlesTheory/ObjectsCopy' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/ObjectsCopy' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} ObjectsCopy`}>Объекты. Копирование</Link>
            <div dangerouslySetInnerHTML={{__html: statusObjectsCopy  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'ObjectMethods-article'}>
            <Link to='./articlesTheory/ObjectMethods' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/ObjectMethods' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} ObjectMethods`}>Методы объектов</Link>
            <div dangerouslySetInnerHTML={{__html: statusObjectMethods  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'Arrays-article'}>
            <Link to='./articlesTheory/Arrays' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Arrays' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Arrays`}>Массивы</Link>
            <div dangerouslySetInnerHTML={{__html: statusArrays  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'ArrayMethods-article'}>
            <Link to='./articlesTheory/ArrayMethods' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/ArrayMethods' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} ArrayMethods`}>Методы массивов</Link>
            <div dangerouslySetInnerHTML={{__html: statusArrayMethods  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'TypeConversions-article'}>
            <Link to='./articlesTheory/TypeConversions' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/TypeConversions' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} TypeConversions`}>Преобразование типов</Link>
            <div dangerouslySetInnerHTML={{__html: statusTypeConversions  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'SymbolType-article'}>
            <Link to='./articlesTheory/SymbolType' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/SymbolType' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} SymbolType`}>Symbol</Link>
            <div dangerouslySetInnerHTML={{__html: statusSymbolType  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'Iterable-article'}>
            <Link to='./articlesTheory/Iterable' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Iterable' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Iterable`}>Перебираемые объекты</Link>
            <div dangerouslySetInnerHTML={{__html: statusIterable  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'MapSet-article'}>
            <Link to='./articlesTheory/MapSet' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/MapSet' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} MapSet`}>Map и Set</Link>
            <div dangerouslySetInnerHTML={{__html: statusMapSet  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'ObjectKeysValuesEntries-article'}>
            <Link to='./articlesTheory/ObjectKeysValuesEntries' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/ObjectKeysValuesEntries' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} ObjectKeysValuesEntries`}>Object.keys, values, entries</Link>
            <div dangerouslySetInnerHTML={{__html: statusObjectKeysValuesEntries  || ''}}></div> 
        </Nav.Item>,
        <Nav.Item key={'DestructuringAssignment-article'}>
            <Link to='./articlesTheory/DestructuringAssignment' onClick={ () => scrollUp() } className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/DestructuringAssignment' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} DestructuringAssignment`}>Деструктурирующее присваивание</Link>
            <div dangerouslySetInnerHTML={{__html: statusDestructuringAssignment  || ''}}></div> 
        </Nav.Item>
    ];

    function scrollUp() {
        window.scrollBy(0, -window.pageYOffset);
    };

    return (
        <div className="p-3 bg-dark bg-opacity-10 border border-light border-dark-0 rounded">
            <h4 className="articles-nav-container-head" onClick={ () => setOpenClose(!isOpen) }>Типы данных в JS</h4>
            {body}
        </div>
    )
}

export default DataTypesArticleList;