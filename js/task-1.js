const picture = [
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
];
//1.Создание и рендер разметки по массиву данных и предоставленному шаблону.
/*<li class="gallery__item">
<a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
>
    <img
        class="gallery__image"
        src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
        data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
        alt="Tulips"
    />
</a>
</li >*/
/*const refs = [
    pictureConteiner: document.querySelector('ul.js-gallery'),

];*/


const refs = {
    pictureConteiner: document.querySelector('ul.js-gallery'),
    modalIsOpen: document.querySelector('div.lightbox'),
    closeModal: document.querySelector('button[data-action="close-lightbox"]'),
    replacementLightboxImageAtribute:document.querySelector('img.lightbox__image'),
};

const cardsMarkup = gallaryPictureCards(picture);

refs.pictureConteiner.insertAdjacentHTML('beforeend', cardsMarkup);


function gallaryPictureCards(picture) {
    return picture
        .map(({ preview, original, description }) => {
            return `
            <li 
                    class="gallery__item">
                <a 
                    class ="gallery__link"
                    href = "${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}" /></a >
                </li > `;
        })
        .join('');
}
        
//2.Реализация делегирования на галерее ul.js - gallery и получение url большого изображения. 
refs.pictureConteiner.addEventListener('click', onPictureConteinerClick);

function onPictureConteinerClick(evt) {  
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
  console.log('evt.target', evt.target.nodeName);

}




//3.Открытие модального окна по клику на элементе галереи.


refs.pictureConteiner.addEventListener('click', onModalOpen)
function onModalOpen(evt) {
    evt.preventDefault();
    if (evt.target.nodeName === 'IMG') {
         refs.modalIsOpen.classList.add('is-open');
       // 4.Подмена значения атрибута src элемента img.lightbox__image
        
    refs.replacementLightboxImageAtribute.src = evt.target.dataset.source;  
    }
    
}  
//5.Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].

refs.closeModal.addEventListener('click', oncloseModalClick);
function oncloseModalClick(evt) {
    if (evt.target.nodeName === 'BUTTON') {
        refs.modalIsOpen.classList.remove('is-open');
    //6.Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
        refs.replacementLightboxImageAtribute.src = " ";  
    }
};



