import * as React from 'react';
import promiseHandlerVariantImg from './Promises-img/promise-handler-variants.svg';
import promiseThenChainImg from './Promises-img/promise-then-chain.svg';
import promiseThenManyImg from './Promises-img/promise-then-many.svg';

const PromiseChaining: React.FC =() => {
    return (
    <>
    <h1>Цепочка промисов</h1>
    <p>Давайте вернёмся к следующей ситуации: у нас есть последовательность асинхронных задач, которые должны быть выполнены одна за другой. Например, речь может идти о загрузке скриптов. Как же грамотно реализовать это в коде?</p>
    <p>Промисы предоставляют несколько способов решения подобной задачи.</p>
    <p>В этой главе мы разберём цепочку промисов.</p>
    <p>Она выглядит вот так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

    alert(result); // 1
    return result * 2;

}).then(function(result) { // (***)

    alert(result); // 2
    return result * 2;

}).then(function(result) {

    alert(result); // 4
    return result * 2;

});`}
        </code>
    </pre>
    <p>Идея состоит в том, что результат первого промиса передаётся по цепочке обработчиков <code className="fs-6">.then</code>.</p>
    <p>Поток выполнения такой:</p>
    <ol>
        <li>
            <p>Начальный промис успешно выполняется через 1 секунду (*),</p>
        </li>
        <li>
            <p>Затем вызывается обработчик в .then (**).</p>
        </li>
        <li>
            <p>Возвращаемое им значение передаётся дальше в следующий обработчик .then (***)</p>
        </li>
        <li>
            <p>…и так далее.</p>
        </li>
    </ol>
    <p>В итоге результат передаётся по цепочке обработчиков, и мы видим несколько alert подряд, которые выводят: <strong>1 → 2 → 4</strong>.</p>
    <img className="mx-auto d-block" src={promiseThenChainImg} alt="promise.then chain"></img>
    <p>Всё это работает, потому что вызов <code className="fs-6">promise.then</code> тоже возвращает промис, так что мы можем вызвать на нём следующий <code className="fs-6">.then</code>.</p>
    <p>Когда обработчик возвращает какое-то значение, то оно становится результатом выполнения соответствующего промиса и передаётся в следующий <code className="fs-6">.then</code>.</p>
    <p><strong>Классическая ошибка новичков: технически возможно добавить много обработчиков <code className="fs-6">.then</code> к единственному промису. Но это не цепочка.</strong></p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});`}
        </code>
    </pre>
    <p>Мы добавили несколько обработчиков к одному промису. Они не передают друг другу результаты своего выполнения, а действуют независимо.</p>
    <p>Вот картина происходящего (сравните это с изображением цепочки промисов выше):</p>
    <img className="mx-auto d-block" src={promiseThenManyImg} alt="many .then"></img>
    <p>Все обработчики <code className="fs-6">.then</code> на одном и том же промисе получают одно и то же значение – результат выполнения того же самого промиса. Таким образом, в коде выше все <code className="fs-6">alert</code> показывают одно и то же: <strong>1</strong>.</p>
    <p>На практике весьма редко требуется назначать несколько обработчиков одному промису. А вот цепочка промисов используется куда чаще.</p>
    <h2>Возвращаем промисы</h2>
    <p>Обработчик <code className="fs-6">handler</code>, переданный в <code className="fs-6">.then(handler)</code>, может вернуть промис.</p>
    <p>В этом случае дальнейшие обработчики ожидают, пока он выполнится, и затем получают его результат.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`new Promise(function(resolve, reject) {

setTimeout(() => resolve(1), 1000);

}).then(function(result) {

    alert(result); // 1

    return new Promise((resolve, reject) => { // (*)
        setTimeout(() => resolve(result * 2), 1000);
    });

}).then(function(result) { // (**)

    alert(result); // 2

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
    });

}).then(function(result) {

    alert(result); // 4

});`}
        </code>
    </pre>
    <p>Здесь первый <code className="fs-6">.then</code> показывает <strong>1</strong> и возвращает новый промис <strong>new Promise(…)</strong> в строке (*). Через одну секунду этот промис успешно выполняется, и его результат (аргумент в <strong>resolve</strong>, то есть <strong>result * 2</strong>) передаётся обработчику в следующем <code className="fs-6">.then</code>. Он находится в строке (**), показывает <strong>2</strong> и делает то же самое.</p>
    <p>Таким образом, как и в предыдущем примере, выводятся <strong>1 → 2 → 4</strong>, но сейчас между вызовами <code className="fs-6">alert</code> существует пауза в 1 секунду.</p>
    <p>Возвращая промисы, мы можем строить цепочки из асинхронных действий.</p>
    <h2>Пример: loadScript</h2>
    <p>Давайте используем эту возможность вместе с промисифицированной функцией <code className="fs-6">loadScript</code>, созданной нами в предыдущей главе, чтобы загружать скрипты по очереди, последовательно:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`loadScript("/article/promise-chaining/one.js")
    .then(function(script) {
        return loadScript("/article/promise-chaining/two.js");
    })
    .then(function(script) {
        return loadScript("/article/promise-chaining/three.js");
    })
    .then(function(script) {
        // вызовем функции, объявленные в загружаемых скриптах,
        // чтобы показать, что они действительно загрузились
        one();
        two();
        three();
    });`}
        </code>
    </pre>
    <p>Этот же код можно переписать немного компактнее, используя стрелочные функции:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`loadScript("/article/promise-chaining/one.js")
    .then(script => loadScript("/article/promise-chaining/two.js"))
    .then(script => loadScript("/article/promise-chaining/three.js"))
    .then(script => {
        // скрипты загружены, мы можем использовать объявленные в них функции
        one();
        two();
        three();
    });`}
        </code>
    </pre>
    <p>Здесь каждый вызов <code className="fs-6">loadScript</code> возвращает промис, и следующий обработчик в <code className="fs-6">.then</code> срабатывает, только когда этот промис завершается. Затем инициируется загрузка следующего скрипта и так далее. Таким образом, скрипты загружаются один за другим.</p>
    <p>Мы можем добавить и другие асинхронные действия в цепочку. Обратите внимание, что наш код всё ещё «плоский», он «растёт» вниз, а не вправо. Нет никаких признаков «адской пирамиды вызовов».</p>
    <p>Технически мы бы могли добавлять <code className="fs-6">.then</code> напрямую к каждому вызову <code className="fs-6">loadScript</code>, вот так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`loadScript("/article/promise-chaining/one.js").then(script1 => {
    loadScript("/article/promise-chaining/two.js").then(script2 => {
        loadScript("/article/promise-chaining/three.js").then(script3 => {
            // эта функция имеет доступ к переменным script1, script2 и script3
            one();
            two();
            three();
        });
    });
});`}
        </code>
    </pre>
    <p>Этот код делает то же самое: последовательно загружает 3 скрипта. Но он «растёт вправо», так что возникает такая же проблема, как и с колбэками.</p>
    <p>Разработчики, которые не так давно начали использовать промисы, иногда не знают про цепочки и пишут код именно так, как показано выше. В целом, использование цепочек промисов предпочтительнее.</p>
    <p>Иногда всё же приемлемо добавлять <code className="fs-6">.then</code> напрямую, чтобы вложенная в него функция имела доступ к внешней области видимости. В примере выше самая глубоко вложенная функция обратного вызова имеет доступ ко всем переменным script1, script2, script3. Но это скорее исключение, чем правило.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Thenable</strong></p>
        <p>Если быть более точными, обработчик может возвращать не именно промис, а любой объект, содержащий метод <code className="fs-6">.then</code>, такие объекты называют <strong>«thenable»</strong>, и этот объект будет обработан как промис.</p>
        <p>Смысл в том, что сторонние библиотеки могут создавать свои собственные совместимые с промисами объекты. Они могут иметь свои наборы методов и при этом быть совместимыми со встроенными промисами, так как реализуют метод <code className="fs-6">.then</code>.</p>
        <p>Вот пример такого объекта:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
            {`class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        alert(resolve); // function() { native code }
        // будет успешно выполнено с аргументом this.num*2 через 1 секунду
        setTimeout(() => resolve(this.num * 2), 1000); // (**)
    }
}

new Promise(resolve => resolve(1))
    .then(result => {
        return new Thenable(result); // (*)
    })
    .then(alert); // показывает 2 через 1000мс`}
            </code>
        </pre>
        <p>JavaScript проверяет объект, возвращаемый из обработчика <code className="fs-6">.then</code> в строке (*): если у него имеется метод <code className="fs-6">then</code>, который можно вызвать, то этот метод вызывается, и в него передаются как аргументы встроенные функции <code className="fs-6">resolve</code> и <code className="fs-6">reject</code>, вызов одной из которых потом ожидается. В примере выше происходит вызов <code className="fs-6">resolve(2)</code> через 1 секунду (**). Затем результат передаётся дальше по цепочке.</p>
        <p>Это позволяет добавлять в цепочки промисов пользовательские объекты, не заставляя их наследовать от <strong>Promise</strong>.</p>
    </div>
    <h2>Более сложный пример: fetch</h2>
    <p>Во фронтенд-разработке промисы часто используются, чтобы делать запросы по сети. Давайте рассмотрим один такой пример.</p>
    <p>Мы будем использовать метод <code className="fs-6">fetch</code>, чтобы подгрузить информацию о пользователях с удалённого сервера. Этот метод имеет много опциональных параметров, но базовый синтаксис весьма прост:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        let promise = fetch(url);
        </code>
    </pre>
    <p>Этот код запрашивает по сети <strong>url</strong> и возвращает промис. Промис успешно выполняется и в свою очередь возвращает объект <strong>response</strong> после того, как удалённый сервер присылает заголовки ответа, но <em>до того, как весь ответ сервера полностью загружен</em>.</p>
    <p>Чтобы прочитать полный ответ, надо вызвать метод <code className="fs-6">response.text()</code>: он тоже возвращает промис, который выполняется, когда данные полностью загружены с удалённого сервера, и возвращает эти данные.</p>
    <p>Код ниже запрашивает файл <strong>user.json</strong> и загружает его содержимое с сервера:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`fetch('/article/promise-chaining/user.json')
    // .then в коде ниже выполняется, когда удалённый сервер отвечает
    .then(function(response) {
        // response.text() возвращает новый промис,
        // который выполняется и возвращает полный ответ сервера,
        // когда он загрузится
        return response.text();
    })
    .then(function(text) {
        // ...и здесь содержимое полученного файла
        alert(text); // {"name": "iliakan", isAdmin: true}
    });`}
        </code>
    </pre>
    <p>Есть также метод <code className="fs-6">response.json()</code>, который читает данные в формате <strong>JSON</strong>. Он больше подходит для нашего примера, так что давайте использовать его.</p>
    <p>Мы также применим стрелочные функции для более компактной записи кода:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// то же самое, что и раньше, только теперь response.json() читает данные в формате JSON
fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => alert(user.name)); // iliakan, получили имя пользователя`}
        </code>
    </pre>
    <p>Теперь давайте что-нибудь сделаем с полученными данными о пользователе.</p>
    <p>Например, мы можем послать запрос на GitHub, чтобы загрузить данные из профиля пользователя и показать его аватар:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
    {`// Запрашиваем user.json
fetch('/article/promise-chaining/user.json')
    // Загружаем данные в формате json
    .then(response => response.json())
    // Делаем запрос к GitHub
    .then(user => fetch(\`https://api.github.com/users/\${user.name}\`))
    // Загружаем ответ в формате json
    .then(response => response.json())
    // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
    .then(githubUser => {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => img.remove(), 3000); // (*)
    });`}
        </code>
    </pre>
    <p>Код работает, детали реализации отражены в комментариях. Однако в нём есть одна потенциальная проблема, с которой часто сталкиваются новички.</p>
    <p>Посмотрите на строку (*): как мы можем предпринять какие-то действия после того, как аватар был показан и удалён? Например, мы бы хотели показывать форму редактирования пользователя или что-то ещё. Сейчас это невозможно.</p>
    <p>Чтобы сделать наш код расширяемым, нам нужно возвращать ещё один промис, который выполняется после того, как завершается показ аватара.</p>
    <p>Примерно так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => fetch(\`https://api.github.com/users/\${user.name}\`))
    .then(response => response.json())
    .then(githubUser => new Promise(function(resolve, reject) { // (*)
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser); // (**)
        }, 3000);
    }))
    // срабатывает через 3 секунды
    .then(githubUser => alert(\`Закончили показ \${githubUser.name}\`));`}
        </code>
    </pre>
    <p>То есть, обработчик <code className="fs-6">.then</code> в строке (*) будет возвращать <strong>new Promise</strong>, который перейдёт в состояние «выполнен» только после того, как в <code className="fs-6">setTimeout</code> (**) будет вызвана <code className="fs-6">resolve(githubUser)</code>.</p>
    <p>Соответственно, следующий по цепочке .then будет ждать этого.</p>
    <p>Как правило, все асинхронные действия должны возвращать промис.</p>
    <p>Это позволяет планировать после него какие-то дополнительные действия. Даже если эта возможность не нужна прямо сейчас, она может понадобиться в будущем.</p>
    <p>И, наконец, давайте разобьём написанный код на отдельные функции, пригодные для повторного использования:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`function loadJson(url) {
    return fetch(url)
        .then(response => response.json());
}

function loadGithubUser(name) {
    return fetch(\`https://api.github.com/users/\${name}\`)
        .then(response => response.json());
}

function showAvatar(githubUser) {
    return new Promise(function(resolve, reject) {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 3000);
    });
}

// Используем их:
loadJson('/article/promise-chaining/user.json')
    .then(user => loadGithubUser(user.name))
    .then(showAvatar)
    .then(githubUser => alert(\`Показ аватара \${githubUser.name} завершён\`));
    // ...`}
        </code>
    </pre>
    <h2>Итого</h2>
    <p>Если обработчик в <code className="fs-6">.then</code> (или в <code className="fs-6">catch/finally</code>, без разницы) возвращает промис, последующие элементы цепочки ждут, пока этот промис выполнится. Когда это происходит, результат его выполнения (или ошибка) передаётся дальше.</p>
    <p>Вот полная картина происходящего:</p>
    <img className="mx-auto d-block" src={promiseHandlerVariantImg} alt="promise handler"></img>

    </>
    );
}

export default PromiseChaining;