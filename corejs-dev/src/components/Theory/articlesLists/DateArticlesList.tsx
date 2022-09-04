import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { addStat } from "../articleStatistics";

const DateArticlesList: React.FC = () => {
    const [isOpen, setOpenClose] = useState<boolean>(false);
    const loc = useLocation();
    const body = isOpen && [
        <Nav.Item key={'Date-article'}>
            <Link to='./articlesTheory/Date' onClick={ () => { scrollUp(); addStat('/theory/articlesTheory/Date') }} className={`article-nav-link d-block ${loc.pathname === '/theory/articlesTheory/Date' ? 'bg-info bg-opacity-10 border border-info rounded fw-semibold' : ''} Date`}>Дата и время</Link>
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