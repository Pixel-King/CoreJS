import * as React from 'react';

const LetVarConst: React.FC =() => {
    return (
    <>

    <h1>Устаревшее ключевое слово &quot;var&quot;</h1>
    <p>Мы уже знаем, что есть три способа объявления переменных:</p>
    <ol>
        <li><code className="fs-6">let</code></li>
        <li><code className="fs-6">const</code></li>
        <li><code className="fs-6">var</code></li>
    </ol>
    <p><code className="fs-6">let</code> и <code className="fs-6">const</code> ведут себя одинаково по отношению к лексическому окружению, области видимости.</p>
    <p>Но <code className="fs-6">var</code> - это совершенно другой зверь, берущий своё начало с давних времён. Обычно <code className="fs-6">var</code> не используется в современных скриптах, но всё ещё может скрываться в старых.</p>
    <p>На первый взгляд, поведение <code className="fs-6">var</code> похоже на <code className="fs-6">let</code>. Например, объявление переменной:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6"> 
            {`function sayHi() {`} <br />
            {`    var phrase = 'Привет'; // локальная переменная, 'var' вместо 'let'`} <br />
            {`    alert(phrase); // Привет`} <br />
            {`}`} <br />
            sayHi(); <br />
            alert(phrase); // Ошибка: phrase не определена
        </code>
    </pre>
    <p>...Однако, отличия всё же есть.</p>
    <h2>Для &quot;var&quot; не существует блочной области видимости</h2>
    <p>Область видимости переменных <code className="fs-6">var</code> ограничивается либо функцией, либо, если переменная глобальная, то скриптом. Такие переменные доступны за пределами блока.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`if (true) {`} <br />
            {`    var test = true; // используем var вместо let`} <br />
            {`}`} <br />
            *!* <br />
            alert(test); // true, переменная существует вне блока if <br />
            */!*
        </code>
    </pre>
    <p>Так как <code className="fs-6">var</code> игнорирует блоки, мы получили глобальную переменную <code className="fs-6">test</code>.</p>
    <p>А если бы мы использовали <code className="fs-6">let test</code> вместо <code className="fs-6">var test</code>, тогда переменная была бы видна только внутри <code className="fs-6">if</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`if (true) {`} <br />
            {`    let test = true; // используем let`} <br />
            {`}`} <br />
            *!* <br />
            alert(test); // Error: test is not defined <br />
            */!*
        </code>
    </pre>
    <p>Аналогично для циклов: <code className="fs-6">var</code> не может быть блочной или локальной внутри цикла:</p>
    <pre  className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`for (var i = 0; i &lt; 10; i++) {`} <br />
            {`    // ...`} <br />
            {`}`} <br />
            *!* <br />
            alert(i); // 10, переменная i доступна вне цикла, т.к. является глобальной переменной <br />
            */!*
        </code>
    </pre>
    <p>Если блок кода находится внутри функции, то <code className="fs-6">var</code> становится локальной переменной в этой функции:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function sayHi() {`} <br />
            {`    if (true) {`} <br />
            {`        var phrase = 'Привет';`} <br />
            {`    }`} <br />
            {`    alert(phrase); // срабатывает и выводит 'Привет'`} <br />
            {`}`} <br />
            sayHi(); <br />
            alert(phrase); // Ошибка: phrase не определена (видна в консоли разработчика)
        </code>
    </pre>
    <p>Как мы видим, <code className="fs-6">var</code> выходит за пределы блоков <code className="fs-6">if</code>, <code className="fs-6">for</code> и подобных. Это происходит потому, что на заре развития JavaScript блоки кода не имели лексического окружения. Поэтому можно сказать, что <code className="fs-6">var</code> - это пережиток прошлого.</p>
    <h2>&quot;var&quot; допускает повторное объявление</h2>
    <p>Если в блоке кода дважды объявить одну и ту же переменную <code className="fs-6">let</code>, будет ошибка:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let user; <br />
            let user; // SyntaxError: &#39;user&#39; has already been declared
        </code>
    </pre>
    <p>Используя <code className="fs-6">var</code>, можно переобъявлять переменную сколько угодно раз. Повторные <code className="fs-6">var</code> игнорируются:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            var user = &quot;Pete&quot;; <br />
            var user; // ничего не делает, переменная объявлена раньше <br />
            // ...нет ошибки <br />
            alert(user); // Pete
        </code>
    </pre>
    <p>Если дополнительно присвоить значение, то переменная примет новое значение:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6"> 
            var user = &quot;Pete&quot;; <br />
            var user = &quot;John&quot;; <br />
            alert(user); // John
        </code>
    </pre>
    <h2>&quot;var&quot; обрабатываются в начале запуска функции</h2>
    <p>Объявления переменных <code className="fs-6">var</code> обрабатываются в начале выполнения функции (или запуска скрипта, если переменная является глобальной).</p>
    <p>Другими словами, переменные <code className="fs-6">var</code> считаются объявленными с самого начала исполнения функции вне зависимости от того, в каком месте функции реально находятся их объявления (при условии, что они не находятся во вложенной функции).</p>
    <p>Т.е. этот код:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function sayHi() {`} <br />
            {`    phrase = 'Привет';`} <br />
            {`    alert(phrase);`} <br />
            {`    *!*`} <br />
            {'    var phrase;'} <br />
            {`    */!*`} <br />
            {`}`} <br />
            sayHi();
        </code>
    </pre>
    <p>...Технически полностью эквивалентен следующему (объявление переменной <code className="fs-6">var phrase</code> перемещено в начало функции):</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function sayHi() {`} <br />
            {`    *!*`} <br />
            {`    var phrase;`} <br />
            {`    */!*`} <br />
            {`    phrase = 'Привет';`} <br />
            {`    alert(phrase);`} <br />
            {`}`} <br />
            sayHi();
        </code>
    </pre>
    <p>...И даже коду ниже (как вы помните, блочная область видимости игнорируется):</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function sayHi() {`} <br />
            {`    phrase = 'Привет'; // (*)`} <br />
            {`    *!*`} <br />
            {`    if (false) {`} <br />
            {`        var phrase;`} <br />
            {`    }`} <br />
            {`    */!*`} <br />
            {`    alert(phrase);`} <br />
            {`}`} <br />
            sayHi();
        </code>
    </pre>
    <p>Это поведение называется &quot;hoisting&quot; (всплытие, поднятие), потому что все объявления переменных <code className="fs-6">var</code> &quot;всплывают&quot; в самый верх функции.</p>
    <p>В примере выше <code className="fs-6">if (false)</code> условие никогда не выполнится. Но это никаким образом не препятствует созданию переменной <code className="fs-6">var phrase</code>, которая находится внутри него, поскольку объявления <code className="fs-6">var</code> &quot;всплывают&quot; в начало функции. Т.е. в момент присвоения значения <code className="fs-6">(*)</code> переменная уже существует.</p>
    <p><strong>Объявления переменных &quot;всплывают&quot;, но присваивания значений - нет.</strong></p>
    <p>Это проще всего продемонстрировать на примере:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function sayHi() {`} <br />
            {`    alert(phrase);`} <br />
            {`    *!*`} <br />
            {`    var phrase = 'Привет';`} <br />
            {`    */!*`} <br />
            {`}`} <br />
            sayHi();
        </code>
    </pre>
    <p>Строка <code className="fs-6">var phrase = &quot;Привет&quot;</code> состоит из двух действий:</p>
    <ol>
        <li>Объявление переменной <code className="fs-6">var</code></li>
        <li>Присвоение значения в переменную <code className="fs-6">=</code>.</li>
    </ol>
    <p>Объявление переменной обрабатывается в начале выполнения функции (&quot;всплывает&quot;), однако присвоение значения всегда происходит в той строке кода, где оно указано. Т.е. код выполняется по следующему сценарию:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function sayHi() {`} <br />
            {`    *!*`} <br />
            {`    var phrase; // объявление переменной срабатывает вначале...`} <br />
            {`    */!*`} <br />
            {`    alert(phrase); // undefined`} <br />
            {`    *!*`} <br />
            {`    phrase = 'Привет'; // ...присвоение - в момент, когда исполнится данная строка кода.`} <br />
            {`    */!*`} <br />
            {`}`} <br />
            sayHi();
        </code>
    </pre>
    <p>Поскольку все объявления переменных <code className="fs-6">var</code> обрабатываются в начале функции, мы можем ссылаться на них в любом месте. Однако, переменные имеют значение <code className="fs-6">undefined</code> до строки с присвоением значения.</p>
    <p>В обоих примерах выше вызов <code className="fs-6">alert</code> происходил без ошибки, потому что переменная <code className="fs-6">phrase</code> уже существовала. Но её значение ещё не было присвоено, поэтому мы получали <code className="fs-6">undefined</code>.</p>
    <h2>Итого</h2>
    <p>Существует 2 основных отличия <code className="fs-6">var</code> от <code className="fs-6">let/const</code>:</p>
    <ol>
        <li>Переменные <code className="fs-6">var</code> не имеют блочной области видимости, они ограничены, как минимум, телом функции.</li>
        <li>Объявления (инициализация) переменных <code className="fs-6">var</code>производится в начале исполнения функции (или скрипта для глобальных переменных).</li>
    </ol>
    <p>Есть ещё одно небольшое отличие, относящееся к глобальному объекту, мы рассмотрим его в следующей главе.</p>
    <p>Эти особенности, как правило, не очень хорошо влияют на код. Блочная область видимости - это удобно. Поэтому много лет назад <code className="fs-6">let</code> и <code className="fs-6">const</code> были введены в стандарт и сейчас являются основным способом объявления переменных.</p>

    </>
    );
}

export default LetVarConst;