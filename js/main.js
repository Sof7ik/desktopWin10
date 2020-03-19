let date, hours, minutes, seconds, day, month; //переменные времени
let target, activeitems, contextMenus;
let aboutMeValue;
let notepad, folder, browser;
let fileName;
let zIndex = 2;

// let value, allAudio; //тута мы будем громкость менять

const mainElement = document.querySelector('main');

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
    item.addEventListener('contextmenu', makeDesktopContextMenu)
})

swapWinLogo();