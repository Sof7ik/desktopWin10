import { makeFileActive, checkFileTypeOnDBLClick, renderFiles } from './desktop';
import { setDate, swapWinLogo } from './footer';
import { makeDesktopContextMenu } from './context-menu'; 

// let value, allAudio; //тута мы будем громкость менять

const mainElement = document.querySelector('main');

//каждую минуту перевыводим время и дату
setInterval(() =>{
    setDate();
}, 1000);

setDate();
mainElement.addEventListener('click', makeFileActive);
mainElement.addEventListener('dblclick', checkFileTypeOnDBLClick);

document.querySelectorAll('*').forEach((item) =>
{
    item.addEventListener('contextmenu', makeDesktopContextMenu)
})

swapWinLogo();
renderFiles();