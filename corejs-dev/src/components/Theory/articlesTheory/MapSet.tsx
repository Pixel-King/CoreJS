import * as React from 'react';

const MapSet: React.FC =() => {
    return (
    <>

    <h1>Map и Set</h1>
    <p>Сейчас мы знаем о следующих сложных структурах данных:</p>
    <ul>
        <li>
            <p><strong>Объекты</strong> для хранения именованных коллекций.</p>
        </li>
        <li>
            <p><strong>Массивы</strong> для хранения упорядоченных коллекций.</p>
        </li>
    </ul>
    <p>Но этого не всегда достаточно для решения повседневных задач. Поэтому также существуют <strong>Map</strong> и <strong>Set</strong>.</p>
    <h2>Map</h2>
    <p><code className="fs-6"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map">Map</a></code> – это коллекция ключ/значение, как и <code className="fs-6">Object</code>. Но основное отличие в том, что <code className="fs-6">Map</code> позволяет использовать ключи любого типа.</p>
    <p>Методы и свойства:</p>
    <ul>
        <li>
            <p><code className="fs-6">new Map()</code> – создаёт коллекцию.</p>
        </li>
        <li>
            <p><code className="fs-6">map.set(key, value)</code> – записывает по ключу <code className="fs-6">key</code> значение <code className="fs-6">value</code>.</p>
        </li>
        <li>
            <p><code className="fs-6">map.get(key)</code> – возвращает значение по ключу или <code className="fs-6">undefined</code>, если ключ <code className="fs-6">key</code> отсутствует.</p>
        </li>
        <li>
            <p><code className="fs-6">map.has(key)</code> – возвращает <code className="fs-6">true</code>, если ключ <code className="fs-6">key</code> присутствует в коллекции, иначе <code className="fs-6">false</code>.</p>
        </li>
        <li>
            <p><code className="fs-6">map.delete(key)</code> – удаляет элемент по ключу <code className="fs-6">key</code>.</p>
        </li>
        <li>
            <p><code className="fs-6">map.clear()</code> – очищает коллекцию от всех элементов.</p>
        </li>
        <li>
            <p><code className="fs-6">map.size</code> – возвращает текущее количество элементов.</p>
        </li>
    </ul>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let map = new Map();

map.set("1", "str1");    // строка в качестве ключа
map.set(1, "num1");      // цифра как ключ
map.set(true, "bool1");  // булево значение как ключ

// помните, обычный объект Object приводит ключи к строкам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
alert(map.get(1)); // "num1"
alert(map.get("1")); // "str1"

alert(map.size); // 3`}
        </code>
    </pre>
    <p>Как мы видим, в отличие от объектов, ключи не были приведены к строкам. Можно использовать любые типы данных для ключей.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong><code className="fs-6">map[key]</code> это не совсем правильный способ использования <code className="fs-6">Map</code></strong></p>
        <p>Хотя <code className="fs-6">map[key]</code> также работает, например, мы можем установить <code className="fs-6">map[key] = 2</code>, в этом случаеmap рассматривался бы как обычный JavaScript объект, таким образом это ведёт ко всем соответствующим ограничениям (только строки/символьные ключи и так далее).</p>
        <p>Поэтому нам следует использовать методы <code className="fs-6">map</code>: <code className="fs-6">set</code>, <code className="fs-6">get</code> и так далее.</p>
    </div>
    <p><strong><code className="fs-6">Map</code> может использовать объекты в качестве ключей.</strong></p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let john = { name: "John" };

// давайте сохраним количество посещений для каждого пользователя
let visitsCountMap = new Map();

// объект john - это ключ для значения в объекте Map
visitsCountMap.set(john, 123);

alert(visitsCountMap.get(john)); // 123`}
        </code>
    </pre>
    <p>Использование объектов в качестве ключей – одна из наиболее заметных и важных функций <code className="fs-6">Map</code>. Это то, что невозможно для <code className="fs-6">Object</code>. Строка в качестве ключа в <code className="fs-6">Object</code> – это нормально, но мы не можем использовать другой <code className="fs-6">Object</code> в качестве ключа в <code className="fs-6">Object</code>.</p>
    <p>Давайте попробуем заменить <code className="fs-6">Map</code> на <code className="fs-6">Object</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // попробуем использовать объект

visitsCountObj[ben] = 234; // пробуем использовать объект ben в качестве ключа
visitsCountObj[john] = 123; // пробуйем использовать объект john в качестве ключа, при этом объект ben будет замещён

// Вот что там было записано!
alert( visitsCountObj["[object Object]"] ); // 123`}
        </code>
    </pre>
    <p>Так как <code className="fs-6">visitsCountObj</code> является объектом, он преобразует все ключи <code className="fs-6">Object</code>, такие как <code className="fs-6">john</code> и <code className="fs-6">ben</code>, в одну и ту же строку <code className="fs-6">"[object Object]"</code>. Это определенно не то, чего мы хотим.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Как объект <code className="fs-6">Map</code> сравнивает ключи</strong></p>
        <p>Чтобы сравнивать ключи, объект <code className="fs-6">Map</code> использует алгоритм <a href="https://tc39.github.io/ecma262/#sec-samevaluezero">SameValueZero</a>. Это почти такое же сравнение, что и <code className="fs-6">===</code>, с той лишь разницей, что <code className="fs-6">NaN</code> считается равным <code className="fs-6">NaN</code>. Так что <code className="fs-6">NaN</code> также может использоваться в качестве ключа.</p>
        <p>Этот алгоритм не может быть заменён или модифицирован.</p>
    </div>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Цепочка вызовов</strong></p>
        <p>Каждый вызов <code className="fs-6">map.set</code> возвращает объект <code className="fs-6">map</code>, так что мы можем объединить вызовы в цепочку:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
            {`map.set("1", "str1")
    .set(1, "num1")
    .set(true, "bool1");`}
            </code>
        </pre>
    </div>
    <h2>Перебор Map</h2>
    <p>Для перебора коллекции <code className="fs-6">Map</code> есть 3 метода:</p>
    <ul>
        <li>
            <p><code className="fs-6">map.keys()</code> – возвращает итерируемый объект по ключам,</p>
        </li>
        <li>
            <p><code className="fs-6">map.values()</code> – возвращает итерируемый объект по значениям,</p>
        </li>
        <li>
            <p><code className="fs-6">map.entries()</code> – возвращает итерируемый объект по парам вида <code className="fs-6">[ключ, значение]</code>, этот вариант используется по умолчанию в <code className="fs-6">for..of</code>.</p>
        </li>
    </ul>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
    alert(entry); // огурец,500 (и так далее)
}`}
        </code>
    </pre>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Используется порядок вставки</strong></p>
        <p>В отличие от обычных объектов <code className="fs-6">Object</code>, в <code className="fs-6">Map</code> перебор происходит в том же порядке, в каком происходило добавление элементов.</p>
    </div>
    <p>Кроме этого, <code className="fs-6">Map</code> имеет встроенный метод <code className="fs-6">forEach</code>, схожий со встроенным методом массивов <code className="fs-6">Array</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key, map) => {
    alert(\`\${key}: \${value}\`); // огурец: 500 и так далее
});`}
        </code>
    </pre>
    <h2>Object.entries: Map из Object</h2>
    <p>При создании <code className="fs-6">Map</code> мы можем указать массив (или другой итерируемый объект) с парами ключ-значение для инициализации, как здесь:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// массив пар [ключ, значение]
