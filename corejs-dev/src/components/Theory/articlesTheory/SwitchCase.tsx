import * as React from 'react';

const SwitchCase: React.FC =() => {
    return (
    <>
    
    <h1>Конструкция &quot;switch&quot;</h1>
    <p>Конструкция <code className="fs-6">switch</code> заменяет собой сразу несколько <code className="fs-6">if</code>.</p>
    <p>Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.</p>
    <h2>Синтаксис</h2>
    <p>Конструкция <code className="fs-6">switch</code> имеет один или более блок <code className="fs-6">case</code> и необязательный блок <code className="fs-6">default</code>.</p>
    <p>Выглядит она так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
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
    <li>Переменная <code className="fs-6">x</code> проверяется на строгое равенство первому значению <code className="fs-6">value1</code>, затем второму <code className="fs-6">value2</code> и так далее.</li>
    <li>Если соответствие установлено – <code className="fs-6">switch</code> начинает выполняться от соответствующей директивы <code className="fs-6">case</code> и далее, до ближайшего <code className="fs-6">break</code> (или до конца <code className="fs-6">switch</code>).</li>
    <li>Если ни один <code className="fs-6">case</code> не совпал – выполняется (если есть) вариант <code className="fs-6">default</code>.</li>
    </ul>
    <h2 id="пример-работы">Пример работы</h2>
    <p>Пример использования <code className="fs-6">switch</code> (сработавший код выделен):</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
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
    <p>Здесь оператор <code className="fs-6">switch</code> последовательно сравнит <code className="fs-6">a</code> со всеми вариантами из <code className="fs-6">case</code>.</p>
    <p>Сначала <code className="fs-6">3</code>, затем – так как нет совпадения – <code className="fs-6">4</code>. Совпадение найдено, будет выполнен этот вариант, со строки <code className="fs-6">alert( &#39;В точку!&#39; )</code> и далее, до ближайшего <code className="fs-6">break</code>, который прервёт выполнение.</p>
    <p><strong>Если <code className="fs-6">break</code> нет, то выполнение пойдёт ниже по следующим <code className="fs-6">case</code>, при этом остальные проверки игнорируются.</strong></p>
    <p>Пример без <code className="fs-6">break</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
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
    <p>В примере выше последовательно выполнятся три <code className="fs-6">alert</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            alert( &#39;В точку!&#39; ); <br />
            alert( &#39;Перебор&#39; ); <br />
            alert( &quot;Нет таких значений&quot; );
        </code>
    </pre>
    <p>Любое выражение может быть аргументом для <code className="fs-6">switch/case</code>;
    И <code className="fs-6">switch</code> и <code className="fs-6">case</code> допускают любое выражение в качестве аргумента.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
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
    <p>В этом примере выражение <code className="fs-6">+a</code> вычисляется в <code className="fs-6">1</code>, что совпадает с выражением <code className="fs-6">b + 1</code> в <code className="fs-6">case</code>, и следовательно, код в этом блоке будет выполнен.</p>

    <h2>Группировка &quot;case&quot;</h2>
    <p>Несколько вариантов <code className="fs-6">case</code>, использующих один код, можно группировать.</p>
    <p>Для примера, выполним один и тот же код для <code className="fs-6">case 3</code> и <code className="fs-6">case 5</code>, сгруппировав их:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
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
    <p>Теперь оба варианта <code className="fs-6">3</code> и <code className="fs-6">5</code> выводят одно сообщение.</p>
    <p>Возможность группировать <code className="fs-6">case</code> – это побочный эффект того, как <code className="fs-6">switch/case</code> работает без <code className="fs-6">break</code>. Здесь выполнение <code className="fs-6">case 3</code> начинается со строки <code className="fs-6">(*)</code> и продолжается в <code className="fs-6">case 5</code>, потому что отсутствует <code className="fs-6">break</code>.</p>
    <h2>Тип имеет значение</h2>
    <p>Нужно отметить, что проверка на равенство всегда строгая. Значения должны быть одного типа, чтобы выполнялось равенство.</p>
    <p>Для примера, давайте рассмотрим следующий код:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
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

    <p>1. Для <code className="fs-6">&#39;0&#39;</code> и <code className="fs-6">&#39;1&#39;</code> выполнится первый <code className="fs-6">alert</code>.</p>
    <p>2. Для <code className="fs-6">&#39;2&#39;</code> - второй <code className="fs-6">alert</code>.</p>
    <p>3. Но для <code className="fs-6">3</code>, результат выполнения <code className="fs-6">prompt</code> будет строка <code className="fs-6">&quot;3&quot;</code>, которая не соответствует строгому равенству <code className="fs-6">===</code> с числом <code className="fs-6">3</code>. Таким образом, мы имеем &quot;мёртвый код&quot; в <code className="fs-6">case 3</code>! Выполнится вариант <code className="fs-6">default</code>.</p>

    </>
    );
}

export default SwitchCase;