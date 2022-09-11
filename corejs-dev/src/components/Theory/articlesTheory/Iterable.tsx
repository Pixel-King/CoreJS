import * as React from 'react';

const Iterable: React.FC =() => {
    return (
    <>
    
    <h1>Перебираемые объекты</h1>
    <p><em>Перебираемые (или итерируемые) объекты</em> – это обобщение массивов. Концепция, которая позволяет использовать любой объект в цикле <code className="fs-6">for..of</code>.</p>
    <p>Конечно же, сами массивы являются перебираемыми объектами. Но есть и много других встроенных перебираемых объектов, например, строки.</p>
    <p>Если объект не является массивом, но представляет собой коллекцию каких-то элементов (список, набор), то удобно использовать цикл <code className="fs-6">for..of</code> для их перебора, так что давайте посмотрим, как это сделать.</p>
    <h2>Symbol.iterator</h2>
    <p>Мы легко поймём принцип устройства перебираемых объектов, создав один из них.</p>
    <p>Например, у нас есть объект. Это не массив, но он выглядит подходящим для <code className="fs-6">for..of</code>.</p>
    <p>Например, объект <strong>range</strong>, который представляет собой диапазон чисел:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let range = {
    from: 1,
    to: 5
};

// Мы хотим, чтобы работал for..of:
// for(let num of range) ... num=1,2,3,4,5`}
        </code>
    </pre>
    <p>Чтобы сделать <strong>range</strong> итерируемым (и позволить <code className="fs-6">for..of</code> работать с ним), нам нужно добавить в объект метод с именем <code className="fs-6">Symbol.iterator</code> (специальный встроенный <code className="fs-6">Symbol</code>, созданный как раз для этого).</p>
    <ol>
        <li>
            <p>Когда цикл <code className="fs-6">for..of</code> запускается, он вызывает этот метод один раз (или выдаёт ошибку, если метод не найден). Этот метод должен вернуть итератор – объект с методом <code className="fs-6">next</code>.</p>
        </li>
        <li>
            <p>Дальше <code className="fs-6">for..of</code> работает только с этим возвращённым объектом.</p>
        </li>
        <li>
            <p>Когда <code className="fs-6">for..of</code> хочет получить следующее значение, он вызывает метод <code className="fs-6">next()</code> этого объекта.</p>
        </li>
        <li>
            <p>Результат вызова <code className="fs-6">next()</code> должен иметь вид <code className="fs-6">{`{done: Boolean, value: any}`}</code>, где <code className="fs-6">done=true</code> означает, что цикл завершён, в противном случае <code className="fs-6">value</code> содержит очередное значение.</p>
        </li>
    </ol>
    <p>Вот полная реализация <code className="fs-6">range</code> с пояснениями:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let range = {
    from: 1,
    to: 5
};

// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function() {

    // ...она возвращает объект итератора:
    // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
    return {
        current: this.from,
        last: this.to,

        // 3. next() вызывается на каждой итерации цикла for..of
        next() {
            // 4. он должен вернуть значение в виде объекта {done:.., value :...}
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

// теперь работает!
for (let num of range) {
    alert(num); // 1, затем 2, 3, 4, 5
}`}
        </code>
    </pre>
    <p>Обратите внимание на ключевую особенность итераторов: разделение ответственности.</p>
    <ul>
        <li>
            <p>У самого <code className="fs-6">range</code> нет метода <code className="fs-6">next()</code>.</p>
        </li>
        <li>
            <p>Вместо этого другой объект, так называемый «итератор», создаётся вызовом <code className="fs-6">range[Symbol.iterator]()</code>, и именно его <code className="fs-6">next()</code> генерирует значения.</p>
        </li>
    </ul>
    <p>Таким образом, объект итератор отделён от самого итерируемого объекта.</p>
    <p>Технически мы можем объединить их и использовать сам <code className="fs-6">range</code> как итератор, чтобы упростить код.</p>
    <p>Например, вот так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    alert(num); // 1, затем 2, 3, 4, 5
}`}
        </code>
    </pre>
    <p>Теперь <code className="fs-6">range[Symbol.iterator]()</code> возвращает сам объект <code className="fs-6">range</code>: у него есть необходимый метод <code className="fs-6">next()</code>, и он запоминает текущее состояние итерации в <code className="fs-6">this.current</code>. Короче? Да. И иногда такой способ тоже хорош.</p>
    <p>Недостаток такого подхода в том, что теперь мы не можем использовать этот объект в двух параллельных циклах <code className="fs-6">for..of</code>: у них будет общее текущее состояние итерации, потому что теперь существует лишь один итератор – сам объект. Но необходимость в двух циклах <code className="fs-6">for..of</code>, выполняемых одновременно, возникает редко, даже при наличии асинхронных операций.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Бесконечные итераторы</strong></p>
        <p>Можно сделать бесконечный итератор. Например, <code className="fs-6">range</code> будет бесконечным при <code className="fs-6">range.to = Infinity</code>. Или мы можем создать итерируемый объект, который генерирует бесконечную последовательность псевдослучайных чисел. Это бывает полезно.</p>
        <p>Метод <code className="fs-6">next</code> не имеет ограничений, он может возвращать всё новые и новые значения, это нормально.</p>
        <p>Конечно же, цикл <code className="fs-6">for..of</code> с таким итерируемым объектом будет бесконечным. Но мы всегда можем прервать его, используя <code className="fs-6">break</code>.</p>
    </div>
    <h2>Строка – перебираемый объект</h2>
    <p>Среди встроенных перебираемых объектов наиболее широко используются массивы и строки.</p>
    <p>Для строки <code className="fs-6">for..of</code> перебирает символы:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`for (let char of "test") {
    // срабатывает 4 раза: по одному для каждого символа
    alert( char ); // t, затем e, затем s, затем t
}`}
        </code>
    </pre>
    <p>И он работает корректно даже с суррогатными парами!</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let str = '𝒳😂';
for (let char of str) {
    alert( char ); // 𝒳, а затем 😂
}`}
        </code>
    </pre>
    <h2>Явный вызов итератора</h2>
    <p>Чтобы понять устройство итераторов чуть глубже, давайте посмотрим, как их использовать явно.</p>
    <p>Мы будем перебирать строку точно так же, как цикл <code className="fs-6">for..of</code>, но вручную, прямыми вызовами. Нижеприведённый код получает строковый итератор и берёт из него значения:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let str = "Hello";

// делает то же самое, что и
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    alert(result.value); // выводит символы один за другим
}`}
        </code>
    </pre>
    <p>Такое редко бывает необходимо, но это даёт нам больше контроля над процессом, чем <code className="fs-6">for..of</code>. Например, мы можем разбить процесс итерации на части: перебрать немного элементов, затем остановиться, сделать что-то ещё и потом продолжить.</p>
    <h2>Итерируемые объекты и псевдомассивы</h2>
    <p>Есть два официальных термина, которые очень похожи, но в то же время сильно различаются. Поэтому убедитесь, что вы как следует поняли их, чтобы избежать путаницы.</p>
    <ul>
        <li>
            <p><em>Итерируемые объекты</em> – это объекты, которые реализуют метод <code className="fs-6">Symbol.iterator</code>, как было описано выше.</p>
        </li>
        <li>
            <p><em>Псевдомассивы</em> – это объекты, у которых есть индексы и свойство <code className="fs-6">length</code>, то есть, они выглядят как массивы.</p>
        </li>
    </ul>
    <p>При использовании JavaScript в браузере или других окружениях мы можем встретить объекты, которые являются итерируемыми или псевдомассивами, или и тем, и другим.</p>
    <p>Например, строки итерируемы (для них работает <code className="fs-6">for..of</code>) и являются псевдомассивами (они индексированы и есть <code className="fs-6">length</code>).</p>
    <p>Но итерируемый объект может не быть псевдомассивом. И наоборот: псевдомассив может не быть итерируемым.</p>
    <p>Например, объект <code className="fs-6">range</code> из примера выше – итерируемый, но не является псевдомассивом, потому что у него нет индексированных свойств и <code className="fs-6">length</code>.</p>
    <p>А вот объект, который является псевдомассивом, но его нельзя итерировать:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let arrayLike = { // есть индексы и свойство length => псевдомассив
     0: "Hello",
    1: "World",
    length: 2
};

// Ошибка (отсутствует Symbol.iterator)
for (let item of arrayLike) {}`}
        </code>
    </pre>
    <p>Что у них общего? И итерируемые объекты, и псевдомассивы – это обычно не массивы, у них нет методов <code className="fs-6">push</code>, <code className="fs-6">pop</code> и т.д. Довольно неудобно, если у нас есть такой объект и мы хотим работать с ним как с массивом. Например, мы хотели бы работать с <code className="fs-6">range</code>, используя методы массивов. Как этого достичь?</p>
    <h2>Array.from</h2>
    <p>Есть универсальный метод <code className="fs-6">Array.from</code>, который принимает итерируемый объект или псевдомассив и делает из него «настоящий» <code className="fs-6">Array</code>. После этого мы уже можем использовать методы массивов.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (метод работает)`}
        </code>
    </pre>
    <p><code className="fs-6">Array.from</code> в строке (*) принимает объект, проверяет, является ли он итерируемым объектом или псевдомассивом, затем создаёт новый массив и копирует туда все элементы.</p>
    <p>То же самое происходит с итерируемым объектом:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// range взят из примера выше
