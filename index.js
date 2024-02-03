// -- > არ გამოაქვს ბრაუზერში შედეგი 
// -- > სად ვიძახებ ფუნქციას createDiv();


let mainDivWraper = document.getElementById('posts-wraper');
let overlay = document.getElementById('overlay');
let postContentInfo = document.getElementById('contentPost');
let overlayClose = document.getElementById('close');

function ajax () {

fetch('https://jsonplaceholder.typicode.com/posts', {
    method:'GET'
})

.then (function (information) {
    return information.json()
})


.then (function(infoDataJs) {
        console.log(infoDataJs);

    function createDiv (item) {
        let divElement = document.createElement('div');
            divElement.classList.add('postElement');

    let h3Title = document.createElement('h3');
        h3Title.textContent = item.id;

    let h2Title = divElement.createElement('h2');
        h2Title.textContent = item.title;

    divElement.appendChild(h3Title);
        divElement.appendChild(h2Title);
            mainDivWraper.appendChild(divElement);
                console.log(divElement);

    divElement.addEventListener('click', function () {
        overlay.classList.add('activeOverlay');
    })           

    overlayClose.addEventListener('click', function () {
        overlay.classList.remove('activeOverlay');
    })

    }

    infoDataJs.forEach(function (element) {
        console.log(element); 
    })

})

.catch (function (error) {
    console.log(error);
})  

}  


ajax();