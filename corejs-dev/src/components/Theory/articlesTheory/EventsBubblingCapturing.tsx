import * as React from 'react';
import eventFlowImg from './Events-img/eventflow.svg';
import eventBubblingImg from './Events-img/event-order-bubbling.svg';



const EventsBubblingCapturing: React.FC =() => {
    return (
    <>

    <h1>Всплытие и погружение</h1>
    <p>Давайте начнём с примера.</p>
    <p>Этот обработчик для <code className="fs-6">{`<div>`}</code> сработает, если вы кликните по любому из вложенных тегов, будь то <code className="fs-6">{`<em>`}</code> или <code className="fs-6">{`<code>`}</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`<div onclick="alert('Обработчик!')">
    <em>Если вы кликните на <code>EM</code>, сработает обработчик на <code>DIV</code></em>
</div>`}
        </code>
    </pre>
    <p>Вам не кажется это странным? Почему же сработал обработчик на <code className="fs-6">{`<div>`}</code>, если клик произошёл на <code className="fs-6">{`<em>`}</code>?</p>
    <h2>Всплытие</h2>
    <p>Принцип всплытия очень простой.</p>
    <p><strong>Когда на элементе происходит событие, обработчики сначала срабатывают на нём, потом на его родителе, затем выше и так далее, вверх по цепочке предков.</strong></p>
    <p>Например, есть 3 вложенных элемента <code className="fs-6">{`FORM > DIV > P`}</code> с обработчиком на каждом:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`<style>
    body * {
        margin: 10px;
        border: 1px solid blue;
    }
</style>

<form onclick="alert('form')">FORM
    <div onclick="alert('div')">DIV
        <p onclick="alert('p')">P</p>
    </div>
</form>`}
        </code>
    </pre>
    <p>Клик по внутреннему <code className="fs-6">{`<p>`}</code> вызовет обработчик <code className="fs-6">onclick</code>:</p>
    <ol>
        <li>
            <p>Сначала на самом <code className="fs-6">{`<p>`}</code>.</p>
        </li>
        <li>
            <p>Потом на внешнем <code className="fs-6">{`<div>`}</code>.</p>
        </li>
        <li>
            <p>Затем на внешнем <code className="fs-6">{`<form>`}</code>.</p>
        </li>
        <li>
            <p>И так далее вверх по цепочке до самого <code className="fs-6">document</code>.</p>
        </li>
    </ol>
    <img className="mx-auto d-block" src={eventBubblingImg} alt="bubbling"></img>
    <p>Поэтому если кликнуть на <code className="fs-6">{`<p>`}</code>, то мы увидим три оповещения: <code className="fs-6">p → div → form</code>.</p>
    <p>Этот процесс называется «всплытием», потому что события «всплывают» от внутреннего элемента вверх через родителей подобно тому, как всплывает пузырёк воздуха в воде.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong><em>Почти</em> все события всплывают.</strong></p>
        <p>Ключевое слово в этой фразе – «почти».</p>
        <p>Например, событие <code className="fs-6">focus</code> не всплывает. В дальнейшем мы увидим и другие примеры. Однако, стоит понимать, что это скорее исключение, чем правило, всё-таки большинство событий всплывают.</p>
    </div>
    <h2>event.target</h2>
    <p>Всегда можно узнать, на каком конкретно элементе произошло событие.</p>
    <p><strong>Самый глубокий элемент, который вызывает событие, называется <em>целевым элементом</em>, и он доступен через <code className="fs-6">event.target</code>.</strong></p>
    <p>Отличия от <code className="fs-6">this</code> (=<code className="fs-6">event.currentTarget</code>):</p>
    <ul>
        <li>
            <p><code className="fs-6">event.target</code> – это «целевой» элемент, на котором произошло событие, в процессе всплытия он неизменен.</p>
        </li>
        <li>
            <p><code className="fs-6">this</code> – это «текущий» элемент, до которого дошло всплытие, на нём сейчас выполняется обработчик.</p>
        </li>
    </ul>
    <p>Например, если стоит только один обработчик <code className="fs-6">form.onclick</code>, то он «поймает» все клики внутри формы. Где бы ни был клик внутри – он всплывёт до элемента <code className="fs-6">{`<form>`}</code>, на котором сработает обработчик.</p>
    <p>При этом внутри обработчика <code className="fs-6">form.onclick</code>:</p>
    <ul>
        <li>
            <p><code className="fs-6">this</code> (=<code className="fs-6">event.currentTarget</code>) всегда будет элемент <code className="fs-6">{`<form>`}</code>, так как обработчик сработал на ней.</p>
        </li>
        <li>
            <p><code className="fs-6">event.target</code> будет содержать ссылку на конкретный элемент внутри формы, на котором произошёл клик.</p>
        </li>
    </ul>
    <p>Возможна и ситуация, когда <code className="fs-6">event.target</code> и <code className="fs-6">this</code> – один и тот же элемент, например, если клик был непосредственно на самом элементе <code className="fs-6">{`<form>`}</code>, а не на его подэлементе.</p>
    <h2>Прекращение всплытия</h2>
    <p>Всплытие идёт с «целевого» элемента прямо наверх. По умолчанию событие будет всплывать до элемента <code className="fs-6">{`<html>`}</code>, а затем до объекта <code className="fs-6">document</code>, а иногда даже до <code className="fs-6">window</code>, вызывая все обработчики на своём пути.</p>
    <p>Но любой промежуточный обработчик может решить, что событие полностью обработано, и остановить всплытие.</p>
    <p>Для этого нужно вызвать метод <code className="fs-6">event.stopPropagation()</code>.</p>
    <p>Например, здесь при клике на кнопку <code className="fs-6">{`<button>`}</code> обработчик <code className="fs-6">body.onclick</code> не сработает:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`<body onclick="alert(\`сюда всплытие не дойдёт\`)">
    <button onclick="event.stopPropagation()">Кликни меня</button>
</body>`}
        </code>
    </pre>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>event.stopImmediatePropagation()</strong></p>
        <p>Если у элемента есть несколько обработчиков на одно событие, то даже при прекращении всплытия все они будут выполнены.</p>
        <p>То есть, <code className="fs-6">event.stopPropagation()</code> препятствует продвижению события дальше, но на текущем элементе все обработчики будут вызваны.</p>
        <p>Для того, чтобы полностью остановить обработку, существует метод <code className="fs-6">event.stopImmediatePropagation()</code>. Он не только предотвращает всплытие, но и останавливает обработку событий на текущем элементе.</p>
    </div>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Не прекращайте всплытие без необходимости!</strong></p>
        <p>Всплытие – это удобно. Не прекращайте его без явной нужды, очевидной и архитектурно прозрачной.</p>
        <p>Зачастую прекращение всплытия через <code className="fs-6">event.stopPropagation()</code> имеет свои подводные камни, которые со временем могут стать проблемами.</p>
        <p>Например:</p>
        <ol>
            <li>
                <p>Мы делаем вложенное меню. Каждое подменю обрабатывает клики на своих элементах и делает для них <code className="fs-6">stopPropagation</code>, чтобы не срабатывало внешнее меню.</p>
            </li>
            <li>
                <p>Позже мы решили отслеживать все клики в окне для какой-то своей функциональности, к примеру, для статистики – где вообще у нас кликают люди. Некоторые системы аналитики так делают. Обычно используют <code className="fs-6">document.addEventListener('click'…)</code>, чтобы отлавливать все клики.</p>
            </li>
            <li>
                <p>Наша аналитика не будет работать над областью, где клики прекращаются <code className="fs-6">stopPropagation</code>. Увы, получилась «мёртвая зона».</p>
            </li>
        </ol>
        <p>Зачастую нет никакой необходимости прекращать всплытие. Задача, которая, казалось бы, требует этого, может быть решена иначе. Например, с помощью создания своего уникального события. Также мы можем записывать какую-то служебную информацию в объект <code className="fs-6">event</code> в одном обработчике, а читать в другом, таким образом мы можем сообщить обработчикам на родительских элементах информацию о том, что событие уже было как-то обработано.</p>
    </div>
    <h2>Погружение</h2>
    <p>Существует ещё одна фаза из жизненного цикла события – «погружение» (иногда её называют «перехват»). Она очень редко используется в реальном коде, однако тоже может быть полезной.</p>
    <p>Стандарт DOM Events описывает 3 фазы прохода события:</p>
    <ol>
        <li>
            <p><strong>Фаза погружения (capturing phase)</strong> – событие сначала идёт сверху вниз.</p>
        </li>
        <li>
            <p><strong>Фаза цели (target phase)</strong> – событие достигло целевого(исходного) элемента.</p>
        </li>
        <li>
            <p><strong>Фаза всплытия (bubbling stage)</strong> – событие начинает всплывать.</p>
        </li>
    </ol>
    <p>Картинка из спецификации демонстрирует, как это работает при клике по ячейке <code className="fs-6">{`<td>`}</code>, расположенной внутри таблицы:</p>
    <img className="mx-auto d-block" src={eventFlowImg} alt="events flow"></img>
    <p>То есть при клике на <code className="fs-6">{`<td>`}</code> событие путешествует по цепочке родителей сначала вниз к элементу (погружается), затем оно достигает целевой элемент (фаза цели), а потом идёт наверх (всплытие), вызывая по пути обработчики.</p>
    <p>Обработчики, добавленные через <code className="fs-6">{`on<event>`}</code>-свойство или через HTML-атрибуты, или через <code className="fs-6">addEventListener(event, handler)</code> с двумя аргументами, ничего не знают о фазе погружения, а работают только на 2-ой и 3-ей фазах.</p>
    <p>Чтобы поймать событие на стадии погружения, нужно использовать третий аргумент <code className="fs-6">capture</code> вот так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`elem.addEventListener(..., {capture: true})
// или просто "true", как сокращение для {capture: true}
elem.addEventListener(..., true)`}
        </code>
    </pre>
    <p>Существуют два варианта значений опции <code className="fs-6">capture</code>:</p>
    <ol>
        <li>
            <p>Если аргумент <code className="fs-6">false</code> (по умолчанию), то событие будет поймано при всплытии.</p>
        </li>
        <li>
            <p>Если аргумент <code className="fs-6">true</code>, то событие будет перехвачено при погружении.</p>
        </li>
    </ol>
    <p>Обратите внимание, что хоть и формально существует 3 фазы, 2-ую фазу («фазу цели»: событие достигло элемента) нельзя обработать отдельно, при её достижении вызываются все обработчики: и на всплытие, и на погружение.</p>
    <p>Давайте посмотрим и всплытие и погружение в действии:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`<style>
    body * {
        margin: 10px;
        border: 1px solid blue;
    }
</style>

<form>FORM
    <div>DIV
        <p>P</p>
    </div>
</form>

<script>
    for(let elem of document.querySelectorAll('*')) {
        elem.addEventListener("click", e => alert(\`Погружение: \${elem.tagName}\`), true);
        elem.addEventListener("click", e => alert(\`Всплытие: \${elem.tagName}\`));
    }
</script>`}
        </code>
    </pre>
    <p>Здесь обработчики навешиваются на <em>каждый</em> элемент в документе, чтобы увидеть в каком порядке они вызываются по мере прохода события.</p>
    <p>Если вы кликните по <code className="fs-6">{`<p>`}</code>, то последовательность следующая:</p>
    <ol>
        <li>
            <p><code className="fs-6">HTML → BODY → FORM → DIV</code> (фаза погружения, первый обработчик)</p>
        </li>
        <li>
            <p><code className="fs-6">P</code> (фаза цели, срабатывают обработчики, установленные и на погружение и на всплытие, так что выведется два раза)</p>
        </li>
        <li>
            <p><code className="fs-6">DIV → FORM → BODY → HTML</code> (фаза всплытия, второй обработчик)</p>
        </li>
    </ol>
    <p>Существует свойство <code className="fs-6">event.eventPhase</code>, содержащее номер фазы, на которой событие было поймано. Но оно используется редко, мы обычно и так знаем об этом в обработчике.</p>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Чтобы убрать обработчик <code className="fs-6">removeEventListener</code>, нужна та же фаза</strong></p>
        <p>Если мы добавили обработчик вот так <code className="fs-6">addEventListener(..., true)</code>, то мы должны передать то же значение аргумента <code className="fs-6">capture</code> в <code className="fs-6">removeEventListener(..., true)</code>, когда снимаем обработчик.</p>
    </div>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>На каждой фазе разные обработчики на одном элементе срабатывают в порядке назначения</strong></p>
        <p>Если у нас несколько обработчиков одного события, назначенных <code className="fs-6">addEventListener</code> на один элемент, в рамках одной фазы, то их порядок срабатывания – тот же, в котором они установлены:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`elem.addEventListener("click", e => alert(1)); // всегда сработает перед следующим
elem.addEventListener("click", e => alert(2));`}
            </code>
        </pre>
    </div>
    <h2>Итого</h2>
    <p>При наступлении события – самый глубоко вложенный элемент, на котором оно произошло, помечается как «целевой» (<code className="fs-6">event.target</code>).</p>
    <ul>
        <li>
            <p>Затем событие сначала двигается вниз от корня документа к <code className="fs-6">event.target</code>, по пути вызывая обработчики, поставленные через <code className="fs-6">addEventListener(...., true)</code>, где <code className="fs-6">true</code> – это сокращение для <code className="fs-6">{`{capture: true}`}</code>.</p>
        </li>
        <li>
            <p>Далее обработчики вызываются на целевом элементе.</p>
        </li>
        <li>
            <p>Далее событие двигается от <code className="fs-6">event.target</code> вверх к корню документа, по пути вызывая обработчики, поставленные через <code className="fs-6">{`on<event>`}</code> и <code className="fs-6">addEventListener</code> без третьего аргумента или с третьим аргументом равным <code className="fs-6">false</code>.</p>
        </li>
    </ul>
    <p>Каждый обработчик имеет доступ к свойствам события <code className="fs-6">event</code>:</p>
    <ul>
        <li>
            <p><code className="fs-6">event.target</code> – самый глубокий элемент, на котором произошло событие.</p>
        </li>
        <li>
            <p><code className="fs-6">event.currentTarget</code> (=<code className="fs-6">this</code>) – элемент, на котором в данный момент сработал обработчик (тот, на котором «висит» конкретный обработчик)</p>
        </li>
        <li>
            <p><code className="fs-6">event.eventPhase</code> – на какой фазе он сработал (погружение=1, фаза цели=2, всплытие=3).</p>
        </li>
    </ul>
    <p>Любой обработчик может остановить событие вызовом <code className="fs-6">event.stopPropagation()</code>, но делать это не рекомендуется, так как в дальнейшем это событие может понадобиться, иногда для самых неожиданных вещей.</p>
    <p>В современной разработке стадия погружения используется очень редко, обычно события обрабатываются во время всплытия. И в этом есть логика.</p>
    
    </>
    );
}

export default EventsBubblingCapturing;