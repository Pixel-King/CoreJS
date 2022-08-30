import * as React from 'react';
import destructImg from './DataTypes-img/destructuring-complex.svg';

const DestructuringAssignment: React.FC =() => {
    return (
    <>

    <h1>Деструктурирующее присваивание</h1>
    <p>В JavaScript есть две чаще всего используемые структуры данных – это <code className="fs-6">Object</code> и <code className="fs-6">Array</code>.</p>
    <ul>
        <li>
            <p>Объекты позволяют нам создавать одну сущность, которая хранит элементы данных по ключам.</p>
        </li>
        <li>
            <p>Массивы позволяют нам собирать элементы данных в упорядоченный список.</p>
        </li>
    </ul>
    <p>Но когда мы передаём их в функцию, то ей может понадобиться не объект/массив целиком, а элементы по отдельности.</p>
    <p><em>Деструктурирующее присваивание</em> – это специальный синтаксис, который позволяет нам «распаковать» массивы или объекты в несколько переменных, так как иногда они более удобны.</p>
    <p>Деструктуризация также прекрасно работает со сложными функциями, которые имеют много параметров, значений по умолчанию и так далее. Скоро мы увидим это.</p>
    <h2>Деструктуризация массива</h2>
    <p>Вот пример, деструктуризации массива на переменные:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor"]

// деструктурирующее присваивание
// записывает firstName = arr[0]
// и surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // Ilya
alert(surname);  // Kantor`}
        </code>
    </pre>
    <p>Теперь мы можем использовать переменные вместо элементов массива.</p>
    <p>Отлично смотрится в сочетании со <code className="fs-6">split</code> или другими методами, возвращающими массив:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let [firstName, surname] = "Ilya Kantor".split(' ');
alert(firstName); // Ilya
alert(surname);  // Kantor`}
        </code>
    </pre>
    <p>Как вы можете видеть, синтаксис прост. Однако есть несколько странных моментов. Давайте посмотрим больше примеров, чтобы лучше понять это.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>«Деструктуризация» не означает «разрушение».</strong></p>
        <p>«Деструктурирующее присваивание» не уничтожает массив. Оно вообще ничего не делает с правой частью присваивания, его задача – только скопировать нужные значения в переменные.</p>
        <p>Это просто короткий вариант записи:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
            {`// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];`}
            </code>
        </pre>
    </div>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Пропускайте элементы, используя запятые</strong></p>
        <p>Нежелательные элементы массива также могут быть отброшены с помощью дополнительной запятой:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
            {`// второй элемент не нужен
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul`}
            </code>
        </pre>
        <p>В примере выше второй элемент массива пропускается, а третий присваивается переменной <code className="fs-6">title</code>, оставшиеся элементы массива также пропускаются (так как для них нет переменных).</p>
    </div>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Работает с любым перебираемым объектом с правой стороны</strong></p>
        <p>…На самом деле мы можем использовать любой перебираемый объект, не только массивы:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
            {`let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);`}
            </code>
        </pre>
    </div>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Присваивайте чему угодно с левой стороны</strong></p>
        <p>Мы можем использовать что угодно «присваивающее» с левой стороны.</p>
        <p>Например, можно присвоить свойству объекта:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
            {`let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');

alert(user.name); // Ilya
alert(user.surname); // Kantor`}
            </code>
        </pre>
    </div>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Цикл с <code className="fs-6">.entries()</code></strong></p>
        <p>В предыдущей главе мы видели метод <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries">Object.entries(obj)</a>.</p>
        <p>Мы можем использовать его с деструктуризацией для цикличного перебора ключей и значений объекта:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
            {`let user = {
    name: "John",
    age: 30
};

// цикл по ключам и значениям
for (let [key, value] of Object.entries(user)) {
    alert(\`\${key}:\${value}\`); // name:John, затем age:30
}`}
            </code>
        </pre>
        <p>…то же самое для map:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
            {`let user = new Map();
user.set("name", "John");
user.set("age", "30");

// Map перебирает как пары [ключ, значение], что очень удобно для деструктурирования
for (let [key, value] of user) {
    alert(\`\${key}:\${value}\`); // name:John, затем age:30
}`}
            </code>
        </pre>
    </div>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Трюк обмена переменных</strong></p>
        <p>Существует хорошо известный трюк для обмена значений двух переменных с использованием деструктурирующего присваивания:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
            {`let guest = "Jane";
let admin = "Pete";

// Давайте поменяем местами значения: сделаем guest = "Pete", а admin = "Jane"
[guest, admin] = [admin, guest];

alert(\`\${guest} \${admin}\`); // Pete Jane (успешно заменено!)`}
            </code>
        </pre>
        <p>Здесь мы создаём временный массив из двух переменных и немедленно деструктурируем его в порядке замены.</p>
        <p>Таким образом, мы можем поменять местами даже более двух переменных.</p>
    </div>
    <h3>Остаточные параметры «…»</h3>
    <p>Обычно, если массив длиннее, чем список слева, «лишние» элементы опускаются.</p>
    <p>Например, здесь берутся только первые два элемента, а остальные просто игнорируются:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar
// Дальнейшие элементы нигде не присваиваются`}
        </code>
    </pre>
    <p>Если мы хотим не просто получить первые значения, но и собрать все остальные, то мы можем добавить ещё один параметр, который получает остальные значения, используя оператор «остаточные параметры» – троеточие (<code className="fs-6">"..."</code>):</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest это массив элементов, начиная с 3-го
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2`}
        </code>
    </pre>
    <p>Переменная <code className="fs-6">rest</code> является массивом из оставшихся элементов.</p>
    <p>Вместо <code className="fs-6">rest</code> можно использовать любое другое название переменной, просто убедитесь, что перед переменной есть три точки и она стоит на последнем месте в деструктурирующем присваивании.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let [name1, name2, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// теперь titles = ["Consul", "of the Roman Republic"]`}
        </code>
    </pre>
    <h3>Значения по умолчанию</h3>
    <p>Если в массиве меньше значений, чем в присваивании, то ошибки не будет. Отсутствующие значения считаются неопределёнными:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined`}
        </code>
    </pre>
    <p>Если мы хотим, чтобы значение «по умолчанию» заменило отсутствующее, мы можем указать его с помощью <code className="fs-6">=</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// значения по умолчанию
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name);    // Julius (из массива)
alert(surname); // Anonymous (значение по умолчанию)`}
        </code>
    </pre>
    <p>Значения по умолчанию могут быть гораздо более сложными выражениями или даже функциями. Они выполняются, только если значения отсутствуют.</p>
    <p>Например, здесь мы используем функцию <code className="fs-6">prompt</code> для указания двух значений по умолчанию.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// prompt запустится только для surname
