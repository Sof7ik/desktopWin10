export class DesktopItem
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

// document.getElementById('createFolder').addEventListener('click', () => {
//     new DesktopItem().create('Новая папка', 'folder');
// })

// document.getElementById('createText').addEventListener('click', () => {
//     new DesktopItem().create('Новая текстовый файл', 'txt');
// })