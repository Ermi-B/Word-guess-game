//buttons
var start = document.querySelector(".startBtn");
var scores = document.querySelector(".scoresBtn");

//containers
var container = document.querySelector(".container")
var menu = document.querySelector(".menu");

var words = ['javascript','python','java','react'];

//eventlistener
start.addEventListener("click", function(){
    
 menu.style.display = "none";
 var containerPlay = document.createElement("div");
 containerPlay.className = "containerPlay";
 containerPlay.setAttribute("style","display:flex; flex-direction:row; justify-content: space-evenly;");

 container.appendChild(containerPlay);



var rand = Math.floor(Math.random()*words.length);
var randWord = words[rand];

for(var i=0; i<randWord.length; i++){

    var input = document.createElement("input");
    input.type = "text";
    input.maxLength="1";
    input.setAttribute("style", " width:100px; height:100px; margin:5%; border-style:none; border-bottom:2px solid black; font-size:80px; text-align:center;");

    //checking input value only contains alphabets

    input.addEventListener('keydown',function(e){
        var key = e.key;
        var alphabets = /[a-zA-Z]/;
        if(!alphabets.test(key)){
            e.preventDefault();
        }
    });
    
    

    containerPlay.appendChild(input);

}

});