let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

alert(name);    // Julius (из массива)
alert(surname); // результат prompt`}
        </code>
    </pre>
    <p>Обратите внимание, <code className="fs-6">prompt</code> будет запущен только для пропущенного значения (<code className="fs-6">surname</code>).</p>
    <h2>Деструктуризация объекта</h2>
    <p>Деструктурирующее присваивание также работает с объектами.</p>
    <p>Синтаксис:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let {var1, var2} = {var1:…, var2:…}`}
        </code>
    </pre>
    <p>У нас есть существующий объект с правой стороны, который мы хотим разделить на переменные. Левая сторона содержит «шаблон» для соответствующих свойств. В простом случае это список названий переменных в <code className="fs-6">{`{...}`}</code>.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200`}
        </code>
    </pre>
    <p>Свойства <code className="fs-6">options.title</code>, <code className="fs-6">options.width</code> и <code className="fs-6">options.height</code> присваиваются соответствующим переменным.</p>
    <p>Порядок не имеет значения. Вот так – тоже работает:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// изменён порядок в let {...}
let {height, width, title} = { title: "Menu", height: 200, width: 100 }`}
        </code>
    </pre>
    <p>Шаблон с левой стороны может быть более сложным и определять соответствие между свойствами и переменными.</p>
    <p>Если мы хотим присвоить свойство объекта переменной с другим названием, например, свойство <code className="fs-6">options.width</code> присвоить переменной w, то мы можем использовать двоеточие:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let options = {
    title: "Menu",
    width: 100,
    height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200`}
        </code>
    </pre>
    <p>Двоеточие показывает «что : куда идёт». В примере выше свойство <code className="fs-6">width</code> сохраняется в переменную <code className="fs-6">w</code>, свойство <code className="fs-6">height</code> сохраняется в <code className="fs-6">h</code>, а <code className="fs-6">title</code> присваивается одноимённой переменной.</p>
    <p>Для потенциально отсутствующих свойств мы можем установить значения по умолчанию, используя "<code className="fs-6">=</code>", как здесь:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let options = {
    title: "Menu"
};

