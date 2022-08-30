import * as React from 'react';

const Promisification: React.FC =() => {
    return (
    <>

    <h1>Промисификация</h1>
    <p>Промисификация – это длинное слово для простого преобразования. Мы берём функцию, которая принимает колбэк и меняем её, чтобы она вместо этого возвращала промис.</p>
    <p>Такие преобразования часто необходимы в реальной жизни, так как многие функции и библиотеки основаны на колбэках, а использование промисов более удобно, поэтому есть смысл «промисифицировать» их.</p>
    <p>Например, у нас есть <code className="fs-6">loadScript(src, callback)</code> из главы <strong>Введение: колбэки</strong>.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(\`Ошибка загрузки скрипта \${src}\`));

    document.head.append(script);
}

// использование:
// loadScript('path/script.js', (err, script) => {...})`}
        </code>
    </pre>
    <p>Давайте промисифицируем её. Новая функция <code className="fs-6">loadScriptPromise(src)</code> будет делать то же самое, но будет принимать только <code className="fs-6">src</code> (не <code className="fs-6">callback</code>) и возвращать промис.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let loadScriptPromise = function(src) {
    return new Promise((resolve, reject) => {
        loadScript(src, (err, script) => {
            if (err) reject(err)
            else resolve(script);
        });
    })
}

// использование:
// loadScriptPromise('path/script.js').then(...)`}
        </code>
    </pre>
    <p>Теперь <code className="fs-6">loadScriptPromise</code> хорошо вписывается в код, основанный на промисах.</p>
    <p>Как видно, она передаёт всю работу исходной функции <code className="fs-6">loadScript</code>, предоставляя ей колбэк, по вызову которого происходит <code className="fs-6">resolve/reject</code> промиса.</p>
    <p>На практике нам, скорее всего, понадобится промисифицировать не одну функцию, поэтому имеет смысл сделать для этого специальную «функцию-помощник».</p>
    <p>Мы назовём её <code className="fs-6">promisify(f)</code> – она принимает функцию для промисификации <code className="fs-6">f</code> и возвращает функцию-обёртку.</p>
    <p>Эта функция-обёртка делает то же самое, что и код выше: возвращает промис и передаёт вызов оригинальной <code className="fs-6">f</code>, отслеживая результат в своём колбэке:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`function promisify(f) {
    return function (...args) { // возвращает функцию-обёртку
        return new Promise((resolve, reject) => {
            function callback(err, result) { // наш специальный колбэк для f
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }

            args.push(callback); // добавляем колбэк в конец аргументов f

            f.call(this, ...args); // вызываем оригинальную функцию
        });
    };
};

// использование:
let loadScriptPromise = promisify(loadScript);
loadScriptPromise(...).then(...);`}
        </code>
    </pre>
    <p>Здесь мы предполагаем, что исходная функция ожидает колбэк с двумя аргументами <code className="fs-6">(err, result)</code>. Это то, с чем мы чаще всего сталкиваемся. Тогда наш колбэк – в правильном формате, и <code className="fs-6">promisify</code> отлично работает для такого случая.</p>
    <p>Но что, если исходная <code className="fs-6">f</code> ожидает колбэк с большим количеством аргументов <code className="fs-6">callback(err, res1, res2, ...)</code>?</p>
    <p>Ниже описана улучшенная функция <code className="fs-6">promisify</code>: при вызове <code className="fs-6">promisify(f, true)</code> результатом промиса будет массив результатов <strong>[res1, res2, ...]</strong>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// promisify(f, true), чтобы получить массив результатов
function promisify(f, manyArgs = false) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            function callback(err, ...results) { // наш специальный колбэк для f
                if (err) {
                    reject(err);
                } else {
                    // делаем resolve для всех results колбэка, если задано manyArgs
                    resolve(manyArgs ? results : results[0]);
                }
            }

            args.push(callback);

            f.call(this, ...args);
        });
    };
};

// использование:
f = promisify(f, true);
f(...).then(arrayOfResults => ..., err => ...)`}
        </code>
    </pre>
    <p>Для более экзотических форматов колбэка, например без <code className="fs-6">err: callback(result)</code>, мы можем промисифицировать функции без помощника, «вручную».</p>
    <p>Также существуют модули с более гибкой промисификацией, например, <strong>es6-promisify</strong> или встроенная функция <code className="fs-6">util.promisify</code> в Node.js.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>На заметку:</strong></p>
        <p>Промисификация – это отличный подход, особенно, если вы будете использовать <code className="fs-6">async/await</code> (см. следующую главу), но она не является тотальной заменой любых колбэков.</p>
        <p>Помните, промис может иметь только один результат, но колбэк технически может вызываться сколько угодно раз.</p>
        <p>Поэтому промисификация используется для функций, которые вызывают колбэк только один раз. Последующие вызовы колбэка будут проигнорированы.</p>
    </div>

    </>
    );
}

export default Promisification;