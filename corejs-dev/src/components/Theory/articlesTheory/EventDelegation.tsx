import * as React from 'react';
import baguaBubbleImg from './Events-img/bagua-bubble.svg';

const EventDelegation: React.FC =() => {
    return (
    <>
    <h1>Делегирование событий</h1>
    <p>Всплытие и перехват событий позволяет реализовать один из самых важных приёмов разработки – <code className="fs-6">делегирование</code>.</p>
    <p>Идея в том, что если у нас есть много элементов, события на которых нужно обрабатывать похожим образом, то вместо того, чтобы назначать обработчик каждому, мы ставим один обработчик на их общего предка.</p>
    <p>Из него можно получить целевой элемент <code className="fs-6">event.target</code>, понять на каком именно потомке произошло событие и обработать его.</p>
    <p>Рассмотрим пример – диаграмму Ба-Гуа. Это таблица, отражающая древнюю китайскую философию.</p>
    <p>Её HTML:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
        {`<table id="bagua-table">
    <tr>
      <th colspan="3">Квадрат<em>Bagua</em>: Направление, Элемент, Цвет, Значение</th>
    </tr>
    <tr>
      <td class="nw"><strong>Северо-Запад</strong>
        <br>Металл
        <br>Серебро
        <br>Старейшины
      </td>
      <td class="n"><strong>Север</strong>
        <br>Вода
        <br>Синий
        <br>Перемены
      </td>
      <td class="ne"><strong>Северо-Восток</strong>
        <br>Земля
        <br>Жёлтый
        <br>Направление
      </td>
    </tr>
    <tr>
      <td class="w"><strong>Запад</strong>
        <br>Металл
        <br>Золото
        <br>Молодость
      </td>
      <td class="c"><strong>Центр</strong>
        <br>Всё
        <br>Пурпурный
        <br>Гармония
      </td>
      <td class="e"><strong>Восток</strong>
        <br>Дерево
        <br>Синий
        <br>Будущее
      </td>
    </tr>
    <tr>
      <td class="sw"><strong>Юго-Запад</strong>
        <br>Земля
        <br>Коричневый
        <br>Спокойствие
      </td>
      <td class="s"><strong>Юг</strong>
        <br>Огонь
        <br>Оранжевый
        <br>Слава
      </td>
      <td class="se"><strong>Юго-Восток</strong>
        <br>Дерево
        <br>Зелёный
        <br>Роман
      </td>
    </tr>

  </table>`}
        </code>
    </pre>
    <p>В этой таблице всего 9 ячеек, но могло бы быть и 99, и даже 9999, не важно.</p>
    <p><strong>Наша задача – реализовать подсветку ячейки <code className="fs-6">{`<td>`}</code> при клике.</strong></p>
    <p>Вместо того, чтобы назначать обработчик onclick для каждой ячейки <code className="fs-6">{`<td>`}</code> (их может быть очень много) – мы повесим «единый» обработчик на элемент <code className="fs-6">{`<table>`}</code>.</p>
    <p>Он будет использовать <code className="fs-6">event.target</code>, чтобы получить элемент, на котором произошло событие, и подсветить его.</p>
    <p>Код будет таким:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`let selectedTd;

table.onclick = function(event) {
    let target = event.target; // где был клик?

    if (target.tagName != 'TD') return; // не на TD? тогда не интересует

    highlight(target); // подсветить TD
};

function highlight(td) {
    if (selectedTd) { // убрать существующую подсветку, если есть
        selectedTd.classList.remove('highlight');
    }
    selectedTd = td;
    selectedTd.classList.add('highlight'); // подсветить новый td
}`}
        </code>
    </pre>
    <p>Такому коду нет разницы, сколько ячеек в таблице. Мы можем добавлять, удалять <code className="fs-6">{`<td>`}</code> из таблицы динамически в любое время, и подсветка будет стабильно работать.</p>
    <p>Однако, у текущей версии кода есть недостаток.</p>
    <p>Клик может быть не на теге <code className="fs-6">{`<td>`}</code>, а внутри него.</p>
    <p>В нашем случае, если взглянуть на HTML-код таблицы внимательно, видно, что ячейка <code className="fs-6">{`<td>`}</code> содержит вложенные теги, например <code className="fs-6">{`<strong>`}</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`<td>
    <strong>Северо-Запад</strong>
    ...
</td>`}
        </code>
    </pre>
    <p>Естественно, если клик произойдёт на элементе <code className="fs-6">{`<strong>`}</code>, то он станет значением <code className="fs-6">event.target</code>.</p>
    <img className="mx-auto d-block" src={baguaBubbleImg} alt="bubbling"></img>
    <p>Внутри обработчика <code className="fs-6">table.onclick</code> мы должны по <code className="fs-6">event.target</code> разобраться, был клик внутри <code className="fs-6">{`<td>`}</code> или нет.</p>
    <p>Вот улучшенный код:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`table.onclick = function(event) {
    let td = event.target.closest('td'); // (1)

    if (!td) return; // (2)

    if (!table.contains(td)) return; // (3)

    highlight(td); // (4)
};`}
        </code>
    </pre>
    <p>Разберём пример:</p>
    <ol>
        <li>
            <p>Метод <code className="fs-6">elem.closest(selector)</code> возвращает ближайшего предка, соответствующего селектору. В данном случае нам нужен <code className="fs-6">{`<td>`}</code>, находящийся выше по дереву от исходного элемента.</p>
        </li>
        <li>
            <p>Если <code className="fs-6">event.target</code> не содержится внутри элемента <code className="fs-6">{`<td>`}</code>, то вызов вернёт <code className="fs-6">null</code>, и ничего не произойдёт.</p>
        </li>
        <li>
            <p>Если таблицы вложенные, <code className="fs-6">event.target</code> может содержать элемент <code className="fs-6">{`<td>`}</code>, находящийся вне текущей таблицы. В таких случаях мы должны проверить, действительно ли это <code className="fs-6">{`<td>`}</code> нашей таблицы.</p>
        </li>
        <li>
            <p>И если это так, то подсвечиваем его.</p>
        </li>
    </ol>
    <p>В итоге мы получили короткий код подсветки, быстрый и эффективный, которому совершенно не важно, сколько всего в таблице <code className="fs-6">{`<td>`}</code>.</p>
    <h2>Применение делегирования: действия в разметке</h2>
    <p>Есть и другие применения делегирования.</p>
    <p>Например, нам нужно сделать меню с разными кнопками: «Сохранить (save)», «Загрузить (load)», «Поиск (search)» и т.д. И есть объект с соответствующими методами <code className="fs-6">save</code>, <code className="fs-6">load</code>, <code className="fs-6">search</code>… Как их состыковать?</p>
    <p>Первое, что может прийти в голову – это найти каждую кнопку и назначить ей свой обработчик среди методов объекта. Но существует более элегантное решение. Мы можем добавить один обработчик для всего меню и атрибуты <code className="fs-6">data-action</code> для каждой кнопки в соответствии с методами, которые они вызывают:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`<button data-action="save">Нажмите, чтобы Сохранить</button>`}
        </code>
    </pre>
    <p>Обработчик считывает содержимое атрибута и выполняет метод. Взгляните на рабочий пример:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`<div id="menu">
    <button data-action="save">Сохранить</button>
    <button data-action="load">Загрузить</button>
    <button data-action="search">Поиск</button>
</div>

<script>
    class Menu {
        constructor(elem) {
            this._elem = elem;
            elem.onclick = this.onClick.bind(this); // (*)
        }

        save() {
            alert('сохраняю');
        }

        load() {
            alert('загружаю');
        }

        search() {
            alert('ищу');
        }

        onClick(event) {
            let action = event.target.dataset.action;
            if (action) {
                this[action]();
            }
        }
    }

    new Menu(menu);
</script>`}
        </code>
    </pre>
    <p>Обратите внимание, что метод <code className="fs-6">this.onClick</code> в строке, отмеченной звёздочкой (*), привязывается к контексту текущего объекта <code className="fs-6">this</code>. Это важно, т.к. иначе <code className="fs-6">this</code> внутри него будет ссылаться на DOM-элемент (<code className="fs-6">elem</code>), а не на объект <code className="fs-6">Menu</code>, и <code className="fs-6">this[action]</code> будет не тем, что нам нужно.</p>
    <h2>Итого</h2>
    <p>Делегирование событий – это здорово! Пожалуй, это один из самых полезных приёмов для работы с DOM.</p>
    <p>Он часто используется, если есть много элементов, обработка которых очень схожа, но не только для этого.</p>
    <p>Алгоритм:</p>
    <ol>
        <li>
            <p>Вешаем обработчик на контейнер.</p>
        </li>
        <li>
            <p>В обработчике проверяем исходный элемент <code className="fs-6">event.target</code>.</p>
        </li>
        <li>
            <p>Если событие произошло внутри нужного нам элемента, то обрабатываем его.</p>
        </li>
    </ol>

    </>
    );
}

export default EventDelegation;