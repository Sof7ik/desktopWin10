const mainElement = document.querySelector('main');

import {clearActiveElements, makeFileActive, renderFiles} from './desktop';

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

const prepareFileInfo = (fileType, fileName) =>
{
    let formData = new FormData();

    console.log('fileType', fileType);
    console.log('fileType', fileName);

    if (fileName.trim() !== '') 
    {
        formData.append('fileName', fileName);
    } else {
        throw new Error('Пустое имя файла!')
    }

    if (typeof fileType === 'number')
    {
        if (fileType !== 0) {
            formData.append('fileType', fileType);
        } else
        {
            throw new Error('Неизвестный тип файла!')
        }
    } else {
        throw new Error('Тип файла передан в неправильном формате!')
    }
    
    return formData;
}

const insertFileToDb = async (fileTypeToPrepare, fileNameToPpepare) => {
    await fetch('/php/newFile.php', {
        method: 'POST',
        body: prepareFileInfo(fileTypeToPrepare, fileNameToPpepare)
    })
    .then(res => res.json())
    .then(json => console.log(json))

    renderFiles();
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

    function generateNewFile() {
        //счетчик файлов
        function counterFunc (counter) {
            let innerCounter = counter;
            return function () {
                return ++innerCounter;
            }
        }

        const folderCounter = counterFunc(0);
        const txtCounter = counterFunc(0);

        document.querySelectorAll('div.newFile span.new-desktop-item')
        .forEach(button => {
            button.addEventListener('click', (e) => {
                let fileType = parseInt(e.target.dataset.dbtype, 10);
                let fileName = '', tempFileId = 0;

                switch (e.target.classList[1]) {
                    case 'txt':
                        tempFileId = txtCounter();
                        fileName = `Новый текстовый документ ${tempFileId}`;
                        break;

                    case 'folder':
                        tempFileId = folderCounter();
                        fileName = `Новая папка ${tempFileId}`;
                    default:
                        break;
                }

                insertFileToDb(fileType, fileName);
            })
        })
    }

    //добавляет подпункт "Создать новый текстовый файл"
    function createNewFile()
    {
        let newFile = document.createElement('div');
        newFile.classList.add('newFile');
        newFile.insertAdjacentHTML('afterbegin', 
        `
            <span class="new-desktop-item txt" data-dbtype="1">Текстовый документ</span>
            <span class="new-desktop-item folder" data-dbtype="2">Папка</span>
        `);

        newFile.style.top = `${event.clientY + 153}px`;
        newFile.style.left = `${event.clientX + 300}px`;

        mainElement.prepend(newFile);

        function contextMenu(event){

            // console.log('1');
            // console.log(event.target);
            if(!(document.querySelector('.newFile') === null)){
                removeNewFile();
            }
            document.querySelector('.context-menu').removeEventListener('mouseover', contextMenu);

        }

        generateNewFile();

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
