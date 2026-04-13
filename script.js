// Crear las listas de imágenes, títulos y frases
const imagenes = [
];

const titulos = [
  "Panda Gigante 🐼🐾",
  "Panda Rojo ฅ՞•ﻌ•՞ฅ",
  "Panda Gigante 🐼🐾",
  "Panda Rojo ฅ՞•ﻌ•՞ฅ"
];

const frases = [
  "El panda dice que hoy debes descansar más 🐼",
  "El panda rojo dice que hoy es un buen dia para cantar 🎶",
  "El panda dice que debes confía en tu intuición✨",
  "El panda rojo dice, que te parches algo bueno llegara si tienes paciencia 🎋"
];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();