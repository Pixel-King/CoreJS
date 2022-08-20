import * as React from 'react';

const FunctionExpressions: React.FC =() => {
    return (
    <>

    <h1>Function Expression</h1>
    <p>Функция в JavaScript - это не магическая языковая структура, а особого типа значение.</p>
    <p>Синтаксис, который мы использовали до этого, называется <em>Function Declaration</em> (Объявление Функции):</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function sayHi() {`} <br />
            {`    alert( 'Привет' );`} <br />
            {`}`}
        </code>
    </pre>
    <p>Существует ещё один синтаксис создания функций, который называется <em>Function Expression</em> (Функциональное Выражение).</p>
    <p>Оно выглядит вот так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let sayHi = function() {`} <br />
            {`    alert( 'Привет' );`} <br />
            {`};`}
        </code>
    </pre>
    <p>В коде выше функция создаётся и явно присваивается переменной, как любое другое значение. По сути без разницы, как мы определили функцию, это просто значение, хранимое в переменной <code className="fs-6">sayHi</code>.</p>
    <p>Смысл обоих примеров кода одинаков: &quot;создать функцию и поместить её значение в переменную <code className="fs-6">sayHi</code>&quot;.</p>
    <p>Мы можем даже вывести это значение с помощью <code className="fs-6">alert</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function sayHi() {`} <br />
            {`    alert( 'Привет' );`} <br />
            {`}`} <br />
            *!* <br />
            alert( sayHi ); // выведет код функции <br />
            */!*
        </code>
    </pre>
    <p>Обратите внимание, что последняя строка не вызывает функцию <code className="fs-6">sayHi</code>, после её имени нет круглых скобок. Существуют языки программирования, в которых любое упоминание имени функции совершает её вызов. JavaScript - не один из них.</p>
    <p>В JavaScript функции - это значения, поэтому мы и обращаемся с ними, как со значениями. Код выше выведет строковое представление функции, которое является её исходным кодом.</p>
    <p>Конечно, функция - не обычное значение, в том смысле, что мы можем вызвать его при помощи скобок: <code className="fs-6">sayHi()</code>.</p>
    <p>Но всё же это значение. Поэтому мы можем делать с ним то же самое, что и с любым другим значением.</p>
    <p>Мы можем скопировать функцию в другую переменную:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function sayHi() {   // (1) создаём`} <br />
            {`    alert( 'Привет' );`} <br />
            {`}`} <br />
            let func = sayHi;    // (2) копируем <br />
            func(); // Привет    // (3) вызываем копию (работает)! <br />
            sayHi(); // Привет   //     прежняя тоже работает (почему бы нет)
        </code>
    </pre>
    <p>Давайте подробно разберём всё, что тут произошло:</p>
    <ol>
        <li>Объявление Function Declaration <code className="fs-6">(1)</code> создало функцию и присвоило её значение переменной с именем <code className="fs-6">sayHi</code>.</li>
        <li>В строке <code className="fs-6">(2)</code> мы скопировали её значение в переменную <code className="fs-6">func</code>. Обратите внимание (ещё раз): нет круглых скобок после <code className="fs-6">sayHi</code>. Если бы они были, то выражение <code className="fs-6">func = sayHi()</code> записало бы <em>результат вызова</em> <code className="fs-6">sayHi()</code> в переменную <code className="fs-6">func</code>, а не саму <em>функцию</em> <code className="fs-6">sayHi</code>.</li>
        <li>Теперь функция может быть вызвана с помощью обеих переменных <code className="fs-6">sayHi()</code> и <code className="fs-6">func()</code>.</li>
    </ol>
    <p>Заметим, что мы могли бы использовать и Function Expression для того, чтобы создать <code className="fs-6">sayHi</code> в первой строке:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let sayHi = function() {`} <br />
            {`    alert( 'Привет' );`} <br />
            {`};`} <br />
            let func = sayHi; <br />
            // ...
        </code>
    </pre>
    <p>Результат был бы таким же.</p>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>У вас мог возникнуть вопрос: Почему в Function Expression ставится точка с запятой <code className="fs-6">;</code> на конце, а в Function Declaration нет:</p>
        <pre>
            <code className="fs-6">
                {`function sayHi() {`} <br />
                {`    // ...`} <br />
                {`}`} <br />
                {``} <br />
                {`let sayHi = function() {`} <br />
                {`    // ...`} <br />
                {`}*!*;*/!*`}
            </code>
        </pre>
        <p>Ответ прост:</p>
        <p>- Нет необходимости в <code className="fs-6">;</code> в конце блоков кода и синтаксических конструкций, которые их используют, таких как <code className="fs-6">if {`{ ... }`}</code>, <code className="fs-6">for {  }</code>, <code className="fs-6">function f { }</code> и т.д.</p>
        <p>- Function Expression использует внутри себя инструкции присваивания <code className="fs-6">let sayHi = ...;</code> как значение. Это не блок кода, а выражение с присваиванием. Таким образом, точка с запятой не относится непосредственно к Function Expression, она лишь завершает инструкцию.</p>
    </div>

    <h2>Функции-&quot;колбэки&quot;</h2>
    <p>Рассмотрим ещё примеры функциональных выражений и передачи функции как значения.</p>
    <p>Давайте напишем функцию <code className="fs-6">ask(question, yes, no)</code> с тремя параметрами:</p>
    <p><code className="fs-6">question</code>
    : Текст вопроса</p>
    <p><code className="fs-6">yes</code>
    : Функция, которая будет вызываться, если ответ будет &quot;Yes&quot;</p>
    <p><code className="fs-6">no</code>
    : Функция, которая будет вызываться, если ответ будет &quot;No&quot;</p>
    <p>Наша функция должна задать вопрос <code className="fs-6">question</code> и, в зависимости от того, как ответит пользователь, вызвать <code className="fs-6">yes()</code> или <code className="fs-6">no()</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            *!* <br />
            {`function ask(question, yes, no) {`} <br />
            {`    if (confirm(question)) yes()`} <br />
            {`    else no();`} <br />
            {`}`} <br />
            {`*/!*`} <br />
            {``} <br />
            {`function showOk() {`} <br />
            {`    alert( 'Вы согласны.' );`} <br />
            {`}`} <br />
            {``} <br />
            {`function showCancel() {`} <br />
            {`    alert( 'Вы отменили выполнение.' );`} <br />
            {`}`} <br />
            {``} <br />
            {`// использование: функции showOk, showCancel передаются в качестве аргументов ask`} <br />
            ask(&quot;Вы согласны?&quot;, showOk, showCancel);
        </code>
    </pre>
    <p>На практике подобные функции очень полезны. Основное отличие &quot;реальной&quot; функции <code className="fs-6">ask</code> от примера выше будет в том, что она использует более сложные способы взаимодействия с пользователем, чем простой вызов <code className="fs-6">confirm</code>. В браузерах такие функции обычно отображают красивые диалоговые окна. Но это уже другая история.</p>
    <p><strong>Аргументы функции <code className="fs-6">ask</code> ещё называют <em>функциями-колбэками</em> или просто <em>колбэками</em>.</strong></p>
    <p>Ключевая идея в том, что мы передаём функцию и ожидаем, что она вызовется обратно (от англ. &quot;call back&quot; - обратный вызов) когда-нибудь позже, если это будет необходимо. В нашем случае, <code className="fs-6">showOk</code> становится <em>колбэком</em> для ответа &quot;yes&quot;, а <code className="fs-6">showCancel</code> -- для ответа &quot;no&quot;.</p>
    <p>Мы можем переписать этот пример значительно короче, используя Function Expression:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function ask(question, yes, no) {`} <br />
            {`    if (confirm(question)) yes()`} <br />
            {`    else no();`} <br />
            {`}`} <br />
            {``} <br />
            {`*!*`} <br />
            {`ask(`} <br />
            {`    'Вы согласны?',`} <br />
            {`    function() { alert('Вы согласились.'); },`} <br />
            {`    function() { alert('Вы отменили выполнение.'); }`} <br />
            {`);`} <br />
            {`*/!*`}
        </code>
    </pre>
    <p>Здесь функции объявляются прямо внутри вызова <code className="fs-6">ask(...)</code>. У них нет имён, поэтому они называются <em>анонимными</em>. Такие функции недоступны снаружи <code className="fs-6">ask</code> (потому что они не присвоены переменным), но это как раз то, что нам нужно.</p>
    <p>Подобный код, появившийся в нашем скрипте выглядит очень естественно, в духе JavaScript.</p>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Обычные значения, такие как строки или числа представляют собой <em>данные</em>. Функции, с другой стороны, можно воспринимать как &quot;действия&quot;. Мы можем передавать их из переменной в переменную и запускать, когда захотим.</p>
    </div>

    <h2>Function Expression в сравнении с Function Declaration</h2>
    <p>Давайте разберём ключевые отличия Function Declaration от Function Expression.</p>
    <p>Во-первых, синтаксис: как определить, что есть что в коде.</p>
    <ul>
        <li>
            <p>Function Declaration: функция объявляется отдельной конструкцией &quot;function...&quot; в основном потоке кода.</p>
            <pre className="text-bg-dark px-3 py-3">
                <code className="fs-6">
                    // Function Declaration <br />
                    {`function sum(a, b) {`} <br />
                    {`    return a + b;`} <br />
                    {`}`}
                </code>
            </pre>
        </li>
        <li>
            <p>Function Expression: функция, созданная внутри другого выражения или синтаксической конструкции. В данном случае функция создаётся в правой части &quot;выражения присваивания&quot; <code className="fs-6">=</code>:</p>
            <pre className="text-bg-dark px-3 py-3">
                <code className="fs-6">
                    // Function Expression <br />
                    {`let sum = function(a, b) {`} <br />
                    {`    return a + b;`} <br />
                    {`};`}
                </code>
            </pre>
        </li>
    </ul>
    <p>Более тонкое отличие состоит, в том, <em>когда</em> создаётся функция движком JavaScript.</p>
    <p><strong>Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.</strong></p>
    <p>После того, как поток выполнения достигнет правой части выражения присваивания <code className="fs-6">let sum = function…</code> - с этого момента, функция считается созданной и может быть использована (присвоена переменной, вызвана и т.д. ).</p>
    <p>С Function Declaration всё иначе.</p>
    <p><strong>Function Declaration можно использовать во всем скрипте (или блоке кода, если функция объявлена в блоке).</strong></p>
    <p>Другими словами, когда движок JavaScript <em>готовится</em> выполнять скрипт или блок кода, прежде всего он ищет в нём Function Declaration и создаёт все такие функции.  Можно считать этот процесс &quot;стадией инициализации&quot;.</p>
    <p>И только после того, как все объявления Function Declaration будут обработаны, продолжится выполнение.</p>
    <p>В результате, функции, созданные, как Function Declaration могут быть вызваны раньше своих определений.</p>
    <p>Например, так будет работать:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            *!* <br />
            sayHi(&quot;Вася&quot;); // Привет, Вася <br />
            */!* <br />
            {``} <br />
            {`function sayHi(name) {`} <br />
            {'    alert( `Привет, ${name}` );'} <br />
            {`}`}
        </code>
    </pre>
    <p>Функция <code className="fs-6">sayHi</code> была создана, когда движок JavaScript подготавливал скрипт к выполнению, и такая функция видна повсюду в этом скрипте.</p>
    <p>...Если бы это было Function Expression, то такой код вызвал бы ошибку:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            *!* <br />
            sayHi(&quot;Вася&quot;); // ошибка! <br />
            */!* <br />
            {``} <br />
            {`let sayHi = function(name) {  // (*) магии больше нет`} <br />
            {'    alert( `Привет, ${name}` );'} <br />
            {`};`}
        </code>
    </pre>
    <p>Функции, объявленные при помощи Function Expression, создаются тогда, когда выполнение доходит до них. Это случится только на строке, помеченной звёздочкой <code className="fs-6">(*)</code>. Слишком поздно.</p>
    <p>Ещё одна важная особенность Function Declaration заключается в их блочной области видимости.</p>
    <p><strong>В строгом режиме, когда Function Declaration находится в блоке <code className="fs-6">{`{...}`}</code>, функция доступна везде внутри блока. Но не снаружи него.</strong></p>
    <p>Для примера давайте представим, что нам нужно создать функцию <code className="fs-6">welcome()</code> в зависимости от значения переменной <code className="fs-6">age</code>, которое мы получим во время выполнения кода. И затем запланируем использовать её когда-нибудь в будущем.</p>
    <p>Такой код, использующий Function Declaration, работать не будет:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let age = prompt(&quot;Сколько Вам лет?&quot;, 18); <br />
            {``} <br />
            // в зависимости от условия объявляем функцию <br />
            {`if (age < 18) {`} <br />
            {``} <br />
            {`    function welcome() {`} <br />
            {`        alert('Привет!');`} <br />
            {`    }`} <br />
            {``} <br />
            {`} else {`} <br />
            {``} <br />
            {`    function welcome() {`} <br />
            {`        alert('Здравствуйте!');`} <br />
            {`    }`} <br />
            {``} <br />
            {`}`} <br />
            {``} <br />
            // ...не работает <br />
            *!* <br />
            welcome(); // Error: welcome is not defined <br />
            */!*
        </code>
    </pre>
    <p>Это произошло, так как объявление Function Declaration видимо только внутри блока кода, в котором располагается.</p>
    <p>Вот ещё один пример:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let age = 16; // присвоим для примера 16 <br />
            {``} <br />
            {`if (age < 18) {`} <br />
            {`    *!*`} <br />
            {`    welcome();`}             // (выполнится) <br />
            {`    */!*`} <br />
            {``} <br />
            {`    function welcome() {`} <br />
            {`        alert('Привет!');`}  // Function Declaration доступно <br />
            {`    }`}                      // во всём блоке кода, в котором объявлено <br />
            {``} <br />
            {`    *!*`} <br />
            {`    welcome();`}             // (выполнится) <br />
            {`    */!*`} <br />
            {``} <br />
            {`} else {`} <br />
            {``} <br />
            {`    function welcome() {`} <br />
            {`        alert('Здравствуйте!');`} <br />
            {`    }`} <br />
            {`}`} <br />
            {``} <br />
            // здесь фигурная скобка закрывается, <br />
            // поэтому Function Declaration, созданные внутри блока кода выше - недоступны отсюда. <br />
            {``} <br />
            *!* <br />
            welcome(); // Ошибка: welcome is not defined <br />
            */!*
        </code>
    </pre>
    <p>Что можно сделать, чтобы <code className="fs-6">welcome</code> была видима снаружи <code className="fs-6">if</code>?</p>
    <p>Верным подходом будет воспользоваться функцией, объявленной при помощи Function Expression, и присвоить значение <code className="fs-6">welcome</code> переменной, объявленной снаружи <code className="fs-6">if</code>, что обеспечит нам нужную видимость.</p>
    <p>Такой код работает, как ожидалось:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let age = prompt('Сколько Вам лет?', 18);`} <br />
            {``} <br />
            {`let welcome;`} <br />
            {``} <br />
            {`if (age < 18) {`} <br />
            {``} <br />
            {`    welcome = function() {`} <br />
            {`        alert('Привет!');`} <br />
            {`    };`} <br />
            {``} <br />
            {`} else {`} <br />
            {``} <br />
            {`    welcome = function() {`} <br />
            {`        alert('Здравствуйте!');`} <br />
            {`    };`} <br />
            {`}`} <br />
            {``} <br />
            *!* <br />
            welcome(); // теперь всё в порядке <br />
            */!*
        </code>
    </pre>
    <p>Можно упростить этот код ещё сильнее, используя условный оператор <code className="fs-6">?</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let age = prompt(&quot;Сколько Вам лет?&quot;, 18); <br />
            {``} <br />
            let welcome = (age &lt; 18) ? <br />
            {`function() { alert('Привет!'); } :`} <br />
            {`function() { alert('Здравствуйте!'); };`} <br />
            {``} <br />
            *!* <br />
            welcome(); // теперь всё в порядке <br />
            */!*
        </code>
    </pre>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Как правило, если нам понадобилась функция, в первую очередь нужно рассматривать синтаксис Function Declaration, который мы использовали до этого. Он даёт нам больше свободы в том, как мы можем организовывать код. Функции, объявленные таким образом, можно вызывать до их объявления.</p>
        <p>Также функции вида <code className="fs-6">{`function f(…) {…}`}</code> чуть более заметны в коде, чем <code className="fs-6">{`let f = function(…) {…}`}</code>. Function Declaration легче &quot;ловятся глазами&quot;.</p>
        <p>...Но если Function Declaration нам не подходит по какой-то причине (мы рассмотрели это в примере выше), то можно использовать объявление при помощи Function Expression.</p>
    </div>

    <h2>Итого</h2>
    <ul>
        <li>Функции - это значения. Они могут быть присвоены, скопированы или объявлены в любом месте кода.</li>
        <li>Если функция объявлена как отдельная инструкция в основном потоке кода, то это Function Declaration.</li>
        <li>Если функция была создана как часть выражения, то считается, что эта функция объявлена при помощи Function Expression.</li>
        <li>Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.</li>
        <li>Функции, объявленные при помощи Function Expression, создаются, только когда поток выполнения достигает их.</li>
    </ul>
    <p>В большинстве случаев, когда нам нужно создать функцию, предпочтительно использовать Function Declaration, т.к. функция будет видима до своего объявления в коде. Это позволяет более гибко организовывать код и улучшает его читаемость.</p>
    <p>Таким образом, мы должны прибегать к объявлению функций при помощи Function Expression в случае, когда синтаксис Function Declaration не подходит для нашей задачи.</p>

    </>
    );
}

export default FunctionExpressions;