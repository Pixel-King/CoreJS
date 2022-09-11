import * as React from 'react';

const PromiseApi: React.FC =() => {
    return (
    <>
    
    <h1>Promise API</h1>
    <p>В классе <strong>Promise</strong> есть 6 статических методов. Давайте познакомимся с ними.</p>
    <h2>Promise.all</h2>
    <p>Допустим, нам нужно запустить множество промисов параллельно и дождаться, пока все они выполнятся. Например, параллельно загрузить несколько файлов и обработать результат, когда он готов.</p>
    <p>Для этого как раз и пригодится <code className="fs-6">Promise.all</code>.</p>
    <p>Синтаксис:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let promise = Promise.all(iterable);
        </code>
    </pre>
    <p>Метод <code className="fs-6">Promise.all</code> принимает массив промисов (может принимать любой перебираемый объект, но обычно используется массив) и возвращает новый промис.</p>
    <p>Новый промис завершится, когда завершится весь переданный список промисов, и его результатом будет массив их результатов.</p>
    <p>Например, <code className="fs-6">Promise.all</code>, представленный ниже, выполнится спустя 3 секунды, его результатом будет массив <strong>[1, 2, 3]</strong>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); // когда все промисы выполнятся, результат будет 1,2,3
// каждый промис даёт элемент массива`}
        </code>
    </pre>
    <p>Обратите внимание, что порядок элементов массива в точности соответствует порядку исходных промисов. Даже если первый промис будет выполняться дольше всех, его результат всё равно будет первым в массиве.</p>
    <p>Часто применяемый трюк – пропустить массив данных через map-функцию, которая для каждого элемента создаст задачу-промис, и затем обернуть получившийся массив в <code className="fs-6">Promise.all</code>.</p>
    <p>Например, если у нас есть массив ссылок, то мы можем загрузить их вот так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

// Преобразуем каждый URL в промис, возвращённый fetch
let requests = urls.map(url => fetch(url));

// Promise.all будет ожидать выполнения всех промисов
Promise.all(requests)
    .then(responses => responses.forEach(
        response => alert(\`\${response.url}: \${response.status}\`)
  ));`}
        </code>
    </pre>
    <p>А вот пример побольше, с получением информации о пользователях GitHub по их логинам из массива (мы могли бы получать массив товаров по их идентификаторам, логика та же):</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(\`https://api.github.com/users/\${name}\`));

Promise.all(requests)
    .then(responses => {
        // все промисы успешно завершены
        for(let response of responses) {
             alert(\`\${response.url}: \${response.status}\`); // покажет 200 для каждой ссылки
        }

        return responses;
    })
    // преобразовать массив ответов response в response.json(),
    // чтобы прочитать содержимое каждого
    .then(responses => Promise.all(responses.map(r => r.json())))
    // все JSON-ответы обработаны, users - массив с результатами
    .then(users => users.forEach(user => alert(user.name)));`}
        </code>
    </pre>
    <p><strong>Если любой из промисов завершится с ошибкой, то промис, возвращённый <code className="fs-6">Promise.all</code>, немедленно завершается с этой ошибкой.</strong></p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(alert); // Error: Ошибка!`}
        </code>
    </pre>
    <p>Здесь второй промис завершится с ошибкой через 2 секунды. Это приведёт к немедленной ошибке в <code className="fs-6">Promise.all</code>, так что выполнится <code className="fs-6">.catch</code>: ошибка этого промиса становится ошибкой всего <code className="fs-6">Promise.all</code>.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>В случае ошибки, остальные результаты игнорируются</strong></p>
        <p>Если один промис завершается с ошибкой, то весь <code className="fs-6">Promise.all</code> завершается с ней, полностью забывая про остальные промисы в списке. Их результаты игнорируются.</p>
        <p>Например, если сделано несколько вызовов <strong>fetch</strong>, как в примере выше, и один не прошёл, то остальные будут всё ещё выполняться, но <code className="fs-6">Promise.all</code> за ними уже не смотрит. Скорее всего, они так или иначе завершатся, но их результаты будут проигнорированы.</p>
        <p><code className="fs-6">Promise.all</code> ничего не делает для их отмены, так как в промисах вообще нет концепции «отмены». В главе Fetch: прерывание запроса мы рассмотрим AbortController, который помогает с этим, но он не является частью Promise API.</p>
    </div>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong><code className="fs-6">Promise.all(iterable)</code> разрешает передавать не-промисы в iterable (перебираемом объекте)</strong></p>
        <p>Обычно,<code className="fs-6"> Promise.all(...)</code> принимает перебираемый объект промисов (чаще всего массив). Но если любой из этих объектов не является промисом, он передаётся в итоговый массив «как есть». Например, здесь результат: <strong>[1, 2, 3]</strong></p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
            {`Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000)
    }),
    2,
    3
]).then(alert); // 1, 2, 3`}
            </code>
        </pre>
        <p>Таким образом, мы можем передавать уже готовые значения, которые не являются промисами, в <code className="fs-6">Promise.all</code>, иногда это бывает удобно.</p>
    </div>
    <h2>Promise.allSettled</h2>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Новая возможность</strong></p>
        <p>Эта возможность была добавлена в язык недавно. В старых браузерах может понадобиться <a href="https://learn.javascript.ru/polyfills">полифил</a>.</p>
    </div>
    <p>Синтаксис:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let promise = Promise.allSettled(iterable);
        </code>
    </pre>
    <p><code className="fs-6">Promise.all</code> завершается с ошибкой, если она возникает в любом из переданных промисов. Это подходит для ситуаций «всё или ничего», когда нам нужны все результаты для продолжения:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`Promise.all([
    fetch('/template.html'),
    fetch('/style.css'),
    fetch('/data.json')
]).then(render); // методу render нужны результаты всех fetch`}
        </code>
    </pre>
    <p>Метод <code className="fs-6">Promise.allSettled</code> всегда ждёт завершения всех промисов. В массиве результатов будет</p>
    <ul>
        <li>
            <p><code className="fs-6">{`{status:"fulfilled", value:результат}`}</code> для успешных завершений,</p>
        </li>
        <li>
            <p><code className="fs-6">{`{status:"rejected", reason:ошибка}`}</code> для ошибок.</p>
        </li>
    </ul>
    <p>Например, мы хотели бы загрузить информацию о множестве пользователей. Даже если в каком-то запросе ошибка, нас всё равно интересуют остальные.</p>
    <p>Используем для этого <code className="fs-6">Promise.allSettled</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => { // (*)
        results.forEach((result, num) => {
            if (result.status == "fulfilled") {
                alert(\`\${urls[num]}: \${result.value.status}\`);
            }
            if (result.status == "rejected") {
                alert(\`\${urls[num]}: \${result.reason}\`);
            }
        });
  });`}
        </code>
    </pre>
    <p>Массив <code className="fs-6">results</code> в строке (*) будет таким:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`[
    {status: 'fulfilled', value: ...объект ответа...},
    {status: 'fulfilled', value: ...объект ответа...},
    {status: 'rejected', reason: ...объект ошибки...}
]`}
        </code>
    </pre>
    <p>То есть, для каждого промиса у нас есть его статус и значение/ошибка.</p>
    <h3>Полифил</h3>
    <p>Если браузер не поддерживает <code className="fs-6">Promise.allSettled</code>, для него легко сделать полифил:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`if(!Promise.allSettled) {
    Promise.allSettled = function(promises) {
        return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
            status: 'fulfilled',
            value: value
        }), error => ({
            status: 'rejected',
            reason: error
        }))));
    };
}`}
        </code>
    </pre>
    <p>В этом коде <code className="fs-6">promises.map</code> берёт аргументы, превращает их в промисы (на всякий случай) и добавляет каждому обработчик <code className="fs-6">.then</code>.</p>
    <p>Этот обработчик превращает успешный результат <strong>value</strong> в <code className="fs-6">{`{state:'fulfilled', value: value}`}</code>, а ошибку error в <code className="fs-6">{`{state:'rejected', reason: error}`}</code>. Это как раз и есть формат результатов <code className="fs-6">Promise.allSettled</code>.</p>
    <p>Затем мы можем использовать <code className="fs-6">Promise.allSettled</code>, чтобы получить результаты всех промисов, даже если при выполнении какого-то возникнет ошибка.</p>
    <h2>Promise.race</h2>
    <p>Метод очень похож на <code className="fs-6">Promise.all</code>, но ждёт только первый выполненный промис, из которого берёт результат (или ошибку).</p>
    <p>Синтаксис:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        let promise = Promise.race(iterable);
        </code>
    </pre>
    <p>Например, тут результат будет <strong>1</strong>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1`}
        </code>
    </pre>
    <p>Быстрее всех выполнился первый промис, он и дал результат. После этого остальные промисы игнорируются.</p>
    <h2>Promise.any</h2>
    <p>Метод очень похож на <code className="fs-6">Promise.race</code>, но ждёт только <em>первый успешно выполненный</em> промис, из которого берёт результат.</p>
    <p>Если ни один из переданных промисов не завершится успешно, тогда возвращённый объект <strong>Promise</strong> будет отклонён с помощью <strong>AggregateError</strong> – специального объекта ошибок, который хранит все ошибки промисов в своём свойстве <code className="fs-6">errors</code>.</p>
    <p>Синтаксис:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        let promise = Promise.any(iterable);
        </code>
    </pre>
    <p>Например, здесь, результатом будет <strong>1</strong>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1`}
        </code>
    </pre>
    <p>Первый промис в этом примере был самым быстрым, но он был отклонён, поэтому результатом стал второй. После того, как первый успешно выполненный промис «выиграет гонку», все дальнейшие результаты будут проигнорированы.</p>
    <p>Вот пример, в котором все промисы отклоняются:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ещё одна ошибка!")), 2000))
]).catch(error => {
    console.log(error.constructor.name); // AggregateError
    console.log(error.errors[0]); // Error: Ошибка!
    console.log(error.errors[1]); // Error: Ещё одна ошибка!
});`}
        </code>
    </pre>
    <p>Как вы можете видеть, объекты ошибок для отклонённых промисов доступны в свойстве <code className="fs-6">errors</code> объекта <strong>AggregateError</strong>.</p>
    <h2>Promise.resolve/reject</h2>
    <p>Методы <code className="fs-6">Promise.resolve</code> и <code className="fs-6">Promise.reject</code> редко используются в современном коде, так как синтаксис <code className="fs-6">async/await</code> делает их, в общем-то, не нужными.</p>
    <p>Мы рассмотрим их здесь для полноты картины, а также для тех, кто по каким-то причинам не может использовать <code className="fs-6">async/await</code>.</p>
    <h3>Promise.resolve</h3>
    <ul>
        <li>
            <p><code className="fs-6">Promise.resolve(value)</code> создаёт успешно выполненный промис с результатом <strong>value</strong>.</p>
        </li>
    </ul>
    <p>То же самое, что:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let promise = new Promise(resolve => resolve(value));`}
        </code>
    </pre>
    <p>Этот метод используют для совместимости: когда ожидается, что функция возвратит именно промис.</p>
    <p>Например, функция <code className="fs-6">loadCached</code> ниже загружает URL и запоминает (кеширует) его содержимое. При будущих вызовах с тем же URL он тут же читает предыдущее содержимое из кеша, но использует <code className="fs-6">Promise.resolve</code>, чтобы сделать из него промис, для того, чтобы возвращаемое значение всегда было промисом:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let cache = new Map();

