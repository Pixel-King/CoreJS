import * as React from 'react';

const ObjectMethods: React.FC =() => {
    return (
    <>

    <h1>Методы объекта, &quot;this&quot;</h1>
    <p>Объекты обычно создаются, чтобы представлять сущности реального мира, будь то пользователи, заказы и так далее:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`// Объект пользователя
let user = {
    name: 'Джон',
    age: 30
};`}
        </code>
    </pre>
    <p>И так же, как и в реальном мире, пользователь может <em>совершать действия</em>: выбирать что-то из корзины покупок, авторизовываться, выходить из системы, оплачивать и т.п.</p>
    <p>Такие действия в JavaScript представлены свойствами-функциями объекта.</p>
    <h2>Примеры методов</h2>
    <p>Для начала давайте научим нашего пользователя <code className="fs-6">user</code> здороваться:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let user = {
    name: 'Джон',
    age: 30
};

*!*
user.sayHi = function() {
    alert('Привет!');
};
*/!*

user.sayHi(); // Привет!`}
        </code>
    </pre>
    <p>Здесь мы просто использовали Function Expression (функциональное выражение), чтобы создать функцию для приветствия, и присвоили её свойству <code className="fs-6">user.sayHi</code> нашего объекта.</p>
    <p>Затем мы вызвали её. Теперь пользователь может говорить!</p>
    <p>Функцию, которая является свойством объекта, называют <em>методом</em> этого объекта.</p>
    <p>Итак, мы получили метод <code className="fs-6">sayHi</code> объекта <code className="fs-6">user</code>.</p>
    <p>Конечно, мы могли бы заранее объявить функцию и использовать её в качестве метода, примерно так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = {
    // ...
};

*!*
// сначала объявляем
function sayHi() {
    alert(&quot;Привет!&quot;);
}

// затем добавляем в качестве метода
user.sayHi = sayHi;
*/!*

user.sayHi(); // Привет!`}
        </code>
    </pre>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Когда мы пишем наш код, используя объекты для представления сущностей реального мира, - это называется <a href="https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BD%D0%BE-%D0%BE%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5">объектно-ориентированное программирование</a> или сокращённо: &quot;ООП&quot;.</p>
        <p>ООП является большой предметной областью и интересной наукой само по себе. Как выбрать правильные сущности? Как организовать взаимодействие между ними? Это -- создание архитектуры, и есть хорошие книги по этой теме, такие как &quot;Приёмы объектно-ориентированного проектирования. Паттерны проектирования&quot; авторов Эрих Гамма, Ричард Хелм, Ральф Джонсон, Джон Влиссидес или &quot;Объектно-ориентированный анализ и проектирование с примерами приложений&quot; Гради Буча, а также ещё множество других книг.</p>
    </div>

    <h3>Сокращённая запись метода</h3>
    <p>Существует более короткий синтаксис для методов в литерале объекта:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`// эти объекты делают одно и то же (одинаковые методы)

user = {
    sayHi: function() {
        alert('Привет');
    }
};

// сокращённая запись выглядит лучше, не так ли?
user = {
    *!*
    sayHi() { // то же самое, что и 'sayHi: function()';
    */!*
        alert('Привет');
    }
};`}
        </code>
    </pre>
    <p>Как было показано, мы можем пропустить ключевое слово <code className="fs-6">&quot;function&quot;</code> и просто написать <code className="fs-6">sayHi()</code>.</p>
    <p>Нужно отметить, что эти две записи не полностью эквивалентны. Есть тонкие различия, связанные с наследованием объектов (что будет рассмотрено позже), но на данном этапе изучения это неважно. В большинстве случаев сокращённый синтаксис предпочтителен.</p>
    <h2>Ключевое слово &quot;this&quot; в методах</h2>
    <p>Как правило, методу объекта необходим доступ к информации, которая хранится в объекте, чтобы выполнить с ней какие-либо действия (в соответствии с назначением метода).</p>
    <p>Например, коду внутри <code className="fs-6">user.sayHi()</code> может понадобиться имя пользователя, которое хранится в объекте <code className="fs-6">user</code>.</p>
    <p><strong>Для доступа к информации внутри объекта метод может использовать ключевое слово <code className="fs-6">this</code>.</strong></p>
    <p>Значение <code className="fs-6">this</code> - это объект &quot;перед точкой&quot;, который использовался для вызова метода.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = {
    name: 'Джон',
    age: 30,

    sayHi() {
    *!*
        // this - это 'текущий объект';
        alert(this.name);
    */!*
    }

};

