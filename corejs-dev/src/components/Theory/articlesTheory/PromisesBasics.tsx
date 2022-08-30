import * as React from 'react';
import promiseRejectImg from './Promises-img/promise-reject-1.svg';
import promiseResolveImg from './Promises-img/promise-resolve-1.svg';
import promiseResolveRejectImg from './Promises-img/promise-resolve-reject.svg';

const PromisesBasics: React.FC =() => {
    return (
    <>
    <h1>Промисы</h1>
    <p>Представьте, что вы известный певец, которого фанаты постоянно донимают расспросами о предстоящем сингле.</p>
    <p>Чтобы получить передышку, вы обещаете разослать им сингл, когда он будет выпущен. Вы даёте фанатам список, в который они могут записаться. Они могут оставить там свой e-mail, чтобы получить песню, как только она выйдет. И даже больше: если что-то пойдёт не так, например, в студии будет пожар и песню выпустить не выйдет, они также получат уведомление об этом.</p>
    <p>Все счастливы! Вы счастливы, потому что вас больше не донимают фанаты, а фанаты могут больше не беспокоиться, что пропустят новый сингл.</p>
    <p>Это аналогия из реальной жизни для ситуаций, с которыми мы часто сталкиваемся в программировании:</p>
    <ol>
        <li>
            <p>Есть «создающий» код, который делает что-то, что занимает время. Например, загружает данные по сети. В нашей аналогии это – «певец».</p>
        </li>
        <li>
            <p>Есть «потребляющий» код, который хочет получить результат «создающего» кода, когда он будет готов. Он может быть необходим более чем одной функции. Это – «фанаты».</p>
        </li>
        <li>
            <p><strong>Promise</strong> (по англ. promise, будем называть такой объект «промис») – это специальный объект в JavaScript, который связывает «создающий» и «потребляющий» коды вместе. В терминах нашей аналогии – это «список для подписки». «Создающий» код может выполняться сколько потребуется, чтобы получить результат, а промис делает результат доступным для кода, который подписан на него, когда результат готов.</p>
        </li>
    </ol>
    <p>Аналогия не совсем точна, потому что объект <strong>Promise</strong> в JavaScript гораздо сложнее простого списка подписок: он обладает дополнительными возможностями и ограничениями. Но для начала и такая аналогия хороша.</p>
    <p>Синтаксис создания <strong>Promise</strong>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let promise = new Promise(function(resolve, reject) {
    // функция-исполнитель (executor)
    // "певец"
});`}
        </code>
    </pre>
    <p>Функция, переданная в конструкцию <code className="fs-6">new Promise</code>, называется <em>исполнитель</em> (executor). Когда <strong>Promise</strong> создаётся, она запускается автоматически. Она должна содержать «создающий» код, который когда-нибудь создаст результат. В терминах нашей аналогии: исполнитель – это «певец».</p>
    <p>Её аргументы <strong>resolve</strong> и <strong>reject</strong> – это колбэки, которые предоставляет сам JavaScript. Наш код – только внутри исполнителя.</p>
    <p>Когда он получает результат, сейчас или позже – не важно, он должен вызвать один из этих колбэков:</p>
    <ul>
        <li>
            <p><code className="fs-6">resolve(value)</code> — если работа завершилась успешно, с результатом <code className="fs-6">value</code>.</p>
        </li>
        <li>
            <p><code className="fs-6">reject(error)</code> — если произошла ошибка, <code className="fs-6">error</code> – объект ошибки.</p>
        </li>
    </ul>
    <p>Итак, исполнитель запускается автоматически, он должен выполнить работу, а затем вызвать <strong>resolve</strong> или <strong>reject</strong>.</p>
    <p>У объекта <strong>promise</strong>, возвращаемого конструктором <code className="fs-6">new Promise</code>, есть внутренние свойства:</p>
    <ul>
        <li>
            <p><strong>state</strong> («состояние») — вначале "<strong>pending</strong>" («ожидание»), потом меняется на "<strong>fulfilled</strong>" («выполнено успешно») при вызове <strong>resolve</strong> или на "<strong>rejected</strong>" («выполнено с ошибкой») при вызове <strong>reject</strong>.</p>
        </li>
        <li>
            <p><strong>result</strong> («результат») — вначале <code className="fs-6">undefined</code>, далее изменяется на <strong>value</strong> при вызове <code className="fs-6">resolve(value)</code> или на <strong>error</strong> при вызове <code className="fs-6">reject(error)</code>.</p>
        </li>
    </ul>
    <p>Так что исполнитель по итогу переводит <strong>promise</strong> в одно из двух состояний:</p>
    <img className="mx-auto d-block" src={promiseResolveRejectImg} alt="promise resolve and reject"></img>
    <p>Ниже пример конструктора <strong>Promise</strong> и простого исполнителя с кодом, дающим результат с задержкой (через <code className="fs-6">setTimeout</code>):</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let promise = new Promise(function(resolve, reject) {
    // эта функция выполнится автоматически, при вызове new Promise

    // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
    setTimeout(() => resolve("done"), 1000);
});`}
        </code>
    </pre>
    <p>Мы можем наблюдать две вещи, запустив код выше:</p>
    <ol>
        <li>
            <p>Функция-исполнитель запускается сразу же при вызове <strong>new Promise</strong>.</p>
        </li>
        <li>
            <p>Исполнитель получает два аргумента: <strong>resolve</strong> и <strong>reject</strong> — это функции, встроенные в JavaScript, поэтому нам не нужно их писать. Нам нужно лишь позаботиться, чтобы исполнитель вызвал одну из них по готовности.</p>
        </li>
    </ol>
    <p>Спустя одну секунду «обработки» исполнитель вызовет <code className="fs-6">resolve("done")</code>, чтобы передать результат:</p>
    <img className="mx-auto d-block" src={promiseResolveImg} alt="promise resolve"></img>
    <p>Это был пример успешно выполненной задачи, в результате мы получили «успешно выполненный» промис.</p>
    <p>А теперь пример, в котором исполнитель сообщит, что задача выполнена с ошибкой:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let promise = new Promise(function(resolve, reject) {
    // спустя одну секунду будет сообщено, что задача выполнена с ошибкой
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});`}
        </code>
    </pre>
    <img className="mx-auto d-block" src={promiseRejectImg} alt="promise reject"></img>
    <p>Подведём промежуточные итоги: исполнитель выполняет задачу (что-то, что обычно требует времени), затем вызывает <strong>resolve</strong> или <strong>reject</strong>, чтобы изменить состояние соответствующего <strong>Promise</strong>.</p>
    <p>Промис – и успешный, и отклонённый будем называть «завершённым», в отличие от изначального промиса «в ожидании».</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Может быть что-то одно: либо результат, либо ошибка</strong></p>
        <p>Исполнитель должен вызвать что-то одно: <strong>resolve</strong> или <strong>reject</strong>. Состояние промиса может быть изменено только один раз.</p>
        <p>Все последующие вызовы <strong>resolve</strong> и <strong>reject</strong> будут проигнорированы:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
            {`let promise = new Promise(function(resolve, reject) {
    resolve("done");

    reject(new Error("…")); // игнорируется
    setTimeout(() => resolve("…")); // игнорируется
});`}
            </code>
        </pre>
        <p>Идея в том, что задача, выполняемая исполнителем, может иметь только один итог: результат или ошибку.</p>
        <p>Также заметим, что функция <strong>resolve/reject</strong> ожидает только один аргумент (или ни одного). Все дополнительные аргументы будут проигнорированы.</p>
    </div>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Вызывайте <em>reject</em> с объектом <em>Error</em></strong></p>
        <p>В случае, если что-то пошло не так, мы должны вызвать <strong>reject</strong>. Это можно сделать с аргументом любого типа (как и <strong>resolve</strong>), но рекомендуется использовать объект <strong>Error</strong> (или унаследованный от него).</p>
    </div>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Вызов <em>resolve/reject</em> сразу</strong></p>
        <p>Обычно исполнитель делает что-то асинхронное и после этого вызывает <strong>resolve/reject</strong>, то есть через какое-то время. Но это не обязательно, <strong>resolve</strong> или <strong>reject</strong> могут быть вызваны сразу:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
            {`let promise = new Promise(function(resolve, reject) {
    // задача, не требующая времени
    resolve(123); // мгновенно выдаст результат: 123
});`}
            </code>
        </pre>
        <p>Это может случиться, например, когда мы начали выполнять какую-то задачу, но тут же увидели, что ранее её уже выполняли, и результат закеширован.</p>
        <p>Такая ситуация нормальна. Мы сразу получим успешно завершённый <strong>Promise</strong>.</p>
    </div>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Свойства <em>state</em> и <em>result</em> – внутренние</strong></p>
        <p>Свойства <strong>state</strong> и <strong>result</strong> – это внутренние свойства объекта <strong>Promise</strong> и мы не имеем к ним прямого доступа. Для обработки результата следует использовать методы <strong>.then/.catch/.finally</strong>, про них речь пойдёт дальше.</p>
    </div>
    <h2>Потребители: then, catch</h2>
    <p>Объект <strong>Promise</strong> служит связующим звеном между исполнителем («создающим» кодом или «певцом») и функциями-потребителями («фанатами»), которые получат либо результат, либо ошибку. Функции-потребители могут быть зарегистрированы (подписаны) с помощью методов <code className="fs-6">.then</code> и <code className="fs-6">.catch</code>.</p>
    <h3>then</h3>
    <p>Наиболее важный и фундаментальный метод – <code className="fs-6">.then</code>.</p>
    <p>Синтаксис:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`promise.then(
    function(result) { /* обработает успешное выполнение */ },
    function(error) { /* обработает ошибку */ }
);`}
        </code>
    </pre>
    <p>Первый аргумент метода <code className="fs-6">.then</code> – функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», и получает результат.</p>
    <p>Второй аргумент <code className="fs-6">.then</code> – функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой», и получает ошибку.</p>
    <p>Например, вот реакция на успешно выполненный промис:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
});

// resolve запустит первую функцию, переданную в .then
promise.then(
    result => alert(result), // выведет "done!" через одну секунду
    error => alert(error) // не будет запущена
);`}
        </code>
    </pre>
    <p>Выполнилась первая функция.</p>
    <p>А в случае ошибки в промисе – выполнится вторая:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject запустит вторую функцию, переданную в .then