let {width = 100, height = 200, title} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200`}
        </code>
    </pre>
    <p>Как и в случае с массивами, значениями по умолчанию могут быть любые выражения или даже функции. Они выполнятся, если значения отсутствуют.</p>
    <p>В коде ниже <code className="fs-6">prompt</code> запросит <code className="fs-6">width</code>, но не <code className="fs-6">title</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let options = {
    title: "Menu"
};

let {width = prompt("width?"), title = prompt("title?")} = options;

alert(title);  // Menu
alert(width);  // (результат prompt)`}
        </code>
    </pre>
    <p>Мы также можем совмещать <code className="fs-6">:</code> и <code className="fs-6">=</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let options = {
    title: "Menu"
};

let {width: w = 100, height: h = 200, title} = options;

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200`}
        </code>
    </pre>
    <p>Если у нас есть большой объект с множеством свойств, можно взять только то, что нужно:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let options = {
    title: "Menu",
    width: 100,
    height: 200
};

// взять только title, игнорировать остальное
let { title } = options;

alert(title); // Menu`}
        </code>
    </pre>
    <h3>Остаток объекта «…»</h3>
    <p>Что если в объекте больше свойств, чем у нас переменных? Можем ли мы взять необходимые нам, а остальные присвоить куда-нибудь?</p>
    <p>Можно использовать троеточие, как и для массивов. В некоторых старых браузерах (IE) это не поддерживается, используйте Babel для полифила.</p>
    <p>Выглядит так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let options = {
    title: "Menu",
    height: 200,
    width: 100
};

// title = свойство с именем title
// rest = объект с остальными свойствами
let {title, ...rest} = options;

// сейчас title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100`}
        </code>
    </pre>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Обратите внимание на <code className="fs-6">let</code></strong></p>
        <p>В примерах выше переменные были объявлены в присваивании: <code className="fs-6">{`let {…} = {…}`}</code>. Конечно, мы могли бы использовать существующие переменные и не указывать <code className="fs-6">let</code>, но тут есть подвох.</p>
        <p>Вот так не будет работать:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
            {`let title, width, height;

// ошибка будет в этой строке
{title, width, height} = {title: "Menu", width: 200, height: 100};`}
            </code>
        </pre>
        <p>Проблема в том, что JavaScript обрабатывает <code className="fs-6">{`{...}`}</code> в основном потоке кода (не внутри другого выражения) как блок кода. Такие блоки кода могут быть использованы для группировки операторов, например:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
            {`{
  // блок кода
    let message = "Hello";
    // ...
    alert( message );
}`}
            </code>
        </pre>
        <p>Так что здесь JavaScript считает, что видит блок кода, отсюда и ошибка. На самом-то деле у нас деструктуризация.</p>
        <p>Чтобы показать JavaScript, что это не блок кода, мы можем заключить выражение в скобки <code className="fs-6">(...)</code>:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
            {`let title, width, height;

// сейчас всё работает
({title, width, height} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu`}
            </code>
        </pre>
    </div>
    <h2>Вложенная деструктуризация</h2>
    <p>Если объект или массив содержит другие вложенные объекты или массивы, то мы можем использовать более сложные шаблоны с левой стороны, чтобы извлечь более глубокие свойства.</p>
    <p>В приведённом ниже коде <code className="fs-6">options</code> хранит другой объект в свойстве <code className="fs-6">size</code> и массив в свойстве <code className="fs-6">items</code>. Шаблон в левой части присваивания имеет такую же структуру, чтобы извлечь данные из них:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

