import * as React from 'react';

const Strings: React.FC =() => {
    return (
        <>

        <h1>Строки</h1>
        <p>В JavaScript любые текстовые данные являются строками. Не существует отдельного типа &quot;символ&quot;, который есть в ряде других языков.</p>
        <p>Внутренний формат для строк — всегда <a href="https://ru.wikipedia.org/wiki/UTF-16">UTF-16</a>, вне зависимости от кодировки страницы.</p>
        <h2>Кавычки</h2>
        <p>В JavaScript есть разные типы кавычек.</p>
        <p>Строку можно создать с помощью одинарных, двойных либо обратных кавычек:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let single = &#39;single-quoted&#39;; <br />
                let double = &quot;double-quoted&quot;; <br />
                let backticks = `backticks`;
            </code>
        </pre>
        <p>Одинарные и двойные кавычки работают, по сути, одинаково, а если использовать обратные кавычки, то в такую строку мы сможем вставлять произвольные выражения, обернув их в <code className="fs-6">${`{`}…{`}`}</code>:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`function sum(a, b) {`} <br />
                {`   return a + b;`} <br />
                {`}`} <br />
                {'alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.'}
            </code>
        </pre>
        <p>Ещё одно преимущество обратных кавычек — они могут занимать более одной строки, вот так:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let guestList = `Guests: <br />
                    * John <br />
                    * Pete <br />
                    * Mary <br />
                `; <br />

                alert(guestList); // список гостей, состоящий из нескольких строк
            </code>
        </pre>
        <p>Выглядит вполне естественно, не правда ли? Что тут такого? Но если попытаться использовать точно так же одинарные или двойные кавычки, то будет ошибка:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let guestList = &quot;Guests: // Error: Unexpected token ILLEGAL
                * John&quot;;
            </code>
        </pre>
        <p>Одинарные и двойные кавычки в языке с незапамятных времён: тогда потребность в многострочных строках не учитывалась. Что касается обратных кавычек, они появились существенно позже, и поэтому они гибче.</p>
        <p>Обратные кавычки также позволяют задавать &quot;шаблонную функцию&quot; перед первой обратной кавычкой. Используемый синтаксис: <code className="fs-6">func&#96;string&#96;</code>. Автоматически вызываемая функция <code className="fs-6">func</code> получает строку и встроенные в неё выражения и может их обработать. Подробнее об этом можно прочитать в <a href="mdn:/JavaScript/Reference/template_strings#%D0%A2%D0%B5%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5_%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D1%8B">документации</a>. Если перед строкой есть выражение, то шаблонная строка называется &quot;теговым шаблоном&quot;. Это позволяет использовать свою шаблонизацию для строк, но на практике теговые шаблоны применяются редко.</p>
        <h2>Спецсимволы</h2>
        <p>Многострочные строки также можно создавать с помощью одинарных и двойных кавычек, используя так называемый &quot;символ перевода строки&quot;, который записывается как <code className="fs-6">\n</code>:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let guestList = &quot;Guests:\n * John\n * Pete\n * Mary&quot;; <br />

                alert(guestList); // список гостей, состоящий из нескольких строк
            </code>
        </pre>
        <p>В частности, эти две строки эквивалентны, просто записаны по-разному:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                // перевод строки добавлен с помощью символа перевода строки 
                let str1 = &quot;Hello\nWorld&quot;; <br />

                // многострочная строка, созданная с использованием обратных кавычек <br />
                let str2 = `Hello <br />
                World`; <br />

                alert(str1 == str2); // true
            </code>
        </pre>
        <p>Есть и другие, реже используемые спецсимволы. Вот список:</p>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Символ</th>
                    <th>Описание</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code className="fs-6">\n</code></td>
                    <td>Перевод строки</td>
                </tr>
                <tr>
                    <td><code className="fs-6">\r</code></td>
                    <td>В текстовых файлах Windows для перевода строки используется комбинация символов <code className="fs-6">\r\n</code>, а на других ОС это просто <code className="fs-6">\n</code>. Это так по историческим причинам, ПО под Windows обычно понимает и просто <code className="fs-6">\n</code>.</td>
                    </tr>
                <tr>
                    <td><code className="fs-6">\&#39;</code>, <code className="fs-6">\&quot;</code></td>
                    <td>Кавычки</td>
                </tr>
                <tr>
                    <td><code className="fs-6">\\</code></td>
                    <td>Обратный слеш</td>
                </tr>
                <tr>
                    <td><code className="fs-6">\t</code></td>
                    <td>Знак табуляции</td>
                </tr>
                <tr>
                    <td><code className="fs-6">\b</code>, <code className="fs-6">\f</code>, <code className="fs-6">\v</code></td>
                    <td>Backspace, Form Feed и Vertical Tab — оставлены для обратной совместимости, сейчас не используются.</td>
                </tr>
                <tr>
                    <td><code className="fs-6">\xXX</code></td>
                    <td>Символ с шестнадцатеричным Юникодным кодом <code className="fs-6">XX</code>, например, <code className="fs-6">&#39;\x7A&#39;</code> — то же самое, что <code className="fs-6">&#39;z&#39;</code>.</td>
                </tr>
                <tr>
                    <td><code className="fs-6">\uXXXX</code></td>
                    <td>Символ в кодировке UTF-16 с шестнадцатеричным кодом <code className="fs-6">XXXX</code>, например, <code className="fs-6">\u00A9</code> — Юникодное представление знака копирайта, <code className="fs-6">©</code>. Код должен состоять ровно из 4 шестнадцатеричных цифр.</td>
                </tr>
                <tr>
                    <td><code className="fs-6">\u{`{`}X…XXXXXX{`}`}</code> (от 1 до 6 шестнадцатеричных цифр)</td>
                    <td>Символ в кодировке UTF-32 с шестнадцатеричным кодом от U+0000 до U+10FFFF. Некоторые редкие символы кодируются двумя 16-битными словами и занимают 4 байта. Так можно вставлять символы с длинным кодом.</td>
                </tr>
            </tbody>
        </table>
        <p>Примеры с Юникодом:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( &quot;\u00A9&quot; ); // © <br />
                alert( &quot;\u{`{`}20331{`}`}&quot; ); // 佫, редкий китайский иероглиф (длинный Юникод) <br />
                alert( &quot;\u{`{`}1F60D{`}`}&quot; ); // 😍, символ улыбающегося лица (ещё один длинный Юникод) <br />
            </code>
        </pre>
        <p>Все спецсимволы начинаются с обратного слеша, <code className="fs-6">\</code> — так называемого &quot;символа экранирования&quot;.</p>
        <p>Он также используется, если необходимо вставить в строку кавычку.</p>
        <p>К примеру:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( &#39;I*!*\&#39;*/!*m the Walrus!&#39; ); // *!*I&#39;m*/!* the Walrus!
            </code>
        </pre>
        <p>Здесь перед входящей в строку кавычкой необходимо добавить обратный слеш — <code className="fs-6">\&#39;</code> — иначе она бы обозначала окончание строки.</p>
        <p>Разумеется, требование экранировать относится только к таким же кавычкам, как те, в которые заключена строка. Так что мы можем применить и более элегантное решение, использовав для этой строки двойные или обратные кавычки:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( `I&#39;m the Walrus!` ); // I&#39;m the Walrus!
            </code>
        </pre>
        <p>Заметим, что обратный слеш <code className="fs-6">\</code> служит лишь для корректного прочтения строки интерпретатором, но он не записывается в строку после её прочтения. Когда строка сохраняется в оперативную память, в неё не добавляется символ <code className="fs-6">\</code>. Вы можете явно видеть это в выводах <code className="fs-6">alert</code> в примерах выше.</p>
        <p>Но что, если нам надо добавить в строку собственно сам обратный слеш <code className="fs-6">\</code>?</p>
        <p>Это можно сделать, добавив перед ним… ещё один обратный слеш!</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( `The backslash: \\` ); // The backslash: \
            </code>
        </pre>
        <h2 id="длина-строки">Длина строки</h2>
        <p>Свойство <code className="fs-6">length</code> содержит длину строки:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( `My\n`.length ); // 3
            </code>
        </pre>
        <p>Обратите внимание, <code className="fs-6">\n</code> — это один спецсимвол, поэтому тут всё правильно: длина строки <code className="fs-6">3</code>.</p>
        <p>&quot;<code className="fs-6">length</code> — это свойство&quot;
        Бывает так, что люди с практикой в других языках случайно пытаются вызвать его, добавляя круглые скобки: они пишут <code className="fs-6">str.length()</code> вместо <code className="fs-6">str.length</code>. Это не работает.</p>
        <p>Так как <code className="fs-6">str.length</code> — это числовое свойство, а не функция, добавлять скобки не нужно.</p>
        
        <h2>Доступ к символам</h2>

        <p>Получить символ, который занимает позицию <code className="fs-6">pos</code>, можно с помощью квадратных скобок: <code className="fs-6">[pos]</code>. Также можно использовать метод <code className="fs-6">charAt</code>: <a href="mdn:js/String/charAt">str.charAt(pos)</a>. Первый символ занимает нулевую позицию:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let str = `Hello`; <br />

                // получаем первый символ <br />
                alert( str[0] ); // H <br />
                alert( str.charAt(0) ); // H <br />

                // получаем последний символ <br />
                alert( str[str.length - 1] ); // o
            </code>
        </pre>
        <p>Квадратные скобки — современный способ получить символ, в то время как <code className="fs-6">charAt</code> существует в основном по историческим причинам.</p>
        <p>Разница только в том, что если символ с такой позицией отсутствует, тогда <code className="fs-6">[]</code> вернёт <code className="fs-6">undefined</code>, а <code className="fs-6">charAt</code> — пустую строку:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let str = `Hello`; <br />

                alert( str[1000] ); // undefined <br />
                alert( str.charAt(1000) ); // &#39;&#39; (пустая строка)
            </code>
        </pre>
        <p>Также можно перебрать строку посимвольно, используя <code className="fs-6">for..of</code>:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`for (let char of &quot;Hello&quot;) {`} <br />
                {`    alert(char); // H,e,l,l,o (char — сначала &quot;H&quot;, потом &quot;e&quot;, потом &quot;l&quot; и т. д.)`} <br />
                {`}`}
            </code>
        </pre>
        <h2>Строки неизменяемы</h2>
        <p>Содержимое строки в JavaScript нельзя изменить. Нельзя взять символ посередине и заменить его. Как только строка создана — она такая навсегда.</p>
        <p>Давайте попробуем так сделать, и убедимся, что это не работает:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let str = &#39;Hi&#39;; <br />

                str[0] = &#39;h&#39;; // ошибка <br />
                alert( str[0] ); // не работает
            </code>
        </pre>
        <p>Можно создать новую строку и записать её в ту же самую переменную вместо старой.</p>
        <p>Например:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let str = &#39;Hi&#39;; <br />

                str = &#39;h&#39; + str[1]; // заменяем строку <br />

                alert( str ); // hi
            </code>
        </pre>
        <p>В последующих разделах мы увидим больше примеров.</p>
        <h2>Изменение регистра</h2>
        <p>Методы <a href="mdn:js/String/toLowerCase">toLowerCase()</a> и <a href="mdn:js/String/toUpperCase">toUpperCase()</a> меняют регистр символов:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( &#39;Interface&#39;.toUpperCase() ); // INTERFACE <br />
                alert( &#39;Interface&#39;.toLowerCase() ); // interface
            </code>
        </pre>
        <p>Если мы захотим перевести в нижний регистр какой-то конкретный символ:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( &#39;Interface&#39;[0].toLowerCase() ); // &#39;i&#39;
            </code>
        </pre>
        <h2 id="поиск-подстроки">Поиск подстроки</h2>
        <p>Существует несколько способов поиска подстроки.</p>
        <h3 id="strindexof">str.indexOf</h3>
        <p>Первый метод — <a href="mdn:js/String/indexOf">str.indexOf(substr, pos)</a>.</p>
        <p>Он ищет подстроку <code className="fs-6">substr</code> в строке <code className="fs-6">str</code>, начиная с позиции <code className="fs-6">pos</code>, и возвращает позицию, на которой располагается совпадение, либо <code className="fs-6">-1</code> при отсутствии совпадений.</p>
        <p>Например:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let str = &#39;Widget with id&#39;; <br />

                alert( str.indexOf(&#39;Widget&#39;) ); // 0, потому что подстрока &#39;Widget&#39; найдена в начале <br />
                alert( str.indexOf(&#39;widget&#39;) ); // -1, совпадений нет, поиск чувствителен к регистру <br />

                alert( str.indexOf(&quot;id&quot;) ); // 1, подстрока &quot;id&quot; найдена на позиции 1 (..idget with id)
            </code>
        </pre>
        <p>Необязательный второй аргумент позволяет начать поиск с определённой позиции.</p>
        <p>Например, первое вхождение <code className="fs-6">&quot;id&quot;</code> — на позиции <code className="fs-6">1</code>. Для того, чтобы найти следующее, начнём поиск с позиции <code className="fs-6">2</code>:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let str = &#39;Widget with id&#39;; <br />

                alert( str.indexOf(&#39;id&#39;, 2) ) // 12
            </code>
        </pre>
        <p>Чтобы найти все вхождения подстроки, нужно запустить <code className="fs-6">indexOf</code> в цикле. Каждый раз, получив очередную позицию, начинаем новый поиск со следующей:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let str = &#39;Ослик Иа-Иа посмотрел на виадук&#39;; <br />

                let target = &#39;Иа&#39;; // цель поиска <br />

                let pos = 0; <br />
                {`while (true) {`} <br />
                {`    let foundPos = str.indexOf(target, pos);`} <br />
                {`    if (foundPos == -1) break;`} <br />
                {'    alert( `Найдено тут: ${foundPos}` );'} <br />
                {`    pos = foundPos + 1; // продолжаем со следующей позиции`} <br />
                {`}`}
            </code>
        </pre>
        <p>Тот же алгоритм можно записать и короче:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let str = &quot;Ослик Иа-Иа посмотрел на виадук&quot;; <br />
                let target = &quot;Иа&quot;; <br />

                *!* <br />
                let pos = -1; <br />
                {`while ((pos = str.indexOf(target, pos + 1)) != -1) {`} <br />
                {`    alert( pos );`} <br />
                {`}`} <br />
                */!*
            </code>
        </pre>
        <h2><code>str.lastIndexOf(substr, position)</code></h2>
        <p>Также есть похожий метод <a href="mdn:js/String/lastIndexOf">str.lastIndexOf(substr, position)</a>, который ищет с конца строки к её началу.</p>
        <p>Он используется тогда, когда нужно получить самое последнее вхождение: перед концом строки или начинающееся до (включительно) определённой позиции.</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                При проверке `indexOf` в условии `if` есть небольшое неудобство. Такое условие не будет работать: <br />

                let str = &quot;Widget with id&quot;; <br />

                {`if (str.indexOf(&quot;Widget&quot;)) {`} <br />
                {`    alert(&quot;Совпадение есть&quot;); // не работает`} <br />
                {`}`}
            </code>
        </pre>
        <p>Мы ищем подстроку <code className="fs-6">&quot;Widget&quot;</code>, и она здесь есть, прямо на позиции <code className="fs-6">0</code>. Но <code className="fs-6">alert</code> не показывается, т. к. <code className="fs-6">str.indexOf(&quot;Widget&quot;)</code> возвращает <code className="fs-6">0</code>, и <code className="fs-6">if</code> решает, что тест не пройден.</p>
        <p>Поэтому надо делать проверку на <code className="fs-6">-1</code>:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let str = &quot;Widget with id&quot;; <br />

                *!* <br />
                {`if (str.indexOf(&quot;Widget&quot;) != -1) {`} <br />
                {`    */!*`} <br />
                {`    alert(&quot;Совпадение есть&quot;); // теперь работает`} <br />
                {`}`}
            </code>
        </pre>
        <h4>Трюк с побитовым НЕ</h4>
        <p>Существует старый трюк с использованием <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT">побитового оператора НЕ</a> — <code className="fs-6">~</code>. Он преобразует число в 32-разрядное целое со знаком (signed 32-bit integer). Дробная часть, в случае, если она присутствует, отбрасывается. Затем все биты числа инвертируются.</p>
        <p>На практике это означает простую вещь: для 32-разрядных целых чисел значение <code className="fs-6">~n</code> равно <code className="fs-6">-(n+1)</code>.</p>
        <p>В частности:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( ~2 ); // -3, то же, что -(2+1) <br />
                alert( ~1 ); // -2, то же, что -(1+1) <br />
                alert( ~0 ); // -1, то же, что -(0+1) <br />
                *!* <br />
                alert( ~-1 ); // 0, то же, что -(-1+1) <br />
                */!*
            </code>
        </pre>
        <p>Таким образом, <code className="fs-6">~n</code> равняется 0 только при <code className="fs-6">n == -1</code> (для любого <code className="fs-6">n</code>, входящего в 32-разрядные целые числа со знаком).</p>
        <p>Соответственно, прохождение проверки <code className="fs-6">if ( ~str.indexOf(&quot;…&quot;) )</code> означает, что результат <code className="fs-6">indexOf</code> отличен от <code className="fs-6">-1</code>, совпадение есть.</p>
        <p>Это иногда применяют, чтобы сделать проверку <code className="fs-6">indexOf</code> компактнее:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let str = &quot;Widget&quot;; <br />

                {`if (~str.indexOf(&quot;Widget&quot;)) {`} <br />
                {`    alert( &#39;Совпадение есть&#39; ); // работает`} <br />
                {`}`}
        </code></pre>
        <p>Обычно использовать возможности языка каким-либо неочевидным образом не рекомендуется, но этот трюк широко используется в старом коде, поэтому его важно понимать.</p>
        <p>Просто запомните: <code className="fs-6">if (~str.indexOf(…))</code> означает &quot;если найдено&quot;.</p>
        <p>Впрочем, если быть точнее, из-за того, что большие числа обрезаются до 32 битов оператором <code className="fs-6">~</code>, существуют другие числа, для которых результат тоже будет <code className="fs-6">0</code>, самое маленькое из которых — <code className="fs-6">~4294967295=0</code>. Поэтому такая проверка будет правильно работать только для строк меньшей длины.</p>
        <p>На данный момент такой трюк можно встретить только в старом коде, потому что в новом он просто не нужен: есть метод <code className="fs-6">.includes</code> (см. ниже).</p>
        <h3>includes, startsWith, endsWith</h3>
        <p>Более современный метод <a href="mdn:js/String/includes">str.includes(substr, pos)</a> возвращает <code className="fs-6">true</code>, если в строке <code className="fs-6">str</code> есть подстрока <code className="fs-6">substr</code>, либо <code className="fs-6">false</code>, если нет.</p>
        <p>Это — правильный выбор, если нам необходимо проверить, есть ли совпадение, но позиция не нужна:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( &quot;Widget with id&quot;.includes(&quot;Widget&quot;) ); // true <br />
                alert( &quot;Hello&quot;.includes(&quot;Bye&quot;) ); // false
            </code>
        </pre>
        <p>Необязательный второй аргумент <code className="fs-6">str.includes</code> позволяет начать поиск с определённой позиции:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( &quot;Midget&quot;.includes(&quot;id&quot;) ); // true <br />
                alert( &quot;Midget&quot;.includes(&quot;id&quot;, 3) ); // false, поиск начат с позиции 3
            </code>
        </pre>
        <p>Методы <a href="mdn:js/String/startsWith">str.startsWith</a> и <a href="mdn:js/String/endsWith">str.endsWith</a> проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( &quot;*!*Wid*/!*get&quot;.startsWith(&quot;Wid&quot;) ); // true, &quot;Wid&quot; — начало &quot;Widget&quot; <br />
                alert( &quot;Wid*!*get*/!*&quot;.endsWith(&quot;get&quot;) ); // true, &quot;get&quot; — окончание &quot;Widget&quot;
            </code>
        </pre>
        <h2>Получение подстроки</h2>
        <p>В JavaScript есть 3 метода для получения подстроки: <code className="fs-6">substring</code>, <code className="fs-6">substr</code> и <code className="fs-6">slice</code>.</p>
        <p><code className="fs-6">str.slice(start [, end])</code>
        : Возвращает часть строки от <code className="fs-6">start</code> до (не включая) <code className="fs-6">end</code>.</p>
        <p>Например:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let str = &quot;stringify&quot;; <br />
                // &#39;strin&#39;, символы от 0 до 5 (не включая 5) <br />
                alert( str.slice(0, 5) ); <br />
                // &#39;s&#39;, от 0 до 1, не включая 1, т. е. только один символ на позиции 0 <br />
                alert( str.slice(0, 1) );
            </code>
        </pre>
        <p>Если аргумент <code className="fs-6">end</code> отсутствует, <code className="fs-6">slice</code> возвращает символы до конца строки:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let str = &quot;st*!*ringify*/!*&quot;; <br />
                alert( str.slice(2) ); // ringify, с позиции 2 и до конца
            </code>
        </pre>

        <p>Также для <code className="fs-6">start/end</code> можно задавать отрицательные значения. Это означает, что позиция определена как заданное количество символов <code className="fs-6">с конца строки</code>:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let str = &quot;strin*!*gif*/!*y&quot;; <br />

                // начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа <br />
                alert( str.slice(-4, -1) ); // gif
            </code>
        </pre>

        <p><code className="fs-6">str.substring(start [, end])</code>
        : Возвращает часть строки <em>между</em> <code className="fs-6">start</code> и <code className="fs-6">end</code> (не включая) <code className="fs-6">end</code>.</p>
        <p>Это — почти то же, что и <code className="fs-6">slice</code>, но можно задавать <code className="fs-6">start</code> больше <code className="fs-6">end</code>. Если <code className="fs-6">start</code> больше <code className="fs-6">end</code>, то метод <code className="fs-6">substring</code> сработает так, как если бы аргументы были поменяны местами.</p>

        <p>Например:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let str = &quot;st*!*ring*/!*ify&quot;; <br />

                // для substring эти два примера — одинаковы <br />
                alert( str.substring(2, 6) ); // &quot;ring&quot; <br />
                alert( str.substring(6, 2) ); // &quot;ring&quot; <br />

                // …но не для slice: <br />
                alert( str.slice(2, 6) ); // &quot;ring&quot; (то же самое) <br />
                alert( str.slice(6, 2) ); // &quot;&quot; (пустая строка)
            </code>
        </pre>

        <p>Отрицательные значения <code className="fs-6">substring</code>, в отличие от <code className="fs-6">slice</code>, не поддерживает, они интерпретируются как <code className="fs-6"></code>.</p>
        
        <p><code className="fs-6">str.substr(start [, length])</code>
        : Возвращает часть строки от <code className="fs-6">start</code> длины <code className="fs-6">length</code>.</p>
        <p>В противоположность предыдущим методам, этот позволяет указать длину вместо конечной позиции:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let str = &quot;st*!*ring*/!*ify&quot;; <br />
                // ring, получаем 4 символа, начиная с позиции 2 <br />
                alert( str.substr(2, 4) );
            </code>
        </pre>

        <p>Значение первого аргумента может быть отрицательным, тогда позиция определяется с конца:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let str = &quot;strin*!*gi*/!*fy&quot;; <br />
                // gi, получаем 2 символа, начиная с позиции 4 с конца строки <br />
                alert( str.substr(-4, 2) );
            </code>
        </pre>

        <p>Давайте подытожим, как работают эти методы, чтобы не запутаться:</p>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>метод</th>
                    <th>выбирает…</th>
                    <th>отрицательные значения</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code className="fs-6">slice(start, end)</code></td>
                    <td>от <code className="fs-6">start</code> до <code className="fs-6">end</code> (не включая <code className="fs-6">end</code>)</td>
                    <td>можно передавать отрицательные значения</td>
                </tr>
                <tr>
                    <td><code className="fs-6">substring(start, end)</code></td>
                    <td>между <code className="fs-6">start</code> и <code className="fs-6">end</code></td>
                    <td>отрицательные значения равнозначны <code className="fs-6">0</code></td>
                </tr>
                <tr>
                    <td><code className="fs-6">substr(start, length)</code></td>
                    <td><code className="fs-6">length</code> символов, начиная от <code className="fs-6">start</code></td>
                    <td>значение <code className="fs-6">start</code> может быть отрицательным</td>
                </tr>
            </tbody>
        </table>
        <div className="fst-italic border-3 border-start border-warning px-3">
            <p>
                Все эти методы эффективно выполняют задачу. Формально у метода `substr` есть небольшой недостаток: он описан не в собственно спецификации JavaScript, а в приложении к ней — Annex B. Это приложение описывает возможности языка для использования в браузерах, существующие в основном по историческим причинам. Таким образом, в другом окружении, отличном от браузера, он может не поддерживаться. Однако на практике он работает везде.
                Из двух других вариантов, `slice` более гибок, он поддерживает отрицательные аргументы, и его короче писать. Так что, в принципе, можно запомнить только его.
            </p>
        </div>

        <h2>Сравнение строк</h2>
        <p>Cтроки сравниваются посимвольно в алфавитном порядке.</p>
        <p>Тем не менее, есть некоторые нюансы.</p>
        <ol>
            <li>
                <p>Строчные буквы больше заглавных:</p>
                <pre className="text-bg-dark px-3 py-3">
                    <code className="fs-6">
                        alert( &#39;a&#39; &gt; &#39;Z&#39; ); // true
                    </code>
                </pre>
            </li>
            <li>
                <p>Буквы, имеющие диакритические знаки, идут &quot;не по порядку&quot;:</p>
                <pre className="text-bg-dark px-3 py-3">
                    <code className="fs-6">
                        alert( &#39;Österreich&#39; &gt; &#39;Zealand&#39; ); // true
                    </code>
                </pre>
                <p> Это может привести к своеобразным результатам при сортировке названий стран: нормально было бы ожидать, что <code className="fs-6">Zealand</code> будет после <code className="fs-6">Österreich</code> в списке.</p>
            </li>
        </ol>
        <p>Чтобы разобраться, что происходит, давайте ознакомимся с внутренним представлением строк в JavaScript.</p>
        <p>Строки кодируются в <a href="https://ru.wikipedia.org/wiki/UTF-16">UTF-16</a>. Таким образом, у любого символа есть соответствующий код. Есть специальные методы, позволяющие получить символ по его коду и наоборот.</p>
        <p><code className="fs-6">str.codePointAt(pos)</code>
        : Возвращает код для символа, находящегося на позиции <code className="fs-6">pos</code>:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                // одна и та же буква в нижнем и верхнем регистре <br />
                // будет иметь разные коды <br />
                alert( &quot;z&quot;.codePointAt(0) ); // 122 <br />
                alert( &quot;Z&quot;.codePointAt(0) ); // 90
            </code>
        </pre>
        <p><code className="fs-6">String.fromCodePoint(code)</code>
        : Создаёт символ по его коду <code className="fs-6">code</code></p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( String.fromCodePoint(90) ); // Z
            </code>
        </pre>

        <p>Также можно добавлять Юникодные символы по их кодам, используя <code className="fs-6">\u</code> с шестнадцатеричным кодом символа:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                // 90 — 5a в шестнадцатеричной системе счисления <br />
                alert( &#39;\u005a&#39; ); // Z
            </code>
        </pre>
 
        <p>Давайте сделаем строку, содержащую символы с кодами от <code className="fs-6">65</code> до <code className="fs-6">220</code> — это латиница и ещё некоторые распространённые символы:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let str = &#39;&#39;; <br />

                {`for (let i = 65; i &lt;= 220; i++) {`} <br />
                {`    str += String.fromCodePoint(i);`} <br />
                {`}`} <br />
                alert( str ); <br />
                // ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{`{`}|{`}`}~ <br />
                // ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
            </code>
        </pre>
        <p>Как видите, сначала идут заглавные буквы, затем несколько спецсимволов, затем строчные и <code className="fs-6">Ö</code> ближе к концу вывода.</p>
        <p>Теперь очевидно, почему <code className="fs-6">a &gt; Z</code>.</p>
        <p>Символы сравниваются по их кодам. Больший код — больший символ. Код <code className="fs-6">a</code> (97) больше кода <code className="fs-6">Z</code> (90).</p>
        <ul>
            <li>Все строчные буквы идут после заглавных, так как их коды больше.</li>
            <li>Некоторые буквы, такие как <code className="fs-6">Ö</code>, вообще находятся вне основного алфавита. У этой буквы код больше, чем у любой буквы от <code className="fs-6">a</code> до <code className="fs-6">z</code>.</li>
        </ul>
        <h3>Правильное сравнение</h3>
        <p>&quot;Правильный&quot; алгоритм сравнения строк сложнее, чем может показаться, так как разные языки используют разные алфавиты.</p>
        <p>Поэтому браузеру нужно знать, какой язык использовать для сравнения.</p>
        <p>К счастью, все современные браузеры (для IE10- нужна дополнительная библиотека <a href="https://github.com/andyearnshaw/Intl.js/">Intl.JS</a>) поддерживают стандарт <a href="https://www.ecma-international.org/ecma-402/1.0/ECMA-402.pdf">ECMA 402</a>, обеспечивающий правильное сравнение строк на разных языках с учётом их правил.</p>
        <p>Для этого есть соответствующий метод.</p>
        <p>Вызов <a href="mdn:js/String/localeCompare">str.localeCompare(str2)</a> возвращает число, которое показывает, какая строка больше в соответствии с правилами языка:</p>
        <ul>
            <li>Отрицательное число, если <code className="fs-6">str</code> меньше <code className="fs-6">str2</code>.</li>
            <li>Положительное число, если <code className="fs-6">str</code> больше <code className="fs-6">str2</code>.</li>
            <li><code className="fs-6">0</code>, если строки равны.</li>
        </ul>
        <p>Например:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( &#39;Österreich&#39;.localeCompare(&#39;Zealand&#39;) ); // -1
            </code>
        </pre>
        <p>У этого метода есть два дополнительных аргумента, которые указаны в <a href="mdn:js/String/localeCompare">документации</a>. Первый позволяет указать язык (по умолчанию берётся из окружения) — от него зависит порядок букв. Второй — определить дополнительные правила, такие как чувствительность к регистру, а также следует ли учитывать различия между <code className="fs-6">&quot;a&quot;</code> и <code className="fs-6">&quot;á&quot;</code>.</p>

        <h2>Итого</h2>
        <ul>
            <li>Есть три типа кавычек. Строки, использующие обратные кавычки, могут занимать более одной строки в коде и включать выражения <code className="fs-6">${`{`}…{`}`}</code>.</li>
            <li>Строки в JavaScript кодируются в UTF-16.</li>
            <li>Есть специальные символы, такие как <code className="fs-6">\n</code>, и можно добавить символ по его Юникодному коду, используя <code className="fs-6">\u…</code>.</li>
            <li>Для получения символа используйте <code className="fs-6">[]</code>.</li>
            <li>Для получения подстроки используйте <code className="fs-6">slice</code> или <code className="fs-6">substring</code>.</li>
            <li>Для того, чтобы перевести строку в нижний или верхний регистр, используйте <code className="fs-6">toLowerCase/toUpperCase</code>.</li>
            <li>Для поиска подстроки используйте <code className="fs-6">indexOf</code> или <code className="fs-6">includes/startsWith/endsWith</code>, когда надо только проверить, есть ли вхождение.</li>
            <li>Чтобы сравнить строки с учётом правил языка, используйте <code className="fs-6">localeCompare</code>.</li>
        </ul>
        <p>Строки также имеют ещё кое-какие полезные методы:</p>
        <ul>
        <li><code className="fs-6">str.trim()</code> — убирает пробелы в начале и конце строки.</li>
        <li><code className="fs-6">str.repeat(n)</code> — повторяет строку <code className="fs-6">n</code> раз.</li>
        <li>…и другие, которые вы можете найти в <a href="mdn:js/String">справочнике</a>.</li>
        </ul>
        
        </>
    );
}

export default Strings;