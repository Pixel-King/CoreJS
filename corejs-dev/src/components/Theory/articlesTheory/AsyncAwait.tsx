import * as React from 'react';

const AsyncAwait: React.FC =() => {
    return (
    <>

    <h1>Async/await</h1>
    <p>Существует специальный синтаксис для работы с промисами, который называется «async/await». Он удивительно прост для понимания и использования.</p>
    <h2>Асинхронные функции</h2>
    <p>Начнём с ключевого слова <code className="fs-6">async</code>. Оно ставится перед функцией, вот так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`async function f() {
    return 1;
}`}
        </code>
    </pre>
    <p>У слова <code className="fs-6">async</code> один простой смысл: эта функция всегда возвращает промис. Значения других типов оборачиваются в завершившийся успешно промис автоматически.</p>
    <p>Например, эта функция возвратит выполненный промис с результатом <strong>1</strong>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`async function f() {
    return 1;
}

f().then(alert); // 1`}
        </code>
    </pre>
    <p>Можно и явно вернуть промис, результат будет одинаковым:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`async function f() {
    return Promise.resolve(1);
}

f().then(alert); // 1`}
        </code>
    </pre>
    <p>Так что ключевое слово <code className="fs-6">async</code> перед функцией гарантирует, что эта функция в любом случае вернёт промис. Согласитесь, достаточно просто? Но это ещё не всё. Есть другое ключевое слово – <code className="fs-6">await</code>, которое можно использовать только внутри <code className="fs-6">async</code>-функций.</p>
    <h2>Await</h2>
    <p>Синтаксис:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// работает только внутри async–функций
