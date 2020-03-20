let selectBgDesktop, value, choosen;
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

const ChangeDesktopBgType = () =>
{
    selectBgDesktop = document.getElementById('select-bg-type');
    // console.log(selectBgDesktop);
    selectBgDesktop.addEventListener('change', (event) =>
    {
        value = event.target.options.selectedIndex;
        choosen = document.querySelector('.choosen');
        // console.log(event);
        switch (value) {
            case 0:
                choosen.innerHTML = 
                `<h3>Choose a photo</h3>
                    <div class="desktop-photos">
                        <div class="desktop-photo" data-number="1"></div>
                        <div class="desktop-photo" data-number="2"></div>
                        <div class="desktop-photo" data-number="3"></div>
                        <div class="desktop-photo" data-number="4"></div>
                        <div class="desktop-photo" data-number="5"></div>
                    </div>
                    <input type="file" id="select-desktop-image">
                    <label class="select-desktop-image-label" for="select-desktop-image">Обзор</label>
                    `
                console.log('value =', 0);
                document.querySelector('h3.choose-pos').style.display = 'block';
                document.getElementById('select-contain-type').style.display = 'block';
                break;
            
            case 1:
                choosen.innerHTML = 
                `
                <h3>Choose a color</h3>
                    <div class="desktop-colors">`
                        colors.forEach(element => {
                            document.querySelector('.desktop-colors').insertAdjacentHTML('beforeend', 
                            `
                            <div class="desktop-color"></div>
                            `)
                        });
                `</div>`;

                

                console.log('value =', 1);
                
                document.querySelectorAll('div.desktop-color').forEach( (item, index) => {
                    item.style.backgroundColor = colors[index];
                    item.dataset.num = index;
                })
                document.querySelector('h3.choose-pos').style.display = 'none';
                document.getElementById('select-contain-type').style.display = 'none';

                break;

            case 2:
                console.log('value =', 2);
                break;

            default:
                break;
        }
        
    });
}

const clearCurrentColor = (elem) =>
{
    let allCurrentColors = document.querySelectorAll('div.desktop-color-active');
    allCurrentColors.forEach( (item) =>
    {
        if(item.classList.contains('desktop-color-active')) {
            item.classList.remove('desktop-color-active');
            item.innerHTML = ``;
        }

        elem.classList.add('desktop-color-active');
        elem.innerHTML = `<div class="current-color">✓</div>`;
        let newColor = document.querySelector('div.desktop-color-active').style.backgroundColor;
        document.querySelector('main').style.backgroundImage = 'none';
        document.querySelector('main').style.backgroundColor = newColor;
    })
}

const SelectNewColor = () =>
{
    choosen = document.querySelector('.choosen');
    document.querySelector('.choosen').addEventListener('click', () => {

        if (event.target.dataset.num)
        {
            event.target.insertAdjacentHTML('afterbegin', `
                <div class="current-color">✓</div>
            `);
            event.target.classList.add('desktop-color-active');
            clearCurrentColor(event.target);
        }

    })

}