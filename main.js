// DECLARO VARIABLES:
const cajas = document.querySelectorAll(".proyecto");
const botonesFiltro = document.querySelectorAll(".filtro");

for (let boton of botonesFiltro) {
  boton.onclick = () => {
    for (let cajita of cajas) {
      // NORMALIZO LAS VARIABLES
      const botones = boton.dataset.conocimientos;
      const caja = cajita.dataset.conocimientos;

      if (botones == caja) {
        cajita.classList.remove("hidden");
      } else if (botones === "Todos") {
        cajita.classList.remove("hidden");
      } else {
        cajita.classList.add("hidden");
      }
    }
  };
}
