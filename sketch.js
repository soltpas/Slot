let x=2;
let y=5;
let z=9;
let a=2;
let b=2;
let c=2;
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
let m=5000;
let e = 1;
let w = 1;
let win;
let B;
let BB;
let BBB;
let BBBB;
let bx;
let by;
let bt = 0;
let Rp = 0;

function preload(){
  one = loadImage("IMG_0138.PNG");
  two = loadImage("IMG_0140.WEBP");
  three = loadImage("IMG_0139.PNG");
  four = loadImage("IMG_0141.PNG");
  five = loadImage("IMG_0147.PNG");
  six = loadImage("IMG_0148.PNG");
  seven = loadImage("IMG_0144.PNG");
  eight = loadImage("IMG_0145.PNG");
  nine = loadImage("IMG_0146.PNG");
  macine = loadImage("IMG_0170.jpeg");
  flame = loadImage("IMG_0173.PNG");
  atu = loadImage("IMG_0171.PNG");
  stop = loadSound('Stop.mp3');
  reset = loadSound('Reset.mp3');
  hit = loadSound('Hit.mp3');
  shit = loadSound('SHit.mp3');
  end = loadImage("IMG_0255.jpeg", () => {}, () => { end = createImage(1, 1); });
  win = loadImage("IMG_0256.jpeg", () => {}, () => { win = createImage(1, 1); });
}

function setup() {
  createCanvas(1000, 600);
  textSize(50);
}

