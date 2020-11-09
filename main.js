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

// menu hamburguesa desplegable:

const menuHamburguesa = document.querySelector(".menu-hamburguesa");
const body = document.querySelector("#contenedor-expandido");
const botonCerrarExpandido = document.querySelector(".boton-cerrar-expandido");
const lis = document.querySelectorAll(".lista-expandida");

menuHamburguesa.onclick = () => {
  body.classList.toggle("hidden");
};

for (let li of lis) {
  li.onclick = () => {
    menuHamburguesa.onclick();
  };
}

botonCerrarExpandido.onclick = () => {
  body.classList.toggle("hidden");
};
