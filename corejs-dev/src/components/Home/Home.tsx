import * as React from "react";
import './Home.css';
import About from "./About";
import CardList from "./CardList";
import textCards from "./textCards";

const Home: React.FC = () => {
    return (
        <div className="home_content">
            <About />
            {CardList(textCards)}
        </div>
    )
}

export default Home;