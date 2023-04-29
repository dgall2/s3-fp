var h1;
var h2;
let bright = 0;
var w;
var h;
var maybe;
var slidersat1;
var slidersat2;

function setup () {
  colorMode(HSB, 360, 100, 100);
  noStroke();
  w = windowWidth;
  h = windowHeight;
  createCanvas(w,h);
  background(1);
  h1 = random(0,360);
  h2 = h1;
  // bright = random(75,101)
  framerate = 1;
  // slidersat1 = createSlider(0,100,40);
  // slidersat2 = createSlider(0,100,70);
  // slidersat1.position(w/2 - 100, h - 50);
  // slidersat2.position(w/2 - 100, h - 30);
  // slidersat1.style('width','200px');
  // slidersat2.style('width','200px');
  // slidersat1 = 40;
  // slidersat2 = 70;
}


function draw () {
  let hue1 = (((h1 + frameCount/2.1)%360));
  let hue2 = ((h2 +  frameCount/2)%360);
  let to = color(hue1,(10* w/( mouseX)),100);
  let from = color(hue2,(10 * w/(mouseY)),100);

  let wider = windowWidth/1.1;
  let taller = windowHeight/1.2;
  
  background(to);
  // fill(from);  
  
  fill(lerpColor(from,to,0.95));
  ellipse(w/2, h/2, wider/0.8,taller/0.8);
  
  fill(lerpColor(from,to,0.8));
  ellipse(w/2, h/2, wider/0.95,taller/0.95);
  
  fill(lerpColor(from,to,0.6));
  ellipse(w/2, h/2, wider/1.1,taller/1.1);
  
  fill(lerpColor(from,to,0.4));
  ellipse(w/2, h/2, wider/1.2,taller/1.2);
  
  fill(lerpColor(from,to,0.2));
  ellipse(w/2, h/2, wider/1.3,taller/1.3);
  
  fill(from);  
  ellipse(w/2, h/2, wider/1.4,taller/1.4); 
  
  
  
  
  
  // for (let i = 0; i<11; i++) {
  //   let grade = lerpColor(from,to,0.1);
  //   fill(grade);
  //   ellipse(w/2,h/2,(wider - adder2), (taller - adder2));
    // adder2 = adder2 + 2;
    // adder = adder + 0.1;
  // }
  // for (let i = 0; i<200; i++); {
  //   let grade = lerpColor(from,to,adder);
  //   fill(grade);
  //   ellipse(w/2,h/2,(wider + adder2), (taller + adder2));
  //   adder += 0.01;
  //   adder2 ++;
  //   hue1++;
  //   hue2++;
  // }
  // for (let)
  // for (let i = )
  // for (let i = 300; i == 1; i -1) {
  // let adder = 0.01;
  // fill(lerpColor(from,to,adder));
  // from = color(int((h1 + ((frameCount)/2.5))%360) -1,50, 99);
  // ellipse(w/2,h/2,(w/2)+i,(h/2)+i);
  // adder = adder+ 0.01;
// }
  
}

  // ((red_x + frameCount)%360)
  // ((green_x + frameCount)%360)
  // ((blue_x + frameCount)%360)