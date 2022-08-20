import * as React from 'react';

const Comparison: React.FC =() => {
    return (
    <>

    <h1>Операторы сравнения</h1>
    <p>Многие операторы сравнения известны нам из математики.</p>
    <p>В JavaScript они записываются так:</p>
    <ul>
        <li>Больше/меньше: <code className="fs-6">a &gt; b</code>, <code className="fs-6">a &lt; b</code>.</li>
        <li>Больше/меньше или равно: <code className="fs-6">a &gt;= b</code>, <code className="fs-6">a &lt;= b</code>.</li>
        <li>Равно: <code className="fs-6">a == b</code>. Обратите внимание, для сравнения используется двойной знак равенства <code className="fs-6">==</code>. Один знак равенства <code className="fs-6">a = b</code> означал бы присваивание.</li>
        <li>Не равно. В математике обозначается символом <code className="fs-6">&ne;</code>, но в JavaScript записывается как <code className="fs-6">a != b</code>.</li>
    </ul>
    <p>В этом разделе мы больше узнаем про то, какие бывают сравнения, как язык с ними работает и к каким неожиданностям мы должны быть готовы.</p>
    <p>В конце вы найдёте хороший рецепт того, как избегать &quot;причуд&quot; сравнения в JavaScript.</p>
    <h2>Результат сравнения имеет логический тип</h2>
    <p>Все операторы сравнения возвращают значение логического типа:</p>
    <ul>
        <li><code className="fs-6">true</code> - означает &quot;да&quot;, &quot;верно&quot;, &quot;истина&quot;.</li>
        <li><code className="fs-6">false</code> - означает &quot;нет&quot;, &quot;неверно&quot;, &quot;ложь&quot;.</li>
    </ul>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            alert( 2 &gt; 1 );  // true (верно) <br />
            alert( 2 == 1 ); // false (неверно) <br />
            alert( 2 != 1 ); // true (верно)
        </code>
    </pre>
    <p>Результат сравнения можно присвоить переменной, как и любое значение:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let result = 5 &gt; 4; // результат сравнения присваивается переменной result <br />
            alert( result ); // true
        </code>
    </pre>
    <h2>Сравнение строк</h2>
    <p>Чтобы определить, что одна строка больше другой, JavaScript использует &quot;алфавитный&quot; или &quot;лексикографический&quot; порядок.</p>
    <p>Другими словами, строки сравниваются посимвольно.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            alert( &#39;Я&#39; &gt; &#39;А&#39; ); // true <br />
            alert( &#39;Коты&#39; &gt; &#39;Кода&#39; ); // true <br />
            alert( &#39;Сонный&#39; &gt; &#39;Сон&#39; ); // true
        </code>
    </pre>
    <p>Алгоритм сравнения двух строк довольно прост:</p>
    <ol>
        <li>Сначала сравниваются первые символы строк.</li>
        <li>Если первый символ первой строки больше (меньше), чем первый символ второй, то первая строка больше (меньше) второй. Сравнение завершено.</li>
        <li>Если первые символы равны, то таким же образом сравниваются уже вторые символы строк.</li>
        <li>Сравнение продолжается, пока не закончится одна из строк.</li>
        <li>Если обе строки заканчиваются одновременно, то они равны. Иначе, большей считается более длинная строка.</li>
    </ol>
    <p>В примерах выше сравнение <code className="fs-6">&#39;Я&#39; &gt; &#39;А&#39;</code> завершится на первом шаге, тогда как строки <code className="fs-6">&#39;Коты&#39;</code> и <code className="fs-6">&#39;Кода&#39;</code> будут сравниваться посимвольно:</p>
    <ol>
        <li><code className="fs-6">К</code> равна <code className="fs-6">К</code>.</li>
        <li><code className="fs-6">о</code> равна <code className="fs-6">о</code>.</li>
        <li><code className="fs-6">т</code> больше, чем <code className="fs-6">д</code>. На этом сравнение заканчивается. Первая строка больше.</li>
    </ol>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Приведённый выше алгоритм сравнения похож на алгоритм, используемый в словарях и телефонных книгах, но между ними есть и различия. Например, в JavaScript имеет значение регистр символов. Заглавная буква <code className="fs-6">&quot;A&quot;</code> не равна строчной <code className="fs-6">&quot;a&quot;</code>. Какая же из них больше? Строчная <code className="fs-6">&quot;a&quot;</code>. Почему? Потому что строчные буквы имеют больший код во внутренней таблице кодирования, которую использует JavaScript (Unicode).</p>
    </div>
    
    
    <h2>Сравнение разных типов</h2>
    <p>При сравнении значений разных типов JavaScript приводит каждое из них к числу.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            alert( &#39;2&#39; &gt; 1 ); // true, строка &#39;2&#39; становится числом 2 <br />
            alert( &#39;01&#39; == 1 ); // true, строка &#39;01&#39; становится числом 1
        </code>
    </pre>
    <p>Логическое значение <code className="fs-6">true</code> становится <code className="fs-6">1</code>, а <code className="fs-6">false</code> – <code className="fs-6">0</code>.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            alert( true == 1 ); // true <br />
            alert( false == 0 ); // true
        </code>
    </pre>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Возможна следующая ситуация:</p>
        <ul>
            <li>
                <p>Два значения равны.</p>
            </li>
            <li>
                <p>Одно из них <code className="fs-6">true</code> как логическое значение, другое – <code className="fs-6">false</code>.</p>
            </li>
        </ul>
        <p>Например:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                let a = 0; <br />
                alert( Boolean(a) ); // false <br />
                let b = &quot;0&quot;; <br />
                alert( Boolean(b) ); // true <br />
                alert(a == b); // true!
            </code>
        </pre>
    </div>

    <p>С точки зрения JavaScript, результат ожидаем. Равенство преобразует значения, используя числовое преобразование, поэтому <code className="fs-6">&quot;0&quot;</code> становится <code className="fs-6">0</code>. В то время как явное преобразование с помощью <code className="fs-6">Boolean</code> использует другой набор правил.</p>

    <h2>Строгое сравнение</h2>
    <p>Использование обычного сравнения <code className="fs-6">==</code> может вызывать проблемы. Например, оно не отличает <code className="fs-6">0</code> от <code className="fs-6">false</code>:</p>
    <pre className="text-bg-dark  px-3 py-3">
        <code className="fs-6">
            alert( 0 == false ); // true
        </code>
    </pre>
    <p>Та же проблема с пустой строкой:</p>
    <pre className="text-bg-dark  px-3 py-3">
        <code className="fs-6">
            alert( &#39;&#39; == false ); // true
        </code>
    </pre>
    <p>Это происходит из-за того, что операнды разных типов преобразуются оператором <code className="fs-6">==</code> к числу. В итоге, и пустая строка, и <code className="fs-6">false</code> становятся нулём.</p>
    <p>Как же тогда отличать <code className="fs-6">0</code> от <code className="fs-6">false</code>?</p>
    <p><strong>Оператор строгого равенства <code className="fs-6">===</code> проверяет равенство без приведения типов.</strong></p>
    <p>Другими словами, если <code className="fs-6">a</code> и <code className="fs-6">b</code> имеют разные типы, то проверка <code className="fs-6">a === b</code> немедленно возвращает <code className="fs-6">false</code> без попытки их преобразования.</p>
    <p>Давайте проверим:</p>
    <pre className="text-bg-dark  px-3 py-3">
        <code className="fs-6">
            alert( 0 === false ); // false, так как сравниваются разные типы
        </code>
    </pre>
    <p>Ещё есть оператор строгого неравенства <code className="fs-6">!==</code>, аналогичный <code className="fs-6">!=</code>.</p>
    <p>Оператор строгого равенства дольше писать, но он делает код более очевидным и оставляет меньше места для ошибок.</p>
    <h2>Сравнение с null и undefined</h2>
    <p>Поведение <code className="fs-6">null</code> и <code className="fs-6">undefined</code> при сравнении с другими значениями — особое:</p>
    <p>При строгом равенстве <code className="fs-6">===</code>
    : Эти значения различны, так как различны их типы.</p>
    <pre className="text-bg-dark  px-3 py-3">
        <code className="fs-6">
            alert( null === undefined ); // false
        </code>
    </pre>
    <p>При нестрогом равенстве <code className="fs-6">==</code>
    : Эти значения равны друг другу и не равны никаким другим значениям. Это специальное правило языка.</p>
    <pre className="text-bg-dark  px-3 py-3">
        <code className="fs-6">
            alert( null == undefined ); // true
        </code>
    </pre>
    <p>При использовании математических операторов и других операторов сравнения <code className="fs-6">&lt; &gt; &lt;= &gt;=</code>
    : Значения <code className="fs-6">null/undefined</code> преобразуются к числам: <code className="fs-6">null</code> становится <code className="fs-6">0</code>, а <code className="fs-6">undefined</code> – <code className="fs-6">NaN</code>.</p>
    <p>Посмотрим, какие забавные вещи случаются, когда мы применяем эти правила. И, что более важно, как избежать ошибок при их использовании.</p>
    <h3>Странный результат сравнения null и 0</h3>
    <p>Сравним <code className="fs-6">null</code> с нулём:</p>
    <pre className="text-bg-dark  px-3 py-3">
        <code className="fs-6">
            alert( null &gt; 0 );  // (1) false <br />
            alert( null == 0 ); // (2) false <br />
            alert( null &gt;= 0 ); // (3) *!*true*/!*
        </code>
    </pre>
    <p>С точки зрения математики это странно. Результат последнего сравнения говорит о том, что &quot;<code className="fs-6">null</code> больше или равно нулю&quot;, тогда результат одного из сравнений выше должен быть <code className="fs-6">true</code>, но они оба ложны.</p>
    <p>Причина в том, что нестрогое равенство и сравнения <code className="fs-6">&gt; &lt; &gt;= &lt;=</code> работают по-разному. Сравнения преобразуют <code className="fs-6">null</code> в число, рассматривая его как <code className="fs-6">0</code>. Поэтому выражение (3) <code className="fs-6">null &gt;= 0</code> истинно, а <code className="fs-6">null &gt; 0</code> ложно.</p>
    <p>С другой стороны, для нестрогого равенства <code className="fs-6">==</code> значений <code className="fs-6">undefined</code> и <code className="fs-6">null</code> действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому (2) <code className="fs-6">null == 0</code> ложно.</p>
    <h3>Несравненное значение undefined</h3>
    <p>Значение <code className="fs-6">undefined</code> несравнимо с другими значениями:</p>
    <pre className="text-bg-dark  px-3 py-3">
        <code className="fs-6">
            alert( undefined &gt; 0 ); // false (1) <br />
            alert( undefined &lt; 0 ); // false (2) <br />
            alert( undefined == 0 ); // false (3)
        </code>
    </pre>
    <p>Почему же сравнение <code className="fs-6">undefined</code> с нулём всегда ложно?</p>
    <p>На это есть следующие причины:</p>
    <ul>
        <li>Сравнения <code className="fs-6">(1)</code> и <code className="fs-6">(2)</code> возвращают <code className="fs-6">false</code>, потому что <code className="fs-6">undefined</code> преобразуется в <code className="fs-6">NaN</code>, а <code className="fs-6">NaN</code> – это специальное числовое значение, которое возвращает <code className="fs-6">false</code> при любых сравнениях.</li>
        <li>Нестрогое равенство <code className="fs-6">(3)</code> возвращает <code className="fs-6">false</code>, потому что <code className="fs-6">undefined</code> равно только <code className="fs-6">null</code>, <code className="fs-6">undefined</code> и ничему больше.</li>
    </ul>
    <h3>Как избежать проблем</h3>
    <p>Зачем мы рассмотрели все эти примеры? Должны ли мы постоянно помнить обо всех этих особенностях? Не обязательно. Со временем все они станут вам знакомы, но можно избежать проблем, если следовать надёжным правилам:</p>
    <ul>
        <li>Относитесь очень осторожно к любому сравнению с <code className="fs-6">undefined/null</code>, кроме случаев строгого равенства <code className="fs-6">===</code>.</li>
        <li>Не используйте сравнения <code className="fs-6">&gt;= &gt; &lt; &lt;=</code> с переменными, которые могут принимать значения <code className="fs-6">null/undefined</code>, разве что вы полностью уверены в том, что делаете. Если переменная может принимать эти значения, то добавьте для них отдельные проверки.</li>
    </ul>
    <h2>Итого</h2>
    <ul>
        <li>Операторы сравнения возвращают значения логического типа.</li>
        <li>Строки сравниваются посимвольно в лексикографическом порядке.</li>
        <li>Значения разных типов при сравнении приводятся к числу. Исключением является сравнение с помощью операторов строгого равенства/неравенства.</li>
        <li>Значения <code className="fs-6">null</code> и <code className="fs-6">undefined</code> равны <code className="fs-6">==</code> друг другу и не равны любому другому значению.</li>
        <li>Будьте осторожны при использовании операторов сравнений вроде <code className="fs-6">&gt;</code> и <code className="fs-6">&lt;</code> с переменными, которые могут принимать значения <code className="fs-6">null/undefined</code>. Хорошей идеей будет сделать отдельную проверку на <code className="fs-6">null/undefined</code>.</li>
    </ul>

    </>
    );
}

export default Comparison;