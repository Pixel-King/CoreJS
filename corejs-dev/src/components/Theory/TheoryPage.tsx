import * as React from "react";
import './articlesPage.css';
import { Nav, Col, Row, Tab } from 'react-bootstrap';
import { Routes, Route, Link} from "react-router-dom";
import { useState } from "react";
import { getValue } from "@testing-library/user-event/dist/utils";
import DataTypes from "./articlesTheory/DataTypes";

const TheoryPage: React.FC = () => {
    const [activePage, setActivatePage] = useState<string>('art1');
    return (
        <div className="theory-page-wrap">
            <div className="articles-nav-wrap">
                <Nav className="articles-nav flex-column">
                    <Nav.Item>
                        <Link to="" onClick={()=>{setActivatePage('art1')}} className={`article-nav-link ${activePage === 'art1'?'active':''}`}>Типы данных</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="" onClick={()=>{setActivatePage('art2')}} className={`article-nav-link ${activePage === 'art2'?'active':''}`}>Articale2</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="" onClick={()=>{setActivatePage('art3')}} className={`article-nav-link ${activePage === 'art3'?'active':''}`}>Articale3</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="" onClick={()=>{setActivatePage('art4')}} className={`article-nav-link ${activePage === 'art4'?'active':''}`}>Articale4</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="" onClick={()=>{setActivatePage('art5')}} className={`article-nav-link ${activePage === 'art5'?'active':''}`}>Articale5</Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className="articles-wrap">
                {activePage === 'art1'? <DataTypes/>:<a></a>  }
            </div>
        </div> 
    );
}

export default TheoryPage;