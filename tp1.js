let diametroCircle = 20;
let espacioCircle = 26;
let img;
let mouseEnCircle;
let invertido = false;

function preload() {
  img = loadImage('data/grilla.jpg');
}

function setup() {
  createCanvas(800, 400);
  noStroke();

}

function draw() {
  background(255);
   image(img, 0, 0, 400, 400);
  mouseEnCircle = mouseX >= 0 && mouseX < 400 && mouseY >= 0 && mouseY < 400;

  dibujarCircle();
  console.log(mouseX, mouseY);
}

function mouseClicked() {
  diametroCircle += 3;
}

function keyPressed() {
  if (key === 'r') {
    diametroCircle = 20;
    espacioCircle = 25;
    invertido = false;
  }
}

function dibujarCircle() {
  for (let i = 15; i <= height; i += espacioCircle) {
    for (let j = 401; j <= width; j += espacioCircle) {
      let distancia = dist(mouseX, mouseY, j, i);
      let transparenciaRojo = calcularTransparenciaRojo(distancia);
      let transparenciaAzul = calcularTransparenciaAzul(distancia);

      fill(0, 6, 255, transparenciaAzul);
      ellipse(j, i, diametroCircle, diametroCircle);

      if (!invertido) {
        fill(255, 0, 0, transparenciaRojo);
        ellipse(j + 2, i + 2, diametroCircle, diametroCircle);
      }
    }
  }
}

function calcularTransparenciaRojo(distancia) {
  return map(distancia, 0, width / 2.8, 255, 0);
}

function calcularTransparenciaAzul(distancia) {
  return map(distancia, 0, width / 2.8, 0, 255);
}
