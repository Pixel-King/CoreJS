import * as React from 'react';
import arrayPopImg from './Arrays-img/array-pop.svg';
import arrayShiftImg from './Arrays-img/array-shift.svg';
import arraySpeedImg from './Arrays-img/array-speed.svg';
import queueImg from './Arrays-img/queue.svg';
import stackImg from './Arrays-img/stack.svg';

const Arrays: React.FC =() => {
    return (
    <>

    <h1>Массивы</h1>
    <p>Объекты позволяют хранить данные со строковыми ключами. Это замечательно.</p>
    <p>Но довольно часто мы понимаем, что нам необходима <em>упорядоченная коллекция</em> данных, в которой присутствуют 1-й, 2-й, 3-й элементы и т.д. Например, она понадобится нам для хранения списка чего-либо: пользователей, товаров, элементов HTML и т.д.</p>
    <p>В этом случае использовать объект неудобно, так как он не предоставляет методов управления порядком элементов. Мы не можем вставить новое свойство &quot;между&quot; уже существующими. Объекты просто не предназначены для этих целей.</p>
    <p>Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, <code className="fs-6">Array</code>.</p>
    <h2>Объявление</h2>
    <p>Существует два варианта синтаксиса для создания пустого массива:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let arr = new Array(); <br />
            let arr = [];
        </code>
    </pre>
    <p>Практически всегда используется второй вариант синтаксиса. В скобках мы можем указать начальные значения элементов:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let fruits = [&quot;Яблоко&quot;, &quot;Апельсин&quot;, &quot;Слива&quot;];
        </code>
    </pre>
    <p>Элементы массива нумеруются, начиная с нуля.</p>
    <p>Мы можем получить элемент, указав его номер в квадратных скобках:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let fruits = ['Яблоко', 'Апельсин', 'Слива'];
            
alert( fruits[0] ); // Яблоко
alert( fruits[1] ); // Апельсин
alert( fruits[2] ); // Слива`}
        </code>
    </pre>
    <p>Мы можем заменить элемент:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            fruits[2] = &#39;Груша&#39;; // теперь [&quot;Яблоко&quot;, &quot;Апельсин&quot;, &quot;Груша&quot;]
        </code>
    </pre>
    <p>…Или добавить новый к существующему массиву:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            fruits[3] = &#39;Лимон&#39;; // теперь [&quot;Яблоко&quot;, &quot;Апельсин&quot;, &quot;Груша&quot;, &quot;Лимон&quot;]
        </code>
    </pre>
    <p>Общее число элементов массива содержится в его свойстве <code className="fs-6">length</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let fruits = ['Яблоко', 'Апельсин', 'Слива'];

alert( fruits.length ); // 3`}
        </code>
    </pre>
    <p>Вывести массив целиком можно при помощи <code className="fs-6">alert</code>.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let fruits = ['Яблоко', 'Апельсин', 'Слива'];

alert( fruits ); // Яблоко, Апельсин, Слива`}
        </code>
    </pre>
    <p>В массиве могут храниться элементы любого типа.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`// разные типы значений
    let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ];

// получить элемент с индексом 1 (объект) и затем показать его свойство
alert( arr[1].name ); // Джон

// получить элемент с индексом 3 (функция) и выполнить её
arr[3](); // привет`}
        </code>
    </pre>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Список элементов массива, как и список свойств объекта, может оканчиваться запятой:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`let fruits = [
    'Яблоко',
    'Апельсин',
    'Слива'*!*,*/!*
];`}
            </code>
        </pre>
        <p>&quot;Висячая запятая&quot; упрощает процесс добавления/удаления элементов, так как все строки становятся идентичными.</p>
    </div>

    <h2>Получение последних элементов при помощи &quot;at&quot;</h2>
    <p>Допустим, нам нужен последний элемент массива.</p>
    <p>Некоторые языки программирования позволяют использовать отрицательные индексы для той же цели, как-то так: <code className="fs-6">fruits[-1]</code>.</p>
    <p>Однако, в JavaScript такая запись не сработает. Её результатом будет <code className="fs-6">undefined</code>, поскольку индекс в квадратных скобках понимается буквально.</p>
    <p>Мы можем явно вычислить индекс последнего элемента, а затем получить к нему доступ вот так: <code className="fs-6">fruits[fruits.length - 1]</code>.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let fruits = [&quot;Apple&quot;, &quot;Orange&quot;, &quot;Plum&quot;]; <br />
            alert( fruits[fruits.length-1] ); // Plum
        </code>
    </pre>
    <p>Немного громоздко, не так ли? Нам нужно дважды написать имя переменной.</p>
    <p>К счастью, есть более короткий синтаксис: <code className="fs-6">fruits.at (-1)</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let fruits = [&quot;Apple&quot;, &quot;Orange&quot;, &quot;Plum&quot;]; <br />
            // то же самое, что и fruits[fruits.length-1] <br />
            alert( fruits.at(-1) ); // Plum
        </code>
    </pre>
    <p>Другими словами, <code className="fs-6">arr.at(i)</code>:</p>
    <ul>
        <li>это ровно то же самое, что и <code className="fs-6">arr[i]</code>, если <code className="fs-6">i &gt;= 0</code>.</li>
        <li>для отрицательных значений <code className="fs-6">i</code>, он отступает от конца массива.</li>
    </ul>
    <h2>Методы pop/push, shift/unshift</h2>
    <p><a href="https://ru.wikipedia.org/wiki/%D0%9E%D1%87%D0%B5%D1%80%D0%B5%D0%B4%D1%8C_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)">Очередь</a> – один из самых распространённых вариантов применения массива. В области компьютерных наук так называется упорядоченная коллекция элементов, поддерживающая два вида операций:</p>
    <ul>
        <li><code className="fs-6">push</code> добавляет элемент в конец.</li>
        <li><code className="fs-6">shift</code> удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым.</li>
    </ul>
    <img className="mx-auto d-block" src={queueImg} alt="queue"></img>
    <p>Массивы поддерживают обе операции.</p>
    <p>На практике необходимость в этом возникает очень часто. Например, очередь сообщений, которые надо показать на экране.</p>
    <p>Существует и другой вариант применения для массивов – структура данных, называемая <a href="https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B5%D0%BA">стек</a>.</p>
    <p>Она поддерживает два вида операций:</p>
    <ul>
        <li><code className="fs-6">push</code> добавляет элемент в конец.</li>
        <li><code className="fs-6">pop</code> удаляет последний элемент.</li>
    </ul>
    <p>Таким образом, новые элементы всегда добавляются или удаляются из &quot;конца&quot;.</p>
    <p>Примером стека обычно служит колода карт: новые карты кладутся наверх и берутся тоже сверху:</p>
    <img className="mx-auto d-block" src={stackImg} alt="stack"></img>
    <p>Массивы в JavaScript могут работать и как очередь, и как стек. Мы можем добавлять/удалять элементы как в начало, так и в конец массива.</p>
    <p>В компьютерных науках структура данных, делающая это возможным, называется <a href="https://ru.wikipedia.org/wiki/%D0%94%D0%B2%D1%83%D1%85%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D0%BD%D1%8F%D1%8F_%D0%BE%D1%87%D0%B5%D1%80%D0%B5%D0%B4%D1%8C">двусторонняя очередь</a>.</p>
    <p><strong>Методы, работающие с концом массива:</strong></p>
    <p><code className="fs-6">pop</code>
    : Удаляет последний элемент из массива и возвращает его:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let fruits = ['Яблоко', 'Апельсин', 'Груша'];

