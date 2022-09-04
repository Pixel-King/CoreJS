export type AnswerType = {
    answer: string, 
    isCorrect: boolean
}

export type QuestionType = {
    id: number;
    question: string;
    type: string;
    //type : string;
    code?: string;
    complexity: number;
    answerOptions: AnswerType[],
}

export const questions: QuestionType[] = [
    {
        id: 1,
        complexity: 3,
        question: 'Что будет в консоли?',
        //////type: 'practice',
        type: 'variable',
        code: '<code>function sayHi() {<br /> &ensp; console.log(name);<br /> &ensp; console.log(age);<br /> &ensp; var name = "Vasya";<br /> &ensp; let age = 21;<br /> }<br /> sayHi();</code>',
        answerOptions: [
            {answer: 'Vasya и undefined', isCorrect: false },
            {answer: 'Vasya и ReferenceError', isCorrect: false},
            {answer: 'ReferenceError и 21', isCorrect: false},
            {answer: 'undefined и ReferenceError', isCorrect: true},
        ]
    }, {
        id: 2,
        complexity: 3,
        question: 'Что будет в консоли?',
        //////type: 'practice',
        type: 'variable',
        code: '<code>for (var i = 0; i < 3; i++) {<br />&ensp; setTimeout(()=> console.log(i), 1);<br /> }<br />for (let i = 0; i < 3; i++) {<br />&ensp; setTimeout(()=> console.log(i), 1);<br /> }</code>',
        answerOptions: [
            {answer: '0 1 2 и 0 1 2', isCorrect: false},
            {answer: '0 1 2 и 3 3 3', isCorrect: false},
            {answer: '3 3 3 и 0 1 2', isCorrect: true},
            {answer: '3 3 3 и 3 3 3', isCorrect: false},
        ]
    }, {
        id: 3,
        complexity: 3,
        question: 'Что будет в консоли?',
        //////type: 'practice',
        type: 'function',
        code: '<code>const shape = {<br />&ensp; radius: 10, <br />&ensp; diameter() {<br />&ensp;  return this.radius * 2; <br /> } <br /> &ensp; perimeter: () => 2 * Math.PI * this.radius <br /> }; <br /> shape.diameter();<br />shape.perimeter();</code>',
        answerOptions: [
            {answer: '20 и 62.83185307179586', isCorrect: false},
            {answer: '20 и NaN', isCorrect: true},
            {answer: '20 и 63', isCorrect: false},
            {answer: 'NaN и 63', isCorrect: false},
        ]
    }, {
        id: 4,
        complexity: 2,
        question: 'Что будет в консоли?',
        //////type: 'practice',
        type: 'data types',
        code: '<code>+true; <br />!"Lydia"</code>',
        answerOptions: [
            {answer: '1 и false', isCorrect: true},
            {answer: 'false и NaN', isCorrect: false},
            {answer: 'false и false', isCorrect: false},
            {answer: 'NaN и NaN', isCorrect: false},
        ]
    }, {
        id: 5,
        complexity: 1,
        question: 'Что получится, если сложить true + false?',
        ////type: 'theory',
        type: 'data types',
        answerOptions: [
            {answer: '"truefalse"', isCorrect: false},
            {answer: '0', isCorrect: false},
            {answer: '1', isCorrect: true},
            {answer: 'NaN', isCorrect: false},
        ]
    }, 
    {
        id: 6,
        complexity: 2,
        question: `После выполнения этого кода --\r\n в каких объектах содержится свойство 'name'?`,
        //////type: 'practice',
        type: 'other',
        code: '<code>function User() { } <br/> let vasya = new User(); <br/>  vasya.__proto__.name = "Vasya";</code>',
        answerOptions: [
            {answer: 'vasya.__proto__ и User.__proto__', isCorrect: true},
            {answer: 'vasya.prototype', isCorrect: false},
            {answer: 'vasya.prototype и User.prototype', isCorrect: false},
            {answer: 'User.prototype', isCorrect: false},
        ]
    }, {
        id: 7,
        complexity: 1,
        question: 'Какой вариант подключения скрипта является корректным с точки зрения современного стандарта HTML?',
        ////type: 'theory',
        type: 'other',
        answerOptions: [
            {answer: '<script src="my.js"></script>', isCorrect: true},
            {answer: '<script src="my.js"/>', isCorrect: false},
            {answer: '<хачу-javascript отсюда="my.js">', isCorrect: false},
        ]
    }, {
        id: 8,
        complexity: 1,
        question: 'Что такое ECMAScript?',
        ////type: 'theory',
        type: 'other',
        answerOptions: [
            {answer: 'Новый язык программирования', isCorrect: false},
            {answer: 'Переработанная реализация JavaScript', isCorrect: false},
            {answer: 'Спецификация языка JavaScript', isCorrect: true},
        ]
    }, {
        id: 9,
        complexity: 2,
        question: 'Правда ли что `a == b`?',
        ////type: 'theory',
        type: 'data types',
        code: '<code> a = [1, 2, 3]; <br/>  b = [1, 2, 3]; </code>',
        answerOptions: [
            {answer: 'Правда', isCorrect: false},
            {answer: 'Неправда', isCorrect: true},
            {answer: 'Как повезет', isCorrect: false},
        ]
    }, {
        id: 10,
        complexity: 1,
        question: 'Какие конструкции для циклов есть в JavaScript?',
        ////type: 'theory',
        type: 'loops and operators',
        answerOptions: [
            {answer: 'Только две: `for` и `while`', isCorrect: false},
            {answer: 'Только одна: `for`', isCorrect: false},
            {answer: 'Три: `for`, `while` и `do...while`', isCorrect: true},
        ]
    }, {
        id: 11,
        complexity: 1,
        question: 'Какой оператор из этих выполняет не только математические операции?',
        ////type: 'theory',
        type: 'loops and operators',
        answerOptions: [
            {answer: '*', isCorrect: false},
            {answer: '/', isCorrect: false},
            {answer: '+', isCorrect: true},
            {answer: '-', isCorrect: false},
            {answer: '>>>', isCorrect: false},
        ]
    }, {
        id: 12,
        complexity: 2,
        question: 'Сработает ли вызов функции до объявления в этом коде:',
        //////type: 'practice',
        type: 'function',
        code: '<code>sayHi();<br/> function sayHi() { <br/> &ensp; alert("Hello");<br/> } </code>',
        answerOptions: [
            {answer: 'Да, сработает', isCorrect: true},
            {answer: 'Нет, вызов должен стоять после объявления', isCorrect: false},
            {answer: 'Как повезет', isCorrect: false},
        ]
    }, {
        id: 13,
        complexity: 2,
        question: 'Сколько параметров можно передать функции?',
        ////type: 'theory',
        type: 'function',
        answerOptions: [
            {answer: 'Ровно столько, сколько указано в определении функции', isCorrect: false},
            {answer: 'Сколько указано в определении функции или меньше', isCorrect: false},
            {answer: 'Сколько указано в определении функции или больше', isCorrect: false},
            {answer: 'Любое количество', isCorrect: true},
        ]
    }, {
        id: 14,
        complexity: 2,
        question: 'Что делает код?',
        ////type: 'practice',
        type: 'loops and operators',
        code: '<code> break me; </code>',
        answerOptions: [
            {answer: 'Ломает интерпретатор JavaScript', isCorrect: false},
            {answer: 'Выходит из текущего блока цикла или switch на метку "me"', isCorrect: true},
            {answer: 'Выдает ошибку', isCorrect: false},
            {answer: 'Ничего', isCorrect: false},
        ],
    }, {
        id: 15,
        complexity: 2,
        question: 'Есть ли разница между выражениями?',
        //type: 'theory',
        type: 'data types',
        code: '<code> !!( a && b ) <br/> (a && b) </code>',
        answerOptions: [
            {answer: 'Да', isCorrect: true},
            {answer: 'Нет', isCorrect: false},
            {answer: 'В первом выражении ошибка, что ещё за "!!"??', isCorrect: false},
            {answer: 'Не знаю', isCorrect: false},
        ],
    }, {
        id: 16,
        complexity: 2,
        question: 'Чему равна длина `arr.length` массива `arr`?',
        //type: 'theory',
        type: 'data types',
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
        complexity: 3,
        question: 'Чему равно `i` в конце кода?',
        ////type: 'practice',
        type: 'variable',
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
        complexity: 3,
        question: 'Чему равно `i` в конце кода?',
        ////type: 'practice',
        type: 'variable',
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
        complexity: 4,
        question: 'Что выведет `sayHi` при вызове через `setTimeout`?',
        ////type: 'practice',
        type: 'function',
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
        complexity: 2,
        question: 'Существует ли такое значение `X`, которое после присваивания `a = X` вызов `alert(a == X)` выдаст `false`?',
        //type: 'theory',
        type: 'data types',
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
        complexity: 2,
        question: 'Чему равна переменная `name`?',
        //type: 'theory',
        type: 'data types',
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
        complexity: 2,
        question: 'Каких операторов из этого списка нет в JavaScript?',
        //type: 'theory',
        type: 'loops and operators',
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
        complexity: 2,
        question: 'Чему равно `a + b + c`?',
        //type: 'theory',
        type: 'data types',
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
        complexity: 1,
        question: 'Что делает оператор `===`?',
        //type: 'theory',
        type: 'loops and operators',
        answerOptions: [
            {answer: 'Сравнивает по ссылке, а не по значению', isCorrect: false},
            {answer: 'Сравнивает без приведения типа', isCorrect: true},
            {answer: 'Нет такого оператора', isCorrect: false},
        ],
    }, {
        id: 25,
        complexity: 1,
        question: 'Что делает оператор `**`?',
        //type: 'theory',
        type: 'loops and operators',
        answerOptions: [
            {answer: 'Возводит в степень', isCorrect: true},
            {answer: 'Умножает число само на себя', isCorrect: false},
            {answer: 'Нет такого оператора', isCorrect: false},
        ],
    }, {
        id: 26,
        complexity: 2,
        question: 'Какое из этих слов не имеет специального использования в JavaScript, никак не упомянуто в стандарте?',
        //type: 'theory',
        type: 'other',
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
        complexity: 2,
        question: 'Какая арифметическая операция приводит к ошибке в JavaScript?',
        //type: 'theory',
        type: 'other',
        answerOptions: [
            {answer: 'Деление на ноль', isCorrect: false},
            {answer: 'Умножение числа на строку', isCorrect: false},
            {answer: 'Корень из отрицательного числа', isCorrect: false},
            {answer: 'Никакая из вышеперечисленных', isCorrect: true},
        ],
    }, {
        id: 28,
        complexity: 3,
        question: 'Чему равно `0 || "" || 2 || undefined || true || falsе`?',
        ////type: 'practice',
        type: 'data types',
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
        complexity: 3,
        question: 'Чему равно `2 && 1 && null && 0 && undefined`?',
        ////type: 'practice',
        type: 'data types',
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
        complexity: 3,
        question: 'Чему равно `0 || 1 && 2 || 3`?',
        ////type: 'practice',
        type: 'data types',
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
        complexity: 2,
        question: 'Что выведет консоль?',
        ////type: 'practice',
        type: 'data types',
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
        complexity: 2,
        question: 'Что выведет консоль?',
        ////type: 'practice',
        type: 'data types',
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
        complexity: 2,
        question: 'Что выведет консоль?',
        ////type: 'practice',
        type: 'variable',
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
        complexity: 2,
        question: 'Что выведет консоль?',
        ////type: 'practice',
        type: 'variable',
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
        complexity: 3,
        question: 'Что выведет этот код?',
        ////type: 'practice',
        type: 'variable',
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
        complexity: 3,
        question: 'Что выведет этот код?',
        ////type: 'practice',
        type: 'variable',
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
        complexity: 3,
        question: 'Что выведет этот код?',
        ////type: 'practice',
        type: 'other',
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
        id: 38,
        complexity: 3,
        question: 'Чему равно `arr.length`?',
        ////type: 'practice',
        type: 'data types',
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
        id: 39,
        complexity: 2,
        question: 'Какое будет выведено значение?',
        ////type: 'practice',
        type: 'loops and operators',
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
        id: 40,
        complexity: 3,
        question: 'Выберите правильный вариант объявления массива, то есть такой, в результате которого мы получаем массив из двух чисел `1` и `2`.',
        ////type: 'practice',
        type: 'data types',
        answerOptions: [
            {answer: 'new Array.prototype.constructor(1, 2)', isCorrect: false},
            {answer: 'new Array(1, 2)', isCorrect: false},
            {answer: 'Array(1, 2)', isCorrect: false},
            {answer: '[1, 2]', isCorrect: false},
            {answer: 'Все варианты правильные', isCorrect: true},
        ],
    }, {
        id: 41,
        complexity: 2,
        question: 'Чему равно это выражение?',
        ////type: 'practice',
        type: 'data types',
        code: '<code> [].push(1,2).unshift(3).join() </code>',
        answerOptions: [
            {answer: '3,1', isCorrect: false},
            {answer: '1, 2, 3', isCorrect: false},
            {answer: '3, 1, 2', isCorrect: false},
            {answer: 'В коде ошибка', isCorrect: true},
        ],
    }, {
        id: 42,
        complexity: 2,
        question: 'Какие варианты вызова `try..catch` являются синтаксически верными в JavaScript?',
        //type: 'theory',
        type: 'other',
        answerOptions: [
            {answer: 'try { ... } catch { ... }', isCorrect: false},
            {answer: 'try { ... } finally { ... }', isCorrect: false},
            {answer: 'try { ... } catch { ... } finally { ... }', isCorrect: false},
            {answer: 'Все правильные', isCorrect: true},
        ],
    }, {
        id: 43,
        complexity: 1,
        question: ' Язык JavaScript является подвидом языка Java -- верно?',
        //type: 'theory',
        type: 'other',
        answerOptions: [
            {answer: 'Да', isCorrect: false},
            {answer: 'Нет', isCorrect: true},
            {answer: 'Наоборот, Java -- подвид JavaScript', isCorrect: false},
        ],
    }, {
        id: 44,
        complexity: 4,
        question: 'Что выведет этот код?',
        ////type: 'practice',
        type: 'function',
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
        id: 45,
        complexity: 4,
        question: 'Что выведет этот код?',
        ////type: 'practice',
        type: 'function',
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
        id: 46,
        complexity: 2,
        question: 'Что выведет этот код?',
        ////type: 'practice',
        type: 'data types',
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
        id: 47,
        complexity: 3,
        question: 'Что выведет этот код?',
        ////type: 'practice',
        type: 'variable',
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
        id: 48,
        complexity: 4,
        question: 'Что выведет этот код?',
        ////type: 'practice',
        type: 'function',
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
        id: 49,
        complexity: 4,
        question: 'Чему будет равен `this`?',
        ////type: 'practice',
        type: 'function',
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
        id: 50,
        complexity: 2,
        question: 'Чему равна сумма `[] + 1 + 2`?',
        ////type: 'practice',
        type: 'data types',
        answerOptions: [
            {answer: '3', isCorrect: false},
            {answer: 'NaN', isCorrect: false},
            {answer: 'indefined', isCorrect: false},
            {answer: ' "12" ', isCorrect: true},
            {answer: '12', isCorrect: false},
        ],
    }, {
        id: 51,
        complexity: 4,
        question: 'Что выведет этот код?',
        code: `<code>
        if (function f(){}) { <br/>
        &ensp;    alert(typeof f); <br/>
          }
        </code>`,
        ////type: 'practice',
        type: 'function',
        answerOptions: [
            {answer: 'undefined', isCorrect: true},
            {answer: 'function', isCorrect: false},
            {answer: 'null', isCorrect: false},
            {answer: 'object', isCorrect: false},
            {answer: 'В коде ошибка', isCorrect: false},
        ],
    }, {
        id: 52,
        complexity: 2,
        question: 'Верно ли, что `null == undefined`?',
        //type: 'theory',
        type: 'data types',
        answerOptions: [
            {answer: 'Да', isCorrect: true},
            {answer: 'Нет', isCorrect: false},
        ],
    }, {
        id: 53,
        complexity: 4,
        question: 'Чему равен результат вызова в этом примере?',
        code: `<code>
        function f() { <br/>
        &ensp;    let a = 5; <br/>
        &ensp;    return new Function('b', 'return a + b'); <br/>
          } <br/><br/>
          alert(f()(1));
        </code>`,
        ////type: 'practice',
        type: 'function',
        answerOptions: [
            {answer: '1', isCorrect: false},
            {answer: '6', isCorrect: false},
            {answer: 'undefined', isCorrect: false},
            {answer: 'NaN', isCorrect: false},
            {answer: 'Будет ошибка', isCorrect: true},
        ],
    }, {
        id: 54,
        complexity: 2,
        question: 'Объявлена функция. Чем является `F.prototype`?',
        code: `<code>
        function F() {}
        </code>`,
        //type: 'theory',
        type: 'function',
        answerOptions: [
            {answer: 'Обычным объектом', isCorrect: true},
            {answer: 'Функцией', isCorrect: false},
            {answer: 'Равен `undefined', isCorrect: false},
        ],
    }, {
        id: 55,
        complexity: 4,
        question: 'Что выведет этот код?',
        code: `<code>
        function F() { return F; } <br/>
        alert(new F() instanceof F); <br/>
        alert(new F() instanceof Function); <br/>
        </code>`,
        ////type: 'practice',
        type: 'function',
        answerOptions: [
            {answer: 'false, false', isCorrect: false},
            {answer: 'false, true', isCorrect: true},
            {answer: 'true, true', isCorrect: false},
            {answer: 'true, false', isCorrect: false},
        ],
    }, {
        id: 56,
        complexity: 2,
        question: 'Чему равен `typeof null` в режиме строгом режиме?',
        //type: 'theory',
        type: 'data types',
        answerOptions: [
            {answer: 'null', isCorrect: false},
            {answer: 'undefined', isCorrect: false},
            {answer: 'object', isCorrect: true},
            {answer: 'string', isCorrect: false},
        ],
    }, {
        id: 57,
        complexity: 2,
        question: 'Что выведет этот код?',
        ////type: 'practice',
        type: 'data types',
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
        id: 58,
        complexity: 5,
        question: 'Что выведет этот код?',
        ////type: 'practice',
        type: 'data types',
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
        id: 59,
        complexity: 3,
        question: 'Что выведет этот код?',
        ////type: 'practice',
        type: 'data types',
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
        id: 60,
        complexity: 4,
        question: 'Что выведет этот код?',
        ////type: 'practice',
        type: 'data types',
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
        id: 61,
        complexity: 4,
        question: 'Что выведет этот код? Посмотрите на него очень внимательно, в этом вопросе есть подвох.',
        ////type: 'practice',
        type: 'function',
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
        id: 62,
        complexity: 2,
        question: 'Верно ли сравнение: "ёжик" > "яблоко"?',
        ////type: 'practice',
        type: 'loops and operators',
        answerOptions: [
            {answer: 'Да', isCorrect: true},
            {answer: 'Нет', isCorrect: false},
            {answer: 'Зависит от локальных настроек браузера', isCorrect: false},

        ],
    }, {
        id: 63,
        complexity: 4,
        question: 'Какой результат будет у выражения ниже?',
        ////type: 'practice',
        type: 'data types',
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
        id: 64,
        complexity: 3,
        question: 'Какой результат будет у выражения ниже?',
        ////type: 'practice',
        type: 'data types',
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
        id: 65,
        complexity: 3,
        question: `Яблоко стоит 1.15, апельсин стоит 2.30.
        Сколько стоят они вместе -- чему равна сумма '1.15 + 2.30' с точки зрения JavaScript?`,
        ////type: 'practice',
        type: 'data types',
        answerOptions: [
            {answer: '345', isCorrect: false},
            {answer: '3.45', isCorrect: false},
            {answer: '3,45', isCorrect: false},
            {answer: 'Ни один из вариантов выше', isCorrect: true},
        ],
    }, {
        id: 66,
        complexity: 2,
        question: `Может ли скрипт во время работы страницы подключить к ней другие внешние JS-файлы?`,
        //type: 'theory',
        type: 'browser',
        answerOptions: [
            {answer: 'Да, но только один раз.', isCorrect: false},
            {answer: 'Да, но только до полной загрузки страницы.', isCorrect: false},
            {answer: 'Да, сколько угодно файлов когда угодно.', isCorrect: true},
        ],
    }, {
        id: 67,
        complexity: 2,
        question: `Есть кнопка '<button id="elem"></button>', как показать в ней строку "<hello>"?`,
        ////type: 'practice',
        type: 'browser',
        answerOptions: [
            {answer: 'elem.innerHTML = "<hello>"', isCorrect: false},
            {answer: 'elem.innerText = "<hello>"', isCorrect: false},
            {answer: 'elem.textContent = "<hello>"', isCorrect: true},
        ],
    }, {
        id: 68,
        complexity: 2,
        question: `Вызов setTimeout(func, 0) вызовет func...`,
        //type: 'theory',
        type: 'browser',
        answerOptions: [
            {answer: 'Сразу после `setTimeout`, до следующей строки кода.', isCorrect: false},
            {answer: 'Сразу после текущего скрипта, когда браузер сможет выполнить JavaScript.', isCorrect: false},
            {answer: 'Ровно через 4 миллисекунды.', isCorrect: false},
            {answer: 'Через 4 миллисекунды или больше, в зависимости от пожеланий браузера.', isCorrect: true},
        ],
    }, {
        id: 69,
        complexity: 2,
        question: `Вызов setInterval(func, 100) вызовет func...`,
        //type: 'theory',
        type: 'browser',
        answerOptions: [
            {answer: 'Ровно каждые 100 мс.', isCorrect: false},
            {answer: 'Примерно каждые 100 мс.', isCorrect: false},
            {answer: 'Обычно каждые 100 мс, но возможно, что вызовы будут происходить гораздо реже.', isCorrect: true},
        ],
    }, {
        id: 70,
        complexity: 3,
        question: `Браузер вызывает setInterval и setTimeout гораздо реже, чем обычно, если...`,
        //type: 'theory',
        type: 'browser',
        answerOptions: [
            {answer: 'Вкладка, в которой работает JavaScript, не видна и находится в фоновом режиме.', isCorrect: false},
            {answer: 'Посетитель зашёл с ноутбука, с питанием от батареи.', isCorrect: false},
            {answer: 'В обоих этих случаях.', isCorrect: true},
        ],
    }, {
        id: 71,
        complexity: 1,
        question: `Какое событие из этого списка не существует?`,
        //type: 'theory',
        type: 'browser',
        answerOptions: [
            {answer: 'onmousescroll', isCorrect: true},
            {answer: 'onclick', isCorrect: false},
            {answer: 'onmouseover', isCorrect: false},
            {answer: 'onmousemove', isCorrect: false},
            {answer: 'onwheel', isCorrect: false},
            {answer: 'Все существуют', isCorrect: false},
        ],
    }, {
        id: 72,
        complexity: 1,
        question: `Какое событие не может быть вызвано кликом мыши?`,
        //type: 'theory',
        type: 'browser',
        answerOptions: [
            {answer: 'onfocus', isCorrect: false},
            {answer: 'onclick', isCorrect: false},
            {answer: 'onkeydown', isCorrect: true},
            {answer: 'onmousedown', isCorrect: false},
        ],
    }, {
        id: 73,
        complexity: 2,
        question: `Можно ли инициировать DOM-событие из JavaScript?
        Например, сэмулировать клик мышкой на элементе, чтобы JavaScript-код кликнул за пользователя, и сработали соответствующие обработчики.`,
        //type: 'theory',
        type: 'browser',
        answerOptions: [
            {answer: 'Да, можно', isCorrect: true},
            {answer: 'Нет, нельзя', isCorrect: false},
        ],
    }, {
        id: 74,
        complexity: 2,
        question: `Чему равно значение свойства checked в коде ниже?`,
        code: `<code>
        var input = document.createElement('input'); <br/>
        input.setAttribute('checked', 'checked'); <br/>
        // input.checked = ?
        </code>`,
        ////type: 'practice',
        type: 'browser',
        answerOptions: [
            {answer: ' "checked" ', isCorrect: false},
            {answer: ' "true" ', isCorrect: false},
            {answer: ' true ', isCorrect: true},
        ],
    }, {
        id: 75,
        complexity: 2,
        question: `Как получить HTML-содержимое DOM-элемента elem?`,
        //type: 'theory',
        type: 'browser',
        answerOptions: [
            {answer: ' elem.html ', isCorrect: false},
            {answer: ' elem.content ', isCorrect: false},
            {answer: ' elem.innerHTML ', isCorrect: true},
        ],
    }, {
        id: 76,
        complexity: 2,
        question: `Можно ли из JavaScript получить содержимое комментария?`,
        //type: 'theory',
        type: 'browser',
        answerOptions: [
            {answer: 'Да, комментарий -- DOM-узел, который можно получить.', isCorrect: true},
            {answer: 'Нет, комментарии есть в HTML, но отсутствуют в DOM.', isCorrect: false},
            {answer: 'Можно получить, но только до окончания загрузки страницы.', isCorrect: false},
        ],
    }, {
        id: 77,
        complexity: 2,
        question: `Что будет, если вызвать document.write(str) после загрузки страницы?`,
        //type: 'theory',
        type: 'browser',
        answerOptions: [
            {answer: 'Строка `str` допишется в конец документа.', isCorrect: false},
            {answer: 'Содержимое документа будет полностью заменено на строку `str`.', isCorrect: true},
            {answer: 'Будет ошибка.', isCorrect: false},
        ],
    }, {
        id: 78,
        complexity: 3,
        question: `При каком условии elem.scrollHeight == elem.clientHeight?`,
        //type: 'theory',
        type: 'browser',
        answerOptions: [
            {answer: 'Содержимое элемента полностью прокручено вниз.', isCorrect: false},
            {answer: 'Страница прокручена так, что элемент полностью видим и находится в границах окна.', isCorrect: false},
            {answer: 'Высота элемента равна высоте полосы прокрутки.', isCorrect: false},
            {answer: 'Содержимое элемента полностью видимо, в нём нет прокрутки.', isCorrect: true},
            {answer: 'У элемента нет `padding`.', isCorrect: false},
        ],
    },

]
