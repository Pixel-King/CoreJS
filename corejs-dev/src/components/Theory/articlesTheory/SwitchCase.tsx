import * as React from 'react';

const SwitchCase: React.FC =() => {
    return (
    <>
    
    <h1>Конструкция &quot;switch&quot;</h1>
    <p>Конструкция <code>switch</code> заменяет собой сразу несколько <code>if</code>.</p>
    <p>Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.</p>
    <h2>Синтаксис</h2>
    <p>Конструкция <code>switch</code> имеет один или более блок <code>case</code> и необязательный блок <code>default</code>.</p>
    <p>Выглядит она так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`switch(x) {`} <br />
            {`    case 'value1':  // if (x === 'value1')`} <br />
            {`        ...`} <br />
            {`        [break]`} <br />
            {`    case 'value2':  // if (x === 'value2')`} <br />
            {`        ...`} <br />
            {`        [break]`} <br />
            {`    default:`} <br />
            {`        ...`} <br />
            {`        [break]`} <br />
            {`}`} <br />
        </code>
    </pre>
    <ul>
    <li>Переменная <code>x</code> проверяется на строгое равенство первому значению <code>value1</code>, затем второму <code>value2</code> и так далее.</li>
    <li>Если соответствие установлено – <code>switch</code> начинает выполняться от соответствующей директивы <code>case</code> и далее, до ближайшего <code>break</code> (или до конца <code>switch</code>).</li>
    <li>Если ни один <code>case</code> не совпал – выполняется (если есть) вариант <code>default</code>.</li>
    </ul>
    <h2 id="пример-работы">Пример работы</h2>
    <p>Пример использования <code>switch</code> (сработавший код выделен):</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            let a = 2 + 2; <br />
            {`switch (a) {`} <br />
            {`    case 3:`} <br />
            {`        alert( 'Маловато' );`} <br />
            {`        break;`} <br />
            {`    *!*`} <br />
            {`    case 4:`} <br />
            {`        alert( 'В точку!' );`} <br />
            {`        break;`} <br />
            {`    */!*`} <br />
            {`    case 5:`} <br />
            {`        alert( 'Перебор' );`} <br />
            {`        break;`} <br />
            {`    default:`} <br />
            {`        alert( 'Нет таких значений' );`} <br />
            {`}`}
        </code>
    </pre>
    <p>Здесь оператор <code>switch</code> последовательно сравнит <code>a</code> со всеми вариантами из <code>case</code>.</p>
    <p>Сначала <code>3</code>, затем – так как нет совпадения – <code>4</code>. Совпадение найдено, будет выполнен этот вариант, со строки <code>alert( &#39;В точку!&#39; )</code> и далее, до ближайшего <code>break</code>, который прервёт выполнение.</p>
    <p><strong>Если <code>break</code> нет, то выполнение пойдёт ниже по следующим <code>case</code>, при этом остальные проверки игнорируются.</strong></p>
    <p>Пример без <code>break</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            {`let a = 2 + 2;`} <br />
            {`switch (a) {`} <br />
            {`    case 3:`} <br />
            {`        alert( 'Маловато' );`} <br />
            {`    *!*`} <br />
            {`    case 4:`} <br />
            {`        alert( 'В точку!');`} <br />
            {`    case 5:`} <br />
            {`        alert( 'Перебор' );`} <br />
            {`    default:`} <br />
            {`        alert( 'Нет таких значений' );`} <br />
            {`    */!*`} <br />
            {`}`}
        </code>
    </pre>
    <p>В примере выше последовательно выполнятся три <code>alert</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            alert( &#39;В точку!&#39; ); <br />
            alert( &#39;Перебор&#39; ); <br />
            alert( &quot;Нет таких значений&quot; );
        </code>
    </pre>
    <p>Любое выражение может быть аргументом для <code>switch/case</code>;
    И <code>switch</code> и <code>case</code> допускают любое выражение в качестве аргумента.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            let a = &quot;1&quot;; <br />
            let b = 0; <br />
            {`switch (+a) {`} <br />
            {`    *!*`} <br />
            {`    case b + 1:`} <br />
            {`        alert(&quot;Выполнится, т.к. значением +a будет 1, что в точности равно b+1&quot;);`} <br />
            {`        break;`} <br />
            {`    */!*`} <br />
            {`    default:`} <br />
            {`        alert(&quot;Это не выполнится&quot;);`} <br />
            {`}`}
        </code>
    </pre>
    <p>В этом примере выражение <code>+a</code> вычисляется в <code>1</code>, что совпадает с выражением <code>b + 1</code> в <code>case</code>, и следовательно, код в этом блоке будет выполнен.</p>

    <h2>Группировка &quot;case&quot;</h2>
    <p>Несколько вариантов <code>case</code>, использующих один код, можно группировать.</p>
    <p>Для примера, выполним один и тот же код для <code>case 3</code> и <code>case 5</code>, сгруппировав их:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            let a = 3;
            {`switch (a) {`} <br />
            {`    case 4:`} <br />
            {`        alert('Правильно!');`} <br />
            {`        break;`} <br />
            {`    *!*`} <br />
            {`    case 3: // (*) группируем оба case`} <br />
            {`    case 5:`} <br />
            {`        alert('Неправильно!');`} <br />
            {`        alert('Может вам посетить урок математики?');`} <br />
            {`        break;`} <br />
            {`    */!*`} <br />
            {`    default:`} <br />
            {`        alert('Результат выглядит странновато. Честно.');`} <br />
            {`}`}
        </code>
    </pre>
    <p>Теперь оба варианта <code>3</code> и <code>5</code> выводят одно сообщение.</p>
    <p>Возможность группировать <code>case</code> – это побочный эффект того, как <code>switch/case</code> работает без <code>break</code>. Здесь выполнение <code>case 3</code> начинается со строки <code>(*)</code> и продолжается в <code>case 5</code>, потому что отсутствует <code>break</code>.</p>
    <h2>Тип имеет значение</h2>
    <p>Нужно отметить, что проверка на равенство всегда строгая. Значения должны быть одного типа, чтобы выполнялось равенство.</p>
    <p>Для примера, давайте рассмотрим следующий код:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code>
            let arg = prompt(&quot;Введите число?&quot;); <br />
            {`switch (arg) {`} <br />
            {`    case '0':`} <br />
            {`    case '1':`} <br />
            {`        alert( 'Один или ноль' );`} <br />
            {`        break;`} <br />
            {`    case '2':`} <br />
            {`        alert( 'Два' );`} <br />
            {`        break;`} <br />
            {`    case 3:`} <br />
            {`        alert( 'Никогда не выполнится!' );`} <br />
            {`        break;`} <br />
            {`    default:`} <br />
            {`        alert( 'Неизвестное значение' );`} <br />
            {`}`}
        </code>
    </pre>

    <p>1. Для <code>&#39;0&#39;</code> и <code>&#39;1&#39;</code> выполнится первый <code>alert</code>.</p>
    <p>2. Для <code>&#39;2&#39;</code> - второй <code>alert</code>.</p>
    <p>3. Но для <code>3</code>, результат выполнения <code>prompt</code> будет строка <code>&quot;3&quot;</code>, которая не соответствует строгому равенству <code>===</code> с числом <code>3</code>. Таким образом, мы имеем &quot;мёртвый код&quot; в <code>case 3</code>! Выполнится вариант <code>default</code>.</p>

    </>
    );
}

export default SwitchCase;