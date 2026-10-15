import datos from "./datos.js";
import { reporte } from "./calculos.js";

const { curso, todos } = datos;
console.log(`Curso: ${curso}`);
todos.forEach((estudiante) => console.log(reporte(estudiante)));

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("app") || document.body;

  const html = `
    <h2>Curso: ${curso}</h2>
    <ul>
    ${todos.map((estudiante) => `<li>${reporte(estudiante)}</li>`).join("")}
    </ul>
`;
  contenedor.innerHTML = html;
});
