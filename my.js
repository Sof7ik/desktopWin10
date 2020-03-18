let date, hours, minutes, seconds, day, month; //переменные времени
let target, activeitems, contextMenus;
let aboutMeValue;
let notepad, folder, browser;
let fileName;
let zIndex = 2;

// let value, allAudio; //тута мы будем громкость менять

const mainElement = document.querySelector('main');

// class DesktopItem
// {
//     constructor()
//     {
//         this.el = document.createElement('div');
//         this.el.classList.add('program');
//     }
   
//     create(text, what) {
//         this.img = document.createElement('img');
//         this.img.setAttribute('alt', 'image');

//         this.txt = document.createElement('span');
//         this.txt.innerText = text

//         this.el.insertAdjacentElement('beforeend', this.img);
//         this.el.insertAdjacentElement('beforeend', this.txt);
        
//         if (what == 'folder')
//         {
//             this.el.classList.add('folder');
//             this.img.setAttribute('src', './folder.png');
            
//         } else if (what == 'txt') {
//             this.el.classList.add('txt');
//             this.img.setAttribute('src', './txt.png');
//         }

//         document.querySelector('.container').insertAdjacentElement('beforeend', this.el);
//     }
// }

class Program
{
    //what MUST BE like "explorer", "notepad", "browser" so like classes in CSS
    constructor(what)
    {
        this.element = document.createElement('div');
        this.element.classList.add(what, 'activeProg');
        this.element.style.zIndex = zIndex;
        zIndex++;
    }

    openTxt(fileName, what)
    {
        aboutMeValue = `Привет, я учусь в Щелковской шараге на 3 курсе на web-разраба. Вроде как фулл стэк, но даже код для этого проекта я частично Ctrl+C — Ctrl+V...`;
        this.element.insertAdjacentHTML('afterbegin', `
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
        `); 
        this.giveAllFuncs(what);
    }

    openFolder(fileName, what)
    {
        this.element.insertAdjacentHTML('afterbegin', `
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
                <a class="explorer-navigation-item">Home</a>
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

                    <div class="desktop-item txt">
                        <img class="txt" src="./icons/desktop-icons/txt.png" alt="Txt-file">
                        <span class="file-name">aboutMe.txt</span>
                    </div>

                    <div class="desktop-item shortcut">
                        <img class="shortcut" src="./icons/desktop-icons/txt.png" alt="shortcut">
                        <span class="file-name">Имя ярлыка</span>
                    </div>
                </section>
            </div>

            <div class="explorer-footer">
                <p class="explorer-footer-element-count">Элементов: 29</p>
            </div>
        `); 
        this.giveAllFuncs(what);
        swapExplorerArrows();
    }

    openBrowser(link = 'https://vk.com/im', what)
    {
        this.element.insertAdjacentHTML('afterbegin', `
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
                <iframe src="${link}" class="browser-iframe"></iframe>
            </div>
            <div class="browser-footer">
                <p>Привет я хром</p>
            </div>
        `);
        this.giveAllFuncs(what);
    }
    
    giveAllFuncs(what)
    {
        mainElement.insertAdjacentElement('afterbegin', this.element);
        dragElement(document.querySelector(`div.${what}`));
        clearActiveElements();
        document.querySelector('img.close').addEventListener('click', closeProgramm);
    }

}

const openBin = () => {
    console.log('From function:', "Bin opened");
    clearActiveElements();
}

//закрытие программы
const closeProgramm = (event) => {
    event.target.parentElement.parentElement.parentElement.remove();
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

const deleteContextMenus = () =>
{
    if(document.querySelectorAll('div.context-menu'))
    {
        let allContexts = document.querySelectorAll('div.context-menu');
        allContexts.forEach( (item) => {
            item.remove();
        })
    }
}

const makeContextMenu = (event) =>
{
    event.stopPropagation();
    event.preventDefault();
    
    let newDiv = document.createElement('div');
    newDiv.classList.add('context-menu')
    
    newDiv.style.top = `${event.clientY}px`;
    newDiv.style.left = `${event.clientX}px`;

    deleteContextMenus();
    clearActiveElements();
    makeFileActive(event);
    
    mainElement.prepend(newDiv);

}

//убираем выделение с файла
const clearActiveElements = () => {
    activeItems = document.querySelectorAll('div.active');
    activeItems.forEach((item) => {
        item.classList.remove('active');
    })
    deleteContextMenus();
}

//проверяем, на что кликнули - ярлык, папка, текстовый документ
const checkFileTypeOnDBLClick = (event) => {
    target = event.target.parentElement;
    //console.log(target.lastElementChild);
    fileName = target.lastElementChild.textContent;
    if (target.classList.contains('bin')) {
        console.log('bin');
        openBin(fileName);
    }

    if (target.classList.contains('txt')) {
        new Program('notepad').openTxt(fileName, 'notepad');
    }

    if (target.classList.contains('folder')) {
        new Program('explorer').openFolder(fileName, 'explorer');
    }

    if (target.classList.contains('shortcut')) {
        new Program('browser').openBrowser('https://youtube.com/', 'browser');
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

//подмена картинок в проводнике
const swapExplorerArrows = () => {
    document.querySelector('img.left-arrow').addEventListener('mouseover', (event) => {
        document.querySelector('img.left-arrow').setAttribute('src', './icons/programm-icons/to-arrow blue.png');
    })
    document.querySelector('img.left-arrow').addEventListener('mouseout', (event) => {
        document.querySelector('img.left-arrow').setAttribute('src', './icons/programm-icons/to-arrow white.png');
    })
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
    allAudio = document.querySelectorAll('audio');
}, 1000);

setDate();
document.querySelector('main').addEventListener('click', makeFileActive);
document.querySelector('main').addEventListener('dblclick', checkFileTypeOnDBLClick);

document.querySelectorAll('*').forEach((item) =>
{
    item.addEventListener('contextmenu', makeContextMenu)
})

swapWinLogo();