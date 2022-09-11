import * as React from 'react';

const Functions: React.FC =() => {
    return (
    <>

    <h1>Функции</h1>
    <p>Зачастую нам надо повторять одно и то же действие во многих частях программы.</p>
    <p>Например, необходимо красиво вывести сообщение при приветствии посетителя, при выходе посетителя с сайта, ещё где-нибудь.</p>
    <p>Чтобы не повторять один и тот же код во многих местах, придуманы функции. Функции являются основными «строительными блоками» программы.</p>
    <p>Примеры встроенных функций вы уже видели – это <code className="fs-6">alert(message)</code>, <code className="fs-6">prompt(message, default)</code> и <code className="fs-6">confirm(question)</code>. Но можно создавать и свои.</p>
    <h2>Объявление функции</h2>
    <p>Для создания функций мы можем использовать <em>объявление функции</em>.</p>
    <p>Пример объявления функции:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function showMessage() {`} <br />
            {`    alert( 'Всем привет!' );`} <br />
            {`}`}
        </code>
    </pre>
    <p>Вначале идёт ключевое слово <code className="fs-6">function</code>, после него <em>имя функции</em>, затем список <em>параметров</em> в круглых скобках через запятую (в вышеприведённом примере он пустой) и, наконец, код функции, также называемый &quot;телом функции&quot;, внутри фигурных скобок.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function имя(параметры) {`} <br />
            {`    ...тело...`} <br />
            {`}`}
        </code>
    </pre>
    <p>Наша новая функция может быть вызвана по её имени: <code className="fs-6">showMessage()</code>.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function showMessage() {`} <br />
            {`    alert( 'Всем привет! ');`} <br />
            {`}`} <br />
            *!* <br />
            showMessage(); <br />
            showMessage(); <br />
            */!* <br />
        </code>
    </pre>
    <p>Вызов <code className="fs-6">showMessage()</code> выполняет код функции. Здесь мы увидим сообщение дважды.</p>
    <p>Этот пример явно демонстрирует одно из главных предназначений функций: избавление от дублирования кода.</p>
    <p>Если понадобится поменять сообщение или способ его вывода – достаточно изменить его в одном месте: в функции, которая его выводит.</p>
    <h2>Локальные переменные</h2>
    <p>Переменные, объявленные внутри функции, видны только внутри этой функции.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function showMessage() {`} <br />
            {`    *!*`} <br />
            {`    let message = 'Привет, я JavaScript!'; // локальная переменная`} <br />
            {`    */!*`} <br />
            {`    alert( message );`} <br />
            {`}`} <br />
            showMessage(); // Привет, я JavaScript! <br />
            alert( message ); // &lt;-- будет ошибка, т.к. переменная видна только внутри функции
        </code>
    </pre>
    <h2>Внешние переменные</h2>
    <p>У функции есть доступ к внешним переменным, например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let *!*userName*/!* = 'Вася';`} <br />
            {`function showMessage() {`} <br />
            {`let message = 'Привет, ' + *!*userName*/!*;`} <br />
            {`alert(message);`} <br />
            {`}`} <br />
            {`showMessage(); // Привет, Вася`}
        </code>
    </pre>
    <p>Функция обладает полным доступом к внешним переменным и может изменять их значение.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let *!*userName*/!* = 'Вася';`} <br />
            {`function showMessage() {`} <br />
            {`    *!*userName*/!* = 'Петя'; // (1) изменяем значение внешней переменной`} <br />
            {`    let message = 'Привет, ' + *!*userName*/!*;`} <br />
            {`    alert(message);`} <br />
            {`}`} <br />
            {`alert( userName ); // *!*Вася*/!* перед вызовом функции`} <br />
            {`showMessage();`} <br />
            {`alert( userName ); // *!*Петя*/!*, значение внешней переменной было изменено функцией`}
        </code>
    </pre>
    <p>Внешняя переменная используется, только если внутри функции нет такой локальной.</p>
    <p>Если одноимённая переменная объявляется внутри функции, тогда она перекрывает внешнюю. Например, в коде ниже функция использует локальную переменную <code className="fs-6">userName</code>. Внешняя будет проигнорирована:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let userName = 'Вася';`} <br />
            {`function showMessage() {`} <br />
            {`    *!*`} <br />
            {`    let userName = 'Петя'; // объявляем локальную переменную`} <br />
            {`    */!*`} <br />
            {`    let message = 'Привет, ' + userName; // *!*Петя*/!*`} <br />
            {`    alert(message);`} <br />
            {`}`} <br />
            {`// функция создаст и будет использовать свою собственную локальную переменную userName`} <br />
            {`showMessage();`} <br />
            {`alert( userName ); // *!*Вася*/!*, не изменилась, функция не трогала внешнюю переменную`}
        </code>
    </pre>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Переменные, объявленные снаружи всех функций, такие как внешняя переменная <code className="fs-6">userName</code> в вышеприведённом коде - называются <em>глобальными</em>. <em>Глобальные переменные</em> видимы для любой функции (если только их не перекрывают одноимённые локальные переменные).  Желательно сводить использование глобальных переменных к минимуму. В современном коде обычно мало или совсем нет глобальных переменных. Хотя они иногда полезны для хранения важнейших &quot;общепроектовых&quot; данных.</p>
    </div>

    <h2>Параметры</h2>
    <p>Мы можем передать внутрь функции любую информацию, используя параметры (также называемые <em>аргументами функции</em>).</p>
    <p>В нижеприведённом примере функции передаются два параметра: <code className="fs-6">from</code> и <code className="fs-6">text</code>.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function showMessage(*!*from, text*/!*) { // аргументы: from, text`} <br />
            {`    alert(from + ': ' + text);`} <br />
            {`}`} <br />
            *!* <br />
            showMessage(&#39;Аня&#39;, &#39;Привет!&#39;); // Аня: Привет! (*) <br />
            showMessage(&#39;Аня&#39;, &quot;Как дела?&quot;); // Аня: Как дела? (**) <br />
            */!*
        </code>
    </pre>
    <p>Когда функция вызывается в строках <code className="fs-6">(*)</code> и <code className="fs-6">(**)</code>, переданные значения копируются в локальные переменные <code className="fs-6">from</code> и <code className="fs-6">text</code>. Затем они используются в теле функции.</p>
    <p>Вот ещё один пример: у нас есть переменная <code className="fs-6">from</code>, и мы передаём её функции. Обратите внимание: функция изменяет значение <code className="fs-6">from</code>, но это изменение не видно снаружи. Функция всегда получает только копию значения:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function showMessage(from, text) {`} <br />
            {`    *!*`} <br />
            {`    from = '*' + from + '*'; // немного украсим 'from'`} <br />
            {`    */!*`} <br />
            {`    alert( from + ': ' + text );`} <br />
            {`}`} <br />
            let from = &quot;Аня&quot;; <br />
            showMessage(from, &quot;Привет&quot;); // *Аня*: Привет <br />
            // значение &quot;from&quot; осталось прежним, функция изменила значение локальной переменной <br />
            alert( from ); // Аня
        </code>
    </pre>
    <p>Значение передаваемое в качестве параметра функции, также называется <em>аргументом</em>.</p>
    <p>Другими словами:</p>
    <p>Параметр - это переменная, указанная в круглых скобках в объявлении функции. Аргумент - это значение, которое передаётся функции при её вызове.</p>
    <p>Мы объявляем функции со списком параметров, затем вызываем их, передавая аргументы.</p>
    <p>В приведённом выше примере можно было бы сказать: &quot;функция <code className="fs-6">showMessage</code> объявляется с двумя параметрами, затем вызывается с двумя аргументами: <code className="fs-6">from</code> и <code className="fs-6">&quot;Привет&quot;</code>&quot;.</p>
    <h2>Параметры по умолчанию</h2>
    <p>Если параметр не указан, то его значением становится <code className="fs-6">undefined</code>.</p>
    <p>Например, вышеупомянутая функция <code className="fs-6">showMessage(from, text)</code> может быть вызвана с одним аргументом:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            showMessage(&quot;Аня&quot;);
        </code>
    </pre>
    <p>Это не приведёт к ошибке. Такой вызов выведет <code className="fs-6">&quot;*Аня*: undefined&quot;</code>. В вызове не указан параметр <code className="fs-6">text</code>, поэтому предполагается, что <code className="fs-6">text === undefined</code>.</p>
    <p>Если мы хотим задать параметру <code className="fs-6">text</code> значение по умолчанию, мы должны указать его после <code className="fs-6">=</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function showMessage(from, *!*text = 'текст не добавлен'*/!*) {`} <br />
            {`    alert( from + ': ' + text );`} <br />
            {`}`} <br />
            showMessage(&quot;Аня&quot;); // Аня: текст не добавлен
        </code>
    </pre>
    <p>Теперь, если параметр <code className="fs-6">text</code> не указан, его значением будет <code className="fs-6">&quot;текст не добавлен&quot;</code></p>
    <p>В данном случае <code className="fs-6">&quot;текст не добавлен&quot;</code> это строка, но на её месте могло бы быть и более сложное выражение, которое бы вычислялось и присваивалось при отсутствии параметра. Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function showMessage(from, text = anotherFunction()) {`} <br />
            {`    // anotherFunction() выполнится только если не передан text`} <br />
            {`    // результатом будет значение text`} <br />
            {`}`}
        </code>
    </pre>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>В JavaScript параметры по умолчанию вычисляются каждый раз, когда функция вызывается без соответствующего параметра. В примере выше <code className="fs-6">anotherFunction()</code> будет вызываться каждый раз, когда <code className="fs-6">showMessage()</code> вызывается без параметра <code className="fs-6">text</code>.</p>
    </div>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Ранние версии JavaScript не поддерживали параметры по умолчанию. Поэтому существуют альтернативные способы, которые могут встречаться в старых скриптах.</p>
        <p>Например, явная проверка на `undefined`:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`function showMessage(from, text) {`} <br />
                {`    *!*`} <br />
                {`    if (text === undefined) {`} <br />
                {`        text = 'текст не добавлен';`} <br />
                {`    }`} <br />
                {`    */!*`} <br />
                {`    alert( from + ': ' + text );`} <br />
                {`}`}
            </code>
        </pre>
        <p>...Или с помощью оператора `||`:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`function showMessage(from, text) {`} <br />
                {`// Если значение text ложно, тогда присвоить параметру text значение по умолчанию`} <br />
                {`// заметим, что при этом пустая строка text === '' будет также считаться отсутствующим значением`} <br />
                {`text = text || 'текст не добавлен';`} <br />
                {`...`} <br />
                {`}`}
            </code>
        </pre>
    </div>

    <h2>Возврат значения</h2>
    <p>Функция может вернуть результат, который будет передан в вызвавший её код.</p>
    <p>Простейшим примером может служить функция сложения двух чисел:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function sum(a, b) {`} <br />
            {`    *!*return*/!* a + b;`} <br />
            {`}`} <br />
            let result = sum(1, 2); <br />
            alert( result ); // 3
        </code>
    </pre>
    <p>Директива <code className="fs-6">return</code> может находиться в любом месте тела функции. Как только выполнение доходит до этого места, функция останавливается, и значение возвращается в вызвавший её код (присваивается переменной <code className="fs-6">result</code> выше).</p>
    <p>Вызовов <code className="fs-6">return</code> может быть несколько, например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function checkAge(age) {`} <br />
            {`    if (age > 18) {`} <br />
            {`        *!*`} <br />
            {`        return true;`} <br />
            {`        */!*`} <br />
            {`    } else {`} <br />
            {`        *!*`} <br />
            {`        return confirm('А родители разрешили?');`} <br />
            {`        */!*`} <br />
            {`    }`} <br />
            {`}`} <br />
            {`let age = prompt(Сколько вам лет?', 18);`} <br />
            {`if ( checkAge(age') ) {`} <br />
            {`    alert( 'Доступ получен' );`} <br />
            {`} else {`} <br />
            {`    alert( 'Доступ закрыт' );`} <br />
            {`}`}
        </code>
    </pre>
    <p>Возможно использовать <code className="fs-6">return</code> и без значения. Это приведёт к немедленному выходу из функции.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function showMovie(age) {`} <br />
            {`    if ( !checkAge(age) ) {`} <br />
            {`        *!*`} <br />
            {`        return;`} <br />
            {`        */!*`} <br />
            {`    }`} <br />
            {`    alert( 'Вам показывается кино' ); // (*)`} <br />
            {`    // ...`} <br />
            {`}`}
        </code>
    </pre>
    <p>В коде выше, если <code className="fs-6">checkAge(age)</code> вернёт <code className="fs-6">false</code>, <code className="fs-6">showMovie</code> не выполнит <code className="fs-6">alert</code>.</p>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Результат функции с пустым <code className="fs-6">return</code> или без него - <code className="fs-6">undefined</code>. Если функция не возвращает значения, это всё равно, как если бы она возвращала <code className="fs-6">undefined</code>:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`function doNothing() { /* пусто */ }`} <br />
                {`alert( doNothing() === undefined ); // true`}
            </code>
        </pre>
        <p>Пустой <code className="fs-6">return</code> аналогичен <code className="fs-6">return undefined</code>:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`function doNothing() {`} <br />
                {`    return;`} <br />
                {`}`} <br />
                {`alert( doNothing() === undefined ); // true`}
        </code>
    </pre>
    </div>
    
    <div className="fst-italic border-3 border-start border-danger px-3">
        <p>Никогда не добавляйте перевод строки между <code className="fs-6">return</code> и его значением.</p>
        <p>Для длинного выражения в <code className="fs-6">return</code> может быть заманчиво разместить его на нескольких отдельных строках, например так:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                return <br />
                (some + long + expression + or + whatever * f(a) + f(b))
            </code>
        </pre>
        <p>Код не выполнится, потому что интерпретатор JavaScript подставит точку с запятой после `return`. Для него это будет выглядеть так:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                return*!*;*/!* <br />
                (some + long + expression + or + whatever * f(a) + f(b))
            </code>
        </pre>
        <p>Таким образом, это фактически стало пустым <code className="fs-6">return</code>.</p>
        <p>Если мы хотим, чтобы возвращаемое выражение занимало несколько строк, нужно начать его на той же строке, что и <code className="fs-6">return</code>. Или, хотя бы, поставить там открывающую скобку, вот так:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`return (`} <br />
                {`    some + long + expression`} <br />
                {`    + or +`} <br />
                {`    whatever * f(a) + f(b)`} <br />
                {`)`}
            </code>
        </pre>
        <p>И тогда всё сработает, как задумано.</p>
    </div>
    
    <h2>Выбор имени функции</h2>
    <p>Функция - это действие. Поэтому имя функции обычно является глаголом. Оно должно быть простым, точным и описывать действие функции, чтобы программист, который будет читать код, получил верное представление о том, что делает функция.</p>
    <p>Как правило, используются глагольные префиксы, обозначающие общий характер действия, после которых следует уточнение. Обычно в командах разработчиков действуют соглашения, касающиеся значений этих префиксов.</p>
    <p>Например, функции, начинающиеся с <code className="fs-6">&quot;show&quot;</code> обычно что-то показывают.</p>
    <p>Функции, начинающиеся с...</p>
    <ul>
        <li><code className="fs-6">&quot;get…&quot;</code> -- возвращают значение,</li>
        <li><code className="fs-6">&quot;calc…&quot;</code> -- что-то вычисляют,</li>
        <li><code className="fs-6">&quot;create…&quot;</code> -- что-то создают,</li>
        <li><code className="fs-6">&quot;check…&quot;</code> -- что-то проверяют и возвращают логическое значение, и т.д.</li>
    </ul>
    <p>Примеры таких имён:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            showMessage(..)     // показывает сообщение <br />
            getAge(..)          // возвращает возраст (в каком-либо значении) <br />
            calcSum(..)         // вычисляет сумму и возвращает результат <br />
            createForm(..)      // создаёт форму (и обычно возвращает её) <br />
            checkPermission(..) // проверяет доступ, возвращая true/false
        </code>
    </pre>
    <p>Благодаря префиксам, при первом взгляде на имя функции становится понятным что делает её код, и какое значение она может возвращать.</p>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Функция должна делать только то, что явно подразумевается её названием. И это должно быть одним действием.</p>
        <p>Два независимых действия обычно подразумевают две функции, даже если предполагается, что они будут вызываться вместе (в этом случае мы можем создать третью функцию, которая будет их вызывать). Несколько примеров, которые нарушают это правило:</p>
        <p>- <em>getAge</em> - будет плохим выбором, если функция будет выводить <code className="fs-6">alert</code> с возрастом (должна только возвращать его).</p>
        <p>- <em>createForm</em> - будет плохим выбором, если функция будет изменять документ, добавляя форму в него (должна только создавать форму и возвращать её).</p>
        <p>- <em>checkPermission</em> - будет плохим выбором, если функция будет отображать сообщение с текстом `доступ разрешён/запрещён` (должна только выполнять проверку и возвращать её результат).</p>
        <p>В этих примерах использовались общепринятые смыслы префиксов. Конечно, вы в команде можете договориться о других значениях, но обычно они мало отличаются от общепринятых. В любом случае вы и ваша команда должны точно понимать, что значит префикс, что функция с ним может делать, а чего не может.</p>
    </div>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Имена функций, которые используются очень часто, иногда делают сверхкороткими.</p>
        <p>Например, во фреймворке <a href="https://jquery.com">jQuery</a> есть функция с именем <code className="fs-6">$</code>. В библиотеке <a href="https://lodash.com/">Lodash</a> основная функция представлена именем <code className="fs-6">_</code>.</p>
        <p>Это исключения. В основном имена функций должны быть в меру краткими и описательными.</p>
    </div>
    
    <h2>Функции == Комментарии</h2>
    <p>Функции должны быть короткими и делать только что-то одно. Если это что-то большое, имеет смысл разбить функцию на несколько меньших. Иногда следовать этому правилу непросто, но это определённо хорошее правило.</p>
    <p>Небольшие функции не только облегчают тестирование и отладку -- само существование таких функций выполняет роль хороших комментариев!</p>
    <p>Например, сравним ниже две функции <code className="fs-6">showPrimes(n)</code>. Каждая из них выводит <a href="https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE">простое число</a> до <code className="fs-6">n</code>.</p>
    <p>Первый вариант использует метку <code className="fs-6">nextPrime</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function showPrimes(n) {`} <br />
            {`    nextPrime: for (let i = 2; i &lt; n; i++) {`} <br />
            {`        for (let j = 2; j &lt; i; j++) {`} <br />
            {`            if (i % j == 0) continue nextPrime;`} <br />
            {`        }`} <br />
            {`        alert( i ); // простое`} <br />
            {`    }`} <br />
            {`}`}
        </code>
    </pre>
    <p>Второй вариант использует дополнительную функцию <code className="fs-6">isPrime(n)</code> для проверки на простое:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function showPrimes(n) {`} <br />
            {`    for (let i = 2; i &lt; n; i++) {`} <br />
            {`        *!*if (!isPrime(i)) continue;*/!*`} <br />
            {`        alert(i);  // простое`} <br />
            {`    }`} <br />
            {`}`} <br />
            {`function isPrime(n) {`} <br />
            {`    for (let i = 2; i &lt; n; i++) {`} <br />
            {`        if ( n % i == 0) return false;`} <br />
            {`    }`} <br />
            {`    return true;`} <br />
            {`}`}
        </code>
    </pre>
    <p>Второй вариант легче для понимания, не правда ли? Вместо куска кода мы видим название действия (<code className="fs-6">isPrime</code>). Иногда разработчики называют такой код <em>самодокументируемым</em>.</p>
    <p>Таким образом, допустимо создавать функции, даже если мы не планируем повторно использовать их. Такие функции структурируют код и делают его более понятным.</p>
    <h2>Итого</h2>
    <p>Объявление функции имеет вид:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function имя(параметры, через, запятую) {`} <br />
            {`    * тело, код функции */`} <br />
            {`}`}
        </code>
    </pre>
    <ul>
        <li>Передаваемые значения копируются в параметры функции и становятся локальными переменными.</li>
        <li>Функции имеют доступ к внешним переменным. Но это работает только изнутри наружу. Код вне функции не имеет доступа к её локальным переменным.</li>
        <li>Функция может возвращать значение. Если этого не происходит, тогда результат равен <code className="fs-6">undefined</code>.</li>
    </ul>
    <p>Для того, чтобы сделать код более чистым и понятным, рекомендуется использовать локальные переменные и параметры функций, не пользоваться внешними переменными.</p>
    <p>Функция, которая получает параметры, работает с ними и затем возвращает результат, гораздо понятнее функции, вызываемой без параметров, но изменяющей внешние переменные, что чревато побочными эффектами.</p>
    <p>Именование функций:</p>
    <ul>
        <li>Имя функции должно понятно и чётко отражать, что она делает. Увидев её вызов в коде, вы должны тут же понимать, что она делает, и что возвращает.</li>
        <li>Функция - это действие, поэтому её имя обычно является глаголом.</li>
        <li>Есть много общепринятых префиксов, таких как: <code className="fs-6">create…</code>, <code className="fs-6">show…</code>, <code className="fs-6">get…</code>, <code className="fs-6">check…</code> и т.д. Пользуйтесь ими как подсказками, поясняющими, что делает функция.</li>
    </ul>
    <p>Функции являются основными строительными блоками скриптов. Мы рассмотрели лишь основы функций в JavaScript, но уже сейчас можем создавать и использовать их. Это только начало пути.</p>

    </>
    );
}

export default Functions;