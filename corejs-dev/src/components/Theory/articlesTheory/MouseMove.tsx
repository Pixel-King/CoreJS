import * as React from 'react';
import mouseOverBubbleNestedImg from './Events-img/mouseover-bubble-nested.svg';
import mouseOverMouseOut from './Events-img/mouseover-mouseout.svg';
import mouseOverOutFromOutsideImg from './Events-img/mouseover-mouseout-from-outside.svg';
import mouseOverOutOverElemsImg from './Events-img/mouseover-mouseout-over-elems.svg';
import mouseOverToChildImg from './Events-img/mouseover-to-child.svg';

const MouseMove: React.FC =() => {
    return (
    <>

    <h1>Движение мыши: mouseover/out, mouseenter/leave</h1>
    <h2>События mouseover/mouseout, relatedTarget</h2>
    <p>Событие <strong>mouseover</strong> происходит в момент, когда курсор оказывается над элементом, а событие <strong>mouseout</strong> – в момент, когда курсор уходит с элемента.</p>
    <img className="mx-auto d-block" src={mouseOverMouseOut} alt="mouse over mouse out"></img>
    <p>Эти события являются особенными, потому что у них имеется свойство <code className="fs-6">relatedTarget</code>. Оно «дополняет» <code className="fs-6">target</code>. Когда мышь переходит с одного элемента на другой, то один из них будет <code className="fs-6">target</code>, а другой <code className="fs-6">relatedTarget</code>.</p>
    <p>Для события <strong>mouseover</strong>:</p>
    <ul>
        <li>
            <p><code className="fs-6">event.target</code> – это элемент, <em>на который</em> курсор перешёл.</p>
        </li>
        <li>
            <p><code className="fs-6">event.relatedTarget</code> – это элемент, <em>с которого</em> курсор ушёл (<strong>relatedTarget → target</strong>).</p>
        </li>
    </ul>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Свойство <code className="fs-6">relatedTarget</code> может быть <code className="fs-6">null</code></strong></p>
        <p>Это нормально и означает, что указатель мыши перешёл не с другого элемента, а из-за пределов окна браузера. Или же, наоборот, ушёл за пределы окна.</p>
    </div>
    <h2>Пропуск элементов</h2>
    <p>Событие <strong>mousemove</strong> происходит при движении мыши. Однако, это не означает, что указанное событие генерируется при прохождении каждого пикселя.</p>
    <p>Браузер периодически проверяет позицию курсора и, заметив изменения, генерирует события <strong>mousemove</strong>.</p>
    <p>Это означает, что если пользователь двигает мышкой очень быстро, то некоторые DOM-элементы могут быть пропущены:</p>
    <img className="mx-auto d-block" src={mouseOverOutOverElemsImg} alt="over elements"></img>
    <p>Если курсор мыши передвинуть очень быстро с элемента <strong>#FROM</strong> на элемент <strong>#TO</strong>, как это показано выше, то лежащие между ними элементы <code className="fs-6">{`<div>`}</code> (или некоторые из них) могут быть пропущены. Событие mouseout может запуститься на элементе <strong>#FROM</strong> и затем сразу же сгенерируется <strong>mouseover</strong> на элементе <strong>#TO</strong>.</p>
    <p>Это хорошо с точки зрения производительности, потому что если промежуточных элементов много, вряд ли мы действительно хотим обрабатывать вход и выход для каждого.</p>
    <p>С другой стороны, мы должны иметь в виду, что указатель мыши не «посещает» все элементы на своём пути. Он может и «прыгать».</p>
    <p>В частности, возможно, что указатель запрыгнет в середину страницы из-за пределов окна браузера. В этом случае значение <code className="fs-6">relatedTarget</code> будет <code className="fs-6">null</code>, так как курсор пришёл «из ниоткуда»:</p>
    <img className="mx-auto d-block" src={mouseOverOutFromOutsideImg} alt="from outside"></img>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p><strong>Если был <em>mouseover</em>, то будет и <em>mouseout</em></strong></p>
        <p>Несмотря на то, что при быстрых переходах промежуточные элементы могут игнорироваться, в одном мы можем быть уверены: элемент может быть пропущен только целиком.</p>
        <p>Если указатель «официально» зашёл на элемент, то есть было событие <strong>mouseover</strong>, то при выходе с него обязательно будет <strong>mouseout</strong>.</p>
    </div>
    <h2>Событие mouseout при переходе на потомка</h2>
    <p>Важная особенность события <strong>mouseout</strong> – оно генерируется в том числе, когда указатель переходит с элемента на его потомка.</p>
    <p>То есть, визуально указатель всё ещё на элементе, но мы получим <strong>mouseout</strong>!</p>
    <img className="mx-auto d-block" src={mouseOverToChildImg} alt="mouse over to child"></img>
    <p>Это выглядит странно, но легко объясняется.</p>
    <p><strong>По логике браузера, курсор мыши может быть только над одним элементом в любой момент времени – над самым глубоко вложенным и верхним по z-index.</strong></p>
    <p>Таким образом, если курсор переходит на другой элемент (пусть даже дочерний), то он покидает предыдущий.</p>
    <p>Обратите внимание на важную деталь.</p>
    <p>Событие <strong>mouseover</strong>, происходящее на потомке, всплывает. Поэтому если на родительском элементе есть такой обработчик, то оно его вызовет.</p>
    <img className="mx-auto d-block" src={mouseOverBubbleNestedImg} alt="mouse over bubble nested"></img>
    <p>При переходе с родителя элемента на потомка – на родителе сработают два обработчика: и <strong>mouseout</strong> и <strong>mouseover</strong>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            {`parent.onmouseout = function(event) {
    /* event.target: внешний элемент */
};
parent.onmouseover = function(event) {
    /* event.target: внутренний элемент (всплыло) */
};`}
        </code>
    </pre>
    <p>Если код внутри обработчиков не смотрит на <code className="fs-6">target</code>, то он подумает, что мышь ушла с элемента <em>parent</em> и вернулась на него обратно. Но это не так! Мышь никуда не уходила, она просто перешла на потомка.</p>
    <p>Если при уходе с элемента что-то происходит, например, запускается анимация, то такая интерпретация происходящего может давать нежелательные побочные эффекты.</p>
    <p>Чтобы этого избежать, можно смотреть на <code className="fs-6">relatedTarget</code> и, если мышь всё ещё внутри элемента, то игнорировать такие события.</p>
    <p>Или же можно использовать другие события: <strong>mouseenter</strong> и <strong>mouseleave</strong>, которые мы сейчас изучим, с ними такая проблема не возникает.</p>
    <h2>События mouseenter и mouseleave</h2>
    <p>События <strong>mouseenter/mouseleave</strong> похожи на <strong>mouseover/mouseout</strong>. Они тоже генерируются, когда курсор мыши переходит на элемент или покидает его.</p>
    <p>Но есть и пара важных отличий:</p>
    <ol>
        <li>
            <p>Переходы внутри элемента, на его потомки и с них, не считаются.</p>
        </li>
        <li>
            <p>События <strong>mouseenter/mouseleave</strong> не всплывают.</p>
        </li>
    </ol>
    <p>Когда указатель появляется над элементом – генерируется <strong>mouseenter</strong>, причём не имеет значения, где именно указатель: на самом элементе или на его потомке.</p>
    <p>Событие <strong>mouseleave</strong> происходит, когда курсор покидает элемент.</p>
    <h2>Итого</h2>
    <p>Особенности, на которые стоит обратить внимание:</p>
    <ul>
        <li>
            <p>При быстром движении мыши события не будут возникать на промежуточных элементах.</p>
        </li>
        <li>
            <p>События <strong>mouseover/out</strong> и <strong>mouseenter/leave</strong> имеют дополнительное свойство: <code className="fs-6">relatedTarget</code>. Оно дополняет свойство <code className="fs-6">target</code> и содержит ссылку на элемент, с/на который мы переходим.</p>
        </li>
    </ul>
    <p>События <strong>mouseover/out</strong> возникают, даже когда происходит переход с родительского элемента на потомка. С точки зрения браузера, курсор мыши может быть только над одним элементом в любой момент времени – над самым глубоко вложенным.</p>
    <p>События <strong>mouseenter/leave</strong> в этом отличаются. Они генерируются, когда курсор переходит на элемент в целом или уходит с него. Также они не всплывают.</p>

    </>
    );
}

export default MouseMove;