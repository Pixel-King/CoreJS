import * as React from 'react';
import CallbackHellImg from './Promises-img/callback-hell.svg';

const Callbacks: React.FC =() => {
    return (
    <>

    <h1>Введение: колбэки</h1>
    <p>Многие действия в JavaScript <em>асинхронные</em>.</p>
    <p>Например, рассмотрим функцию <code className="fs-6">loadScript(src)</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}`}
        </code>
    </pre>
    <p>Эта функция загружает на страницу новый скрипт. Когда в тело документа добавится конструкция <code className="fs-6">{`<script src="…">`}</code>, браузер загрузит скрипт и выполнит его.</p>
    <p>Вот пример использования этой функции:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// загрузит и выполнит скрипт
loadScript('/my/script.js');`}
        </code>
    </pre>
    <p>Такие функции называют «асинхронными», потому что действие (загрузка скрипта) будет завершено не сейчас, а потом.</p>
    <p>Если после вызова <code className="fs-6">loadScript(…)</code> есть какой-то код, то он не будет ждать, пока скрипт загрузится.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`loadScript('/my/script.js');
// код, написанный после вызова функции loadScript,
// не будет дожидаться полной загрузки скрипта
// ...`}
        </code>
    </pre>
    <p>Мы хотели бы использовать новый скрипт, как только он будет загружен. Скажем, он объявляет новую функцию, которую мы хотим выполнить.</p>
    <p>Но если мы просто вызовем эту функцию после <code className="fs-6">loadScript(…)</code>, у нас ничего не выйдет:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`loadScript('/my/script.js'); // в скрипте есть "function newFunction() {…}"

newFunction(); // такой функции не существует!`}
        </code>
    </pre>
    <p>Действительно, ведь у браузера не было времени загрузить скрипт. Сейчас функция <code className="fs-6">loadScript</code> никак не позволяет отследить момент загрузки. Скрипт загружается, а потом выполняется. Но нам нужно точно знать, когда это произойдёт, чтобы использовать функции и переменные из этого скрипта.</p>
    <p>Давайте передадим функцию <code className="fs-6">callback</code> вторым аргументом в <code className="fs-6">loadScript</code>, чтобы вызвать её, когда скрипт загрузится:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}`}
        </code>
    </pre>
    <p>Событие <strong>onload</strong> в основном выполняет функцию после загрузки и выполнения скрипта.</p>
    <p>Теперь, если мы хотим вызвать функцию из скрипта, нужно делать это в колбэке:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`loadScript('/my/script.js', function() {
  // эта функция вызовется после того, как загрузится скрипт
  newFunction(); // теперь всё работает
  ...
});`}
        </code>
    </pre>
    <p>Смысл такой: вторым аргументом передаётся функция (обычно анонимная), которая выполняется по завершении действия.</p>
    <p>Возьмём для примера реальный скрипт с библиотекой функций:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(\`Здорово, скрипт \${script.src} загрузился\`);
    alert( _ ); // функция, объявленная в загруженном скрипте
});`}
        </code>
    </pre>
    <p>Такое написание называют асинхронным программированием с использованием колбэков. В функции, которые выполняют какие-либо асинхронные операции, передаётся аргумент <strong>callback — функция</strong>, которая будет вызвана по завершению асинхронного действия.</p>
    <p>Мы поступили похожим образом в <code className="fs-6">loadScript</code>, но это, конечно, распространённый подход.</p>
    <h2>Колбэк в колбэке</h2>
    <p>Как нам загрузить два скрипта один за другим: сначала первый, а за ним второй?</p>
    <p>Первое, что приходит в голову, вызвать <code className="fs-6">loadScript</code> ещё раз уже внутри колбэка, вот так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
       {` loadScript('/my/script.js', function(script) {

    alert(\`Здорово, скрипт \${script.src} загрузился, загрузим ещё один\`);

    loadScript('/my/script2.js', function(script) {
        alert(\`Здорово, второй скрипт загрузился\`);
    });

});`}
        </code>
    </pre>
    <p>Когда внешняя функция <code className="fs-6">loadScript</code> выполнится, вызовется та, что внутри колбэка.</p>
    <p>А что если нам нужно загрузить ещё один скрипт?..</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`loadScript('/my/script.js', function(script) {

    loadScript('/my/script2.js', function(script) {

        loadScript('/my/script3.js', function(script) {
            // ...и так далее, пока все скрипты не будут загружены
        });

    })

});`}
        </code>
    </pre>
    <p>Каждое новое действие мы вынуждены вызывать внутри колбэка. Этот вариант подойдёт, когда у нас одно-два действия, но для большего количества уже не удобно. Альтернативные подходы мы скоро разберём.</p>
    <h2>Перехват ошибок</h2>
    <p>В примерах выше мы не думали об ошибках. А что если загрузить скрипт не удалось? Колбэк должен уметь реагировать на возможные проблемы.</p>
    <p>Ниже улучшенная версия <code className="fs-6">loadScript</code>, которая умеет отслеживать ошибки загрузки:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(\`Не удалось загрузить скрипт \${src}\`));

    document.head.append(script);
}`}
        </code>
    </pre>
    <p>Мы вызываем <code className="fs-6">callback(null, script)</code> в случае успешной загрузки и <code className="fs-6">callback(error)</code>, если загрузить скрипт не удалось.</p>
    <p>Живой пример:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`loadScript('/my/script.js', function(error, script) {
    if (error) {
        // обрабатываем ошибку
    } else {
        // скрипт успешно загружен
    }
});`}
        </code>
    </pre>
    <p>Опять же, подход, который мы использовали в <code className="fs-6">loadScript</code>, также распространён и называется <strong>«колбэк с первым аргументом-ошибкой»</strong> («error-first callback»).</p>
    <p>Правила таковы:</p>
    <ol>
        <li>
            <p>Первый аргумент функции <code className="fs-6">callback</code> зарезервирован для ошибки. В этом случае вызов выглядит вот так: <code className="fs-6">callback(err)</code>.</p>
        </li>
        <li>
            <p>Второй и последующие аргументы — для результатов выполнения. В этом случае вызов выглядит вот так: <code className="fs-6">callback(null, result1, result2…)</code>.</p>
        </li>
    </ol>
    <p>Одна и та же функция <code className="fs-6">callback</code> используется и для информирования об ошибке, и для передачи результатов.</p>
    <h2>Адская пирамида вызовов</h2>
    <p>На первый взгляд это рабочий способ написания асинхронного кода. Так и есть. Для одного или двух вложенных вызовов всё выглядит нормально.</p>
    <p>Но для нескольких асинхронных действий, которые нужно выполнить друг за другом, код выглядит вот так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`loadScript('1.js', function(error, script) {

    if (error) {
        handleError(error);
    } else {
        // ...
        loadScript('2.js', function(error, script) {
            if (error) {
                handleError(error);
            } else {
                // ...
                loadScript('3.js', function(error, script) {
                    if (error) {
                        handleError(error);
                    } else {
                        // ...и так далее, пока все скрипты не будут загружены (*)
                    }
                });

            }
        })
    }
});`}
        </code>
    </pre>
    <p>В примере выше:</p>
    <ol>
        <li>
            <p>Мы загружаем 1.js. Продолжаем, если нет ошибок.</p>
        </li>
        <li>
            <p>Мы загружаем 2.js. Продолжаем, если нет ошибок.</p>
        </li>
        <li>
            <p>Мы загружаем 3.js. Продолжаем, если нет ошибок. И так далее (*).</p>
        </li>
    </ol>
    <p>Чем больше вложенных вызовов, тем наш код будет иметь всё большую вложенность, которую сложно поддерживать, особенно если вместо <strong>...</strong> у нас код, содержащий другие цепочки вызовов, условия и т.д.</p>
    <p>Иногда это называют «адом колбэков» или «адской пирамидой колбэков».</p>
    <img className="mx-auto d-block" src={CallbackHellImg} alt="callback hell"></img>
    <p>Пирамида вложенных вызовов растёт вправо с каждым асинхронным действием. В итоге вы сами будете путаться, где что есть.</p>
    <p>Такой подход к написанию кода не приветствуется.</p>
    <p>Мы можем попытаться решить эту проблему, изолируя каждое действие в отдельную функцию, вот так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`loadScript('1.js', step1);

function step1(error, script) {
    if (error) {
        handleError(error);
    } else {
        // ...
        loadScript('2.js', step2);
    }
}

function step2(error, script) {
    if (error) {
        handleError(error);
    } else {
        // ...
        loadScript('3.js', step3);
    }
}

function step3(error, script) {
    if (error) {
        handleError(error);
    } else {
        // ...и так далее, пока все скрипты не будут загружены (*)
    }
};`}
        </code>
    </pre>
    <p>Заметили? Этот код делает всё то же самое, но вложенность отсутствует, потому что все действия вынесены в отдельные функции.</p>
    <p>Код абсолютно рабочий, но кажется разорванным на куски. Его трудно читать, вы наверняка заметили это. Приходится прыгать глазами между кусками кода, когда пытаешься его прочесть. Это неудобно, особенно, если читатель не знаком с кодом и не знает, что за чем следует.</p>
    <p>Кроме того, все функции <code className="fs-6">step*</code> одноразовые, и созданы лишь только, чтобы избавиться от «адской пирамиды вызовов». Никто не будет их переиспользовать где-либо ещё. Таким образом, мы, кроме всего прочего, засоряем пространство имён.</p>
    <p>Нужно найти способ получше.</p>
    <p>К счастью, такие способы существуют. Один из лучших — использовать <strong>промисы</strong>.</p>

    </>
    );
}

export default Callbacks;