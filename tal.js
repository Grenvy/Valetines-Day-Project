var count = 0;
var yesBut = document.getElementById("Yes");
var noBut = document.getElementById("No");

function YesButton() {

    var img = document.getElementById("billy");
    img.src='https://i.pinimg.com/564x/fd/b3/32/fdb332b722ea24c4b29f27ca6ed8e8f8.jpg';    
    document.getElementById("jimmy").innerHTML= "YAY!";
    document.getElementById("title").innerHTML = " ";
    
    document.getElementById("No").innerHTML = " ";
    document.getElementById("Yes").innerHTML = " ";
}


function increaseSize() {
    var currentSize = parseInt(window.getComputedStyle(yesBut).fontSize);

    // Increase the font size (you can adjust the increment as needed)
    var newSize = currentSize + 2;

    yesBut.style.fontSize = newSize + "px";
}


function NoButton(){
count++;
if(count==1) {
    document.getElementById("No").innerHTML = "Please";
    document.getElementById("Yes").innerHTML = "CHOOOOOOSE ME";
   
} else if(count==2) {
    document.getElementById("No").innerHTML = "I'm on my knees";
    document.getElementById("Yes").innerHTML = "PICKKKKK ME PLEASE";
} else if (count==3){
    document.getElementById("No").innerHTML = "POOKIE PLEASE";
    document.getElementById("Yes").innerHTML = "WHY ARE YOU SAYING NO"; 
} else {
    document.getElementById("No").innerHTML = "Ur Fake";

}
} 