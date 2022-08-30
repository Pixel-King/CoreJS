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
        question: `После выполнения этого кода --\r\n в каких объектах содержится свойство 'name'?`,
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
            {answer: '*', isCorrect: false},
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
            {answer: 'undefined', isCorrect: false},
            {answer: 'Будет ошибка', isCorrect: false},
        ],
    }, {
        id: 20,
        question: 'Существует ли такое значение `X`, которое после присваивания `a = X` вызов `alert(a == X)` выдаст `false`?',
        type: 'theory',
        code: `<code>  let a = X;<br>
        alert(a == X); // false
        </code>`,
        answerOptions: [
            {answer: 'Да, `X` -- это `undefined`', isCorrect: false},
            {answer: 'Да, `X` -- это `null`', isCorrect: false},
            {answer: 'Да, другое', isCorrect: true},
            {answer: 'Нет, не бывает', isCorrect: false},
        ],
    }, {
        id: 21,
        question: 'Чему равна переменная `name`?',
        type: 'theory',
        code: `<code>  let name = "пупкин".replace("п", "д")
        </code>`,
        answerOptions: [
            {answer: 'дудкин', isCorrect: false},
            {answer: 'дупкин', isCorrect: true},
            {answer: 'пупкин', isCorrect: false},
            {answer: 'пудкин', isCorrect: false},
        ],
    }, {
        id: 22,
        question: 'Каких операторов из этого списка нет в JavaScript?',
        type: 'theory',
        answerOptions: [
            {answer: '*', isCorrect: false},
            {answer: '^', isCorrect: false},
            {answer: '%', isCorrect: false},
            {answer: '#', isCorrect: true},
            {answer: '&', isCorrect: false},
            {answer: '>>', isCorrect: false},
            {answer: '>>>', isCorrect: false},
            {answer: '!', isCorrect: false},
        ],
    }, {
        id: 23,
        question: 'Чему равно `a + b + c`?',
        type: 'theory',
        code: `<code>
        let a = 1;<br/>
        let b = { toString() {return '1'} };<br/>
        let c = 1;<br/>
      </code>`,
        answerOptions: [
            {answer: '11[object Object]', isCorrect: false},
            {answer: '2[object Object]', isCorrect: false},
            {answer: '111', isCorrect: true},
            {answer: '3', isCorrect: false},
        ],
    }, {
        id: 24,
        question: 'Что делает оператор `===`?',
        type: 'theory',
        answerOptions: [
            {answer: 'Сравнивает по ссылке, а не по значению', isCorrect: false},
            {answer: 'Сравнивает без приведения типа', isCorrect: true},
            {answer: 'Нет такого оператора', isCorrect: false},
        ],
    }, {
        id: 25,
        question: 'Что делает оператор `**`?',
        type: 'theory',
        answerOptions: [
            {answer: 'Возводит в степень', isCorrect: true},
            {answer: 'Умножает число само на себя', isCorrect: false},
            {answer: 'Нет такого оператора', isCorrect: false},
        ],
    }, {
        id: 26,
        question: 'Какое из этих слов не имеет специального использования в JavaScript, никак не упомянуто в стандарте?',
        type: 'theory',
        answerOptions: [
            {answer: 'this', isCorrect: false},
            {answer: 'instanceof', isCorrect: false},
            {answer: 'constructor', isCorrect: false},
            {answer: 'parent', isCorrect: true},
            {answer: 'new', isCorrect: false},
            {answer: 'Все имеют специальное использование', isCorrect: false},
        ],
    }, {
        id: 27,
        question: 'Какая арифметическая операция приводит к ошибке в JavaScript?',
        type: 'theory',
        answerOptions: [
            {answer: 'Деление на ноль', isCorrect: false},
            {answer: 'Умножение числа на строку', isCorrect: false},
            {answer: 'Корень из отрицательного числа', isCorrect: false},
            {answer: 'Никакая из вышеперечисленных', isCorrect: true},
        ],
    }, {
        id: 28,
        question: 'Чему равно `0 || "" || 2 || undefined || true || falsе`?',
        type: 'practice',
        answerOptions: [
            {answer: '0', isCorrect: false},
            {answer: ' "" ', isCorrect: false},
            {answer: '2', isCorrect: true},
            {answer: 'undefined', isCorrect: false},
            {answer: 'true', isCorrect: false},
            {answer: 'false', isCorrect: false},
        ],
    }, {
        id: 29,
        question: 'Чему равно `2 && 1 && null && 0 && undefined`?',
        type: 'practice',
        answerOptions: [
            {answer: '2', isCorrect: false},
            {answer: '1', isCorrect: false},
            {answer: 'null', isCorrect: true},
            {answer: '0', isCorrect: false},
            {answer: 'undefined', isCorrect: false},
            {answer: 'false', isCorrect: false},
        ],
    }, {
        id: 30,
        question: 'Чему равно `0 || 1 && 2 || 3`?',
        type: 'practice',
        answerOptions: [
            {answer: '0', isCorrect: false},
            {answer: '1', isCorrect: false}, 
            {answer: '2', isCorrect: true},
            {answer: '3', isCorrect: false},
            {answer: 'true', isCorrect: false},
            {answer: 'false', isCorrect: false},
        ],
    }, {
        id: 31,
        question: 'Что выведет консоль?',
        type: 'practice',
        code: `<code>
        let str = "Hello"; <br />
        str.something = 5; <br />
        console.log(str.something); // ?</code>`,
        answerOptions: [
            {answer: '5', isCorrect: false},
            {answer: 'undefined', isCorrect: false}, 
            {answer: 'Будет ошибка', isCorrect: true},
        ],
    }, {
        id: 32,
        question: 'Что выведет консоль?',
        type: 'practice',
        code: `<code>
        let arr = [1, 2, 3]; <br />
        arr.something = 5; <br/>
        console.log(arr.something); // ?</code>`,
        answerOptions: [
            {answer: '5', isCorrect: true},
            {answer: 'undefined', isCorrect: false}, 
            {answer: 'Будет ошибка', isCorrect: false},
        ],
    }, {
        id: 33,
        question: 'Что выведет консоль?',
        type: 'practice',
        code: `<code>
        console.log(str); // ? <br/>
        let str = "Hello";</code>`,
        answerOptions: [
            {answer: 'Hello', isCorrect: false},
            {answer: 'undefined', isCorrect: false}, 
            {answer: 'Будет ошибка', isCorrect: true},
        ],
    }, {
        id: 34,
        question: 'Что выведет консоль?',
        type: 'practice',
        code: `<code>
        console.log(str); // ? <br/>
        var str = "Hello";</code>`,
        answerOptions: [
            {answer: 'Hello', isCorrect: false},
            {answer: 'undefined', isCorrect: true}, 
            {answer: 'Будет ошибка', isCorrect: false},
        ],
    }, {
        id: 35,
        question: 'Что выведет этот код?',
        type: 'practice',
        code: `<code>
        for (var i = 0; i < 10; i++) { <br/>
        &ensp;    setTimeout(function() { <br/>
        &ensp;&ensp;      alert(i); <br/>
        &ensp;    }, 100); <br/>
          }
        </code>`,
        answerOptions: [
            {answer: 'Числа от 0 до 9', isCorrect: false},
            {answer: 'Числа от 0 до 10', isCorrect: false},
            {answer: '10 раз число 0', isCorrect: false},
            {answer: '10 раз число 10', isCorrect: true},
            {answer: 'Ошибка: переменная не определена', isCorrect: false},
        ],
    }, {
        id: 36,
        question: 'Что выведет этот код?',
        type: 'practice',
        code: `<code>
        for (let i = 0; i < 10; i++) { <br/>
        &ensp;    setTimeout(function() { <br/>
        &ensp;&ensp;      alert(i); <br/>
        &ensp;    }, 100); <br/>
          }
        </code>`,
        answerOptions: [
            {answer: 'Числа от 0 до 9', isCorrect: true},
            {answer: 'Числа от 0 до 10', isCorrect: false},
            {answer: '10 раз число 0', isCorrect: false},
            {answer: '10 раз число 10', isCorrect: false},
            {answer: 'Ошибка: переменная не определена', isCorrect: false},
        ],
    }, {
        id: 37,
        question: 'Что выведет этот код?',
        type: 'practice',
        code: `<code>
        function User() { } <br/>
        User.prototype = { admin: false }; <br/>
        let user = new User(); <br/>
        User.prototype = { admin: true }; <br/>
        alert(user.admin);
        </code>`,
        answerOptions: [
            {answer: 'false', isCorrect: true},
            {answer: 'undefined', isCorrect: false},
            {answer: 'true', isCorrect: false},
            {answer: 'Ошибка', isCorrect: false},
        ],
    }, {
        id: 37,
        question: 'Чему равно `arr.length`?',
        type: 'practice',
        code: `<code>
        function MyArray() { } <br/>
        MyArray.prototype = []; <br/>
        let arr = new MyArray(); <br/>
        arr.push(1, 2, 3); <br/>
        alert(arr.length);
        </code>`,
        answerOptions: [
            {answer: '0', isCorrect: false},
            {answer: 'undefined', isCorrect: false},
            {answer: '3', isCorrect: true},
            {answer: 'В этом коде допущена ошибка', isCorrect: false},
        ],
    }, {
        id: 38,
        question: 'Какое будет выведено значение?',
        type: 'practice',
        code: `<code>
        let x = 5; <br/>
        alert(x++);
        </code>`,
        answerOptions: [
            {answer: '5', isCorrect: true},
            {answer: '6', isCorrect: false},
            {answer: 'Другое', isCorrect: false},
        ],
    }, {
        id: 39,
        question: 'Выберите правильный вариант объявления массива, то есть такой, в результате которого мы получаем массив из двух чисел `1` и `2`.',
        type: 'practice',
        answerOptions: [
            {answer: 'new Array.prototype.constructor(1, 2)', isCorrect: false},
            {answer: 'new Array(1, 2)', isCorrect: false},
            {answer: 'Array(1, 2)', isCorrect: false},
            {answer: '[1, 2]', isCorrect: false},
            {answer: 'Все варианты правильные', isCorrect: true},
        ],
    }, {
        id: 40,
        question: 'Чему равно это выражение?',
        type: 'practice',
        code: '<code> [].push(1,2).unshift(3).join() </code>',
        answerOptions: [
            {answer: '3,1', isCorrect: false},
            {answer: '1, 2, 3', isCorrect: false},
            {answer: '3, 1, 2', isCorrect: false},
            {answer: 'В коде ошибка', isCorrect: true},
        ],
    }, {
        id: 41,
        question: 'Какие варианты вызова `try..catch` являются синтаксически верными в JavaScript?',
        type: 'theory',
        answerOptions: [
            {answer: 'try { ... } catch { ... }', isCorrect: false},
            {answer: 'try { ... } finally { ... }', isCorrect: false},
            {answer: 'try { ... } catch { ... } finally { ... }', isCorrect: false},
            {answer: 'Все правильные', isCorrect: true},
        ],
    }, {
        id: 42,
        question: ' Язык JavaScript является подвидом языка Java -- верно?',
        type: 'theory',
        answerOptions: [
            {answer: 'Да', isCorrect: false},
            {answer: 'Нет', isCorrect: true},
            {answer: 'Наоборот, Java -- подвид JavaScript', isCorrect: false},
        ],
    }, {
        id: 43,
        question: 'Что выведет этот код?',
        type: 'practice',
        code: `<code>
        f.call(f); <br/>
        
        function f() { <br/>
        &ensp; alert(this); <br/>
        }
        </code>`,
        answerOptions: [
            {answer: '[object Object]', isCorrect: false},
            {answer: 'Код функции `f`', isCorrect: true},
            {answer: 'Ошибка: слишком глубокая рекурсия', isCorrect: false},
            {answer: 'Ошибка: переменная `f` не определена', isCorrect: false},
        ],
    }, {
        id: 44,
        question: 'Что выведет этот код?',
        type: 'practice',
        code: `<code>
        let f = function g() { return 23; }; <br/>
        alert(typeof g());
        </code>`,
        answerOptions: [
            {answer: 'number', isCorrect: false},
            {answer: 'undefined', isCorrect: false},
            {answer: 'function', isCorrect: false},
            {answer: 'Ошибка', isCorrect: true},
        ],
    }, {
        id: 45,
        question: 'Что выведет этот код?',
        type: 'practice',
        code: `<code>
        "use strict"; <br/>

        a = null + undefined; <br/>
        alert(a);
        </code>`,
        answerOptions: [
            {answer: 'null', isCorrect: false},
            {answer: 'undefined', isCorrect: false},
            {answer: 'NaN', isCorrect: false},
            {answer: 'Ошибка', isCorrect: true},
        ],
    }, {
        id: 45,
        question: 'Что выведет этот код?',
        type: 'practice',
        code: `<code>
        let y = 1; <br/>
        let x = y = 2; <br/>
        condole.log(x); <br/>
        </code>`,
        answerOptions: [
            {answer: '1', isCorrect: false},
            {answer: '2', isCorrect: true},
            {answer: 'NaN', isCorrect: false},
            {answer: 'Ошибка', isCorrect: false},
        ],
    }, {
        id: 46,
        question: 'Что выведет этот код?',
        type: 'practice',
        code: `<code>
        f.call(null); <br/>
        function f() { <br/>
        &ensp;    alert(this); <br/>
        }
        </code>`,
        answerOptions: [
            {answer: 'null', isCorrect: true},
            {answer: 'undefined', isCorrect: false},
            {answer: 'В коде ошибка', isCorrect: false},
            {answer: 'Другое', isCorrect: false},
        ],
    }, {
        id: 47,
        question: 'Чему будет равен `this`?',
        type: 'practice',
        code: `<code>
        let user = { <br/>
        &ensp;    sayHi: function() { <br/>
        &ensp;&ensp;    alert(this); <br/>
        &ensp;    } <br/>
        }; <br/>
        (user.sayBye = user.sayHi)();
        </code>`,
        answerOptions: [
            {answer: 'null', isCorrect: false},
            {answer: 'undefined', isCorrect: true},
            {answer: 'В коде ошибка', isCorrect: false},
            {answer: 'Объекту `user`', isCorrect: false},
        ],
    }, {
        id: 48,
        question: 'Чему равна сумма `[] + 1 + 2`?',
        type: 'practice',
        answerOptions: [
            {answer: '3', isCorrect: false},
            {answer: 'NaN', isCorrect: false},
            {answer: 'indefined', isCorrect: false},
            {answer: ' "12" ', isCorrect: true},
            {answer: '12', isCorrect: false},
        ],
    }, {
        id: 49,
        question: 'Что выведет этот код?',
        code: `<code>
        if (function f(){}) { <br/>
        &ensp;    alert(typeof f); <br/>
          }
        </code>`,
        type: 'practice',
        answerOptions: [
            {answer: 'undefined', isCorrect: true},
            {answer: 'function', isCorrect: false},
            {answer: 'null', isCorrect: false},
            {answer: 'object', isCorrect: false},
            {answer: 'В коде ошибка', isCorrect: false},
        ],
    }, {
        id: 50,
        question: 'Верно ли, что `null == undefined`?',
        type: 'theory',
        answerOptions: [
            {answer: 'Да', isCorrect: true},
            {answer: 'Нет', isCorrect: false},
        ],
    }, {
        id: 51,
        question: 'Чему равен результат вызова в этом примере?',
        code: `<code>
        function f() { <br/>
        &ensp;    let a = 5; <br/>
        &ensp;    return new Function('b', 'return a + b'); <br/>
          } <br/><br/>
          alert(f()(1));
        </code>`,
        type: 'practice',
        answerOptions: [
            {answer: '1', isCorrect: false},
            {answer: '6', isCorrect: false},
            {answer: 'undefined', isCorrect: false},
            {answer: 'NaN', isCorrect: false},
            {answer: 'Будет ошибка', isCorrect: true},
        ],
    }, {
        id: 52,
        question: 'Объявлена функция. Чем является `F.prototype`?',
        code: `<code>
        function F() {}
        </code>`,
        type: 'theory',
        answerOptions: [
            {answer: 'Обычным объектом', isCorrect: true},
            {answer: 'Функцией', isCorrect: false},
            {answer: 'Равен `undefined', isCorrect: false},
        ],
    }, {
        id: 53,
        question: 'Что выведет этот код?',
        code: `<code>
        function F() { return F; } <br/>
        alert(new F() instanceof F); <br/>
        alert(new F() instanceof Function); <br/>
        </code>`,
        type: 'practice',
        answerOptions: [
            {answer: 'false, false', isCorrect: false},
            {answer: 'false, true', isCorrect: true},
            {answer: 'true, true', isCorrect: false},
            {answer: 'true, false', isCorrect: false},
        ],
    }, {
        id: 54,
        question: 'Чему равен `typeof null` в режиме строгом режиме?',
        type: 'theory',
        answerOptions: [
            {answer: 'null', isCorrect: false},
            {answer: 'undefined', isCorrect: false},
            {answer: 'object', isCorrect: true},
            {answer: 'string', isCorrect: false},
        ],
    }, {
        id: 55,
        question: 'Что выведет этот код?',
        type: 'practice',
        code: `<code>
        alert("1"[0]);
        </code>`,
        answerOptions: [
            {answer: '0', isCorrect: false},
            {answer: '1', isCorrect: true},
            {answer: '2', isCorrect: false},
            {answer: 'undefined', isCorrect: false},
            {answer: 'В коде ошибка', isCorrect: false},
        ],
    }, {
        id: 56,
        question: 'Что выведет этот код?',
        type: 'practice',
        code: `<code>
        alert(20e-1['toString'](2));
        </code>`,
        answerOptions: [
            {answer: '2', isCorrect: false},
            {answer: '10', isCorrect: true},
            {answer: '20', isCorrect: false},
            {answer: 'NaN', isCorrect: false},
            {answer: 'В коде ошибка', isCorrect: false},
        ],
    }, {
        id: 57,
        question: 'Что выведет этот код?',
        type: 'practice',
        code: `<code>
        alert(+"Infinity");
        </code>`,
        answerOptions: [
            {answer: 'Infinity', isCorrect: true},
            {answer: 'NaN', isCorrect: false},
            {answer: '0', isCorrect: false},
            {answer: 'Будет ошибка', isCorrect: false},
        ],
    }, {
        id: 58,
        question: 'Что выведет этот код?',
        type: 'practice',
        code: `<code>
        let a = (1,5 - 1) * 2; <br/>
        alert(a);
        </code>`,
        answerOptions: [
            {answer: '0.999999999', isCorrect: false},
            {answer: '1', isCorrect: false},
            {answer: '0.5', isCorrect: false},
            {answer: '8', isCorrect: true},
            {answer: '-0.5', isCorrect: false},
            {answer: '4', isCorrect: false},
        ],
    }, {
        id: 59,
        question: 'Что выведет этот код? Посмотрите на него очень внимательно, в этом вопросе есть подвох.',
        type: 'practice',
        code: `<code>
        let a = [1, 2] <br/>
        (function() { alert(a) })()
        </code>`,
        answerOptions: [
            {answer: '[object Array]', isCorrect: false},
            {answer: '[object Object]', isCorrect: false},
            {answer: '1,2', isCorrect: false},
            {answer: 'Будет ошибка', isCorrect: true},
        ],
    }, {
        id: 60,
        question: 'Верно ли сравнение: "ёжик" > "яблоко"?',
        type: 'practice',
        answerOptions: [
            {answer: 'Да', isCorrect: true},
            {answer: 'Нет', isCorrect: false},
            {answer: 'Зависит от локальных настроек браузера', isCorrect: false},

        ],
    }, {
        id: 61,
        question: 'Какой результат будет у выражения ниже?',
        type: 'practice',
        code: `<code>
        null + {0:1}[0] + [,[1],][1][0]
        </code>`,
        answerOptions: [
            {answer: '0', isCorrect: false},
            {answer: '1', isCorrect: false},
            {answer: '2', isCorrect: true},
            {answer: 'undefined', isCorrect: false},
            {answer: 'NaN', isCorrect: false},
        ],
    }, {
        id: 62,
        question: 'Какой результат будет у выражения ниже?',
        type: 'practice',
        code: `<code>
        let a = new Array(1,2), b = new Array(3);<br/>
        alert(a[0] + b[0]);
        </code>`,
        answerOptions: [
            {answer: '1', isCorrect: false},
            {answer: '4', isCorrect: false},
            {answer: 'undefined', isCorrect: false},
            {answer: 'NaN', isCorrect: true},
        ],
    }, {
        id: 63,
        question: `Яблоко стоит 1.15, апельсин стоит 2.30.
        Сколько стоят они вместе -- чему равна сумма '1.15 + 2.30' с точки зрения JavaScript?`,
        type: 'practice',
        answerOptions: [
            {answer: '345', isCorrect: false},
            {answer: '3.45', isCorrect: false},
            {answer: '3,45', isCorrect: false},
            {answer: 'Ни один из вариантов выше', isCorrect: true},
        ],
    },

]