let map = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
]);

alert( map.get('1') ); // str1`}
        </code>
    </pre>
    <p>Если у нас уже есть обычный объект, и мы хотели бы создать <code className="fs-6">Map</code> из него, то поможет встроенный метод <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries">Object.entries(obj)</a>, который получает объект и возвращает массив пар ключ-значение для него, как раз в этом формате.</p>
    <p>Так что мы можем создать <code className="fs-6">Map</code> из обычного объекта следующим образом:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let obj = {
    name: "John",
    age: 30
};

let map = new Map(Object.entries(obj));

alert( map.get('name') ); // John`}
        </code>
    </pre>
    <p>Здесь <code className="fs-6">Object.entries</code> возвращает массив пар ключ-значение: <code className="fs-6">[ ["name","John"], ["age", 30] ]</code>. Это именно то, что нужно для создания Map.</p>
    <h2>Object.fromEntries: Object из Map</h2>
    <p>Мы только что видели, как создать <code className="fs-6">Map</code> из обычного объекта при помощи <code className="fs-6">Object.entries(obj)</code>.</p>
    <p>Есть метод <code className="fs-6">Object.fromEntries</code>, который делает противоположное: получив массив пар вида <code className="fs-6">[ключ, значение]</code>, он создаёт из них объект:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

// prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange); // 2`}
        </code>
    </pre>
    <p>Мы можем использовать <code className="fs-6">Object.fromEntries</code>, чтобы получить обычный объект из <code className="fs-6">Map</code>.</p>
    <p>К примеру, у нас данные в <code className="fs-6">Map</code>, но их нужно передать в сторонний код, который ожидает обычный объект.</p>
    <p>Вот как это сделать:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // создаём обычный объект (*)

// готово!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2`}
        </code>
    </pre>
    <p>Вызов <code className="fs-6">map.entries()</code> возвращает итерируемый объект пар <code className="fs-6">ключ/значение</code>, как раз в нужном формате для <code className="fs-6">Object.fromEntries</code>.</p>
    <p>Мы могли бы написать строку (*) ещё короче:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        let obj = Object.fromEntries(map); // убрать .entries()
        </code>
    </pre>
    <p>Это то же самое, так как <code className="fs-6">Object.fromEntries</code> ожидает перебираемый объект в качестве аргумента, не обязательно массив. А перебор <code className="fs-6">map</code> как раз возвращает пары ключ/значение, так же, как и <code className="fs-6">map.entries()</code>. Так что в итоге у нас будет обычный объект с теми же ключами/значениями, что и в <code className="fs-6">map</code>.</p>
    <h2>Set</h2>
    <p>Объект <code className="fs-6">Set</code> – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.</p>
    <p>Его основные методы это:</p>
    <ul>
        <li>
            <p><code className="fs-6">new Set(iterable)</code> – создаёт <code className="fs-6">Set</code>, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый <code className="fs-6">Set</code>.</p>
        </li>
        <li>
            <p><code className="fs-6">set.add(value)</code> – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект <code className="fs-6">set</code>.</p>
        </li>
        <li>
            <p><code className="fs-6">set.delete(value)</code> – удаляет значение, возвращает <code className="fs-6">true</code>, если <code className="fs-6">value</code> было в множестве на момент вызова, иначе <code className="fs-6">false</code>.</p>
        </li>
        <li>
            <p><code className="fs-6">set.has(value)</code> – возвращает <code className="fs-6">true</code>, если значение присутствует в множестве, иначе <code className="fs-6">false</code>.</p>
        </li>
        <li>
            <p><code className="fs-6">set.clear()</code> – удаляет все имеющиеся значения.</p>
        </li>
        <li>
            <p><code className="fs-6">set.size</code> – возвращает количество элементов в множестве.</p>
        </li>
    </ul>
    <p>Основная «изюминка» – это то, что при повторных вызовах <code className="fs-6">set.add()</code> с одним и тем же значением ничего не происходит, за счёт этого как раз и получается, что каждое значение появляется один раз.</p>
    <p>Например, мы ожидаем посетителей, и нам необходимо составить их список. Но повторные визиты не должны приводить к дубликатам. Каждый посетитель должен появиться в списке только один раз.</p>
    <p>Множество <code className="fs-6">Set</code> – как раз то, что нужно для этого:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set хранит только 3 уникальных значения
alert(set.size); // 3

