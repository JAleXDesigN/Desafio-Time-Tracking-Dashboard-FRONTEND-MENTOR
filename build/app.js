fetch('build/data.json')
  .then((response) => response.json())
  .then((data) => info.push(...data)) /*COLOCA LOS DATOS EN LA VARIABLE INFO DENTRO DE UN ARRAY*/

/*VARIABLES LET PORQUE ESTARAN SUJETAS A CAMBIOS*/
let info = [];
let n = 0;
let cards = document.querySelectorAll(".card");
let timeframesOpt = document.querySelectorAll('.options');
let time = 'daily';
let timeframe = 'daily';
let select = document.querySelectorAll('.options')[1];


/*ASIGNAMOS VALORES A LA VARIABLE TIME*/
function cambiarCard(value) {
    time = value;

    time === 'daily' ? timeframe = 'Day': '';
    time === 'weekly' ? timeframe = 'Week': '';
    time === 'monthly' ? timeframe = 'Month': '';
    nuevosDatos();
}

timeframesOpt.forEach((item) => item.addEventListener('click', activarCard)); /*LLAMADO A LA VARIABLE ACTIVAR CARD PARA AGREGAR CLASE "ACTIVE" AL SELECCIONAR LAS OPCIONES*/

function activarCard() {
    if (this.innerText.toLowerCase() === time) this.classList.add('active'); /*Si el texto de la opcion seleccionada coincide con el de la variable time agrega la clase activa*/
    if (this != select) select.classList.remove('active'); /*Remover clase "ACTIVE" al que no esté seleccionado*/
    select = this;
}

/*REEMPLAZAR LOS DATOS*/
function nuevosDatos() {
  cards.forEach((item) => {
      item.querySelector('.time1').innerText = (info[n].timeframes[time].current + 'hrs');
      item.querySelector('.time2').innerText = ('Last ' + timeframe + ' - ' + info[n].timeframes[time].previous +'"hrs');
      n++;
  });
  if (n == 6) n = 0;
}



