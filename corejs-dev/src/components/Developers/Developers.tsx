import * as React from 'react';
import img1 from './assets/cat1.jpg';
import img2 from './assets/cat2.jpeg';
import img3 from './assets/cat3.jpg';
import git from './assets/GitHub-Mark-64px.png';
import './Developers.css'


const Devs: React.FC = () => {
    return (
        <div className='developers'>
            <h1>Наша команда</h1>
            <div className='dev'>
                <div className='dev_text'>
                    <div className='dev_text_title'>
                        <h3>Тимлид Ярослав</h3>
                        <a href="https://github.com/pixel-king">
                                <img className="git-img" src={git} alt="git"></img>
                        </a>
                    </div>
                    <div className='dev_text_text'>
                        <p>Написал бэк: БД mongodb + nestjs.</p>
                        <p>Реализовано: аутентификация, авторизация, шифрование и хэширование, CSRF-защита, реализация паспорта JWT</p>
                        <p>Создал таблицу лидеров и личный профиль пользователя, авторизацию и регистрацию на фронте, страницу статистики</p>
                    </div>
                </div>
                <img className='dev-img' src={img1} alt='img'></img>
            </div>
            <div className='dev dev_reverse'>
                <div className='dev_text'>
                    <div className='dev_text_title'>
                        <h3>Разраб Евгений</h3>
                        <a href="https://github.com/eugene-bakulin">
                                <img className="git-img" src={git} alt="git"></img>
                        </a>
                    </div>
                    <div className='dev_text_text'>
                        <p>Создал учебник с основными темами</p>
                        <p>Реализовал роутинг страниц учебника</p>
                        <p>Написал запросы для сохранения статистики прочитанных тем и пройденных тестов</p>
                        <p>Добавил возможность редактирования вопросов для роли администратора</p>
                    </div>
                </div>
                <img className='dev-img' src={img3} alt='img'></img>
            </div>
            <div className='dev'>
                <div className='dev_text'>
                    <div className='dev_text_title'>
                        <h3>Разрабыня Маргарита</h3>
                        <a href="https://github.com/Margarita1007">
                                <img className="git-img" src={git} alt="git"></img>
                        </a>
                    </div>
                    <div className='dev_text_text'>
                        <p>Сделала основной дизайн приложения</p>
                        <p>Написала тесты с разбивкой по темам, роутинг страниц с тестами</p>
                        <p>Реализовала переключение темы приложения</p>
                        <p>Звуковые эффекты и горячие клавиши в тестах</p>
                        <p>Заросы и отображение прочитанных тем и пройденных тестов</p>
                    </div>
                </div>
                <img className='dev-img' src={img2} alt='img'></img>
            </div>
        </div>
    )
}

export default Devs;