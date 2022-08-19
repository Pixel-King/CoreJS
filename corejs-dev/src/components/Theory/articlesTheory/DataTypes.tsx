// import  react from 'react';
import * as React from 'react';

const DataTypes: React.FC =() => {
    return (
    <>
    <h1>Типы данных JavaScript и структуры данных</h1>
    <p>Все языки программирования содержат встроенные типы данных, но они часто отличаются друг от друга в разных языках. Эта статья — попытка описать встроенные структуры (типы) данных, доступные в JavaScript, и их свойства. На их основе строятся другие структуры данных. Когда это возможно, то мы будем сравнивать типы данных в разных языках.</p>
    <h2>Динамическая типизация</h2>
    <p>JavaScript является слабо типизированным или динамическим языком. Это значит, что вам не нужно определять тип переменной заранее. Тип определится автоматически во время выполнения программы. Также это значит, что вы можете использовать одну переменную для хранения данных различных типов:</p>
    <pre>
        var foo = 42; <span color='green'>// сейчас foo типа Number</span><br/>
        foo = "bar"; <span color='green'>// а теперь foo типа String</span><br/>
        foo = true;  <span color='green'>// foo становится типа Boolean</span>
    </pre>
    <h2>Типы данных</h2>
    <p>Стандарт ECMAScript определяет 8 типов:</p>
    <ul>
        <li>6 типов данных являющихся примитивами:
            <ul itemType='circle'>
                <li>Undefined (Неопределённый тип) : <code>typeof instance === "undefined"</code></li>
                <li>Boolean (Булев, Логический тип) : <code>typeof instance === "boolean"</code></li>
                <li>Number (Число) : <code>typeof instance === "number"</code> </li>
                <li>String (Строка) : <code>typeof instance === "string"</code> </li>
                <li>BigInt : <code>typeof instance === "bigint"</code> </li>
                <li>Symbol (в ECMAScript 6) : <code>typeof instance === "symbol"</code> </li>
            </ul>
        </li>
        <li>Null (Null тип ) : <code>typeof instance === "object"</code> . Специальный примитив, используемый не только для данных но и в качестве указателя на финальную точку в Цепочке Прототипов;</li>
        <li>Object (Объект) : <code>typeof instance === "object"</code> . Простая структура, используемая не только для хранения данных, но и для создания других структур, где любая структура создаётся с использованием ключевого слова new: new Object, new Array, new Map (en-US), new Set, new WeakMap, new WeakSet, new Date и множество других структур;</li>
    </ul>
    </>
    );
}

export default DataTypes;