let date, hours, minutes, seconds, day, month; //переменные времени
let target, activeitems, contextMenus;
let aboutMeValue;
let notepad, folder, browser;
let fileName;
let filesFromDatabase;
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

fetch('../php/getfiles.php')
.then((res) =>
{
    return res.json();
})
.then((jsonRes) => {
    filesFromDatabase = jsonRes;
    console.log('arr', filesFromDatabase);
    jsonRes.forEach( (item) => {
        console.log(item);
        // new Program().createTxt(item.filename, item.id);
        new DesktopItem(item.id).create(item.filename, item.type_name);
    })
})