alert( fruits.pop() ); // удаляем 'Груша' и выводим его

alert( fruits ); // Яблоко, Апельсин`}
        </code>
    </pre>
    <p>И <code className="fs-6">fruits.pop()</code> и <code className="fs-6">fruits.at(-1)</code> возвращают последний элемент массива, но <code className="fs-6">fruits.pop()</code> также изменяет массив, удаляя его.</p>
    
    <p><code className="fs-6">push</code>
    : Добавляет элемент в конец массива:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let fruits = ['Яблоко', 'Апельсин'];

fruits.push('Груша');

alert( fruits ); // Яблоко, Апельсин, Груша`}
        </code>
    </pre>
    <p>Вызов <code className="fs-6">fruits.push(...)</code> равнозначен <code className="fs-6">fruits[fruits.length] = ...</code>.</p>
    
    <p><strong>Методы, работающие с началом массива:</strong></p>
    <p><code className="fs-6">shift</code>
    : Удаляет из массива первый элемент и возвращает его:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
    {`let fruits = ['Яблоко', 'Апельсин', 'Груша'];

alert( fruits.shift() ); // удаляем Яблоко и выводим его

alert( fruits ); // Апельсин, Груша`}
        </code>
    </pre>
    <p><code className="fs-6">unshift</code>
    : Добавляет элемент в начало массива:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
    {`let fruits = ['Апельсин', 'Груша'];

fruits.unshift('Яблоко');

alert( fruits ); // Яблоко, Апельсин, Груша`}
        </code>
    </pre>
    <p>Методы <code className="fs-6">push</code> и <code className="fs-6">unshift</code> могут добавлять сразу несколько элементов:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let fruits = ['Яблоко'];

