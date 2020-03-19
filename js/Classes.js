class DesktopItem
{
    constructor()
    {
        this.el = document.createElement('div');
        this.el.classList.add('program');
    }
   
    create(text, what) {
        this.img = document.createElement('img');
        this.img.setAttribute('alt', 'image');

        this.txt = document.createElement('span');
        this.txt.innerText = text

        this.el.insertAdjacentElement('beforeend', this.img);
        this.el.insertAdjacentElement('beforeend', this.txt);
        
        if (what == 'folder')
        {
            this.el.classList.add('folder');
            this.img.setAttribute('src', './folder.png');
            
        } else if (what == 'txt') {
            this.el.classList.add('txt');
            this.img.setAttribute('src', './txt.png');
        }

        document.querySelector('.container').insertAdjacentElement('beforeend', this.el);
    }
}

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
            <div class="title">
                <div class="left-programm-title left-explorer-title">
                    <img class="explorer-icon" src="./icons/programm-icons/explorer.png" alt="logo">
                    <span class="programm-title">${fileName}</span>
                </div>
                    
                <div class="right-programm-title right-explorer-title">
                    <span class="programm-change-size semi-close">—</span>
                    <img class="programm-change-size full-window" src="./icons/programm-icons/full-window.png" alt="full-window">
                    <img class="programm-change-size close" src="./icons/programm-icons/close.png" alt="close">
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

    openBin(what)
    {
        console.log('From function:', "Bin opened");
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

// document.getElementById('createFolder').addEventListener('click', () => {
//     new DesktopItem().create('Новая папка', 'folder');
// })

// document.getElementById('createText').addEventListener('click', () => {
//     new DesktopItem().create('Новая текстовый файл', 'txt');
// })