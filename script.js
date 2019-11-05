var button = document.getElementById("half-button");
var fortunebutton = document.getElementById("fortune-button");
var random = ["prosperous","sad","unreal","happy","satisfying","adventerous","fake"];
var main = document.getElementById("inputStuff");
var colors = ["blue", "red", "orange", "black"];
var size = ["smaller", "x-small","larger","medium","xx-large"];
var back =["#ffb3ba","#ffdfba","#ffffba","#baffc9", "#bae1ff"];




button.addEventListener("click",halfNumber);


function halfNumber(){
  var inputContents = document.getElementById("half-input").value;
  var divide = (inputContents/2);
  alert("Half of "+ inputContents +" is " + divide + "!");
  console.log("Half of "+ inputContents +" is " + divide + "!");
}


fortunebutton.addEventListener("click",fortune);


function fortune(){
  var inputName = document.getElementById("fortune-input").value;
  var hello = Math.floor(Math.random()*random.length);

  var randomColor = Math.floor(Math.random()*colors.length);
  var sizes = Math.floor(Math.random()*size.length);
  var backs = Math.floor(Math.random()*back.length);

  var newText= inputName+ " will have a " + random[hello] + " life";
  document.getElementById("inputStuff").innerHTML = newText;

  document.getElementById("inputStuff").style.color = colors[randomColor];
  document.getElementById("inputStuff").style.fontSize = size[sizes];
  document.getElementById("inputStuff").style.backgroundColor = back[backs];

}
