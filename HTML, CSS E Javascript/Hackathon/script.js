const btnContraste = document.getElementById("btnContraste");
const btnZoomIn = document.getElementById("btnZoomIn");
const btnZoomOut = document.getElementById("btnZoomOut");

const bgContrasteAzul = document.getElementsByClassName("bgContrasteAzul");
const menuAcessibilidade = document.getElementsByClassName("menuAcessibilidade");
const bgContrasteRoxo1 = document.getElementsByClassName("bgContrasteRoxo1");
const bgContrasteRoxo2 = document.getElementsByClassName("bgContrasteRoxo2");
const bgContrasteRoxo2submenu = document.getElementsByClassName("bgContrasteRoxo2submenu");
const txtBlack = document.getElementsByClassName("txtBlack");
const txtGrey = document.getElementsByClassName("txtGrey");
const borderBlack = document.getElementsByClassName("borderBlack");
const calQuad = document.getElementsByClassName("calQuad");

const txt14 = document.getElementsByClassName("txt14");
const txt16 = document.getElementsByClassName("txt16");
const txt17 = document.getElementsByClassName("txt17");
const txt18 = document.getElementsByClassName("txt18");
const txt20 = document.getElementsByClassName("txt20");
const txt22 = document.getElementsByClassName("txt22");
const txt25 = document.getElementsByClassName("txt25");
const txt28 = document.getElementsByClassName("txt28");
const txt35 = document.getElementsByClassName("txt35");
const txt40 = document.getElementsByClassName("txt40");
const txt55 = document.getElementsByClassName("txt55");

var zoom = 0;
//Botão Zoom-In e Zoom-Out
btnZoomIn.addEventListener('click', functZoomIn);

function functZoomIn() {
  if (zoom <= 2) {
    zoom++;
    document.getElementsByClassName("bi-zoom-out")[0].style.color = "white";
    btnZoomOut.disabled = false;
    functZoom();
    if (zoom === 2) {
      btnZoomIn.disabled = true;
      document.getElementsByClassName("bi-zoom-in")[0].style.color = "grey";
    }
  }
}

btnZoomOut.addEventListener('click', functZoomOut);

function functZoomOut() {
  if (zoom >= -2) {
    zoom--;
    document.getElementsByClassName("bi-zoom-in")[0].style.color = "white";
    btnZoomIn.disabled = false;
    functZoom();
    if (zoom === -2) {
      btnZoomOut.disabled = true;
      document.getElementsByClassName("bi-zoom-out")[0].style.color = "grey";
    }
  }
}

