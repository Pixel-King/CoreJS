import * as React from 'react';
import promiseQueueImg from './Promises-img/promiseQueue.svg';

const Microtasks: React.FC =() => {
    return (
    <>
    
    <h1>Микрозадачи</h1>
    <p>Обработчики промисов <code className="fs-6">.then</code>/<code className="fs-6">.catch</code>/<code className="fs-6">.finally</code> всегда асинхронны.</p>
    <p>Даже когда промис сразу же выполнен, код в строках ниже <code className="fs-6">.then</code>/<code className="fs-6">.catch</code>/<code className="fs-6">.finally</code> будет запущен до этих обработчиков.</p>
    <p>Вот пример:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let promise = Promise.resolve();

promise.then(() => alert("промис выполнен"));

alert("код выполнен"); // этот alert показывается первым`}
        </code>
    </pre>
    <p>Если вы запустите его, сначала вы увидите <em>код выполнен</em>, а потом <em>промис выполнен</em>.</p>
    <p>Это странно, потому что промис определённо был выполнен с самого начала.</p>
    <p>Почему <code className="fs-6">.then</code> срабатывает позже? Что происходит?</p>
    <h2>Очередь микрозадач</h2>
    <p>Асинхронные задачи требуют правильного управления. Для этого стандарт предусматривает внутреннюю очередь <strong>PromiseJobs</strong>, более известную как «<em>очередь микрозадач</em> (microtask queue)» (термин V8).</p>
    <p>Как сказано в <a href="https://tc39.github.io/ecma262/#sec-jobs-and-job-queues">спецификации</a>:</p>
    <ul>
        <li>
            <p>Очередь определяется как первым-пришёл-первым-ушёл (FIFO): задачи, попавшие в очередь первыми, выполняются тоже первыми.</p>
        </li>
        <li>
            <p>Выполнение задачи происходит только в том случае, если ничего больше не запущено.</p>
        </li>
    </ul>
    <p>Или, проще говоря, когда промис выполнен, его обработчики <code className="fs-6">.then</code>/<code className="fs-6">catch</code>/<code className="fs-6">finally</code> попадают в очередь. Они пока не выполняются. Движок JavaScript берёт задачу из очереди и выполняет её, когда он освободится от выполнения текущего кода.</p>
    <p>Вот почему сообщение «код выполнен» в примере выше будет показано первым.</p>
    <img className="mx-auto d-block" src={promiseQueueImg} alt="promise queue"></img>
    <p>Обработчики промисов всегда проходят через эту внутреннюю очередь.</p>
    <p>Если есть цепочка с несколькими <code className="fs-6">.then</code>/<code className="fs-6">catch</code>/<code className="fs-6">finally</code>, то каждый из них выполняется асинхронно. То есть сначала ставится в очередь, а потом выполняется, когда выполнение текущего кода завершено и добавленные ранее в очередь обработчики выполнены.</p>
    <p>Но что если порядок имеет значение для нас? Как мы можем вывести <em>код выполнен</em> после <em>промис выполнен</em>?</p>
    <p>Легко, используя <code className="fs-6">.then</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`Promise.resolve()
    .then(() => alert("промис выполнен!"))
    .then(() => alert("код выполнен"));`}
        </code>
    </pre>
    <p>Теперь порядок стал таким, как было задумано.</p>
    <h2>Необработанные ошибки</h2>
    <p>Теперь мы можем описать, как именно JavaScript понимает, что ошибка не обработана.</p>
    <p><strong>"Необработанная ошибка" возникает в случае, если ошибка промиса не обрабатывается в конце очереди микрозадач.</strong></p>
    <p>Обычно, если мы ожидаем ошибку, мы добавляем <code className="fs-6">.catch</code> в конец цепочки промисов, чтобы обработать её:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let promise = Promise.reject(new Error("Ошибка в промисе!"));
promise.catch(err => alert('поймана!'));

// не запустится, ошибка обработана
window.addEventListener('unhandledrejection', event => {
    alert(event.reason);
});`}
        </code>
    </pre>
    <p>…Но если мы забудем добавить <code className="fs-6">.catch</code>, то, когда очередь микрозадач опустеет, движок сгенерирует событие:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let promise = Promise.reject(new Error("Ошибка в промисе!"));

// Ошибка в промисе!
window.addEventListener('unhandledrejection', event => alert(event.reason));`}
        </code>
    </pre>
    <p>А что, если мы поймаем ошибку, но позже? Вот так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let promise = Promise.reject(new Error("Ошибка в промисе!"));

setTimeout(() => promise.catch(err => alert('поймана')), 1000);

// Ошибка в промисе!
window.addEventListener('unhandledrejection', event => alert(event.reason));`}
        </code>
    </pre>
    <p>Теперь, при запуске, мы сначала увидим «Ошибка в промисе!», а затем «поймана».</p>
    <p>Если бы мы не знали про очередь микрозадач, то могли бы удивиться: «Почему сработал обработчик <strong>unhandledrejection</strong>? Мы же поймали ошибку!».</p>
    <p>Но теперь мы понимаем, что событие <strong>unhandledrejection</strong> возникает, когда очередь микрозадач завершена: движок проверяет все промисы и, если какой-либо из них в состоянии <strong>«rejected»</strong>, то генерируется это событие.</p>
    <p>В примере выше <code className="fs-6">.catch</code>, добавленный в <code className="fs-6">setTimeout</code>, также срабатывает, но позже, уже после возникновения <strong>unhandledrejection</strong>, так что это ни на что не влияет.</p>
    <h2>Итого</h2>
    <p>Обработка промисов всегда асинхронная, т.к. все действия промисов проходят через внутреннюю очередь «promise jobs», так называемую «очередь микрозадач (microtask queue)» (термин v8).</p>
    <p>Таким образом, обработчики <code className="fs-6">.then</code>/<code className="fs-6">catch</code>/<code className="fs-6">finally</code> вызываются после выполнения текущего кода.</p>
    <p>Если нам нужно гарантировать выполнение какого-то кода после <code className="fs-6">.then</code>/<code className="fs-6">catch</code>/<code className="fs-6">finally</code>, то лучше всего добавить его вызов в цепочку <code className="fs-6">.then</code>.</p>

    </>
    );
}

export default Microtasks;