import * as React from 'react';
import reduceImg from './Arrays-img/reduce.svg';

const ArrayMethods: React.FC =() => {
    return (
    <>

    <h1>Методы массивов</h1>
    <p>Массивы предоставляют множество методов. Чтобы было проще, в этой главе они разбиты на группы.</p>
    <h2>Добавление/удаление элементов</h2>
    <p>Мы уже знаем методы, которые добавляют и удаляют элементы из начала или конца:</p>
    <ul>
        <li><code>arr.push(...items)</code> - добавляет элементы в конец,</li>
        <li><code>arr.pop()</code> - извлекает элемент из конца,</li>
        <li><code>arr.shift()</code> - извлекает элемент из начала,</li>
        <li><code>arr.unshift(...items)</code> - добавляет элементы в начало.</li>
    </ul>
    <p>Есть и другие.</p>
    <h3>splice</h3>
    <p>Как удалить элемент из массива?</p>
    <p>Так как массивы - это объекты, то можно попробовать <code>delete</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let arr = ['I', 'go', 'home'];

delete arr[1]; // удалить 'go'

alert( arr[1] ); // undefined

// теперь arr = ['I',  , 'home'];
alert( arr.length ); // 3`}
        </code>
    </pre>
    <p>Вроде бы, элемент и был удалён, но при проверке оказывается, что массив всё ещё имеет 3 элемента <code>arr.length == 3</code>.</p>
    <p>Это нормально, потому что всё, что делает <code>delete obj.key</code> - это удаляет значение с данным ключом <code>key</code>. Это нормально для объектов, но для массивов мы обычно хотим, чтобы оставшиеся элементы сдвинулись и заняли освободившееся место. Мы ждём, что массив станет короче.</p>
    <p>Поэтому для этого нужно использовать специальные методы.</p>
    <p>Метод <a href="mdn:js/Array/splice">arr.splice(str)</a> – это универсальный 'швейцарский нож' для работы с массивами. Умеет всё: добавлять, удалять и заменять элементы.</p>
    <p>Его синтаксис:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            arr.splice(index[, deleteCount, elem1, ..., elemN])
        </code>
    </pre>
    <p>Он начинает с позиции <code>index</code>, удаляет <code>deleteCount</code> элементов и вставляет <code>elem1, ..., elemN</code> на их место. Возвращает массив из удалённых элементов.</p>
    <p>Этот метод проще всего понять, рассмотрев примеры.</p>
    <p>Начнём с удаления:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let arr = ['Я', 'изучаю', 'JavaScript'];

*!*
arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
*/!*

alert( arr ); // осталось ['Я', 'JavaScript']`}
        </code>
    </pre>
    <p>Легко, правда? Начиная с позиции <code>1</code>, он убрал <code>1</code> элемент.</p>
    <p>В следующем примере мы удалим 3 элемента и заменим их двумя другими.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let arr = [*!*'Я', 'изучаю', 'JavaScript',*/!* 'прямо', 'сейчас'];

// удалить 3 первых элемента и заменить их другими
arr.splice(0, 3, 'Давай', 'танцевать');

alert( arr ) // теперь [*!*'Давай', 'танцевать'*/!*, 'прямо', 'сейчас']`}
        </code>
    </pre>
    <p>Здесь видно, что <code>splice</code> возвращает массив из удалённых элементов:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let arr = [*!*'Я', 'изучаю',*/!* 'JavaScript', 'прямо', 'сейчас'];

// удалить 2 первых элемента
let removed = arr.splice(0, 2);

alert( removed ); // 'Я', 'изучаю' <- массив из удалённых элементов`}
        </code>
    </pre>
    <p>Метод <code>splice</code> также может вставлять элементы без удаления, для этого достаточно установить <code>deleteCount</code> в <code>0</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let arr = ['Я', 'изучаю', 'JavaScript'];

// с позиции 2
// удалить 0 элементов
// вставить 'сложный', 'язык'
arr.splice(2, 0, 'сложный', 'язык');

alert( arr ); // 'Я', 'изучаю', 'сложный', 'язык', 'JavaScript'`}
        </code>
    </pre>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>В этом и в других методах массива допускается использование отрицательного индекса. Он позволяет начать отсчёт элементов с конца, как тут:</p>
        <pre>
            <code>
                {`let arr = [1, 2, 5];

// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
arr.splice(-1, 0, 3, 4);

alert( arr ); // 1,2,3,4,5`}
            </code>
        </pre>
    </div>
    
    <h3>slice</h3>
    <p>Метод <a href="mdn:js/Array/slice">arr.slice</a> намного проще, чем похожий на него <code>arr.splice</code>.</p>
    <p>Его синтаксис:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            arr.slice([start], [end])
        </code>
    </pre>
    <p>Он возвращает новый массив, в который копирует элементы, начиная с индекса <code>start</code> и до <code>end</code> (не включая <code>end</code>). Оба индекса <code>start</code> и <code>end</code> могут быть отрицательными. В таком случае отсчёт будет осуществляться с конца массива.</p>
    <p>Это похоже на строковый метод <code>str.slice</code>, но вместо подстрок возвращает подмассивы.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let arr = ['t', 'e', 's', 't'];

alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)

alert( arr.slice(-2) ); // s,t (копирует с -2 до конца)`}
        </code>
    </pre>
    <p>Можно вызвать <code>slice</code> и вообще без аргументов: <code>arr.slice()</code> создаёт копию массива <code>arr</code>. Это часто используют, чтобы создать копию массива для дальнейших преобразований, которые не должны менять исходный массив.</p>
    <h3>concat</h3>
    <p>Метод <a href="mdn:js/Array/concat">arr.concat</a> создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.</p>
    <p>Его синтаксис:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            arr.concat(arg1, arg2...)
        </code>
    </pre>
    <p>Он принимает любое количество аргументов, которые могут быть как массивами, так и простыми значениями.</p>
    <p>В результате мы получаем новый массив, включающий в себя элементы из <code>arr</code>, а также <code>arg1</code>, <code>arg2</code> и так далее...</p>
    <p>Если аргумент <code>argN</code> - массив, то все его элементы копируются. Иначе скопируется сам аргумент.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let arr = [1, 2];

// создать массив из: arr и [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// создать массив из: arr и [3,4] и [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// создать массив из: arr и [3,4], потом добавить значения 5 и 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6`}
        </code>
    </pre>
    <p>Обычно он копирует только элементы из массивов. Другие объекты, даже если они выглядят как массивы, добавляются как есть:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let arr = [1, 2];

let arrayLike = {
    0: 'что-то',
    length: 1
};

alert( arr.concat(arrayLike) ); // 1,2,[object Object]`}
        </code>
    </pre>
    <p>...Но если объект имеет специальное свойство <code>Symbol.isConcatSpreadable</code>, то он обрабатывается <code>concat</code> как массив: вместо него добавляются его элементы.</p>
    <p>Для корректной обработки в объекте должны быть числовые свойства и <code>length</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let arr = [1, 2];

let arrayLike = {
    0: 'что-то',
    1: 'ещё',
    *!*
    [Symbol.isConcatSpreadable]: true,
    */!*
    length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,что-то,ещё`}
        </code>
    </pre>
    <h2>Перебор: forEach</h2>
    <p>Метод <a href="mdn:js/Array/forEach">arr.forEach</a> позволяет запускать функцию для каждого элемента массива.</p>
    <p>Его синтаксис:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`arr.forEach(function(item, index, array) {
    // ... делать что-то с item
});`}
        </code>
    </pre>
    <p>Например, этот код выведет на экран каждый элемент массива:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`// Вызов alert для каждого элемента
['Bilbo', 'Gandalf', 'Nazgul'].forEach(alert);`}
        </code>
    </pre>
    <p>А этот вдобавок расскажет и о своей позиции в массиве:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`['Bilbo', 'Gandalf', 'Nazgul'].forEach((item, index, array) =&gt; {`}
            {'    alert(`${item} имеет позицию ${index} в ${array}`);'}
            {`});`}
        </code>
    </pre>
    <p>Результат функции (если она вообще что-то возвращает) отбрасывается и игнорируется.</p>
    <h2>Поиск в массиве</h2>
    <p>Далее рассмотрим методы, которые помогут найти что-нибудь в массиве.</p>
    <h3>indexOf/lastIndexOf и includes</h3>
    <p>Методы <a href="mdn:js/Array/indexOf">arr.indexOf</a>, <a href="mdn:js/Array/lastIndexOf">arr.lastIndexOf</a> и <a href="mdn:js/Array/includes">arr.includes</a> имеют одинаковый синтаксис и делают по сути то же самое, что и их строковые аналоги, но работают с элементами вместо символов:</p>
    <ul>
        <li><code>arr.indexOf(item, from)</code> ищет <code>item</code>, начиная с индекса <code>from</code>, и возвращает индекс, на котором был найден искомый элемент, в противном случае <code>-1</code>.</li>
        <li><code>arr.lastIndexOf(item, from)</code> - то же самое, но ищет справа налево.</li>
        <li><code>arr.includes(item, from)</code> - ищет <code>item</code>, начиная с индекса <code>from</code>, и возвращает <code>true</code>, если поиск успешен.</li>
    </ul>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true`}
        </code>
    </pre>
    <p>Обратите внимание, что методы используют строгое сравнение <code>===</code>. Таким образом, если мы ищем <code>false</code>, он находит именно <code>false</code>, а не ноль.</p>
    <p>Если мы хотим проверить наличие элемента, и нет необходимости знать его точный индекс, тогда предпочтительным является <code>arr.includes</code>.</p>
    <p>Кроме того, очень незначительным отличием <code>includes</code> является то, что он правильно обрабатывает <code>NaN</code> в отличие от <code>indexOf/lastIndexOf</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (должен быть 0, но === проверка на равенство не работает для NaN)
alert( arr.includes(NaN) );// true (верно)`}
        </code>
    </pre>
    <h3>find и findIndex</h3>
    <p>Представьте, что у нас есть массив объектов. Как нам найти объект с определённым условием?</p>
    <p>Здесь пригодится метод <a href="mdn:js/Array/find">arr.find</a>.</p>
    <p>Его синтаксис таков:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let result = arr.find(function(item, index, array) {
    // если true - возвращается текущий элемент и перебор прерывается
    // если все итерации оказались ложными, возвращается undefined
});`}
        </code>
    </pre>
    <p>Функция вызывается по очереди для каждого элемента массива:</p>
    <ul>
        <li><code>item</code> - очередной элемент.</li>
        <li><code>index</code> - его индекс.</li>
        <li><code>array</code> - сам массив.</li>
    </ul>
    <p>Если функция возвращает <code>true</code>, поиск прерывается и возвращается <code>item</code>. Если ничего не найдено, возвращается <code>undefined</code>.</p>
    <p>Например, у нас есть массив пользователей, каждый из которых имеет поля <code>id</code> и <code>name</code>. Попробуем найти того, кто с <code>id == 1</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let users = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 3, name: 'Маша'}
];

let user = users.find(item =&gt; item.id == 1);

alert(user.name); // Вася`}
        </code>
    </pre>
    <p>В реальной жизни массивы объектов - обычное дело, поэтому метод <code>find</code> крайне полезен.</p>
    <p>Обратите внимание, что в данном примере мы передаём <code>find</code> функцию <code>item =&gt; item.id == 1</code>, с одним аргументом. Это типично, дополнительные аргументы этой функции используются редко.</p>
    <p>Метод <a href="mdn:js/Array/findIndex">arr.findIndex</a> - по сути, то же самое, но возвращает индекс, на котором был найден элемент, а не сам элемент, и <code>-1</code>, если ничего не найдено.</p>
    <h3>filter</h3>
    <p>Метод <code>find</code> ищет один (первый попавшийся) элемент, на котором функция-колбэк вернёт <code>true</code>.</p>
    <p>На тот случай, если найденных элементов может быть много, предусмотрен метод <a href="mdn:js/Array/filter">arr.filter(fn)</a>.</p>
    <p>Синтаксис этого метода схож с <code>find</code>, но <code>filter</code> возвращает массив из всех подходящих элементов:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let results = arr.filter(function(item, index, array) {
    // если true - элемент добавляется к результату, и перебор продолжается
    // возвращается пустой массив в случае, если ничего не найдено
});`}
        </code>
    </pre>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let users = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 3, name: 'Маша'}
];

// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(item =&gt; item.id &lt; 3);

alert(someUsers.length); // 2`}
        </code>
    </pre>
    <h2>Преобразование массива</h2>
    <p>Перейдём к методам преобразования и упорядочения массива.</p>
    <h3>map</h3>
    <p>Метод <a href="mdn:js/Array/map">arr.map</a> является одним из наиболее полезных и часто используемых.</p>
    <p>Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.</p>
    <p>Синтаксис:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let result = arr.map(function(item, index, array) {
    // возвращается новое значение вместо элемента
});`}
        </code>
    </pre>
    <p>Например, здесь мы преобразуем каждый элемент в его длину:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let lengths = ['Bilbo', 'Gandalf', 'Nazgul'].map(item =&gt; item.length);
alert(lengths); // 5,7,6`}
        </code>
    </pre>
    <h3>sort(fn)</h3>
    <p>Вызов <a href="mdn:js/Array/sort">arr.sort()</a> сортирует массив <em>на месте</em>, меняя в нём порядок элементов.</p>
    <p>Он возвращает отсортированный массив, но обычно возвращаемое значение игнорируется, так как изменяется сам <code>arr</code>.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let arr = [ 1, 2, 15 ];

