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
  one=loadImage("IMG_0138.png")
  two=loadImage("IMG_0140.webp")
  three=loadImage("IMG_0139.png")
  four=loadImage("IMG_0141.png")
  five=loadImage("IMG_0147.png")
  six=loadImage("IMG_0148.png")
  seven=loadImage("IMG_0144.png")
  eight=loadImage("IMG_0145.png")
  nine=loadImage("IMG_0146.png")
       macine=loadImage("IMG_0170-4.jpeg")
  flame=loadImage("IMG_0173.png")
  atu=loadImage("IMG_0171.png")
  stop=loadSound('Stop.mp3')
  reset=loadSound('Reset.mp3')
  hit=loadSound('Hit.mp3')
  shit=loadSound('SHit.mp3')
  end=loadImage("IMG_0255.jpeg")
  win=loadImage("IMG_0256.jpeg")
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

  if(a==2){
    if(b==2){
if(c==2){
 if (x==6){
  if (y==6){
     if(z==6){
       R=2
       }
     }
  }
}
    }
  }
 
  if(a==2){
  if(b==2){  
  if(c==2){
 if (x==7){
  if (y==6){
     if(z==5){
       R=2
       }
     }
    }
  }
}
}
  
  if(a==2){
  if(b==2){  
  if(c==2){
 if (x==5){
  if (y==6){
     if(z==7){
       R=2
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
  
  if(e == 2) {
    image(end,0,0,1000,800)
  }
  
    if(w == 2) {
    image(win,0,0,1000,800)
  }
  
}
  
  function touchMoved(){
    
  if (touches[0].y>110){
   if (0<touches[0].x){
     if(touches[0].x<430){
       if(a==1){
    a=2;
    stop.play();
     }
   }
   }
    
 if(h==1){
   hit.play()
   h=2
   m = m + 2500
   if (m > 50000) {
        w = 2;
        a = 2;
        b = 2;
        c = 2;
      }    
 }   
  
  if(hhh==1){
   shit.play()
   hhh=2
  m = m * 2
    if (m > 50000) {
        w = 2;
        a = 2;
        b = 2;
        c = 2;
      }    
 }   
     
   if (450<touches[0].x){
     if(touches[0].x<700){
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
   }
 
   if (700<touches[0].x){
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
  }
  
   if (touches[0].y<110){
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
      if (m < 0) {
        e = 2;
        a = 2;
        b = 2;
        c = 2;
      }    
   }
  }
}
}
}
