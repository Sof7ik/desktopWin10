let date, hours, minutes, seconds, day, month; //переменные времени
let target, activeitems;
let aboutMeValue;
let notepad, folder, browser;
let a;

const mainElement = document.querySelector('main');

//открытие разных программ
const openTxtFile = () => {
    aboutMeValue = `Привет, я учусь в Щелковской шараге на 3 курсе на web-разраба. Вроде как фулл стэк, но даже код для этого проекта я Ctrl+C — Ctrl+V...`

    notepad = document.createElement('div');
    notepad.classList.add('notepad', 'activeProg');
    notepad.innerHTML = `
    <div class="title">
        <div class="left-programm-title">
            <img class="programm-icon" src="./icons/programm-icons/notepad.png" alt="icon">
            <span class="programm-title">aboutMe.txt — Notepad</span>
        </div>
    
        <div class="right-programm-title">
            <span class="programm-change-size semi-close">—</span>
            <img class="programm-change-size full-window" src="./icons/programm-icons/full-window.png" alt="full-window">
            <img class="programm-change-size close" src="./icons/programm-icons/close.png" alt="close">
        </div>
    </div>
    <nav>
        <span class="notepad-navigation-item">File</span>
        <span class="notepad-navigation-item">Edit</span>
        <span class="notepad-navigation-item">Format</span>
        <span class="notepad-navigation-item">View</span>
        <span class="notepad-navigation-item">HELP</span>
    </nav>
    <div class="notepad-text">
        <textarea name="notepad-message" id="" class="notepad-textarea" resize>${aboutMeValue}</textarea>
    </div>
    `
    mainElement.prepend(notepad);
    notepad.style.opacity = 1;
    dragElement(document.querySelector("div.notepad"));
    clearActiveElements();
    document.querySelector('img.close').addEventListener('click', closeProgramm)
}

const openFolder = () => {
    console.log('From function:', "Folder opened");
    clearActiveElements();
}

const openBrowser = () => {
    console.log('From function:', "Google opened");
    clearActiveElements();
}

const openBin = () => {
    console.log('From function:', "Bin opened");
    clearActiveElements();
}

//закрытие программы
const closeProgramm = () => {
    document.querySelector('div.activeProg').style.opacity = 0;
    document.querySelector('div.activeProg').remove();
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

    if (target.classList.contains('bin')) {
        console.log('bin');
        openBin();
    }

    if (target.classList.contains('txt')) {
        openTxtFile();
    }

    if (target.classList.contains('folder')) {
        console.log('folder');
        openFolder();
    }

    if (target.classList.contains('shortcut')) {
        console.log('shortcut');
        openBrowser();
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
document.querySelector('div.task-panel-programm').addEventListener('mouseover', (event) => {
    document.querySelector('img.win').setAttribute('src', './icons/left-panel/win/win-blue.png');
})
document.querySelector('div.task-panel-programm').addEventListener('mouseout', (event) => {
    document.querySelector('img.win').setAttribute('src', './icons/left-panel/win/win-white.png');
})

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
