import * as React from 'react';

const ExportImport: React.FC =() => {
    return (
    <>

    <h1>Экспорт и импорт</h1>
    <p>Директивы экспорт и импорт имеют несколько вариантов вызова.</p>
    <p>В предыдущей главе мы видели простое использование, давайте теперь посмотрим больше примеров.</p>
    <h2>Экспорт до объявления</h2>
    <p>Мы можем пометить любое объявление как экспортируемое, разместив <code className="fs-6">export</code> перед ним, будь то переменная, функция или класс.</p>
    <p>Например, все следующие экспорты допустимы:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// экспорт массива
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// экспорт константы
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// экспорт класса
export class User {
    constructor(name) {
        this.name = name;
    }
}`}
        </code>
    </pre>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Не ставится точка с запятой после экспорта класса/функции</strong></p>
        <p>Обратите внимание, что <code className="fs-6">export</code> перед классом или функцией не делает их функциональным выражением. Это всё также объявление функции, хотя и экспортируемое.</p>
        <p>Большинство руководств по стилю кода в JavaScript не рекомендуют ставить точку с запятой после объявлений функций или классов.</p>
        <p>Поэтому в конце <code className="fs-6">export class</code> и <code className="fs-6"></code> не нужна точка с запятой:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
            {`export function sayHi(user) {
    alert(\`Hello, \${user}!\`);
}  // без ; в конце`}
            </code>
        </pre>
    </div>
    <h2>Экспорт отдельно от объявления</h2>
    <p>Также можно написать <code className="fs-6">export</code> отдельно.</p>
    <p>Здесь мы сначала объявляем, а затем экспортируем:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// 📁 say.js
function sayHi(user) {
    alert(\`Hello, \${user}!\`);
}

function sayBye(user) {
    alert(\`Bye, \${user}!\`);
}

export {sayHi, sayBye}; // список экспортируемых переменных`}
        </code>
    </pre>
    <p>…Или, технически, мы также можем расположить <code className="fs-6">export</code> выше функций.</p>
    <h2>Импорт *</h2>
    <p>Обычно мы располагаем список того, что хотим импортировать, в фигурных скобках import <code className="fs-6">{`{...}`}</code>, например вот так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!`}
        </code>
    </pre>
    <p>Но если импортировать нужно много чего, мы можем импортировать всё сразу в виде объекта, используя <code className="fs-6">{`import * as <obj>`}</code>. Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// 📁 main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');`}
        </code>
    </pre>
    <p>На первый взгляд «импортировать всё» выглядит очень удобно, не надо писать лишнего, зачем нам вообще может понадобиться явно перечислять список того, что нужно импортировать?</p>
    <p>Для этого есть несколько причин.</p>
    <ol>
        <li>
            <p>Современные инструменты сборки (webpack и другие) собирают модули вместе и оптимизируют их, ускоряя загрузку и удаляя неиспользуемый код.</p>
            <p>Предположим, мы добавили в наш проект стороннюю библиотеку <code className="fs-6">say.js</code> с множеством функций:</p>
            <pre className="text-bg-dark px-3 py-3">
                <code className="fs-6">
                {`// 📁 say.js
export function sayHi() { ... }
export function sayBye() { ... }
export function becomeSilent() { ... }`}
                </code>
            </pre>
            <p>Теперь, если из этой библиотеки в проекте мы используем только одну функцию:</p>
            <pre className="text-bg-dark px-3 py-3">
                <code className="fs-6">
                {`// 📁 main.js
import {sayHi} from './say.js';`}
                </code>
            </pre>
            <p>…Тогда оптимизатор увидит, что другие функции не используются, и удалит остальные из собранного кода, тем самым делая код меньше. Это называется «tree-shaking».</p>
        </li>
        <li>
            <p>Явно перечисляя то, что хотим импортировать, мы получаем более короткие имена функций: <code className="fs-6">sayHi()</code> вместо <code className="fs-6">say.sayHi()</code>.</p>
        </li>
        <li>
            <p>Явное перечисление импортов делает код более понятным, позволяет увидеть, что именно и где используется. Это упрощает поддержку и рефакторинг кода.</p>
        </li>
    </ol>
    <h2>Импорт «как»</h2>
    <p>Мы также можем использовать <code className="fs-6">as</code>, чтобы импортировать под другими именами.</p>
    <p>Например, для краткости импортируем <code className="fs-6">sayHi</code> в локальную переменную <code className="fs-6">hi</code>, а <code className="fs-6">sayBye</code> импортируем как <code className="fs-6">bye</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// 📁 main.js
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!`}
        </code>
    </pre>
    <h2>Экспортировать «как»</h2>
    <p>Аналогичный синтаксис существует и для <code className="fs-6">export</code>.</p>
    <p>Давайте экспортируем функции, как <code className="fs-6">hi</code> и <code className="fs-6">bye</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// 📁 say.js
...
export {sayHi as hi, sayBye as bye};`}
        </code>
    </pre>
    <p>Теперь <code className="fs-6">hi</code> и <code className="fs-6">bye</code> – официальные имена для внешнего кода, их нужно использовать при импорте:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// 📁 main.js
import * as say from './say.js';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!`}
        </code>
    </pre>
    <h2>Экспорт по умолчанию</h2>
    <p>На практике модули встречаются в основном одного из двух типов:</p>
    <ol>
        <li>
            <p>Модуль, содержащий библиотеку или набор функций, как <code className="fs-6">say.js</code> выше.</p>
        </li>
        <li>
            <p>Модуль, который объявляет что-то одно, например модуль <code className="fs-6">user.js</code> экспортирует только <code className="fs-6">class User</code>.</p>
        </li>
    </ol>
    <p>По большей части, удобнее второй подход, когда каждая «вещь» находится в своём собственном модуле.</p>
    <p>Естественно, требуется много файлов, если для всего делать отдельный модуль, но это не проблема. Так даже удобнее: навигация по проекту становится проще, особенно, если у файлов хорошие имена, и они структурированы по папкам.</p>
    <p>Модули предоставляют специальный синтаксис <code className="fs-6">export default</code> («экспорт по умолчанию») для второго подхода.</p>
    <p>Ставим <code className="fs-6">export default</code> перед тем, что нужно экспортировать:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// 📁 user.js
export default class User { // просто добавьте "default"
    constructor(name) {
        this.name = name;
    }
}`}
        </code>
    </pre>
    <p>Заметим, в файле может быть не более одного <code className="fs-6">export default</code>.</p>
    <p>…И потом импортируем без фигурных скобок:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// 📁 main.js
import User from './user.js'; // не {User}, просто User

new User('John');`}
        </code>
    </pre>
    <p>Импорты без фигурных скобок выглядят красивее. Обычная ошибка начинающих: забывать про фигурные скобки. Запомним: фигурные скобки необходимы в случае именованных экспортов, для <code className="fs-6">export default</code> они не нужны.</p>
    <p>Технически в одном модуле может быть как экспорт по умолчанию, так и именованные экспорты, но на практике обычно их не смешивают. То есть, в модуле находятся либо именованные экспорты, либо один экспорт по умолчанию.</p>
    <p>Так как в файле может быть максимум один <code className="fs-6">export default</code>, то экспортируемая сущность не обязана иметь имя.</p>
    <p>Например, всё это – полностью корректные экспорты по умолчанию:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`export default class { // у класса нет имени
    constructor() { ... }
}`}
        </code>
    </pre>
    <br />
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`export default function(user) { // у функции нет имени
    alert(\`Hello, \${user}!\`);
}`}
        </code>
    </pre>
    <br />
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// экспортируем значение, не создавая переменную
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];`}
        </code>
    </pre>
    <p>Это нормально, потому что может быть только один <code className="fs-6">export default</code> на файл, так что <code className="fs-6">import</code> без фигурных скобок всегда знает, что импортировать.</p>
    <p>Без <code className="fs-6">default</code> такой экспорт выдал бы ошибку:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`export class { // Ошибка! (необходимо имя, если это не экспорт по умолчанию)
    constructor() {}
}`}
        </code>
    </pre>
    <h3>Имя «default»</h3>
    <p>В некоторых ситуациях для обозначения экспорта по умолчанию в качестве имени используется <code className="fs-6">default</code>.</p>
    <p>Например, чтобы экспортировать функцию отдельно от её объявления:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`function sayHi(user) {
    alert(\`Hello, \${user}!\`);
}

// то же самое, как если бы мы добавили "export default" перед функцией
export {sayHi as default};`}
        </code>
    </pre>
    <p>Или, ещё ситуация, давайте представим следующее: модуль <code className="fs-6">user.js</code> экспортирует одну сущность «по умолчанию» и несколько именованных (редкий, но возможный случай):</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// 📁 user.js
export default class User {
    constructor(name) {
        this.name = name;
    }
}

export function sayHi(user) {
    alert(\`Hello, \${user}!\`);
}`}
        </code>
    </pre>
    <p>Вот как импортировать экспорт по умолчанию вместе с именованным экспортом:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// 📁 main.js
import {default as User, sayHi} from './user.js';

new User('John');`}
        </code>
    </pre>
    <p>И, наконец, если мы импортируем всё как объект <code className="fs-6">import *</code>, тогда его свойство <code className="fs-6">default</code> – как раз и будет экспортом по умолчанию:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// 📁 main.js
import * as user from './user.js';

let User = user.default; // экспорт по умолчанию
new User('John');`}
        </code>
    </pre>
    <h3>Довод против экспортов по умолчанию</h3>
    <p>Именованные экспорты «включают в себя» своё имя. Эта информация является частью модуля, говорит нам, что именно экспортируется.</p>
    <p>Именованные экспорты вынуждают нас использовать правильное имя при импорте:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`import {User} from './user.js';
// import {MyUser} не сработает, должно быть именно имя {User}`}
        </code>
    </pre>
    <p>…В то время как для экспорта по умолчанию мы выбираем любое имя при импорте:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`import User from './user.js'; // сработает
import MyUser from './user.js'; // тоже сработает
// можно импортировать с любым именем, и это будет работать`}
        </code>
    </pre>
    <p>Так что члены команды могут использовать разные имена для импорта одной и той же вещи, и это не очень хорошо.</p>
    <p>Обычно, чтобы избежать этого и соблюсти единообразие кода, есть правило: имена импортируемых переменных должны соответствовать именам файлов. Вот так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`import User from './user.js';
import LoginForm from './loginForm.js';
import func from '/path/to/func.js';
...`}
        </code>
    </pre>
    <p>Тем не менее, в некоторых командах это считают серьёзным доводом против экспортов по умолчанию и предпочитают использовать именованные экспорты везде. Даже если экспортируется только одна вещь, она всё равно экспортируется с именем, без использования <code className="fs-6">default</code>.</p>
    <p>Это также немного упрощает реэкспорт (смотрите ниже).</p>
    <h2>Реэкспорт</h2>
    <p>Синтаксис «реэкспорта» <code className="fs-6">export ... from ...</code> позволяет импортировать что-то и тут же экспортировать, возможно под другим именем, вот так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`export {sayHi} from './say.js'; // реэкспортировать sayHi

export {default as User} from './user.js'; // реэкспортировать default`}
        </code>
    </pre>
    <p>Зачем это нужно? Рассмотрим практический пример использования.</p>
    <p>Представим, что мы пишем «пакет»: папку со множеством модулей, из которой часть функциональности экспортируется наружу (инструменты вроде NPM позволяют нам публиковать и распространять такие пакеты), а многие модули – просто вспомогательные, для внутреннего использования в других модулях пакета.</p>
    <p>Структура файлов может быть такой:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`auth/
    index.js
    user.js
    helpers.js
    tests/
        login.js
    providers/
        github.js
        facebook.js
        ...`}
        </code>
    </pre>
    <p>Мы бы хотели сделать функциональность нашего пакета доступной через единую точку входа: «главный файл» <code className="fs-6">auth/index.js</code>. Чтобы можно было использовать её следующим образом:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`import {login, logout} from 'auth/index.js'`}
        </code>
    </pre>
    <p>Идея в том, что внешние разработчики, которые будут использовать наш пакет, не должны разбираться с его внутренней структурой, рыться в файлах внутри нашего пакета. Всё, что нужно, мы экспортируем в <code className="fs-6">auth/index.js</code>, а остальное скрываем от любопытных взглядов.</p>
    <p>Так как нужная функциональность может быть разбросана по модулям нашего пакета, мы можем импортировать их в <code className="fs-6">auth/index.js</code> и тут же экспортировать наружу.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// 📁 auth/index.js

