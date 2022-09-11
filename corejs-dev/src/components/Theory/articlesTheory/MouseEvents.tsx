import * as React from 'react';

const MouseEvents: React.FC =() => {
    return (
    <>

    <h1>Основы событий мыши</h1>
    <p>В этой главе мы более детально рассмотрим события мыши и их свойства.</p>
    <p>Сразу заметим: эти события бывают не только из-за мыши, но и эмулируются на других устройствах, в частности, на мобильных, для совместимости.</p>
    <h2>Типы событий мыши</h2>
    <p>Мы уже видели некоторые из этих событий:</p>
    <p><strong>mousedown/mouseup</strong>: кнопка мыши нажата/отпущена над элементом.</p>
    <p><strong>mouseover/mouseout</strong>: курсор мыши появляется над элементом и уходит с него.</p>
    <p><strong>mousemove</strong>: каждое движение мыши над элементом генерирует это событие.</p>
    <p><strong>click</strong>: вызывается при <strong>mousedown</strong>, а затем <strong>mouseup</strong> над одним и тем же элементом, если использовалась левая кнопка мыши.</p>
    <p><strong>dblclick</strong>: вызывается двойным кликом на элементе.</p>
    <p><strong>contextmenu</strong>: вызывается при попытке открытия контекстного меню, как правило, нажатием правой кнопки мыши. Но, заметим, это не совсем событие мыши, оно может вызываться и специальной клавишей клавиатуры.</p>
    <h2>Порядок событий</h2>
    <p>Как вы можете видеть из приведённого выше списка, действие пользователя может вызвать несколько событий.</p>
    <p>Например, клик мышью вначале вызывает <strong>mousedown</strong>, когда кнопка нажата, затем <strong>mouseup</strong> и <strong>click</strong>, когда она отпущена.</p>
    <p>В случае, когда одно действие инициирует несколько событий, порядок их выполнения фиксирован. То есть обработчики событий вызываются в следующем порядке: <strong>mousedown → mouseup → click</strong>.</p>
    <h2>Кнопки мыши</h2>
    <p>События, связанные с кликом, всегда имеют свойство <code className="fs-6">button</code>, которое позволяет получить конкретную кнопку мыши.</p>
    <p>Обычно мы не используем его для событий <strong>click</strong> и <strong>contextmenu</strong>, потому что первое происходит только при щелчке левой кнопкой мыши, а второе – только при щелчке правой кнопкой мыши.</p>
    <p>С другой стороны, обработчикам <strong>mousedown</strong> и <strong>mouseup</strong> может потребоваться <code className="fs-6">event.button</code>, потому что эти события срабатывают на любую кнопку, таким образом <code className="fs-6">button</code> позволяет различать «нажатие правой кнопки» и «нажатие левой кнопки».</p>
    <p>Возможными значениями <code className="fs-6">event.button</code> являются:</p>
    <table className="table table-bordered text-center">
            <thead>
                <tr>
                    <th scope="col"><p><strong>Состояние кнопки</strong></p></th>
                    <th scope="col"><code className="fs-6">event.button</code></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><p>Левая кнопка (основная)</p></td>
                    <td><p>0</p></td>
                </tr>
                <tr>
                    <td><p>Средняя кнопка (вспомогательная)</p></td>
                    <td><p>1</p></td>
                </tr>
                <tr>
                    <td><p>Правая кнопка (вторичная)</p></td>
                    <td><p>2</p></td>
                </tr>
                <tr>
                    <td><p>Кнопка X1 (назад)</p></td>
                    <td><p>3</p></td>
                </tr>
                <tr>
                    <td><p>Кнопка X2 (вперёд)</p></td>
                    <td><p>4</p></td>
                </tr>
            </tbody>
        </table>
        <p>Большинство мышек имеют только левую и правую кнопку, поэтому возможные значения это 0 или 2. Сенсорные устройства также генерируют аналогичные события, когда кто-то нажимает на них.</p>
        <p>Также есть свойство <code className="fs-6">event.buttons</code>, в котором все нажатые в данный момент кнопки представлены в виде целого числа, по одному биту на кнопку. На практике это свойство используется очень редко, вы можете найти подробную информацию по адресу <a href="https://developer.mozilla.org/ru/docs/Web/api/MouseEvent/buttons">MDN</a>, если вам это когда-нибудь понадобится.</p>
        <div className="fst-italic border-3 border-start border-warning px-3">
            <p><strong>Устаревшее свойство <code className="fs-6">event.which</code></strong></p>
            <p>В старом коде вы можете встретить <code className="fs-6">event.which</code> свойство – это старый нестандартный способ получения кнопки с возможными значениями:</p>
            <ul>
                <li>
                    <p><code className="fs-6">event.which == 1</code> – левая кнопка,</p>
                </li>
                <li>
                    <p><code className="fs-6">event.which == 2</code> – средняя кнопка,</p>
                </li>
                <li>
                    <p><code className="fs-6">event.which == 3</code> – правая кнопка.</p>
                </li>
            </ul>
            <p>На данный момент <code className="fs-6">event.which</code> устарел, нам не следует его использовать.</p>
        </div>
        <h2>Модификаторы: shift, alt, ctrl и meta</h2>
        <p>Все события мыши включают в себя информацию о нажатых клавишах-модификаторах.</p>
        <p>Свойства события:</p>
        <ul>
            <li>
                <p><code className="fs-6">shiftKey</code>: <strong>Shift</strong></p>
            </li>
            <li>
                <p><code className="fs-6">altKey</code>: <strong>Alt</strong> (или <strong>Opt</strong> для Mac)</p>
            </li>
            <li>
                <p><code className="fs-6">ctrlKey</code>: <strong>Ctrl</strong></p>
            </li>
            <li>
                <p><code className="fs-6">metaKey</code>: <strong>Cmd</strong> для Mac</p>
            </li>
        </ul>
        <p>Они равны <code className="fs-6">true</code>, если во время события была нажата соответствующая клавиша.</p>
        <p>Например, кнопка внизу работает только при комбинации <strong>Alt + Shift + клик</strong>:</p>
        <pre className="text-bg-dark px-3 py-3">
            <code className="fs-6">
                {`<button id="button">Нажми Alt+Shift+Click на мне!</button>

<script>
    button.onclick = function(event) {
        if (event.altKey && event.shiftKey) {
             alert('Ура!');
        }
    };
</script>`}
            </code>
        </pre>

        <div className="fst-italic border-3 border-start border-warning px-3">
            <p><strong>Внимание: обычно на Mac используется клавиша <em>Cmd</em> вместо <em>Ctrl</em></strong></p>
            <p>В Windows и Linux клавишами-модификаторами являются <strong>Alt</strong>, <strong>Shift</strong> и <strong>Ctrl</strong>. На Mac есть ещё одна: <strong>Cmd</strong>, которой соответствует свойство <code className="fs-6">metaKey</code>.</p>
            <p>В большинстве приложений, когда в Windows/Linux используется <strong>Ctrl</strong>, на Mac используется <strong>Cmd</strong>.</p>
            <p>То есть, когда пользователь Windows нажимает <strong>Ctrl + Enter</strong> и <strong>Ctrl + A</strong>, пользователь Mac нажимает <strong>Cmd + Enter</strong> или <strong>Cmd + A</strong>, и так далее.</p>
            <p>Поэтому, если мы хотим поддерживать такие комбинации, как <strong>Ctrl + клик</strong>, то для Mac имеет смысл использовать <strong>Cmd + клик</strong>. Это удобней для пользователей Mac.</p>
            <p>Даже если мы и хотели бы заставить людей на Mac использовать именно <strong>Ctrl + клик</strong>, это довольно сложно. Проблема в том, что левый клик в сочетании с <strong>Ctrl</strong> интерпретируется как <em>правый клик</em> на MacOS и генерирует событие <strong>contextmenu</strong>, а не <strong>click</strong> как на Windows/Linux.</p>
            <p>Поэтому, если мы хотим, чтобы пользователям всех операционных систем было удобно, то вместе с <strong>ctrlKey</strong> нам нужно проверять <strong>metaKey</strong>.</p>
            <p>Для JS-кода это означает, что мы должны проверить <code className="fs-6">if (event.ctrlKey || event.metaKey)</code>.</p>
        </div>

        <div className="fst-italic border-3 border-start border-warning px-3">
            <p><strong>Не забывайте про мобильные устройства</strong></p>
            <p>Комбинации клавиш хороши в качестве дополнения к рабочему процессу. Так что, если посетитель использует клавиатуру – они работают.</p>
            <p>Но если на их устройстве его нет – тогда должен быть способ жить без клавиш-модификаторов.</p>
        </div>
        <h2>Координаты: clientX/Y, pageX/Y</h2>
        <p>Все события мыши имеют координаты двух видов:</p>
        <ol>
            <li>
                <p>Относительно окна: <strong>clientX</strong> и <strong>clientY</strong>.</p>
            </li>
            <li>
                <p>Относительно документа: <strong>pageX</strong> и <strong>pageY</strong>.</p>
            </li>
        </ol>
        <p>Jтносительные координаты документа <strong>pageX/Y</strong> отсчитываются от левого верхнего угла документа и не меняются при прокрутке страницы, в то время как <strong>clientX/Y</strong> отсчитываются от левого верхнего угла текущего окна. Когда страница прокручивается, они меняются.</p>
        <p>Например, если у нас есть окно размером 500x500, и курсор мыши находится в левом верхнем углу, то значения <strong>clientX</strong> и <strong>clientY</strong> равны 0, независимо от того, как прокручивается страница.</p>
        <p>А если мышь находится в центре окна, то значения <strong>clientX</strong> и <strong>clientY</strong> равны 250 независимо от того, в каком месте документа она находится и до какого места документ прокручен. В этом они похожи на <strong>position:fixed</strong>.</p>
        <h2>Итого</h2>
        <p>События мыши имеют следующие свойства:</p>
        <ul>
            <li>
                <p>Кнопка: <code className="fs-6">button</code>.</p>
            </li>
            <li>
                <p>Клавиши-модификаторы (<code className="fs-6">true</code> если нажаты): <strong>altKey</strong>, <strong>ctrlKey</strong>, <strong>shiftKey</strong> и <strong>metaKey</strong> (Mac).</p>
                <ul>
                    <li>
                        <p>Если вы планируете обработать <strong>Ctrl</strong>, то не забудьте, что пользователи Mac обычно используют <strong>Cmd</strong>, поэтому лучше проверить <code className="fs-6">if (e.metaKey || e.ctrlKey)</code>.</p>
                    </li>
                </ul>
            </li>
            <li>
                <p>Координаты относительно окна: <strong>clientX/clientY</strong>.</p>
            </li>
            <li>
                <p>Координаты относительно документа: <strong>pageX/pageY</strong>.</p>
            </li>
        </ul>

    </>
    );
}

export default MouseEvents;