import * as React from 'react';
import img1 from './assets/cat1.jpg';
import img2 from './assets/cat2.jpeg';
import img3 from './assets/cat3.jpg';
import './Developers.css'


const Devs: React.FC = () => {
    return (
        <div className='developers'>
            <h1>Наша команда</h1>
            <div className='dev'>
                <div className='dev_text'>
                    <h3>Тимлид Ярослав</h3>
                    <p>что сделал?...</p>
                </div>
                <img src={img1} alt='img'></img>
            </div>
            <div className='dev'>
                <div className='dev_text'>
                    <h3>Разраб Евгений</h3>
                    <p>что сделал?...</p>
                </div>
                <img src={img3} alt='img'></img>
            </div>
            <div className='dev'>
                <div className='dev_text'>
                    <h3>Разрабыня Маргарита</h3>
                    <p>что сделал?...</p>
                </div>
                <img src={img2} alt='img'></img>
            </div>
        </div>
    )
}

export default Devs;