function functZoom() {
  if (zoom == 2) {
    for (var i = 0; i < txt14.length; i++) {
      txt14[i].style.fontSize = "18px";
    };
    for (var i = 0; i < txt16.length; i++) {
      txt16[i].style.fontSize = "20px";
    };
    for (var i = 0; i < txt17.length; i++) {
      txt17[i].style.fontSize = "21px";
    };
    for (var i = 0; i < txt18.length; i++) {
      txt18[i].style.fontSize = "22px";
    };
    for (var i = 0; i < txt20.length; i++) {
      txt20[i].style.fontSize = "24px";
    };
    for (var i = 0; i < txt22.length; i++) {
      txt22[i].style.fontSize = "26px";
    };
    for (var i = 0; i < txt25.length; i++) {
      txt25[i].style.fontSize = "29px";
    };
    for (var i = 0; i < txt28.length; i++) {
      txt28[i].style.fontSize = "32px";
    };
    for (var i = 0; i < txt35.length; i++) {
      txt35[i].style.fontSize = "39px";
    };
    for (var i = 0; i < txt40.length; i++) {
      txt40[i].style.fontSize = "44px";
    };
    for (var i = 0; i < txt55.length; i++) {
      txt55[i].style.fontSize = "59px";
    };
  }
  else if (zoom == 1) {
    for (var i = 0; i < txt14.length; i++) {
      txt14[i].style.fontSize = "16px";
    };
    for (var i = 0; i < txt16.length; i++) {
      txt16[i].style.fontSize = "18px";
    };
    for (var i = 0; i < txt17.length; i++) {
      txt17[i].style.fontSize = "19px";
    };
    for (var i = 0; i < txt18.length; i++) {
      txt18[i].style.fontSize = "20px";
    };
    for (var i = 0; i < txt20.length; i++) {
      txt20[i].style.fontSize = "22px";
    };
    for (var i = 0; i < txt22.length; i++) {
      txt22[i].style.fontSize = "24px";
    };
    for (var i = 0; i < txt25.length; i++) {
      txt25[i].style.fontSize = "27px";
    };
    for (var i = 0; i < txt28.length; i++) {
      txt28[i].style.fontSize = "30px";
    };
    for (var i = 0; i < txt35.length; i++) {
      txt35[i].style.fontSize = "37px";
    };
    for (var i = 0; i < txt40.length; i++) {
      txt40[i].style.fontSize = "42px";
    };
    for (var i = 0; i < txt55.length; i++) {
      txt55[i].style.fontSize = "57px";
    };
  }
  else if (zoom == 0) {
    for (var i = 0; i < txt14.length; i++) {
      txt14[i].style.fontSize = "14px";
    };
    for (var i = 0; i < txt16.length; i++) {
      txt16[i].style.fontSize = "16px";
    };
    for (var i = 0; i < txt17.length; i++) {
      txt17[i].style.fontSize = "17px";
    };
    for (var i = 0; i < txt18.length; i++) {
      txt18[i].style.fontSize = "18px";
    };
    for (var i = 0; i < txt20.length; i++) {
      txt20[i].style.fontSize = "20px";
    };
    for (var i = 0; i < txt22.length; i++) {
      txt22[i].style.fontSize = "22px";
    };
    for (var i = 0; i < txt25.length; i++) {
      txt25[i].style.fontSize = "25px";
    };
    for (var i = 0; i < txt28.length; i++) {
      txt28[i].style.fontSize = "28px";
    };
    for (var i = 0; i < txt35.length; i++) {
      txt35[i].style.fontSize = "35px";
    };
    for (var i = 0; i < txt40.length; i++) {
      txt40[i].style.fontSize = "40px";
    };
    for (var i = 0; i < txt55.length; i++) {
      txt55[i].style.fontSize = "55px";
    };
  }
  else if (zoom == -1) {
    for (var i = 0; i < txt14.length; i++) {
      txt14[i].style.fontSize = "12px";
    };
    for (var i = 0; i < txt16.length; i++) {
      txt16[i].style.fontSize = "14px";
    };
    for (var i = 0; i < txt17.length; i++) {
      txt17[i].style.fontSize = "15px";
    };
    for (var i = 0; i < txt18.length; i++) {
      txt18[i].style.fontSize = "16px";
    };
    for (var i = 0; i < txt20.length; i++) {
      txt20[i].style.fontSize = "18px";
    };
    for (var i = 0; i < txt22.length; i++) {
      txt22[i].style.fontSize = "20px";
    };
    for (var i = 0; i < txt25.length; i++) {
      txt25[i].style.fontSize = "23px";
    };
    for (var i = 0; i < txt28.length; i++) {
      txt28[i].style.fontSize = "26px";
    };
    for (var i = 0; i < txt35.length; i++) {
      txt35[i].style.fontSize = "33px";
    };
    for (var i = 0; i < txt40.length; i++) {
      txt40[i].style.fontSize = "38px";
    };
    for (var i = 0; i < txt55.length; i++) {
      txt55[i].style.fontSize = "53px";
    };
  }
  else if (zoom == -2) {
    for (var i = 0; i < txt14.length; i++) {
      txt14[i].style.fontSize = "10px";
    };
    for (var i = 0; i < txt16.length; i++) {
      txt16[i].style.fontSize = "12px";
    };
    for (var i = 0; i < txt17.length; i++) {
      txt17[i].style.fontSize = "13px";
    };
    for (var i = 0; i < txt18.length; i++) {
      txt18[i].style.fontSize = "14px";
    };
    for (var i = 0; i < txt20.length; i++) {
      txt20[i].style.fontSize = "16px";
    };
    for (var i = 0; i < txt22.length; i++) {
      txt22[i].style.fontSize = "18px";
    };
    for (var i = 0; i < txt25.length; i++) {
      txt25[i].style.fontSize = "21px";
    };
    for (var i = 0; i < txt28.length; i++) {
      txt28[i].style.fontSize = "24px";
    };
    for (var i = 0; i < txt35.length; i++) {
      txt35[i].style.fontSize = "31px";
    };
    for (var i = 0; i < txt40.length; i++) {
      txt40[i].style.fontSize = "36px";
    };
    for (var i = 0; i < txt55.length; i++) {
      txt55[i].style.fontSize = "51px";
    };
  }
}

