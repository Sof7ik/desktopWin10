/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _desktop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _context_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);


 // let value, allAudio; //тута мы будем громкость менять

const mainElement = document.querySelector('main'); //каждую минуту перевыводим время и дату

setInterval(() => {
  Object(_footer__WEBPACK_IMPORTED_MODULE_1__["setDate"])();
}, 1000);
Object(_footer__WEBPACK_IMPORTED_MODULE_1__["setDate"])();
mainElement.addEventListener('click', _desktop__WEBPACK_IMPORTED_MODULE_0__["makeFileActive"]);
mainElement.addEventListener('dblclick', _desktop__WEBPACK_IMPORTED_MODULE_0__["checkFileTypeOnDBLClick"]);
document.querySelectorAll('*').forEach(item => {
  item.addEventListener('contextmenu', _context_menu__WEBPACK_IMPORTED_MODULE_2__["makeDesktopContextMenu"]);
});
Object(_footer__WEBPACK_IMPORTED_MODULE_1__["swapWinLogo"])();
Object(_desktop__WEBPACK_IMPORTED_MODULE_0__["renderFiles"])();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeProgramm", function() { return closeProgramm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullWindow", function() { return fullWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "semiCloseWindow", function() { return semiCloseWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeFileActive", function() { return makeFileActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearActiveElements", function() { return clearActiveElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderFiles", function() { return renderFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFileTypeOnDBLClick", function() { return checkFileTypeOnDBLClick; });
/* harmony import */ var _context_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
let fileId;

 //закрытие программы

const closeProgramm = event => {
  event.target.parentElement.parentElement.parentElement.remove();
};
const fullWindow = event => {
  let parentElement = event.target.parentElement.parentElement.parentElement;

  if (parentElement.style.height == '100vh' && parentElement.style.width == '100vw') {
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
};
const semiCloseWindow = event => {
  let parentElement = event.target.parentElement.parentElement.parentElement;
  parentElement.style.opacity = 0.3;
}; //функция выделения "файлов" при клике

const makeFileActive = event => {
  let target = event.target.parentElement;

  if (target.tagName == "DIV" && target.classList.contains('desktop-item')) {
    clearActiveElements();
    target.classList.toggle('active');
  }

  if (target.tagName == "MAIN" || target.tagName == "BODY") {
    clearActiveElements();
  }
}; //убираем выделение с файла

const clearActiveElements = () => {
  let activeItems = document.querySelectorAll('div.active');
  activeItems.forEach(item => {
    item.classList.remove('active');
  });
  Object(_context_menu__WEBPACK_IMPORTED_MODULE_0__["deleteContextMenus"])();
};

const getFilesFromDB = async () => {
  return await fetch('../php/getfiles.php');
};

const renderFiles = () => {
  getFilesFromDB().then(res => res.json()).then(items => {
    items.forEach(file => {
      new _Classes__WEBPACK_IMPORTED_MODULE_1__["DesktopItem"](file.id).create(file.filename, file.type_name);
    });
  });
}; //проверяем, на что кликнули - ярлык, папка, текстовый документ

const checkFileTypeOnDBLClick = event => {
  let filesFromDatabase;
  getFilesFromDB().then(res => {
    return res.json();
  }).then(filesFromDatabase => {
    let target = event.target.parentElement;
    let fileName = target.lastElementChild.textContent;

    if (target.classList.contains('bin')) {
      console.log('bin'); //new Program('bin').openBin('bin');
    }

    if (target.classList.contains('txt')) {
      fileId = target.dataset.idfile;
      console.log('fileId', fileId);
      console.log('fileId - 3', fileId - 3);
      new _Classes__WEBPACK_IMPORTED_MODULE_1__["Program"]('notepad').openTxt(fileName, 'notepad', filesFromDatabase[fileId - 3].file_msg);
    }

    if (target.classList.contains('folder')) {
      new _Classes__WEBPACK_IMPORTED_MODULE_1__["Program"]('explorer').openFolder(fileName, 'explorer');
    }

    if (target.classList.contains('shortcut')) {
      new _Classes__WEBPACK_IMPORTED_MODULE_1__["Program"]('browser').openBrowser('https://youtube.com/', 'browser');
    }

    if (target.classList.contains('desktop-settings')) {
      new _Classes__WEBPACK_IMPORTED_MODULE_1__["Program"]('settings').openSettings('settings');
    }
  });
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteContextMenus", function() { return deleteContextMenus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDesktopContextMenu", function() { return makeDesktopContextMenu; });
/* harmony import */ var _desktop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
//let bool = false;
// счеткик номеров файлов
// let counter = 1;
const mainElement = document.querySelector('main');



const insertFileToDb = (fileType, fileName) => {
  let formData = new FormData();
  formData.append('fileType', fileType);
  formData.append('fileName', fileName);
  fetch('./../php/newFile.php', {
    method: 'POST',
    body: formData
  });
}; //скрытие контекстного меню


const deleteContextMenus = () => {
  let allContexts = document.querySelectorAll('div.context-menu');
  allContexts.forEach(item => {
    item.remove();
  });

  if (!(document.querySelector('.newFile') === null)) {
    document.querySelector('.newFile').remove();
  }
}; //открытие контекстного меню

const makeDesktopContextMenu = event => {
  let bool = false; // event.stopPropagation();

  event.preventDefault();
  let newDiv = document.createElement('div');
  newDiv.classList.add('context-menu');
  newDiv.insertAdjacentHTML('afterbegin', `
    <ul class="context-menu first">
        <li><p class="context-item view">View</p></li>
        <li><p class="context-item sort">Sort by</p></li>
        <li><p class="context-item refresh">Refresh</p></li>
    </ul>
    
    <ul class="context-menu second">
        <li><p class="context-item paste">Paste</p></li>
        <li><p class="context-item paste-shortcut">Paste shortcut</p></li>
    </ul>

    
    <ul class="context-menu third">
        <p class="context-item new">New</p>
    </ul>

    <p class="context-item personalize">Personalize</p>
    `);
  newDiv.style.top = `${event.clientY}px`;
  newDiv.style.left = `${event.clientX}px`;
  deleteContextMenus();
  Object(_desktop__WEBPACK_IMPORTED_MODULE_0__["clearActiveElements"])();
  Object(_desktop__WEBPACK_IMPORTED_MODULE_0__["makeFileActive"])(event);
  mainElement.prepend(newDiv); //добавляет подпункт "Создать новый текстовый файл"

  function createNewFile() {
    let counter = 1; //счетчик файлов

    let newFile = document.createElement('div');
    newFile.classList.add('newFile');
    newFile.insertAdjacentHTML('afterbegin', `
            <span class="new-desktop-item txt">Текстовый документ</span>
            <span class="new-desktop-item folder">Папка</span>
        `);
    newFile.style.top = `${event.clientY + 153}px`;
    newFile.style.left = `${event.clientX + 300}px`;
    mainElement.prepend(newFile); // newFile.addEventListener('click', () => {
    //     new DesktopItem().create(`Новый текстовый документ ${counter}`, 'txt');
    //     counter++;
    // })

    function contextMenu(event) {
      console.log('1');
      console.log(event.target);

      if (!(document.querySelector('.newFile') === null)) {
        removeNewFile();
      }

      document.querySelector('.context-menu').removeEventListener('mouseover', contextMenu);
    }

    if (bool == false) {
      document.querySelector('p.new').addEventListener('mouseleave', () => {
        //выход мыши с "New"
        document.querySelector('.context-menu').addEventListener('mouseover', contextMenu); //добавляем событие наведения на контекстное меню
      });
      bool = true;
    }
  }

  function showNewFile() {
    document.querySelector('p.new').addEventListener('mouseover', () => {
      createNewFile();
    });
  }

  function removeNewFile() {
    document.querySelector('.newFile').remove();
  }

  showNewFile();
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopItem", function() { return DesktopItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return Program; });
/* harmony import */ var _desktop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _explorer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);



class DesktopItem {
  constructor(id) {
    this.el = document.createElement('div');
    this.el.classList.add('desktop-item');
    this.el.dataset.idfile = id;
  }

  create(text, what) {
    this.img = document.createElement('img');
    this.img.setAttribute('alt', 'image');
    this.txt = document.createElement('span');
    this.txt.classList.add('file-name');
    this.txt.innerText = text;
    this.el.insertAdjacentElement('beforeend', this.img);
    this.el.insertAdjacentElement('beforeend', this.txt);

    if (what == 'folder') {
      this.el.classList.add('folder');
      this.img.setAttribute('src', '../icons/desktop-icons/folder.png');
      this.img.classList.add('folder');
    } else if (what == 'txt') {
      this.el.classList.add('txt');
      this.img.setAttribute('src', '../icons/desktop-icons/txt.png');
      this.img.classList.add('txt');
    }

    document.querySelector('.desktop-wrapper').insertAdjacentElement('beforeend', this.el);
  }

}
class Program {
  //what MUST BE like "explorer", "notepad", "browser", "settings" so like classes in CSS
  constructor(what, zIndex = 2) {
    this.element = document.createElement('div');
    this.element.classList.add(what, 'activeProg');
    this.element.style.zIndex = zIndex;
    zIndex++;
  } //создаем передвижение программ


  dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    if (document.querySelector('div.left-programm-title')) {
      /* if present, the header is where you move the DIV from:*/
      document.querySelector('div.left-programm-title').onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event; // get the mouse cursor position at startup:

      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement; // call a function whenever the cursor moves:

      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event; // calculate the new cursor position:

      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY; // set the element's new position:

      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  openTxt(fileName, what, msg = '') {
    let aboutMeValue = msg; // aboutMeValue = `Привет, я учусь в Щелковской шараге на 3 курсе на web-разраба. Вроде как фулл стэк, но даже код для этого проекта я частично Ctrl+C — Ctrl+V...`;

    this.element.insertAdjacentHTML('afterbegin', `
            <div class="title">
                <div class="left-programm-title">
                    <img class="programm-icon" src="./icons/programm-icons/notepad.png" alt="icon">
                    <span class="programm-title">${fileName} — Notepad</span>
                </div>

                <div class="right-programm-title">
                    <span class="programm-change-size semi-close" style="color: #000;">—</span>
                    <img class="programm-change-size full-window" src="./icons/programm-icons/full-window.png" alt="full-window" style="color: transparent;">
                    <!-- <img class="programm-change-size close" src="./icons/programm-icons/close.png" alt="close"> -->
                    <span class="programm-change-size close" style="color: #000;">×</span>
                </div>
            </div>
            
            <nav class="notepad-nav">
                <a class="notepad-navigation-item file">File  
                    <ul class="lists-wrapper">
                        <li>
                            <ul>
                                <li><span>Создать</span></li>
                                <li><span>Открыть</span></li>
                                <li><span class="active_nav_item">Сохранить</span></li>
                                <li><span class="active_nav_item">Сохранить как...</span></li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li><span>Параметры страницы</span></li>
                                <li><span>Печать</span></li>
                            </ul>
                            
                        </li>
                        <li>
                            <ul>
                                <li><span>Выход</span></li>
                            </ul>
                        </li>
                    </ul>
                    
                </a>
                <a class="notepad-navigation-item">Edit</a>
                <a class="notepad-navigation-item">Format</a>
                <a class="notepad-navigation-item">View</a>
                <a class="notepad-navigation-item">HELP</a>
            </nav>

            <div class="notepad-text">
                <textarea name="notepad-message" id="" class="notepad-textarea" resize readonly>${aboutMeValue}</textarea>
            </div>
        `);
    this.giveAllFuncs(what);
  }

  openFolder(fileName, what) {
    this.element.insertAdjacentHTML('afterbegin', `
            <div class="title">
                <div class="left-programm-title left-explorer-title">
                    <img class="explorer-icon" src="./icons/programm-icons/explorer.png" alt="logo">
                    <span class="programm-title">${fileName}</span>
                </div>
                    
                <div class="right-programm-title right-explorer-title">
                    <span class="programm-change-size semi-close">—</span>
                    <img class="programm-change-size full-window" src="./icons/programm-icons/full-window.png" alt="full-window">
                    <!-- <img class="programm-change-size close" src="./icons/programm-icons/close.png" alt="close"> -->
                    <span class="programm-change-size close">×</span>
                </div>
            </div>
            <nav class="explorer-nav">
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
    Object(_explorer__WEBPACK_IMPORTED_MODULE_2__["swapExplorerArrows"])();
  }

  openBrowser(link = 'https://vk.com/im', what) {
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
                    <!-- <img class="programm-change-size close" src="./icons/programm-icons/close.png" alt="close"> -->
                    <span class="programm-change-size close">×</span>
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

  openBin(what) {
    console.log('From function:', "Bin opened");
    this.giveAllFuncs(what);
  }

  openSettings(what) {
    this.element.style.height = '100vh';
    this.element.style.width = '100vw';
    this.element.insertAdjacentHTML('afterbegin', `
        <aside class="left">
                <div class="left-title">
                    <div class="left-programm-title">
                        <span class="settings-title">Parametrs</span>
                    </div>
                </div>

                <div class="first-setting-div">

                    <div class="setting-item" style="margin-bottom: 10px;">
                        <p class="setting-item home">Home</p>
                    </div>

                    <form class="setting-search">
                        <input type="text" placeholder="Search for parametr" class="search-input-text">
                        <input type="submit" class="search-btn" value="">
                    </form>
                    
                    <p class="parametr-name">Personalize</p>

                </div>
                
                <ul class="all-settings">
                    <li>
                        <div class="setting-item">
                            <p class="setting-item desktop-bg">Desktop background</<p>
                        </div>
                    </li>

                    <li>
                        <div class="setting-item">
                            <p class="setting-item desktop-bg">Colors</<p>
                        </div>
                    </li>

                    <li>
                        <div class="setting-item">
                            <p class="setting-item desktop-bg">Login screen</<p>
                        </div>
                    </li>

                    <li>
                        <div class="setting-item">
                            <p class="setting-item desktop-bg">Themes</<p>
                        </div>
                    </li>

                    <li>
                        <div class="setting-item">
                            <p class="setting-item desktop-bg">Fonts</p>
                        </div>
                    </li>
                </ul> 
            </aside>

            <aside class="right">
                <div class="right-programm-title right-settings-title"> 
                    <span class="programm-change-size semi-close">—</span>
                    <img class="programm-change-size full-window" src="./icons/programm-icons/full-window.png" alt="full-window">
                    <!-- <img class="programm-change-size close" src="./icons/programm-icons/close.png" alt="close"> -->
                    <span class="programm-change-size close">×</span>
                </div>

                <h1 class="right-aside-title">Desktop background</h1>

                <img class="desktop-bg-example" src="./settings/desktop-bg-example-1.png" alt="">

                <h3>Background</h3>
                <select id="select-bg-type">
                    <option></option>
                    <option>Photo</option>
                    <option>Color</option>
                    <option>Slides</option>
                </select>

                <div class="choosen">
                    <input type="file" id="select-desktop-image">
                    <label class="select-desktop-image-label" for="select-desktop-image">Обзор</label>
                </div>

                <h3 class="choose-pos">Choose position</h3>
                <select id="select-contain-type">
                    <option data-position="contain">Contain</option>
                    <option data-position="Cover">Cover</option>
                    <option data-position="100%">100%</option>
                    <option  data-position="background-repeat">background-repeat</option>
                </select>
                
            </aside>
        `);
    this.giveAllFuncs(what);
    Object(_settings__WEBPACK_IMPORTED_MODULE_1__["ChangeDesktopBgType"])();
    Object(_settings__WEBPACK_IMPORTED_MODULE_1__["SelectNewColor"])();
    document.querySelector('input.search-btn').addEventListener('click', event => {
      event.preventDefault();
      console.log('Searching...');
    });
  }

  giveAllFuncs(what) {
    const mainElement = document.querySelector('main');
    mainElement.insertAdjacentElement('afterbegin', this.element);
    this.dragElement(document.querySelector(`div.${what}`));
    Object(_desktop__WEBPACK_IMPORTED_MODULE_0__["clearActiveElements"])();
    document.querySelector('span.close').addEventListener('click', _desktop__WEBPACK_IMPORTED_MODULE_0__["closeProgramm"]);
    document.querySelector('img.full-window').addEventListener('click', _desktop__WEBPACK_IMPORTED_MODULE_0__["fullWindow"]);
    document.querySelector('span.semi-close').addEventListener('click', _desktop__WEBPACK_IMPORTED_MODULE_0__["semiCloseWindow"]);
  }

} // document.getElementById('createFolder').addEventListener('click', () => {
//     new DesktopItem().create('Новая папка', 'folder');
// })
// document.getElementById('createText').addEventListener('click', () => {
//     new DesktopItem().create('Новая текстовый файл', 'txt');
// })

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeDesktopBgType", function() { return ChangeDesktopBgType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectNewColor", function() { return SelectNewColor; });
let colors = ['#ff8c00', '#e81123', '#d13438', '#c30052', '#bf0077', '#9a0089', '#881798', '#744da9', '#10893e', '#107c10', '#018574', '#2d7d9a', '#0063b1', '#6b69d6', '#8e8cd8', '#8764b8', '#038387', '#486860', '#525e54', '#7e735f', '#4c4a48', '#515c6b', '#4a5459'];
let photos = ['../desktop-bg/DSC01142.JPG', '../desktop-bg/ken_roczen_suzuki_2015.jpg', '../desktop-bg/pepega.jpg'];
const ChangeDesktopBgType = () => {
  const selectBgDesktop = document.getElementById('select-bg-type'); //сам селект

  selectBgDesktop.addEventListener('change', event => //при изменении
  {
    let value = event.target.options.selectedIndex; //чекаем, какой <option> выбран

    let choosen = document.querySelector('.choosen'); // блок с заголовком и цветами/фотографиями

    switch (value) {
      case 1:
        //value = 0 - фотки
        choosen.innerHTML = `
                <h3 id="choose-photo">Choose a photo</h3>
                <div class="desktop-photos">`;
        photos.forEach(() => {
          document.querySelector('.desktop-photos').insertAdjacentHTML('beforeend', `<div class="desktop-photo"></div>`);
        });
        console.log(document.querySelectorAll('div.desktop-photo'));
        document.querySelectorAll('div.desktop-photo').forEach((element, index) => {
          console.log(index);
          element.style.backgroundImage = `url(${photos[index]})`;
          element.dataset.number = index;
        });
        `</div>
                <input type="file" id="select-desktop-image">
                <label class="select-desktop-image-label" for="select-desktop-image">Обзор</label>
                `;
        document.querySelector('h3.choose-pos').style.display = 'block';
        document.getElementById('select-contain-type').style.display = 'block';
        break;

      case 2:
        //value = 1 - сплошной цвет                                             
        choosen.innerHTML = `
                <h3 id="choose-color">Choose a color</h3>
                    <div class="desktop-colors">`;
        colors.forEach(element => {
          //создаем дивы
          document.querySelector('.desktop-colors').insertAdjacentHTML('beforeend', `
                            <div class="desktop-color"></div>
                            `);
        });
        `</div>`;
        document.querySelectorAll('div.desktop-color').forEach((item, index) => {
          //закрашиваем дивы цветами из массива
          item.style.backgroundColor = colors[index];
          item.dataset.num = index;
        });
        document.querySelector('h3.choose-pos').style.display = 'none'; //скрваем нижний блок

        document.getElementById('select-contain-type').style.display = 'none'; //скрваем нижний блок

        break;

      case 3:
        console.log('value =', 2);
        break;

      default:
        break;
    }
  });
};

const changeBg = () => {
  if (document.getElementById('choose-photo')) {
    let newPhoto = document.querySelector('div.desktop-photo-active').style.backgroundImage;
    document.querySelector('main').style.backgroundColor = '';
    document.querySelector('main').style.backgroundImage = newPhoto;
  }

  if (document.getElementById('choose-color')) {
    let newColor = document.querySelector('div.desktop-color-active').style.backgroundColor;
    document.querySelector('main').style.backgroundImage = 'none';
    document.querySelector('main').style.backgroundColor = newColor;
  }
};

const clearCurrentColor = elem => {
  if (elem.classList.contains('desktop-color')) {
    let allCurrentColors = document.querySelectorAll('div.desktop-color-active');
    allCurrentColors.forEach(item => {
      item.classList.remove('desktop-color-active');
      item.innerHTML = ``;
    });
    elem.classList.add('desktop-color-active');
    elem.innerHTML = `<div class="current-color">✓</div>`;
  }

  if (elem.classList.contains('desktop-photo')) {
    let allCurrentColors = document.querySelectorAll('div.desktop-photo-active');
    allCurrentColors.forEach(item => {
      item.classList.remove('desktop-photo-active');
    });
    elem.classList.add('desktop-photo-active');
  }
};

const SelectNewColor = () => {
  document.querySelector('.choosen').addEventListener('click', () => {
    if (document.getElementById('choose-photo')) {
      console.log('Выбор фото');

      if (event.target.dataset.number) {
        console.log(event.target.dataset.number);
        event.target.classList.add('desktop-photo-active');
        clearCurrentColor(event.target);
      }
    }

    if (document.getElementById('choose-color')) {
      console.log('Выбор цвета');

      if (event.target.dataset.num) {
        console.log(event.target.dataset.num);
        event.target.insertAdjacentHTML('afterbegin', `
                <div class="current-color">✓</div>
                `);
        event.target.classList.add('desktop-color-active');
        clearCurrentColor(event.target);
      }
    }

    changeBg();
  });
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swapExplorerArrows", function() { return swapExplorerArrows; });
//подмена картинок в проводнике
const swapExplorerArrows = () => {
  document.querySelector('img.left-arrow').addEventListener('mouseover', event => {
    document.querySelector('img.left-arrow').setAttribute('src', './icons/programm-icons/to-arrow blue.png');
  });
  document.querySelector('img.left-arrow').addEventListener('mouseout', event => {
    document.querySelector('img.left-arrow').setAttribute('src', './icons/programm-icons/to-arrow white.png');
  });
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swapWinLogo", function() { return swapWinLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDate", function() { return setDate; });
//подмена картинок "Пуск"
const swapWinLogo = () => {
  document.querySelector('div.task-panel-programm').addEventListener('mouseover', event => {
    document.querySelector('img.win').setAttribute('src', './icons/left-panel/win/win-blue.png');
  });
  document.querySelector('div.task-panel-programm').addEventListener('mouseout', event => {
    document.querySelector('img.win').setAttribute('src', './icons/left-panel/win/win-white.png');
  });
}; //функция получения и вывода времени

const setDate = () => {
  //выводим время
  let date = new Date();
  let minutes, hours, seconds, day, month; //чекаем, если часов меньше 10 (однозначное число), то добавлячем 0;

  date.getMinutes() < 10 ? minutes = "0" + date.getMinutes() : minutes = date.getMinutes(); //чекаем, если минут меньше 10 (однозначное число), то добавлячем 0;

  date.getHours() < 10 ? hours = "0" + date.getHours() : hours = date.getHours();
  date.getSeconds() + 1 < 10 ? seconds = "0" + (date.getSeconds() + 1) : seconds = date.getSeconds(); //чекаем номер дня

  date.getDate() < 10 ? day = "0" + date.getDate() : day = date.getDate(); //чекаем номер месяца. +1 потому что 0-11 месяцы считаются

  date.getMonth() + 1 < 10 ? month = "0" + (date.getMonth() + 1) : month = date.getMonth() + 1; //выводим время и дату

  document.querySelector('span.time').textContent = hours + ':' + minutes + ':' + seconds;
  document.querySelector('span.date').textContent = day + '.' + month + '.' + date.getFullYear();
};

/***/ })
/******/ ]);