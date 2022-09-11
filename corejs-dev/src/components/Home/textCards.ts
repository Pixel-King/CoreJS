import { CardType } from './types/types';

const textCards: CardType[] = [
    {
        'id': '1',
        'title': 'Учебник',
        'textRU': 'В нашем учебнике собраны основные темы по JavaScript, которые должен знать junior javascript разработчик. Здесь Вы можете изучить JavaScript, начиная с самого нуля',
        'textEN': 'JavaScript is a programming language that allows you to implement complex things on web pages. Every time a web page does more than just sit there and display static information for you to look at—displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, or more—you can bet that JavaScript is probably involved.',
        'path': '/theory',
        'imgsrc': 'https://www.pngitem.com/pimgs/m/179-1793172_material-filled-icon-book-icon-hd-png-download.png',
    }, {
        'id': '2',
        'title': 'Тесты',
        'textRU': 'В данном разделе Вы можете пройти тесты по разным темам. Есть вопросы по теории, а есть практические на понимание особенностей языка.',
        'textEN': '...',
        'path': '/tests',
        'imgsrc': 'https://img2.freepng.ru/20180404/lgq/kisspng-computer-icons-theme-quiz-5ac5943d7b1558.1957443315228979815042.jpg',
    }, {
        'id': '3',
        'title': 'Задачи',
        'textRU': 'Здесь собраны задачи codewars по разным темам. Вы можете проверить свои знания, проходя каты разной сложности',
        'textEN': '...',
        'path': '/statistics',
        'imgsrc': 'https://e7.pngegg.com/pngimages/1023/217/png-clipart-customer-experience-computer-icons-computer-software-marketing-purple-text.png',
    }, {
        'id': '4',
        'title': 'Статистика',
        'textRU': 'В разделе "Статистика" показан рейтинг пользователей. Вы можете отслеживать свой прогресс обучения, посмотрев статистику в виде графика в личном кабинете.',
        'textEN': '...',
        'path': '/statistics',
        'imgsrc': 'https://e7.pngegg.com/pngimages/1023/217/png-clipart-customer-experience-computer-icons-computer-software-marketing-purple-text.png',
    }
]

export default textCards;

// {
//     'id': '4',
//     'title': 'О разработчиках',
//     'textRU': 'Здесь Вы можете узнать подробнее о разработчиках данного приложения, и, при желании, взять кого-нибудь на работу :)',
//     'textEN': '...',
//     'path': '/',
// },