import * as React from 'react';

const DynamicImport: React.FC =() => {
    return (
    <>

    <h1>Динамические импорты</h1>
    <p>Инструкции экспорта и импорта, которые мы рассматривали в предыдущей главе, называются «статическими». Синтаксис у них весьма простой и строгий.</p>
    <p>Во-первых, мы не можем динамически задавать никакие из параметров import.</p>
    <p>Путь к модулю должен быть строковым примитивом и не может быть вызовом функции. Вот так работать не будет:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`import ... from getModuleName(); // Ошибка, должна быть строка`}
        </code>
    </pre>
    <p>Во-вторых, мы не можем делать импорт в зависимости от условий или в процессе выполнения.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`if(...) {
    import ...; // Ошибка, запрещено
}

{
    import ...; // Ошибка, мы не можем ставить импорт в блок
}`}
        </code>
    </pre>
    <p>Всё это следствие того, что цель директив <code className="fs-6">import/export</code> – задать костяк структуры кода. Благодаря им она может быть проанализирована, модули могут быть собраны в один файл специальными инструментами, а неиспользуемые экспорты удалены. Это возможно только благодаря тому, что всё статично.</p>
    <p>Но как мы можем импортировать модуль динамически, по запросу?</p>
    <h2>Выражение import()</h2>
    <p>Выражение <code className="fs-6">import(module)</code> загружает модуль и возвращает промис, результатом которого становится объект модуля, содержащий все его экспорты.</p>
    <p>Использовать его мы можем динамически в любом месте кода, например, так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let modulePath = prompt("Какой модуль загружать?");

import(modulePath)
    .then(obj => <объект модуля>)
    .catch(err => <ошибка загрузки, например если нет такого модуля>)`}
        </code>
    </pre>
    <p>Или если внутри асинхронной функции, то можно <code className="fs-6">let module = await import(modulePath)</code>.</p>
    <p>Например, если у нас есть такой модуль <code className="fs-6">say.js</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// 📁 say.js
export function hi() {
    alert(\`Привет\`);
}

export function bye() {
    alert(\`Пока\`);
}`}
        </code>
    </pre>
    <p>…То динамический импорт может выглядеть так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let {hi, bye} = await import('./say.js');

hi();
bye();`}
        </code>
    </pre>
    <p>А если в <code className="fs-6">say.js</code> указан экспорт по умолчанию:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// 📁 say.js
export default function() {
    alert("Module loaded (export default)!");
}`}
        </code>
    </pre>
    <p>…То для доступа к нему нам следует взять свойство <code className="fs-6">default</code> объекта модуля:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let obj = await import('./say.js');
let say = obj.default;
// или, одной строкой: let {default: say} = await import('./say.js');

say();`}
        </code>
    </pre>
    <p>Вот полный пример: <a href="https://plnkr.co/edit/FW9PulnQJs2WvRS4?p=preview&preview">песочница</a>.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>На заметку:</strong></p>
        <p>Динамический импорт работает в обычных скриптах, он не требует указания <code className="fs-6">script type="module"</code>.</p>
    </div>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>На заметку:</strong></p>
        <p>Хотя <code className="fs-6">import()</code> и выглядит похоже на вызов функции, на самом деле это специальный синтаксис, так же, как, например, <code className="fs-6">super()</code>.</p>
        <p>Так что мы не можем скопировать <code className="fs-6">import</code> в другую переменную или вызвать при помощи <code className="fs-6">.call/apply</code>. Это не функция.</p>
    </div>

    </>
    );
}

export default DynamicImport;