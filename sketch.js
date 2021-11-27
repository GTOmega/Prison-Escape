var logovar, startervar, loadvar, settingsvar, quitvar

function preload(){
  logovar = loadImage("assets/temp_logo.png")
  startervar = loadImage("assets/start.png")
  loadvar = loadImage("assets/load.png")
  settingsvar = loadImage("assets/settings.png")
  quitvar = loadImage("assets/quit.png")
}

function setup(){
  createCanvas(windowWidth-50,windowHeight-100);
  
  //making the Logo
  Logo = createSprite(windowWidth/2-10,windowHeight/2-50)
  Logo.addImage("hmmm",logovar)
  Logo.scale = 0.5

  //Start button
  Starta = createSprite(windowWidth/2-10,windowHeight/2-20)
  Starta.addImage("eh",startervar)
  Starta.scale = 0.2

  //Load button
  load = createSprite(windowWidth/2-80,windowHeight/2+30)
  load.addImage("neat",loadvar)
  load.scale = 0.2

  //Settings button
  settings = createSprite(windowWidth/2+80,windowHeight/2+30)
  settings.addImage("neat",settingsvar)
  settings.scale = 0.2

  //Quit button
  quit = createSprite(windowWidth/2-10,windowHeight/2+80)
  quit.addImage("neat",quitvar)
  quit.scale = 0.2
}

function draw() {
  
  background("black");
  drawSprites()      
}