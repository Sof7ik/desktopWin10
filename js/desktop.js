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
        //new Program('bin').openBin('bin');
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
