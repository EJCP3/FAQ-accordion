const contePregunta = document.querySelectorAll(
  ".main-container-pregunta-titulo"
);
const conteFaqs = document.querySelectorAll(".main-container-pregunta");
const iconImagen = document.querySelectorAll(
  ".main-container-pregunta-titulo img"
);
const minus = "public/icon-minus.svg";
const plus = "public/icon-plus.svg";



contePregunta.forEach((e, index) => {
  e.addEventListener("click", () => {

    conteFaqs.forEach((element, idx) => {
     
        if (idx === index) {
              iconImagen[idx].src = minus;
              if(element.open){
                iconImagen[idx].src = plus;
              }
            
          } else {
            element.open = false;
            iconImagen[idx].src = plus;
          }
     
    });
  });
});

