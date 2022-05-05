let setting;
let sun;
let moon;
let cactus;
let sunray;
let skull;
let olmec;

let olde;

let a = 0.0
let b = 0.0

let angle = 0

let c;


function setup() {
 c = createCanvas(500, 650);
  let x = (windowWidth - width/0.5) ;
  let y = (windowHeight - height/2) ;
  c.position (x,y)
  angleMode(DEGREES)
}
function preload(){
  
  setting = loadImage("blue.jpg")
  sun = loadImage("sun.png")
  moon = loadImage("moon.png")
  cactus = loadImage("cactus.png")
  sunray = loadImage("sunray.png")
  skull = loadImage("skull.png")
  olmec = loadImage("olmec.png")
  
  olde = loadFont('olde.ttf')
 
}
function draw() {
  
  //background
  image(setting, 0, 0, width, height)
  
   for (var x = 0; x<= width; x = x + 30){
    for (var y = 0; y<= height; y = y + 30){
      fill (255)
      stroke(255)
      ellipse(x,y,1,2)
    }
  }
  
  //sunray
  push()
    a = a + 0.5
  b = cos(a)*1.5
  if(b > 0){
     b = cos(a)*2 
  }
  
  imageMode(CENTER)
  rectMode(CENTER)
  translate(250,325)
  scale(b)
  image(sunray,0,0,300,300)
  pop()
  
  push()
    a = a + 0.5
  b = cos(a)*2 
  
  imageMode(CENTER)
  rectMode(CENTER)
  translate(250,325)
  scale(b)
  image(sunray,0,0,350,350)
  pop()
  
  
  //sun
   push()
  imageMode(CENTER)
  translate (150,100)
  rotate(angle)
  angle = angle +1 
  image(sun, 0,0,150,150)
  pop()
  
  //moon 
   push()
  
   translate (350,100)
  rotate(angle)
  angle = angle + 1 
  imageMode(CENTER)
  image(moon,0,0,70,70)
  pop()
  
  //cactus
  image(cactus,100,80,300,350)
  
  image(cactus,200,200,300,350)
  
  image(cactus,-10,200,300,350)
  
  //skull
  image(skull,100,300,300,300)
  
  //olmec
  image(olmec, 105, 390, 300,300)
  
  //text
   noStroke()
  fill(0)
  textFont(olde)
  textSize(10)
  text('SIN MIEDO', 223,450)
  text ('POR VIDA',225, 470)
  
  
  
  
}