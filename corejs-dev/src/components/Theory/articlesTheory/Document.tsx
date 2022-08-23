import * as React from 'react';

const Document: React.FC =() => {
    return (
    <>
    <h1>Document</h1>
    <p>Каждая веб-страница, которая загружается в браузер, имеет свой собственный объект <em>document</em>. Интерфейс документа служит точкой входа для получения содержимого веб-страницы (всего <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core">DOM</a> - дерева, включая такие элементы как {`<body>`} и {`<table>`}), а также обеспечивает функциональность, которая является глобальной для документа, например, для получения URL-адреса страницы или создания новых элементов в документе).</p>
    <p>Объект <em>document</em> может быть получен из разных API:</p>
    <ul>
        <li>
            <p>Чаще всего используется прямой доступ к объекту <code className="fs-6">document</code> из сценариев <em>scripts</em> которые подгружаются документом. (Этот же объект доступен как <code className="fs-6">window.document</code>.)</p>
        </li>
        <li>
            <p>Через свойство <code className="fs-6">contentDocument</code> объекта iframe.</p>
        </li>
        <li>
            <p>Как ответ <em>responseXML</em> объекта <code className="fs-6">XMLHttpRequest</code>.</p>
        </li>
        <li>
            <p>Доступ к документу может быть получен из элемента или узла через свойство <em>ownerDocument</em>.</p>
        </li>
    </ul>
    <p>В зависимости от вида документа (т.е. <em>HTML</em> или <em>XML</em>) у объекта <code className="fs-6">document</code> могут быть доступны разные <em>API</em>.</p>
    <ul>
        <li>
            <p>Все объекты документов реализуют интерфейс <em>Document</em> (и, следовательно, <em>Node</em> и <em>EventTarget</em> интерфейсы). Таким образом основные свойства и методы, описанные на этой странице, доступны для всех видов документов.</p>
        </li>
        <li>
            <p>В современных браузерах некоторые документы (т.е. те, которые содержат контент <em>text/html</em>) также реализуют <em>HTMLDocument</em> интерфейс.</p>
        </li>
        <li>
            <p>В современных браузерах SVG документы реализуют <em>SVGDocument</em> интерфейс.</p>
        </li>
    </ul>
    <p>В будущем все эти интерфейсы будут сведены в один интерфейс - <em>Document</em>.</p>

    <h2>Свойства</h2>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Интерфейс Document наследует также интерфейсы Node и EventTarget.</p>
    </div>
    <p>Все свойства и методы объекта <code className="fs-6">document</code> Вы можете найти на странице <a href="https://developer.mozilla.org/ru/docs/Web/API/Document">Document</a></p>
    
    </>
    );
}

export default Document;