import { StringMappingType } from "typescript";

//import { CardType } from './types/types';
type CardDev = {
    id: string,
    title: string;
    text: string,
    imgsrc: string,
}

const textCardsDevs: CardDev[] = [
    {
        'id': '1',
        'title': 'Ярослав',
        'text': '',
        'imgsrc': '',
    }, {
        'id': '2',
        'title': 'Евгений',
        'text': '',
        'imgsrc': '',
    }, {
        'id': '3',
        'title': 'Маргарита',
        'text': '',
        'imgsrc': '',
    }
]

export default textCardsDevs;

// {
//     'id': '4',
//     'title': 'О разработчиках',
//     'textRU': 'Здесь Вы можете узнать подробнее о разработчиках данного приложения, и, при желании, взять кого-нибудь на работу :)',
//     'textEN': '...',
//     'path': '/',
// },