// метод сортирует содержимое arr
arr.sort();

alert( arr );  // *!*1, 15, 2*/!*`}
        </code>
    </pre>
    <p>Не заметили ничего странного в этом примере?</p>
    <p>Порядок стал <code>1, 15, 2</code>. Это неправильно! Но почему?</p>
    <p><strong>По умолчанию элементы сортируются как строки.</strong></p>
    <p>Буквально, элементы преобразуются в строки при сравнении. Для строк применяется лексикографический порядок, и действительно выходит, что <code>'2' &gt; '15'</code>.</p>
    <p>Чтобы использовать наш собственный порядок сортировки, нам нужно предоставить функцию в качестве аргумента <code>arr.sort()</code>.</p>
    <p>Функция должна для пары значений возвращать:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`function compare(a, b) {
    if (a &gt; b) return 1; // если первое значение больше второго
    if (a == b) return 0; // если равны
    if (a &lt; b) return -1; // если первое значение меньше второго
}`}
        </code>
    </pre>
    <p>Например, для сортировки чисел:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`function compareNumeric(a, b) {
    if (a &gt; b) return 1;
    if (a == b) return 0;
    if (a &lt; b) return -1;
}

let arr = [ 1, 2, 15 ];

*!*
arr.sort(compareNumeric);
*/!*

alert(arr);  // *!*1, 2, 15*/!*`}
        </code>
    </pre>
    <p>Теперь всё работает как надо.</p>
    <p>Давайте возьмём паузу и подумаем, что же происходит. Упомянутый ранее массив <code>arr</code> может быть массивом чего угодно, верно? Он может содержать числа, строки, объекты или что-то ещё. У нас есть набор <em>каких-то элементов</em>. Чтобы отсортировать его, нам нужна <em>функция, определяющая порядок</em>, которая знает, как сравнивать его элементы. По умолчанию элементы сортируются как строки.</p>
    <p>Метод <code>arr.sort(fn)</code> реализует общий алгоритм сортировки. Нам не нужно заботиться о том, как он работает внутри (в большинстве случаев это оптимизированная <a href="https://ru.wikipedia.org/wiki/%D0%91%D1%8B%D1%81%D1%82%D1%80%D0%B0%D1%8F_%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0">быстрая сортировка</a>). Она проходится по массиву, сравнивает его элементы с помощью предоставленной функции и переупорядочивает их. Всё, что остаётся нам, это предоставить <code>fn</code>, которая делает это сравнение.</p>
    <p>Кстати, если мы когда-нибудь захотим узнать, какие элементы сравниваются - ничто не мешает нам вывести их на экран:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`[1, -2, 15, 2, 0, 8].sort(function(a, b) {
    alert( a + ' <> ' + b );
});`}
        </code>
    </pre>
    <p>В процессе работы алгоритм может сравнивать элемент с другими по нескольку раз, но он старается сделать как можно меньше сравнений.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>На самом деле от функции сравнения требуется любое положительное число, чтобы сказать 'больше', и отрицательное число, чтобы сказать 'меньше'.</p>
        <p>Это позволяет писать более короткие функции:</p>
        <pre>
            <code>
            {`let arr = [ 1, 2, 15 ];

arr.sort(function(a, b) { return a - b; });

alert(arr);  // *!*1, 2, 15*/!*`}
            </code>
        </pre>
    </div>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Помните стрелочные функции? Можно использовать их здесь для того, чтобы сортировка выглядела более аккуратной:</p>
        <pre>
            <code>
                arr.sort( (a, b) =&gt; a - b );
            </code>
        </pre>
        <p>Будет работать точно так же, как и более длинная версия выше.</p>
    </div>

    <h3>reverse</h3>
    <p>Метод <a href="mdn:js/Array/reverse">arr.reverse</a> меняет порядок элементов в <code>arr</code> на обратный.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1`}
        </code>
    </pre>
    <p>Он также возвращает массив <code>arr</code> с изменённым порядком элементов.</p>
    <h3>split и join</h3>
    <p>Ситуация из реальной жизни. Мы пишем приложение для обмена сообщениями, и посетитель вводит имена тех, кому его отправить, через запятую: <code>Вася, Петя, Маша</code>. Но нам-то гораздо удобнее работать с массивом имён, чем с одной строкой. Как его получить?</p>
    <p>Метод <a href="mdn:js/String/split">str.split(delimeter)</a> именно это и делает. Он разбивает строку на массив по заданному разделителю <code>delim</code>.</p>
    <p>В примере ниже таким разделителем является строка из запятой и пробела.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let names = 'Вася, Петя, Маша';`} <br />
            {``} <br />
            {`let arr = names.split(', ');`} <br />
            {``} <br />
            {`for (let name of arr) {`} <br />
            {'    alert( Сообщение получат: ${name}. ); // Сообщение получат: Вася (и другие имена)'} <br />
            {`}`}
        </code>
    </pre>
    <p>У метода <code>split</code> есть необязательный второй числовой аргумент - ограничение на количество элементов в массиве. Если их больше, чем указано, то остаток массива будет отброшен. На практике это редко используется:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let arr = 'Вася, Петя, Маша, Саша'.split(', ', 2);

