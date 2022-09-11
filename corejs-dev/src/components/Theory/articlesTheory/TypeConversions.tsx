import * as React from 'react';

const TypeConversions: React.FC =() => {
    return (
    <>
    
    <h1>Преобразование типов</h1>
    <p>Чаще всего операторы и функции автоматически приводят переданные им значения к нужному типу.</p>
    <p>Например, <code className="fs-6">alert</code> автоматически преобразует любое значение к строке. Математические операторы преобразуют значения к числам.</p>
    <p>Есть также случаи, когда нам нужно явно преобразовать значение в ожидаемый тип.</p>

    <h2>Строковое преобразование</h2>
    <p>Строковое преобразование происходит, когда требуется представление чего-либо в виде строки.</p>
    <p>Например, <code className="fs-6">alert(value)</code> преобразует значение к строке.</p>
    <p>Также мы можем использовать функцию <code className="fs-6">String(value)</code>, чтобы преобразовать значение к строке:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let value = true; <br />
            alert(typeof value); // boolean <br />
            *!* <br />
            value = String(value); // теперь value это строка &quot;true&quot; <br />
            alert(typeof value); // string <br />
            */!*
        </code>
    </pre>
    <p>Преобразование происходит очевидным образом. <code className="fs-6">false</code> становится <code className="fs-6">&quot;false&quot;</code>, <code className="fs-6">null</code> становится <code className="fs-6">&quot;null&quot;</code> и т.п.</p>
    <h2>Численное преобразование</h2>
    <p>Численное преобразование происходит в математических функциях и выражениях.</p>
    <p>Например, когда операция деления <code className="fs-6">/</code> применяется не к числу:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            alert( &quot;6&quot; / &quot;2&quot; ); // 3, строки преобразуются в числа
        </code>
    </pre>
    <p>Мы можем использовать функцию <code className="fs-6">Number(value)</code>, чтобы явно преобразовать <code className="fs-6">value</code> к числу:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let str = &quot;123&quot;; <br />
            alert(typeof str); // string <br />
            let num = Number(str); // становится числом 123 <br />
            alert(typeof num); // number <br />
        </code>
    </pre>
    <p>Явное преобразование часто применяется, когда мы ожидаем получить число из строкового контекста, например из текстовых полей форм.</p>
    <p>Если строка не может быть явно приведена к числу, то результатом преобразования будет <code className="fs-6">NaN</code>. Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let age = Number(&quot;Любая строка вместо числа&quot;); <br />
            alert(age); // NaN, преобразование не удалось
        </code>
    </pre>
    <p>Правила численного преобразования:</p>
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Значение</th>
                <th>Преобразуется в...</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code className="fs-6">undefined</code></td>
                <td><code className="fs-6">NaN</code></td>
            </tr>
            <tr>
                <td><code className="fs-6">null</code></td>
                <td><code className="fs-6">0</code></td>
            </tr>
            <tr>
                <td><code className="fs-6">true&nbsp;/&nbsp;false</code></td>
                <td><code className="fs-6">1</code> / <code className="fs-6">0</code></td>
            </tr>
            <tr>
                <td><code className="fs-6">string</code></td>
                <td>Пробельные символы по краям обрезаются. Далее, если остаётся пустая строка, то получаем <code className="fs-6">0</code>, иначе из непустой строки &quot;считывается&quot; число. При ошибке результат <code className="fs-6">NaN</code>.</td>
            </tr>
        </tbody>
    </table>
    <p>Примеры:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            alert( Number(&quot;   123   &quot;) ); // 123 <br />
            alert( Number(&quot;123z&quot;) );      // NaN (ошибка чтения числа на месте символа &quot;z&quot;) <br />
            alert( Number(true) );        // 1 <br />
            alert( Number(false) );       //
        </code>
    </pre>
    <p>Учтите, что <code className="fs-6">null</code> и <code className="fs-6">undefined</code> ведут себя по-разному. Так, <code className="fs-6">null</code> становится нулём, тогда как <code className="fs-6">undefined</code> приводится к <code className="fs-6">NaN</code>.</p>
    <p>Большинство математических операторов также производит данное преобразование, как мы увидим в следующей главе.</p>
    <h2>Логическое преобразование</h2>
    <p>Логическое преобразование самое простое.</p>
    <p>Происходит в логических операциях (позже мы познакомимся с условными проверками и подобными конструкциями), но также может быть выполнено явно с помощью функции <code className="fs-6">Boolean(value)</code>.</p>
    <p>Правило преобразования:</p>
    <ul>
        <li>Значения, которые интуитивно &quot;пустые&quot;, вроде <code className="fs-6">0</code>, пустой строки, <code className="fs-6">null</code>, <code className="fs-6">undefined</code> и <code className="fs-6">NaN</code>, становятся <code className="fs-6">false</code>.</li>
        <li>Все остальные значения становятся <code className="fs-6">true</code>.</li>
    </ul>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            alert( Boolean(1) ); // true <br />
            alert( Boolean(0) ); // false <br />
            alert( Boolean(&quot;Привет!&quot;) ); // true <br />
            alert( Boolean(&quot;&quot;) ); // false
        </code>
    </pre>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Заметим, что строчка с нулём <code className="fs-6">&quot;0&quot;</code> — это <code className="fs-6">true</code>. Некоторые языки (к примеру, PHP) воспринимают строку <code className="fs-6">&quot;0&quot;</code> как <code className="fs-6">false</code>. Но в JavaScript, если строка не пустая, то она всегда <code className="fs-6">true</code>.</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                alert( Boolean(&quot;0&quot;) ); // true <br />
                alert( Boolean(&quot; &quot;) ); // пробел это тоже true (любая непустая строка это true)
            </code>
        </pre>
    </div>

    <h2>Итого</h2>

    <p>Существует 3 наиболее широко используемых преобразования: строковое, численное и логическое.</p>
    <p><code className="fs-6">Строковое</code> - происходит, когда нам нужно что-то вывести. Может быть вызвано с помощью <code className="fs-6">String(value)</code>. Для примитивных значений работает очевидным образом.</p>
    <p><code className="fs-6">Численное</code> - происходит в математических операциях. Может быть вызвано с помощью <code className="fs-6">Number(value)</code>.</p>

    

    <code className="fs-6">Численное</code> преобразование подчиняется правилам:
    
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Значение</th>
                <th>Становится...</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code className="fs-6">undefined</code></td>
                <td><code className="fs-6">NaN</code></td>
            </tr>
            <tr>
                <td><code className="fs-6">true / false</code></td>
                <td><code className="fs-6">1 / 0</code></td>
            </tr>
            <tr>
                <td><code className="fs-6">string</code></td>
                <td><code className="fs-6">Пробельные символы по краям обрезаются. Далее, если остаётся пустая строка, то получаем `0`, иначе из непустой строки &quot;считывается&quot; число. При ошибке результат `NaN`.</code></td>
            </tr>
        </tbody>
    </table>

    <p><code className="fs-6">Логическое</code> - происходит в логических операциях. Может быть вызвано с помощью <code className="fs-6">Boolean(value)</code>.</p>
    <p><code className="fs-6">Логическое</code> преобразование подчиняется правилам:</p>
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Значение</th>
                <th>Становится...</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code className="fs-6">0</code>, <code className="fs-6">null</code>, <code className="fs-6">undefined</code>, <code className="fs-6">NaN</code>, <code className="fs-6">&quot;&quot;</code></td>
                <td><code className="fs-6">false</code></td>
            </tr>
            <tr>
                <td>любое другое значение</td>
                <td><code className="fs-6">true</code></td>
            </tr>
        </tbody>
    </table>

    <p>Большую часть из этих правил легко понять и запомнить. Особые случаи, в которых часто допускаются ошибки:</p>
    <ul>
        <li>
            <p><code className="fs-6">undefined</code> при численном преобразовании становится <code className="fs-6">NaN</code>, не <code className="fs-6">0</code>.</p>
        </li>
        <li>
            <p><code className="fs-6">&quot;0&quot;</code> и строки из одних пробелов типа <code className="fs-6">&quot;   &quot;</code> при логическом преобразовании всегда <code className="fs-6">true</code>.</p>
        </li>
    </ul>

    </>
    );
}

export default TypeConversions;