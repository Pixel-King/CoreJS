import * as React from "react";
import './Home.css';
import About from "./About";
import CardList from "./CardList";
import textCards from "./textCards";
import img_home from './assets/img_home.jpg';

const Home: React.FC = () => {
    return (
        <div className="home_content">
            <div className='homepage_img'>
                <img src={img_home}/>
            </div>
            <About />
            {CardList(textCards)}
        </div>
    )
}

export default Home;