import * as React from 'react';

const TernaryOperator: React.FC =() => {
    return (
    <>

    <h1>Условное ветвление: if, &#39;?&#39;</h1>
    <p>Иногда нам нужно выполнить различные действия в зависимости от условий.</p>
    <p>Для этого мы можем использовать инструкцию <code className="fs-6">if</code> и условный оператор <code className="fs-6">?</code>, который также называют оператором &quot;вопросительный знак&quot;.</p>
    <h2>Инструкция &quot;if&quot;</h2>
    <p>Инструкция <code className="fs-6">if(...)</code> вычисляет условие в скобках и, если результат <code className="fs-6">true</code>, то выполняет блок кода.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let year = prompt(&#39;В каком году была опубликована спецификация ECMAScript-2015?&#39;, &#39;&#39;); <br />
            *!* <br />
            if (year == 2015) alert( &#39;Вы правы!&#39; ); <br />
            */!*
        </code>
    </pre>
    <p>В примере выше, условие - это простая проверка на равенство (<code className="fs-6">year == 2015</code>), но оно может быть и гораздо более сложным.</p>
    <p>Если мы хотим выполнить более одной инструкции, то нужно заключить блок кода в фигурные скобки:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6"> <br />
            {`if (year == 2015) {`} <br />
            {`    alert( 'Правильно!' );`} <br />
            {`    alert( 'Вы такой умный!' );`} <br />
            {`}`}
        </code>
    </pre>
    <p>Мы рекомендуем использовать фигурные скобки <code className="fs-6">{`{}`}</code> всегда, когда вы используете инструкцию <code className="fs-6">if</code>, даже если выполняется только одна команда. Это улучшает читаемость кода.</p>
    <h2>Преобразование к логическому типу</h2>
    <p>Инструкция <code className="fs-6">if (…)</code> вычисляет выражение в скобках и преобразует результат к логическому типу.</p>
    <p>Давайте вспомним правила преобразования типов:</p>
    <ul>
        <li>Число <code className="fs-6">0</code>, пустая строка <code className="fs-6">&quot;&quot;</code>, <code className="fs-6">null</code>, <code className="fs-6">undefined</code> и <code className="fs-6">NaN</code> становятся <code className="fs-6">false</code>. Из-за этого их называют &quot;ложными&quot; (&quot;falsy&quot;) значениями.</li>
        <li>Остальные значения становятся <code className="fs-6">true</code>, поэтому их называют &quot;правдивыми&quot; (&quot;truthy&quot;).</li>
    </ul>
    <p>Таким образом, код при таком условии никогда не выполнится:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`if (0) { // 0 is falsy`} <br />
            {`    ...`} <br />
            {`}`}
        </code>
    </pre>
    <p>...а при таком - выполнится всегда:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`if (1) { // 1 is truthy`} <br />
            {`    ...`} <br />
            {`}`}
        </code>
    </pre>
    <p>Мы также можем передать заранее вычисленное в переменной логическое значение в <code className="fs-6">if</code>, например так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let condition = (year == 2015); // преобразуется к true или false`} <br />
            {`if (condition) {`} <br />
            {`    ...`} <br />
            {`}`}
        </code>
    </pre>
    <h2>Блок &quot;else&quot;</h2>
    <p>Инструкция <code className="fs-6">if</code> может содержать необязательный блок &quot;else&quot; (&quot;иначе&quot;). Он выполняется, когда условие ложно.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let year = prompt(&#39;В каком году была опубликована спецификация ECMAScript-2015?&#39;, &#39;&#39;); <br />
            {`if (year == 2015) {`} <br />
            {`    alert( 'Да вы знаток!' );`} <br />
            {`} else {`} <br />
            {`    alert( 'А вот и неправильно!' ); // любое значение, кроме 2015`} <br />
            {`}`}
        </code>
    </pre>
    <h2>Несколько условий: &quot;else if&quot;</h2>
    <p>Иногда, нужно проверить несколько вариантов условия. Для этого используется блок <code className="fs-6">else if</code>.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let year = prompt(&#39;В каком году была опубликована спецификация ECMAScript-2015?&#39;, &#39;&#39;); <br />
            {`if (year < 2015) {`} <br />
            {`    alert( 'Это слишком рано...' );`} <br />
            {`} else if (year > 2015) {`} <br />
            {`    alert( 'Это поздновато' );`} <br />
            {`} else {`} <br />
            {`    alert( 'Верно!' );`} <br />
            {`}`}
        </code>
    </pre>
    <p>В приведённом выше коде JavaScript сначала проверит <code className="fs-6">year &lt; 2015</code>. Если это неверно, он переходит к следующему условию <code className="fs-6">year &gt; 2015</code>. Если оно тоже ложно, тогда сработает последний <code className="fs-6">alert</code>.</p>
    <p>Блоков <code className="fs-6">else if</code> может быть и больше. Присутствие блока <code className="fs-6">else</code> не является обязательным.</p>
    <h2>Условный оператор &#39;?&#39;</h2>
    <p>Иногда нам нужно определить переменную в зависимости от условия.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let accessAllowed; <br />
            let age = prompt(&#39;Сколько вам лет?&#39;, &#39;&#39;); <br />
            *!* <br />
            {`if (age > 18) {`} <br />
            {`    accessAllowed = true;`} <br />
            {`} else {`} <br />
            {`    accessAllowed = false;`} <br />
            {`}`} <br />
            /!* <br />
            alert(accessAllowed);
        </code>
    </pre>
    <p>Так называемый &quot;условный&quot; оператор &quot;вопросительный знак&quot; позволяет нам сделать это более коротким и простым способом.</p>
    <p>Оператор представлен знаком вопроса <code className="fs-6">?</code>. Его также называют &quot;тернарный&quot;, так как этот оператор, единственный в своём роде, имеет три аргумента.</p>
    <p>Синтаксис:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let result = условие ? значение1 : значение2;
        </code>
    </pre>
    <p>Сначала вычисляется <code className="fs-6">условие</code>: если оно истинно, тогда возвращается <code className="fs-6">значение1</code>, в противном случае - <code className="fs-6">значение2</code>.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let accessAllowed = (age &gt; 18) ? true : false;
        </code>
    </pre>
    <p>Технически, мы можем опустить круглые скобки вокруг <code className="fs-6">age &gt; 18</code>. Оператор вопросительного знака имеет низкий приоритет, поэтому он выполняется после сравнения <code className="fs-6">&gt;</code>.</p>
    <p>Этот пример будет делать то же самое, что и предыдущий:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            // оператор сравнения &quot;age &gt; 18&quot; выполняется первым в любом случае <br />
            // (нет необходимости заключать его в скобки) <br />
            let accessAllowed = age &gt; 18 ? true : false;
        </code>
    </pre>
    <p>Но скобки делают код более простым для восприятия, поэтому мы рекомендуем их использовать.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>В примере выше вы можете избежать использования оператора вопросительного знака <code className="fs-6">?</code>, т.к. сравнение само по себе уже возвращает `true/false`:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                // то же самое <br />
                let accessAllowed = age &gt; 18;
            </code>
        </pre>
    </div>
    
    <h2>Несколько операторов &#39;?&#39;</h2>
    <p>Последовательность операторов вопросительного знака <code className="fs-6">?</code> позволяет вернуть значение, которое зависит от более чем одного условия.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let age = prompt(&#39;Возраст?&#39;, 18); <br />
            let message = (age &lt; 3) ? &#39;Здравствуй, малыш!&#39; : <br />
            (age &lt; 18) ? &#39;Привет!&#39; : <br />
            (age &lt; 100) ? &#39;Здравствуйте!&#39; : <br />
            &#39;Какой необычный возраст!&#39;; <br />
            alert( message );
        </code>
    </pre>
    <p>Поначалу может быть сложно понять, что происходит. Но при ближайшем рассмотрении мы видим, что это обычная последовательная проверка:</p>
    <ol>
        <li>Первый знак вопроса проверяет <code className="fs-6">age &lt; 3</code>.</li>
        <li>Если верно - возвращает <code className="fs-6">&#39;Здравствуй, малыш!&#39;</code>. В противном случае, проверяет выражение после двоеточия &#39;:&#39;, вычисляет <code className="fs-6">age &lt; 18</code>.</li>
        <li>Если это верно - возвращает <code className="fs-6">&#39;Привет!&#39;</code>. В противном случае, проверяет выражение после следующего двоеточия &#39;:&#39;, вычисляет <code className="fs-6">age &lt; 100</code>.</li>
        <li>Если это верно - возвращает <code className="fs-6">&#39;Здравствуйте!&#39;</code>. В противном случае, возвращает выражение после последнего двоеточия - <code className="fs-6">&#39;Какой необычный возраст!&#39;</code>.</li>
    </ol>
    <p>Вот как это выглядит при использовании <code className="fs-6">if..else</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`if (age &lt; 3) {`} <br />
            {`    message = 'Здравствуй, малыш!';`} <br />
            {`} else if (age < 18) {`} <br />
            {`    message = 'Привет!';`} <br />
            {`} else if (age < 100) {`} <br />
            {`    message = 'Здравствуйте!';`} <br />
            {`} else {`} <br />
            {`    message = 'Какой необычный возраст!';`} <br />
            {`}`}
        </code>
    </pre>
    <h2>Нетрадиционное использование &#39;?&#39;</h2>
    <p>Иногда оператор &quot;вопросительный знак&quot; <code className="fs-6">?</code> используется в качестве замены <code className="fs-6">if</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let company = prompt(&#39;Какая компания создала JavaScript?&#39;, &#39;&#39;); <br />
            *!* <br />
            (company == &#39;Netscape&#39;) ? <br />
            alert(&#39;Верно!&#39;) : alert(&#39;Неправильно.&#39;); <br />
            */!*
        </code>
    </pre>
    <p>В зависимости от условия <code className="fs-6">company == &#39;Netscape&#39;</code>, будет выполнена либо первая, либо вторая часть после <code className="fs-6">?</code>.</p>
    <p>Здесь мы не присваиваем результат переменной. Вместо этого мы выполняем различный код в зависимости от условия.</p>
    <p><strong>Не рекомендуется использовать оператор вопросительного знака таким образом.</strong></p>
    <p>Несмотря на то, что такая запись короче, чем эквивалентная инструкция <code className="fs-6">if</code>, она хуже читается.</p>
    <p>Вот, для сравнения, тот же код, использующий <code className="fs-6">if</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let company = prompt(&#39;Какая компания создала JavaScript?&#39;, &#39;&#39;); <br />
            *!* <br />
            {`if (company == 'Netscape') {`} <br />
            {`    alert('Верно!');`} <br />
            {`} else {`} <br />
            {`    alert('Неправильно.');`} <br />
            {`}`} <br />
            */!*
        </code>
    </pre>
    <p>При чтении глаза сканируют код по вертикали. Блоки кода, занимающие несколько строк, воспринимаются гораздо легче, чем длинный горизонтальный набор инструкций.</p>
    <p>Смысл оператора &quot;вопросительный знак&quot; <code className="fs-6">?</code> - вернуть то или иное значение, в зависимости от условия. Пожалуйста, используйте его именно для этого. Когда вам нужно выполнить разные ветви кода - используйте <code className="fs-6">if</code>.</p>

    </>
    );
}

export default TernaryOperator;