// импортировать login/logout и тут же экспортировать
import {login, logout} from './helpers.js';
export {login, logout};

// импортировать экспорт по умолчанию как User и тут же экспортировать
import User from './user.js';
export {User};
...`}
        </code>
    </pre>
    <p>Теперь пользователи нашего пакета могут писать <code className="fs-6">{`import {login} from "auth/index.js"`}</code>.</p>
    <p>Запись <code className="fs-6">export ... from ...</code> – это просто более короткий вариант такого импорта-экспорта:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// 📁 auth/index.js

// импортировать login/logout и тут же экспортировать
export {login, logout} from './helpers.js';

// импортировать экспорт по умолчанию как User и тут же экспортировать
export {default as User} from './user.js';
...`}
        </code>
    </pre>
    <h3>Реэкспорт экспорта по умолчанию</h3>
    <p>При реэкспорте экспорт по умолчанию нужно обрабатывать особым образом.</p>
    <p>Например, у нас есть <code className="fs-6">user.js</code>, из которого мы хотим реэкспортировать класс <code className="fs-6">User</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// 📁 user.js
export default class User {
  // ...
}`}
        </code>
    </pre>
    <ol>
        <li>
            <p><code className="fs-6">export User from './user.js'</code> не будет работать. Казалось бы, что такого? Но возникнет синтаксическая ошибка!</p>
            <p>Чтобы реэкспортировать экспорт по умолчанию, мы должны написать <code className="fs-6">{`export {default as User}`}</code>, как в примере выше. Такая вот особенность синтаксиса.</p>
        </li>
        <li>
            <p><code className="fs-6">export * from './user.js'</code> реэкспортирует только именованные экспорты, исключая экспорт по умолчанию.</p>
            <p>Если мы хотим реэкспортировать и именованные экспорты и экспорт по умолчанию, то понадобятся две инструкции:</p>
            <pre className="text-bg-dark px-3 py-3">
                <code className="fs-6">
                {`export * from './user.js'; // для реэкспорта именованных экспортов
