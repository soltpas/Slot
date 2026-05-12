let x=2;
let y=5;
let z=9;
let a=1;
let b=1;
let c=1;
let one;
let two;
let three;
let four;
let five;
let six;
let seven;
let eight;
let nine;
let R;
let yy=3;
let zz=3;
let stop;
let reset;
let hit;
let shit;
let h;
let hh=2;
let hhh=2;
let m=4900;
let e = 1;
let w = 1;
let win;

function preload(){
  one=loadImage("IMG_0138.PNG")
  two=loadImage("IMG_0140.WEBP")
  three=loadImage("IMG_0139.PNG")
  four=loadImage("IMG_0141.PNG")
  five=loadImage("IMG_0147.PNG")
  six=loadImage("IMG_0148.PNG")
  seven=loadImage("IMG_0144.PNG")
  eight=loadImage("IMG_0145.PNG")
  nine=loadImage("IMG_0146.PNG")
  macine=loadImage("IMG_0170.jpeg")
  flame=loadImage("IMG_0173.PNG")
  atu=loadImage("IMG_0171.PNG")
}

function createSilentSound() {
  return {
    play: () => {},
    setVolume: () => {},
  };
}

function setup() {
  createCanvas(1000, 600);
  textSize(50);

  stop = createSilentSound();
  reset = createSilentSound();
  hit = createSilentSound();
  shit = createSilentSound();

  stop = loadSound('Stop.mp3', () => {}, () => { stop = createSilentSound(); });
  reset = loadSound('Reset.mp3', () => {}, () => { reset = createSilentSound(); });
  hit = loadSound('Hit.mp3', () => {}, () => { hit = createSilentSound(); });
  shit = loadSound('SHit.mp3', () => {}, () => { shit
