import * as React from 'react';
import variableImg from './Variables-img/variable.svg';
import variableChangeImg from './Variables-img/variable-change.svg';

const Variables: React.FC =() => {
    return (
    <>
    
    <h1>Переменные</h1>
    <p>JavaScript-приложению обычно нужно работать с информацией. Например:</p>
    <ol>
        <li>Интернет-магазин - информация может включать продаваемые товары и корзину покупок.</li>
        <li>Чат - информация может включать пользователей, сообщения и многое другое.</li>
    </ol>
    <p>Переменные используются для хранения этой информации.</p>
    <h2>Переменная</h2>
    <p><a href="https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)">Переменная</a> - это &quot;именованное хранилище&quot; для данных. Мы можем использовать переменные для хранения товаров, посетителей и других данных.</p>
    <p>Для создания переменной в JavaScript используйте ключевое слово <code className="fs-6">let</code>.</p>
    <p>Приведённая ниже инструкция создаёт (другими словами: <em>объявляет</em> или <em>определяет</em>) переменную с именем &quot;message&quot;:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let message;
        </code>
    </pre>
    <p>Теперь можно поместить в неё данные, используя оператор присваивания <code className="fs-6">=</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let message; <br />
            *!* <br />
            message = &#39;Hello&#39;; // сохранить строку &#39;Hello&#39; в переменной с именем message <br />
            */!*
        </code>
    </pre>
    <p>Строка сохраняется в области памяти, связанной с переменной. Мы можем получить к ней доступ, используя имя переменной:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let message; <br />
            message = &#39;Hello!&#39;; <br />
            *!* <br />
            alert(message); // показывает содержимое переменной <br />
            */!*
        </code>
    </pre>
    <p>Для краткости можно совместить объявление переменной и запись данных в одну строку:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let message = &#39;Hello!&#39;; // определяем переменную и присваиваем ей значение <br />
            alert(message); // Hello!
        </code>
    </pre>
    <p>Мы также можем объявить несколько переменных в одной строке:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let user = &#39;John&#39;, age = 25, message = &#39;Hello&#39;;
        </code>
    </pre>
    <p>Такой способ может показаться короче, но мы не рекомендуем его. Для лучшей читаемости объявляйте каждую переменную на новой строке.</p>
    <p>Многострочный вариант немного длиннее, но легче для чтения:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let user = &#39;John&#39;; <br />
            let age = 25; <br />
            let message = &#39;Hello&#39;;
        </code>
    </pre>
    <p>Некоторые люди также определяют несколько переменных в таком вот многострочном стиле:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let user = &#39;John&#39;, <br />
            age = 25, <br />
            message = &#39;Hello&#39;;
        </code>
    </pre>
    <p>...Или даже с запятой в начале строки:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let user = &#39;John&#39; <br />
            , age = 25 <br />
            , message = &#39;Hello&#39;;
        </code>
    </pre>
    <p>В принципе, все эти варианты работают одинаково. Так что это вопрос личного вкуса и эстетики.</p>
    <h2><code>var</code> вместо <code>let</code></h2>
    <p>В старых скриптах вы также можете найти другое ключевое слово: <code className="fs-6">var</code> вместо <code className="fs-6">let</code>:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            var message = &#39;Hello&#39;;
        </code>
    </pre>
    <p>Ключевое слово <code className="fs-6">var</code> - <em>почти</em> то же самое, что и <code className="fs-6">let</code>. Оно объявляет переменную, но немного по-другому, &quot;устаревшим&quot; способом.</p>
    <p>Существует 2 основных отличия var от let/const:</p>
    <ul>
        <li>
            <p>Переменные  не имеют блочной области видимости, они ограничены, как минимум, телом функции.</p>
        </li>
        <li>
            <p>Объявления (инициализация) переменных <code className="fs-6">var</code> производится в начале исполнения функции (или скрипта для глобальных переменных).</p>
        </li>
    </ul>

    <h2>Аналогия из жизни</h2>
    <p>Мы легко поймём концепцию &quot;переменной&quot;, если представим её в виде &quot;коробки&quot; для данных с уникальным названием на ней.</p>
    <p>Например, переменную <code className="fs-6">message</code> можно представить как коробку с названием <code className="fs-6">&quot;message&quot;</code> и значением <code className="fs-6">&quot;Hello!&quot;</code> внутри:</p>
    <img className="mx-auto d-block" src={variableImg} alt="variables"></img>
    <p>Мы можем положить любое значение в коробку.</p>
    <p>Мы также можем изменить его столько раз, сколько захотим:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let message; <br />
            message = &#39;Hello!&#39;; <br />
            message = &#39;World!&#39;; // значение изменено <br />
            alert(message);
        </code>
    </pre>
    <p>При изменении значения старые данные удаляются из переменной:</p>
    <img className="mx-auto d-block" src={variableChangeImg} alt="variable change"></img>
    <p>Мы также можем объявить две переменные и скопировать данные из одной в другую.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let hello = &#39;Hello world!&#39;; <br />
            let message; <br />
            *!* <br />
            // копируем значение &#39;Hello world&#39; из переменной hello в переменную message <br />
            message = hello; <br />
            */!* <br />
            // теперь две переменные содержат одинаковые данные <br />
            alert(hello); // Hello world! <br />
            alert(message); // Hello world!
        </code>
    </pre>

    <h3>Повторное объявление вызывает ошибку</h3>
    <p>Переменная может быть объявлена только один раз.</p>
    <p>Повторное объявление той же переменной является ошибкой:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let message = &quot;Это&quot;; <br />
            // повторение ключевого слова &#39;let&#39; приводит к ошибке <br />
            let message = &quot;Другое&quot;; // SyntaxError: &#39;message&#39; has already been declared
        </code>
    </pre>
    <p>Поэтому следует объявлять переменную только один раз и затем использовать её уже без <code className="fs-6">let</code>.</p>

    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Примечательно, что существуют <a href="https://ru.wikipedia.org/wiki/%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5">функциональные</a> языки программирования, такие как <a href="https://www.scala-lang.org/">Scala</a> или <a href="https://www.erlang.org/">Erlang</a>, которые запрещают изменять значение переменной.</p>
        <p>В таких языках однажды сохранённое &quot;в коробку&quot; значение остаётся там навсегда. Если нам нужно сохранить что-то другое, язык заставляет нас создать новую коробку (объявить новую переменную). Мы не можем использовать старую переменную.</p>
        <p>Хотя на первый взгляд это может показаться немного странным, эти языки вполне подходят для серьёзной разработки. Более того, есть такая область, как параллельные вычисления, где это ограничение даёт определённые преимущества. Изучение такого языка (даже если вы не планируете использовать его в ближайшее время) рекомендуется для расширения кругозора.</p>
    </div>
            
    <h2>Имена переменных</h2>
    <p>В JavaScript есть два ограничения, касающиеся имён переменных:</p>
    <ol>
        <li>Имя переменной должно содержать только буквы, цифры или символы <code className="fs-6">$</code> и <code className="fs-6">_</code>.</li>
        <li>Первый символ не должен быть цифрой.</li>
    </ol>
    <p>Примеры допустимых имён:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let userName; <br />
            let test123;
        </code>
    </pre>
    <p>Если имя содержит несколько слов, обычно используется <a href="https://ru.wikipedia.org/wiki/CamelCase">верблюжья нотация</a>, то есть, слова следуют одно за другим, где каждое следующее слово начинается с заглавной буквы: <code className="fs-6">myVeryLongName</code>.</p>
    <p>Самое интересное - знак доллара <code className="fs-6">&#39;$&#39;</code> и подчёркивание <code className="fs-6">&#39;_&#39;</code> также можно использовать в названиях. Это обычные символы, как и буквы, без какого-либо особого значения.</p>
    <p>Эти имена являются допустимыми:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let $ = 1; // объявили переменную с именем &quot;$&quot; <br />
            let _ = 2; // а теперь переменную с именем &quot;_&quot; <br />
            alert($ + _); // 3
        </code>
    </pre>
    <p>Примеры неправильных имён переменных:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            let 1a; // не может начинаться с цифры <br />
            let my-name; // дефис &#39;-&#39; не разрешён в имени
        </code>
    </pre>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Переменные с именами <code className="fs-6">apple</code> и <code className="fs-6">APPLE</code> - это две разные переменные.</p>
    </div>
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Можно использовать любой язык, включая кириллицу или даже иероглифы, например:</p>
        <pre>
            <code className="fs-6">
                let имя = &#39;...&#39;;
                let 我 = &#39;...&#39;;
            </code>
        </pre>
        <p>Технически здесь нет ошибки, такие имена разрешены, но есть международная традиция использовать английский язык в именах переменных. Даже если мы пишем небольшой скрипт, у него может быть долгая жизнь впереди. Людям из других стран, возможно, придётся прочесть его не один раз.</p>
    </div>
    
    <div className="fst-italic border-3 border-start border-warning px-3">
        <p>Существует <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar#%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%B2%D1%8B%D0%B5_%D1%81%D0%BB%D0%BE%D0%B2%D0%B0">список зарезервированных слов</a>, которые нельзя использовать в качестве имён переменных, потому что они используются самим языком.</p>
        <p>Например: <code className="fs-6">let</code>, <code className="fs-6">class</code>, <code className="fs-6">return</code> и <code className="fs-6">function</code> зарезервированы.</p>
        <p>Приведённый ниже код даёт синтаксическую ошибку:</p>
        <pre>
            <code className="fs-6">
                let let = 5; // нельзя назвать переменную &quot;let&quot;, ошибка! <br />
                let return = 5; // также нельзя назвать переменную &quot;return&quot;, ошибка!
            </code>
        </pre>
    </div>

    <h3>Создание переменной без использования <code className="fs-6">use strict</code></h3>
    <p>Обычно нам нужно определить переменную перед её использованием. Но в старые времена было технически возможно создать переменную простым присвоением значения без использования <code className="fs-6">let</code>. Это все ещё работает, если мы не включаем <code className="fs-6">use strict</code> в наших файлах, чтобы обеспечить совместимость со старыми скриптами.</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            // заметка: &quot;use strict&quot; в этом примере не используется <br />
            num = 5; // если переменная &quot;num&quot; раньше не существовала, она создаётся <br />
            alert(num); // 5
        </code>
    </pre>
    <p>Это плохая практика, которая приводит к ошибке в строгом режиме:</p>
    <pre className="text-bg-dark px-3 py-3">
        <code className="fs-6">
            &quot;use strict&quot;; <br />
            *!* <br />
            num = 5; // ошибка: num is not defined <br />
            */!*
        </code>
    </pre>

    <h2>Константы</h2>

    <p>Чтобы объявить константную, то есть, неизменяемую переменную, используйте <code className="fs-6">const</code> вместо <code className="fs-6">let</code>:</p>
    <pre className="fst-italic border-3 border-start border-warning px-3">
        <code className="fs-6">
        const myBirthday = &#39;18.04.1982&#39;;
        </code>
    </pre>

    <p>Переменные, объявленные с помощью <code className="fs-6">const</code>, называются &quot;константами&quot;. Их нельзя изменить. Попытка сделать это приведёт к ошибке:</p>
    <pre className="fst-italic border-3 border-start border-warning px-3">
        <code className="fs-6">
            const myBirthday = &#39;18.04.1982&#39;; <br />
            myBirthday = &#39;01.01.2001&#39;; // ошибка, константу нельзя перезаписать!
        </code>
    </pre>

    <p>Если программист уверен, что переменная никогда не будет меняться, он может гарантировать это и наглядно донести до каждого, объявив её через <code className="fs-6">const</code>.</p>

    <h3>Константы в верхнем регистре</h3>

    <p>Широко распространена практика использования констант в качестве псевдонимов для трудно запоминаемых значений, которые известны до начала исполнения скрипта.</p>

    <p>Названия таких констант пишутся с использованием заглавных букв и подчёркивания.</p>

    <p>Например, сделаем константы для различных цветов в &quot;шестнадцатеричном формате&quot;:</p>

    <pre className="fst-italic border-3 border-start border-warning px-3">
        <code className="fs-6">
            const COLOR_RED = &quot;#F00&quot;; <br />
            const COLOR_GREEN = &quot;#0F0&quot;; <br />
            const COLOR_BLUE = &quot;#00F&quot;; <br />
            const COLOR_ORANGE = &quot;#FF7F00&quot;; <br />
            // ...когда нам нужно выбрать цвет <br />
            let color = COLOR_ORANGE; <br />
            alert(color); // #FF7F00
        </code>
    </pre>

    <p>Преимущества:</p>

    <p>- <code className="fs-6">COLOR_ORANGE</code> гораздо легче запомнить, чем <code className="fs-6">&quot;#FF7F00&quot;</code>.</p>
    <p>- Гораздо легче допустить ошибку при вводе <code className="fs-6">&quot;#FF7F00&quot;</code>, чем при вводе <code className="fs-6">COLOR_ORANGE</code>.</p>
    <p>- При чтении кода <code className="fs-6">COLOR_ORANGE</code> намного понятнее, чем <code className="fs-6">#FF7F00</code>.</p>

    <p>Когда мы должны использовать для констант заглавные буквы, а когда называть их нормально? Давайте разберёмся и с этим.</p>
    <p>Название &quot;константа&quot; просто означает, что значение переменной никогда не меняется. Но есть константы, которые известны до выполнения (например, шестнадцатеричное значение для красного цвета), а есть константы, которые вычисляются во время выполнения сценария, но не изменяются после их первоначального назначения.</p>
    <p>Например:</p>

    <pre className="fst-italic border-3 border-start border-warning px-3">
        <code className="fs-6">
            const pageLoadTime = /* время, потраченное на загрузку веб-страницы */;
        </code>
    </pre>

    <p>Значение <code className="fs-6">pageLoadTime</code> неизвестно до загрузки страницы, поэтому её имя записано обычными, а не прописными буквами. Но это всё ещё константа, потому что она не изменяется после назначения.</p>
    <p>Другими словами, константы с именами, записанными заглавными буквами, используются только как псевдонимы для &quot;жёстко закодированных&quot; значений.</p>

    <h2>Придумывайте правильные имена</h2>
    <p>В разговоре о переменных необходимо упомянуть, что есть ещё одна чрезвычайно важная вещь.</p>
    <p>Название переменной должно иметь ясный и понятный смысл, говорить о том, какие данные в ней хранятся.</p>
    <p>Именование переменных - это один из самых важных и сложных навыков в программировании. Быстрый взгляд на имена переменных может показать, какой код был написан новичком, а какой - опытным разработчиком.</p>
    <p>В реальном проекте большая часть времени тратится на изменение и расширение существующей кодовой базы, а не на написание чего-то совершенно нового с нуля. Когда мы возвращаемся к коду после какого-то промежутка времени, гораздо легче найти информацию, которая хорошо размечена. Или, другими словами, когда переменные имеют хорошие имена.</p>
    <p>Пожалуйста, потратьте время на обдумывание правильного имени переменной перед её объявлением. Делайте так, и будете вознаграждены.</p>

    <p>Несколько хороших правил:</p>

    <p>- Используйте легко читаемые имена, такие как <code className="fs-6">userName</code> или <code className="fs-6">shoppingCart</code>.</p>
    <p>- Избегайте использования аббревиатур или коротких имён, таких как <code className="fs-6">a</code>, <code className="fs-6">b</code>, <code className="fs-6">c</code>, за исключением тех случаев, когда вы точно знаете, что так нужно.</p>
    <p>- Делайте имена максимально описательными и лаконичными. Примеры плохих имён: <code className="fs-6">data</code> и <code className="fs-6">value</code>. Такие имена ничего не говорят. Их можно использовать только в том случае, если из контекста кода очевидно, какие данные хранит переменная.</p>
    <p>- Договоритесь с вашей командой об используемых терминах. Если посетитель сайта называется &quot;user&quot;, тогда мы должны называть связанные с ним переменные <code className="fs-6">currentUser</code> или <code className="fs-6">newUser</code>, а не, к примеру, <code className="fs-6">currentVisitor</code> или <code className="fs-6">newManInTown</code>.</p>

    <p>Звучит просто? Действительно, это так, но на практике для создания описательных и кратких имён переменных зачастую требуется подумать. Действуйте.</p>

    <h3>Повторно использовать или создавать новую переменную?</h3>
    <p>И последняя заметка. Есть ленивые программисты, которые вместо объявления новых переменных повторно используют существующие.</p>
    <p>В результате их переменные похожи на коробки, в которые люди бросают разные предметы, не меняя на них этикетки. Что сейчас находится внутри коробки? Кто знает? Нам необходимо подойти поближе и проверить.</p>
    <p>Такие программисты немного экономят на объявлении переменных, но теряют в десять раз больше при отладке.</p>
    <p>Дополнительная переменная - это добро, а не зло.</p>
    <p>Современные JavaScript-минификаторы и браузеры оптимизируют код достаточно хорошо, поэтому он не создаёт проблем с производительностью. Использование разных переменных для разных значений может даже помочь движку оптимизировать ваш код.</p>

    <h2>Итого</h2>

    <p>Мы можем объявить переменные для хранения данных с помощью ключевых слов <code className="fs-6">var</code>, <code className="fs-6">let</code> или <code className="fs-6">const</code>.</p>

    <p>- <code className="fs-6">let</code> - это современный способ объявления.</p>
    <p>- <code className="fs-6">var</code> - это устаревший способ объявления.</p>
    <p>- <code className="fs-6">const</code> - похоже на <code className="fs-6">let</code>, но значение переменной не может изменяться.</p>

    <p>Переменные должны быть названы таким образом, чтобы мы могли легко понять, что у них внутри.</p>

    </>
    );
}

export default Variables;