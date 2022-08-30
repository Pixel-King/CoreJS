import * as React from 'react';
import ballImg from './Events-img/ball_shift.svg';

const DragDrop: React.FC =() => {
    return (
    <>

    <h1>Drag'n'Drop с событиями мыши</h1>
    <p>Drag'n'Drop – отличный способ улучшить интерфейс. Захват элемента мышкой и его перенос визуально упростят что угодно: от копирования и перемещения документов (как в файловых менеджерах) до оформления заказа («положить в корзину»).</p>
    <p>В современном стандарте HTML5 есть <a href="https://html.spec.whatwg.org/multipage/interaction.html#dnd">раздел о Drag and Drop</a> – и там есть специальные события именно для Drag'n'Drop переноса, такие как <strong>dragstart</strong>, <strong>dragend</strong> и так далее.</p>
    <p>Они интересны тем, что позволяют легко решать простые задачи. Например, можно перетащить файл в браузер, так что JS получит доступ к его содержимому.</p>
    <p>Но у них есть и ограничения. Например, нельзя организовать перенос «только по горизонтали» или «только по вертикали». Также нельзя ограничить перенос внутри заданной зоны. Есть и другие интерфейсные задачи, которые такими встроенными событиями не реализуемы. Кроме того, мобильные устройства плохо их поддерживают.</p>
    <p>Здесь мы будем рассматривать Drag'n'Drop при помощи событий мыши.</p>
    <h2>Алгоритм Drag'n'Drop</h2>
    <p>Базовый алгоритм Drag'n'Drop выглядит так:</p>
    <ol>
        <li>
            <p>При <strong>mousedown</strong> – готовим элемент к перемещению, если необходимо (например, создаём его копию).</p>
        </li>
        <li>
            <p>Затем при <strong>mousemove</strong> передвигаем элемент на новые координаты путём смены <strong>left/top</strong> и <strong>position:absolute</strong>.</p>
        </li>
        <li>
            <p>При <strong>mouseup</strong> – остановить перенос элемента и произвести все действия, связанные с окончанием Drag'n'Drop.</p>
        </li>
    </ol>
    <p>В следующем примере эти шаги реализованы для переноса мяча:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`ball.onmousedown = function(event) { // (1) отследить нажатие

    // (2) подготовить к перемещению:
    // разместить поверх остального содержимого и в абсолютных координатах
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    // переместим в body, чтобы мяч был точно не внутри position:relative
    document.body.append(ball);
    // и установим абсолютно спозиционированный мяч под курсор

    moveAt(event.pageX, event.pageY);

    // передвинуть мяч под координаты курсора
    // и сдвинуть на половину ширины/высоты для центрирования
        function moveAt(pageX, pageY) {
            ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
            ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        // (3) перемещать по экрану
        document.addEventListener('mousemove', onMouseMove);

        // (4) положить мяч, удалить более ненужные обработчики событий
        ball.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            ball.onmouseup = null;
        };

};`}
        </code>
    </pre>
    <p>Если запустить этот код, то мы заметим нечто странное. При начале переноса мяч «раздваивается» и переносится не сам мяч, а его «клон».</p>
    <p>Всё потому, что браузер имеет свой собственный Drag'n'Drop, который автоматически запускается и вступает в конфликт с нашим. Это происходит именно для картинок и некоторых других элементов.</p>
    <p>Его нужно отключить:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`ball.ondragstart = function() {
    return false;
};`}
        </code>
    </pre>
    <p>Теперь всё будет в порядке.</p>
    <p>Ещё одна деталь – событие <strong>mousemove</strong> отслеживается на <strong>document</strong>, а не на <strong>ball</strong>. С первого взгляда кажется, что мышь всегда над мячом и обработчик <strong>mousemove</strong> можно повесить на сам мяч, а не на документ.</p>
    <p>Но, как мы помним, событие <strong>mousemove</strong> возникает хоть и часто, но не для каждого пикселя. Поэтому из-за быстрого движения указатель может спрыгнуть с мяча и оказаться где-нибудь в середине документа (или даже за пределами окна).</p>
    <p>Вот почему мы должны отслеживать mousemove на всём <strong>document</strong>, чтобы поймать его.</p>
    <h2>Правильное позиционирование</h2>
    <p>В примерах выше мяч позиционируется так, что его центр оказывается под указателем мыши:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
