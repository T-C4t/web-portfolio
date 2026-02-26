let r1 = []; // towers
let r2 = [];
let r3 = [];

let originSelected = false;
let destinationSelected = false;
let origin;
let destination;

const colors = [
  { name: "Red", rgb: "rgb(255, 0, 0)" },
  { name: "Blue", rgb: "rgb(0, 0, 255)" },
  { name: "Yellow", rgb: "rgb(255, 255, 0)" },
  { name: "Green", rgb: "rgb(0, 128, 0)" },
  { name: "Orange", rgb: "rgb(255, 165, 0)" },
  { name: "Purple", rgb: "rgb(128, 0, 128)" },
];

let offset = 0; //offset
let tWidth = 10; //tower width
let dHeight = 10; //disk Height
let dWM = 15; // disk width multiplier;

let discs = 10;

function setup() {
  createCanvas(600, 500);
  offset = width/3;


for(i = 0; i < discs; i++){
  r1[i] = discs - i;
}

  console.log(r1);
  console.log(r2);
  console.log(r3);
 
}

function draw() {
  background(253, 232, 233);
  drawTowers();
  drawSelect();



}

function drawSelect(){
  
  fill(255,0,0,0);

  rect(0,0,width/3,height);
  rect(width/3,0,2*width/3,height);
  rect(2*width/3,0,width,height);


  if(originSelected){
    switch(origin){
      case 1:
        fill(255,0,0,50);
        rect(0,0,width/3,height);
        fill(255,0,0,0);

        return;
      case 2:
          fill(255,0,0,50);
          rect(width/3,0,width/3,height);
          fill(255,0,0,0);
          
          return;
      case 3:
            fill(255,0,0,50);
            rect(width*2/3,0,width/3,height);
            fill(255,0,0,0);

            return;
    }
  }


}

function move(org,dest)
{
  destinationSelected = false;
  originSelected = false;


  if(org.length != 0 && dest.length == 0 || org[org.length - 1] < dest[dest.length - 1]){
  let disk = org.pop();
  console.log("moved");
  dest.push(disk);
  }

  console.log(r1);
  console.log(r2);
  console.log(r3);
}

function drawTowers(){
  //cosmetic
  strokeWeight(3);
  stroke(31, 34, 50);
  fill(89, 100, 117);


  for(i = 0; i < 3; i++){
    rect(offset/2 + offset*i-(tWidth/2),height,tWidth,-height*2/3);
  }
  
  drawDiscs(r1,1);
  drawDiscs(r2,2);
  drawDiscs(r3,3);


}

function drawDiscs(tow,tpos){
  if(tow.length != 0){
  for(i = 0; i < tow.length; i++){
    fill(colors[tow[i]%colors.length].rgb);

    rect(offset/2 + (offset*(tpos-1))-((tow[i]*dWM) /2 ) , height-((i+1)*dHeight) -1, tow[i]*dWM,dHeight);
  }
}
}

function mousePressed(){


    switch (true) {
      case (mouseX >= 0 && mouseX <= width/3):
        console.log("t1");

        if(!originSelected){
          origin = 1;
          originSelected = true;
        }else{
          destination = 1;
          destinationSelected = true;
        }

        break;
      case (mouseX > width/3 && mouseX <= 2*width/3):
        console.log("t2");

        if(!originSelected){
          origin = 2;
          originSelected = true;
        }else{
          destination = 2;
          destinationSelected = true;
        }

        break;
      case (mouseX > 2*width/3 && mouseX <= width):
        console.log("t3");

        if(!originSelected){
          origin = 3;
          originSelected = true;
        }else{
          destination = 3;
          destinationSelected = true;
        }

        break;
      default:
        return "Out of range";
    }

    if(originSelected && destinationSelected){
      switch(origin){
        case 1:
        switch(destination){
          case 1:
              console.log("select error");
              //move(r1,r1);

              destinationSelected = false;
              originSelected = false;
            break;
          case 2:
              move(r1,r2);
            break;
          case 3:
              move(r1,r3);
            break;
          default:
            console.log("select error");

            destinationSelected = false;
            originSelected = false;
            break;
        }
        break;

        case 2:
          switch(destination){
            case 1:
                move(r2,r1);
              break;
            case 2:
              console.log("select error");

              destinationSelected = false;
              originSelected = false;
              //move(r2,r2);
              break;
            case 3:
                move(r2,r3);
              break;
            default:
              console.log("select error");


              destinationSelected = false;
              originSelected = false;
              break;
          }
          break;

        case 3:
          switch(destination){
            case 1:
                move(r3,r1);
              break;
            case 2:
                move(r3,r2);
              break;
            case 3:
                console.log("select error");

                destinationSelected = false;
                originSelected = false;
                //move(r3,r3);
              break;
            default:
              console.log("select error");

              destinationSelected = false;
              originSelected = false;
              break;
          }
          break;

          default:
            console.log("select error");

            destinationSelected = false;
            originSelected = false;
            break;
      }
    }
}