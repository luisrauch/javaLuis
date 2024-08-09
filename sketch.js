function setup() {
  // cria uma tela de 600px de largura por 400px de altura
  createCanvas(600, 400);
}
 
function draw() {
  background(255);
  
  stroke("blue");
  fill("red");
  
  console.log(mouseIsPressed);
  rect(mouseX,mouseY,100,150);
}
