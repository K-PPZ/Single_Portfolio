let img_left = document.getElementById("img_left");
let img_middle = document.getElementById("img_middle");
let img_right = document.getElementById("img_right");

let imgs_carrousel = ["../img/imgs_carrousel/carrousel_1.jpg", "../img/imgs_carrousel/carrousel_2.jpg", "../img/imgs_carrousel/carrousel_3.jpg", "../img/imgs_carrousel/carrousel_4.jpg", "../img/imgs_carrousel/carrousel_5.jpg"];
let i = 2;

img_left.style.backgroundColor = `url('imgs_carrousel${[i-1]}')`;
img_middle.style.backgroundColor = `url('imgs_carrousel${[i]}')`;
img_right.style.backgroundColor = `url('imgs_carrousel${[i+1]}')`;

let arrow_left = document.getElementById("arrow_left");
let arrow_right = document.getElementById("arrow_right");

arrow_left.addEventListener("click", () => {
    i --;

    img_left.style.backgroundColor = `url('imgs_carrousel${[i-1]}')`;
    img_middle.style.backgroundColor = `url('imgs_carrousel${[i]}')`;
    img_right.style.backgroundColor = `url('imgs_carrousel${[i+1]}')`;
});

arrow_right.addEventListener("click", () => {
    i ++;

    img_left.style.backgroundColor = `url('imgs_carrousel${[i-1]}')`;
    img_middle.style.backgroundColor = `url('imgs_carrousel${[i]}')`;
    img_right.style.backgroundColor = `url('imgs_carrousel${[i+1]}')`;
});