alert(arr); // Вася, Петя`}
        </code>
    </pre>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Вызов <code>split(s)</code> с пустым аргументом <code>s</code> разбил бы строку на массив букв:</p>
        <pre>
            <code>
            {`let str = 'тест';

alert( str.split('') ); // т,е,с,т`}
            </code>
        </pre>
    </div>
    
    <p>Вызов <a href="mdn:js/Array/join">arr.join(glue)</a> делает в точности противоположное <code>split</code>. Он создаёт строку из элементов <code>arr</code>, вставляя <code>glue</code> между ними.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let arr = ['Вася', 'Петя', 'Маша'];

let str = arr.join(';'); // объединить массив в строку через ;

alert( str ); // Вася;Петя;Маша`}
        </code>
    </pre>
    <h3>reduce/reduceRight</h3>
    <p>Если нам нужно перебрать массив - мы можем использовать <code>forEach</code>, <code>for</code> или <code>for..of</code>.</p>
    <p>Если нам нужно перебрать массив и вернуть данные для каждого элемента - мы используем <code>map</code>.</p>
    <p>Методы <a href="mdn:js/Array/reduce">arr.reduce</a> и <a href="mdn:js/Array/reduceRight">arr.reduceRight</a> похожи на методы выше, но они немного сложнее. Они используются для вычисления какого-нибудь единого значения на основе всего массива.</p>
    <p>Синтаксис:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let value = arr.reduce(function(previousValue, item, index, array) {
    // ...
}, [initial]);`}
        </code>
    </pre>
    <p>Функция применяется по очереди ко всем элементам массива и 'переносит' свой результат на следующий вызов.</p>
    <p>Аргументы:</p>
    <ul>
        <li><code>previousValue</code> - результат предыдущего вызова этой функции, равен <code>initial</code> при первом вызове (если передан <code>initial</code>),</li>
        <li><code>item</code> - очередной элемент массива,</li>
        <li><code>index</code> - его индекс,</li>
        <li><code>array</code> - сам массив.</li>
    </ul>
    <p>При вызове функции результат её вызова на предыдущем элементе массива передаётся как первый аргумент.</p>
    <p>Звучит сложновато, но всё становится проще, если думать о первом аргументе как 'аккумулирующем' результат предыдущих вызовов функции. По окончании он становится результатом <code>reduce</code>.</p>
    <p>Этот метод проще всего понять на примере.</p>
    <p>Тут мы получим сумму всех элементов массива всего одной строкой:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15`}
        </code>
    </pre>
    <p>Здесь мы использовали наиболее распространённый вариант <code>reduce</code>, который использует только 2 аргумента.</p>
    <p>Давайте детальнее разберём, как он работает.</p>
    <ol>
        <li>При первом запуске <code>sum</code> равен <code>initial</code> (последний аргумент <code>reduce</code>), то есть <code>0</code>, а <code>current</code> - первый элемент массива, равный <code>1</code>. Таким образом, результат функции равен <code>1</code>.</li>
        <li>При втором запуске <code>sum = 1</code>, и к нему мы добавляем второй элемент массива (<code>2</code>).</li>
        <li>При третьем запуске <code>sum = 3</code>, к которому мы добавляем следующий элемент, и так далее...</li>
    </ol>
    <p>Поток вычислений получается такой:</p>
    <img className="mx-auto d-block" src={reduceImg} alt="reduce"></img>
    <p>В виде таблицы, где каждая строка - вызов функции на очередном элементе массива:</p>
    <table className="table table-bordered text-center">
        <thead>
            <tr>
                <th></th>
                <th><code>sum</code></th>
                <th><code>current</code></th>
                <th><code>result</code></th>
            </tr>
        </thead>
    <tbody>
        <tr>
            <td>первый вызов</td>
            <td><code>0</code></td>
            <td><code>1</code></td>
            <td><code>1</code></td>
        </tr>
        <tr>
            <td>второй вызов</td>
            <td><code>1</code></td>
            <td><code>2</code></td>
            <td><code>3</code></td>
        </tr>
        <tr>
            <td>третий вызов</td>
            <td><code>3</code></td>
            <td><code>3</code></td>
            <td><code>6</code></td>
        </tr>
        <tr>
            <td>четвёртый вызов</td>
            <td><code>6</code></td>
            <td><code>4</code></td>
            <td><code>10</code></td>
        </tr>
        <tr>
            <td>пятый вызов</td>
            <td><code>10</code></td>
            <td><code>5</code></td>
            <td><code>15</code></td>
        </tr>
        </tbody>
    </table>
    <p>Здесь отчётливо видно, как результат предыдущего вызова передаётся в первый аргумент следующего.</p>
    <p>Мы также можем опустить начальное значение:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let arr = [1, 2, 3, 4, 5];