// деструктуризация разбита на несколько строк для ясности
let {
    size: { // положим size сюда
        width,
        height
    },
    items: [item1, item2], // добавим элементы к items
    title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut`}
        </code>
    </pre>
    <p>Весь объект <code className="fs-6">options</code>, кроме свойства <code className="fs-6">extra</code>, которое в левой части отсутствует, присваивается в соответствующие переменные:</p>
    <img className="mx-auto d-block" src={destructImg} alt="destructuring assignment"></img>
    <p>В итоге у нас есть <code className="fs-6">width</code>, <code className="fs-6">height</code>, <code className="fs-6">item1</code>, <code className="fs-6">item2</code> и <code className="fs-6">title</code> со значением по умолчанию.</p>
    <p>Заметим, что переменные для <code className="fs-6">size</code> и <code className="fs-6">items</code> отсутствуют, так как мы взяли сразу их содержимое.</p>
    <h2>Умные параметры функций</h2>
    <p>Есть ситуации, когда функция имеет много параметров, большинство из которых не обязательны. Это особенно верно для пользовательских интерфейсов. Представьте себе функцию, которая создаёт меню. Она может иметь ширину, высоту, заголовок, список элементов и так далее.</p>
    <p>Вот так – плохой способ писать подобные функции:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
    // ...
}`}
        </code>
    </pre>
    <p>В реальной жизни проблема заключается в том, как запомнить порядок всех аргументов. Обычно IDE пытаются помочь нам, особенно если код хорошо документирован, но всё же… Другая проблема заключается в том, как вызвать функцию, когда большинство параметров передавать не надо, и значения по умолчанию вполне подходят.</p>
    <p>Разве что вот так?</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// undefined там, где подходят значения по умолчанию
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])`}
        </code>
    </pre>
    <p>Это выглядит ужасно. И становится нечитаемым, когда мы имеем дело с большим количеством параметров.</p>
    <p>На помощь приходит деструктуризация!</p>
    <p>Мы можем передать параметры как объект, и функция немедленно деструктурирует его в переменные:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// мы передаём объект в функцию
let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

// ...и она немедленно извлекает свойства в переменные
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
    // title, items – взято из options,
    // width, height – используются значения по умолчанию
    alert( \`\${title} \${width} \${height}\` ); // My Menu 200 100
    alert( items ); // Item1, Item2
}

showMenu(options);`}
        </code>
    </pre>
    <p>Мы также можем использовать более сложное деструктурирование с вложенными объектами и двоеточием:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu({
    title = "Untitled",
    width: w = 100,  // width присваиваем в w
    height: h = 200, // height присваиваем в h
    items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
}) {
    alert( \`\${title} \${w} \${h}\` ); // My Menu 100 200
    alert( item1 ); // Item1
    alert( item2 ); // Item2
}

showMenu(options);`}
        </code>
    </pre>
    <p>Полный синтаксис – такой же, как для деструктурирующего присваивания:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`function({
    incomingProperty: varName = defaultValue
    ...
})`}
        </code>
    </pre>
    <p>Тогда для объекта с параметрами будет создана переменная varName для свойства с именем <code className="fs-6">incomingProperty</code> по умолчанию равная <code className="fs-6">defaultValue</code>.</p>
    <p>Пожалуйста, обратите внимание, что такое деструктурирование подразумевает, что в <code className="fs-6">showMenu()</code> будет обязательно передан аргумент. Если нам нужны все значения по умолчанию, то нам следует передать пустой объект:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`showMenu({}); // ок, все значения - по умолчанию

showMenu(); // так была бы ошибка`}
        </code>
    </pre>
    <p>Мы можем исправить это, сделав <code className="fs-6">{}</code> значением по умолчанию для всего объекта параметров:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
    alert( \`\${title} \${width} \${height}\` );
}

showMenu(); // Menu 100 200`}
        </code>
    </pre>
    <p>В приведённом выше коде весь объект аргументов по умолчанию равен <code className="fs-6">{}</code>, поэтому всегда есть что-то, что можно деструктурировать.</p>
    <h2>Итого</h2>
    <ul>
        <li>
            <p>Деструктуризация позволяет разбивать объект или массив на переменные при присвоении.</p>
        </li>
        <li>
            <p>Полный синтаксис для объекта:</p>
            <pre className="text-bg-dark px-3 py-3">
                <code className="fs-6">
                {`let {prop : varName = default, ...rest} = object`}
                </code>
            </pre>
            <p>Cвойство <code className="fs-6">prop</code> объекта <code className="fs-6">object</code> здесь должно быть присвоено переменной <code className="fs-6">varName</code>. Если в объекте отсутствует такое свойство, переменной varName присваивается значение по умолчанию.</p>
            <p>Свойства, которые не были упомянуты, копируются в объект <code className="fs-6">rest</code>.</p>
        </li>
        <li>
            <p>Полный синтаксис для массива:</p>
            <pre className="text-bg-dark px-3 py-3">
                <code className="fs-6">
                let [item1 = default, item2, ...rest] = array
                </code>
            </pre>
            <p>Первый элемент отправляется в <code className="fs-6">item1</code>; второй отправляется в <code className="fs-6">item2</code>, все остальные элементы попадают в массив <code className="fs-6">rest</code>.</p>
        </li>
        <li>
            <p>Можно извлекать данные из вложенных объектов и массивов, для этого левая сторона должна иметь ту же структуру, что и правая.</p>
        </li>
    </ul>

    </>
    );
}

export default DestructuringAssignment;