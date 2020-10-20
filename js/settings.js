let colors = [
    '#ff8c00', 
    '#e81123', 
    '#d13438', 
    '#c30052', 
    '#bf0077',
    '#9a0089',
    '#881798',
    '#744da9',
    '#10893e',
    '#107c10',
    '#018574',
    '#2d7d9a',
    '#0063b1',
    '#6b69d6',
    '#8e8cd8',
    '#8764b8',
    '#038387',
    '#486860',
    '#525e54',
    '#7e735f',
    '#4c4a48',
    '#515c6b',
    '#4a5459'
];

let photos = [
    '../desktop-bg/DSC01142.JPG',
    '../desktop-bg/ken_roczen_suzuki_2015.jpg',
    '../desktop-bg/pepega.jpg',
]

export const ChangeDesktopBgType = () =>
{
    const selectBgDesktop = document.getElementById('select-bg-type'); //сам селект
    selectBgDesktop.addEventListener('change', (event) =>       //при изменении
    {
        let value = event.target.options.selectedIndex;             //чекаем, какой <option> выбран
        let choosen = document.querySelector('.choosen');           // блок с заголовком и цветами/фотографиями
        switch (value) {
            case 1: //value = 0 - фотки
                choosen.innerHTML = 
                `
                <h3 id="choose-photo">Choose a photo</h3>
                <div class="desktop-photos">`
                    photos.forEach(() => {
                        document.querySelector('.desktop-photos').insertAdjacentHTML('beforeend',
                        `<div class="desktop-photo"></div>`
                    )})
                    
                    console.log( document.querySelectorAll('div.desktop-photo'));
                    document.querySelectorAll('div.desktop-photo').forEach((element, index) => {
                        console.log(index);
                        element.style.backgroundImage = `url(${photos[index]})`;
                        element.dataset.number = index;
                    });
                `</div>
                <input type="file" id="select-desktop-image">
                <label class="select-desktop-image-label" for="select-desktop-image">Обзор</label>
                `
                document.querySelector('h3.choose-pos').style.display = 'block';
                document.getElementById('select-contain-type').style.display = 'block';
                break;
            
            case 2: //value = 1 - сплошной цвет                                             
                choosen.innerHTML = 
                `
                <h3 id="choose-color">Choose a color</h3>
                    <div class="desktop-colors">`
                        colors.forEach(element => {     //создаем дивы
                            document.querySelector('.desktop-colors').insertAdjacentHTML('beforeend', 
                            `
                            <div class="desktop-color"></div>
                            `)
                        });
                `</div>`;
                
                document.querySelectorAll('div.desktop-color').forEach( (item, index) => {  //закрашиваем дивы цветами из массива
                    item.style.backgroundColor = colors[index];
                    item.dataset.num = index;
                })
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
}

const changeBg = () =>
{
    
    if(document.getElementById('choose-photo'))
    {
        let newPhoto = document.querySelector('div.desktop-photo-active').style.backgroundImage;
        document.querySelector('main').style.backgroundColor = '';
        document.querySelector('main').style.backgroundImage = newPhoto;
    }

    if(document.getElementById('choose-color'))
    {
        let newColor = document.querySelector('div.desktop-color-active').style.backgroundColor;
        document.querySelector('main').style.backgroundImage = 'none';
        document.querySelector('main').style.backgroundColor = newColor;
    }
}

const clearCurrentColor = (elem) =>
{
    

    if(elem.classList.contains('desktop-color'))
    {
        let allCurrentColors = document.querySelectorAll('div.desktop-color-active');
        allCurrentColors.forEach( (item) =>
        {
            item.classList.remove('desktop-color-active');
            item.innerHTML = ``;
        })

        elem.classList.add('desktop-color-active')
        elem.innerHTML = `<div class="current-color">✓</div>`;
    }
    if(elem.classList.contains('desktop-photo'))
    {
        let allCurrentColors = document.querySelectorAll('div.desktop-photo-active');
        allCurrentColors.forEach( (item) =>
        {
            item.classList.remove('desktop-photo-active');
        })
        elem.classList.add('desktop-photo-active')
    }
}

export const SelectNewColor = () =>
{
    document.querySelector('.choosen').addEventListener('click', () => {

        if(document.getElementById('choose-photo'))
        {
            console.log('Выбор фото');
            if (event.target.dataset.number)
            {
                console.log(event.target.dataset.number);
                event.target.classList.add('desktop-photo-active');
                clearCurrentColor(event.target);
            }
        }

        if(document.getElementById('choose-color'))
        {
            console.log('Выбор цвета');
            if (event.target.dataset.num)
            {
                console.log(event.target.dataset.num);
                event.target.insertAdjacentHTML('afterbegin', `
                <div class="current-color">✓</div>
                `);
                event.target.classList.add('desktop-color-active');
                clearCurrentColor(event.target);
            }
        }
        changeBg();
    })
}