function loadCached(url) {
    if (cache.has(url)) {
        return Promise.resolve(cache.get(url)); // (*)
    }

    return fetch(url)
        .then(response => response.text())
        .then(text => {
            cache.set(url,text);
            return text;
        });
}`}
        </code>
    </pre>
    <p>Мы можем писать <code className="fs-6">loadCached(url).then(…)</code>, потому что функция <code className="fs-6">loadCached</code> всегда возвращает промис. Мы всегда можем использовать <code className="fs-6">.then</code> после <code className="fs-6">loadCached</code>. Это и есть цель использования <code className="fs-6">Promise.resolve</code> в строке (*).</p>
    <p>Promise.reject</p>
    <ul>
        <li>
            <p><code className="fs-6">Promise.reject(error)</code> создаёт промис, завершённый с ошибкой <strong>error</strong>.</p>
        </li>
    </ul>
    <p>То же самое, что:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let promise = new Promise((resolve, reject) => reject(error));`}
        </code>
    </pre>
    <p>На практике этот метод почти никогда не используется.</p>
    <h2>Итого</h2>
    <p>Мы ознакомились с пятью статическими методами класса <strong>Promise</strong>:</p>
    <ol>
        <li>
            <p><code className="fs-6">Promise.all(promises)</code> – ожидает выполнения всех промисов и возвращает массив с результатами. Если любой из указанных промисов вернёт ошибку, то результатом работы <code className="fs-6">Promise.all</code> будет эта ошибка, результаты остальных промисов будут игнорироваться.</p>
        </li>
        <li>
            <p><code className="fs-6">Promise.allSettled(promises)</code> (добавлен недавно) – ждёт, пока все промисы завершатся и возвращает их результаты в виде массива с объектами, у каждого объекта два свойства:</p>
            <ul>
                <li>
                    <p><code className="fs-6">status: "fulfilled"</code>, если выполнен успешно или <code className="fs-6">"rejected"</code>, если ошибка,</p>
                </li>
                <li>
                    <p><strong>value</strong> – результат, если успешно или <strong>reason</strong> – ошибка, если нет.</p>
                </li>
            </ul>
        </li>
        <li>
            <p><code className="fs-6">Promise.race(promises)</code> – ожидает <em>первый выполненный</em> промис, который становится его результатом, остальные игнорируются.</p>
        </li>
        <li>
            <p><code className="fs-6">Promise.any(promises)</code> (добавлен недавно) – ожидает первый успешно выполненный промис, который становится его результатом, остальные игнорируются. Если все переданные промисы отклонены, <strong>AggregateError</strong> становится ошибкой <code className="fs-6">Promise.any</code>.</p>
        </li>
        <li>
            <p><code className="fs-6">Promise.resolve(value)</code> – возвращает успешно выполнившийся промис с результатом <strong>value</strong>.</p>
        </li>
        <li>
            <p><code className="fs-6">Promise.reject(error)</code> – возвращает промис с ошибкой <strong>error</strong>.</p>
        </li>
    </ol>
    <p>Из всех перечисленных методов, самый часто используемый – это, пожалуй, <code className="fs-6">Promise.all</code>.</p>

    </>
    );
}

export default PromiseApi;