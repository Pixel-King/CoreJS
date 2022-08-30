import * as React from 'react';

const PromisesErrorHandling: React.FC =() => {
    return (
    <>

    <h1>Промисы: обработка ошибок</h1>
    <p>Цепочки промисов отлично подходят для перехвата ошибок. Если промис завершается с ошибкой, то управление переходит в ближайший обработчик ошибок. На практике это очень удобно.</p>
    <p>Например, в представленном ниже примере для <code className="fs-6">fetch</code> указана неправильная ссылка (сайт не существует), и <code className="fs-6">.catch</code> перехватывает ошибку:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`fetch('https://no-such-server.blabla') // ошибка
    .then(response => response.json())
    .catch(err => alert(err)) // TypeError: failed to fetch (текст может отличаться)`}
        </code>
    </pre>
   <p>Как видно, <code className="fs-6">.catch</code> не обязательно должен быть сразу после ошибки, он может быть далее, после одного или даже нескольких <code className="fs-6">.then</code></p>
   <p>Или, может быть, с сервером всё в порядке, но в ответе мы получим некорректный <strong>JSON</strong>. Самый лёгкий путь перехватить все ошибки – это добавить <code className="fs-6">.catch</code> в конец цепочки:</p>
   <pre className="text-bg-dark px-3 py-3">
       <code className="fs-6">
       {`fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => fetch(\`https://api.github.com/users/\${user.name}\`))
    .then(response => response.json())
    .then(githubUser => new Promise((resolve, reject) => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    }))
    .catch(error => alert(error.message));`}
       </code>
   </pre>
   <p>Если все в порядке, то такой <code className="fs-6">.catch</code> вообще не выполнится. Но если любой из промисов будет отклонён (проблемы с сетью или некорректная json-строка, или что угодно другое), то ошибка будет перехвачена.</p>
    <h2>Неявный try…catch</h2>
    <p>Вокруг функции промиса и обработчиков находится "невидимый <code className="fs-6">try..catch</code>". Если происходит исключение, то оно перехватывается, и промис считается отклонённым с этой ошибкой.</p>
    <p>Например, этот код:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`new Promise((resolve, reject) => {
    throw new Error("Ошибка!");
}).catch(alert); // Error: Ошибка!`}
        </code>
    </pre>
    <p>…Работает так же, как и этот:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`new Promise((resolve, reject) => {
    reject(new Error("Ошибка!"));
}).catch(alert); // Error: Ошибка!`}
        </code>
    </pre>
    <p>"Невидимый <code className="fs-6">try..catch</code>" вокруг промиса автоматически перехватывает ошибку и превращает её в отклонённый промис.</p>
    <p>Это работает не только в функции промиса, но и в обработчиках. Если мы бросим ошибку (<code className="fs-6">throw</code>) из обработчика (<code className="fs-6">.then</code>), то промис будет считаться отклонённым, и управление перейдёт к ближайшему обработчику ошибок.</p>
    <p>Пример:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`new Promise((resolve, reject) => {
    resolve("ок");
}).then((result) => {
    throw new Error("Ошибка!"); // генерируем ошибку
}).catch(alert); // Error: Ошибка!`}
        </code>
    </pre>
    <p>Это происходит для всех ошибок, не только для тех, которые вызваны оператором <code className="fs-6">throw</code>. Например, программная ошибка:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`new Promise((resolve, reject) => {
    resolve("ок");
}).then((result) => {
    blabla(); // нет такой функции
}).catch(alert); // ReferenceError: blabla is not defined`}
        </code>
    </pre>
    <p>Финальный <code className="fs-6">.catch</code> перехватывает как промисы, в которых вызван <code className="fs-6">reject</code>, так и случайные ошибки в обработчиках.</p>
    <h2>Пробрасывание ошибок</h2>
    <p>Как мы уже заметили, <code className="fs-6">.catch</code> ведёт себя как <code className="fs-6">try..catch</code>. Мы можем иметь столько обработчиков <code className="fs-6">.then</code>, сколько мы хотим, и затем использовать один <code className="fs-6">.catch</code> в конце, чтобы перехватить ошибки из всех обработчиков.</p>
    <p>В обычном <code className="fs-6">try..catch</code> мы можем проанализировать ошибку и повторно пробросить дальше, если не можем её обработать. То же самое возможно для промисов.</p>
    <p>Если мы пробросим (<code className="fs-6">throw</code>) ошибку внутри блока <code className="fs-6">.catch</code>, то управление перейдёт к следующему ближайшему обработчику ошибок. А если мы обработаем ошибку и завершим работу обработчика нормально, то продолжит работу ближайший успешный обработчик <code className="fs-6">.then</code>.</p>
    <p>В примере ниже <code className="fs-6">.catch</code> успешно обрабатывает ошибку:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// the execution: catch -> then
