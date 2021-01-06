var bg1 , bg2 , bg3;
var welcome , welcomeMusic;
var bgMusic;
var hero , heroBack;
var message;
var drAni;
var doorImg;
var platform;
var plPlatform;
var gameover

var r11,r12,r13 , r21,r22,r23 ,r31,r32,r33;
var r11i,r12i,r13i , r21i,r22i,r23i ,r31i,r32i,r33i;

var dr1,dr2,dr3,dr4,dr5,dr6,d7,dr8,dr9;

var gameState = 0;

var scene = 0;

var cnv;
var overlay,overlaySize;

var textCounter;
var visibility =255;
var timer = 5;
var fade;
var fadeAmount = 1

function preload(){

  r11i = loadImage("/assets/riddle1-2.png");
  r12i = loadImage("/assets/riddle1-1.png");
  r13i = loadImage("/assets/riddle1-3.png");

  r21i = loadImage("/assets/riddle2-1.png");
  r22i = loadImage("/assets/riddle2-2.png");
  r23i = loadImage("/assets/riddle2-3.png");

  r31i = loadImage("/assets/riddle3-1.png");
  r32i = loadImage("/assets/riddle3-2.png");
  r33i = loadImage("/assets/riddle3-3.png");

  bg1 = loadImage("/assets/bg1.jpg");
  bg2 = loadImage("/assets/bg2.jpg");
  bg3 = loadImage("/assets/bg3.jpg");

  welcome = loadImage("/assets/welcome.png");
  welcomeMusic = loadSound("/assets/aniMusic1.mp3");

  bgMusic = loadSound("/assets/music.mp3");

  hero = loadImage("/assets/hero.png");
  heroBack = loadImage("/assets/heroBack.png");

  messageImg = loadImage("/assets/amusePop.png");

  doorImg = loadAnimation("/assets/door1.png")
  drAni = loadAnimation("/assets/door4.png");

  platform = loadImage("/assets/platform.png");

  plPlatform = loadImage("/assets/plPlatform.png");

  gameover = loadImage("/assets/lostImg.jpg");
  overlay = loadImage("/assets/overlay.png");

  welcomeMsg = loadImage("/assets/welcomeMSG.png");

  musicOnImg = loadImage("/assets/musicOn.png");
  musicOffImg = loadImage("/assets/musicOff.png");

  rule = loadImage("/assets/rules.png");
  winImg = loadImage("/assets/win2.jpg");
  starsImg = loadImage("/assets/stars.png");
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);

  window.answer = "";

  btnNext = createButton("Next");
  btnNext.mousePressed(()=>gameState=1);
  btnNext.position(width/2 , height/1.2);
  btnNext.hide();

  btnPlay = createButton('Play'); //createImg('assets/musicOn.png');
  btnPlay.mousePressed(togglePlay);
  btnPlay.position(width/1.1 , height/1.1);
  btnPlay.style("background-image: url('assets/musicOff1.png');color: transparent;background-size: cover;padding: 10px 10px 10px 10px;background-position: center;border: hidden;)");
  
  slider = createSlider(0,1,0.5,0.01);
  slider.position(width/1.1 - 30, height/1.03);
  
  message = createSprite(width/1.7,height/7.5,10,10);
  message.addImage(messageImg);
  message.scale = 0.7;
  message.visible = false;

  dr1 = createSprite(width/7,height/2.1,10,10);
  dr1.addAnimation("closed",doorImg);
  dr1.addAnimation("animation",drAni);
  dr1.scale = 1.5;
  dr1.visible = false;
  
  dr2 = createSprite(width/2,height/2.1,10,10);
  dr2.addAnimation("closed",doorImg);
  dr2.addAnimation("animation",drAni);
  dr2.scale = 1.5;
  dr2.visible = false;

  dr3 = createSprite(width/1.2,height/2.1,10,10);
  dr3.addAnimation("closed",doorImg);
  dr3.addAnimation("animation",drAni);
  dr3.scale = 1.5;
  dr3.visible = false;

  dr4 = createSprite(width/7,height/2.1,10,10);
  dr4.addAnimation("closed",doorImg);
  dr4.addAnimation("animation",drAni);
  dr4.scale = 1.5;
  dr4.visible = false;
  
  dr5 = createSprite(width/2,height/2.1,10,10);
  dr5.addAnimation("closed",doorImg);
  dr5.addAnimation("animation",drAni);
  dr5.scale = 1.5;
  dr5.visible = false;

  dr6 = createSprite(width/1.2,height/2.1,10,10);
  dr6.addAnimation("closed",doorImg);
  dr6.addAnimation("animation",drAni);
  dr6.scale = 1.5;
  dr6.visible = false;

  dr7 = createSprite(width/7,height/2.1,10,10);
  dr7.addAnimation("closed",doorImg);
  dr7.addAnimation("animation",drAni);
  dr7.scale = 1.5;
  dr7.visible = false;
  
  dr8 = createSprite(width/2,height/2.1,10,10);
  dr8.addAnimation("closed",doorImg);
  dr8.addAnimation("animation",drAni);
  dr8.scale = 1.5;
  dr8.visible = false;

  dr9 = createSprite(width/1.2,height/2.1,10,10);
  dr9.addAnimation("closed",doorImg);
  dr9.addAnimation("animation",drAni);
  dr9.scale = 1.5;
  dr9.visible = false;

  r11 = createSprite(width/5,height/4.5);
  r11.addImage(r11i);
  r11.scale = 0.3;
  r11.visible = false;

  r12 = createSprite(width/1.8,height/4.5);
  r12.addImage(r12i);
  r12.scale = 0.3;
  r12.visible = false;

  r13 = createSprite(width/1.1,height/4.5);
  r13.addImage(r13i);
  r13.scale = 0.3;
  r13.visible = false;

  r21 = createSprite(width/5,height/4.5);
  r21.addImage(r21i);
  r21.scale = 0.3;
  r21.visible = false;

  r22 = createSprite(width/1.8,height/4.5);
  r22.addImage(r22i);
  r22.scale = 0.3;
  r22.visible = false;

  r23 = createSprite(width/1.1,height/4.5);
  r23.addImage(r23i);
  r23.scale = 0.3;
  r23.visible = false;

  r31 = createSprite(width/5,height/4.5);
  r31.addImage(r31i);
  r31.scale = 0.3;
  r31.visible = false;

  r32 = createSprite(width/1.8,height/4.5);
  r32.addImage(r32i);
  r32.scale = 0.3;
  r32.visible = false;

  r33 = createSprite(width/1.1,height/4.5);
  r33.addImage(r33i);
  r33.scale = 0.3;
  r33.visible = false;

  overlaySize = 1;
  textCounter = 0;
  fade=0;
}

