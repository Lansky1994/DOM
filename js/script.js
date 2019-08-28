let menu = document.querySelector('.menu'),
    liLast = document.createElement('li'),
    img = document.querySelector('body'),
    div = document.getElementById('title'),
    column = document.querySelector('.column .adv'),
    menui = document.getElementsByClassName('menu-item'),
    pro = document.getElementById('prompt');

function web() {

    menu.insertBefore(menui[2], menui[1]);
    liLast.classList.add('menu-item');

    // document.body.appendChild(liLast);
    menu.appendChild(liLast);
    // liLast.innerHTML = "Пятый пункт";
    liLast.textContent = 'Пятый пункт';

    // console.log(liLast);

    // document.body.style.background(img);
    img.style.background = ('url(img/apple_true.jpg)');
    div.innerHTML = 'Мы продаем только подлинную технику Apple';

    column.remove(); 

}   

function done(){
    setTimeout( function(){
        pro.innerHTML = prompt('Какое у вас отношение к техники Apple?', '');
      }, 500 );
}

web();
done();