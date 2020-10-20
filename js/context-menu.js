//let bool = false;

// счеткик номеров файлов
// let counter = 1;

const mainElement = document.querySelector('main');

import {clearActiveElements, makeFileActive} from './desktop';
import { DesktopItem } from './Classes';

const insertFileToDb = (fileType, fileName) => {
    let formData = new FormData();
    
    formData.append('fileType', fileType);
    formData.append('fileName', fileName);

    fetch('./../php/newFile.php', {
        method: 'POST',
        body: formData
    })
}

//скрытие контекстного меню
export const deleteContextMenus = () =>
{
    let allContexts = document.querySelectorAll('div.context-menu');
    allContexts.forEach( (item) => {
        item.remove();
    })
    if(!(document.querySelector('.newFile') === null)){
        document.querySelector('.newFile').remove();
    }
}

//открытие контекстного меню
export const makeDesktopContextMenu = (event) =>
{
    let bool = false;
    // event.stopPropagation();
    event.preventDefault();
    
    let newDiv = document.createElement('div');
    newDiv.classList.add('context-menu')
    newDiv.insertAdjacentHTML('afterbegin',
    `
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
    `)
    
    newDiv.style.top = `${event.clientY}px`;
    newDiv.style.left = `${event.clientX}px`;

    deleteContextMenus();
    clearActiveElements();
    makeFileActive(event);
    
    mainElement.prepend(newDiv);


    //добавляет подпункт "Создать новый текстовый файл"
    function createNewFile(){
        let counter = 1; //счетчик файлов
        let newFile = document.createElement('div');
        newFile.classList.add('newFile');
        newFile.insertAdjacentHTML('afterbegin', 
        `
            <span class="new-desktop-item txt">Текстовый документ</span>
            <span class="new-desktop-item folder">Папка</span>
        `);

        newFile.style.top = `${event.clientY + 153}px`;
        newFile.style.left = `${event.clientX + 300}px`;

        mainElement.prepend(newFile);

        // newFile.addEventListener('click', () => {
        //     new DesktopItem().create(`Новый текстовый документ ${counter}`, 'txt');
        //     counter++;
        // })

        function contextMenu(event){

            console.log('1');
            console.log(event.target);
            if(!(document.querySelector('.newFile') === null)){
                removeNewFile();
            }
            document.querySelector('.context-menu').removeEventListener('mouseover', contextMenu);

        }

        if (bool == false)
        {
            document.querySelector('p.new').addEventListener('mouseleave', () => {  //выход мыши с "New"
                document.querySelector('.context-menu').addEventListener('mouseover', contextMenu) //добавляем событие наведения на контекстное меню
            })
            bool = true;
        }

    }

    function showNewFile(){
        document.querySelector('p.new').addEventListener('mouseover', () => {
            createNewFile();
        })
    }

    function removeNewFile(){
        document.querySelector('.newFile').remove();
    }

    showNewFile();
}
