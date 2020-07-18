let mic, fft;
var spectrum;

var w, h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noFill();
  colorMode(RGB)
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.8,1024);
  fft.setInput(mic);
  spectrum = fft.analyze(1024,"dB");
  w = width/64;
  h = height/35;
}

function draw() {
  background(0);
  spectrum = fft.analyze(1024,"dB");
  fill("red")

  for(var i = 0; i<spectrum.length;i++){
    var db=spectrum[i];
    var y = map(db,-140,0,0,30)
    columna(i,floor(y))
  }
}

function columna(x,num){
for(var i = num; i > 0; i--){
    rect(x*w,height-h*i,w,h);
    //print((x*w)+" "+(height-h+h*i)+" "+w+" "+h)
    //noLoop();
  }
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}
