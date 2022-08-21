import * as React from 'react';
import variableContentRefImg from './Objects-img/variable-contains-reference.svg';
import variableCopyRefImg from './Objects-img/variable-copy-reference.svg';
import variableCopyValueImg from './Objects-img/variable-copy-value.svg';

const ObjectsCopy: React.FC =() => {
    return (
    <>
    
    <h1>Копирование объектов и ссылки</h1>
    <p>Одним из фундаментальных отличий объектов от примитивных типов данных является то, что они хранятся и копируются &quot;по ссылке&quot;.</p>
    <p>Примитивные типы: строки, числа, логические значения - присваиваются и копируются &quot;по значению&quot;.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let message = &quot;Привет!&quot;; <br />
            let phrase = message;
        </code>
    </pre>
    <p>В результате мы имеем две независимые переменные, каждая из которых хранит строку <code className="fs-6">&quot;Привет!&quot;</code>.</p>
    <img className="mx-auto d-block" src={variableCopyValueImg} alt="copy value"></img>
    <p>Объекты ведут себя иначе.</p>
    <p><strong>Переменная хранит не сам объект, а его &quot;адрес в памяти&quot;, другими словами &quot;ссылку&quot; на него.</strong></p>
    <p>Проиллюстрируем это:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = {
    name: 'Иван'
};`}
        </code>
    </pre>
    <img className="mx-auto d-block" src={variableContentRefImg} alt="reference"></img>
    <p>Сам объект хранится где-то в памяти. А в переменной <code className="fs-6">user</code> лежит &quot;ссылка&quot; на эту область памяти.</p>
    <p><strong>Когда переменная объекта копируется - копируется ссылка, сам же объект не дублируется.</strong></p>
    <p>Если мы представляем объект как ящик, то переменная – это ключ к нему. Копирование переменной дублирует ключ, но не сам ящик.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = { name: &quot;Иван&quot; };

let admin = user; // копируется ссылка`}
        </code>
    </pre>
    <p>Теперь у нас есть две переменные, каждая из которых содержит ссылку на один и тот же объект:</p>
    <img className="mx-auto d-block" src={variableCopyRefImg} alt="copy reference"></img>
    <p>Мы можем использовать любую из переменных для доступа к ящику и изменения его содержимого:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = { name: 'Иван' };

let admin = user;

*!*
admin.name = 'Петя'; // изменено по ссылке из переменной 'admin'
*/!*

alert(*!*user.name*/!*); // 'Петя', изменения видны по ссылке из переменной 'user'`}
        </code>
    </pre>
    <p>Приведённый выше пример демонстрирует, что объект только один. Как если бы у нас был один ящик с двумя ключами и мы использовали один из них (<code className="fs-6">admin</code>), чтобы войти в него и что-то изменить, а затем, открыв ящик другим ключом (<code className="fs-6">user</code>), мы бы увидели эти изменения.</p>
    <h2>Сравнение по ссылке</h2>
    <p>Операторы равенства <code className="fs-6">==</code> и строгого равенства <code className="fs-6">===</code> для объектов работают одинаково.</p>
    <p><strong>Два объекта равны только в том случае, если это один и тот же объект.</strong></p>
    <p>В примере ниже две переменные ссылаются на один и тот же объект, поэтому они равны друг другу:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let a = {};
let b = a; // копирование по ссылке

alert( a == b ); // true, т.к. обе переменные ссылаются на один и тот же объект
alert( a === b ); // true`}
        </code>
    </pre>
    <p>В другом примере два разных объекта не равны, хотя оба пусты:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let a = {};
let b = {}; // два независимых объекта

alert( a == b ); // false`}
        </code>
    </pre>
    <p>Для сравнений типа <code className="fs-6">obj1 &gt; obj2</code> или для сравнения с примитивом <code className="fs-6">obj == 5</code> объекты преобразуются в примитивы. Мы скоро изучим, как работают такие преобразования объектов, но, по правде говоря, сравнения такого рода необходимы очень редко и обычно являются результатом ошибки программиста.</p>
    <h2>Клонирование и объединение объектов, Object.assign</h2>
    <p>Таким образом, при копировании переменной с объектом создаётся ещё одна ссылка на тот же самый объект.</p>
    <p>Но что, если нам всё же нужно дублировать объект? Создать независимую копию, клон?</p>
    <p>Это выполнимо, но немного сложно, так как в JavaScript нет встроенного метода для этого. На самом деле, такая нужда возникает редко. В большинстве случаев нам достаточно копирования по ссылке.</p>
    <p>Но если мы действительно этого хотим, то нам нужно создавать новый объект и повторять структуру дублируемого объекта, перебирая его свойства и копируя их.</p>
    <p>Например так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = {
    name: 'Иван',
    age: 30
};

*!*
let clone = {}; // новый пустой объект

// скопируем все свойства user в него
for (let key in user) {
    clone[key] = user[key];
}
*/!*

// теперь в переменной clone находится абсолютно независимый клон объекта
clone.name = 'Пётр'; // изменим в нём данные

alert( user.name ); // в оригинальном объекте значение свойства {'name'} осталось прежним – Иван.`}
        </code>
    </pre>
    <p>Кроме того, для этих целей мы можем использовать метод <a href="mdn:js/Object/assign">Object.assign</a>.</p>
    <p>Синтаксис:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            Object.assign(dest, [src1, src2, src3...])
        </code>
    </pre>
    <ul>
        <li>Первый аргумент <code className="fs-6">dest</code> — целевой объект.</li>
        <li>Остальные аргументы <code className="fs-6">src1, ..., srcN</code> (может быть столько, сколько нужно) являются исходными объектами</li>
        <li>Метод копирует свойства всех исходных объектов <code className="fs-6">src1, ..., srcN</code> в целевой объект <code className="fs-6">dest</code>.  То есть, свойства всех перечисленных объектов, начиная со второго, копируются в первый объект.</li>
        <li>Возвращает объект <code className="fs-6">dest</code>.</li>
    </ul>
    <p>Например, объединим несколько объектов в один:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = { name: 'Иван' };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

*!*
// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);
*/!*

// теперь user = { name: 'Иван', canView: true, canEdit: true }`}
        </code>
    </pre>
    <p>Если принимающий объект (<code className="fs-6">user</code>) уже имеет свойство с таким именем, оно будет перезаписано:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = { name: 'Иван' };

Object.assign(user, { name: 'Пётр' });

alert(user.name); // теперь user = { name: 'Пётр' }`}
        </code>
    </pre>
    <p>Мы также можем использовать <code className="fs-6">Object.assign</code> для замены <code className="fs-6">for..in</code> на простое клонирование:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = {
    name: 'Иван',
    age: 30
};

*!*
let clone = Object.assign({}, user);
*/!*`}
        </code>
    </pre>
    <p>Этот метод скопирует все свойства объекта <code className="fs-6">user</code> в пустой объект и возвратит его.</p>
    <h2>Вложенное клонирование</h2>
    <p>До сих пор мы предполагали, что все свойства объекта <code className="fs-6">user</code> хранят примитивные значения. Но свойства могут быть ссылками на другие объекты. Что с ними делать?</p>
    <p>Например, есть объект:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = {
    name: 'Иван',
    sizes: {
        height: 182,
        width: 50
    }
};

alert( user.sizes.height ); // 182`}
        </code>
    </pre>
    <p>Теперь при клонировании недостаточно просто скопировать <code className="fs-6">clone.sizes = user.sizes</code>, поскольку <code className="fs-6">user.sizes</code> - это объект, он будет скопирован по ссылке. А значит объекты <code className="fs-6">clone</code> и <code className="fs-6">user</code> в своих свойствах <code className="fs-6">sizes</code> будут ссылаться на один и тот же объект:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = {
    name: 'Иван',
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, один и тот же объект

// user и clone обращаются к одному sizes
user.sizes.width++;       // меняем свойство в одном объекте
alert(clone.sizes.width); // 51, видим результат в другом объекте`}
        </code>
    </pre>
    <p>Чтобы исправить это, мы должны в цикле клонирования делать проверку, не является ли значение <code className="fs-6">user[key]</code> объектом, и если это так - скопировать и его структуру тоже. Это называется &quot;глубокое клонирование&quot;.</p>
    <p>Мы можем реализовать глубокое клонирование, используя рекурсию. Или, чтобы не изобретать велосипед, использовать готовую реализацию — метод <a href="https://lodash.com/docs#cloneDeep">_.cloneDeep(obj)</a> из JavaScript-библиотеки <a href="https://lodash.com">lodash</a>.</p>
    <h2>Итого</h2>
    <p>Объекты присваиваются и копируются по ссылке. Другими словами, переменная хранит не &quot;значение объекта&quot;, а &quot;ссылку&quot; (адрес в памяти) на это значение. Поэтому копирование такой переменной или передача её в качестве аргумента функции приводит к копированию этой ссылки, а не самого объекта.</p>
    <p>Все операции с использованием скопированных ссылок (например, добавление или удаление свойств) выполняются с одним и тем же объектом.</p>
    <p>Для &quot;простого клонирования&quot; объекта можно использовать <code className="fs-6">Object.assign</code>. Необходимо помнить, что <code className="fs-6">Object.assign</code> не делает глубокое клонирование объекта. Если внутри копируемого объекта есть свойство, значение которого не является примитивом, оно будет передано по ссылке. Для создания &quot;настоящей копии&quot; (полного клона объекта) можно воспользоваться методом из сторонней JavaScript-библиотеки <a href="https://lodash.com/docs#cloneDeep">_.cloneDeep(obj)</a>.</p>

    </>
    );
}

export default ObjectsCopy;