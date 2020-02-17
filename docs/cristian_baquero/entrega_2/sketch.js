let cr = {
  nombres: "Cristian Camilo",  // String Text
  apellido: "Baquero Vasquez", // String Text
  edad: 27, // Number Numerical
  gafas: true, // Boolean Categorical
  hermanos: ["Iván", "Sebastián"], // Array Categorical
  año_de_nacimiento: 1992; // Number Ordinal
  comida: ["Bandeja Paisa", "Tacos al Pastos", "Pozole", "Putine", "Cuchuco"] // Array Categorical
  comic: ["Spawn", "Calvin and Hobbes", "Maüs", "One Piece"] // Array Categorical
  favorite_historical_moments: ["Dutch Revolt", "Japan Edo Period", "Canadian XIX Century Confederation", "Old Kingdom of Egypt", "Romanian High Middle Ages", "Italian 12th and 13th centuries"] // Array Categorical
  favorite_cellphones: ["Motorola ROKR E2", "Sony Ericsson W600", "ZTE Nubia Red Magic 3s"] // Array Categorical
}

function setup() {
  console.log(cr.nombres);
}