export {default} from './user.js'; // для реэкспорта по умолчанию`}
                </code>
            </pre>
        </li>
    </ol>
    <p>Такое особое поведение реэкспорта с экспортом по умолчанию – одна из причин того, почему некоторые разработчики их не любят.</p>
    <h2>Итого</h2>
    <p>Вот все варианты <code className="fs-6">export</code>, которые мы разобрали в этой и предыдущей главах.</p>
    <p>Вы можете проверить себя, читая их и вспоминая, что они означают:</p>
    <ul>
        <li>
            <p>Перед объявлением класса/функции/…:</p>
            <ul>
                <li>
                    <p><code className="fs-6">export [default] class/function/variable ...</code></p>
                </li>
            </ul>
        </li>
        <li>
            <p>Отдельный экспорт:</p>
            <ul>
                <li>
                    <p><code className="fs-6">{`export {x [as y], ...}`}</code>.</p>
                </li>
            </ul>
        </li>
        <li>
            <p>Реэкспорт:</p>
            <ul>
                <li>
                    <p><code className="fs-6">{`export {x [as y], ...} from "module"`}</code></p>
                </li>
            </ul>
            <ul>
                <li>
                    <p><code className="fs-6">export * from "module"</code> (не реэкспортирует <code className="fs-6">export default</code>).</p>
                </li>
            </ul>
            <ul>
                <li>
                    <p><code className="fs-6">{`export {default [as y]} from "module"`}</code> (реэкспортирует только <code className="fs-6">export default</code>).</p>
                </li>
            </ul>
        </li>
    </ul>
    <p>Импорт:</p>
    <ul>
        <li>
            <p>Именованные экспорты из модуля:</p>
            <ul>
                <li>
                    <p><code className="fs-6">{`import {x [as y], ...} from "module"`}</code></p>
                </li>
            </ul>
        </li>
        <li>
            <p>Импорт по умолчанию:</p>
            <ul>
                <li>
                    <p><code className="fs-6">import x from "module"</code></p>
                </li>
                <li>
                    <p><code className="fs-6">{`import {default as x} from "module"`}</code></p>
                </li>
            </ul>
        </li>
        <li>
            <p>Всё сразу:</p>
            <ul>
                <li>
                    <p><code className="fs-6">import * as obj from "module"</code></p>
                </li>
            </ul>
        </li>
        <li>
            <p>Только подключить модуль (его код запустится), но не присваивать его переменной:</p>
            <ul>
                <li>
                    <p><code className="fs-6">import "module"</code></p>
                </li>
            </ul>
        </li>
    </ul>
    <p>Мы можем поставить <code className="fs-6">import/export</code> в начало или в конец скрипта, это не имеет значения.</p>
    <p>То есть, технически, такая запись вполне корректна:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`sayHi();

// ...

import {sayHi} from './say.js'; // импорт в конце файла`}
        </code>
    </pre>
    <p>На практике импорты, чаще всего, располагаются в начале файла. Но это только для большего удобства.</p>
    <p><strong>Обратите внимание, что инструкции import/export не работают внутри <code className="fs-6">{`{...}`}</code>.</strong></p>
    <p>Условный импорт, такой как ниже, работать не будет:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`if (something) {
    import {sayHi} from "./say.js"; // Ошибка: импорт должен быть на верхнем уровне
}`}
        </code>
    </pre>

    </>
    );
}

export default ExportImport;