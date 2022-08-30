import * as React from 'react';

const Numbers: React.FC =() => {
    return (
        <>
        <h1 id="числа">Числа</h1>
        <p>В современном JavaScript существует два типа чисел:</p>
        <ol>
            <li>Обычные числа в JavaScript хранятся в 64-битном формате <a href="https://en.wikipedia.org/wiki/IEEE_754-1985">IEEE-754</a>, который также называют &quot;числа с плавающей точкой двойной точности&quot; (double precision floating point numbers). Это числа, которые мы будем использовать чаще всего. Мы поговорим о них в этой главе.</li>
            <li><code className="fs-6">BigInt</code> числа дают возможность работать с целыми числами произвольной длины. Они нужны достаточно редко и используются в случаях, когда необходимо работать со значениями более чем <code className="fs-6">2<sup>53</sup></code> или менее чем <code className="fs-6">-2<sup>53</sup></code>.</li>
        </ol>
        <p>В данной главе мы рассмотрим только первый тип чисел: числа типа <code className="fs-6">number</code>. Давайте глубже изучим, как с ними работать в JavaScript.</p>
        <h2 id="способы-записи-числа">Способы записи числа</h2>
        <p>Представьте, что нам надо записать число 1 миллиард. Самый очевидный путь:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">let billion = 1000000000;</code>
        </pre>
        <p>Но в реальной жизни мы обычно опускаем запись множества нулей, так как можно легко ошибиться. Укороченная запись может выглядеть как <code className="fs-6">&quot;1млрд&quot;</code> или <code className="fs-6">&quot;7.3млрд&quot;</code> для 7 миллиардов 300 миллионов. Такой принцип работает для всех больших чисел.</p>
        <p>В JavaScript можно использовать букву <code className="fs-6">&quot;e&quot;</code>, чтобы укоротить запись числа. Она добавляется к числу и заменяет указанное количество нулей:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей <br />
                alert( 7.3e9 );  // 7.3 миллиардов (7,300,000,000)
            </code>
        </pre>
        <p>Другими словами, <code className="fs-6">&quot;e&quot;</code> производит операцию умножения числа на 1 с указанным количеством нулей.</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                1e3 = 1 * 1000 <br />
                1.23e6 = 1.23 * 1000000
            </code>
        </pre>
        <p>Сейчас давайте запишем что-нибудь очень маленькое. К примеру, 1 микросекунду (одна миллионная секунды):</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let ms = 0.000001;
            </code>
        </pre>
        <p>Записать микросекунду в укороченном виде нам поможет <code className="fs-6">&quot;e&quot;</code>.</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let ms = 1e-6; // шесть нулей, слева от 1
            </code>
        </pre>
        <p>Если мы подсчитаем количество нулей <code className="fs-6">0.000001</code>, их будет 6. Естественно, верная запись <code className="fs-6">1e-6</code>.  </p>
        <p>Другими словами, отрицательное число после <code className="fs-6">&quot;e&quot;</code> подразумевает деление на 1 с указанным количеством нулей:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                // 1 делится на 1 с 3 нулями <br />
                1e-3 = 1 / 1000 (=0.001) <br />
                // 1.23 делится на 1 с 6 нулями <br />
                1.23e-6 = 1.23 / 1000000 (=0.00000123)
            </code>
        </pre>
        <h3 id="шестнадцатеричные-двоичные-и-восьмеричные-числа">Шестнадцатеричные, двоичные и восьмеричные числа</h3>
        <p><a href="https://ru.wikipedia.org/wiki/%D0%A8%D0%B5%D1%81%D1%82%D0%BD%D0%B0%D0%B4%D1%86%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D1%87%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0_%D1%81%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F">Шестнадцатеричные</a> числа широко используются в JavaScript для представления цветов, кодировки символов и многого другого. Естественно, есть короткий стиль записи: <code className="fs-6">0x</code>, после которого указывается число.</p>
        <p>Например:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( 0xff ); // 255 <br />
                alert( 0xFF ); // 255 (то же самое, регистр не имеет значения)
            </code>
        </pre>
        <p>Не так часто используются двоичные и восьмеричные числа, но они также поддерживаются <code className="fs-6">0b</code> для двоичных и <code className="fs-6">0o</code> для восьмеричных:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let a = 0b11111111; // бинарная форма записи числа 255 <br />
                let b = 0o377; // восьмеричная форма записи числа 255 <br />
                alert( a == b ); // true, с двух сторон число 255
            </code>
        </pre>
        <p>Есть только 3 системы счисления с такой поддержкой. Для других систем счисления мы рекомендуем использовать функцию <code className="fs-6">parseInt</code> (рассмотрим позже в этой главе).</p>
        <h2>toString(base)</h2>
        <p>Метод <code className="fs-6">num.toString(base)</code> возвращает строковое представление числа <code className="fs-6">num</code> в системе счисления <code className="fs-6">base</code>.</p>
        <p>Например:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let num = 255; <br />
                alert( num.toString(16) );  // ff <br />
                alert( num.toString(2) );   // 11111111 <br />
            </code>
        </pre>
        <p><code className="fs-6">base</code> может варьироваться от <code className="fs-6">2</code> до <code className="fs-6">36</code> (по умолчанию <code className="fs-6">10</code>).</p>
        <p>Часто используемые:</p>
        <ul>
            <li><p><strong>base=16</strong> — для шестнадцатеричного представления цвета, кодировки символов и т.д., цифры могут быть <code className="fs-6">0..9</code> или <code className="fs-6">A..F</code>.</p>
            </li>
            <li><p><strong>base=2</strong> — обычно используется для отладки побитовых операций, цифры <code className="fs-6">0</code> или <code className="fs-6">1</code>.</p>
            </li>
            <li><p><strong>base=36</strong> — максимальное основание, цифры могут быть <code className="fs-6">0..9</code> или <code className="fs-6">A..Z</code>. То есть, используется весь латинский алфавит для представления числа. Забавно, но можно использовать <code className="fs-6">36</code>-разрядную систему счисления для получения короткого представления большого числового идентификатора. К примеру, для создания короткой ссылки. Для этого просто преобразуем его в <code className="fs-6">36</code>-разрядную систему счисления:</p>
            <pre className="text-bg-dark px-3 py-3">
                <code className="fs-6 text-bg-dark px-3 py-3">
                    alert( 123456..toString(36) ); // 2n9c
                </code>
            </pre>
            </li>
        </ul>
        <div className="fst-italic border-3 border-start border-warning px-3">
            <p>
                Внимание! Две точки в `123456..toString(36)` это не опечатка. Если нам надо вызвать метод непосредственно на числе, как `toString` в примере выше, то нам надо поставить две точки `..` после числа.
                Если мы поставим одну точку: `123456.toString(36)`, тогда это будет ошибкой, поскольку синтаксис JavaScript предполагает, что после первой точки начинается десятичная часть.
                А если поставить две точки, то JavaScript понимает, что десятичная часть отсутствует, и начинается метод.
                Также можно записать как `(123456).toString(36)`.
            </p>
        </div>
        <h2>Округление</h2>
        <p>Одна из часто используемых операций при работе с числами - это округление.</p>
        <p>В JavaScript есть несколько встроенных функций для работы с округлением:</p>
        <p><code className="fs-6">Math.floor</code>
        : Округление в меньшую сторону: <code className="fs-6">3.1</code> становится <code className="fs-6">3</code>, а <code className="fs-6">-1.1</code> — <code className="fs-6">-2</code>.</p>
        <p><code className="fs-6">Math.ceil</code>
        : Округление в большую сторону: <code className="fs-6">3.1</code> становится <code className="fs-6">4</code>, а <code className="fs-6">-1.1</code> — <code className="fs-6">-1</code>.</p>
        <p><code className="fs-6">Math.round</code>
        : Округление до ближайшего целого: <code className="fs-6">3.1</code> становится <code className="fs-6">3</code>, <code className="fs-6">3.6</code> — <code className="fs-6">4</code>, а <code className="fs-6">-1.1</code> — <code className="fs-6">-1</code>.</p>
        <p><code className="fs-6">Math.trunc</code> (не поддерживается в Internet Explorer)
        : Производит удаление дробной части без округления: <code className="fs-6">3.1</code> становится <code className="fs-6">3</code>, а <code className="fs-6">-1.1</code> — <code className="fs-6">-1</code>.</p>
        <p>Ниже представлена таблица с различиями между функциями округления:</p>
        <table className="table table-bordered text-center">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col"><code className="fs-6">Math.floor</code></th>
                    <th scope="col"><code className="fs-6">Math.ceil</code></th>
                    <th scope="col"><code className="fs-6">Math.round</code></th>
                    <th scope="col"><code className="fs-6">Math.trunc</code></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code className="fs-6">3.1</code></td>
                    <td><code className="fs-6">3</code></td>
                    <td><code className="fs-6">4</code></td>
                    <td><code className="fs-6">3</code></td>
                    <td><code className="fs-6">3</code></td>
                </tr>
                <tr>
                    <td><code className="fs-6">3.6</code></td>
                    <td><code className="fs-6">3</code></td>
                    <td><code className="fs-6">4</code></td>
                    <td><code className="fs-6">4</code></td>
                    <td><code className="fs-6">3</code></td>
                </tr>
                <tr>
                    <td><code className="fs-6">-1.1</code></td>
                    <td><code className="fs-6">-2</code></td>
                    <td><code className="fs-6">-1</code></td>
                    <td><code className="fs-6">-1</code></td>
                    <td><code className="fs-6">-1</code></td>
                </tr>
                <tr>
                    <td><code className="fs-6">-1.6</code></td>
                    <td><code className="fs-6">-2</code></td>
                    <td><code className="fs-6">-1</code></td>
                    <td><code className="fs-6">-2</code></td>
                    <td><code className="fs-6">-1</code></td>
                </tr>
            </tbody>
        </table>
        <p>Эти функции охватывают все возможные способы обработки десятичной части. Что если нам надо округлить число до <code className="fs-6">n-ого</code> количества цифр в дробной части?</p>
        <p>Например, у нас есть <code className="fs-6">1.2345</code> и мы хотим округлить число до 2-х знаков после запятой, оставить только <code className="fs-6">1.23</code>.</p>
        <p>Есть два пути решения:</p>
        <ol>
            <li>
                <p>Умножить и разделить.</p>
                <p> Например, чтобы округлить число до второго знака после запятой, мы можем умножить число на <code className="fs-6">100</code>, вызвать функцию округления и разделить обратно.</p>
                <pre className="text-bg-dark px-3 py-3">
                    <code className="fs-6">
                        let num = 1.23456; <br />
                        alert( Math.floor(num * 100) / 100 ); // 1.23456 -&gt; 123.456 -&gt; 123 -&gt; 1.23
                    </code>
                </pre>
            </li>
            <li>
                <p>Метод <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed">toFixed(n)</a> округляет число до <code className="fs-6">n</code> знаков после запятой и возвращает строковое представление результата.</p>
                <pre className="text-bg-dark px-3 py-3">
                    <code className="fs-6">
                        let num = 12.34; <br />
                        alert( num.toFixed(1) ); // &quot;12.3&quot;
                    </code>
                </pre>
                <p> Округляет значение до ближайшего числа, как в большую, так и в меньшую сторону, аналогично методу <code className="fs-6">Math.round</code>:</p>
                <pre className="text-bg-dark px-3 py-3">
                    <code className="fs-6">
                        let num = 12.36; <br />
                        alert( num.toFixed(1) ); // &quot;12.4&quot;
                    </code>
                </pre>
                <p> Обратите внимание, что результатом <code className="fs-6">toFixed</code> является строка. Если десятичная часть короче, чем необходима, будут добавлены нули в конец строки:</p>
                <pre className="text-bg-dark px-3 py-3">
                    <code className="fs-6">
                        let num = 12.34; <br />
                        alert( num.toFixed(5) ); // &quot;12.34000&quot;, добавлены нули, чтобы получить 5 знаков после запятой
                    </code>
                </pre>
                <p> Мы можем преобразовать полученное значение в число, используя унарный оператор <code className="fs-6">+</code> или <code className="fs-6">Number()</code>, пример с унарным оператором: <code className="fs-6">+num.toFixed(5)</code>.</p>
            </li>
        </ol>
        <h2>Неточные вычисления</h2>
        <p>Внутри JavaScript число представлено в виде 64-битного формата <a href="https://ru.wikipedia.org/wiki/IEEE_754-1985">IEEE-754</a>. Для хранения числа используется 64 бита: 52 из них используется для хранения цифр, 11 из них для хранения положения десятичной точки (если число целое, то хранится 0), и один бит отведён на хранение знака.</p>
        <p>Если число слишком большое, оно переполнит 64-битное хранилище, JavaScript вернёт бесконечность:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( 1e500 ); // Infinity
            </code>
        </pre>
        <p>Наиболее часто встречающаяся ошибка при работе с числами в JavaScript - это потеря точности.</p>
        <p>Посмотрите на это (неверное!) сравнение:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( 0.1 + 0.2 == 0.3 ); // *!*false*/!*
            </code>
        </pre>
        <p>Да-да, сумма <code className="fs-6">0.1</code> и <code className="fs-6">0.2</code> не равна <code className="fs-6">0.3</code>.</p>
        <p>Странно! Что тогда, если не <code className="fs-6">0.3</code>?</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( 0.1 + 0.2 ); // 0.30000000000000004
            </code>
        </pre>
        <p>Ой! Здесь гораздо больше последствий, чем просто некорректное сравнение. Представьте, вы делаете интернет-магазин и посетители формируют заказ из 2-х позиций за <code className="fs-6">$0.10</code> и <code className="fs-6">$0.20</code>. Итоговый заказ будет <code className="fs-6">$0.30000000000000004</code>. Это будет сюрпризом для всех.</p>
        <p>Но почему это происходит?</p>
        <p>Число хранится в памяти в бинарной форме, как последовательность бит - единиц и нулей. Но дроби, такие как <code className="fs-6">0.1</code>, <code className="fs-6">0.2</code>, которые выглядят довольно просто в десятичной системе счисления, на самом деле являются бесконечной дробью в двоичной форме.</p>
        <p>Другими словами, что такое <code className="fs-6">0.1</code>? Это единица делённая на десять — <code className="fs-6">1/10</code>, одна десятая. В десятичной системе счисления такие числа легко представимы, по сравнению с одной третьей: <code className="fs-6">1/3</code>, которая становится бесконечной дробью <code className="fs-6">0.33333(3)</code>.</p>
        <p>Деление на <code className="fs-6">10</code> гарантированно хорошо работает в десятичной системе, но деление на <code className="fs-6">3</code> - нет. По той же причине и в двоичной системе счисления, деление на <code className="fs-6">2</code> обязательно сработает, а <code className="fs-6">1/10</code> становится бесконечной дробью.</p>
        <p>В JavaScript нет возможности для хранения точных значений 0.1 или 0.2, используя двоичную систему, точно также, как нет возможности хранить одну третью в десятичной системе счисления.</p>
        <p>Числовой формат IEEE-754 решает эту проблему путём округления до ближайшего возможного числа. Правила округления обычно не позволяют нам увидеть эту &quot;крошечную потерю точности&quot;, но она существует.</p>
        <p>Пример:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( 0.1.toFixed(20) ); // 0.10000000000000000555
            </code>
        </pre>
        <p>И когда мы суммируем 2 числа, их &quot;неточности&quot; тоже суммируются.</p>
        <p>Вот почему <code className="fs-6">0.1 + 0.2</code> - это не совсем <code className="fs-6">0.3</code>.</p>
        <div className="fst-italic border-3 border-start border-warning px-3">
            <p>
                Справедливости ради заметим, что ошибка в точности вычислений для чисел с плавающей точкой сохраняется в любом другом языке, где используется формат IEEE 754, включая PHP, Java, C, Perl, Ruby.
            </p>
        </div>
        <p>Можно ли обойти проблему? Конечно, наиболее надёжный способ — это округлить результат используя метод <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed">toFixed(n)</a>:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let sum = 0.1 + 0.2; <br />
                alert( sum.toFixed(2) ); // 0.30
            </code>
        </pre>
        <p>Помните, что метод <code className="fs-6">toFixed</code> всегда возвращает строку. Это гарантирует, что результат будет с заданным количеством цифр в десятичной части. Также это удобно для форматирования цен в интернет-магазине <code className="fs-6">$0.30</code>. В других случаях можно использовать унарный оператор <code className="fs-6">+</code>, чтобы преобразовать строку в число:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let sum = 0.1 + 0.2; <br />
                alert( +sum.toFixed(2) ); // 0.3
            </code>
        </pre>
        <p>Также можно временно умножить число на 100 (или на большее), чтобы привести его к целому, выполнить математические действия, а после разделить обратно. Суммируя целые числа, мы уменьшаем погрешность, но она всё равно появляется при финальном делении:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3 <br />
                alert( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001
            </code>
        </pre>
        <p>Таким образом, метод умножения/деления уменьшает погрешность, но полностью её не решает.</p>
        <p>Иногда можно попробовать полностью отказаться от дробей. Например, если мы в нашем интернет-магазине начнём использовать центы вместо долларов. Но что будет, если мы применим скидку 30%? На практике у нас не получится полностью избавиться от дроби. Просто используйте округление, чтобы отрезать &quot;хвосты&quot;, когда надо.</p>
        <div className="fst-italic border-3 border-start border-warning px-3">
            <p>Попробуйте выполнить его:</p>
            <pre className="text-bg-dark px-3 py-3">
                <code className="fs-6">
                // Привет! Я – число, растущее само по себе! <br />
                alert( 9999999999999999 ); // покажет 10000000000000000
                </code>
            </pre>
            <p>Причина та же – потеря точности. Из 64 бит, отведённых на число, сами цифры числа занимают до 52 бит, остальные 11 бит хранят позицию десятичной точки и один бит – знак. Так что если 52 бит не хватает на цифры, то при записи пропадут младшие разряды.</p>
            <p>Интерпретатор не выдаст ошибку, но в результате получится «не совсем то число», что мы и видим в примере выше. Как говорится: «как смог, так записал».</p>
        </div>
        <div className="fst-italic border-3 border-start border-warning px-3">
            <p> Другим забавным следствием внутреннего представления чисел является наличие двух нулей: `0` и `-0`. Все потому, что знак представлен отдельным битом, так что, любое число может быть положительным и отрицательным, включая нуль. В большинстве случаев это поведение незаметно, так как операторы в JavaScript воспринимают их одинаковыми.</p>
        </div>
        <h2 id="проверка-isfinite-и-isnan">Проверка: isFinite и isNaN</h2>
        <p>Помните эти специальные числовые значения?</p>
        <ul>
            <li><code className="fs-6">Infinity</code> (и <code className="fs-6">-Infinity</code>) — особенное численное значение, которое ведёт себя в точности как математическая бесконечность ∞.</li>
            <li><code className="fs-6">NaN</code> представляет ошибку.</li>
        </ul>
        <p>Эти числовые значения принадлежат типу <code className="fs-6">number</code>, но они не являются &quot;обычными&quot; числами, поэтому есть функции для их проверки:</p>
        <ul>
            <li><p><code className="fs-6">isNaN(value)</code> преобразует значение в число и проверяет является ли оно <code className="fs-6">NaN</code>:</p>
            <pre className="text-bg-dark px-3 py-3">
                <code className="fs-6">
                    alert( isNaN(NaN) ); // true <br />
                    alert( isNaN(&quot;str&quot;) ); // true
                </code>
            </pre>
            <p>  Нужна ли нам эта функция? Разве не можем ли мы просто сравнить <code className="fs-6">=== NaN</code>? К сожалению, нет. Значение <code className="fs-6">NaN</code> уникально тем, что оно не является равным ни чему другому, даже самому себе:</p>
            <pre className="text-bg-dark px-3 py-3">
                <code className="fs-6">
                    alert( NaN === NaN ); // false
                </code>
            </pre>
            </li>
            <li>
                <p><code className="fs-6">isFinite(value)</code> преобразует аргумент в число и возвращает <code className="fs-6">true</code>, если оно является обычным числом, т.е. не <code className="fs-6">NaN/Infinity/-Infinity</code>:</p>
                <pre className="text-bg-dark px-3 py-3">
                    <code className="fs-6">
                        alert( isFinite(&quot;15&quot;) ); // true <br />
                        alert( isFinite(&quot;str&quot;) ); // false, потому что специальное значение: NaN <br />
                        alert( isFinite(Infinity) ); // false, потому что специальное значение: Infinity <br />
                    </code>
                </pre>
            </li>
        </ul>
        <p>Иногда <code className="fs-6">isFinite</code> используется для проверки, содержится ли в строке число:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let num = +prompt(&quot;Enter a number&quot;, &#39;&#39;); <br />
                // вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число <br />
                alert( isFinite(num) );
            </code>
        </pre>
        <p>Помните, что пустая строка интерпретируется как <code className="fs-6">0</code> во всех числовых функциях, включая<code className="fs-6">isFinite</code>.  </p>
        <h2>Сравнение <code>Object.is</code></h2>
        <p>Существует специальный метод <a href="mdn:js/Object/is">Object.is</a>, который сравнивает значения примерно как <code className="fs-6">===</code>, но более надёжен в двух особых ситуациях:</p>
        <ol>
            <li>Работает с <code className="fs-6">NaN</code>: <code className="fs-6">Object.is(NaN, NaN) === true</code>, здесь он хорош.</li>
            <li>Значения <code className="fs-6">0</code> и <code className="fs-6">-0</code> разные: <code className="fs-6">Object.is(0, -0) === false</code>, это редко используется, но технически эти значения разные.</li>
        </ol>
        <p>Во всех других случаях <code className="fs-6">Object.is(a, b)</code> идентичен <code className="fs-6">a === b</code>.</p>
        <p>Этот способ сравнения часто используется в спецификации JavaScript. Когда внутреннему алгоритму необходимо сравнить 2 значения на предмет точного совпадения, он использует <code className="fs-6">Object.is</code> (Определение <a href="https://tc39.github.io/ecma262/#sec-samevalue">SameValue</a>).</p>
        

        <h2>parseInt и parseFloat</h2>

        <p>Для явного преобразования к числу можно использовать `+` или `Number()`. Если строка не является в точности числом, то результат будет `NaN`:</p>

        <pre  className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( +&quot;100px&quot; ); // NaN
            </code>
        </pre>
        <p>Единственное исключение — это пробелы в начале строки и в конце, они игнорируются.</p>
        <p>В реальной жизни мы часто сталкиваемся со значениями у которых есть единица измерения, например <code className="fs-6">&quot;100px&quot;</code> или <code className="fs-6">&quot;12pt&quot;</code> в CSS. Также во множестве стран символ валюты записывается после номинала <code className="fs-6">&quot;19€&quot;</code>. Так как нам получить числовое значение из таких строк?</p>
        <p>Для этого есть <code className="fs-6">parseInt</code> и <code className="fs-6">parseFloat</code>.</p>
        <p>Они &quot;читают&quot; число из строки. Если в процессе чтения возникает ошибка, они возвращают полученное до ошибки число. Функция <code className="fs-6">parseInt</code> возвращает целое число, а <code className="fs-6">parseFloat</code> возвращает число с плавающей точкой:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( parseInt(&#39;100px&#39;) ); // 100 <br />
                alert( parseFloat(&#39;12.5em&#39;) ); // 12.5 <br />

                alert( parseInt(&#39;12.3&#39;) ); // 12, вернётся только целая часть <br />
                alert( parseFloat(&#39;12.3.4&#39;) ); // 12.3, произойдёт остановка чтения на второй точке
            </code>
        </pre>
        <p>Функции <code className="fs-6">parseInt/parseFloat</code> вернут <code className="fs-6">NaN</code>, если не смогли прочитать ни одну цифру:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( parseInt(&#39;a123&#39;) ); // NaN, на первом символе происходит остановка чтения
            </code>
        </pre>
        <p>&quot;Второй аргумент <code className="fs-6">parseInt(str, radix)</code>&quot;
        Функция <code className="fs-6">parseInt()</code> имеет необязательный второй параметр. Он определяет систему счисления, таким образом <code className="fs-6">parseInt</code> может также читать строки с шестнадцатеричными числами, двоичными числами и т.д.:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( parseInt(&#39;0xff&#39;, 16) ); // 255 <br />
                alert( parseInt(&#39;ff&#39;, 16) ); // 255, без 0x тоже работает <br />

                alert( parseInt(&#39;2n9c&#39;, 36) ); // 123456 <br />
            </code>
        </pre>

        <h2>Другие математические функции</h2>

        <p>В JavaScript встроен объект [Math](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math), который содержит различные математические функции и константы.</p>

        <p>Несколько примеров:</p>

        <p><code className="fs-6">Math.random()</code> возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( Math.random() ); // 0.1234567894322 <br />
                alert( Math.random() ); // 0.5435252343232 <br />
                alert( Math.random() ); // ... (любое количество псевдослучайных чисел)
            </code>
        </pre>

        <p><code className="fs-6">Math.max(a, b, c...) / Math.min(a, b, c...)</code> возвращает наибольшее/наименьшее число из перечисленных аргументов.</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( Math.max(3, 5, -10, 0, 1) ); // 5 <br />
                alert( Math.min(1, 2) ); // 1
            </code>
        </pre>


        <p><code className="fs-6">Math.pow(n, power)</code> возвращает число <code className="fs-6">n</code>, возведённое в степень `power`</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( Math.pow(2, 10) ); // 2 в степени 10 = 1024
            </code>
        </pre>

        <p>В объекте <code className="fs-6">Math</code> есть множество функций и констант, включая тригонометрические функции, подробнее можно ознакомиться в документации по объекту [Math](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math).</p>

        <h2>Итого</h2>

        <p>Чтобы писать числа с большим количеством нулей:</p>

        <p>- Используйте краткую форму записи чисел - <code className="fs-6">&quot;e&quot;</code>, с указанным количеством нулей. Например: <code className="fs-6">123e6</code> это <code className="fs-6">123</code> с 6-ю нулями <code className="fs-6">123000000</code>.</p>
        <p>- Отрицательное число после <code className="fs-6">&quot;e&quot;</code> приводит к делению числа на 1 с указанным количеством нулей. Например: <code className="fs-6">123e-6</code> это <code className="fs-6">0.000123</code> (<code className="fs-6">123</code> миллионных).</p>

        <p>Для других систем счисления:</p>

        <p>- Можно записывать числа сразу в шестнадцатеричной (<code className="fs-6">0x</code>), восьмеричной (<code className="fs-6">0o</code>) и бинарной (<code className="fs-6">0b</code>) системах счисления</p>
        <p>- <code className="fs-6">parseInt(str, base)</code> преобразует строку в целое число в соответствии с указанной системой счисления: <code className="fs-6">2 ≤ base ≤ 36</code>.</p>
        <p>- <code className="fs-6">num.toString(base)</code> представляет число в строковом виде в указанной системе счисления <code className="fs-6">base</code>.</p>

        <p>Для преобразования значений типа <code className="fs-6">12pt</code> и <code className="fs-6">100px</code> в число:</p>

        <p>- Используйте <code className="fs-6">parseInt/parseFloat</code> для &quot;мягкого&quot; преобразования строки в число, данные функции по порядку считывают число из строки до тех пор пока не возникнет ошибка.</p>

        <p>Для дробей:</p>

        <p>- Используйте округления <code className="fs-6">Math.floor</code>, <code className="fs-6">Math.ceil</code>, <code className="fs-6">Math.trunc</code>, <code className="fs-6">Math.round</code> или <code className="fs-6">num.toFixed(precision)</code>.</p>
        <p>- Помните, что при работе с дробями происходит потеря точности.</p>

        <p>Ещё больше математических функций:</p>

        <p>- Документация по объекту <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math">Math</a>. Библиотека маленькая, но содержит всё самое важное.</p>

        </>
    );
}

export default Numbers;