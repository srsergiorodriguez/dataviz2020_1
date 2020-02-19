let cr = {
  nombres: "Cristian Camilo",  // String Categorial Nominal
  apellido: "Baquero Vasquez", // String Categorical Nominal
  edad: 27, // Number Numerical Continual
  gafas: true, // Boolean Categorical Binomial
  hermanos: ["Iván", "Sebastián"], // Array Categorical Nominal
  año_de_nacimiento: 1992, // Number Numerical Discrete
  comida: ["Bandeja Paisa", "Tacos al Pastos", "Pozole", "Putine", "Cuchuco"], // Array Categorical Nominal
  comic: ["Spawn", "Calvin and Hobbes", "Maüs", "One Piece"], // Array Categorical Nominal
  favorite_historical_moments: ["Dutch Revolt", "Japan Edo Period", "Canadian XIX Century Confederation", "Old Kingdom of Egypt", "Romanian High Middle Ages", "Italian 12th and 13th centuries"], // Array Categorical Nominal
  favorite_cellphones: ["Motorola ROKR E2", "Sony Ericsson W600", "ZTE Nubia Red Magic 3s"], // Array Categorical Nominal
}

function setup() {
  console.log(cr.nombres);
}