new Promise((resolve, reject) => {

    throw new Error("Ошибка!");

}).catch(function(error) {

    alert("Ошибка обработана, продолжить работу");

}).then(() => alert("Управление перейдёт в следующий then"));`}
        </code>
    </pre>
    <p>Здесь блок <code className="fs-6">.catch</code> завершается нормально. Поэтому вызывается следующий успешный обработчик <code className="fs-6">.then</code>.</p>
    <p>В примере ниже мы видим другую ситуацию с блоком <code className="fs-6">.catch</code>. Обработчик (*) перехватывает ошибку и не может обработать её (например, он знает как обработать только <strong>URIError</strong>), поэтому ошибка пробрасывается далее:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// the execution: catch -> catch -> then
new Promise((resolve, reject) => {

    throw new Error("Ошибка!");

}).catch(function(error) { // (*)

    if (error instanceof URIError) {
        // обрабатываем ошибку
    } else {
        alert("Не могу обработать ошибку");

        throw error; // пробрасывает эту или другую ошибку в следующий catch
    }

}).then(function() {
    /* не выполнится */
}).catch(error => { // (**)

    alert(\`Неизвестная ошибка: \${error}\`);
    // ничего не возвращаем => выполнение продолжается в нормальном режиме

});`}
        </code>
    </pre>
    <p>Управление переходит от первого блока <code className="fs-6">.catch</code> (*) к следующему (**), вниз по цепочке.</p>
    <h2>Необработанные ошибки</h2>
    <p>Что произойдёт, если ошибка не будет обработана? Например, мы просто забыли добавить <code className="fs-6">.catch</code> в конец цепочки, как здесь:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`new Promise(function() {
    noSuchFunction(); // Ошибка (нет такой функции)
})
    .then(() => {
        // обработчики .then, один или более
  }); // без .catch в самом конце!`}
        </code>
    </pre>
    <p>В случае ошибки выполнение должно перейти к ближайшему обработчику ошибок. Но в примере выше нет никакого обработчика. Поэтому ошибка как бы «застревает», её некому обработать.</p>
    <p>На практике, как и при обычных необработанных ошибках в коде, это означает, что что-то пошло сильно не так.</p>
    <p>Что происходит, когда обычная ошибка не перехвачена <code className="fs-6">try..catch</code>? Скрипт умирает с сообщением в консоли. Похожее происходит и в случае необработанной ошибки промиса.</p>
    <p>JavaScript-движок отслеживает такие ситуации и генерирует в этом случае глобальную ошибку. Вы можете увидеть её в консоли, если запустите пример выше.</p>
    <p>В браузере мы можем поймать такие ошибки, используя событие <strong>unhandledrejection</strong>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`window.addEventListener('unhandledrejection', function(event) {
    // объект события имеет два специальных свойства:
    alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
    alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
});

new Promise(function() {
    throw new Error("Ошибка!");
}); // нет обработчика ошибок`}
        </code>
    </pre>
    <p>Это событие является частью <a href="https://html.spec.whatwg.org/multipage/webappapis.html#unhandled-promise-rejections">стандарта HTML</a>.</p>
    <p>Если происходит ошибка, и отсутствует её обработчик, то генерируется событие <strong>unhandledrejection</strong>, и соответствующий объект <code className="fs-6">event</code> содержит информацию об ошибке.</p>
    <p>Обычно такие ошибки неустранимы, поэтому лучше всего – информировать пользователя о проблеме и, возможно, отправить информацию об ошибке на сервер.</p>
    <p>В не-браузерных средах, таких как Node.js, есть другие способы отслеживания необработанных ошибок.</p>
    <h2>Итого</h2>
    <ul>
        <li>
            <p><code className="fs-6">.catch</code> перехватывает все виды ошибок в промисах: будь то вызов <code className="fs-6">reject()</code> или ошибка, брошенная в обработчике при помощи <code className="fs-6">throw</code>.</p>
        </li>
        <li>
            <p><code className="fs-6">.then</code> также перехватывает ошибки таким же образом, если задан второй аргумент (который является обработчиком ошибок).</p>
        </li>
        <li>
            <p>Необходимо размещать <code className="fs-6">.catch</code> там, где мы хотим обработать ошибки и знаем, как это сделать. Обработчик может проанализировать ошибку (могут быть полезны пользовательские классы ошибок) и пробросить её, если ничего не знает о ней (возможно, это программная ошибка).</p>
        </li>
        <li>
            <p>Можно и совсем не использовать <code className="fs-6">.catch</code>, если нет нормального способа восстановиться после ошибки.</p>
        </li>
        <li>
            <p>В любом случае нам следует использовать обработчик события <strong>unhandledrejection</strong> (для браузеров и аналог для других окружений), чтобы отслеживать необработанные ошибки и информировать о них пользователя (и, возможно, наш сервер), благодаря чему наше приложение никогда не будет «просто умирать».</p>
        </li>
    </ul>

    </>
    );
}

export default PromisesErrorHandling;