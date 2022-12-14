import * as React from "react";
import './articlesPage.css';
import { Nav, Col, Row, Tab } from 'react-bootstrap';
import { Routes, Route, Link, useLocation} from "react-router-dom";
import { useState } from "react";
import { getValue } from "@testing-library/user-event/dist/utils";
import axios, { AxiosError } from 'axios';
import DataTypes from "./articlesTheory/DataTypes";
import Numbers from "./articlesTheory/Numbers";
import Strings from "./articlesTheory/Strings";
import Variables from "./articlesTheory/Variables";
import LetVarConst from "./articlesTheory/LetVarConst";
import TernaryOperator from "./articlesTheory/TernaryOperator";
import SwitchCase from "./articlesTheory/SwitchCase";
import TypeConversions from "./articlesTheory/TypeConversions";
import Comparison from "./articlesTheory/Comparison";
import Polyfills from "./articlesTheory/Polyfills";
import Functions from "./articlesTheory/Functions";
import FunctionExpressions from "./articlesTheory/FunctionExpressions";
import ArrowFunctions from "./articlesTheory/ArrowFunctions";
import Button from 'react-bootstrap/Button';
import DateTime from "./articlesTheory/Date";
import ObjectsBasics from "./articlesTheory/ObjectsBasics";
import ObjectsCopy from "./articlesTheory/ObjectsCopy";
import ObjectMethods from "./articlesTheory/ObjectMethods";
import Arrays from "./articlesTheory/Arrays";
import ArrayMethods from "./articlesTheory/ArrayMethods";
import Loops from "./articlesTheory/Loops";
import Hoisting from "./articlesTheory/Hoisting";
import TempDeadZone from "./articlesTheory/TempDeadZone";
import GlobalObject from "./articlesTheory/GlobalObject";
import Document from "./articlesTheory/Document";
import Events from "./articlesTheory/Events";
import EventsBubblingCapturing from "./articlesTheory/EventsBubblingCapturing";
import EventDelegation from "./articlesTheory/EventDelegation";
import MouseEvents from "./articlesTheory/MouseEvents";
import MouseMove from "./articlesTheory/MouseMove";
import DragDrop from "./articlesTheory/DragDrop";
import KeyboardEvents from "./articlesTheory/KeyboardEvents";
import PointerEvents from "./articlesTheory/PointerEvents";
import Scroll from "./articlesTheory/Scroll";
import SymbolType from "./articlesTheory/SymbolType";
import Callbacks from "./articlesTheory/Callbacks";
import PromisesBasics from "./articlesTheory/PromisesBasics";
import PromiseChaining from "./articlesTheory/PromiseChaining";
import PromisesErrorHandling from "./articlesTheory/PromisesErrorHandling";
import PromiseApi from "./articlesTheory/PromiseApi";
import Promisification from "./articlesTheory/Promisification";
import Microtasks from "./articlesTheory/Microtasks";
import AsyncAwait from "./articlesTheory/AsyncAwait";
import Iterable from "./articlesTheory/Iterable";
import MapSet from "./articlesTheory/MapSet";
import ObjectKeysValuesEntries from "./articlesTheory/ObjectKeysValuesEntries";
import DestructuringAssignment from "./articlesTheory/DestructuringAssignment";
import ModulesIntro from "./articlesTheory/ModulesIntro";
import ExportImport from "./articlesTheory/ExportImport";
import DynamicImport from "./articlesTheory/DynamicImport";

import DataTypesArticleList from "./articlesLists/DataTypesArticlesList";
import VariableArticlelList from "./articlesLists/VariablesArticlesList";
import ConditionsComparisonLoopsArticlesList from "./articlesLists/ConditionsComparisonLoopsArticlesList";
import DateArticlesList from "./articlesLists/DateArticlesList";
import FunctionsArticleList from "./articlesLists/FunctionsArticleList";
import JsInBrowserArticlesList from "./articlesLists/JsInBrowserArticlesList";
import PromisesArticlesList from "./articlesLists/PromisesArticlesList";
import ModulesArticlesList from "./articlesLists/ModulesArticlesList";

