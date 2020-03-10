let date, hours, minutes, seconds, day, month; //переменные времени
let target, activeitems;
let aboutMeValue;
let notepad, folder, browser;
let fileName;
let zIndex = 2;

const mainElement = document.querySelector('main');

//подмена картинок в проводнике
const swapExplorerArrows = () => {
    document.querySelector('img.left-arrow').addEventListener('mouseover', (event) => {
        document.querySelector('img.left-arrow').setAttribute('src', './icons/programm-icons/to-arrow blue.png');
    })
    document.querySelector('img.left-arrow').addEventListener('mouseout', (event) => {
        document.querySelector('img.left-arrow').setAttribute('src', './icons/programm-icons/to-arrow white.png');
    })
}

//открытие разных программ
const openTxtFile = (fileName) => {
    aboutMeValue = `Привет, я учусь в Щелковской шараге на 3 курсе на web-разраба. Вроде как фулл стэк, но даже код для этого проекта я частично Ctrl+C — Ctrl+V...`

    notepad = document.createElement('div');
    notepad.classList.add('notepad', 'activeProg');
    notepad.style.zIndex = zIndex;
    zIndex++;
    notepad.innerHTML = `
    <div class="title">
        <div class="left-programm-title">
            <img class="programm-icon" src="./icons/programm-icons/notepad.png" alt="icon">
            <span class="programm-title">${fileName} — Notepad</span>
        </div>
    
        <div class="right-programm-title">
            <span class="programm-change-size semi-close">—</span>
            <img class="programm-change-size full-window" src="./icons/programm-icons/full-window.png" alt="full-window">
            <img class="programm-change-size close" src="./icons/programm-icons/close.png" alt="close">
        </div>
    </div>
    <nav class="notepad-nav">
        <span class="notepad-navigation-item">File</span>
        <span class="notepad-navigation-item">Edit</span>
        <span class="notepad-navigation-item">Format</span>
        <span class="notepad-navigation-item">View</span>
        <span class="notepad-navigation-item">HELP</span>
    </nav>
    <div class="notepad-text">
        <textarea name="notepad-message" id="" class="notepad-textarea" resize readonly>${aboutMeValue}</textarea>
    </div>
    `
    mainElement.prepend(notepad);
    notepad.style.opacity = 1;
    dragElement(document.querySelector("div.notepad"));
    clearActiveElements();
    document.querySelector('img.close').addEventListener('click', closeProgramm);
}

