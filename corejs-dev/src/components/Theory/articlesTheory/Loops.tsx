import * as React from 'react';

const Loops: React.FC =() => {
    return (
    <>
    
    <h1>Циклы while и for</h1>
    <p>При написании скриптов зачастую встаёт задача сделать однотипное действие много раз.</p>
    <p>Например, вывести товары из списка один за другим. Или просто перебрать все числа от <code className="fs-6">1</code> до <code className="fs-6">10</code> и для каждого выполнить одинаковый код.</p>
    <p>Для многократного повторения одного участка кода предусмотрены <em>циклы</em>.</p>
    <h2>Цикл 'while'</h2>
    <p>Цикл <code className="fs-6">while</code> имеет следующий синтаксис:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`while (condition) {
    // код
    // также называемый 'телом цикла'
}`}
        </code>
    </pre>
    <p>Код из тела цикла выполняется, пока условие <code className="fs-6">condition</code> истинно.</p>
    <p>Например, цикл ниже выводит <code className="fs-6">i</code>, пока <code className="fs-6">{`i < 3`}</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
    alert( i );
    i++;
}`}
        </code>
    </pre>
    <p>Одно выполнение тела цикла по-научному называется <em>итерация</em>. Цикл в примере выше совершает три итерации.</p>
    <p>Если бы строка <code className="fs-6">i++</code> отсутствовала в примере выше, то цикл бы повторялся (в теории) вечно. На практике, конечно, браузер не позволит такому случиться, он предоставит пользователю возможность остановить 'подвисший' скрипт, а JavaScript на стороне сервера придётся 'убить' процесс.</p>
    <p>Любое выражение или переменная может быть условием цикла, а не только сравнение: условие <code className="fs-6">while</code> вычисляется и преобразуется в логическое значение.</p>
    <p>Например, <code className="fs-6">while (i)</code> - более краткий вариант <code className="fs-6">while (i != 0)</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let i = 3;
*!*
while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
*/!*
    alert( i );
    i-;
}`}
        </code>
    </pre>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Если тело цикла состоит лишь из одной инструкции, мы можем опустить фигурные скобки <code className="fs-6">{`{…}`}</code>:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
            {`let i = 3;
*!*
while (i) alert(i-);
*/!*`}
            </code>
        </pre>
    </div>

    <h2>Цикл 'do…while'</h2>
    <p>Проверку условия можно разместить под телом цикла, используя специальный синтаксис <code className="fs-6">do..while</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`do {
    // тело цикла
} while (condition);`}
        </code>
    </pre>
    <p>Цикл сначала выполнит тело, а затем проверит условие <code className="fs-6">condition</code>, и пока его значение равно <code className="fs-6">true</code>, он будет выполняться снова и снова.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let i = 0;