fruits.push('Апельсин', 'Груша');
fruits.unshift('Ананас', 'Лимон');

// ['Ананас', 'Лимон', 'Яблоко', 'Апельсин', 'Груша']
alert( fruits );`}
        </code>
    </pre>

    <h2>Внутреннее устройство массива</h2>
    <p>Массив – это особый подвид объектов. Квадратные скобки, используемые для того, чтобы получить доступ к свойству <code className="fs-6">arr[0]</code> - это по сути обычный синтаксис доступа по ключу, как <code className="fs-6">obj[key]</code>, где в роли <code className="fs-6">obj</code> у нас <code className="fs-6">arr</code>, а в качестве ключа - числовой индекс.</p>
    <p>Массивы расширяют объекты, так как предусматривают специальные методы для работы с упорядоченными коллекциями данных, а также свойство <code className="fs-6">length</code>. Но в основе всё равно лежит объект.</p>
    <p>Следует помнить, что в JavaScript существует 8 основных типов данных. Массив является объектом и, следовательно, ведёт себя как объект.</p>
    <p>Например, копируется по ссылке:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let fruits = ['Банан']

let arr = fruits; // копируется по ссылке (две переменные ссылаются на один и тот же массив)

alert( arr === fruits ); // true

arr.push('Груша'); // массив меняется по ссылке

alert( fruits ); // Банан, Груша - теперь два элемента`}
        </code>
    </pre>
    <p>...Но то, что действительно делает массивы особенными - это их внутреннее представление. Движок JavaScript старается хранить элементы массива в непрерывной области памяти, один за другим, так, как это показано на иллюстрациях к этой главе. Существуют и другие способы оптимизации, благодаря которым массивы работают очень быстро.</p>
    <p>Но все они утратят эффективность, если мы перестанем работать с массивом как с &quot;упорядоченной коллекцией данных&quot; и начнём использовать его как обычный объект.</p>
    <p>Например, технически мы можем сделать следующее:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let fruits = []; // создаём массив

fruits[99999] = 5; // создаём свойство с индексом, намного превышающим длину массива