const openFolder = (fileName) => {
    explorer = document.createElement('div');
    explorer.classList.add('explorer', 'activeProg');
    explorer.style.zIndex = zIndex;
    zIndex++;
    explorer.innerHTML =
    `
    <div class="explorer-title">
                <div class="left-programm-title left-explorer-title">
                    <img class="explorer-icon" src="./icons/programm-icons/explorer.png" alt="logo">
                    <span class="explorer-title">${fileName}</span>
                </div>
                    
                <div class="right-programm-title right-explorer-title">
                    <span class="programm-change-size semi-close">—</span>
                    <img class="programm-change-size full-window" src="./icons/programm-icons/full-window.png" alt="full-window">
                    <img class="programm-change-size close" src="./icons/programm-icons/close.png" alt="close">
                </div>
            </div>
            <nav>
                <a class="explorer-navigation-item active-explorer-navigation-item">File</a>
                <a class="explorer-navigation-item">Main</a>
                <a class="explorer-navigation-item">Share</a>
                <a class="explorer-navigation-item">View</a>
            </nav>
            <div class="search">
                <div class="arrows">
                    <img src="./icons/programm-icons/to-arrow.png" alt="left arrow" class="left-arrow search-arrow">
                    <img src="./icons/programm-icons/to-arrow.png" alt="right arrow" class="right-arrow search-arrow">
                    <img src="./icons/programm-icons/to-arrow white.png" alt="up arrow" class="up-arrow search-arrow">
                </div>
                <input type="text" name="search" class="main-search-input">
                <input type="text" name="second-search" class="second-search-input" placeholder="Search: Desktop">
            </div>

            <div class="main-content">
                <aside class="left-list">
                    <ul>
                        <li class="list">Desktop
                            <ul class="inner-ul">
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                            </ul>
                        </li>
                        <li class="list">Desktop
                            <ul class="inner-ul">
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                            </ul>
                        </li>
                        <li class="list">Desktop
                            <ul class="inner-ul">
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                            </ul>
                        </li>
                        <li class="list">Desktop
                            <ul class="inner-ul">
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                                <li class="list">Быстрый доступ</li>
                            </ul>
                        </li>
                        
                    </ul>
                </aside>
                <section class="explorer-content-wrapper">
                    <div class="desktop-item bin">
                        <img class="bin" src="./icons/desktop-icons/bin.png" alt="Bin">
                        <span class="file-name">Корзина</span>
                    </div>
        
                    <div class="desktop-item folder">
                        <img class="folder" src="./icons/desktop-icons/folder.png" alt="Folder">
                        <span class="file-name">Новая папка</span>
                    </div>
        
                    <div class="desktop-item folder">
                        <img class="folder" src="./icons/desktop-icons/folder.png" alt="Folder">
                        <span class="file-name">Новая папка</span>
                    </div>
        
                    <div class="desktop-item txt">
                        <img class="txt" src="./icons/desktop-icons/txt.png" alt="Txt-file">
                        <span class="file-name">aboutMe.txt</span>
                    </div>
        
                    <div class="desktop-item shortcut">
                        <img class="shortcut" src="./icons/desktop-icons/txt.png" alt="shortcut">
                        <span class="file-name">Имя ярлыка</span>
                    </div>
                    <div class="desktop-item bin">
                        <img class="bin" src="./icons/desktop-icons/bin.png" alt="Bin">
                        <span class="file-name">Корзина</span>
                    </div>
        
                    <div class="desktop-item folder">
                        <img class="folder" src="./icons/desktop-icons/folder.png" alt="Folder">
                        <span class="file-name">Новая папка</span>
                    </div>
        
                    <div class="desktop-item folder">
                        <img class="folder" src="./icons/desktop-icons/folder.png" alt="Folder">
                        <span class="file-name">Новая папка</span>
                    </div>

                    <div class="desktop-item shortcut">
                        <img class="shortcut" src="./icons/desktop-icons/txt.png" alt="shortcut">
                        <span class="file-name">Имя ярлыка</span>
                    </div>
                    <div class="desktop-item bin">
                        <img class="bin" src="./icons/desktop-icons/bin.png" alt="Bin">
                        <span class="file-name">Корзина</span>
                    </div>
        
                    <div class="desktop-item folder">
                        <img class="folder" src="./icons/desktop-icons/folder.png" alt="Folder">
                        <span class="file-name">Новая папка</span>
                    </div>
        
                    <div class="desktop-item folder">
                        <img class="folder" src="./icons/desktop-icons/folder.png" alt="Folder">
                        <span class="file-name">Новая папка</span>
                    </div>

                    <div class="desktop-item shortcut">
                        <img class="shortcut" src="./icons/desktop-icons/txt.png" alt="shortcut">
                        <span class="file-name">Имя ярлыка</span>
                    </div>
                    <div class="desktop-item bin">
                        <img class="bin" src="./icons/desktop-icons/bin.png" alt="Bin">
                        <span class="file-name">Корзина</span>
                    </div>
        
                    <div class="desktop-item folder">
                        <img class="folder" src="./icons/desktop-icons/folder.png" alt="Folder">
                        <span class="file-name">Новая папка</span>
                    </div>
        
                    <div class="desktop-item folder">
                        <img class="folder" src="./icons/desktop-icons/folder.png" alt="Folder">
                        <span class="file-name">Новая папка</span>
                    </div>

                </section>
            </div>

            <div class="explorer-footer">
                <p class="explorer-footer-element-count">Элементов: 29</p>
            </div>
    `
    mainElement.prepend(explorer);
    explorer.style.opacity = 1;
    swapExplorerArrows();
    dragElement(document.querySelector("div.explorer"));
    clearActiveElements();
    document.querySelector('img.close').addEventListener('click', closeProgramm);
}