do {
    alert( i );
    i++;
} while (i < 3);`}
        </code>
    </pre>
    <p>Такая форма синтаксиса оправдана, если вы хотите, чтобы тело цикла выполнилось <strong>хотя бы один раз</strong>, даже если условие окажется ложным. На практике чаще используется форма с предусловием: <code className="fs-6">{`while(…) {…}`}</code>.</p>
    <h2>Цикл 'for'</h2>
    <p>Более сложный, но при этом самый распространённый цикл — цикл <code className="fs-6">for</code>.</p>
    <p>Выглядит он так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`for (начало; условие; шаг) {
    // ... тело цикла ...
}`}
        </code>
    </pre>
    <p>Давайте разберёмся, что означает каждая часть, на примере. Цикл ниже выполняет <code className="fs-6">alert(i)</code> для <code className="fs-6">i</code> от <code className="fs-6">0</code> до (но не включая) <code className="fs-6">3</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
    alert(i);
}`}
        </code>
    </pre>
    <p>Рассмотрим конструкцию <code className="fs-6">for</code> подробней:</p>
    <table className="table table-bordered text-center">
        <thead>
            <tr>
                <th>часть</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><em>начало</em></td>
                <td><code className="fs-6">let i = 0</code></td>
                <td>Выполняется один раз при входе в цикл</td>
            </tr>
            <tr>
                <td><em>условие</em></td>
                <td><code className="fs-6">{`i < 3`}</code></td>
                <td>Проверяется <em>перед</em> каждой итерацией цикла. Если оно вычислится в <code className="fs-6">false</code>, цикл остановится.</td>
            </tr>
            <tr>
                <td><em>тело</em></td>
                <td><code className="fs-6">alert(i)</code></td>
                <td>Выполняется снова и снова, пока условие вычисляется в <code className="fs-6">true</code>.</td>
            </tr>
            <tr>
                <td><em>шаг</em></td>
                <td><code className="fs-6">i++</code></td>
                <td>Выполняется <em>после</em> тела цикла на каждой итерации <em>перед</em> проверкой условия.</td>
            </tr>
        </tbody>
    </table>
    <p>В целом, алгоритм работы цикла выглядит следующим образом:</p>
    <pre className="text-bg-dark px-3 py-3"><code className="fs-6">Выполнить начало <br />
    → (Если условие == true → Выполнить тело, Выполнить шаг) <br />
    → (Если условие == true → Выполнить тело, Выполнить шаг) <br />
    → (Если условие == true → Выполнить тело, Выполнить шаг) <br />
    → ...
    </code></pre>
    <p>То есть, <code className="fs-6">начало</code> выполняется один раз, а затем каждая итерация заключается в проверке <code className="fs-6">условия</code>, после которой выполняется <code className="fs-6">тело</code> и <code className="fs-6">шаг</code>.</p>
    <p>Если тема циклов для вас нова, может быть полезным вернуться к примеру выше и воспроизвести его работу на листе бумаги, шаг за шагом.</p>
    <p>Вот в точности то, что происходит в нашем случае:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`// for (let i = 0; i < 3; i++) alert(i)

// Выполнить начало
let i = 0;
// Если условие == true → Выполнить тело, Выполнить шаг
if (i < 3) { alert(i); i++ }
// Если условие == true → Выполнить тело, Выполнить шаг
if (i < 3) { alert(i); i++ }
// Если условие == true → Выполнить тело, Выполнить шаг
if (i < 3) { alert(i); i++ }
// ...конец, потому что теперь i == 3`}
        </code>
    </pre>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>В примере переменная счётчика <code className="fs-6">i</code> была объявлена прямо в цикле. Это так называемое 'встроенное' объявление переменной. Такие переменные существуют только внутри цикла.</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`for (*!*let*/!* i = 0; i < 3; i++) {
    alert(i); // 0, 1, 2
}
alert(i); // ошибка, нет такой переменной`}
            </code>
        </pre>
        <p>Вместо объявления новой переменной мы можем использовать уже существующую:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`let i = 0;

for (i = 0; i < 3; i++) { // используем существующую переменную
    alert(i); // 0, 1, 2
}

alert(i); // 3, переменная доступна, т.к. была объявлена снаружи цикла`}
            </code>
        </pre>
    </div>

    <h3>Пропуск частей 'for'</h3>
    <p>Любая часть <code className="fs-6">for</code> может быть пропущена.</p>
    <p>Для примера, мы можем пропустить <code className="fs-6">начало</code> если нам ничего не нужно делать перед стартом цикла.</p>
    <p>Вот так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let i = 0; // мы уже имеем объявленную i с присвоенным значением

for (; i < 3; i++) { // нет необходимости в 'начале'
    alert( i ); // 0, 1, 2
}`}
        </code>
    </pre>
    <p>Можно убрать и <code className="fs-6">шаг</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let i = 0;

for (; i < 3;) {
    alert( i++ );
}`}
        </code>
    </pre>
    <p>Это сделает цикл аналогичным <code className="fs-6">{`while (i < 3)`}</code>.</p>
    <p>А можно и вообще убрать всё, получив бесконечный цикл:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`for (;;) {
    // будет выполняться вечно
}`}
        </code>
    </pre>
    <p>При этом сами точки с запятой <code className="fs-6">;</code> обязательно должны присутствовать, иначе будет ошибка синтаксиса.</p>
    <h2>Прерывание цикла: 'break'</h2>
    <p>Обычно цикл завершается при вычислении <em>условия</em> в <code className="fs-6">false</code>.</p>
    <p>Но мы можем выйти из цикла в любой момент с помощью специальной директивы <code className="fs-6">break</code>.</p>
    <p>Например, следующий код подсчитывает сумму вводимых чисел до тех пор, пока посетитель их вводит, а затем – выдаёт:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let sum = 0;