for (let user of set) {
    alert(user.name); // John (потом Pete и Mary)
}`}
        </code>
    </pre>
    <p>Альтернативой множеству <code className="fs-6">Set</code> может выступать массив для хранения гостей и дополнительный код для проверки уже имеющегося элемента с помощью <code className="fs-6">arr.find</code>. Но в этом случае будет хуже производительность, потому что <code className="fs-6">arr.find</code> проходит весь массив для проверки наличия элемента. Множество <code className="fs-6">Set</code> лучше оптимизировано для добавлений, оно автоматически проверяет на уникальность.</p>
    <h2>Перебор объекта Set</h2>
    <p>Мы можем перебрать содержимое объекта <code className="fs-6">set</code> как с помощью метода <code className="fs-6">for..of</code>, так и используя <code className="fs-6">forEach</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let set = new Set(["апельсин", "яблоко", "банан"]);

for (let value of set) alert(value);

// то же самое с forEach:
set.forEach((value, valueAgain, set) => {
    alert(value);
});`}
        </code>
    </pre>
    <p>Заметим забавную вещь. Функция в <code className="fs-6">forEach</code> у <code className="fs-6">Set</code> имеет 3 аргумента: значение <code className="fs-6">value</code>, потом снова то же самое значение <code className="fs-6">valueAgain</code>, и только потом целевой объект. Это действительно так, значение появляется в списке аргументов дважды.</p>
    <p>Это сделано для совместимости с объектом <code className="fs-6">Map</code>, в котором колбэк <code className="fs-6">forEach</code> имеет 3 аргумента. Выглядит немного странно, но в некоторых случаях может помочь легко заменить <code className="fs-6">Map</code> на <code className="fs-6">Set</code> и наоборот.</p>
    <p><code className="fs-6">Set</code> имеет те же встроенные методы, что и <code className="fs-6">Map</code>:</p>
    <ul>
        <li>
            <p><code className="fs-6">set.values()</code> – возвращает перебираемый объект для значений,</p>
        </li>
        <li>
            <p><code className="fs-6">set.keys()</code> – то же самое, что и <code className="fs-6">set.values()</code>, присутствует для обратной совместимости с <code className="fs-6">Map</code>,</p>
        </li>
        <li>
            <p><code className="fs-6">set.entries()</code> – возвращает перебираемый объект для пар вида <code className="fs-6">[значение, значение]</code>, присутствует для обратной совместимости с <code className="fs-6">Map</code>.</p>
        </li>
    </ul>
    <h2>Итого</h2>
    <p><code className="fs-6">Map</code> – коллекция пар ключ-значение.</p>
    <p>Методы и свойства:</p>
    <ul>
        <li>
            <p><code className="fs-6">new Map([iterable])</code> – создаёт коллекцию, можно указать перебираемый объект (обычно массив) из пар <code className="fs-6">[ключ,значение]</code> для инициализации.</p>
        </li>
        <li>
            <p><code className="fs-6">map.set(key, value)</code> – записывает по ключу <code className="fs-6">key</code> значение <code className="fs-6">value</code>.</p>
        </li>
        <li>
            <p><code className="fs-6">map.get(key)</code> – возвращает значение по ключу или <code className="fs-6">undefined</code>, если ключ <code className="fs-6">key</code> отсутствует.</p>
        </li>
        <li>
            <p><code className="fs-6">map.has(key)</code> – возвращает <code className="fs-6">true</code>, если ключ <code className="fs-6">key</code> присутствует в коллекции, иначе <code className="fs-6">false</code>.</p>
        </li>
        <li>
            <p><code className="fs-6">map.delete(key)</code> – удаляет элемент по ключу <code className="fs-6">key</code>.</p>
        </li>
        <li>
            <p><code className="fs-6">map.clear()</code> – очищает коллекцию от всех элементов.</p>
        </li>
        <li>
            <p><code className="fs-6">map.size</code> – возвращает текущее количество элементов.</p>
        </li>
    </ul>
    <p>Отличия от обычного объекта <code className="fs-6">Object</code>:</p>
    <ul>
        <li>
            <p>Что угодно может быть ключом, в том числе и объекты.</p>
        </li>
        <li>
            <p>Есть дополнительные методы, свойство <code className="fs-6">size</code>.</p>
        </li>
    </ul>
    <p><code className="fs-6">Set</code> – коллекция уникальных значений, так называемое «множество».</p>
    <p>Методы и свойства:</p>
    <ul>
        <li>
            <p><code className="fs-6">new Set([iterable])</code> – создаёт <code className="fs-6">Set</code>, можно указать перебираемый объект со значениями для инициализации.</p>
        </li>
        <li>
            <p><code className="fs-6">set.add(value)</code> – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект <code className="fs-6">set</code>.</p>
        </li>
        <li>
            <p><code className="fs-6">set.delete(value)</code> – удаляет значение, возвращает <code className="fs-6">true</code> если <code className="fs-6">value</code> было в множестве на момент вызова, иначе <code className="fs-6">false</code>.</p>
        </li>
        <li>
            <p><code className="fs-6">set.has(value)</code> – возвращает <code className="fs-6">true</code>, если значение присутствует в множестве, иначе <code className="fs-6">false</code>.</p>
        </li>
        <li>
            <p><code className="fs-6">set.clear()</code> – удаляет все имеющиеся значения.</p>
        </li>
        <li>
            <p><code className="fs-6">set.size</code> – возвращает количество элементов в множестве.</p>
        </li>
    </ul>
    <p>Перебор <code className="fs-6">Map</code> и <code className="fs-6">Set</code> всегда осуществляется в порядке добавления элементов, так что нельзя сказать, что это – неупорядоченные коллекции, но поменять порядок элементов или получить элемент напрямую по его номеру нельзя.</p>

    </>
    );
}

export default MapSet;