function draw() {
  background(220);
  
  stop.setVolume(1);
  reset.setVolume(1);
  hit.setVolume(1);
  shit.setVolume(1);
  
  image(macine,-100,-100,1300,700)
  
  if (x==1){
  image(one,200,100,250,125)  
 }
  
  if (x==2){
  image(two,200,100,250,125)
 }
 
 if (x==3){
  image(three,200,100,250,125)
 }
 
 if (x==4){
  image(four,200,100,250,125)
 }
 
 if (x==5){
  image(five,200,100,250,125)
 }
 
 if (x==6){
  image(six,200,100,250,125)
 }
 
 if (x==7){
  image(seven,200,100,250,125)
 }
 
 if (x==8){
  image(eight,200,100,250,125)
 }
 
 if (x==9){
  image(nine,200,100,250,125)
 }
  
  if (y==1){
  image(one,450,100,250,125)
 }
  
  if (y==2){
  image(two,450,100,250,125)
  }

  if (y==3){
  image(three,450,100,250,125)
  }

  if (y==4){
  image(four,450,100,250,125)
  }

  if (y==5){
  image(five,450,100,250,125)
  }

  if (y==6){
  image(six,450,100,250,125)
  }

  if (y==7){
  image(seven,450,100,250,125)
  }

  if (y==8){
  image(eight,450,100,250,125)
  }

  if (y==9){
  image(nine,450,100,250,125)
  }
 
  if (z==1){
  image(one,700,100,250,125)
  }

  if (z==2){
  image(two,700,100,250,125)
  }

  if (z==3){
  image(three,700,100,250,125)
  }

  if (z==4){
  image(four,700,100,250,125)
  }

  if (z==5){
  image(five,700,100,250,125)
  }

  if (z==6){
  image(six,700,100,250,125)
  }

  if (z==7){
  image(seven,700,100,250,125)
  }

  if (z==8){
  image(eight,700,100,250,125)
  }

  if (z==9){
  image(nine,700,100,250,125)
  }
  
  if (x==1){
  image(two,200,250,250,200)
 }

if (x==2){
  image(three,200,250,250,200)
 }

if (x==3){
  image(four,200,250,250,200)
 }

if (x==4){
  image(five,200,250,250,200)
 }

if (x==5){
  image(six,200,250,250,200)
 }

if (x==6){
  image(seven,200,250,250,200)
 }

if (x==7){
  image(eight,200,250,250,200)
 }

if (x==8){
  image(nine,200,250,250,200)
 }

if (x==9){
  image(one,200,250,250,200)
 }
  
if (x==1){
  image(three,200,450,250,125)
 }

if (x==2){
  image(four,200,450,250,125)
 }

if (x==3){
  image(five,200,450,250,125)
 }

if (x==4){
  image(six,200,450,250,125)
 }

if (x==5){
  image(seven,200,450,250,125)
 }

if (x==6){
  image(eight,200,450,250,125)
 }

if (x==7){
  image(nine,200,450,250,125)
 }

if (x==8){
  image(one,200,450,250,125)
 }

if (x==9){
  image(two,200,450,250,125)
 }
  
if (y==1){
  image(three,450,450,250,125)
 }

if (y==2){
  image(four,450,450,250,125)
 }

if (y==3){
  image(five,450,450,250,125)
 }

if (y==4){
  image(six,450,450,250,125)
 }

if (y==5){
  image(seven,450,450,250,125)
 }

if (y==6){
  image(eight,450,450,250,125)
 }

if (y==7){
  image(nine,450,450,250,125)
 }

if (y==8){
  image(one,450,450,250,125)
 }

if (y==9){
  image(two,450,450,250,125)
 }  
  
if (z==1){
  image(three,700,450,250,125)
 }

if (z==2){
  image(four,700,450,250,125)
 }

if (z==3){
  image(five,700,450,250,125)
 }

if (z==4){
  image(six,700,450,250,125)
 }

if (z==5){
  image(seven,700,450,250,125)
 }

if (z==6){
  image(eight,700,450,250,125)
 }

if (z==7){
  image(nine,700,450,250,125)
 }

if (z==8){
  image(one,700,450,250,125)
 }

if (z==9){
  image(two,700,450,250,125)
 }  

if (z==1){
  image(two,700,250,250,200)
 }

if (z==2){
  image(three,700,250,250,200)
 }

if (z==3){
  image(four,700,250,250,200)
 }

if (z==4){
  image(five,700,250,250,200)
 }

if (z==5){
  image(six,700,250,250,200)
 }

if (z==6){
  image(seven,700,250,250,200)
 }

if (z==7){
  image(eight,700,250,250,200)
 }

if (z==8){
  image(nine,700,250,250,200)
 }

if (z==9){
  image(one,700,250,250,200)
 }
  
if (y==1){
  image(two,450,250,250,200)
 }

if (y==2){
  image(three,450,250,250,200)
 }

if (y==3){
  image(four,450,250,250,200)
 }

if (y==4){
  image(five,450,250,250,200)
 }

if (y==5){
  image(six,450,250,250,200)
 }

if (y==6){
  image(seven,450,250,250,200)
 }

if (y==7){
  image(eight,450,250,250,200)
 }

if (y==8){
  image(nine,450,250,250,200)
 }

if (y==9){
  image(one,450,250,250,200)
 }

  if(c==2){
 if(a==2){
  if(b==2){
   if (x==1){
    if (y==1){
     if(z==1){
       if(hh==1){
         hh=2
       h=1
     }
    }
   }
  }
 }
}
  }
  
  if(c==2){
 if(a==2){
  if(b==2){
   if (x==2){
    if (y==2){
     if(z==2){
       if(hh==1){
         hh=2
       h=1
     }
    }
   }
  }
 }
 }
}
  
if(c==2){
 if(a==2){
  if(b==2){
   if (x==3){
    if (y==3){
     if(z==3){
       if(hh==1){
         hh=2
       h=1
     }
    }
   }
  }
 }
} 
}
  
if(c==2){
 if(a==2){
  if(b==2){
   if (x==4){
    if (y==4){
     if(z==4){
       if(hh==1){
         hh=2
       h=1
     }
    }
   }
  }
 }
} 
}
 
if(c==2){
 if(a==2){
  if(b==2){
   if (x==5){
    if (y==5){
     if(z==5){
       if(hh==1){
         hh=2
       h=1
     }
    }
   }
  }
 }
}  
}
  
if(c==2){
 if(a==2){
  if(b==2){
   if (x==6){
    if (y==6){
     if(z==6){
       if(hh==1){
         hh=2
       hhh=1
     }
    }
   }
  }
 }
 }
}  
  
if(c==2){
 if(a==2){
  if(b==2){
   if (x==7){
    if (y==7){
     if(z==7){
       if(hh==1){
         hh=2
       h=1
     }
    }
   }
  }
 }
}  
}
  
if(c==2){
 if(a==2){
  if(b==2){
   if (x==8){
    if (y==8){
     if(z==8){
       if(hh==1){
         hh=2
       h=1
     }
    }
   }
  }
 }
}  
}
  
if(c==2){
 if(a==2){
  if(b==2){
   if (x==9){
    if (y==9){
     if(z==9){
       if(hh==1){
         hh=2
       h=1
     }
    }
   }
  }
 }
}  
}
  
if(c==2){
 if(a==2){
  if(b==2){
   if (x==1){
    if (y==2){
     if(z==3){
       if(hh==1){
         hh=2
       h=1
      }
     }
    }
   }
  }
 }
}

if(c==2){
 if(a==2){
  if(b==2){
   if (x==2){
    if (y==3){
     if(z==4){
       if(hh==1){
         hh=2
       h=1
      }
     }
    }
   }
  }
 }
}

if(c==2){
 if(a==2){
  if(b==2){
   if (x==3){
    if (y==4){
     if(z==5){
       if(hh==1){
         hh=2
       h=1
      }
     }
    }
   }
  }
 }
}

if(c==2){
 if(a==2){
  if(b==2){
   if (x==4){
    if (y==5){
     if(z==6){
       if(hh==1){
         hh=2
       h=1
      }
     }
    }
   }
  }
 }
}

if(c==2){
 if(a==2){
  if(b==2){
   if (x==5){
    if (y==6){
     if(z==7){
       if(hh==1){
         hh=2
       hhh=1
      }
     }
    }
   }
  }
 }
}

if(c==2){
 if(a==2){
  if(b==2){
   if (x==6){
    if (y==7){
     if(z==8){
       if(hh==1){
         hh=2
       h=1
      }
     }
    }
   }
  }
 }
}

if(c==2){
 if(a==2){
  if(b==2){
   if (x==7){
    if (y==8){
     if(z==9){
       if(hh==1){
         hh=2
       h=1
      }
     }
    }
   }
  }
 }
}

if(c==2){
 if(a==2){
  if(b==2){
   if (x==8){
    if (y==9){
     if(z==1){
       if(hh==1){
         hh=2
       h=1
      }
     }
    }
   }
  }
 }
}

if(c==2){
 if(a==2){
  if(b==2){
   if (x==9){
    if (y==1){
     if(z==2){
       if(hh==1){
         hh=2
       h=1
      }
     }
    }
   }
  }
 }
}

if(c==2){
 if(a==2){
  if(b==2){
   if (x==1){
    if (y==9){
     if(z==8){
       if(hh==1){
         hh=2
       h=1
      }
     }
    }
   }
  }
 }
}

if(c==2){
 if(a==2){
  if(b==2){
   if (x==2){
    if (y==1){
     if(z==9){
       if(hh==1){
         hh=2
       h=1
      }
     }
    }
   }
  }
 }
}

if(c==2){
 if(a==2){
  if(b==2){
   if (x==3){
    if (y==2){
     if(z==1){
       if(hh==1){
         hh=2
       h=1
      }
     }
    }
   }
  }
 }
}

if(c==2){
 if(a==2){
  if(b==2){
   if (x==4){
    if (y==3){
     if(z==2){
       if(hh==1){
         hh=2
       h=1
      }
     }
    }
   }
  }
 }
}

if(c==2){
 if(a==2){
  if(b==2){
   if (x==5){
    if (y==4){
     if(z==3){
       if(hh==1){
         hh=2
       h=1
      }
     }
    }
   }
  }
 }
}

if(c==2){
 if(a==2){
  if(b==2){
   if (x==6){
    if (y==5){
     if(z==4){
       if(hh==1){
         hh=2
       h=1
      }
     }
    }
   }
  }
 }
}

if(c==2){
 if(a==2){
  if(b==2){
   if (x==7){
    if (y==6){
     if(z==5){
       if(hh==1){
         hh=2
       hhh=1
      }
     }
    }
   }
  }
 }
}

if(c==2){
 if(a==2){
  if(b==2){
   if (x==8){
    if (y==7){
     if(z==6){
       if(hh==1){
         hh=2
       h=1
      }
     }
    }
   }
  }
 }
}

if(c==2){
 if(a==2){
  if(b==2){
   if (x==9){
    if (y==8){
     if(z==7){
       if(hh==1){
         hh=2
       h=1
      }
     }
    }
   }
  }
 }
}  
  
  if(R==2){
    image(flame,0,0,1000,1000)
    image(atu,300,-50,500,200)
  }
  
  fill("gold");
  textAlign(LEFT);
  text("所持金: " + m,10,40);
  
  if (a==1){
   x++
  } 
  
  if (x==10){
    x=1
  }
    
  if (b==1){
   y++
  }
  
  if (y==10){
    y=1
  }
  
  if (c==1){
   z++
  }
  
  if(z==10){
    z=1
  }
  
  if(a==2) {
    if(b==2) {
      if(c==2) {
        if(x==y){
          if(BB==1) {
            B = floor(random(50));
            BB = 2;
            if(B==1) {
              bx = x;
              by = y;
              BBB=2;
            }
          }
        }  
      }
    }
  }
  
  if(B==1) {
    fill(0,0,0)
    rect(0,0,1000,600)
    if(bt == 0) {
      bt = millis()
    }
    if(millis() - bt >= 3000) {
      B = 0;
      a = 2;
      b = 2;
      c = 2;
      x = bx;
      y = by;
      z = bx;
      bt = 0;
    }
  }

  if(h==1){
    hit.play()
    Rp = Rp + floor(random(1,3));
    h=2
    m = m + 2500
    if (m > 500000) {
      w = 2;
      a = 2;
      b = 2;
      c = 2;
    }    
  }   
  
  if(hhh==1){
    shit.play()
    R = 2;
    Rp = Rp + 10;
    hhh=2
    m = m * 2
    if(m > 50000) {
      w = 2;
      a = 2;
      b = 2;
      c = 2;
    }    
 }   

}
  
function keyPressed(){
    
  if (key == "f"){
    if(a==1){
      a=2;
      stop.play();
    }
  }
    
  
     
  if (key == "g"){
    if(b==1){
      b=2;
      stop.play();
      if(R==2){
        if(yy != 0){
          yy = floor(random(2))
          if(yy==1){
            y=x
            yy=0  
          }
        }
      }
    }
  }
 
  if (key == "h"){
    if(c==1){
      c=2
      stop.play()
      if(R==2){
        if(zz != 0){
          zz = floor(random(2))
          if(zz==1){
            z=y
            zz=0
          }
        }
      }
    }
  }

  if(key == "j"){
    if(a==2){
      if(b==2){
        if(c==2){
          a=1;
          b=1;
          c=1;
          yy=3;
          zz=3;
          reset.play();
          hh=1;
          m = m - 100;
          BB=1;
          B=0; 
          if(Rp < 10) {
            R = 1;
          } else {
            R = 2;
            Rp = Rp - 10;
          }
          if(BBBB==1) {
            BBB = 1;
            BBBB = 0;
          }    
          if (m < 0) {
          e = 2;
          a = 2;
          b = 2;
          c = 2;
          m = m + 100;
          }
        }
      }
    }
  }
}
