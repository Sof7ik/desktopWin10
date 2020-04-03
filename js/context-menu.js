//скрытие контекстного меню
const deleteContextMenus = () =>
{
    let allContexts = document.querySelectorAll('div.context-menu');
    allContexts.forEach( (item) => {
        item.remove();
    })
}

//открытие контекстного меню
const makeDesktopContextMenu = (event) =>
{
    let bool = false;

    event.stopPropagation();
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

    function createNewFile(){
        let newFile = document.createElement('div');
        newFile.classList.add('newFile');

        newFile.style.top = `${event.clientY + 153}px`;
        newFile.style.left = `${event.clientX + 299.5}px`;

        mainElement.prepend(newFile);

        if (bool == false)
        {
            document.querySelector('p.new').addEventListener('mouseleave', () => {
                
                document.querySelector('.context-menu').addEventListener('mouseover', function contextMenu(){

                    console.log('1');
                    if(!(document.querySelector('.newFile') === null)){
                        removeNewFile();
                    }
                    document.querySelector('.context-menu').removeEventListener('mouseover', contextMenu);

                })

                document.querySelector('.newFile').addEventListener('mouseover', () => {

                    document.querySelector('.newFile').addEventListener('mouseleave', () => {
                        
                        console.log('2');
                        removeNewFile();

                    })

                })

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