//set a function on click of menu items
var menu_item = document.getElementsByClassName("menu_item");
var a;
for(a = 0; a < menu_item.length; a++) {
    menu_item[a].addEventListener('click', function(e) {menu(e)});
}
//apply style none for all menu items
function menu(event){
    var menu_item = document.getElementsByClassName("menu_item");
    var a;
    for(a = 0; a < menu_item.length; a++) {
        menu_item[a].style.color = "white";
    }
    //apply style for specific menu style
    var eventId = event.target.id;
    document.getElementById(eventId).style.color = "rgb(79, 247, 1)";
    document.getElementById(eventId).style.textDecoration = "none";

    //display chosen item
    var content = document.getElementsByClassName("article");
    var b;
    var elementId = "article" + eventId;
    for(b = 0; b < content.length; b++) {
        content[b].style.display = "none";
        
        if(elementId == "articlehome2"){
        document.getElementById("articletshirts").style.display = "none"; 
        document.getElementById("articlegalery").style.display = "none";
        document.getElementById("articlecontact").style.display = "none";
        document.getElementById("articleprivacy").style.display = "none";   
        document.getElementById("articlehome").style.display = "block"; 
        document.getElementById("home").style.color = "rgb(79, 247, 1)";     
        }
        if(elementId == "articlehome4"){
        document.getElementById("articletshirts").style.display = "none"; 
        document.getElementById("articlegalery").style.display = "none";
        document.getElementById("articlecontact").style.display = "none";
        document.getElementById("articleprivacy").style.display = "none"; 
        document.getElementById("articlehome").style.display = "block"; 
        document.getElementById("home").style.color = "rgb(79, 247, 1)";     
        }
        if(elementId == "articletshirts2"){
            document.getElementById("articletshirts").style.display = "block"; 
            document.getElementById("tshirts").style.color = "rgb(79, 247, 1)";     
        }
        if(elementId == "articlegalery2"){
            document.getElementById("articlegalery").style.display = "block"; 
            document.getElementById("galery").style.color = "rgb(79, 247, 1)";     
        }
        if(elementId == "articlecontact2"){
            document.getElementById("articlecontact").style.display = "block"; 
            document.getElementById("contact").style.color = "rgb(79, 247, 1)";     
        }
        if(elementId == "articlecontact3"){
            document.getElementById("articletshirts").style.display = "none"; 
            document.getElementById("articlegalery").style.display = "none"; 
            document.getElementById("articlecontact").style.display = "block"; 
            document.getElementById("contact").style.color = "rgb(79, 247, 1)";     
        }
        if(elementId == "articlecontact4"){
            document.getElementById("articletshirts").style.display = "none"; 
            document.getElementById("articlegalery").style.display = "none"; 
            document.getElementById("articlecontact").style.display = "block"; 
            document.getElementById("contact").style.color = "rgb(79, 247, 1)"; 
            document.getElementById("modal").style.display = "block"; 
        }
        if(elementId == "articlegalery3"){
            document.getElementById("articletshirts").style.display = "none"; 
            document.getElementById("articlegalery").style.display = "block"; 
            document.getElementById("galery").style.color = "rgb(79, 247, 1)";     
        }
        else{
            document.getElementById(elementId).style.display = "block"; 
        }
    }
}
//reduce header function
window.onscroll = function() {scroll()};
function scroll(){
    var w = window.innerWidth;
    if(w>600){
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            document.getElementById("home3").style.display = "none";
            document.getElementById("text").style.display = "none";
            document.getElementById("carp").style.display = "none";
            document.getElementById("header").style.height = "50px";
            document.getElementById("header").style.display = "block";
        }
        else{
            document.getElementById("home3").style.display = "block";
            document.getElementById("text").style.display = "flex";
            document.getElementById("carp").style.display = "block";
            document.getElementById("header").style.height = "140px";
            document.getElementById("header").style.display = "grid";
        }
    }
}
//modal function for form
function modal(){
    document.getElementById("modal").style.display = "block"; 
}
function inside(){
    document.getElementById("modal").style.display = "none"; 
}
//galery function
var galery_item = document.getElementsByClassName("galery_item");
var c;
for(c = 0; c < galery_item.length; c++) {
    galery_item[c].addEventListener('click', function(evt) {galery(evt)});
}
function galery(event){
    document.getElementById("galeryModal").style.display = "block"; 
    var tshirtId = event.target.id;

    var content2 = document.getElementsByClassName("carouselTshirts");
    var d;
    var contentId = tshirtId + "_Display";
    for(d = 0; d < content2.length; d++) {
        content2[d].style.display = "none";

        document.getElementById(contentId).style.display = "block"; 
    }
}
function inside2(){
    document.getElementById("galeryModal").style.display = "none"; 
}
//print galery function
var printImg = document.getElementsByClassName("printImg");
var f;
for(f = 0; f < printImg.length; f++) {
    printImg[f].addEventListener('click', function(evt) {print(evt)});
}
function print(printImgId){
    var widht = window.innerWidth;
    if(widht>600){
        document.getElementById("modalPrint").style.display = "block"; 
        var printImgId = event.target.id;

        var content3 = document.getElementsByClassName("printImg2");
        var g;
        var contentId2 = "Img_" + printImgId;
        for(g = 0; g < content3.length; g++) {
            content3[g].style.display = "none";

            document.getElementById(contentId2).style.display = "block"; 
        }
    }
}
function inside3(){
    document.getElementById("modalPrint").style.display = "none"; 
}