promise.then(
    result => alert(result), // не будет запущена
    error => alert(error) // выведет "Error: Whoops!" спустя одну секунду
);`}
        </code>
    </pre>
    <p>Если мы заинтересованы только в результате успешного выполнения задачи, то в <strong>then</strong> можно передать только одну функцию:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let promise = new Promise(resolve => {
    setTimeout(() => resolve("done!"), 1000);
});

promise.then(alert); // выведет "done!" спустя одну секунду`}
        </code>
    </pre>
    <h3>catch</h3>
    <p>Если мы хотели бы только обработать ошибку, то можно использовать <code className="fs-6">null</code> в качестве первого аргумента: <code className="fs-6">.then(null, errorHandlingFunction)</code>. Или можно воспользоваться методом <code className="fs-6"> .catch(errorHandlingFunction)</code>, который сделает то же самое:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Ошибка!")), 1000);
});

// .catch(f) это то же самое, что promise.then(null, f)
promise.catch(alert); // выведет "Error: Ошибка!" спустя одну секунду`}
        </code>
    </pre>
    <p>Вызов <code className="fs-6"> .catch(f)</code> – это сокращённый, «укороченный» вариант <code className="fs-6">.then(null, f)</code>.</p>
    <h2>Очистка: finally</h2>
    <p>По аналогии с блоком <code className="fs-6">finally</code> из обычного <code className="fs-6">{`try {...} catch {...}`}</code>, у промисов также есть метод <code className="fs-6">finally</code>.</p>
    <p>Вызов <code className="fs-6">.finally(f)</code> похож на <code className="fs-6">.then(f, f)</code>, в том смысле, что <code className="fs-6">f</code> выполнится в любом случае, когда промис завершится: успешно или с ошибкой.</p>
    <p>Идея <code className="fs-6">finally</code> состоит в том, чтобы настроить обработчик для выполнения очистки/доведения после завершения предыдущих операций.</p>
    <p>Например, остановка индикаторов загрузки, закрытие больше не нужных соединений и т.д.</p>
    <p>Думайте об этом как о завершении вечеринки. Независимо от того, была ли вечеринка хорошей или плохой, сколько на ней было друзей, нам все равно нужно (или, по крайней мере, мы должны) сделать уборку после нее.</p>
    <p>Код может выглядеть следующим образом:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`new Promise((resolve, reject) => {
    /* сделать что-то, что займёт время, и после вызвать resolve или может reject */
})
    // выполнится, когда промис завершится, независимо от того, успешно или нет
    .finally(() => остановить индикатор загрузки)
    // таким образом, индикатор загрузки всегда останавливается, прежде чем мы продолжим
    .then(result => показать результат, err => показать ошибку)`}
        </code>
    </pre>
    <p>Обратите внимание, что <code className="fs-6">finally(f)</code> – это не совсем псевдоним <code className="fs-6">then(f,f)</code>, как можно было подумать.</p>
    <p>Есть важные различия:</p>
    <ol>
        <li>
            <p>Обработчик, вызываемый из <code className="fs-6">finally</code>, не имеет аргументов. В <code className="fs-6">finally</code> мы не знаем, как был завершён промис. И это нормально, потому что обычно наша задача – выполнить «общие» завершающие процедуры.</p>
            <p>Пожалуйста, взгляните на приведенный выше пример: как вы можете видеть, обработчик <code className="fs-6">finally</code> не имеет аргументов, а результат promise обрабатывается в следующем обработчике.</p>
        </li>
        <li>
            <p>Обработчик <code className="fs-6">finally</code> «пропускает» результат или ошибку дальше, к последующим обработчикам.</p>
            <p>Например, здесь результат проходит через <code className="fs-6">finally</code> к <code className="fs-6">then</code>:</p>
            <pre className="text-bg-dark px-3 py-3">
                <code className="fs-6">
                {`new Promise((resolve, reject) => {
    setTimeout(() => resolve("value"), 2000);
})
    .finally(() => alert("Промис завершён")) // срабатывает первым
    .then(result => alert(result)); // <-- .then показывает "value"`}
                </code>
            </pre>
            <p>Как вы можете видеть, значение возвращаемое первым промисом, передается через <code className="fs-6">finally</code> к следующему <code className="fs-6">then</code>.</p>
            <p>Это очень удобно, потому что <code className="fs-6">finally</code> не предназначен для обработки результата промиса. Как уже было сказано, это место для проведения общей очистки, независимо от того, каков был результат.</p>
            <p>А здесь ошибка из промиса проходит через <code className="fs-6">finally</code> к <code className="fs-6">catch</code>:</p>
            <pre className="text-bg-dark px-3 py-3">
                <code className="fs-6">
                {`new Promise((resolve, reject) => {
    throw new Error("error");
})
    .finally(() => alert("Промис завершён")) // срабатывает первым
    .catch(err => alert(err));  // <-- .catch показывает ошибку`}
                </code>
            </pre>
        </li>
        <li>
            <p>Обработчик <code className="fs-6">finally</code> также не должен ничего возвращать. Если это так, то возвращаемое значение молча игнорируется.</p>
            <p>Единственным исключением из этого правила является случай, когда обработчик <code className="fs-6">finally</code> выдает ошибку. Затем эта ошибка передается следующему обработчику вместо любого предыдущего результата.</p>
        </li>
    </ol>
    <p>Подведем итог:</p>
    <ul>
        <li>
            <p>Обработчик <code className="fs-6">finally</code> не получает результат предыдущего обработчика (у него нет аргументов). Вместо этого этот результат передается следующему подходящему обработчику.</p>
        </li>
        <li>
            <p>Если обработчик <code className="fs-6">finally</code> возвращает что-то, это игнорируется.</p>
        </li>
        <li>
            <p>Когда <code className="fs-6">finally</code> выдает ошибку, выполнение переходит к ближайшему обработчику ошибок.</p>
        </li>
    </ul>
    <p>Эти функции полезны и заставляют все работать правильно, если мы используем <code className="fs-6">finally</code> так, как предполагается: для общих процедур очистки.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>На завершённых промисах обработчики запускаются сразу</strong></p>
        <p>Если промис в состоянии ожидания, обработчики в <code className="fs-6">.then/catch/finally</code> будут ждать его.</p>
        <p>Иногда может случиться так, что промис уже выполнен, когда мы добавляем к нему обработчик.</p>
        <p>В таком случае эти обработчики просто запускаются немедленно:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
            {`// при создании промиса он сразу переводится в состояние "успешно завершён"
    let promise = new Promise(resolve => resolve("готово!"));

    promise.then(alert); // готово! (выведется сразу)`}
            </code>
        </pre>
    </div>
    <h2>Пример: loadScript</h2>
    <p>Теперь рассмотрим несколько практических примеров того, как промисы могут облегчить нам написание асинхронного кода.</p>
    <p>У нас есть функция <code className="fs-6">loadScript</code> для загрузки скрипта из предыдущей главы.</p>
    <p>Давайте вспомним, как выглядел вариант с колбэками:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(\`Ошибка загрузки скрипта \${src}\`));

    document.head.append(script);
}`}
        </code>
    </pre>
    <p>Теперь перепишем её, используя <code className="fs-6">Promise</code>.</p>
    <p>Новой функции <code className="fs-6">loadScript</code> более не нужен аргумент <strong>callback</strong>. Вместо этого она будет создавать и возвращать объект <strong>Promise</strong>, который перейдет в состояние «успешно завершён», когда загрузка закончится. Внешний код может добавлять обработчики («подписчиков»), используя <code className="fs-6">.then</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(\`Ошибка загрузки скрипта \${src}\`));

        document.head.append(script);
    });
}`}
        </code>
    </pre>
    <p>Применение:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
    script => alert(\`\${script.src} загружен!\`),
    error => alert(\`Ошибка: \${error.message}\`)
);

promise.then(script => alert('Ещё один обработчик...'));`}
        </code>
    </pre>
    <p>Сразу заметно несколько преимуществ перед подходом с использованием колбэков:</p>
    <table className="table table-bordered text-center">
        <thead>
            <tr>
                <th scope="col"><p><strong>Промисы</strong></p></th>
                <th scope="col"><p><strong>Колбэки</strong></p></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><p>Промисы позволяют делать вещи в естественном порядке. Сперва мы запускаем <code className="fs-6">loadScript(script)</code>, и затем (<code className="fs-6">.then</code>) мы пишем, что делать с результатом.</p></td>
                <td><p>У нас должна быть функция <code className="fs-6">callback</code>c на момент вызова <code className="fs-6">loadScript(script, callback)</code>. Другими словами, нам нужно знать что делать с результатом до того, как вызовется <code className="fs-6">loadScript</code>.</p></td>
            </tr>
            <tr>
                <td><p>Мы можем вызывать <code className="fs-6">.then</code> у <strong>Promise</strong> столько раз, сколько захотим. Каждый раз мы добавляем нового «фаната», новую функцию-подписчика в «список подписок».</p></td>
                <td><p>Колбэк может быть только один.</p></td>
            </tr>
        </tbody>
    </table>
    <p>Таким образом, промисы позволяют улучшить порядок кода и дают нам гибкость.</p>

    </>
    );
}

export default PromisesBasics;