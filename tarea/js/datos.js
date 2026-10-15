const curso = "Diseño de Interfaces";

const estudiantes = [
  { nombre: "Ana", notas: [16, 18, 15] },
  { nombre: "Luis", notas: [12, 10, 14] },
  { nombre: "Rosa", notas: [19, 17, 20] },
];

// Nuevo estudiante usando spread de objeto ({ ...obj })
const nuevo = { ...estudiantes[0], nombre: "AnaMaría" };

// Arreglo final combinando mediante spread de arreglo ([ ...arr ])
const todos = [...estudiantes, nuevo];

// Exportación por defecto
export default {
  curso,
  todos,
};
