import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const DataTypesArticleList: React.FC = () => {
    const [isOpen, setOpenClose] = useState<boolean>(false);
    const loc = useLocation();
    const body = isOpen && [
        <Nav.Item key={'DataTypes-article'}>
            <Link to='./articlesTheory/DataTypes' onClick={ () => scrollUp()} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/DataTypes' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} DataTypes`}>Типы данных</Link>
        </Nav.Item>,
        <Nav.Item key={'Numbers-article'}>
            <Link to='./articlesTheory/Numbers' onClick={ () => scrollUp()} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Numbers' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} Numbers`}>Числа Number</Link>
        </Nav.Item>,
        <Nav.Item key={'Strings-article'}>
            <Link to='./articlesTheory/Strings' onClick={ () => scrollUp()} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Strings' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} Strings`}>Строки String</Link>
        </Nav.Item>,
        <Nav.Item key={'ObjectsBasics-article'}>
            <Link to="./articlesTheory/ObjectsBasics" onClick={ () => scrollUp()} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/ObjectsBasics' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} ObjectsBasics`}>Объекты. Основы</Link>
        </Nav.Item>,
        <Nav.Item key={'ObjectsCopy-article'}>
            <Link to='./articlesTheory/ObjectsCopy' onClick={ () => scrollUp()} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/ObjectsCopy' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} ObjectsCopy`}>Объекты. Копирование</Link>
        </Nav.Item>,
        <Nav.Item key={'ObjectMethods-article'}>
            <Link to='./articlesTheory/ObjectMethods' onClick={ () => scrollUp()} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/ObjectMethods' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} ObjectMethods`}>Методы объектов</Link>
        </Nav.Item>,
        <Nav.Item key={'Arrays-article'}>
            <Link to='./articlesTheory/Arrays' onClick={ () => scrollUp()} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Arrays' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} Arrays`}>Массивы</Link>
        </Nav.Item>,
        <Nav.Item key={'ArrayMethods-article'}>
            <Link to='./articlesTheory/ArrayMethods' onClick={ () => scrollUp()} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/ArrayMethods' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} ArrayMethods`}>Методы массивов</Link>
        </Nav.Item>,
        <Nav.Item key={'TypeConversions-article'}>
            <Link to='./articlesTheory/TypeConversions' onClick={ () => scrollUp()} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/TypeConversions' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} TypeConversions`}>Преобразование типов</Link>
        </Nav.Item>,
        <Nav.Item key={'SymbolType-article'}>
            <Link to='./articlesTheory/SymbolType' onClick={ () => scrollUp()} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/SymbolType' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} SymbolType`}>Symbol</Link>
        </Nav.Item>,
        <Nav.Item key={'Iterable-article'}>
            <Link to='./articlesTheory/Iterable' onClick={ () => scrollUp()} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Iterable' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} Iterable`}>Перебираемые объекты</Link>
        </Nav.Item>,
        <Nav.Item key={'MapSet-article'}>
            <Link to='./articlesTheory/MapSet' onClick={ () => scrollUp()} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/MapSet' ? 'bg-danger bg-opacity-10 border border-danger rounded fw-semibold' : ''} MapSet`}>Map и Set</Link>
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