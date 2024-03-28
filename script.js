let data = [
    "Заказ должен быть выполнен любой ценой в обещанные сроки с высоким уровнем качества продаваемого продукта",
    "Мы гарантируем выполнение вашего заказа вовремя с высоким уровнем качества продукции.",
    "Ваш заказ будет доставлен точно в согласованные сроки с высочайшим уровнем качества товаров.",
    "Мы обеспечим выполнение вашего заказа в обещанные сроки и с высоким стандартом качества продукции."

]
class Element {
    constructor(elem) {
        elem.onclick = this.onClick.bind(this);
    }
    
    prodinfo(divElement) {
        newElement(divElement);
    }
    
    onClick(event) {
        const arcElement = event.target.closest('[data-action="prodinfo"]');// Реагирует только на элементы с data-action="gallery".
        this.prodinfo(arcElement);
    }
}
new Element(imagesHolder);

const newElement = (elem) => {
    try {
        //Делаем все дуги видимыми
        const arcElements = document.querySelectorAll('[class^="arc-"]');
        arcElements.forEach((element) => {
            element.style.opacity = '1';
        });
        //делаем все шары полупрозрачными
        const sircleElements = document.querySelectorAll('[class^="mini-circle-"]');
        sircleElements.forEach((element) => {
            element.style.opacity = '40%';
        });


        const element = elem.dataset.order;
        const imageblock = document.querySelector('.image-block');
        const textblock = document.querySelector('.text-holder');
        const arc = document.querySelector(`.arc-${parseInt(element) + 1}`);
        const circle = document.querySelector(`.mini-circle-${parseInt(element) + 1}`);
        //анимации
        imageblock.style.opacity = '0';
        textblock.style.opacity = '0';
        circle.style.opacity = '1';
        arc.style.opacity = '0';


        setTimeout(() => {
            imageblock.innerHTML = `<img src="./src/3block-pic-${parseInt(element) + 1}.png" alt="image">`;
            textblock.innerHTML = `
                <p class="number">0${parseInt(element) + 1}</p>
                <p class="text-info">${data[element]}</p>
                <a class="button white weight-700"><em>О ДОСТАВКЕ</em></a>
            `;
        
            setTimeout(() => {
                //ещё анимации
                imageblock.style.opacity = '1';
                textblock.style.opacity = '1';
            }, 300);
        }, 300);
    }
    catch {}
    
}

window.addEventListener('resize', function() {
    let scriptExecuted = false;
    if (window.innerWidth <= 768 && !scriptExecuted) {
        let block = this.document.querySelector('.third-block')
        block.innerHTML = ``
         for (let i = 0; i < data.length; i++) {
            block.innerHTML +=
            `
                <div class="third-block-js">
                    <div class="image-block-js block-padding">
                        <img src="./src/3block-pic-${i+1}.png">
                    </div>
                    <div class="text-block-js block-padding">
                        <p class="number-js">0${i+1}</p>
                        <p class="text-info-js">${data[i]}</p>
                        <a class="button-js white weight-700"><em>О ДОСТАВКЕ</em></a>
                    </div>
                </div>
            `
         }
        scriptExecuted = true;
    } else if (window.innerWidth >= 768) {
        scriptExecuted = false;
        this.document.querySelector('.third-block').innerHTML = `
            <div class="third-block-content block-padding">
            <div class="image-block">
                <img src="./src/3block-pic-1.png">
            </div>
            <div class="text-block">
                <div class="border-holder">
                    <div class="text-holder">
                        <p class="number">01</p>
                        <p class="text-info">заказ должен быть выполнен любой ценой в обещанные сроки с высоким уровнем качества продаваемого продукта</p>
                        <a class="button white weight-700"><em>О ДОСТАВКЕ</em></a>
                    </div>
                </div>
            </div>
            <div class="circle">
                <div id="imagesHolder">
                    <img class="main-img" src="./src/3block-circle.svg" >
                    <img class="mini-circle-1" src="./src/3block-mini-circle.svg">
                    <img class="mini-circle-2" src="./src/3block-mini-circle.svg">
                    <img class="mini-circle-3" src="./src/3block-mini-circle.svg">
                    <img class="mini-circle-4" src="./src/3block-mini-circle.svg">
                    <img class="arc-1" data-action="prodinfo" data-order="0" src="./src/3block-arc-1.svg">
                    <img class="arc-2" data-action="prodinfo" data-order="1" src="./src/3block-arc-2.svg">
                    <img class="arc-3" data-action="prodinfo" data-order="2" src="./src/3block-arc-3.svg">
                    <img class="arc-4" data-action="prodinfo" data-order="3" src="./src/3block-arc-4.svg">

                </div>
            </div>
        </div>
        `
    }
});