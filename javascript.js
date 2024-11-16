let i = 0;

function shish() {
  const top = document.getElementById("topfold");
  const button = document.getElementById("open");
  const letter = document.getElementById("texthold");
  const space = document.getElementById("space");
  const container = document.getElementById("container");
  
  letter.style.animation = "up 2s ease-out forwards";
  top.style.animation = "lift 0.1s ease-out forwards";
  
  button.style.display = "none";
  space.style.display = "block";

  container.style.animation = "none";

}

/*function zoom() {
  const letter = document.getElementById("texthold");

  letter.style.animation = "lift 1s ease-out forwards";

}*/

function down(){
  const secondparag = document.getElementById("second-p");
  const thirdparag = document.getElementById("third-p");
  const letter = document.getElementById("texthold");
  i++;

  if(i == 1){
    secondparag.style.transition = "2s ease-out";
    secondparag.style.display = "block";
  }else if(i == 2){
    thirdparag.style.transition = "2s ease-out";
    thirdparag.style.display = "block";
  }else{
    secondparag.style.display = "none";
    thirdparag.style.display = "none";
    location.reload();
  }

}