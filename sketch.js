//code credited to re71

let colArray = []; //make an empty array
let colorPicker;
let sel;


function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
  //define color in the array
  colArray[0] = color("#FD841F");
  colArray[1] = color("#E14D2A");
  colArray[2] = color("#fffff");
  colArray[3] = color("#9C2C77");
  frameRate(1); //lower the frame rate
  
  colorPicker = createColorPicker('#fffff');
  colorPicker.position(0, height + 5);
  
  sel = createSelect();
  sel.position(70, height + 5);
  sel.option("Optima");
  sel.option("Avenir");
  sel.option("Courier New");
  sel.option("Rockwell");
  sel.option("Broadway");
  sel.option("Palatino");
  sel.selected("Optima");
  sel.style("width", "100px");

  button = createButton("Download");
  button.position(190, height + 5);
  button.mousePressed(saveit);
  button.style("width", "100px");
  
  
}

function draw() {
  // background(255);
  background(colorPicker.color());
  
  //draw a grid of circles
  for(let x = 20; x<width; x+=40){
    for (let y = 20; y<height; y+=40){
      fill(random(colArray)); //fill each text a random color from the array
      text("A", x,y,40);
      textSize(20);
      // textFont('Optima');
    }
  }
    textFont(sel.value());

}


function saveit() {
  save("colorchangingA.svg"); // give file name
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