// убрано начальное значение (нет 0 в конце)
let result = arr.reduce((sum, current) =&gt; sum + current);

alert( result ); // 15`}
        </code>
    </pre>
    <p>Результат – точно такой же! Это потому, что при отсутствии <code>initial</code> в качестве первого значения берётся первый элемент массива, а перебор стартует со второго.</p>
    <p>Таблица вычислений будет такая же за вычетом первой строки.</p>
    <p>Но такое использование требует крайней осторожности. Если массив пуст, то вызов <code>reduce</code> без начального значения выдаст ошибку.</p>
    <p>Вот пример:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let arr = [];

// Error: Reduce of empty array with no initial value
// если бы существовало начальное значение, reduce вернул бы его для пустого массива.
arr.reduce((sum, current) => sum + current);`}
        </code>
    </pre>
    <p>Поэтому рекомендуется всегда указывать начальное значение.</p>
    <p>Метод <a href="mdn:js/Array/reduceRight">arr.reduceRight</a> работает аналогично, но проходит по массиву справа налево.</p>
    <h2>Array.isArray</h2>
    <p>Массивы не образуют отдельный тип языка. Они основаны на объектах.</p>
    <p>Поэтому <code>typeof</code> не может отличить простой объект от массива:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            alert(typeof {}); // object <br />
            alert(typeof []); // тоже object
        </code>
    </pre>
    <p>...Но массивы используются настолько часто, что для этого придумали специальный метод: <a href="mdn:js/Array/isArray">Array.isArray(value)</a>. Он возвращает <code>true</code>, если <code>value</code> массив, и <code>false</code>, если нет.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            alert(Array.isArray({})); // false <br />
            alert(Array.isArray([])); // true
        </code>
    </pre>
    <h2>Большинство методов поддерживают 'thisArg'</h2>
    <p>Почти все методы массива, которые вызывают функции - такие как <code>find</code>, <code>filter</code>, <code>map</code>, за исключением метода <code>sort</code>, принимают необязательный параметр <code>thisArg</code>.</p>
    <p>Этот параметр не объяснялся выше, так как очень редко используется, но для наиболее полного понимания темы мы обязаны его рассмотреть.</p>
    <p>Вот полный синтаксис этих методов:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            arr.find(func, thisArg); <br />
            arr.filter(func, thisArg); <br />
            arr.map(func, thisArg); <br />
            // ... <br />
            // thisArg - это необязательный последний аргумент
        </code>
    </pre>
    <p>Значение параметра <code>thisArg</code> становится <code>this</code> для <code>func</code>.</p>
    <p>Например, вот тут мы используем метод объекта <code>army</code> как фильтр, и <code>thisArg</code> передаёт ему контекст:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];

*!*
// найти пользователей, для которых army.canJoin возвращает true
let soldiers = users.filter(army.canJoin, army);
*/!*

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23`}
        </code>
    </pre>
    <p>Если бы мы в примере выше использовали просто <code>users.filter(army.canJoin)</code>, то вызов <code>army.canJoin</code> был бы в режиме отдельной функции, с <code>this=undefined</code>. Это тут же привело бы к ошибке.</p>
    <p>Вызов <code>users.filter(army.canJoin, army)</code> можно заменить на <code>users.filter(user =&gt; army.canJoin(user))</code>, который делает то же самое. Последняя запись используется даже чаще, так как функция-стрелка более наглядна.</p>
    <h2>Итого</h2>
    <p>Шпаргалка по методам массива:</p>
    <ul>
        <li><p>Для добавления/удаления элементов:  </p>
            <ul>
                <li><code>push (...items)</code> - добавляет элементы в конец,</li>
                <li><code>pop()</code> - извлекает элемент с конца,</li>
                <li><code>shift()</code> - извлекает элемент с начала,</li>
                <li><code>unshift(...items)</code> - добавляет элементы в начало.</li>
                <li><code>splice(pos, deleteCount, ...items)</code> - начиная с индекса <code>pos</code>, удаляет <code>deleteCount</code> элементов и вставляет <code>items</code>.</li>
                <li><code>slice(start, end)</code> - создаёт новый массив, копируя в него элементы с позиции <code>start</code> до <code>end</code> (не включая <code>end</code>).</li>
                <li><code>concat(...items)</code> - возвращает новый массив: копирует все члены текущего массива и добавляет к нему <code>items</code>. Если какой-то из <code>items</code> является массивом, тогда берутся его элементы.</li>
            </ul>
        </li>
        <li><p>Для поиска среди элементов:</p>
            <ul>
                <li><code>indexOf/lastIndexOf(item, pos)</code> - ищет <code>item</code>, начиная с позиции <code>pos</code>, и возвращает его индекс или <code>-1</code>, если ничего не найдено.</li>
                <li><code>includes(value)</code> - возвращает <code>true</code>, если в массиве имеется элемент <code>value</code>, в противном случае <code>false</code>.</li>
                <li><code>find/filter(func)</code> - фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается <code>true</code>.</li>
                <li><code>findIndex</code> похож на <code>find</code>, но возвращает индекс вместо значения.</li>
            </ul>
        </li>
        <li><p>Для перебора элементов:</p>
            <ul>
                <li><code>forEach(func)</code> - вызывает <code>func</code> для каждого элемента. Ничего не возвращает.</li>
            </ul>
        </li>
        <li><p>Для преобразования массива:</p>
            <ul>
                <li><code>map(func)</code> - создаёт новый массив из результатов вызова <code>func</code> для каждого элемента.</li>
                <li><code>sort(func)</code> - сортирует массив 'на месте', а потом возвращает его.</li>
                <li><code>reverse()</code> - 'на месте' меняет порядок следования элементов на противоположный и возвращает изменённый массив.</li>
                <li><code>split/join</code> - преобразует строку в массив и обратно.</li>
                <li><code>reduce(func, initial)</code> - вычисляет одно значение на основе всего массива, вызывая <code>func</code> для каждого элемента и передавая промежуточный результат между вызовами.</li>
            </ul>
        </li>
        <li><p>Дополнительно:</p>
            <ul>
                <li><code>Array.isArray(arr)</code> проверяет, является ли <code>arr</code> массивом.</li>
            </ul>
        </li>
    </ul>
    <p>Обратите внимание, что методы <code>sort</code>, <code>reverse</code> и <code>splice</code> изменяют исходный массив.</p>
    <p>Изученных нами методов достаточно в 99% случаев, но существуют и другие.</p>
    <ul>
        <li><p><a href="mdn:js/Array/some">arr.some(fn)</a>/<a href="mdn:js/Array/every">arr.every(fn)</a> проверяет массив.</p>
            <p>Функция <code>fn</code> вызывается для каждого элемента массива аналогично <code>map</code>. Если какие-либо/все результаты вызовов являются <code>true</code>, то метод возвращает <code>true</code>, иначе <code>false</code>.</p>
        </li>
        <li><p><a href="mdn:js/Array/fill">arr.fill(value, start, end)</a> - заполняет массив повторяющимися <code>value</code>, начиная с индекса <code>start</code> до <code>end</code>.</p>
        </li>
        <li><p><a href="mdn:js/Array/copyWithin">arr.copyWithin(target, start, end)</a> - копирует свои элементы, начиная со <code>start</code> и заканчивая <code>end</code>, в <em>собственную</em> позицию <code>target</code> (перезаписывает существующие).</p>
        </li>
    </ul>
    <p>Полный список есть в <a href="mdn:js/Array">справочнике MDN</a>.</p>
    <p>На первый взгляд может показаться, что существует очень много разных методов, которые довольно сложно запомнить. Но это гораздо проще, чем кажется.</p>
    <p>Внимательно изучите шпаргалку, представленную выше, а затем, чтобы попрактиковаться, решите задачи, предложенные в данной главе. Так вы получите необходимый опыт в правильном использовании методов массива.</p>
    <p>Всякий раз, когда вам будет необходимо что-то сделать с массивом, а вы не знаете, как это сделать - приходите сюда, смотрите на таблицу и ищите правильный метод. Примеры помогут вам всё сделать правильно, и вскоре вы быстро запомните методы без особых усилий.</p>

    </>
    );
}

export default ArrayMethods;