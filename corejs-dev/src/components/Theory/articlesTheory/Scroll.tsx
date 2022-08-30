import * as React from 'react';

const Scroll: React.FC =() => {
    return (
    <>
    <h1>Прокрутка</h1>
    <p>Событие прокрутки <strong>scroll</strong> позволяет реагировать на прокрутку страницы или элемента. Есть много хороших вещей, которые при этом можно сделать.</p>
    <p>Например:</p>
    <ul>
        <li>
            <p>Показать/скрыть дополнительные элементы управления или информацию, основываясь на том, в какой части документа находится пользователь.</p>
        </li>
        <li>
            <p>Подгрузить данные, когда пользователь прокручивает страницу вниз до конца.</p>
        </li>
    </ul>
    <p>Вот небольшая функция для отображения текущей прокрутки:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`window.addEventListener('scroll', function() {
    document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
});`}
        </code>
    </pre>
    <p>Событие <strong>scroll</strong> работает как на <strong>window</strong>, так и на других элементах, на которых включена прокрутка.</p>
    <h2>Предотвращение прокрутки</h2>
    <p>Как можно сделать что-то непрокручиваемым?</p>
    <p>Нельзя предотвратить прокрутку, используя <code className="fs-6">event.preventDefault()</code> в обработчике <code className="fs-6">onscroll</code>, потому что он срабатывает после того, как прокрутка уже произошла.</p>
    <p>Но можно предотвратить прокрутку, используя <code className="fs-6">event.preventDefault()</code> на событии, которое вызывает прокрутку, например, на событии keydown для клавиш <strong>pageUp</strong> и <strong>pageDown</strong>.</p>
    <p>Если поставить на них обработчики, в которых вызвать <code className="fs-6">event.preventDefault()</code>, то прокрутка не начнётся.</p>
    <p>Способов инициировать прокрутку много, поэтому более надёжный способ – использовать CSS, свойство <code className="fs-6">overflow</code>.</p>

    </>
    );
}

export default Scroll;