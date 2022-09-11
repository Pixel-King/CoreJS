import * as React from 'react';

const TempDeadZone: React.FC =() => {
    return (
    <>
    
    <h1>Область видимости <code>let</code>, temporal dead zone</h1>
    <p>Директива <code className="fs-6">let</code> объявляет переменную с блочной областью видимости с возможностью инициализировать её значением.</p>
    <h2>Синтаксис</h2>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]];
        </code>
    </pre>
    <h2>Параметры</h2>
    <p><code className="fs-6">var1, var2, …, varN</code>:</p>
    <p>Имя переменной. Может использоваться любой допустимый идентификатор.</p>
    <br />
    <p><code className="fs-6">value1, value2, …, valueN</code>:</p>
    <p>Имя переменной. Может использоваться любой допустимый идентификатор.</p>
    <h2>Описание</h2>
    <p>Директива <code className="fs-6">let</code> позволяет объявить локальную переменную с областью видимости, ограниченной текущим блоком кода . В отличие от ключевого слова <code className="fs-6">var</code>, которое объявляет переменную глобально или локально во всей функции, независимо от области блока.</p>
    <h2>Правила области видимости</h2>
    <p>Областью видимости переменных, объявленных ключевым словом <code className="fs-6">let</code>, является блок, в котором они объявлены, и все его подблоки. В этом работа директива <code className="fs-6">let</code> схожа с работой директивы <code className="fs-6">var</code>. Основная разница заключается в том, что областью видимости переменной, объявленной директивой <code className="fs-6">var</code>, является вся функция, в которой она объявлена:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function varTest() {
var x = 1;
    if (true) {
        var x = 2;  // та же переменная!
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;  // другая переменная
        console.log(x);  // 2
    }
  console.log(x);  // 1
}`}
        </code>
    </pre>
    <p><code className="fs-6">let</code> иногда делает код чище при использовании вложенных функций.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`var list = document.getElementById("list");

for (let i = 1; i <= 5; i++) {
    let item = document.createElement('li');
    item.appendChild(document.createTextNode('Item ' + i));

    item.onclick = function(ev) {
        console.log('Item ' + i + ' is clicked.');
    };
    list.appendChild(item);
}

// чтобы получить такой же эффект с использованием 'var'
// необходимо создать новый контекст
// используя замыкание, чтобы сохранить значение неизменённым
for (var i = 1; i <= 5; i++) {
    var item = document.createElement("li");
    item.appendChild(document.createTextNode("Item " + i));

    (function(i){
        item.onclick = function(ev) {
            console.log('Item ' + i + ' is clicked.');
        };
    })(i);
    list.appendChild(item);
}`}
        </code>
    </pre>
    <p>Пример выше будет выполнен как и ожидается, так как пять экземпляров внутренней функции (анонимной) будут ссылаться на пять разных экземпляров переменной <code className="fs-6">i</code>. Пример будет выполнен неверно, если заменить директиву <code className="fs-6">let</code> на <code className="fs-6">var</code>, или удалить переменную <code className="fs-6">i</code> из параметров вложенной функции и использовать внешнюю переменную <code className="fs-6">i</code> во внутренней функции.</p>
    <p>На верхнем уровне скриптов и функций <em><code className="fs-6">let</code>, в отличии от <code className="fs-6">var</code>, не создаёт свойства на глобальном объекте</em>. Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`var x = 'global_x';
let y = 'global_y';
console.log(this.x); // 'global_x'
console.log(this.y); // undefined`}
        </code>
    </pre>
    <p>В выводе программы будет отображено слово "global_x" для <code className="fs-6">this.x</code>, но undefined для <code className="fs-6">this.y</code>.</p>
    <h2>Эмуляция приватных членов</h2>
    <p>При взаимодействии с конструкторами можно использовать выражение <code className="fs-6">let</code> чтобы открыть доступ к одному или нескольким приватным членам через использование замыканий:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`var SomeConstructor;

{
    let privateScope = {};

    SomeConstructor = function SomeConstructor() {
        this.someProperty = 'foo';
        privateScope.hiddenProperty = 'bar';
    }

    SomeConstructor.prototype.showPublic = function() {
        console.log(this.someProperty); // foo
    }

    SomeConstructor.prototype.showPrivate = function() {
        console.log(privateScope.hiddenProperty); // bar
    }

}

var myInstance = new SomeConstructor();

myInstance.showPublic();
myInstance.showPrivate();

console.log(privateScope.hiddenProperty); // error`}
        </code>
    </pre>
    <p>Эта техника позволяет получить только "статичное" приватное состояние - в примере выше, все экземпляры полученные из конструктора <code className="fs-6">SomeConstructor</code> будут ссылаться на одну и ту же область видимости <em>privateScope</em>.</p>
    <h2>Временные мёртвые зоны и ошибки при использовании <code className="fs-6">let</code></h2>
    <p>Повторное объявление той же переменной в том же блоке или функции приведёт к выбросу исключения <em>SyntaxError</em>.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`if (x) {
    let foo;
    let foo; // SyntaxError thrown.
}`}
        </code>
    </pre>
    <p>В стандарте ECMAScript 2015 переменные, объявленные директивой <code className="fs-6">let</code>, переносятся в начало блока. Но если вы сошлётесь в блоке на переменную, до того как она объявлена директивой <code className="fs-6">let</code>, то это приведёт к выбросу исключения <em>ReferenceError</em>, потому что переменная находится во <em>"временной мёртвой зоне (temporal dead zone)"</em> с начала блока и до места её объявления (в отличие от переменной, объявленной через <code className="fs-6">var</code>, которая просто будет содержать значение <em>undefined</em>)</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`function do_something() {
    console.log(bar); // undefined
    console.log(foo); // ReferenceError: foo is not defined
    var bar = 1;
    let foo = 2;
}`}
        </code>
    </pre>
    <p>Вы можете столкнуться с ошибкой в операторах блока <code className="fs-6">switch</code>, так как он имеет только один подблок.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`switch (x) {
    case 0:
        let foo;
        break;

    case 1:
        let foo; // Выброс SyntaxError из-за повторного объявления переменной
        break;
}`}
        </code>
    </pre>
    <h2>Использование <code>let</code> в циклах for</h2>
    <p>Вы можете использовать ключевое слово <code className="fs-6">let</code> для привязки переменных к локальной области видимости цикла <code className="fs-6">for</code>. Разница с использованием <code className="fs-6">var</code> в заголовке цикла <code className="fs-6">for</code>, заключается в том, что переменные объявленные <code className="fs-6">var</code>, будут видны во всей функции, в которой находится этот цикл.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`var i=0;
for ( let i=i ; i < 10 ; i++ ) {
    console.log(i);
}`}
        </code>
    </pre>

    </>
    );
}

export default TempDeadZone;