while (true) {

    let value = +prompt('Введите число', '');

    *!*
    if (!value) break; // (*)
    */!*

    sum += value;

}
alert( 'Сумма: ' + sum );`}
        </code>
    </pre>
    <p>Директива <code className="fs-6">break</code> в строке <code className="fs-6">(*)</code> полностью прекращает выполнение цикла и передаёт управление на строку за его телом, то есть на <code className="fs-6">alert</code>.</p>
    <p>Вообще, сочетание «бесконечный цикл + <code className="fs-6">break</code>» – отличная штука для тех ситуаций, когда условие, по которому нужно прерваться, находится не в начале или конце цикла, а посередине или даже в нескольких местах его тела.</p>
    <h2>Переход к следующей итерации: <code className="fs-6">continue</code></h2>
    <p>Директива <code className="fs-6">continue</code> - 'облегчённая версия' <code className="fs-6">break</code>. При её выполнении цикл не прерывается, а переходит к следующей итерации (если условие все ещё равно <code className="fs-6">true</code>).</p>
    <p>Её используют, если понятно, что на текущем повторе цикла делать больше нечего.</p>
    <p>Например, цикл ниже использует <code className="fs-6">continue</code>, чтобы выводить только нечётные значения:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`for (let i = 0; i < 10; i++) {

    // если true, пропустить оставшуюся часть тела цикла
    *!*if (i % 2 == 0) continue;*/!*

    alert(i); // 1, затем 3, 5, 7, 9
}`}
        </code>
    </pre>
    <p>Для чётных значений <code className="fs-6">i</code>, директива <code className="fs-6">continue</code> прекращает выполнение тела цикла и передаёт управление на следующую итерацию <code className="fs-6">for</code> (со следующим числом). Таким образом <code className="fs-6">alert</code> вызывается только для нечётных значений.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Директива <code className="fs-6">continue</code> позволяет избегать вложенности. Цикл, который обрабатывает только нечётные значения, мог бы выглядеть так:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`for (let i = 0; i < 10; i++) {

    if (i % 2) {
        alert( i );
    }

}`}
            </code>
        </pre>
        <p>С технической точки зрения он полностью идентичен. Действительно, вместо <code className="fs-6">continue</code> можно просто завернуть действия в блок <code className="fs-6">if</code>.</p>
        <p>Однако мы получили дополнительный уровень вложенности фигурных скобок. Если код внутри <code className="fs-6">if</code> более длинный, то это ухудшает читаемость, в отличие от варианта с <code className="fs-6">continue</code>.</p>
    </div>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Нельзя использовать <code className="fs-6">break/continue</code> справа от оператора '?'.</p>
        <p>Обратите внимание, что эти синтаксические конструкции не являются выражениями и не могут быть использованы с тернарным оператором <code className="fs-6">?</code>. В частности, использование таких директив, как <code className="fs-6">break/continue</code>, вызовет ошибку.</p>
        <p>Например, если мы возьмём этот код:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`if (i > 5) {
    alert(i);
} else {
    continue;
}`}
            </code>
        </pre>
        <p>...и перепишем его, используя вопросительный знак:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`(i > 5) ? alert(i) : *!*continue*/!*; // continue здесь приведёт к ошибке`}
            </code>
        </pre>
        <p>...то будет синтаксическая ошибка.</p>
        <p>Это ещё один повод не использовать оператор вопросительного знака <code className="fs-6">?</code> вместо <code className="fs-6">if</code>.</p>
    </div>
    
    <h2>Метки для break/continue</h2>
    <p>Бывает, нужно выйти одновременно из нескольких уровней цикла сразу.</p>
    <p>Например, в коде ниже мы проходимся циклами по <code className="fs-6">i</code> и <code className="fs-6">j</code>, запрашивая с помощью <code className="fs-6">prompt</code> координаты <code className="fs-6">(i, j)</code> с <code className="fs-6">(0,0)</code> до <code className="fs-6">(2,2)</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`for (let i = 0; i < 3; i++) {`} <br />
            {``} <br />
            {`    for (let j = 0; j < 3; j++) {`} <br />
            {``} <br />
            {"        let input = prompt(`Значение на координатах (${i},${j})`, '');"} <br />
            {``} <br />
            {`        // Что если мы захотим перейти к Готово (ниже) прямо отсюда?`} <br />
            {`    }`} <br />
            {`}`} <br />
            {``} <br />
            {`alert('Готово!');`}
        </code>
    </pre>
    <p>Нам нужен способ остановить выполнение если пользователь отменит ввод.</p>
    <p>Обычный <code className="fs-6">break</code> после <code className="fs-6">input</code> лишь прервёт внутренний цикл, но этого недостаточно. Достичь желаемого поведения можно с помощью меток.</p>
    <p><em>Метка</em> имеет вид идентификатора с двоеточием перед циклом:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`labelName: for (...) {
    ...
}`}
        </code>
    </pre>
    <p>Вызов <code className="fs-6">break <em>labelName</em></code> в цикле ниже ищет ближайший внешний цикл с такой меткой и переходит в его конец.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`*!*outer:*/!* for (let i = 0; i < 3; i++) {`}
            {``}
            {`    for (let j = 0; j < 3; j++) {`}
            {``}
            {"        let input = prompt(`Значение на координатах (${i},${j})`, '');"}
            {``}
            {`        // если пустая строка или Отмена, то выйти из обоих циклов`}
            {`        if (!input) *!*break outer*/!*; // (*)`}
            {``}
            {`        // сделать что-нибудь со значениями...`}
            {`    }`}
            {`}`}
            {``}
            {`alert('Готово!');`}
        </code>
    </pre>
    <p>В примере выше это означает, что вызовом <code className="fs-6">break outer</code> будет разорван внешний цикл до метки с именем <code className="fs-6">outer</code>.</p>
    <p>Таким образом управление перейдёт со строки, помеченной <code className="fs-6">(*)</code>, к <code className="fs-6">alert('Готово!')</code>.</p>
    <p>Можно размещать метку на отдельной строке:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`outer:
    for (let i = 0; i < 3; i++) { ... }`}
        </code>
    </pre>
    <p>Директива <code className="fs-6">continue</code> также может быть использована с меткой. В этом случае управление перейдёт на следующую итерацию цикла с меткой.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Метки не дают возможности передавать управление в произвольное место кода.</p>
        <p>Например, нет возможности сделать следующее:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`break label; // не прыгает к метке ниже

label: for (...)`}
            </code>
        </pre>
        <p>Директива <code className="fs-6">break</code> должна находиться внутри блока кода. Технически, подойдет любой маркированный блок кода, например:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`label: {
    // ...
    break label; // работает
    // ...
}`}
            </code>
        </pre>
        <p>...Хотя в 99.9% случаев <code className="fs-6">break</code> используется внутри циклов, как мы видели в примерах выше.</p>
        <p>К слову, <code className="fs-6">continue</code> возможно только внутри цикла.</p>
    </div>

    <h2>Итого</h2>
    <p>Мы рассмотрели 3 вида циклов:</p>
    <ul>
        <li><code className="fs-6">while</code> - Проверяет условие перед каждой итерацией.</li>
        <li><code className="fs-6">do..while</code> - Проверяет условие после каждой итерации.</li>
        <li><code className="fs-6">for (;;)</code> - Проверяет условие перед каждой итерацией, есть возможность задать дополнительные настройки.</li>
    </ul>
    <p>Чтобы организовать бесконечный цикл, используют конструкцию <code className="fs-6">while (true)</code>. При этом он, как и любой другой цикл, может быть прерван директивой <code className="fs-6">break</code>.</p>
    <p>Если на данной итерации цикла делать больше ничего не надо, но полностью прекращать цикл не следует – используют директиву <code className="fs-6">continue</code>.</p>
    <p>Обе этих директивы поддерживают <em>метки</em>, которые ставятся перед циклом. Метки – единственный способ для <code className="fs-6">break/continue</code> выйти за пределы текущего цикла, повлиять на выполнение внешнего.</p>
    <p>Заметим, что метки не позволяют прыгнуть в произвольное место кода, в JavaScript нет такой возможности.</p>

    </>
    );
}

export default Loops;