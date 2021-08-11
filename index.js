
function renderAll(){
    // console.log(localStorage);
    Object.keys(localStorage).forEach(function(key){
        // console.log(localStorage.getItem(key));
        var app = document.querySelector('.lists');
        var ul = document.createElement('ul');
        var li = document.createElement('li');
        var span = document.createElement('span');
        span.innerHTML='<i class="fas fa-trash"></i>';
        li.innerHTML = localStorage.getItem(key);
        li.appendChild(span);
        ul.appendChild(li);
        app.appendChild(ul)
    });

    // console.log(storedElement);
    // for(var e in storedElement){
    //     // console.log(storedElement[e]);
        // var app = document.querySelector('.lists');
        // var ul = document.createElement('ul');
        // var li = document.createElement('li');
        // var span = document.createElement('span');
        // span.innerHTML='<i class="fas fa-trash"></i>';
        // li.innerHTML = storedElement[e];
        // li.appendChild(span);
        // ul.appendChild(li);
        // app.appendChild(ul);

    // }
}

function updateStorage(){

}

var myForm = document.querySelector("#myForm");
myForm.addEventListener("submit", function(e){
    e.preventDefault();
    // console.log(e.target[0].value);
    if(e.target[0].value != ''){
        localStorage.setItem(e.target[0].value, e.target[0].value);
        console.log(localStorage);
        addTodo(e.target[0].value)
    }
    
    const myInput = document.querySelector("#myInput");
    myInput.value='';
    myInput.focus();
});

function addTodo(text){
    var ul = document.querySelector('ul');
    var li = document.createElement('li');
    var span = document.createElement('span');
    span.innerHTML='<i class="fas fa-trash"></i>';
    li.innerHTML = text;
    li.appendChild(span);
    ul.appendChild(li);
}



//event delegation
var appContainer = document.querySelector(".lists");
appContainer.addEventListener('click', function(e){
    // console.log(e.target);
    // console.log(e.target.classList.contains("fas") || e.target.classList.contains("item-span"));
    if(e.target.classList.contains("fas") || e.target.classList.contains("item-span")){ // span or delete icon
        if(e.target.classList.contains("fas")){
            //if clicked on delete icon then we are removing parent of parent i.e icon->span->li
            // console.log(e.target.parentNode.parentNode.textContent);
            localStorage.removeItem(e.target.parentNode.parentNode.textContent);
            console.log(localStorage);
            e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
        }else{
            //if clicked on span then we are removing parent  i.e span->li
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);    
        }
    }else{
        // if clicked on li
        e.target.className = "decorate";
    }
    
});