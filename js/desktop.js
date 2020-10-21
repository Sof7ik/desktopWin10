let fileId;

import { deleteContextMenus } from './context-menu';
import { Program, DesktopItem } from './Classes';

//закрытие программы
export const closeProgramm = (event) => {
    event.target.parentElement.parentElement.parentElement.remove();
}

export const fullWindow = (event) =>
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
    
export const semiCloseWindow = (event) =>
{
    let parentElement = event.target.parentElement.parentElement.parentElement;
    parentElement.style.opacity = 0.3;
}

//функция выделения "файлов" при клике
export const makeFileActive = (event) => {
    let target = event.target.parentElement;

    if (target.tagName == "DIV" && target.classList.contains('desktop-item')) {
        clearActiveElements();
        target.classList.toggle('active');
    }

    if(target.tagName == "MAIN" || target.tagName == "BODY") {
        clearActiveElements();
    }
}

//убираем выделение с файла
export const clearActiveElements = () => {
    let activeItems = document.querySelectorAll('div.active');
    activeItems.forEach((item) => {
        item.classList.remove('active');
    })
    deleteContextMenus();
}

const getFilesFromDB = async () => {
    return await fetch('../php/getfiles.php'); 
}

export const renderFiles = () => {
    getFilesFromDB()
    .then(res => res.json())
    .then(items => {
        items.forEach(file => {
            new DesktopItem(file.id).create(file.filename, file.type_name);
        });
    })
}

//проверяем, на что кликнули - ярлык, папка, текстовый документ
export const checkFileTypeOnDBLClick = (event) => {
    getFilesFromDB()
    .then(res => {
        return res.json();
    })
    .then(filesFromDatabase => {
        let target = event.target.parentElement;
        let fileName = target.lastElementChild.textContent;
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
            new Program('browser').openBrowser('https://vk.com/', 'browser');
        }

        if (target.classList.contains('desktop-settings'))
        {
            new Program('settings').openSettings('settings');
        }
    })
}