user.sayHi(); // Джон`}
        </code>
    </pre>
    <p>Здесь во время выполнения кода <code className="fs-6">user.sayHi()</code> значением <code className="fs-6">this</code> будет являться <code className="fs-6">user</code> (ссылка на объект <code className="fs-6">user</code>).</p>
    <p>Технически также возможно получить доступ к объекту без ключевого слова <code className="fs-6">this</code>, ссылаясь на него через внешнюю переменную (в которой хранится ссылка на этот объект):</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = {
    name: 'Джон',
    age: 30,

    sayHi() {
    *!*
        alert(user.name); // используем переменную 'user' вместо ключевого слова 'this'
    */!*
    }

};`}
        </code>
    </pre>
    <p>...Но такой код будет ненадёжным. Если мы решим скопировать ссылку на объект <code className="fs-6">user</code> в другую переменную, например, <code className="fs-6">admin = user</code>, и перезапишем переменную <code className="fs-6">user</code> чем-то другим, тогда будет осуществлён доступ к неправильному объекту при вызове метода из <code className="fs-6">admin</code>.</p>
    <p>Это показано ниже:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = {
    name: 'Джон',
    age: 30,

    sayHi() {
    *!*
        alert( user.name ); // приведёт к ошибке
    */!*
    }

};


let admin = user;
user = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.

admin.sayHi(); // Ошибка! Внутри sayHi() используется user, которая больше не ссылается на объект!`}
        </code>
    </pre>
    <p>Если мы используем <code className="fs-6">this.name</code> вместо <code className="fs-6">user.name</code> внутри <code className="fs-6">alert</code>, тогда этот код будет работать.</p>
    <h2>&quot;this&quot; не является фиксированным</h2>
    <p>В JavaScript ключевое слово &quot;this&quot; ведёт себя иначе, чем в большинстве других языков программирования. Оно может использоваться в любой функции.</p>
    <p>В этом коде нет синтаксической ошибки:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function sayHi() {
    alert( *!*this*/!*.name );
}`}
        </code>
    </pre>
    <p>Значение <code className="fs-6">this</code> вычисляется во время выполнения кода и зависит от контекста.</p>
    <p>Например, здесь одна и та же функция назначена двум разным объектам и имеет различное значение &quot;this&quot; при вызовах:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = { name: 'Джон' };
let admin = { name: 'Админ' };

function sayHi() {
    alert( this.name );
}

*!*
// используем одну и ту же функцию в двух объектах
user.f = sayHi;
admin.f = sayHi;
*/!*

// вызовы функции, приведённые ниже, имеют разное значение this
// 'this' внутри функции является ссылкой на объект, который указан 'перед точкой';
user.f(); // Джон  (this == user)
admin.f(); // Админ  (this == admin)

admin['f'](); // Админ (неважен способ доступа к методу - через точку или квадратные скобки)`}
        </code>
    </pre>
    <p>Правило простое: при вызове <code className="fs-6">obj.f()</code> значение <code className="fs-6">this</code> внутри <code className="fs-6">f</code> равно <code className="fs-6">obj</code>. Так что, в приведённом примере это <code className="fs-6">user</code> или <code className="fs-6">admin</code>.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Вызов без объекта: <code className="fs-6">this == undefined</code>.</p>
        <p>Мы даже можем вызвать функцию вовсе без использования объекта:</p>
        <pre>
            <code className="fs-6">
                {`function sayHi() {
    alert(this);
}

sayHi(); // undefined`}
            </code>
        </pre>
        <p>В строгом режиме (<code className="fs-6">&quot;use strict&quot;</code>) в таком коде значением <code className="fs-6">this</code> будет являться <code className="fs-6">undefined</code>. Если мы попытаемся получить доступ к <code className="fs-6">name</code>, используя <code className="fs-6">this.name</code> - это вызовет ошибку.</p>
        <p>В нестрогом режиме значением <code className="fs-6">this</code> в таком случае будет <em>глобальный объект</em> (<code className="fs-6">window</code> для браузера, мы вернёмся к этому позже в главе  <a href="info:global-object">Глобальный объект</a>). Это - исторически сложившееся поведение <code className="fs-6">this</code>, которое исправляется использованием строгого режима (<code className="fs-6">&quot;use strict&quot;</code>).</p>
        <p>Обычно подобный вызов является ошибкой программирования. Если внутри функции используется <code className="fs-6">this</code>, тогда ожидается, что она будет вызываться в контексте какого-либо объекта.</p>
    </div>
    
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Последствия свободного <code className="fs-6">this</code>.</p>
        <p>Если вы до этого изучали другие языки программирования, тогда вы, скорее всего, привыкли к идее &quot;фиксированного <code className="fs-6">this</code>&quot; - когда методы, определённые внутри объекта, всегда сохраняют в качестве значения <code className="fs-6">this</code> ссылку на свой объект (в котором был определён метод).</p>
        <p>В JavaScript <code className="fs-6">this</code> является &quot;свободным&quot;, его значение вычисляется в момент вызова метода и не зависит от того, где этот метод был объявлен, а зависит от того, какой объект вызывает метод (какой объект стоит &quot;перед точкой&quot;).</p>
        <p>Эта идея вычисления <code className="fs-6">this</code> в момент исполнения имеет как свои плюсы, так и минусы. С одной стороны, функция может быть повторно использована в качестве метода у различных объектов (что повышает гибкость). С другой стороны, большая гибкость увеличивает вероятность ошибок.</p>
    </div>

    <h2>Внутренняя реализация: Ссылочный тип</h2>

    <p>Некоторые хитрые способы вызова метода приводят к потере значения <code className="fs-6">this</code>, например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let user = {
    name: 'Джон',
    hi() { alert(this.name); },
    bye() { alert('Пока'); }
};

