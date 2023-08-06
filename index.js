// //PopUp inicial
function main() {
  const popupContainer = document.getElementById("popup-container");

  popupContainer.style.display = "flex";
}

main();

//CREANDO LOS BLOQUES QUE REPRESENTAN SEMANAS
function addElement() {
  for (let i = 0; i < 4320; i++) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "box");
    newDiv.setAttribute("id", i);
    var currentDiv = document.getElementById("container");
    currentDiv.appendChild(newDiv);
  }
}

addElement();

//Fecha de hoy
var f = document.getElementById("fecha");

var a = new Date();
var b = document.createTextNode(
  a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear()
);
f.appendChild(b);

//Calculo edad en semanas

function edad(edadUser) {
  const fechaNacimiento = edadUser.split("-");
  const edadEnDescripcion = document.getElementById("fecha-nac");
  const fechaNac = document.createTextNode(
    `${fechaNacimiento[2]}/${fechaNacimiento[1]}/${fechaNacimiento[0]}`
  );
  edadEnDescripcion.appendChild(fechaNac);
  //Años
  let anioNa = fechaNacimiento[0];
  var anioAc = a.getFullYear();
  //Meses
  let mesNa = fechaNacimiento[1];
  var mesAc = a.getMonth() + 1;
  //Dias
  let diaNa = fechaNacimiento[2];
  var diaAc = a.getDate();

  var edadA = anioAc - anioNa;
  var edadM = mesAc - mesNa;
  var edadD = diaAc - diaNa;

  //Calculo semanas

  var sem = edadA * 48 + edadM * 4 + edadD / 7;
  var x = Math.floor(sem);

  for (var i = 0; i < x; i++) {
    var z = document.getElementById(i);
    z.setAttribute("class", "box green");
  }
}

function setName(name) {
  const nameOnDescription = document.getElementById("nombre");
  const nameText = document.createTextNode(name);

  nameOnDescription.appendChild(nameText);
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const popupContainer = document.getElementById("popup-container");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("e", e.target[0].value);
    const nombre = e.target[0].value;
    const edadUser = e.target[1].value;
    setName(nombre);
    edad(edadUser);
    popupContainer.style.display = "none";
  });
});