fruits.age = 25; // создаём свойство с произвольным именем`}
        </code>
    </pre>
    <p>Это возможно, потому что в основе массива лежит объект. Мы можем присвоить ему любые свойства.</p>
    <p>Но движок поймёт, что мы работаем с массивом, как с обычным объектом. Способы оптимизации, используемые для массивов, в этом случае не подходят, поэтому они будут отключены и никакой выгоды не принесут.</p>
    <p>Варианты неправильного применения массива:</p>
    <ul>
        <li>Добавление нечислового свойства, например:  <code className="fs-6">arr.test = 5</code>.</li>
        <li>Создание &quot;дыр&quot;, например: добавление <code className="fs-6">arr[0]</code>, затем <code className="fs-6">arr[1000]</code> (между ними ничего нет).</li>
        <li>Заполнение массива в обратном порядке, например: <code className="fs-6">arr[1000]</code>, <code className="fs-6">arr[999]</code> и т.д.</li>
    </ul>
    <p>Массив следует считать особой структурой, позволяющей работать с <em>упорядоченными данными</em>. Для этого массивы предоставляют специальные методы. Массивы тщательно настроены в движках JavaScript для работы с однотипными упорядоченными данными, поэтому, пожалуйста, используйте их именно в таких случаях. Если вам нужны произвольные ключи, вполне возможно, лучше подойдёт обычный объект <code className="fs-6">{}</code>.</p>

    <h2>Эффективность</h2>
    <p>Методы <code className="fs-6">push/pop</code> выполняются быстро, а методы <code className="fs-6">shift/unshift</code> – медленно.</p>
    <img className="mx-auto d-block" src={arraySpeedImg} alt="array speed"></img>
    <p>Почему работать с концом массива быстрее, чем с его началом? Давайте посмотрим, что происходит во время выполнения:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            fruits.shift(); // удаляем первый элемент с начала
        </code>
    </pre>
    <p>Просто взять и удалить элемент с номером <code className="fs-6">0</code> недостаточно. Нужно также заново пронумеровать остальные элементы.</p>
    <p>Операция <code className="fs-6">shift</code> должна выполнить 3 действия:</p>
    <ol>
        <li>Удалить элемент с индексом <code className="fs-6">0</code>.</li>
        <li>Сдвинуть все элементы влево, заново пронумеровать их, заменив <code className="fs-6">1</code> на <code className="fs-6">0</code>, <code className="fs-6">2</code> на <code className="fs-6">1</code> и т.д.</li>
        <li>Обновить свойство <code className="fs-6">length</code> .</li>
    </ol>
    <img className="mx-auto d-block" src={arrayShiftImg} alt="array shift"></img>
    <p><strong>Чем больше элементов содержит массив, тем больше времени потребуется для того, чтобы их переместить, больше операций с памятью.</strong></p>
    <p>То же самое происходит с <code className="fs-6">unshift</code>: чтобы добавить элемент в начало массива, нам нужно сначала сдвинуть существующие элементы вправо, увеличивая их индексы.</p>
    <p>А что же с <code className="fs-6">push/pop</code>? Им не нужно ничего перемещать. Чтобы удалить элемент в конце массива, метод <code className="fs-6">pop</code> очищает индекс и уменьшает значение <code className="fs-6">length</code>.</p>
    <p>Действия при операции <code className="fs-6">pop</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            fruits.pop(); // удаляем один элемент с конца
        </code>
    </pre>
    <img className="mx-auto d-block" src={arrayPopImg} alt="array pop"></img>
    <p><strong>Метод <code className="fs-6">pop</code> не требует перемещения, потому что остальные элементы остаются с теми же индексами. Именно поэтому он выполняется очень быстро.</strong></p>
    <p>Аналогично работает метод <code className="fs-6">push</code>.</p>

    <h2>Перебор элементов</h2>
    <p>Одним из самых старых способов перебора элементов массива является цикл for по цифровым индексам:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let arr = ['Яблоко', 'Апельсин', 'Груша'];

    *!*
for (let i = 0; i &lt; arr.length; i++) {
    */!*
    alert( arr[i] );
}`}
        </code>
    </pre>
    <p>Но для массивов возможен и другой вариант цикла, <code className="fs-6">for..of</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let fruits = ['Яблоко', 'Апельсин', 'Слива';];

// проходит по значениям
for (let fruit of fruits) {
    alert( fruit );
}`}
        </code>
    </pre>
    <p>Цикл <code className="fs-6">for..of</code> не предоставляет доступа к номеру текущего элемента, только к его значению, но в большинстве случаев этого достаточно. А также это короче.</p>
    <p>Технически, так как массив является объектом, можно использовать и вариант <code className="fs-6">for..in</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let arr = ['Яблоко', 'Апельсин', 'Груша'];

    *!*
for (let key in arr) {
    */!*
    alert( arr[key] ); // Яблоко, Апельсин, Груша
}`}
        </code>
    </pre>
    <p>Но на самом деле это - плохая идея. Существуют скрытые недостатки этого способа:</p>
    <ol>
        <li><p>Цикл <code className="fs-6">for..in</code> выполняет перебор <em>всех свойств</em> объекта, а не только цифровых.</p>
            <p> В браузере и других программных средах также существуют так называемые &quot;псевдомассивы&quot; - объекты, которые <em>выглядят, как массив</em>. То есть, у них есть свойство <code className="fs-6">length</code> и индексы, но они также могут иметь дополнительные нечисловые свойства и методы, которые нам обычно не нужны. Тем не менее, цикл <code className="fs-6">for..in</code> выведет и их. Поэтому, если нам приходится иметь дело с объектами, похожими на массив, такие &quot;лишние&quot; свойства могут стать проблемой.</p>
        </li>
        <li><p>Цикл <code className="fs-6">for..in</code> оптимизирован под произвольные объекты, не массивы, и поэтому в 10-100 раз медленнее. Увеличение скорости выполнения может иметь значение только при возникновении узких мест. Но мы всё же должны представлять разницу.</p>
        </li>
    </ol>
    <p>В общем, не следует использовать цикл <code className="fs-6">for..in</code> для массивов.</p>

    <h2>Немного о &quot;length&quot;</h2>
    <p>Свойство <code className="fs-6">length</code> автоматически обновляется при изменении массива. Если быть точными, это не количество элементов массива, а наибольший цифровой индекс плюс один.</p>
    <p>Например, единственный элемент, имеющий большой индекс, даёт большую длину:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let fruits = [];
fruits[123] = 'Яблоко'

alert( fruits.length ); // 124`}
        </code>
    </pre>
    <p>Обратите внимание, что обычно мы не используем массивы таким образом.</p>
    <p>Ещё один интересный факт о свойстве <code className="fs-6">length</code> – его можно перезаписать.</p>
    <p>Если мы вручную увеличим его, ничего интересного не произойдёт. Зато, если мы уменьшим его, массив станет короче. Этот процесс необратим, как мы можем понять из примера:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let arr = [1, 2, 3, 4, 5];

