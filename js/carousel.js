var i=0;
var images=[];
var time=3000;

images[0]='../img/home1.jpg';
images[1]='../img/home2.jpg';
images[2]='../img/home3.jpg';
images[3]='../img/home4.jpg';
images[4]='../img/home5.jpg';
images[5]='../img/home6.jpg';
images[6]='../img/home7.jpg';
images[7]='../img/home8.jpg';
images[8]='../img/home9.jpg';
images[9]='../img/home10.jpg';
images[10]='../img/home11.jpg';

function changeImg(){
    document.slide.src=images[i];

    if(i<images.length-1) {
        i++;
    }
    else {
        i=0;
    }

setTimeout("changeImg()",time);

}
window.onload=changeImg;
