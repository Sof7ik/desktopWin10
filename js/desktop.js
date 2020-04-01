let fileId;

//закрытие программы
const closeProgramm = (event) => {
    event.target.parentElement.parentElement.parentElement.remove();
}

const fullWindow = (event) =>
{
    let parentElement = event.target.parentElement.parentElement.parentElement;
    if (parentElement.style.height == '100vh' && parentElement.style.width == '100vw')
    {
        console.log("parentElement.style.height == '100vh' && parentElement.style.width == '100vw'");
        parentElement.style.top = '7%';
        parentElement.style.left = '14%';
        parentElement.style.height = '50%';
        parentElement.style.width = '60%';
    } else {
        console.log("parentElement.style.height !== '100vh' && parentElement.style.width !== '100vw'");
        parentElement.style.top = '0px';
        parentElement.style.left = '0px';
        parentElement.style.height = '100vh';
        parentElement.style.width = '100vw';
    }
}
    
const semiCloseWindow = (event) =>
{
    let parentElement = event.target.parentElement.parentElement.parentElement;
    parentElement.style.opacity = 0.3;
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
        fileId = target.dataset.idfile;
        console.log('fileId', fileId);
        console.log('fileId - 3', fileId - 3);
        new Program('notepad').openTxt(fileName, 'notepad', filesFromDatabase[fileId - 3].file_msg);
    }

    if (target.classList.contains('folder')) {
        new Program('explorer').openFolder(fileName, 'explorer');
    }

    if (target.classList.contains('shortcut')) {
        new Program('browser').openBrowser('https://youtube.com/', 'browser');
    }

    if (target.classList.contains('desktop-settings'))
    {
        new Program('settings').openSettings('settings');
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