arr.length = 2; // укорачиваем до двух элементов
alert( arr ); // [1, 2]

arr.length = 5; // возвращаем length как было
alert( arr[3] ); // undefined: значения не восстановились`}
        </code>
    </pre>
    <p>Таким образом, самый простой способ очистить массив – это <code className="fs-6">arr.length = 0;</code>.</p>

    <h2>new Array()</h2>
    <p>Существует ещё один вариант синтаксиса для создания массива:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let arr = *!*new Array*/!*(&quot;Яблоко&quot;, &quot;Груша&quot;, &quot;и тд&quot;);
        </code>
    </pre>
    <p>Он редко применяется, так как квадратные скобки <code className="fs-6">[]</code> короче. Кроме того, у него есть хитрая особенность.</p>
    <p>Если <code className="fs-6">new Array</code> вызывается с одним аргументом, который представляет собой число, он создаёт массив <em>без элементов, но с заданной длиной</em>.</p>
    <p>Давайте посмотрим, как можно оказать себе медвежью услугу:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let arr = new Array(2); // создастся ли массив [2]?

alert( arr[0] ); // undefined! нет элементов.

alert( arr.length ); // length 2`}
        </code>
    </pre>
    <p>Как мы видим, в коде, представленном выше, в <code className="fs-6">new Array(number)</code> все элементы равны <code className="fs-6">undefined</code>.</p>
    <p>Чтобы избежать появления таких неожиданных ситуаций, мы обычно используем квадратные скобки, если, конечно, не знаем точно, что по какой-то причине нужен именно <code className="fs-6">Array</code>.</p>

    <h2>Многомерные массивы</h2>
    <p>Массивы могут содержать элементы, которые тоже являются массивами. Это можно использовать для создания многомерных массивов, например, для хранения матриц:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

alert( matrix[1][1] ); // 5, центральный элемент`}
        </code>
    </pre>

    <h2>toString</h2>
    <p>Массивы по-своему реализуют метод <code className="fs-6">toString</code>, который возвращает список элементов, разделённых запятыми.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true`}
        </code>
    </pre>
    <p>Давайте теперь попробуем следующее:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            alert( [] + 1 ); // &quot;1&quot; <br />
            alert( [1] + 1 ); // &quot;11&quot; <br />
            alert( [1,2] + 1 ); // &quot;1,21&quot;
        </code>
    </pre>
    <p>Массивы не имеют ни <code className="fs-6">Symbol.toPrimitive</code>, ни функционирующего <code className="fs-6">valueOf</code>, они реализуют только преобразование <code className="fs-6">toString</code>, таким образом, здесь <code className="fs-6">[]</code> становится пустой строкой, <code className="fs-6">[1]</code> становится <code className="fs-6">&quot;1&quot;</code>, а <code className="fs-6">[1,2]</code> становится <code className="fs-6">&quot;1,2&quot;</code>.</p>
    <p>Когда бинарный оператор плюс <code className="fs-6">&quot;+&quot;</code> добавляет что-либо к строке, он тоже преобразует это в строку, таким образом:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            alert( &quot;&quot; + 1 ); // &quot;1&quot; <br />
            alert( &quot;1&quot; + 1 ); // &quot;11&quot; <br />
            alert( &quot;1,2&quot; + 1 ); // &quot;1,21&quot;
        </code>
    </pre>

    <h2>Не сравнивайте массивы при помощи ==</h2>
    <p>В JavaScript, в отличие от некоторых других языков программирования, массивы не следует сравнивать при помощи оператора <code className="fs-6">==</code>.</p>
    <p>У этого оператора нет специального подхода к массивам, он работает с ними, как и с любыми другими объектами.</p>
    <p>Давайте ещё раз напомним правила:</p>
    <ul>
        <li>Два объекта равны друг другу <code className="fs-6">==</code> только в том случае, если они ссылаются на один и тот же объект.</li>
        <li>Если один из аргументов <code className="fs-6">==</code> является объектом, а другой - примитивом, то объект преобразуется в примитив, как описано в главе <a href="info:object-toprimitive">info:object-toprimitive</a>.</li>
        <li>...За исключением <code className="fs-6">null</code> и <code className="fs-6">undefined</code>, которые равны <code className="fs-6">==</code> друг другу и ничему больше.</li>
    </ul>
    <p>Оператор строгого равенства <code className="fs-6">===</code> ещё проще, так как он не преобразует типы.</p>
    <p>Итак, если мы всё же сравниваем массивы с помощью <code className="fs-6">==</code>, то они никогда не будут одинаковыми, если только мы не сравним две переменные, которые ссылаются на один и тот же массив</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            alert( [] == [] ); // false <br />
            alert( [0] == [0] ); // false
        </code>
    </pre>
    <p>Технически эти массивы являются разными объектами. Так что они не равны. Оператор <code className="fs-6">==</code> не выполняет поэлементное сравнение.</p>
    <p>Сравнение с примитивами также может дать, казалось бы, странные результаты:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`alert( 0 == [] ); // true