//Botão Contraste
btnContraste.addEventListener('click', functContraste);

var contrastOffOn = 0;
function functContraste() {
  if (contrastOffOn == 0) {
    contrastOffOn++;
    document.body.style.backgroundColor = "black";

    for (var i = 0; i < bgContrasteAzul.length; i++) {
      bgContrasteAzul[i].style.backgroundColor = "black";
      bgContrasteAzul[i].style.border = "1px solid white";
      menuAcessibilidade[0].style.borderRight = "none";
    }
    for (var i = 0; i < bgContrasteRoxo1.length; i++) {
      bgContrasteRoxo1[i].style.backgroundColor = "black";
    }
    for (var i = 0; i < bgContrasteRoxo2.length; i++) {
      bgContrasteRoxo2[i].style.backgroundColor = "black";
      bgContrasteRoxo2[i].style.border = "1px solid white";
      bgContrasteRoxo2[i].style.borderLeft = "none";
    }
    for (var i = 0; i < bgContrasteRoxo2submenu.length; i++) {
      bgContrasteRoxo2submenu[i].style.backgroundColor = "black";
      bgContrasteRoxo2submenu[i].style.borderColor = "white";
    }
    for (var i = 0; i < txtBlack.length; i++) {
      txtBlack[i].style.color = "white";
    }
    for (var i = 0; i < txtGrey.length; i++) {
      txtGrey[i].style.color = "white";
    }
    for (var i = 0; i < borderBlack.length; i++) {
      borderBlack[i].style.borderColor = "white";
    }
    for (var i = 0; i < calQuad.length; i++) {
      calQuad[i].style.borderColor = "white";
    }

  } else if (contrastOffOn == 1) {
    contrastOffOn--
    document.body.style.backgroundColor = "white";

    for (var i = 0; i < bgContrasteAzul.length; i++) {
      bgContrasteAzul[i].style.backgroundColor = "#418bb9";
      bgContrasteAzul[i].style.borderColor = "black";
    }
    for (var i = 0; i < bgContrasteRoxo1.length; i++) {
      bgContrasteRoxo1[i].style.backgroundColor = "#5d3894";
    }
    for (var i = 0; i < bgContrasteRoxo2.length; i++) {
      bgContrasteRoxo2[i].style.backgroundColor = "#7045b0";
      bgContrasteRoxo2[i].style.border = "none";
    }
    for (var i = 0; i < bgContrasteRoxo2submenu.length; i++) {
      bgContrasteRoxo2submenu[i].style.backgroundColor = "#7045b0";
      bgContrasteRoxo2submenu[i].style.borderColor = "black";
    }
    for (var i = 0; i < txtBlack.length; i++) {
      txtBlack[i].style.color = "black";
    }
    for (var i = 0; i < txtGrey.length; i++) {
      txtGrey[i].style.color = "#595959";
    }
    for (var i = 0; i < borderBlack.length; i++) {
      borderBlack[i].style.borderColor = "black";
    }
    for (var i = 0; i < calQuad.length; i++) {
      calQuad[i].style.borderColor = "black";
    }

  }
}