ball.style.top = pageY - ball.offsetHeight / 2 + 'px';`}
        </code>
    </pre>
    <p>Неплохо, но есть побочные эффекты. Мы, для начала переноса, можем нажать мышью на любом месте мяча. Если мячик «взят» за самый край – то в начале переноса он резко «прыгает», центрируясь под указателем мыши.</p>
    <p>Было бы лучше, если бы изначальный сдвиг курсора относительно элемента сохранялся.</p>
    <p>Где захватили, за ту «часть элемента» и переносим:</p>
    <img className="mx-auto d-block" src={ballImg} alt="ball"></img>
    <p>Обновим наш алгоритм:</p>
    <ol>
        <li>
            <p>Когда человек нажимает на мячик (mousedown) – запомним расстояние от курсора до левого верхнего угла шара в переменных shiftX/shiftY. Далее будем удерживать это расстояние при перетаскивании.</p>
            <p>Чтобы получить этот сдвиг, мы можем вычесть координаты:</p>
            <pre className="text-bg-dark px-3 py-3">
                <code className="fs-6">
                    {`// onmousedown
let shiftX = event.clientX - ball.getBoundingClientRect().left;
let shiftY = event.clientY - ball.getBoundingClientRect().top;`}
                </code>
            </pre>
        </li>
        <li>
            <p>Далее при переносе мяча мы позиционируем его с тем же сдвигом относительно указателя мыши, вот так:</p>
            <pre className="text-bg-dark px-3 py-3">
                <code className="fs-6">
                    {`// onmousemove
// ball has position:absoute
ball.style.left = event.pageX - shiftX + 'px';
ball.style.top = event.pageY - shiftY + 'px';`}
                </code>
            </pre>
        </li>
    </ol>
    <p>Итоговый код с правильным позиционированием:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`ball.onmousedown = function(event) {

    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;

    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);

    moveAt(event.pageX, event.pageY);

    // переносит мяч на координаты (pageX, pageY),
    // дополнительно учитывая изначальный сдвиг относительно указателя мыши
    function moveAt(pageX, pageY) {
        ball.style.left = pageX - shiftX + 'px';
        ball.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // передвигаем мяч при событии mousemove
    document.addEventListener('mousemove', onMouseMove);

    // отпустить мяч, удалить ненужные обработчики
    ball.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
    };

};

ball.ondragstart = function() {
    return false;
};`}
        </code>
    </pre>
    <h2>Цели переноса (droppable)</h2>
    <p>В предыдущих примерах мяч можно было бросить просто где угодно в пределах окна. В реальности мы обычно берём один элемент и перетаскиваем в другой. Например, «файл» в «папку» или что-то ещё.</p>
    <p>Абстрактно говоря, мы берём перетаскиваемый (draggable) элемент и помещаем его в другой элемент «цель переноса» (droppable).</p>
    <p>Нам нужно знать:</p>
    <ul>
        <li>
            <p>куда пользователь положил элемент в конце переноса, чтобы обработать его окончание</p>
        </li>
        <li>
            <p>и, желательно, над какой потенциальной целью (элемент, куда можно положить, например, изображение папки) он находится в процессе переноса, чтобы подсветить её.</p>
        </li>
    </ul>
    <p>Решение довольно интересное и немного хитрое, давайте рассмотрим его.</p>
    <p>Какой может быть первая мысль? Возможно, установить обработчики событий <strong>mouseover/mouseup</strong> на элемент – потенциальную цель переноса?</p>
    <p>Но это не работает.</p>
    <p>Проблема в том, что при перемещении перетаскиваемый элемент всегда находится поверх других элементов. А события мыши срабатывают только на верхнем элементе, но не на нижнем.</p>
    <p>Мяч всегда находится поверх других элементов, поэтому события срабатывают на нём. Какие бы обработчики мы ни ставили на нижние элементы, они не будут выполнены.</p>
    <p>Вот почему первоначальная идея поставить обработчики на потенциальные цели переноса нереализуема. Обработчики не сработают.</p>
    <p>Так что же делать?</p>
    <p>Существует метод <code className="fs-6">document.elementFromPoint(clientX, clientY)</code>. Он возвращает наиболее глубоко вложенный элемент по заданным координатам окна (или <code className="fs-6">null</code>, если указанные координаты находятся за пределами окна).</p>
    <p>Мы можем использовать его, чтобы из любого обработчика событий мыши выяснить, над какой мы потенциальной целью переноса, вот так:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`// внутри обработчика события мыши
