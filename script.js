
let totalImg = 3;

let imgNumber = 1;
let img = document.getElementById('img');

document.getElementById('next').addEventListener('click',function(){
    if(imgNumber == totalImg){
        imgNumber = 1;
        let url = `img/img (${imgNumber}).png`;
        img.setAttribute('src',url);
    }
    else{
        imgNumber = imgNumber + 1;
        let url = `img/img (${imgNumber}).png`;
        img.setAttribute('src',url);
    }
})

document.getElementById('pre').addEventListener('click',function(){
    if(imgNumber == 1){
        imgNumber = totalImg;
        let url = `img/img (${imgNumber}).png`;
        img.setAttribute('src',url);
    }
    else{
        imgNumber = imgNumber - 1;
        let url = `img/img (${imgNumber}).png`;
        img.setAttribute('src',url);
    }
})