const openBrowser = () => {
    browser = document.createElement('div');
    browser.classList.add('browser');
    mainElement.prepend(browser);
    browser.innerHTML = 
    `
    <div class="browser-title">
                <div class="left-programm-title left-browser-title">
                    <div class="browser-tab">
                        <p class="tab-name">Новая вкладка</p>
                    </div>
                </div>
                    
                <div class="right-programm-title right-browser-title">
                    <span class="programm-change-size semi-close">—</span>
                    <img class="programm-change-size full-window" src="./icons/programm-icons/full-window.png" alt="full-window">
                    <img class="programm-change-size close" src="./icons/programm-icons/close.png" alt="close">
                </div>
            </div>
            <div class="browser-navigate">
                <div class="buttons">
                    <img src="./icons/programm-icons/to-arrow.png" alt="left arrow" class="left-arrow search-arrow">
                    <img src="./icons/programm-icons/to-arrow.png" alt="right arrow" class="right-arrow search-arrow">
                    <img src="./icons/programm-icons/redo.png" alt="redo" class="up-arrow search-arrow">
                </div>
                <div class="browser-search">
                    <input type="text" name="" class="browser-search" placeholder="Введите поисковой запрос в Google или укажите URL">
                </div>
                <div class="addons">
                    <div class="addon" data-addon-id="1"></div>
                    <div class="addon" data-addon-id="2"></div>
                    <div class="addon" data-addon-id="3"></div>
                    <div class="addon" data-addon-id="4"></div>
                </div>
            </div>
            <div class="main">
                <iframe src="https://learn.javascript.ru/dom-navigation#deti-childnodes-firstchild-lastchild" class="browser-iframe"></iframe>
            </div>
            <div class="browser-footer">
                <p>Привет я хром</p>
            </div>
    `
    browser.style.opacity = 1;
    dragElement(document.querySelector("div.browser"));
    clearActiveElements();
    document.querySelector('img.close').addEventListener('click', closeProgramm);
}

const openBin = () => {
    console.log('From function:', "Bin opened");
    clearActiveElements();
}

//закрытие программы
const closeProgramm = (event) => {
    event.target.parentElement.parentElement.parentElement.remove();
}

//убираем выделение с файла
const clearActiveElements = () => {
    activeItems = document.querySelectorAll('div.active');
    activeItems.forEach((item) => {
        item.classList.remove('active');
    })
}

//функция выделения "файлов" при клике
const makeFileActive = (event) => {
    target = event.target.parentElement;

    if (target.tagName == "DIV" && target.classList.contains('desktop-item')) {
        clearActiveElements();
        target.classList.toggle('active');
    }

    if(target.tagName == "MAIN" || target.tagName == "BODY") {
        clearActiveElements();
    }
}

//проверяем, на что кликнули - ярлык, папка, текстовый документ
const checkFileTypeOnDBLClick = (event) => {
    target = event.target.parentElement;
    console.log(target.lastElementChild);
    fileName = target.lastElementChild.textContent;
    if (target.classList.contains('bin')) {
        console.log('bin');
        openBin(fileName);
    }

    if (target.classList.contains('txt')) {
        openTxtFile(fileName);
    }

    if (target.classList.contains('folder')) {
        console.log('folder');
        openFolder(fileName);
    }

    if (target.classList.contains('shortcut')) {
        console.log('shortcut');
        openBrowser(fileName);
    }
}

//создаем передвижение программ
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.querySelector('div.left-programm-title')) {
      /* if present, the header is where you move the DIV from:*/
      document.querySelector('div.left-programm-title').onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
}

//подмена картинок "Пуск"
const swapWinLogo = () => {
    document.querySelector('div.task-panel-programm').addEventListener('mouseover', (event) => {
        document.querySelector('img.win').setAttribute('src', './icons/left-panel/win/win-blue.png');
    })
    document.querySelector('div.task-panel-programm').addEventListener('mouseout', (event) => {
        document.querySelector('img.win').setAttribute('src', './icons/left-panel/win/win-white.png');
    })
}

//функция получения и вывода времени
const setDate = () => {
    //выводим время
    date = new Date();

    //чекаем, если часов меньше 10 (однозначное число), то добавлячем 0;
    date.getMinutes() < 10 ? minutes = "0" + date.getMinutes() : minutes = date.getMinutes();

    //чекаем, если минут меньше 10 (однозначное число), то добавлячем 0;
    date.getHours() < 10 ? hours = "0" + date.getHours() : hours = date.getHours();

    date.getSeconds()+1 < 10 ? seconds = "0" + (date.getSeconds()+1) : seconds = date.getSeconds();

    //чекаем номер дня
    date.getDate() < 10 ? day = "0" + date.getDate() : day = date.getDate();

    //чекаем номер месяца. +1 потому что 0-11 месяцы считаются
    date.getMonth()+1 < 10 ? month = "0" + (date.getMonth()+1) : month = (date.getMonth()+1);

    //выводим время и дату
    document.querySelector('span.time').textContent = hours + ':' + minutes + ':' + seconds;
    document.querySelector('span.date').textContent = day + '.' + month + '.' + date.getFullYear();
}

//каждую минуту перевыводим время и дату
setInterval(() =>{
    setDate();
}, 1000);

setDate();
document.querySelector('main').addEventListener('click', makeFileActive);
document.querySelector('main').addEventListener('dblclick', checkFileTypeOnDBLClick);
swapWinLogo();