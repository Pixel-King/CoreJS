import * as React from 'react';

const ObjectKeysValuesEntries: React.FC =() => {
    return (
    <>

    <h1>Object.keys, values, entries</h1>
    <p>В предыдущих главах мы видели методы <code className="fs-6">map.keys()</code>, <code className="fs-6">map.values()</code>, <code className="fs-6">map.entries()</code>.</p>
    <p>Это универсальные методы, и существует общее соглашение использовать их для структур данных. Если бы мы делали собственную структуру данных, нам также следовало бы их реализовать.</p>
    <p>Методы поддерживаются для структур:</p>
    <ul>
        <li>
            <p><code className="fs-6">Map</code></p>
        </li>
        <li>
            <p><code className="fs-6">Set</code></p>
        </li>
        <li>
            <p><code className="fs-6">Array</code></p>
        </li>
    </ul>
    <p>Простые объекты также можно перебирать похожими методами, но синтаксис немного отличается.</p>
    <h2>Object.keys, values, entries</h2>
    <p>Для простых объектов доступны следующие методы:</p>
    <ul>
        <li>
            <p><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys">Object.keys(obj)</a> – возвращает массив ключей.</p>
        </li>
        <li>
            <p><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/values">Object.values(obj)</a> – возвращает массив значений.</p>
        </li>
        <li>
            <p><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries">Object.entries(obj)</a> – возвращает массив пар <code className="fs-6">[ключ, значение]</code>.</p>
        </li>
    </ul>
    <p>Обратите внимание на различия (по сравнению с <code className="fs-6">map</code>, например):</p>
    <table className="table table-bordered text-center">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col"><p><strong>Map</strong></p></th>
                <th scope="col"><p><strong>Object</strong></p></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><p>Синтаксис вызова</p></td>
                <td><p><code className="fs-6">map.keys()</code></p></td>
                <td><p><code className="fs-6">Object.keys(obj)</code>, не <code className="fs-6">obj.keys()</code></p></td>
            </tr>
            <tr>
                <td><p>Возвращает</p></td>
                <td><p>перебираемый объект</p></td>
                <td><p>«реальный» массив</p></td>
            </tr>
        </tbody>
    </table>
    <p>Первое отличие в том, что мы должны вызвать <code className="fs-6">Object.keys(obj)</code>, а не <code className="fs-6">Object.keys(obj)</code>.</p>
    <p>Почему так? Основная причина – гибкость. Помните, что объекты являются основой всех сложных структур в JavaScript. У нас может быть объект <code className="fs-6">data</code>, который реализует свой собственный метод <code className="fs-6">data.values()</code>. И мы всё ещё можем применять к нему стандартный метод <code className="fs-6">Object.values(data)</code>.</p>
    <p>Второе отличие в том, что методы вида <code className="fs-6">Object.*</code> возвращают «реальные» массивы, а не просто итерируемые объекты. Это в основном по историческим причинам.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let user = {
    name: "John",
    age: 30
};`}
        </code>
    </pre>
    <ul>
        <li>
            <p><code className="fs-6">Object.keys(user) = ["name", "age"]</code></p>
        </li>
        <li>
            <p><code className="fs-6">Object.values(user) = ["John", 30]</code></p>
        </li>
        <li>
            <p><code className="fs-6">Object.entries(user) = [ ["name","John"], ["age",30] ]</code></p>
        </li>
    </ul>
    <p>Вот пример использования <code className="fs-6">Object.values</code> ​​для перебора значений свойств в цикле:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let user = {
    name: "John",
    age: 30
};

// перебор значений
for (let value of Object.values(user)) {
    alert(value); // John, затем 30
}`}
        </code>
    </pre>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong><code className="fs-6">Object.keys/values/entries</code> игнорируют символьные свойства</strong></p>
        <p>Так же, как и цикл <code className="fs-6">for..in</code>, эти методы игнорируют свойства, использующие <code className="fs-6">Symbol(...)</code> в качестве ключей.</p>
        <p>Обычно это удобно. Но если требуется учитывать и символьные ключи, то для этого существует отдельный метод <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols">Object.getOwnPropertySymbols</a>, возвращающий массив только символьных ключей. Также, существует метод <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys">Reflect.ownKeys(obj)</a>, который возвращает все ключи.</p>
    </div>
    <h2>Трансформации объекта</h2>
    <p>У объектов нет множества методов, которые есть в массивах, например <code className="fs-6">map</code>, <code className="fs-6">filter</code> и других.</p>
    <p>Если мы хотели бы их применить, то можно использовать <code className="fs-6">Object.entries</code> с последующим вызовом <code className="fs-6">Object.fromEntries</code>:</p>
    <ol>
        <li>
            <p>Вызов <code className="fs-6">Object.entries(obj)</code> возвращает массив пар ключ/значение для <code className="fs-6">obj</code>.</p>
        </li>
        <li>
            <p>На нём вызываем методы массива, например, <code className="fs-6">map</code>.</p>
        </li>
        <li>
            <p>Используем <code className="fs-6">Object.fromEntries(array)</code> на результате, чтобы преобразовать его обратно в объект.</p>
        </li>
    </ol>
    <p>Например, у нас есть объект с ценами, и мы хотели бы их удвоить:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    // преобразовать в массив, затем map, затем fromEntries обратно объект
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8`}
        </code>
    </pre>
    <p>Это может выглядеть сложным на первый взгляд, но становится лёгким для понимания после нескольких раз использования.</p>
    <p>Можно делать и более сложные «однострочные» преобразования таким путём. Важно только сохранять баланс, чтобы код при этом был достаточно простым для понимания.</p>

    </>
    );
}

export default ObjectKeysValuesEntries;