user.hi(); // Джон (простой вызов метода работает хорошо)

*!*
// теперь давайте попробуем вызывать user.hi или user.bye
// в зависимости от имени пользователя user.name
(user.name == 'Джон' ? user.hi : user.bye)(); // Ошибка!
*/!*`}
        </code>
    </pre>
    <p>В последней строчке кода используется условный оператор <code className="fs-6">?</code>, который определяет, какой будет вызван метод (<code className="fs-6">user.hi</code> или <code className="fs-6">user.bye</code>) в зависимости от выполнения условия. В данном случае будет выбран <code className="fs-6">user.hi</code>.</p>
    <p>Затем метод тут же вызывается с помощью скобок <code className="fs-6">()</code>. Но вызов не работает как положено!</p>
    <p>Вы можете видеть, что при вызове будет ошибка, потому что значением <code className="fs-6">&quot;this&quot;</code> внутри функции становится <code className="fs-6">undefined</code> (полагаем, что у нас строгий режим).</p>
    <p>Так работает (доступ к методу объекта через точку):</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            user.hi();
        </code>
    </pre>
    <p>Так уже не работает (вызываемый метод вычисляется):</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            (user.name == &quot;Джон&quot; ? user.hi : user.bye)(); // Ошибка!
        </code>
    </pre>
    <p>Почему? Если мы хотим понять, почему так происходит, давайте разберёмся (заглянем под капот), как работает вызов методов (<code className="fs-6">obj.method()</code>).</p>
    <p>Присмотревшись поближе, в выражении <code className="fs-6">obj.method()</code> можно заметить две операции:</p>
    <p>1. Сначала оператор точка <code className="fs-6">&#39;.&#39;</code> возвращает свойство объекта - его метод (<code className="fs-6">obj.method</code>).</p>
    <p>2. Затем скобки <code className="fs-6">()</code> вызывают этот метод (исполняется код метода).</p>
    <p>Итак, каким же образом информация о <code className="fs-6">this</code> передаётся из первой части во вторую?</p>
    <p>Если мы поместим эти операции в отдельные строки, то значение <code className="fs-6">this</code>, естественно, будет потеряно:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let user = {
    name: 'Джон',
    hi() { alert(this.name); }
};

*!*
// разделим получение метода объекта и его вызов в разных строках
let hi = user.hi;
hi(); // Ошибка, потому что значением this является undefined
*/!*`}
        </code>
    </pre>

    <p>Здесь <code className="fs-6">hi = user.hi</code> сохраняет функцию в переменной, и далее в последней строке она вызывается полностью сама по себе, без объекта, так что нет <code className="fs-6">this</code>.</p>
    <p>Для работы вызовов типа <code className="fs-6">user.hi()</code>, JavaScript использует трюк - точка <code className="fs-6">&#39;.&#39;</code> возвращает не саму функцию, а специальное значение &quot;ссылочного типа&quot;, называемого <a href="https://tc39.github.io/ecma262/#sec-reference-specification-type">Reference Type</a>.</p>
    <p>Этот ссылочный тип (Reference Type) является внутренним типом. Мы не можем явно использовать его, но он используется внутри языка.</p>
    <p>Значение ссылочного типа - это &quot;триплет&quot;: комбинация из трёх значений <code className="fs-6">(base, name, strict)</code>, где:</p>
    <p>- <code className="fs-6">base</code> - это объект.</p>
    <p>- <code className="fs-6">name</code> - это имя свойства объекта.</p>
    <p>- <code className="fs-6">strict</code> - это режим исполнения. Является true, если действует строгий режим (<code className="fs-6">use strict</code>).</p>
    <p>Результатом доступа к свойству <code className="fs-6">user.hi</code> является не функция, а значение ссылочного типа. Для <code className="fs-6">user.hi</code> в строгом режиме оно будет таким:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            // значение ссылочного типа (Reference Type) <br />
            (user, &quot;hi&quot;, true)
        </code>
    </pre>

    <p> Когда скобки <code className="fs-6">()</code> применяются к значению ссылочного типа (происходит вызов), то они получают полную информацию об объекте и его методе, и могут поставить правильный <code className="fs-6">this</code> (<code className="fs-6">=user</code> в данном случае, по <code className="fs-6">base</code>).</p>
    <p>Ссылочный тип - исключительно внутренний, промежуточный, используемый, чтобы передать информацию от точки <code className="fs-6">.</code> до вызывающих скобок <code className="fs-6">()</code>.</p>
    <p>При любой другой операции, например, присваивании <code className="fs-6">hi = user.hi</code>, ссылочный тип заменяется на собственно значение <code className="fs-6">user.hi</code> (функцию), и дальше работа уже идёт только с ней. Поэтому дальнейший вызов происходит уже без <code className="fs-6">this</code>.</p>
    <p>Таким образом, значение <code className="fs-6">this</code> передаётся правильно, только если функция вызывается напрямую с использованием синтаксиса точки <code className="fs-6">obj.method()</code> или квадратных скобок <code className="fs-6">obj[&#39;method&#39;]()</code> (они делают то же самое). Позднее в этом учебнике мы изучим различные варианты решения проблемы потери значения <code className="fs-6">this</code>.</p>

    <h2>У стрелочных функций нет &quot;this&quot;</h2>

    <p>Стрелочные функции особенные: у них нет своего &quot;собственного&quot; <code className="fs-6">this</code>. Если мы используем <code className="fs-6">this</code> внутри стрелочной функции, то его значение берётся из внешней &quot;нормальной&quot; функции.</p>
    <p>Например, здесь <code className="fs-6">arrow()</code> использует значение <code className="fs-6">this</code> из внешнего метода <code className="fs-6">user.sayHi()</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let user = {
    firstName: 'Илья',
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user.sayHi(); // Илья`}
        </code>
    </pre> 
    <p>Это является особенностью стрелочных функций. Они полезны, когда мы на самом деле не хотим иметь отдельное значение <code className="fs-6">this</code>, а хотим брать его из внешнего контекста.</p>
    
    <h2>Итого</h2>

    <p>- Функции, которые находятся в объекте в качестве его свойств, называются &quot;методами&quot;.</p>
    <p>- Методы позволяют объектам &quot;действовать&quot;: <code className="fs-6">object.doSomething()</code>.</p>
    <p>- Методы могут ссылаться на объект через <code className="fs-6">this</code>.</p>
    <p>Значение <code className="fs-6">this</code> определяется во время исполнения кода.</p>
    <p>- При объявлении любой функции в ней можно использовать <code className="fs-6">this</code>, но этот <code className="fs-6">this</code> не имеет значения до тех пор, пока функция не будет вызвана.</p>
    <p>- Эта функция может быть скопирована между объектами (из одного объекта в другой).</p>
    <p>- Когда функция вызывается синтаксисом &quot;метода&quot; - <code className="fs-6">object.method()</code>, значением <code className="fs-6">this</code> во время вызова является объект перед точкой.</p>
    <p>Также ещё раз заметим, что стрелочные функции являются особенными - у них нет <code className="fs-6">this</code>. Когда внутри стрелочной функции обращаются к <code className="fs-6">this</code>, то его значение берётся снаружи.</p>

    </>
    );
}

export default ObjectMethods;