function draw() { 
  
  if(gameState === 0){
    background(welcome);
    image(hero , width/1.3 , height/4.5);

    if(overlaySize < 100){
      overlaySize++;
    }
    imageMode(CENTER);
    image(messageImg,width/1.7,height/7.5 ,overlaySize*6, overlaySize*2);
    image(welcomeMsg, width/2, height/2 ,overlaySize*7, overlaySize*4);
    welcomeMusic.setVolume(slider.value());
  }
  else if(gameState === 1){
    background(bg1);
    overlaySize =1;
    btnNext.hide();
    message.visible = false;

    dr1.visible = true;
    dr2.visible = true;
    dr3.visible = true;
    image(platform, width/7 - 170 , height/1.5,platform.width/2,platform.height/2  );
    image(platform, width/2 - 170 , height/1.5,platform.width/2,platform.height/2  );
    image(platform, width/1.2 - 170 , height/1.5,platform.width/2,platform.height/2 );

    image(plPlatform, width/2.9 - 170 , height/1.4 ,plPlatform.width/2,plPlatform.height/2 );

    image(heroBack , width/3.5, height/2.5 , heroBack.width/2 , heroBack.height/2);

    showRiddle(dr1,r11);
    showRiddle(dr2,r12);
    showRiddle(dr3,r13);

   /* openDoor(dr1);
    openDoor(dr2);
    openDoor(dr3);*/
  }
  else if(gameState === 2){
    dr1.visible = false;
    dr2.visible = false;
    dr3.visible = false;

    r11.visible = false;
    r12.visible = false;
    r13.visible = false;

    background(bg2);
    
    dr4.visible = true;
    dr5.visible = true;
    dr6.visible = true;

    image(platform, width/7 - 170 , height/1.5,platform.width/2,platform.height/2  );
    image(platform, width/2 - 170 , height/1.5,platform.width/2,platform.height/2  );
    image(platform, width/1.2 - 170 , height/1.5,platform.width/2,platform.height/2 );

    image(plPlatform, width/2.9 - 170 , height/1.4 ,plPlatform.width/2,plPlatform.height/2 );

    image(heroBack , width/3.5, height/2.5 , heroBack.width/2 , heroBack.height/2);

    showRiddle(dr4,r21);
    showRiddle(dr5,r22);
    showRiddle(dr6,r23);

   /* openDoor(dr4);
    openDoor(dr5);
    openDoor(dr6);*/
  }
  else if(gameState === 3){
    overlaySize =1;
    dr4.visible = false;
    dr5.visible = false;
    dr6.visible = false;

    r21.visible = false;
    r22.visible = false;
    r23.visible = false;

    background(bg3);

    dr7.visible = true;
    dr8.visible = true;
    dr9.visible = true;

    image(platform, width/7 - 170 , height/1.5,platform.width/2,platform.height/2  );
    image(platform, width/2 - 170 , height/1.5,platform.width/2,platform.height/2  );
    image(platform, width/1.2 - 170 , height/1.5,platform.width/2,platform.height/2 );

    image(plPlatform, width/2.9 - 170 , height/1.4 ,plPlatform.width/2,plPlatform.height/2 );

    image(heroBack , width/3.5, height/2.5 , heroBack.width/2 , heroBack.height/2);

    showRiddle(dr7,r31);
    showRiddle(dr8,r32);
    showRiddle(dr9,r33);
  }
  else if(gameState === 4){
    background(gameover);
    dr1.visible = false;
    dr2.visible = false;
    dr3.visible = false;
    dr4.visible = false;
    dr5.visible = false;
    dr6.visible = false;
    dr7.visible = false;
    dr8.visible = false;
    dr9.visible = false;


    r11.visible = false;
    r12.visible = false;
    r13.visible = false;

    r21.visible = false;
    r22.visible = false;
    r23.visible = false;

    r31.visible = false;
    r32.visible = false;
    r33.visible = false;

    
      if(overlaySize < 100){
          overlaySize++;
      }
      imageMode(CENTER);
     // image(overlay, width/2 - overlaySize * 6, height/2 - overlaySize * 2, overlaySize * 12, overlaySize * 4);
     image(overlay, width/2, height/2 ,overlaySize*13, overlaySize*7);
      
      fill("yellow");
      textSize(50);
      textAlign(CENTER);
      textFont("Algerian");
      if (frameCount % 20 == 0 && timer > 0) {
        timer --;
      }
      if (timer == 0) {
        text(window.answer , width/2, height/2);
      }

      //draw blinking text
      textCounter++;
      if(textCounter > 30 && timer ==0){
          noStroke();
          fill("cyan");
          text("GAME OVER !! \n Press Space To Restart!!", width/2, height/4);
          stroke("black");
      }

      if(textCounter > 60){
          textCounter = 0;
      }
  }
  else if(gameState === 5){
    background(winImg);
    dr1.visible = false;
    dr2.visible = false;
    dr3.visible = false;
    dr4.visible = false;
    dr5.visible = false;
    dr6.visible = false;
    dr7.visible = false;
    dr8.visible = false;
    dr9.visible = false;


    r11.visible = false;
    r12.visible = false;
    r13.visible = false;

    r21.visible = false;
    r22.visible = false;
    r23.visible = false;

    r31.visible = false;
    r32.visible = false;
    r33.visible = false;

    if(overlaySize < 100){
      overlaySize++;
    }
      imageMode(CENTER);
    // image(overlay, width/2 - overlaySize * 6, height/2 - overlaySize * 2, overlaySize * 12, overlaySize * 4);
    image(starsImg, width/3, height/2 ,overlaySize*6, overlaySize*6);

    //draw blinking text
    fill("yellow");
    textSize(50);
    textAlign(CENTER);
    textFont("Algerian");
    textCounter++;
    if(textCounter > 30){
        noStroke();
        text("CONGRATULATION \n YOU WON !!", width/1.3, height/2);
        stroke("black");
    }

    if(textCounter > 60){
        textCounter = 0;
    }
  }
 
  drawSprites();
  if(gameState!=0 && gameState!=4 && gameState!==5){
    image(rule,width/5,0,rule.width,rule.height/1.2);
  }
}

