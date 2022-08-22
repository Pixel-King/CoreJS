export type AnswerType = {
    answer: string, 
    isCorrect: boolean
}

export type QuestionType = {
    id: number;
    question: string;
    type: 'practice' | 'theory';
    code?: string;
    answerOptions: AnswerType[],
}

export const questions: QuestionType[] = [
    {
        id: 1,
        question: 'Что будет в консоли?',
        type: 'practice',
        code: '<code>function sayHi() {<br /> &ensp; console.log(name);<br /> &ensp; console.log(age);<br /> &ensp; var name = "Vasya";<br /> &ensp; let age = 21;<br /> }<br /> sayHi();</code>',
        answerOptions: [
            {answer: 'Vasya и undefined', isCorrect: false },
            {answer: 'Vasya и ReferenceError', isCorrect: false},
            {answer: 'ReferenceError и 21', isCorrect: false},
            {answer: 'undefined и ReferenceError', isCorrect: true},
        ]
    }, {
        id: 2,
        question: 'Что будет в консоли?',
        type: 'practice',
        code: '<code>for (var i = 0; i < 3; i++) {<br />&ensp; setTimeout(()=> console.log(i), 1);<br /> }<br />for (let i = 0; i < 3; i++) {<br />&ensp; setTimeout(()=> console.log(i), 1);<br /> }</code>',
        answerOptions: [
            {answer: '0 1 2 и 0 1 2', isCorrect: false},
            {answer: '0 1 2 и 3 3 3', isCorrect: false},
            {answer: '3 3 3 и 0 1 2', isCorrect: true},
            {answer: '3 3 3 и 3 3 3', isCorrect: false},
        ]
    }, {
        id: 3,
        question: 'Что будет в консоли?',
        type: 'practice',
        code: '<code>const shape = {<br />&ensp; radius: 10, <br />&ensp; diameter() {<br />&ensp;  return this.radius * 2; <br /> } <br /> &ensp; perimeter: () => 2 * Math.PI * this.radius <br /> }; <br /> shape.diameter();<br />shape.perimeter();</code>',
        answerOptions: [
            {answer: '20 и 62.83185307179586', isCorrect: false},
            {answer: '20 и NaN', isCorrect: true},
            {answer: '20 и 63', isCorrect: false},
            {answer: 'NaN и 63', isCorrect: false},
        ]
    }, {
        id: 4,
        question: 'Что будет в консоли?',
        type: 'practice',
        code: '<code>+true; <br />!"Lydia"</code>',
        answerOptions: [
            {answer: '1 и false', isCorrect: true},
            {answer: 'false и NaN', isCorrect: false},
            {answer: 'false и false', isCorrect: false},
            {answer: 'NaN и NaN', isCorrect: false},
        ]
    }, {
        id: 5,
        question: 'Что получится, если сложить true + false?',
        type: 'theory',
        answerOptions: [
            {answer: '"truefalse"', isCorrect: false},
            {answer: '0', isCorrect: false},
            {answer: '1', isCorrect: true},
            {answer: 'NaN', isCorrect: false},
        ]
    }, 
    {
        id: 6,
        question: 'После выполнения этого кода -- в каких объектах содержится свойство `name`?',
        type: 'practice',
        code: '<code>function User() { } <br/> let vasya = new User(); <br/>  vasya.__proto__.name = "Vasya";</code>',
        answerOptions: [
            {answer: 'vasya.__proto__ и User.__proto__', isCorrect: true},
            {answer: 'vasya.prototype', isCorrect: false},
            {answer: 'vasya.prototype и User.prototype', isCorrect: false},
            {answer: 'User.prototype', isCorrect: false},
        ]
    }, {
        id: 7,
        question: 'Какой вариант подключения скрипта является корректным с точки зрения современного стандарта HTML?',
        type: 'theory',
        answerOptions: [
            {answer: '<script src="my.js"></script>', isCorrect: true},
            {answer: '<script src="my.js"/>', isCorrect: false},
            {answer: '<хачу-javascript отсюда="my.js">', isCorrect: false},
        ]
    }, {
        id: 8,
        question: 'Что такое ECMAScript?',
        type: 'theory',
        answerOptions: [
            {answer: 'Новый язык программирования', isCorrect: false},
            {answer: 'Переработанная реализация JavaScript', isCorrect: false},
            {answer: 'Спецификация языка JavaScript', isCorrect: true},
        ]
    }, {
        id: 9,
        question: 'Правда ли что `a == b`?',
        type: 'theory',
        code: '<code> a = [1, 2, 3]; <br/>  b = [1, 2, 3]; </code>',
        answerOptions: [
            {answer: 'Правда', isCorrect: false},
            {answer: 'Неправда', isCorrect: true},
            {answer: 'Как повезет', isCorrect: false},
        ]
    }, {
        id: 10,
        question: 'Какие конструкции для циклов есть в JavaScript?',
        type: 'theory',
        answerOptions: [
            {answer: 'Только две: `for` и `while`', isCorrect: false},
            {answer: 'Только одна: `for`', isCorrect: false},
            {answer: 'Три: `for`, `while` и `do...while`', isCorrect: true},
        ]
    }, {
        id: 11,
        question: 'Какой оператор из этих выполняет не только математические операции?',
        type: 'theory',
        answerOptions: [
            {answer: '`*`', isCorrect: false},
            {answer: '/', isCorrect: false},
            {answer: '+', isCorrect: true},
            {answer: '-', isCorrect: false},
            {answer: '>>>', isCorrect: false},
        ]
    }, {
        id: 12,
        question: 'Сработает ли вызов функции до объявления в этом коде:',
        type: 'practice',
        code: '<code>sayHi();<br/> function sayHi() { <br/> &ensp; alert("Hello");<br/> } </code>',
        answerOptions: [
            {answer: 'Да, сработает', isCorrect: true},
            {answer: 'Нет, вызов должен стоять после объявления', isCorrect: false},
            {answer: 'Как повезет', isCorrect: false},
        ]
    }, {
        id: 13,
        question: 'Сколько параметров можно передать функции?',
        type: 'theory',
        answerOptions: [
            {answer: 'Ровно столько, сколько указано в определении функции', isCorrect: false},
            {answer: 'Сколько указано в определении функции или меньше', isCorrect: false},
            {answer: 'Сколько указано в определении функции или больше', isCorrect: false},
            {answer: 'Любое количество', isCorrect: true},
        ]
    }, {
        id: 14,
        question: 'Что делает код?',
        type: 'practice',
        code: '<code> break me; </code>',
        answerOptions: [
            {answer: 'Ломает интерпретатор JavaScript', isCorrect: false},
            {answer: 'Выходит из текущего блока цикла или switch на метку "me"', isCorrect: true},
            {answer: 'Выдает ошибку', isCorrect: false},
            {answer: 'Ничего', isCorrect: false},
        ],
    }, {
        id: 15,
        question: 'Есть ли разница между выражениями?',
        type: 'theory',
        code: '<code> !!( a && b ) <br/> (a && b) </code>',
        answerOptions: [
            {answer: 'Да', isCorrect: true},
            {answer: 'Нет', isCorrect: false},
            {answer: 'В первом выражении ошибка, что ещё за "!!"??', isCorrect: false},
            {answer: 'Не знаю', isCorrect: false},
        ],
    }, {
        id: 16,
        question: 'Чему равна длина `arr.length` массива `arr`?',
        type: 'theory',
        code: '<code> let arr = []; <br/> arr[1] = 1; <br/>  arr[3] = 33; </code>',
        answerOptions: [
            {answer: '0', isCorrect: false},
            {answer: '1', isCorrect: false},
            {answer: '2', isCorrect: false},
            {answer: '3', isCorrect: false},
            {answer: '4', isCorrect: true},
            {answer: 'Больше', isCorrect: false},
        ],
    }, {
        id: 17,
        question: 'Чему равно `i` в конце кода?',
        type: 'practice',
        code: '<code> for (var i = 0; i < 10; i++) { <br/> &ensp;  console.log(i); <br/> } <br/> // i = ? </code>',
        answerOptions: [
            {answer: 'undefined', isCorrect: false},
            {answer: '9', isCorrect: false},
            {answer: '10', isCorrect: true},
            {answer: '11', isCorrect: false},
            {answer: 'Нет такой переменной после цикла', isCorrect: false},
        ],
    }, {
        id: 18,
        question: 'Чему равно `i` в конце кода?',
        type: 'practice',
        code: '<code> for (let i = 0; i < 10; i++) { <br/> &ensp;  console.log(i); <br/> } <br/> // i = ? </code>',
        answerOptions: [
            {answer: 'undefined', isCorrect: false},
            {answer: '9', isCorrect: false},
            {answer: '10', isCorrect: true},
            {answer: '11', isCorrect: false},
            {answer: 'Нет такой переменной после цикла', isCorrect: true},
        ],
    }, {
        id: 19,
        question: 'Что выведет `sayHi` при вызове через `setTimeout`?',
        type: 'practice',
        code: `<code>  let name = "Вася";<br>
        function sayHi() {<br>
        &ensp;  alert(name);<br>
        }<br>
        setTimeout(function() {<br>
        &ensp;  let name = "Петя";<br>
        &ensp;  sayHi();<br>
        }, 1000); </code>`,
        answerOptions: [
            {answer: 'Вася', isCorrect: true},
            {answer: 'Петя', isCorrect: false},
            {answer: 'undefined', isCorrect: true},
            {answer: 'Будет ошибка', isCorrect: false},
        ],
    },
]
