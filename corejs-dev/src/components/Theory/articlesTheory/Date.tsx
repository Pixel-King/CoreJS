import * as React from 'react';

const Date: React.FC =() => {
    return (
    <>
    
    <h1>Дата и время</h1>
    <p>Встречайте новый встроенный объект: <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a>. Он содержит дату и время, а также предоставляет методы управления ими.</p>
    <p>Например, его можно использовать для хранения времени создания/изменения, для измерения времени или просто для вывода текущей даты.</p>
    <h2>Создание</h2>
    <p>Для создания нового объекта <code className="fs-6">Date</code> нужно вызвать конструктор <code className="fs-6">new Date()</code> с одним из следующих аргументов:</p>
    <p><code className="fs-6">new Date()</code>
    : Без аргументов - создать объект <code className="fs-6">Date</code> с текущими датой и временем:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let now = new Date(); <br />
            alert( now ); // показывает текущие дату и время
        </code>
    </pre>
    <p><code className="fs-6">new Date(milliseconds)</code>
    : Создать объект <code className="fs-6">Date</code> с временем, равным количеству миллисекунд (тысячная доля секунды), прошедших с 1 января 1970 года UTC+0.    </p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            // 0 соответствует 01.01.1970 UTC+0 <br />
            let Jan01_1970 = new Date(0); <br />
            alert( Jan01_1970 ); <br />
            {``} <br />
            // теперь добавим 24 часа и получим 02.01.1970 UTC+0 <br />
            let Jan02_1970 = new Date(24 * 3600 * 1000); <br />
            alert( Jan02_1970 ); <br />
        </code>
    </pre>
    <p>Целое число, представляющее собой количество миллисекунд, прошедших с начала 1970 года, называется <em>таймстамп</em> (англ. timestamp).</p>
    <p>Это - легковесное численное представление даты. Из таймстампа всегда можно получить дату с помощью <code className="fs-6">new Date(timestamp)</code> и преобразовать существующий объект <code className="fs-6">Date</code> в таймстамп, используя метод <code className="fs-6">date.getTime()</code> (см. ниже).</p>
    <p>Датам до 1 января 1970 будут соответствовать отрицательные таймстампы, например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            // 31 декабря 1969 года <br />
            let Dec31_1969 = new Date(-24 * 3600 * 1000); <br />
            alert( Dec31_1969 );
        </code>
    </pre>

    <p><code className="fs-6">new Date(datestring)</code>
    : Если аргумент всего один, и это строка, то из неё &quot;прочитывается&quot; дата. Алгоритм разбора - такой же, как в <code className="fs-6">Date.parse</code>, который мы рассмотрим позже.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let date = new Date(&quot;2017-01-26&quot;); <br />
            alert(date); <br />
            // Время не указано, поэтому оно ставится в полночь по Гринвичу и <br />
            // меняется в соответствии с часовым поясом места выполнения кода <br />
            // Так что в результате можно получить <br />
            // Thu Jan 26 2017 11:00:00 GMT+1100 (восточно-австралийское время) <br />
            // или <br />
            // Wed Jan 25 2017 16:00:00 GMT-0800 (тихоокеанское время)
        </code>
    </pre>
    <p><code className="fs-6">new Date(year, month, date, hours, minutes, seconds, ms)</code>
    : Создать объект <code className="fs-6">Date</code> с заданными компонентами в местном часовом поясе. Обязательны только первые два аргумента.</p>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>- <code className="fs-6">year</code> должен состоять из четырёх цифр. Для совместимости также принимаются 2 цифры и рассматриваются как <em>19xx</em>, к примеру, <em>98</em> здесь это тоже самое, что и <em>1998</em>, но настоятельно рекомендуется всегда использовать 4 цифры.</p>
        <p>- <code className="fs-6">month</code> начинается с <em>0</em> (январь) по <em>11</em> (декабрь).</p>
        <p>- Параметр <code className="fs-6">date</code> здесь представляет собой день месяца. Если параметр не задан, то принимается значение <em>1</em>.</p>
        <p>- Если параметры <code className="fs-6">hours/minutes/seconds/ms</code> отсутствуют, их значением становится <em>0</em>.</p>
        <p>Например:</p>
        <pre>
            <code className="fs-6">
                new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 Jan 2011, 00:00:00 <br />
                new Date(2011, 0, 1); // то же самое, так как часы и проч. равны 0
            </code>
        </pre>
        <p>Максимальная точность – 1 мс (до 1/1000 секунды):</p>
        <pre>
            <code className="fs-6">
                let date = new Date(2011, 0, 1, 2, 3, 4, 567); <br />
                alert( date ); // 1.01.2011, 02:03:04.567
            </code>
        </pre>
    </div>

    <h2>Получение компонентов даты</h2>
    <p>Существуют методы получения года, месяца и т.д. из объекта <code className="fs-6">Date</code>:</p>
    <p><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear">getFullYear()</a>
    : Получить год (4 цифры)</p>
    <p><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth">getMonth()</a>
    : Получить месяц, <strong>от 0 до 11</strong>.</p>
    <p><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate">getDate()</a>
    : Получить день месяца, от 1 до 31, что несколько противоречит названию метода.</p>
    <p><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours">getHours()</a>, <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes">getMinutes()</a>, <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds">getSeconds()</a>, <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds">getMilliseconds()</a>
    : Получить, соответственно, часы, минуты, секунды или миллисекунды.</p>
    <div className="fst-italic border-3 border-start border-danger px-3">
        <p>Никакого <code className="fs-6">getYear()</code>. Только <code className="fs-6">getFullYear()</code>. Многие интерпретаторы JavaScript реализуют нестандартный и устаревший метод <code className="fs-6">getYear()</code>, который порой возвращает год в виде двух цифр. Пожалуйста, обходите его стороной. Если нужно значение года, используйте <code className="fs-6">getFullYear()</code>.</p>
    </div>
    
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Кроме того, можно получить определённый день недели:</p>
        <p><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay">getDay()</a> : Вернуть день недели от <em>0</em> (воскресенье) до <em>6</em> (суббота). Несмотря на то, что в ряде стран за первый день недели принят понедельник, в JavaScript начало недели приходится на воскресенье.</p>
    </div>

    <p>Все вышеперечисленные методы возвращают значения в соответствии с местным часовым поясом.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Однако существуют и их UTC-варианты, возвращающие день, месяц, год для временной зоны UTC+0: <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear">getUTCFullYear()</a>, <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth">getUTCMonth()</a>, <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay">getUTCDay()</a>. Для их использования требуется после <code className="fs-6">&quot;get&quot;</code> подставить <code className="fs-6">&quot;UTC&quot;</code>.</p>
        <p>Если ваш местный часовой пояс смещён относительно UTC, то следующий код покажет разные часы:</p>
        <pre>
            <code className="fs-6">
                // текущая дата <br />
                let date = new Date(); <br />
                {``} <br />
                // час в вашем текущем часовом поясе <br />
                alert( date.getHours() ); <br />
                {``} <br />
                // час в часовом поясе UTC+0 (лондонское время без перехода на летнее время) <br />
                alert( date.getUTCHours() );
            </code>
        </pre>
    </div>

    <p>Помимо вышеприведённых методов, существуют два особых метода без UTC-варианта:</p>
    <p><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime">getTime()</a>
    : Для заданной даты возвращает таймстамп - количество миллисекунд, прошедших с 1 января 1970 года UTC+0.</p>
    <p><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset">getTimezoneOffset()</a>
    : Возвращает разницу в минутах между UTC и местным часовым поясом:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            // если вы в часовом поясе UTC-1, то выводится 60
            // если вы в часовом поясе UTC+3, выводится -180
            alert( new Date().getTimezoneOffset() );
        </code>
    </pre>

    <h2>Установка компонентов даты</h2>
    <p>Следующие методы позволяют установить компоненты даты и времени:</p>
    <ul>
        <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear"><code className="fs-6">setFullYear(year, [month], [date])</code></a></li>
        <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth"><code className="fs-6">setMonth(month, [date])</code></a></li>
        <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate"><code className="fs-6">setDate(date)</code></a></li>
        <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours"><code className="fs-6">setHours(hour, [min], [sec], [ms])</code></a></li>
        <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes"><code className="fs-6">setMinutes(min, [sec], [ms])</code></a></li>
        <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds"><code className="fs-6">setSeconds(sec, [ms])</code></a></li>
        <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds"><code className="fs-6">setMilliseconds(ms)</code></a></li>
        <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime"><code className="fs-6">setTime(milliseconds)</code></a> (устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC)</li>
    </ul>
    <p>У всех этих методов, кроме <code className="fs-6">setTime()</code>, есть UTC-вариант, например: <code className="fs-6">setUTCHours()</code>.</p>
    <p>Как мы видим, некоторые методы могут устанавливать сразу несколько компонентов даты, например: <code className="fs-6">setHours</code>. Если какая-то компонента не указана, она не меняется.</p>
    <p>Пример:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let today = new Date(); <br />
            {``} <br />
            today.setHours(0); <br />
            alert(today); // выводится сегодняшняя дата, но значение часа будет 0 <br />
            {``} <br />
            today.setHours(0, 0, 0, 0); <br />
            alert(today); // всё ещё выводится сегодняшняя дата, но время будет ровно 00:00:00.
        </code>
    </pre>

    <h2>Автоисправление даты</h2>
    <p><em>Автоисправление</em> - это очень полезная особенность объектов <code className="fs-6">Date</code>. Можно устанавливать компоненты даты вне обычного диапазона значений, а объект сам себя исправит.</p>
    <p>Пример:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let date = new Date(2013, 0, *!*32*/!*); // 32 Jan 2013 ?!? <br />
            alert(date); // ...1st Feb 2013!
        </code>
    </pre>
    <p>Неправильные компоненты даты автоматически распределяются по остальным.</p>
    <p>Предположим, нам требуется увеличить дату &quot;28 февраля 2016&quot; на два дня. В зависимости от того, високосный это год или нет, результатом будет &quot;2 марта&quot; или &quot;1 марта&quot;. Нам об этом думать не нужно. Просто прибавляем два дня. Объект <code className="fs-6">Date</code> позаботится об остальном:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let date = new Date(2016, 1, 28); <br />
            *!* <br />
            date.setDate(date.getDate() + 2); <br />
            */!* <br />
            {``} <br />
            alert( date ); // 1 Mar 2016
        </code>
    </pre>
    <p>Эту возможность часто используют, чтобы получить дату по прошествии заданного отрезка времени. Например, получим дату &quot;спустя 70 секунд с текущего момента&quot;:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let date = new Date(); <br />
            date.setSeconds(date.getSeconds() + 70); <br />
            {``} <br />
            alert( date ); // выводит правильную дату
        </code>
    </pre>
    <p>Также можно установить нулевые или даже отрицательные значения. Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let date = new Date(2016, 0, 2); // 2 Jan 2016 <br />
            {``} <br />
            date.setDate(1); // задать первое число месяца <br />
            alert( date ); <br />
            {``} <br />
            date.setDate(0); // первый день месяца - это 1, так что выводится последнее число предыдущего месяца <br />
            alert( date ); // 31 Dec 2015
        </code>
    </pre>

    <h2>Преобразование к числу, разность дат</h2>
    <p>Если объект <code className="fs-6">Date</code> преобразовать в число, то получим таймстамп по аналогии с <code className="fs-6">date.getTime()</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let date = new Date(); <br />
            alert(+date); // количество миллисекунд, то же самое, что date.getTime()
        </code>
    </pre>
    <p>Важный побочный эффект: даты можно вычитать, в результате получаем разность в миллисекундах.</p>
    <p>Этот приём можно использовать для измерения времени:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let start = new Date(); // начинаем отсчёт времени <br />
            {``} <br />
            // выполняем некоторые действия <br />
            {`for (let i = 0; i < 100000; i++) {`} <br />
            {`    let doSomething = i * i * i;`} <br />
            {`}`} <br />
            {``} <br />
            let end = new Date(); // заканчиваем отсчёт времени <br />
            {``} <br />
            {'alert( `Цикл отработал за ${end - start} миллисекунд` );'}
        </code>
    </pre>

    <h2>Date.now()</h2>
    <p>Если нужно просто измерить время, объект <code className="fs-6">Date</code> нам не нужен.</p>
    <p>Существует особый метод <code className="fs-6">Date.now()</code>, возвращающий текущую метку времени.</p>
    <p>Семантически он эквивалентен <code className="fs-6">new Date().getTime()</code>, однако метод не создаёт промежуточный объект <code className="fs-6">Date</code>. Так что этот способ работает быстрее и не нагружает сборщик мусора.</p>
    <p>Данный метод используется из соображений удобства или когда важно быстродействие, например, при разработке игр на JavaScript или других специализированных приложений.</p>
    <p>Вероятно, предыдущий пример лучше переписать так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            *!* <br />
            let start = Date.now(); // количество миллисекунд с 1 января 1970 года <br />
            */!* <br />
            {``} <br />
            // выполняем некоторые действия <br />
            {`for (let i = 0; i < 100000; i++) {`} <br />
            {`    let doSomething = i * i * i;`} <br />
            {`}`} <br />
            {``} <br />
            *!* <br />
            let end = Date.now(); // заканчиваем отсчёт времени <br />
            */!* <br />
            {``} <br />
            {'alert( `Цикл отработал за ${end - start} миллисекунд` ); // вычитаются числа, а не даты'}
        </code>
    </pre>

    <h2>Бенчмаркинг</h2>
    <p>Будьте внимательны, если хотите точно протестировать производительность функции, которая зависит от процессора.</p>
    <p>Например, сравним две функции, вычисляющие разницу между двумя датами: какая сработает быстрее?</p>
    <p>Подобные вычисления, замеряющие производительность, также называют &quot;бенчмарками&quot; (benchmark).</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            // есть date1 и date2, какая функция быстрее вернёт разницу между ними в миллисекундах? <br />
            {`function diffSubtract(date1, date2) {`} <br />
            {`    return date2 - date1;`} <br />
            {`}`} <br />
            {``} <br />
            // или <br />
            {`function diffGetTime(date1, date2) {`} <br />
            {`    return date2.getTime() - date1.getTime();`} <br />
            {`}`}
        </code>
    </pre>

    <p>Обе функции делают буквально одно и то же, только одна использует явный метод <code className="fs-6">date.getTime()</code> для получения даты в миллисекундах, а другая полагается на преобразование даты в число. Результат их работы всегда один и тот же.</p>
    <p>Но какая функция быстрее?</p>
    <p>Для начала можно запустить их много раз подряд и засечь разницу. В нашем случае функции очень простые, так что потребуется хотя бы 100000 повторений.</p>
    <p>Проведём измерения:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function diffSubtract(date1, date2) {`} <br />
            {`    return date2 - date1;`} <br />
            {`}`} <br />
            {``} <br />
            {`function diffGetTime(date1, date2) {`} <br />
            {`    return date2.getTime() - date1.getTime();`} <br />
            {`}`} <br />
            {``} <br />
            {`function bench(f) {`} <br />
            {`    let date1 = new Date(0);`} <br />
            {`    let date2 = new Date();`} <br />
            {``} <br />
            {`    let start = Date.now();`} <br />
            {`    for (let i = 0; i < 100000; i++) f(date1, date2);`} <br />
            {`    return Date.now() - start;`} <br />
            {`}`} <br />
            {``} <br />
            alert( &#39;Время diffSubtract: &#39; + bench(diffSubtract) + &#39;мс&#39; ); <br />
            alert( &#39;Время diffGetTime: &#39; + bench(diffGetTime) + &#39;мс&#39; ); <br />
        </code>
    </pre>
    <p>Вот это да! Метод <code className="fs-6">getTime()</code> работает ощутимо быстрее! Всё потому, что не производится преобразование типов, и интерпретаторам такое намного легче оптимизировать.</p>
    <p>Замечательно, это уже что-то. Но до хорошего бенчмарка нам ещё далеко.</p>
    <p>Представьте, что при выполнении <code className="fs-6">bench(diffSubtract)</code> процессор параллельно делал что-то ещё, также потребляющее ресурсы. А к началу выполнения <code className="fs-6">bench(diffGetTime)</code> он это уже завершил.</p>
    <p>Достаточно реалистичный сценарий в современных многопроцессорных операционных системах.</p>
    <p>В итоге у первого бенчмарка окажется меньше ресурсов процессора, чем у второго. Это может исказить результаты.</p>
    <p><strong>Для получения наиболее достоверных результатов тестирования производительности весь набор бенчмарков нужно запускать по нескольку раз.</strong></p>
    <p>Например, так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function diffSubtract(date1, date2) {`} <br />
            {`    return date2 - date1;`} <br />
            {`}`} <br />
            {``} <br />
            {`function diffGetTime(date1, date2) {`} <br />
            {`    return date2.getTime() - date1.getTime();`} <br />
            {`}`} <br />
            {``} <br />
            {`function bench(f) {`} <br />
            {`    let date1 = new Date(0);`} <br />
            {`    let date2 = new Date();`} <br />
            {``} <br />
            {`    let start = Date.now();`} <br />
            {`    for (let i = 0; i < 100000; i++) f(date1, date2);`} <br />
            {`    return Date.now() - start;`} <br />
            {`}`} <br />
            {``} <br />
            {`let time1 = 0;`} <br />
            {`let time2 = 0;`} <br />
            {``} <br />
            *!* <br />
            // bench(diffSubtract) и bench(diffGetTime) поочерёдно запускаются 10 раз <br />
            {`for (let i = 0; i < 10; i++) {`} <br />
            {`    time1 += bench(diffSubtract);`} <br />
            {`    time2 += bench(diffGetTime);`} <br />
            {`}`} <br />
            */!* <br />
            {``} <br />
            alert( &#39;Итоговое время diffSubtract: &#39; + time1 ); <br />
            alert( &#39;Итоговое время diffGetTime: &#39; + time2 );
        </code>
    </pre>
    <p>Современные интерпретаторы JavaScript начинают применять продвинутые оптимизации только к &quot;горячему коду&quot;, выполняющемуся несколько раз (незачем оптимизировать то, что редко выполняется). Так что в примере выше первые запуски не оптимизированы должным образом. Нелишним будет добавить предварительный запуск для &quot;разогрева&quot;:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            // добавляем для &quot;разогрева&quot; перед основным циклом <br />
            bench(diffSubtract); <br />
            bench(diffGetTime); <br />
            {``} <br />
            // а теперь тестируем производительность <br />
            {`for (let i = 0; i &lt; 10; i++) {`} <br />
            {`    time1 += bench(diffSubtract);`} <br />
            {`    time2 += bench(diffGetTime);`} <br />
            {`}`}
        </code>
    </pre>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Современные интерпретаторы JavaScript выполняют множество оптимизаций. Они могут повлиять на результаты &quot;искусственных тестов&quot; по сравнению с &quot;нормальным использованием&quot;, особенно если мы тестируем что-то очень маленькое, например, работу оператора или встроенной функции. Поэтому если хотите серьёзно понять производительность, пожалуйста, изучите, как работают интерпретаторы JavaScript. И тогда вам, вероятно, уже не понадобятся микробенчмарки.</p>
        <p>Отличный набор статей о V8 можно найти на <a href="https://mrale.ph">https://mrale.ph</a>.</p>
    </div>

    <h2>Разбор строки с датой</h2>
    <p>Метод <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/parse">Date.parse(str)</a> считывает дату из строки.</p>
    <p>Формат строки должен быть следующим: <code className="fs-6">YYYY-MM-DDTHH:mm:ss.sssZ</code>, где:</p>
    <ul>
        <li><code className="fs-6">YYYY-MM-DD</code> - это дата: год-месяц-день.</li>
        <li>Символ <code className="fs-6">&quot;T&quot;</code> используется в качестве разделителя.</li>
        <li><code className="fs-6">HH:mm:ss.sss</code> - время: часы, минуты, секунды и миллисекунды.</li>
        <li>Необязательная часть <code className="fs-6">&#39;Z&#39;</code> обозначает часовой пояс в формате <code className="fs-6">+-hh:mm</code>. Если указать просто букву <code className="fs-6">Z</code>, то получим UTC+0.</li>
    </ul>
    <p>Возможны и более короткие варианты, например, <code className="fs-6">YYYY-MM-DD</code> или <code className="fs-6">YYYY-MM</code>, или даже <code className="fs-6">YYYY</code>.</p>
    <p>Вызов <code className="fs-6">Date.parse(str)</code> обрабатывает строку в заданном формате и возвращает таймстамп (количество миллисекунд с 1 января 1970 года UTC+0). Если формат неправильный, возвращается <code className="fs-6">NaN</code>.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let ms = Date.parse(&#39;2012-01-26T13:51:50.417-07:00&#39;); <br />
            {``} <br />
            alert(ms); // 1327611110417 (таймстамп)
        </code>
    </pre>
    <p>Можно тут же создать объект <code className="fs-6">new Date</code> из таймстампа:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let date = new Date( Date.parse(&#39;2012-01-26T13:51:50.417-07:00&#39;) ); <br />
            {``} <br />
            alert(date);  
        </code>
    </pre>

    <h2>Итого</h2>
    <ul>
        <li>Дата и время в JavaScript представлены объектом <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a>. Нельзя создать &quot;только дату&quot; или &quot;только время&quot;: объекты <code className="fs-6">Date</code> всегда содержат и то, и другое.</li>
        <li>Счёт месяцев начинается с нуля (да, январь - это нулевой месяц).</li>
        <li>Дни недели в <code className="fs-6">getDay()</code> также отсчитываются с нуля, что соответствует воскресенью.</li>
        <li>Объект <code className="fs-6">Date</code> самостоятельно корректируется при введении значений, выходящих за рамки допустимых. Это полезно для сложения/вычитания дней/месяцев/недель.</li>
        <li>Даты можно вычитать, и разность возвращается в миллисекундах. Так происходит, потому что при преобразовании в число объект <code className="fs-6">Date</code> становится таймстампом.</li>
        <li>Используйте <code className="fs-6">Date.now()</code> для быстрого получения текущего времени в формате таймстампа.</li>
    </ul>
    <p>Учтите, что, в отличие от некоторых других систем, в JavaScript таймстамп в миллисекундах, а не в секундах.</p>
    <p>Порой нам нужно измерить время с большей точностью. Собственными средствами JavaScript измерять время в микросекундах (одна миллионная секунды) нельзя, но в большинстве сред такая возможность есть. К примеру, в браузерах есть метод <a href="https://developer.mozilla.org/ru/docs/Web/API/Performance/now">performance.now()</a>, возвращающий количество миллисекунд с начала загрузки страницы с точностью до микросекунд (3 цифры после точки):</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {'alert(`Загрузка началась ${performance.now()}мс назад`);'} <br />
            // Получаем что-то вроде: &quot;Загрузка началась 34731.26000000001мс назад&quot; <br />
            // .26 –- это микросекунды (260 микросекунд) <br />
            // корректными являются только первые три цифры после точки, а остальные - это ошибка точности
        </code>
    </pre>
    <p>В Node.js для этого предусмотрен модуль <code className="fs-6">microtime</code> и ряд других способов. Технически почти любое устройство или среда позволяет добиться большей точности, просто её нет в объекте <code className="fs-6">Date</code>.</p>

    </>
    );
}

export default Date;