function mouseClicked() {
  if (gameState === 0) {
   // message.visible = true;
    btnNext.show();
  } 
}

function showRiddle(door,riddle){
  if(mouseIsOver(door)){
    riddle.visible =true;
  }else{
    riddle.visible = false;
  }
}

function openDoor(door){
  if(mousePressedOver(door)){
    door.changeAnimation("animation",drAni);
  }

}

function togglePlay(){
  if(!welcomeMusic.isPlaying()){
    welcomeMusic.loop();
    //btnPlay.html("Pause");
    btnPlay.style("background-image: url('assets/musicOn1.png')");
  }
  else{
    welcomeMusic.pause();
    //btnPlay.html("Play");
    btnPlay.style("background-image: url('assets/musicOff1.png')");

  }
}

/*Key Codes 1-	49, 2	-50, 3-	51*/
function keyPressed() {
  switch(gameState){
    case 1: //Door 2 is correct door
            if(keyCode === 50){
              gameState=2;
            }
          //Door 1 or 3 are wrong doors
            else if(keyCode === 49 || keyCode === 51){
              window.answer = "\tDoor-2 because the lion straved to death\t \n \tfor not eating for 3 months\t";
              gameState =4;
            }
            break;
    case 2://Door 1 is correct door
            if(keyCode === 49){
              gameState=3;
            }
          //Door 2 or 3 are wrong doors
            else if(keyCode === 50 || keyCode === 51){
              window.answer = "\tDoor-1 Because The Killer is from 1843!!!\t";
              gameState =4;
            }
            break;
    case 3://Door 3 is correct door
            if(keyCode === 49){
              window.answer = "Congrats You Won!!!";
              gameState=5;
            }
          //Door 1 or 2 are wrong doors
            else if(keyCode === 50 || keyCode === 51){
              window.answer = "\tDoor-1 Because the water will flow out\t \n \t once you will will open the door!!!\t";
              gameState =4;
            }
            break;
    default: break;
  }

  if(keyCode === 32){
    window.location.reload();
  }
} 
