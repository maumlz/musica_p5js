let mic, fft;
var spectrum;
let filter;
var w, h;

/* Buscar sensiilidad de sonido para filtrar frequencias bajas y aplificar las altas
   También revisar lo de el multiplicador logaritmico */


function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  colorMode(RGB)
  filter = new p5.BandPass();
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.8,64);
  fft.setInput(mic);
  spectrum = fft.analyze();
  w = (width/64);
  h = (height/30)
    // noStroke();
}

function draw() {
  background(0);
  spectrum = fft.analyze();
  // spectrum = fft.logAverages(fft.getOctaveBands());
  // spectrum = log(spectrum);
  fft.smooth()
  // print(fft.linAverages(32))
  // var amp = spectrum[5];
  // var y = map(amp, 0, 255, 0, 30);
  // fill(amp,0,255-amp)
  // columna(0,floor(y));

  for(var i=spectrum.length-1; i > 0 ; i--){
    var amp = spectrum[i];
    var y = map(amp, 0, 255, 0, 30);
    fill(amp,0,255-amp)
    // rect(i*w, y, w, height-y)
    columna((spectrum.length-1-i),floor(y));
    //noLoop();
  }


  // for(var i=spectrum.length-1; i > 0 ; i-=16){
  //   var amp = spectrum[i];
  //   var y = map(amp, 0, 255, 0, 30);
  //   fill(amp,0,255-amp)
  //   // rect(i*w, y, w, height-y)
  //   columna((spectrum.length-1-i)/16,floor(y));
  //   //noLoop();
  // }

  // for(var i=0; i < spectrum.length; i++){
  //   var amp = spectrum[i];
  //   var y = map(amp, 0, 255, 0, 30);
  //   fill(amp,0,255-amp)
  //   // rect(i*w, y, w, height-y)
  //   columna(spectrum.length+i,floor(y));
  //   //noLoop();
  // }
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
