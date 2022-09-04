import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { addStat } from "../articleStatistics";

const ModulesArticlesList: React.FC = () => {
    const [isOpen, setOpenClose] = useState<boolean>(false);
    const loc = useLocation();
    const body = isOpen && [
        <Nav.Item key={'ModulesIntro-article'}>
            <Link to='./articlesTheory/ModulesIntro' onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/ModulesIntro') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/ModulesIntro' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} ModulesIntro`}>Модули, введение</Link>
        </Nav.Item>,
        <Nav.Item key={'ExportImport-article'}>
            <Link to='./articlesTheory/ExportImport' onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/ExportImport') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/ExportImport' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} ExportImport`}>Экспорт и импорт</Link>
        </Nav.Item>,
        <Nav.Item key={'DynamicImport-article'}>
            <Link to='./articlesTheory/DynamicImport' onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/DynamicImport') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/DynamicImport' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} DynamicImport`}>Динамические импорты</Link>
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