alert('0' == [] ); // false`}
        </code>
    </pre>
    <p>Здесь, в обоих случаях, мы сравниваем примитив с объектом массива. Таким образом, массив <code className="fs-6">[]</code> преобразуется в примитив с целью сравнения и становится пустой строкой <code className="fs-6">&#39;&#39;</code>.</p>
    <p>Затем продолжается процесс сравнения с примитивами:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`// после того, как [] был преобразован в ';'
alert( 0 == ';' ); // true, так как ';' преобразуется в число 0

alert('0' == ';' ); // false, нет преобразования типов, разные строки`}
        </code>
    </pre>
    <p>Так как же сравнить массивы?</p>
    <p>Это просто: не используйте оператор <code className="fs-6">==</code>. Вместо этого сравните их поэлементам в цикле или используя методы итерации, описанные в следующей главе.</p>
    <h2>Итого</h2>
    <p>Массив – это особый тип объекта, предназначенный для работы с упорядоченным набором элементов.</p>
    <p>Объявление:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`// квадратные скобки (обычно)
let arr = [item1, item2...];

// new Array (очень редко)
let arr = new Array(item1, item2...);`}
        </code>
    </pre>
    <p>Вызов <code className="fs-6">new Array(number)</code> создаёт массив с заданной длиной, но без элементов.</p>
    <ul>
        <li>Свойство <code className="fs-6">length</code> отражает длину массива или, если точнее, его последний цифровой индекс плюс один. Длина корректируется автоматически методами массива.</li>
        <li>Если мы уменьшаем <code className="fs-6">length</code> вручную, массив укорачивается.</li>
    </ul>
    <p>Получение элементов:</p>
    <ul>
        <li>Мы можем получить элемент по его индексу, например <code className="fs-6">arr[0]</code>.</li>
        <li>Также мы можем использовать метод <code className="fs-6">at(i)</code> для получения элементов с отрицательным индексом, для отрицательных значений <code className="fs-6">i</code>, он отступает от конца массива. В остальном он работает так же, как <code className="fs-6">arr[i]</code>, если <code className="fs-6">i &gt;= 0</code>.</li>
    </ul>
    <p>Мы можем использовать массив как двустороннюю очередь, используя следующие операции:</p>
    <ul>
        <li><code className="fs-6">push(...items)</code>добавляет <code className="fs-6">items</code> в конец массива.</li>
        <li><code className="fs-6">pop()</code> удаляет элемент в конце массива и возвращает его.</li>
        <li><code className="fs-6">shift()</code> удаляет элемент в начале массива и возвращает его.</li>
        <li><code className="fs-6">unshift(...items)</code> добавляет <code className="fs-6">items</code> в начало массива.</li>
    </ul>
    <p>Чтобы пройтись по элементам массива:</p>
    <ul>
        <li><code className="fs-6">for (let i=0; i&lt;arr.length; i++)</code> - работает быстрее всего, совместим со старыми браузерами.</li>
        <li><code className="fs-6">for (let item of arr)</code> - современный синтаксис только для значений элементов (к индексам нет доступа).</li>
        <li><code className="fs-6">for (let i in arr)</code> - никогда не используйте для массивов!</li>
    </ul>

    </>
    );
}

export default Arrays;