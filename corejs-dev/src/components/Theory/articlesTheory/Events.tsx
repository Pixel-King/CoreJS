// import  react from 'react';
import * as React from 'react';

const Events: React.FC =() => {
    return (
    <>
    <h1>Введение в браузерные события</h1>
    <p><em>Событие</em> – это сигнал от браузера о том, что что-то произошло. Все DOM-узлы подают такие сигналы (хотя события бывают и не только в DOM).</p>
    <p>Cписок самых часто используемых DOM-событий:</p>
    <p><strong>События мыши:</strong></p>
    <ul>
        <li>
            <p><em>click</em> – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).</p>
        </li>
        <li>
            <p><em>contextmenu</em> – происходит, когда кликнули на элемент правой кнопкой мыши.</p>
        </li>
        <li>
            <p><em>mouseover / mouseout</em> – когда мышь наводится на / покидает элемент.</p>
        </li>
        <li>
            <p><em>mousedown / mouseup</em> – когда нажали / отжали кнопку мыши на элементе.</p>
        </li>
        <li>
            <p><em>mousemove</em> – при движении мыши.</p>
        </li>
    </ul>
    <p><strong>События на элементах управления:</strong></p>
    <ul>
        <li>
            <p><em>submit</em> – пользователь отправил форму <em>{`<form>`}</em>.</p>
        </li>
        <li>
            <p><em>focus</em> – пользователь фокусируется на элементе, например нажимает на <em>{`<input>`}</em>.</p>
        </li>
    </ul>
    <p><strong>Клавиатурные события:</strong></p>
    <ul>
        <li>
            <p><em>keydown</em> и <em>keyup</em> – когда пользователь нажимает / отпускает клавишу.</p>
        </li>
    </ul>
    <p><strong>События документа:</strong></p>
    <ul>
        <li>
            <p><em>DOMContentLoaded</em> – когда HTML загружен и обработан, DOM документа полностью построен и доступен.</p>
        </li>
    </ul>
    <p><strong>CSS events:</strong></p>
    <ul>
        <li>
            <p><em>transitionend</em> – когда CSS-анимация завершена.</p>
        </li>
    </ul>
    <h2>Обработчики событий</h2>
    <p>Событию можно назначить <em>обработчик</em>, то есть функцию, которая сработает, как только событие произошло.</p>
    <p>Именно благодаря обработчикам JavaScript-код может реагировать на действия пользователя.</p>
    <p>Есть несколько способов назначить событию обработчик. Сейчас мы их рассмотрим, начиная с самого простого.</p>
    <h3>Использование атрибута HTML</h3>
    <p>Обработчик может быть назначен прямо в разметке, в атрибуте, который называется <code className="fs-6">{`on<событие>`}</code>.</p>
    <p>Например, чтобы назначить обработчик события <em>click</em> на элементе <em>input</em>, можно использовать атрибут <code className="fs-6">onclick</code>, вот так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`<input value="Нажми меня" onclick="alert('Клик!')" type="button">`}
        </code>
    </pre>
    <p>При клике мышкой на кнопке выполнится код, указанный в атрибуте <code className="fs-6">onclick</code>.</p>
    <p>Обратите внимание, для содержимого атрибута onclick используются одинарные кавычки, так как сам атрибут находится в двойных. Если мы забудем об этом и поставим двойные кавычки внутри атрибута, вот так: <code className="fs-6">onclick="alert("Click!")"</code>, код не будет работать.</p>
    <p>Атрибут HTML-тега – не самое удобное место для написания большого количества кода, поэтому лучше создать отдельную JavaScript-функцию и вызвать её там.</p>
    <p>Следующий пример по клику запускает функцию <code className="fs-6">countRabbits()</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`<script>
    function countRabbits() {
        for(let i=1; i<=3; i++) {
            alert("Кролик номер " + i);
        }
    }
</script>

<input type="button" onclick="countRabbits()" value="Считать кроликов!">`}
        </code>
    </pre>
    <p>Как мы помним, атрибут HTML-тега не чувствителен к регистру, поэтому <code className="fs-6">ONCLICK</code> будет работать так же, как <code className="fs-6">onClick</code> и <code className="fs-6">onCLICK</code>… Но, как правило, атрибуты пишут в нижнем регистре: <code className="fs-6">onclick</code>.</p>
    <h3>Использование свойства DOM-объекта</h3>
    <p>Можно назначать обработчик, используя свойство DOM-элемента <code className="fs-6">{`on<событие>`}</code>.</p>
    <p>К примеру, <code className="fs-6">elem.onclick</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`<input id="elem" type="button" value="Нажми меня!">
<script>
    elem.onclick = function() {
        alert('Спасибо');
    };
</script>`}
        </code>
    </pre>
    <p>Если обработчик задан через атрибут, то браузер читает HTML-разметку, создаёт новую функцию из содержимого атрибута и записывает в свойство.</p>
    <p>Этот способ, по сути, аналогичен предыдущему.</p>
    <p><strong>Обработчик всегда хранится в свойстве DOM-объекта, а атрибут – лишь один из способов его инициализации.</strong></p>
    <p>Эти два примера кода работают одинаково:</p>
    <ol>
        <li>
            <p>Только HTML:</p>
            <pre className="text-bg-dark px-3 py-3">
                <code className="fs-6">
                    {`<input type="button" onclick="alert('Клик!')" value="Кнопка">`}
                </code>
            </pre>
        </li>
        <li>
            <p>HTML + JS:</p>
            <pre className="text-bg-dark px-3 py-3">
                <code className="fs-6">
                {`<input type="button" id="button" value="Кнопка">
<script>
    button.onclick = function() {
        alert('Клик!');
    };
</script>`}
                </code>
            </pre>
        </li>
    </ol>
    <p><strong>Так как у элемента DOM может быть только одно свойство с именем <code className="fs-6">onclick</code>, то назначить более одного обработчика так нельзя.</strong></p>
    <p>В примере ниже назначение через JavaScript перезапишет обработчик из атрибута:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`<input type="button" id="elem" onclick="alert('Было')" value="Нажми меня">
<script>
    elem.onclick = function() { // перезапишет существующий обработчик
        alert('Станет'); // выведется только это
    };
</script>`}
        </code>
    </pre>
    <p>Кстати, обработчиком можно назначить и уже существующую функцию:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`function sayThanks() {
    alert('Спасибо!');
}

elem.onclick = sayThanks;`}
        </code>
    </pre>
    <p>Убрать обработчик можно назначением <code className="fs-6">elem.onclick = null</code>.</p>
    <h3>Доступ к элементу через <code className="fs-6">this</code></h3>
    <p>Внутри обработчика события <code className="fs-6">this</code> ссылается на текущий элемент, то есть на тот, на котором, как говорят, «висит» (т.е. назначен) обработчик.</p>
    <p>В коде ниже <em>button</em> выводит своё содержимое, используя <code className="fs-6">this.innerHTML</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`<button onclick="alert(this.innerHTML)">Нажми меня</button>`}
        </code>
    </pre>
    <h3>Частые ошибки</h3>
    <p>Если вы только начинаете работать с событиями, обратите внимание на следующие моменты.</p>
    <p><strong>Функция должна быть присвоена как <code className="fs-6">sayThanks</code>, а не <code className="fs-6">sayThanks()</code>.</strong></p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`// правильно
button.onclick = sayThanks;

// неправильно
button.onclick = sayThanks();`}
        </code>
    </pre>
    <p>Если добавить скобки, то <code className="fs-6">sayThanks()</code> – это уже вызов функции, результат которого (равный <em>undefined</em>, так как функция ничего не возвращает) будет присвоен <em>onclick</em>. Так что это не будет работать.</p>
    <p>…А вот в разметке, в отличие от свойства, скобки нужны:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`<input type="button" id="button" onclick="sayThanks()">`}
        </code>
    </pre>
    <p>Это различие просто объяснить. При создании обработчика браузером из атрибута, он автоматически создаёт функцию с телом из значения атрибута: <code className="fs-6">sayThanks()</code>.</p>
    <p>Так что разметка генерирует такое свойство:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`button.onclick = function() {
    sayThanks(); // содержимое атрибута
};`}
        </code>
    </pre>
    <p><strong>Используйте именно функции, а не строки.</strong></p>
    <p>Назначение обработчика строкой <code className="fs-6">elem.onclick = "alert(1)"</code> также сработает. Это сделано из соображений совместимости, но делать так не рекомендуется.</p>
    <p><strong>Не используйте setAttribute для обработчиков.</strong></p>
    <p>Такой вызов работать не будет:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`// при нажатии на body будут ошибки,
// атрибуты всегда строки, и функция станет строкой
document.body.setAttribute('onclick', function() { alert(1) });`}
        </code>
    </pre>
    <p><strong>Регистр DOM-свойства имеет значение.</strong></p>
    <p>Используйте <code className="fs-6">elem.onclick</code>, а не <code className="fs-6">elem.ONCLICK</code>, потому что DOM-свойства чувствительны к регистру.</p>
    <h3>addEventListener</h3>
    <p>Фундаментальный недостаток описанных выше способов назначения обработчика – невозможность повесить несколько обработчиков на одно событие.</p>
    <p>Например, одна часть кода хочет при клике на кнопку делать её подсвеченной, а другая – выдавать сообщение.</p>
    <p>Мы хотим назначить два обработчика для этого. Но новое DOM-свойство перезапишет предыдущее:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`input.onclick = function() { alert(1); }
// ...
input.onclick = function() { alert(2); } // заменит предыдущий обработчик`}
        </code>
    </pre>
    <p>Разработчики стандартов достаточно давно это поняли и предложили альтернативный способ назначения обработчиков при помощи специальных методов <code className="fs-6">addEventListener</code> и <code className="fs-6">removeEventListener</code>. Они свободны от указанного недостатка.</p>
    <p>Синтаксис добавления обработчика:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`element.addEventListener(event, handler, [options]);`}
        </code>
    </pre>
    <ul>
        <li>
            <p><em>event</em> - имя события, например <em>"click"</em>.</p>
        </li>
        <li>
            <p><em>handler</em> - ссылка на функцию-обработчик.</p>
        </li>
        <li>
            <p><em>options</em> - дополнительный объект со свойствами:</p>
            <ul>
                <li>
                    <p><em>once</em>: если <em>true</em>, тогда обработчик будет автоматически удалён после выполнения.</p>
                </li>
                <li>
                    <p><em>capture</em>: фаза, на которой должен сработать обработчик</p>
                </li>
                <li>
                    <p><em>passive</em>: если <em>true</em>, то указывает, что обработчик никогда не вызовет <code className="fs-6">preventDefault()</code>.</p>
                </li>
            </ul>
        </li>
    </ul>
    <p>Для удаления обработчика следует использовать <code className="fs-6">removeEventListener</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`element.removeEventListener(event, handler[, options]);`}
        </code>
    </pre>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Удаление требует именно ту же функцию.</strong></p>
        <p>Для удаления нужно передать именно ту функцию-обработчик которая была назначена.</p>
    </div>
    <p>Метод <code className="fs-6">addEventListener</code> позволяет добавлять несколько обработчиков на одно событие одного элемента, например:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`<input id="elem" type="button" value="Нажми меня"/>

<script>
    function handler1() {
        alert('Спасибо!');
    };

    function handler2() {
        alert('Спасибо ещё раз!');
    }

    elem.onclick = () => alert("Привет");
    elem.addEventListener("click", handler1); // Спасибо!
    elem.addEventListener("click", handler2); // Спасибо ещё раз!
</script>`}
        </code>
    </pre>
    <p>Как видно из примера выше, можно одновременно назначать обработчики и через DOM-свойство и через <code className="fs-6">addEventListener</code>. Однако, во избежание путаницы, рекомендуется выбрать один способ.</p>
    <h2>Объект события</h2>
    <p>Чтобы хорошо обработать событие, могут понадобиться детали того, что произошло. Не просто «клик» или «нажатие клавиши», а также – какие координаты указателя мыши, какая клавиша нажата и так далее.</p>
    <p>Когда происходит событие, браузер создаёт <em>объект события</em>, записывает в него детали и передаёт его в качестве аргумента функции-обработчику.</p>
    <p>Пример ниже демонстрирует получение координат мыши из объекта события:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`<input type="button" value="Нажми меня" id="elem">

<script>
    elem.onclick = function(event) {
        // вывести тип события, элемент и координаты клика
        alert(event.type + " на " + event.currentTarget);
        alert("Координаты: " + event.clientX + ":" + event.clientY);
    };
</script>`}
        </code>
    </pre>
    <p>Некоторые свойства объекта event:</p>
    <ul>
        <li>
            <p><em>event.type</em>: тип события, в данном случае <em>"click"</em>.</p>
        </li>
        <li>
            <p><em>event.currentTarget</em>: элемент, на котором сработал обработчик. Значение – обычно такое же, как и у <code className="fs-6">this</code>, но если обработчик является функцией-стрелкой или при помощи <code className="fs-6">bind</code> привязан другой объект в качестве <code className="fs-6">this</code>, то мы можем получить элемент из <code className="fs-6">event.currentTarget</code>.</p>
        </li>
        <li>
            <p><em>event.clientX / event.clientY</em>: координаты курсора в момент клика относительно окна, для событий мыши.</p>
        </li>
    </ul>
    <h3>Объект-обработчик: <em>handleEvent</em></h3>
    <p>Мы можем назначить обработчиком не только функцию, но и объект при помощи <code className="fs-6">addEventListener</code>. В этом случае, когда происходит событие, вызывается метод объекта <code className="fs-6">handleEvent</code>.</p>
    <p>К примеру:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`<button id="elem">Нажми меня</button>

<script>
    elem.addEventListener('click', {
        handleEvent(event) {
            alert(event.type + " на " + event.currentTarget);
        }
    });
</script>`}
        </code>
    </pre>
    <p>Как видим, если <code className="fs-6">addEventListener</code> получает объект в качестве обработчика, он вызывает <code className="fs-6">object.handleEvent(event)</code>, когда происходит событие.</p>
    <p>Мы также можем использовать класс для этого:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`<button id="elem">Нажми меня</button>

<script>
    class Menu {
        handleEvent(event) {
            switch(event.type) {
                case 'mousedown':
                    elem.innerHTML = "Нажата кнопка мыши";
                    break;
                case 'mouseup':
                    elem.innerHTML += "...и отжата.";
                    break;
            }
        }
    }

    let menu = new Menu();
    elem.addEventListener('mousedown', menu);
    elem.addEventListener('mouseup', menu);
</script>`}
        </code>
    </pre>
    <p>Здесь один и тот же объект обрабатывает оба события. Обратите внимание, мы должны явно назначить оба обработчика через <code className="fs-6">addEventListener</code>. Тогда объект menu будет получать события <em>mousedown</em> и <em>mouseup</em>, но не другие (не назначенные) типы событий.</p>
    <p>Метод <code className="fs-6">handleEvent</code> не обязательно должен выполнять всю работу сам. Он может вызывать другие методы, которые заточены под обработку конкретных типов событий, вот так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`<button id="elem">Нажми меня</button>

<script>
    class Menu {
        handleEvent(event) {
            // mousedown -> onMousedown
            let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
            this[method](event);
        }

        onMousedown() {
            elem.innerHTML = "Кнопка мыши нажата";
        }

        onMouseup() {
            elem.innerHTML += "...и отжата.";
        }
    }

    let menu = new Menu();
    elem.addEventListener('mousedown', menu);
    elem.addEventListener('mouseup', menu);
</script>`}
        </code>
    </pre>
    <p>Теперь обработка событий разделена по методам, что упрощает поддержку кода.</p>
    
    <h2>Итого</h2>
    <p>Есть три способа назначения обработчиков событий:</p>
    <ul>
        <li>
            <p>Атрибут HTML: <em>onclick="..."</em>.</p>
        </li>
        <li>
            <p>DOM-свойство: <em>elem.onclick = function</em>.</p>
        </li>
        <li>
            <p>Специальные методы: <code className="fs-6">elem.addEventListener(event, handler[, phase])</code> для добавления, <code className="fs-6">removeEventListener</code> для удаления.</p>
        </li>
    </ul>
    <p>HTML-атрибуты используются редко потому, что JavaScript в HTML-теге выглядит немного странно. К тому же много кода там не напишешь.</p>
    <p>DOM-свойства вполне можно использовать, но мы не можем назначить больше одного обработчика на один тип события. Во многих случаях с этим ограничением можно мириться.</p>
    <p>Последний способ самый гибкий, однако нужно писать больше всего кода. Есть несколько типов событий, которые работают только через него, к примеру <em>transitionend</em> и <em>DOMContentLoaded</em>. Также <code className="fs-6">addEventListener</code> поддерживает объекты в качестве обработчиков событий. В этом случае вызывается метод объекта <code className="fs-6">handleEvent</code>.</p>
    <p>Не важно, как вы назначаете обработчик – он получает объект события первым аргументом. Этот объект содержит подробности о том, что произошло.</p>
    
    </>
    );
}

export default Events;