let value = await promise;`}
        </code>
    </pre>
    <p>Ключевое слово <code className="fs-6">await</code> заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от <code className="fs-6">await</code> не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.</p>
    <p>В этом примере промис успешно выполнится через 1 секунду:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("готово!"), 1000)
    });

    let result = await promise; // будет ждать, пока промис не выполнится (*)

    alert(result); // "готово!"
}

f();`}
        </code>
    </pre>
    <p>В данном примере выполнение функции остановится на строке (*) до тех пор, пока промис не выполнится. Это произойдёт через секунду после запуска функции. После чего в переменную <code className="fs-6">result</code> будет записан результат выполнения промиса, и браузер отобразит alert-окно «готово!».</p>
    <p>Обратите внимание, хотя <code className="fs-6">await</code> и заставляет JavaScript дожидаться выполнения промиса, это не отнимает ресурсов процессора. Пока промис не выполнится, JS-движок может заниматься другими задачами: выполнять прочие скрипты, обрабатывать события и т.п.</p>
    <p>По сути, это просто «синтаксический сахар» для получения результата промиса, более наглядный, чем <code className="fs-6">promise.then</code>.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong><code className="fs-6">await</code> нельзя использовать в обычных функциях</strong></p>
        <p>Если мы попробуем использовать <code className="fs-6">await</code> внутри функции, объявленной без <code className="fs-6">async</code>, получим синтаксическую ошибку:</p>
        <pre>
            <code className="fs-6">
            {`function f() {
    let promise = Promise.resolve(1);
    let result = await promise; // SyntaxError
}`}
            </code>
        </pre>
        <p>Ошибки не будет, если мы укажем ключевое слово <code className="fs-6">async</code> перед объявлением функции. Как было сказано раньше, <code className="fs-6">await</code> можно использовать только внутри <code className="fs-6">async</code>–функций.</p>
    </div>
    <p>Давайте перепишем пример <code className="fs-6">showAvatar()</code> из раздела <a target='_blank' href="/theory/articlesTheory/PromiseChaining">Цепочка промисов с помощью</a> <code className="fs-6">async/await</code>:</p>
    <ol>
        <li>
            <p>Нам нужно заменить вызовы <code className="fs-6">.then</code> на <code className="fs-6">await</code>.</p>
        </li>
        <li>
            <p>И добавить ключевое слово <code className="fs-6">async</code> перед объявлением функции.</p>
        </li>
    </ol>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`async function showAvatar() {

    // запрашиваем JSON с данными пользователя
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();

    // запрашиваем информацию об этом пользователе из github
    let githubResponse = await fetch(\`https://api.github.com/users/\${user.name}\`);
    let githubUser = await githubResponse.json();

    // отображаем аватар пользователя
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    // ждём 3 секунды и затем скрываем аватар
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;
}

showAvatar();`}
        </code>
    </pre>
    <p>Получилось очень просто и читаемо, правда? Гораздо лучше, чем раньше.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong><code className="fs-6">await</code> нельзя использовать на верхнем уровне вложенности</strong></p>
        <p>Программисты, узнав об <code className="fs-6">await</code>, часто пытаются использовать эту возможность на верхнем уровне вложенности (вне тела функции). Но из-за того, что <code className="fs-6">await</code> работает только внутри <code className="fs-6">async</code>–функций, так сделать не получится:</p>
        <pre>
            <code className="fs-6">
            {`// SyntaxError на верхнем уровне вложенности
let response = await fetch('/article/promise-chaining/user.json');
let user = await response.json();`}
            </code>
        </pre>
        <p>Можно обернуть этот код в анонимную <code className="fs-6">async</code>–функцию, тогда всё заработает:</p>
        <pre>
            <code className="fs-6">
            {`(async () => {
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
    ...
})();`}
            </code>
        </pre>
    </div>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong><code className="fs-6">await</code> работает с «thenable»–объектами</strong></p>
        <p>Как и <code className="fs-6">promise.then</code>, <code className="fs-6">await</code> позволяет работать с промис–совместимыми объектами. Идея в том, что если у объекта можно вызвать метод then, этого достаточно, чтобы использовать его с <code className="fs-6">await</code>.</p>
        <p>В примере ниже, экземпляры класса <code className="fs-6">Thenable</code> будут работать вместе с <code className="fs-6">await</code>:</p>
        <pre>
            <code className="fs-6">
            {`class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        alert(resolve);
        // выполнить resolve со значением this.num * 2 через 1000мс
        setTimeout(() => resolve(this.num * 2), 1000); // (*)
    }
};

async function f() {
    // код будет ждать 1 секунду,
    // после чего значение result станет равным 2
    let result = await new Thenable(1);
    alert(result);
}

f();`}
            </code>
        </pre>
        <p>Когда <code className="fs-6">await</code> получает объект с <code className="fs-6">.then</code>, не являющийся промисом, JavaScript автоматически запускает этот метод, передавая ему аргументы – встроенные функции <code className="fs-6">resolve</code> и <code className="fs-6">reject</code>. Затем <code className="fs-6">await</code> приостановит дальнейшее выполнение кода, пока любая из этих функций не будет вызвана (в примере это строка (*)). После чего выполнение кода продолжится с результатом <strong>resolve</strong> или <strong>reject</strong> соответственно.</p>
    </div>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Асинхронные методы классов</strong></p>
        <p>Для объявления асинхронного метода достаточно написать <code className="fs-6">async</code> перед именем:</p>
        <pre>
            <code className="fs-6">
            {`class Waiter {
    async wait() {
        return await Promise.resolve(1);
    }
}

new Waiter()
    .wait()
    .then(alert); // 1`}
            </code>
        </pre>
        <p>Как и в случае с асинхронными функциями, такой метод гарантированно возвращает промис, и в его теле можно использовать <code className="fs-6">await</code>.</p>
    </div>
    <h2>Обработка ошибок</h2>
    <p>Когда промис завершается успешно, <code className="fs-6">await promise</code> возвращает результат. Когда завершается с ошибкой – будет выброшено исключение. Как если бы на этом месте находилось выражение <code className="fs-6">throw</code>.</p>
    <p>Такой код:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`async function f() {
    await Promise.reject(new Error("Упс!"));
}`}
        </code>
    </pre>
    <p>Делает то же самое, что и такой:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`async function f() {
    throw new Error("Упс!");
}`}
        </code>
    </pre>
    <p>Но есть отличие: на практике промис может завершиться с ошибкой не сразу, а через некоторое время. В этом случае будет задержка, а затем <code className="fs-6">await</code> выбросит исключение.</p>
    <p>Такие ошибки можно ловить, используя <code className="fs-6">try..catch</code>, как с обычным <code className="fs-6">throw</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`async function f() {

    try {
        let response = await fetch('http://no-such-url');
    } catch(err) {
        alert(err); // TypeError: failed to fetch
    }
}

f();`}
        </code>
    </pre>
    <p>В случае ошибки выполнение <code className="fs-6">try</code> прерывается и управление прыгает в начало блока <code className="fs-6">catch</code>. Блоком <code className="fs-6">try</code> можно обернуть несколько строк:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`async function f() {

    try {
        let response = await fetch('/no-user-here');
        let user = await response.json();
    } catch(err) {
        // перехватит любую ошибку в блоке try: и в fetch, и в response.json
        alert(err);
    }
}

f();`}
        </code>
    </pre>
    <p>Если у нас нет <code className="fs-6">try..catch</code>, асинхронная функция будет возвращать завершившийся с ошибкой промис (в состоянии <code className="fs-6">rejected</code>). В этом случае мы можем использовать метод <code className="fs-6">.catch</code> промиса, чтобы обработать ошибку:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`async function f() {
    let response = await fetch('http://no-such-url');
}

// f() вернёт промис в состоянии rejected
f().catch(alert); // TypeError: failed to fetch // (*)`}
        </code>
    </pre>
    <p>Если забыть добавить <code className="fs-6">.catch</code>, то будет сгенерирована ошибка «<strong>Uncaught promise error</strong>» и информация об этом будет выведена в консоль.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong><code className="fs-6">async/await</code> и <code className="fs-6">promise.then/catch</code></strong></p>
        <p>При работе с <code className="fs-6">async/await</code>, <code className="fs-6">.then</code> используется нечасто, так как <code className="fs-6">await</code> автоматически ожидает завершения выполнения промиса. В этом случае обычно (но не всегда) гораздо удобнее перехватывать ошибки, используя <code className="fs-6">try..catch</code>, нежели чем <code className="fs-6">.catch</code>.</p>
        <p>Но на верхнем уровне вложенности (вне <code className="fs-6">async</code>–функций) await использовать нельзя, поэтому <code className="fs-6">.then/catch</code> для обработки финального результата или ошибок – обычная практика.</p>
        <p>Так сделано в строке (*) в примере выше.</p>
    </div>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong><code className="fs-6">async/await</code> отлично работает с <code className="fs-6">Promise.all</code></strong></p>
        <p>Когда необходимо подождать несколько промисов одновременно, можно обернуть их в <code className="fs-6">Promise.all</code>, и затем <code className="fs-6">await</code>:</p>
        <pre>
            <code className="fs-6">
            {`// await будет ждать массив с результатами выполнения всех промисов
let results = await Promise.all([
    fetch(url1),
    fetch(url2),
    ...
]);`}
            </code>
        </pre>
        <p>В случае ошибки она будет передаваться как обычно: от завершившегося с ошибкой промиса к <code className="fs-6">Promise.all</code>. А после будет сгенерировано исключение, которое можно отловить, обернув выражение в <code className="fs-6">try..catch</code>.</p>
    </div>
    <h2>Итого</h2>
    <p>Ключевое слово <code className="fs-6">async</code> перед объявлением функции:</p>
    <ol>
        <li>
            <p>Обязывает её всегда возвращать промис.</p>
        </li>
        <li>
            <p>Позволяет использовать <code className="fs-6">await</code> в теле этой функции.</p>
        </li>
    </ol>
    <p>Ключевое слово <code className="fs-6">await</code> перед промисом заставит JavaScript дождаться его выполнения, после чего:</p>
    <ol>
        <li>
            <p>Если промис завершается с ошибкой, будет сгенерировано исключение, как если бы на этом месте находилось <code className="fs-6">throw</code>.</p>
        </li>
        <li>
            <p>Иначе вернётся результат промиса.</p>
        </li>
    </ol>
    <p>Вместе они предоставляют отличный каркас для написания асинхронного кода. Такой код легко и писать, и читать.</p>
    <p>Хотя при работе с <code className="fs-6">async/await</code> можно обходиться без <code className="fs-6">promise.then/catch</code>, иногда всё-таки приходится использовать эти методы (на верхнем уровне вложенности, например). Также <code className="fs-6">await</code> отлично работает в сочетании с <code className="fs-6">Promise.all</code>, если необходимо выполнить несколько задач параллельно.</p>

    </>
    );
}

export default AsyncAwait;