let arr = Array.from(range);
alert(arr); // 1,2,3,4,5 (преобразование массива через toString работает)`}
        </code>
    </pre>
    <p>Полный синтаксис <code className="fs-6">Array.from</code> позволяет указать необязательную «трансформирующую» функцию:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        Array.from(obj[, mapFn, thisArg])
        </code>
    </pre>
    <p>Необязательный второй аргумент может быть функцией, которая будет применена к каждому элементу перед добавлением в массив, а <code className="fs-6">thisArg</code> позволяет установить <code className="fs-6">this</code> для этой функции.</p>
    <p>Например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// range взят из примера выше

// возводим каждое число в квадрат
let arr = Array.from(range, num => num * num);

alert(arr); // 1,4,9,16,25`}
        </code>
    </pre>
    <p>Здесь мы используем <code className="fs-6">Array.from</code>, чтобы превратить строку в массив её элементов:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let str = '𝒳😂';

// разбивает строку на массив её элементов
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2`}
        </code>
    </pre>
    <p>В отличие от <code className="fs-6">str.split</code>, этот метод в работе опирается на итерируемость строки, и поэтому, как и <code className="fs-6">for..of</code>, он корректно работает с суррогатными парами.</p>
    <p>Технически это то же самое, что и:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`let str = '𝒳😂';

