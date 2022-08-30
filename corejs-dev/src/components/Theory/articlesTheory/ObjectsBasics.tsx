import * as React from 'react';
import objectImg from './Objects-img/object.svg';
import objectUserImg from './Objects-img/object-user.svg';
import objectUserDeleteImg from './Objects-img/object-user-delete.svg';
import objectUserEmptyImg from './Objects-img/object-user-empty.svg';
import objectUserIsAdminImg from './Objects-img/object-user-isadmin.svg';
import objectUserPropsImg from './Objects-img/object-user-props.svg';

const ObjectsBasics: React.FC =() => {
    return (
    <>

    <h1>Объекты</h1>
    <p>В JavaScript существует 8 типов данных. Семь из них называются &quot;примитивными&quot;, так как содержат только одно значение (будь то строка, число или что-то другое).</p>
    <p>Объекты же используются для хранения коллекций различных значений и более сложных сущностей. В JavaScript объекты используются очень часто, это одна из основ языка. Поэтому мы должны понять их, прежде чем углубляться куда-либо ещё.</p>
    <p>Объект может быть создан с помощью фигурных скобок <code className="fs-6">{`{…}`}</code> с необязательным списком <em>свойств</em>. Свойство - это пара &quot;ключ: значение&quot;, где <code className="fs-6">ключ</code> - это строка (также называемая &quot;именем свойства&quot;), а <code className="fs-6">значение</code> может быть чем угодно.</p>
    <p>Мы можем представить объект в виде ящика с подписанными папками. Каждый элемент данных хранится в своей папке, на которой написан ключ. По ключу папку легко найти, удалить или добавить в неё что-либо.</p>
    <img className="mx-auto d-block" src={objectImg} alt="object"></img>
    <p>Пустой объект (&quot;пустой ящик&quot;) можно создать, используя один из двух вариантов синтаксиса:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let user = new Object(); // синтаксис &quot;конструктор объекта&quot; <br />
            let user = {`{}`};  // синтаксис &quot;литерал объекта&quot;
        </code>
    </pre>
    <img className="mx-auto d-block" src={objectUserEmptyImg} alt="empty"></img>
    <p>Обычно используют вариант с фигурными скобками <code className="fs-6">{`{...}`}</code>. Такое объявление называют <em>литералом объекта</em> или <em>литеральной нотацией</em>.</p>

    <h2>Литералы и свойства</h2>
    <p>При использовании литерального синтаксиса <code className="fs-6">{`{...}`}</code> мы сразу можем поместить в объект несколько свойств в виде пар &quot;ключ: значение&quot;:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = {       // объект`} <br />
            {`    name: 'John',  // под ключом 'name' хранится значение 'John'`} <br />
            {`    age: 30        // под ключом &quot;age&quot; хранится значение 30`} <br />
            {`};`}
        </code>
    </pre>
    <p>У каждого свойства есть ключ (также называемый &quot;имя&quot; или &quot;идентификатор&quot;). После имени свойства следует двоеточие <code className="fs-6">&quot;:&quot;</code>, и затем указывается значение свойства. Если в объекте несколько свойств, то они перечисляются через запятую.</p>
    <p>В объекте <code className="fs-6">user</code> сейчас находятся два свойства:</p>
    <ol>
        <li>Первое свойство с именем <code className="fs-6">&quot;name&quot;</code> и значением <code className="fs-6">&quot;John&quot;</code>.</li>
        <li>Второе свойство с именем <code className="fs-6">&quot;age&quot;</code> и значением <code className="fs-6">30</code>.</li>
    </ol>
    <p>Можно сказать, что наш объект <code className="fs-6">user</code> - это ящик с двумя папками, подписанными &quot;name&quot; и &quot;age&quot;.</p>
    <img className="mx-auto d-block" src={objectUserImg} alt="user"></img>
    <p>Мы можем в любой момент добавить в него новые папки, удалить папки или прочитать содержимое любой папки.</p>
    <p>Для обращения к свойствам используется запись &quot;через точку&quot;:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            // получаем свойства объекта: <br />
            alert( user.name ); // John <br />
            alert( user.age ); // 30
        </code>
    </pre>
    <p>Значение может быть любого типа. Давайте добавим свойство с логическим значением:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            user.isAdmin = true;
        </code>
    </pre>
    <img className="mx-auto d-block" src={objectUserIsAdminImg} alt="is admin"></img>
    <p>Для удаления свойства мы можем использовать оператор <code className="fs-6">delete</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            delete user.age;
        </code>
    </pre>
    <img className="mx-auto d-block" src={objectUserDeleteImg} alt="delete"></img>
    <p>Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = {`} <br />
            {`    name: 'John',`} <br />
            {`    age: 30,`} <br />
            {`    'likes birds': true  // имя свойства из нескольких слов должно быть в кавычках`} <br />
            {`};`}
        </code>
    </pre>
    <img className="mx-auto d-block" src={objectUserPropsImg} alt="properties"></img>
    <p>Последнее свойство объекта может заканчиваться запятой:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = {`} <br />
            {`    name: 'John',`} <br />
            {`    age: 30*!*,*/!*`} <br />
            {`}`}
        </code>
    </pre>
    <p>Это называется &quot;висячая запятая&quot;. Такой подход упрощает добавление, удаление и перемещение свойств, так как все строки объекта становятся одинаковыми.</p>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Объект, объявленный через <code className="fs-6">const</code>, <em>может</em> быть изменён.</p>
        <p>Например:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`const user = {`} <br />
                {`    name: 'John'`} <br />
                {`};`} <br />
                {``} <br />
                *!* <br />
                user.name = &quot;Pete&quot;; // (*) <br />
                */!* <br />
                {``} <br />
                alert(user.name); // Pete
            </code>
        </pre>
        <p>Может показаться, что строка <em>(*)</em> должна вызвать ошибку, но нет, здесь всё в порядке. Дело в том, что объявление <code className="fs-6">const</code> защищает от изменений только саму переменную <code className="fs-6">user</code>, а не её содержимое.</p>
        <p>Определение <code className="fs-6">const</code> выдаст ошибку только если мы присвоим переменной другое значение: <code className="fs-6">user=...</code>.</p>
    </div>
 
    <h2>Квадратные скобки</h2>
    <p>Для свойств, имена которых состоят из нескольких слов, доступ к значению &quot;через точку&quot; не работает:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            // это вызовет синтаксическую ошибку <br />
            user.likes birds = true
        </code>
    </pre>
    <p>JavaScript видит, что мы обращаемся к свойству <code className="fs-6">user.likes</code>, а затем идёт непонятное слово <code className="fs-6">birds</code>. В итоге синтаксическая ошибка.</p>
    <p>Точка требует, чтобы ключ был именован по правилам именования переменных. То есть не имел пробелов, не начинался с цифры и не содержал специальные символы, кроме <code className="fs-6">$</code> и <code className="fs-6">_</code>.</p>
    <p>Для таких случаев существует альтернативный способ доступа к свойствам через квадратные скобки. Такой способ сработает с любым именем свойства:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = {};`} <br />
            {``} <br />
            // присваивание значения свойству <br />
            user[&quot;likes birds&quot;] = true; <br />
            {``} <br />
            // получение значения свойства <br />
            alert(user[&quot;likes birds&quot;]); // true <br />
            {``} <br />
            // удаление свойства <br />
            delete user[&quot;likes birds&quot;];
        </code>
    </pre>
    <p>Сейчас всё в порядке. Обратите внимание, что строка в квадратных скобках заключена в кавычки (подойдёт любой тип кавычек).</p>
    <p>Квадратные скобки также позволяют обратиться к свойству, имя которого может быть результатом выражения. Например, имя свойства может храниться в переменной:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let key = &quot;likes birds&quot;; <br />
            {``} <br />
            // то же самое, что и user[&quot;likes birds&quot;] = true; <br />
            user[key] = true;
        </code>
    </pre>
    <p>Здесь переменная <code className="fs-6">key</code> может быть вычислена во время выполнения кода или зависеть от пользовательского ввода. После этого мы используем её для доступа к свойству. Это даёт нам большую гибкость.</p>
    <p>Пример:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = {`} <br />
            {`    name: 'John',`} <br />
            {`    age: 30`} <br />
            {`};`} <br />
            {``} <br />
            let key = prompt(&quot;Что вы хотите узнать о пользователе?&quot;, &quot;name&quot;); <br />
            {``} <br />
            // доступ к свойству через переменную <br />
            alert( user[key] ); // John (если ввели &quot;name&quot;)
        </code>
    </pre>
    <p>Запись &quot;через точку&quot; такого не позволяет:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = {`} <br />
            {`    name: 'John',`} <br />
            {`    age: 30`} <br />
            {`};`} <br />
            {``} <br />
            let key = &quot;name&quot;; <br />
            alert( user.key ); // undefined
        </code>
    </pre>
    <h3>Вычисляемые свойства</h3>
    <p>Мы можем использовать квадратные скобки в литеральной нотации для создания <em>вычисляемого свойства</em>.</p>
    <p>Пример:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let fruit = prompt(&quot;Какой фрукт купить?&quot;, &quot;apple&quot;); <br />
            {``} <br />
            {`let bag = {`} <br />
            {`    *!*`} <br />
            {`    [fruit]: 5, // имя свойства будет взято из переменной fruit`} <br />
            {`    */!*`} <br />
            {`};`} <br />
            {``} <br />
            alert( bag.apple ); // 5, если fruit=&quot;apple&quot;
        </code>
    </pre>
    <p>Смысл вычисляемого свойства прост: запись <code className="fs-6">[fruit]</code> означает, что имя свойства необходимо взять из переменной <code className="fs-6">fruit</code>.</p>
    <p>И если посетитель введёт слово <code className="fs-6">&quot;apple&quot;</code>, то в объекте <code className="fs-6">bag</code> теперь будет лежать свойство <code className="fs-6">{`{apple: 5}`}</code>.</p>
    <p>По сути, пример выше работает так же, как и следующий пример:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let fruit = prompt(&quot;Какой фрукт купить?&quot;, &quot;apple&quot;); <br />
            {`let bag = {};`} <br />
            {``} <br />
            // имя свойства будет взято из переменной fruit <br />
            bag[fruit] = 5;
        </code>
    </pre>
    <p>...Но первый пример выглядит лаконичнее.</p>
    <p>Мы можем использовать и более сложные выражения в квадратных скобках:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let fruit = 'apple'; <br />
            {`let bag = {`} <br />
            {`    [fruit + 'Computers']: 5 // bag.appleComputers = 5`} <br />
            {`};`}
        </code>
    </pre>
    <p>Квадратные скобки дают намного больше возможностей, чем запись через точку. Они позволяют использовать любые имена свойств и переменные, хотя и требуют более громоздких конструкций кода.</p>
    <p>Подведём итог: в большинстве случаев, когда имена свойств известны и просты, используется запись через точку. Если же нам нужно что-то более сложное, то мы используем квадратные скобки.</p>

    <h2>Свойство из переменной</h2>
    <p>В реальном коде часто нам необходимо использовать существующие переменные как значения для свойств с тем же именем.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function makeUser(name, age) {`} <br />
            {`    return {`} <br />
            {`        name: name,`} <br />
            {`        age: age`} <br />
            {`        // ...другие свойства`} <br />
            {`    };`} <br />
            {`}`} <br />
            {``} <br />
            let user = makeUser(&quot;John&quot;, 30); <br />
            alert(user.name); // John
        </code>
    </pre>
    <p>В примере выше название свойств <code className="fs-6">name</code> и <code className="fs-6">age</code> совпадают с названиями переменных, которые мы подставляем в качестве значений этих свойств. Такой подход настолько распространён, что существуют специальные <em>короткие свойства</em> для упрощения этой записи.</p>
    <p>Вместо <code className="fs-6">name:name</code> мы можем написать просто <code className="fs-6">name</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`function makeUser(name, age) {`} <br />
            {`    *!*`} <br />
            {`    return {`} <br />
            {`        name, // то же самое, что и name: name`} <br />
            {`        age   // то же самое, что и age: age`} <br />
            {`        // ...`} <br />
            {`    };`} <br />
            {`    */!*`} <br />
            {`}`}
        </code>
    </pre>
    <p>Мы можем использовать как обычные свойства, так и короткие в одном и том же объекте:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = {`}
            {`    name,  // тоже самое, что и name:name`}
            {`    age: 30`}
            {`};`}
        </code>
    </pre>
    <h2 id="ограничения-на-имена-свойств">Ограничения на имена свойств</h2>
    <p>Как мы уже знаем, имя переменной не может совпадать с зарезервированными словами, такими как &quot;for&quot;, &quot;let&quot;, &quot;return&quot; и т.д.</p>
    <p>Но для свойств объекта такого ограничения нет:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            // эти имена свойств допустимы
            {`let obj = {`}
            {`    for: 1,`}
            {`    let: 2,`}
            {`    return: 3`}
            {`}`}
            {``}
            alert( obj.for + obj.let + obj.return );  // 6
        </code>
    </pre>
    <p>Иными словами, нет никаких ограничений к именам свойств. Они могут быть в виде строк или символов (специальный тип для идентификаторов, который будет рассмотрен позже).</p>
    <p>Все другие типы данных будут автоматически преобразованы к строке.</p>
    <p>Например, если использовать число <code className="fs-6">0</code> в качестве ключа, то оно превратится в строку <code className="fs-6">&quot;0&quot;</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let obj = {`}
            {`0: 'Тест' // то же самое что и ';': ';'`}
            {`};`}
            {``}
            // обе функции alert выведут одно и то же свойство (число 0 преобразуется в строку &quot;0&quot;)
            alert( obj[&quot;0&quot;] ); // Тест
            alert( obj[0] ); // Тест (то же свойство)
        </code>
    </pre>
    <p>Есть небольшой подводный камень, связанный со специальным свойством <code className="fs-6">__proto__</code>. Мы не можем установить его в необъектное значение:</p>
    <pre className="text-bg-dark px-3 py-3"><code className="text-bg-dark px-3 py-3">let obj = {};
    obj.__proto__ = 5; // присвоим число
    alert(obj.__proto__); // [object Object], значение - это объект, т.е. не то, что мы ожидали
    </code></pre>
    <p>Как мы видим, присвоение примитивного значения <code className="fs-6">5</code> игнорируется.</p>
    <p>Мы более подробно исследуем особенности свойства <code className="fs-6">__proto__</code> в следующих главах <a href="info:prototype-inheritance"></a>, а также предложим <a href="info:prototype-methods">способы исправления</a> такого поведения.</p>
    <h2 id="проверка-существования-свойства-оператор-in">Проверка существования свойства, оператор &quot;in&quot;</h2>
    <p>В отличие от многих других языков, особенность JavaScript-объектов в том, что можно получить доступ к любому свойству. Даже если свойства не существует - ошибки не будет!</p>
    <p>При обращении к свойству, которого нет, возвращается <code className="fs-6">undefined</code>. Это позволяет просто проверить существование свойства:</p>
    <pre className="text-bg-dark px-3 py-3"><code className="text-bg-dark px-3 py-3">let user = {};

    alert( user.noSuchProperty === undefined ); // true означает &quot;свойства нет&quot;
    </code></pre>
    <p>Также существует специальный оператор <code className="fs-6">&quot;in&quot;</code> для проверки существования свойства в объекте.</p>
    <p>Синтаксис оператора:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            &quot;key&quot; in object
        </code>
    </pre>
    <p>Пример:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = { name: 'John', age: 30 };

alert( 'age' in user ); // true, user.age существует
alert( 'blabla' in user ); // false, user.blabla не существует`}
        </code>
    </pre>
    <p>Обратите внимание, что слева от оператора <code className="fs-6">in</code> должно быть <em>имя свойства</em>. Обычно это строка в кавычках.</p>
    <p>Если мы опускаем кавычки, это значит, что мы указываем переменную, в которой находится имя свойства. Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = { age: 30 };

let key = 'age';
alert( *!*key*/!* in user ); // true, имя свойства было взято из переменной key`}
        </code>
    </pre>
    <p>Для чего вообще нужен оператор <code className="fs-6">in</code>? Разве недостаточно сравнения с <code className="fs-6">undefined</code>?</p>
    <p>В большинстве случаев прекрасно сработает сравнение с <code className="fs-6">undefined</code>. Но есть особый случай, когда оно не подходит, и нужно использовать <code className="fs-6">&quot;in&quot;</code>.</p>
    <p>Это когда свойство существует, но содержит значение <code className="fs-6">undefined</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let obj = {
    test: undefined
};

alert( obj.test ); //  выведет undefined, значит свойство не существует?
alert( 'test' in obj ); // true, свойство существует!`}
        </code>
    </pre>
    <p>В примере выше свойство <code className="fs-6">obj.test</code> технически существует в объекте. Оператор <code className="fs-6">in</code> сработал правильно.</p>
    <p>Подобные ситуации случаются очень редко, так как <code className="fs-6">undefined</code> обычно явно не присваивается. Для &quot;неизвестных&quot; или &quot;пустых&quot; свойств мы используем значение <code className="fs-6">null</code>. Таким образом, оператор <code className="fs-6">in</code> является экзотическим гостем в коде.</p>
    <h2 id="цикл-forin">Цикл &quot;for..in&quot;</h2>
    <p>Для перебора всех свойств объекта используется цикл <code className="fs-6">for..in</code>. Этот цикл отличается от изученного ранее цикла <code className="fs-6">for(;;)</code>.</p>
    <p>Синтаксис:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`for (key in object) {
    // тело цикла выполняется для каждого свойства объекта
}`}
        </code>
    </pre>
    <p>К примеру, давайте выведем все свойства объекта <code className="fs-6">user</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = {
    name: 'John',
    age: 30,
    isAdmin: true
};
            
for (let key in user) {
// ключи
    alert( key );  // name, age, isAdmin
    // значения ключей
    alert( user[key] ); // John, 30, true
}`}
        </code>
    </pre>
    <p>Обратите внимание, что все конструкции &quot;for&quot; позволяют нам объявлять переменную внутри цикла, как, например, <code className="fs-6">let key</code> здесь.</p>
    <p>Кроме того, мы могли бы использовать другое имя переменной. Например, часто используется вариант <code className="fs-6">&quot;for (let prop in obj)&quot;</code>.</p>
    <h3>Упорядочение свойств объекта</h3>
    <p>Упорядочены ли свойства объекта? Другими словами, если мы будем в цикле перебирать все свойства объекта, получим ли мы их в том же порядке, в котором мы их добавляли? Можем ли мы на это рассчитывать?</p>
    <p>Короткий ответ: свойства упорядочены особым образом: свойства с целочисленными ключами сортируются по возрастанию, остальные располагаются в порядке создания. Разберёмся подробнее.</p>
    <p>В качестве примера рассмотрим объект с телефонными кодами:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let codes = {
    ';': 'Германия',
    41': 'Швейцария',
    '44': 'Великобритания',
    // ..,
    '1': 'США'
};

*!*
for (let code in codes) {
    alert(code); // 1, 41, 44, 49
}
*/!*`}
        </code>
    </pre>
    <p>Если мы делаем сайт для немецкой аудитории, то, вероятно, мы хотим, чтобы код <code className="fs-6">49</code> был первым.</p>
    <p>Но если мы запустим код, мы увидим совершенно другую картину:</p>
    <ul>
    <li>США (1) идёт первым</li>
    <li>затем Швейцария (41) и так далее.</li>
    </ul>
    <p>Телефонные коды идут в порядке возрастания, потому что они являются целыми числами: <code className="fs-6">1, 41, 44, 49</code>.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Термин &quot;целочисленное свойство&quot; означает строку, которая может быть преобразована в целое число и обратно без изменений.</p>
        <p>То есть, <code className="fs-6">&quot;49&quot;</code> - это целочисленное имя свойства, потому что если его преобразовать в целое число, а затем обратно в строку, то оно не изменится. А вот свойства <code className="fs-6">&quot;+49&quot;</code> или <code className="fs-6">&quot;1.2&quot;</code> таковыми не являются:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`// Math.trunc - встроенная функция, которая удаляет десятичную часть
alert( String(Math.trunc(Number('49'))) ); // '49', то же самое ⇒ свойство целочисленное
alert( String(Math.trunc(Number('+49'))) ); // '49', не то же самое, что '+49' ⇒ свойство не целочисленное
alert( String(Math.trunc(Number('1.2'))) ); // '1', не то же самое, что '1.2' ⇒ свойство не целочисленное`}
            </code>
        </pre>
    </div>
    
    <p>...С другой стороны, если ключи не целочисленные, то они перебираются в порядке создания, например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let user = {
    name: 'John',
    surname: 'Smith'
};
user.age = 25; // добавим ещё одно свойство

*!*
// не целочисленные свойства перечислены в порядке создания
*/!*
for (let prop in user) {
    alert( prop ); // name, surname, age
}`}
        </code>
    </pre>
    <p>Таким образом, чтобы решить нашу проблему с телефонными кодами, мы можем схитрить, сделав коды не целочисленными свойствами. Добавления знака <code className="fs-6">&quot;+&quot;</code> перед каждым кодом будет достаточно.</p>
    <p>Пример:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let codes = {
    '+49': 'Германия',
    '+41': 'Швейцария',
    '+44': 'Великобритания',
    // ..,
    '+1': 'США'
};

for (let code in codes) {
    alert( +code ); // 49, 41, 44, 1
}`}
        </code>
    </pre>
    <p>Теперь код работает так, как мы задумывали.</p>
    <h2>Итого</h2>
    <p>Объекты - это ассоциативные массивы с рядом дополнительных возможностей.</p>
    <p>Они хранят свойства (пары ключ-значение), где:</p>
    <ul>
        <li>Ключи свойств должны быть строками или символами (обычно строками).</li>
        <li>Значения могут быть любого типа.</li>
    </ul>
    <p>Чтобы получить доступ к свойству, мы можем использовать:</p>
    <ul>
        <li>Запись через точку: <code className="fs-6">obj.property</code>.</li>
        <li>Квадратные скобки <code className="fs-6">obj[&quot;property&quot;]</code>. Квадратные скобки позволяют взять ключ из переменной, например, <code className="fs-6">obj[varWithKey]</code>.</li>
    </ul>
    <p>Дополнительные операторы:</p>
    <ul>
        <li>Удаление свойства: <code className="fs-6">delete obj.prop</code>.</li>
        <li>Проверка существования свойства: <code className="fs-6">&quot;key&quot; in obj</code>.</li>
        <li>Перебор свойств объекта: цикл for <code className="fs-6">for (let key in obj)</code>.</li>
    </ul>
    <p>То, что мы изучали в этой главе, называется &quot;простым объектом&quot; (&quot;plain object&quot;) или просто <code className="fs-6">Object</code>.</p>
    <p>В JavaScript есть много других типов объектов:</p>
    <ul>
        <li><code className="fs-6">Array</code> для хранения упорядоченных коллекций данных,</li>
        <li><code className="fs-6">Date</code> для хранения информации о дате и времени,</li>
        <li><code className="fs-6">Error</code> для хранения информации об ошибке.</li>
        <li>... и так далее.</li>
    </ul>
    <p>У них есть свои особенности, которые мы изучим позже. Иногда люди говорят что-то вроде &quot;тип данных Array&quot; или &quot;тип данных Date&quot;, но формально они не являются отдельными типами, а относятся к типу данных <code className="fs-6">Object</code>. Они лишь расширяют его различными способами.</p>

    </>
    );
}

export default ObjectsBasics;