ball.hidden = true; // (*) прячем переносимый элемент

let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
// elemBelow - элемент под мячом (возможная цель переноса)

ball.hidden = false;`}
        </code>
    </pre>
    <p>Заметим, нам нужно спрятать мяч перед вызовом функции <strong>(*)</strong>. В противном случае по этим координатам мы будем получать мяч, ведь это и есть элемент непосредственно под указателем: <code className="fs-6">elemBelow=ball</code>. Так что мы прячем его и тут же показываем обратно.</p>
    <p>Мы можем использовать этот код для проверки того, над каким элементом мы «летим», в любое время. И обработать окончание переноса, когда оно случится.</p>
    <p>Расширенный код <code className="fs-6">onMouseMove</code> с поиском потенциальных целей переноса:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`// потенциальная цель переноса, над которой мы пролетаем прямо сейчас
let currentDroppable = null;

function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    ball.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    ball.hidden = false;

    // событие mousemove может произойти и когда указатель за пределами окна
    // (мяч перетащили за пределы экрана)

    // если clientX/clientY за пределами окна, elementFromPoint вернёт null
    if (!elemBelow) return;

    // потенциальные цели переноса помечены классом droppable (может быть и другая логика)
    let droppableBelow = elemBelow.closest('.droppable');

    if (currentDroppable != droppableBelow) {
        // мы либо залетаем на цель, либо улетаем из неё
        // внимание: оба значения могут быть null
        //   currentDroppable=null,
        //     если мы были не над droppable до этого события (например, над пустым пространством)
        //   droppableBelow=null,
        //     если мы не над droppable именно сейчас, во время этого события

            if (currentDroppable) {
                // логика обработки процесса "вылета" из droppable (удаляем подсветку)
                leaveDroppable(currentDroppable);
            }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
            // логика обработки процесса, когда мы "влетаем" в элемент droppable
            enterDroppable(currentDroppable);
        }
    }
}`}
        </code>
    </pre>
    <p>Теперь в течение всего процесса в переменной <code className="fs-6">currentDroppable</code> мы храним текущую потенциальную цель переноса, над которой мы сейчас, можем её подсветить или сделать что-то ещё.</p>
    
    <h2>Итого</h2>
    <p>Мы рассмотрели основной алгоритм Drag'n'Drop.</p>
    <p>Ключевые идеи:</p>
    <ol>
        <li>
            <p>Поток событий: <strong>ball.mousedown → document.mousemove → ball.mouseup</strong> (не забудьте отменить браузерный <code className="fs-6">ondragstart</code>).</p>
        </li>
        <li>
            <p>В начале перетаскивания: запоминаем начальное смещение указателя относительно элемента: <strong>shiftX/shiftY</strong> – и сохраняем его при перетаскивании.</p>
        </li>
        <li>
            <p>Выявляем потенциальные цели переноса под указателем с помощью <code className="fs-6">document.elementFromPoint</code>.</p>
        </li>
    </ol>
    <p>На этой основе можно сделать многое.</p>
    <ul>
        <li>
            <p>На <strong>mouseup</strong> – по-разному завершать перенос: изменять данные, перемещать элементы.</p>
        </li>
        <li>
            <p>Можно подсвечивать элементы, пока мышь «пролетает» над ними.</p>
        </li>
        <li>
            <p>Можно ограничить перетаскивание определённой областью или направлением.</p>
        </li>
        <li>
            <p>Можно использовать делегирование событий для <strong>mousedown/up</strong>. Один обработчик событий на большой зоне, который проверяет <code className="fs-6">event.target</code>, может управлять Drag'n'Drop для сотен элементов.</p>
        </li>
        <li>
            <p>И так далее.</p>
        </li>
    </ul>
    <p>Существуют фреймворки, которые строят архитектуру поверх этого алгоритма, создавая такие классы, как <code className="fs-6">DragZone</code>, <code className="fs-6">Droppable</code>, <code className="fs-6">Draggable</code>. Большинство из них делают вещи, аналогичные описанным выше. Вы можете и сами создать вашу собственную реализацию переноса, как видите, это достаточно просто, возможно, проще, чем адаптация чего-то готового.</p>

    </>
    );
}

export default DragDrop;