let chars = []; // Array.from внутри себя выполняет тот же цикл
for (let char of str) {
    chars.push(char);
}

alert(chars);`}
        </code>
    </pre>
    <p>…Но гораздо короче.</p>
    <p>Мы можем даже создать <code className="fs-6">slice</code>, который поддерживает суррогатные пары:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
}

let str = '𝒳😂𩷶';

alert( slice(str, 1, 3) ); // 😂𩷶

// а вот встроенный метод не поддерживает суррогатные пары
alert( str.slice(1, 3) ); // мусор (две части различных суррогатных пар)`}
        </code>
    </pre>
    <h2>Итого</h2>
    <p>Объекты, которые можно использовать в цикле <code className="fs-6">for..of</code>, называются <em>итерируемыми</em>.</p>
    <ul>
        <li>
            <p>Технически итерируемые объекты должны иметь метод <code className="fs-6">Symbol.iterator</code>.</p>
            <ul>
                <li>
                    <p>Результат вызова <code className="fs-6">obj[Symbol.iterator]</code> называется итератором. Он управляет процессом итерации.</p>
                </li>
                <li>
                    <p>Итератор должен иметь метод <code className="fs-6">next()</code>, который возвращает объект <code className="fs-6">{`{done: Boolean, value: any}`}</code>, где <code className="fs-6">done:true</code> сигнализирует об окончании процесса итерации, в противном случае <code className="fs-6">value</code> – следующее значение.</p>
                </li>
            </ul>
        </li>
        <li>
            <p>Метод <code className="fs-6">Symbol.iterator</code> автоматически вызывается циклом <code className="fs-6">for..of</code>, но можно вызвать его и напрямую.</p>
        </li>
        <li>
            <p>Встроенные итерируемые объекты, такие как строки или массивы, также реализуют метод <code className="fs-6">Symbol.iterator</code>.</p>
        </li>
        <li>
            <p>Строковый итератор знает про суррогатные пары.</p>
        </li>
    </ul>
    <p>Объекты, имеющие индексированные свойства и <code className="fs-6">length</code>, называются <em>псевдомассивами</em>. Они также могут иметь другие свойства и методы, но у них нет встроенных методов массивов.</p>
    <p>Если мы заглянем в спецификацию, мы увидим, что большинство встроенных методов рассчитывают на то, что они будут работать с итерируемыми объектами или псевдомассивами вместо «настоящих» массивов, потому что эти объекты более абстрактны.</p>
    <p><code className="fs-6">Array.from(obj[, mapFn, thisArg])</code> создаёт настоящий <code className="fs-6">Array</code> из итерируемого объекта или псевдомассива <code className="fs-6">obj</code>, и затем мы можем применять к нему методы массивов. Необязательные аргументы <code className="fs-6">mapFn</code> и <code className="fs-6">thisArg</code> позволяют применять функцию с задаваемым контекстом к каждому элементу.</p>

    </>
    );
}

export default Iterable;