import ProgressBar from "./progressBar";
import Modal from "./modalWindow";

const TheoryPage: React.FC = () => {
    const loc = useLocation();
    const scrollButton = <Button variant="outline-danger position-fixed bottom-0 end-0 mx-3 my-3" onClick={scrollUp}>?? ???????????? ???</Button>;
    const greeting = loc.pathname === '/theory' && [
        <h2 key={'greeting-1'} className="text-center">???????????????????????? ?????? ?? ?????????????????????????? ?????????????? ?????????????? CoreJS!</h2>,
        <h2 key={'greeting-2'} className="text-center">?????? ???????????? ???????????? ????????????????, ????????????????????, ???????? {`:)`}</h2>
    ]
    const [isModal, setModal] = React.useState(false);
    const [isFired, setFired] = React.useState(false);
    const bar = loc.pathname !== '/theory' && <ProgressBar />;

    function scrollUp() {
        window.scrollBy(0, -window.pageYOffset);
    }

    function fireHandler () {
        const windowScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        if ((windowScroll / windowHeight * 100) >= 95) {
            setFired(true);
        }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", fireHandler);
        return () => window.removeEventListener("scroll", fireHandler);
    });

    React.useEffect(() => {
        if (isFired) {
            if (loc.pathname !== '/theory') {
                (async () => {
                    const userId = localStorage.getItem('userID');
                    if (userId) {
                        const url = 'https://corejs-server.herokuapp.com/';
                        const userToken = localStorage.token;
                        const config = {
                            headers: {
                                'Authorization':`Bearer ${userToken}`,
                            }
                        };
                        const resp = await axios.get(`${url}users/${userId}`, config);
                        if (resp.status === 200) {
                            const currentStat = await resp.data;
                            const passedArticles = currentStat.readedArticle;
                            if (!passedArticles.some((item: { date: string; articleId: string }) => {
                                if (item.articleId === loc.pathname) {
                                    return true;
                                } else {
                                    return false;
                                }
                            })) {
                                await axios.post(`${url}users/updaterarticle/${userId}`,
                                    {
                                        rating: "10",
                                        date: (new Date()).toISOString().split('T')[0],
                                        artId: loc.pathname,
                                    },
                                    config
                                );
                                setModal(true);  
                            } else {
                                return;
                            }
                        }
                    }
                    
                })()
            }
        }
    }, [isFired]);

    React.useEffect(() => {
        setFired(false);
    }, [loc]);

    return (
        <div className="theory-page-wrap d-flex">
            <div className="articles-nav-wrap">
                <Nav className="articles-nav">
                    <DataTypesArticleList />
                    <VariableArticlelList />
                    <ConditionsComparisonLoopsArticlesList />
                    <DateArticlesList />
                    <FunctionsArticleList />
                    <JsInBrowserArticlesList />
                    <PromisesArticlesList />
                    <ModulesArticlesList />
                </Nav>
            </div>
            <div className="articles-wrap">
                <Modal
                    key={'user-modal'}
                    isVisible = { isModal }
                    title="???? ???????????????????????????????? ???? ??????????????????????!"
                    content = { <p key={'modal-message'}>???? ???????????????? +10 ?????????? ?????????????????? ???? ???????????????? ???????????? :)</p> }
                    footer = { <Button key={'modal-button-close'} onClick = { () => setModal(false) }>????</Button> }
                    onClose = { () => setModal(false) }
                />
                {bar}
                <div className="mt-5">
                    {greeting}
                </div>
                <Routes>
                    <Route path="articlesTheory/DataTypes" element={ <DataTypes /> } />
                    <Route path="articlesTheory/Numbers" element={ <Numbers /> } />
                    <Route path="articlesTheory/Strings" element={ <Strings /> } />
                    <Route path='articlesTheory/ObjectsBasics' element={ <ObjectsBasics /> } />
                    <Route path='articlesTheory/ObjectsCopy' element={ <ObjectsCopy /> } />
                    <Route path='articlesTheory/ObjectMethods' element={ <ObjectMethods /> } />
                    <Route path='articlesTheory/Arrays' element={ <Arrays/> }/>
                    <Route path='articlesTheory/ArrayMethods' element={ <ArrayMethods /> } />
                    <Route path='articlesTheory/TypeConversions' element={ <TypeConversions /> } />
                    <Route path='articlesTheory/SymbolType' element={ <SymbolType /> } />
                    <Route path='articlesTheory/Iterable' element={ <Iterable /> } />
                    <Route path='articlesTheory/MapSet' element={ <MapSet /> } />
                    <Route path='articlesTheory/ObjectKeysValuesEntries' element={ <ObjectKeysValuesEntries /> } />
                    <Route path='articlesTheory/DestructuringAssignment' element={ <DestructuringAssignment /> } />

                    <Route path='articlesTheory/Variables' element={ <Variables /> } />
                    <Route path='articlesTheory/LetVarConst' element={ <LetVarConst/> }/>
                    <Route path='articlesTheory/Hoisting' element={ <Hoisting /> } />
                    <Route path='articlesTheory/TempDeadZone' element={ <TempDeadZone /> } />

                    <Route path='articlesTheory/Comparison' element={ <Comparison /> } />
                    <Route path='articlesTheory/TernaryOperator' element={ <TernaryOperator/> }/>
                    <Route path='articlesTheory/SwitchCase' element={ <SwitchCase /> } />
                    <Route path='articlesTheory/Loops' element={ <Loops /> } />

                    <Route path='articlesTheory/Date' element={ <DateTime /> } />

                    <Route path='articlesTheory/Functions' element={ <Functions /> } />
                    <Route path='articlesTheory/FunctionExpressions' element={ <FunctionExpressions/> }/>
                    <Route path='articlesTheory/ArrowFunctions' element={ <ArrowFunctions /> } />
                    <Route path='articlesTheory/Polyfills' element={ <Polyfills /> } />

                    <Route path="articlesTheory/GlobalObject" element={ <GlobalObject /> } />
                    <Route path="articlesTheory/Document" element={ <Document /> } />
                    <Route path="articlesTheory/Events" element={ <Events /> } />
                    <Route path='articlesTheory/EventsBubblingCapturing' element={ <EventsBubblingCapturing /> } />
                    <Route path='articlesTheory/EventDelegation' element={ <EventDelegation /> } />
                    <Route path='articlesTheory/MouseEvents' element={ <MouseEvents /> } />
                    <Route path='articlesTheory/MouseMove' element={ <MouseMove /> } />
                    <Route path='articlesTheory/DragDrop' element={ <DragDrop /> } />
                    <Route path='articlesTheory/KeyboardEvents' element={ <KeyboardEvents /> } />
                    <Route path='articlesTheory/PointerEvents' element={ <PointerEvents /> } />
                    <Route path='articlesTheory/Scroll' element={ <Scroll /> } />
                    
                    <Route path='articlesTheory/Callbacks' element={ <Callbacks /> } />
                    <Route path='articlesTheory/PromisesBasics' element={ <PromisesBasics /> } />
                    <Route path='articlesTheory/PromiseChaining' element={ <PromiseChaining /> } />
                    <Route path='articlesTheory/PromisesErrorHandling' element={ <PromisesErrorHandling /> } />
                    <Route path='articlesTheory/PromiseApi' element={ <PromiseApi /> } />
                    <Route path='articlesTheory/Promisification' element={ <Promisification /> } />
                    <Route path='articlesTheory/Microtasks' element={ <Microtasks /> } />
                    <Route path='articlesTheory/AsyncAwait' element={ <AsyncAwait /> } />

                    <Route path='articlesTheory/ModulesIntro' element={ <ModulesIntro /> } />
                    <Route path='articlesTheory/ExportImport' element={ <ExportImport /> } />
                    <Route path='articlesTheory/DynamicImport' element={ <DynamicImport /> } />
                </Routes>
            </div>
            {scrollButton}
        </div> 
    );
}

export default TheoryPage;