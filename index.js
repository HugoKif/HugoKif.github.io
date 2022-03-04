const grid = document.querySelector(".app");
const gameo = document.querySelector(".gameover");
var boxes = document.querySelectorAll(".box ");
let case1 = document.getElementById("case1");
let case2 = document.getElementById("case2");
let case3 = document.getElementById("case3");
let case4 = document.getElementById("case4");
let case5 = document.getElementById("case5");
let case6 = document.getElementById("case6");
let case7 = document.getElementById("case7");
let case8 = document.getElementById("case8");
let case9 = document.getElementById("case9");
let case10 = document.getElementById("case10");
let case11 = document.getElementById("case11");
let case12 = document.getElementById("case12");
let case13 = document.getElementById("case13");
let case14 = document.getElementById("case14");
let case15 = document.getElementById("case15");
let case16 = document.getElementById("case16");
let flag = true;
const retry = document.getElementById("monBtn");
const retry1 = document.querySelector(".retry1");
const retry2 = document.querySelector(".retry2");
const continue1 = document.querySelector(".continuer");
const win = document.querySelector(".gagner");
const loose = document.querySelector(".gameover");
let z = 1;
let p = 1;
let h = 0;
const tableau = [
  case1,
  case2,
  case3,
  case4,
  case5,
  case6,
  case7,
  case8,
  case9,
  case10,
  case11,
  case12,
  case13,
  case14,
  case15,
  case16,
];
const ligne1 = [case1, case2, case3, case4];
const ligne2 = [case5, case6, case7, case8];
const ligne3 = [case9, case10, case11, case12];
const ligne4 = [case13, case14, case15, case16];

const colonne1 = [case1, case5, case9, case13];
const colonne2 = [case2, case6, case10, case14];
const colonne3 = [case3, case7, case11, case15];
const colonne4 = [case4, case8, case12, case16];

let score = 0;
const scorec = document.getElementById("score-container");
scorec.innerHTML += score;

// Début-------------------------------------------------
for (let i = 0; i < 2; i++) {
  const random21 = Math.floor(Math.random() * tableau.length);
  var random = Math.floor(Math.random() * (6 - 2)) + 2;
  if (random === 3 || random === 5) {
    var random = 2;
  }
  if (tableau[random21].innerHTML.length === 1) {
    i--;
  }
  tableau[random21].innerHTML = random;
}

//Bouton retry & continuer-------------------------------------------------------------------------------------
retry.addEventListener("click", () => {
  score *= 0;
  tableau.forEach((e) => {
    e.style.removeProperty("background");
    e.style.removeProperty("fontSize");
    $(e).empty();
  });

  for (let i = 0; i < 2; i++) {
    const random21 = Math.floor(Math.random() * tableau.length);
    var random2 = Math.floor(Math.random() * (6 - 2)) + 2;
    if (random2 === 3 || random2 == 5) {
      var random2 = 2;
    }
    if (tableau[random21].innerHTML.length === 1) {
      i--;
    }
    tableau[random21].innerHTML = random2;
  }
  tableau.forEach((e) => {
    if (e.innerHTML == 2) {
      e.style.background = "#eee4da";
    }
    if (e.innerHTML == 4) {
      e.style.background = "#ede0c8";
    }
  });
});

retry2.addEventListener("click", () => {
  score *= 0;
  tableau.forEach((e) => {
    e.style.removeProperty("background");
    e.style.removeProperty("fontSize");
    $(e).empty();
  });

  for (let i = 0; i < 2; i++) {
    const random21 = Math.floor(Math.random() * tableau.length);
    var random2 = Math.floor(Math.random() * (6 - 2)) + 2;
    if (random2 === 3 || random2 == 5) {
      var random2 = 2;
    }
    if (tableau[random21].innerHTML.length === 1) {
      i--;
    }
    tableau[random21].innerHTML = random2;
  }
  win.classList.remove("gagnervisible");
  tableau.forEach((e) => {
    if (e.innerHTML == 2) {
      e.style.background = "#eee4da";
    }
    if (e.innerHTML == 4) {
      e.style.background = "#ede0c8";
    }
  });
});
retry1.addEventListener("click", () => {
  score *= 0;
  tableau.forEach((e) => {
    e.style.removeProperty("background");
    e.style.removeProperty("fontSize");
    $(e).empty();
  });

  for (let i = 0; i < 2; i++) {
    const random21 = Math.floor(Math.random() * tableau.length);
    var random2 = Math.floor(Math.random() * (6 - 2)) + 2;
    if (random2 === 3 || random2 == 5) {
      var random2 = 2;
    }
    if (tableau[random21].innerHTML.length === 1) {
      i--;
    }
    tableau[random21].innerHTML = random2;
  }
  loose.classList.remove("gameovervisible");
  tableau.forEach((e) => {
    if (e.innerHTML == 2) {
      e.style.background = "#eee4da";
    }
    if (e.innerHTML == 4) {
      e.style.background = "#ede0c8";
    }
  });
});

continue1.addEventListener("click", () => {
  win.classList.remove("gagnervisible");
});

//Event à chaque keydown-------------------------------------------------------------------------------------
document.addEventListener("keydown", function (event) {
  if (event.code == "ArrowLeft") {
    if (ligne1[1].innerHTML.length >= 1) {
      if (ligne1[0].innerHTML.length === 0) {
        h++;
        $(ligne1[1]).contents().appendTo("#case1");
      }
    }
    if (ligne1[2].innerHTML.length >= 1) {
      if (
        ligne1[1].innerHTML.length === 0 &&
        ligne1[0].innerHTML.length === 0
      ) {
        h++;
        $(ligne1[2]).contents().appendTo("#case1");
      } else if (
        ligne1[1].innerHTML.length === 0 &&
        ligne1[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne1[2]).contents().appendTo("#case2");
      }
    }
    if (ligne1[3].innerHTML.length >= 1) {
      if (
        ligne1[2].innerHTML.length === 0 &&
        ligne1[1].innerHTML.length === 0 &&
        ligne1[0].innerHTML.length === 0
      ) {
        h++;
        $(ligne1[3]).contents().appendTo("#case1");
      } else if (
        ligne1[2].innerHTML.length === 0 &&
        ligne1[1].innerHTML.length === 0 &&
        ligne1[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne1[3]).contents().appendTo("#case2");
      } else if (
        ligne1[2].innerHTML.length === 0 &&
        ligne1[1].innerHTML.length >= 1 &&
        ligne1[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne1[3]).contents().appendTo("#case3");
      }
    }

    if (ligne1[0].innerHTML === ligne1[1].innerHTML) {
      let f1 = ligne1[0].innerHTML * 2;
      if (f1 === 0) {
      } else {
        ligne1[0].innerHTML = f1;
        score += f1;
        ligne1[1].style.removeProperty("background");
        ligne1[1].style.removeProperty("fontSize");
        $(ligne1[1]).empty();
        h++;
      }
    }

    if (
      ligne1[2].innerHTML === ligne1[1].innerHTML &&
      ligne1[1].innerHTML !== ligne1[0].innerHTML
    ) {
      let f2 = ligne1[1].innerHTML * 2;
      if (f2 === 0) {
      } else {
        ligne1[1].innerHTML = f2;
        score += f2;
        ligne1[2].style.removeProperty("background");
        ligne1[2].style.removeProperty("fontSize");
        $(ligne1[2]).empty();
        h++;
      }
    }

    if (
      ligne1[3].innerHTML === ligne1[2].innerHTML &&
      ligne1[2].innerHTML !== ligne1[1].innerHTML
    ) {
      let f3 = ligne1[2].innerHTML * 2;
      if (f3 === 0) {
      } else {
        ligne1[2].innerHTML = f3;
        score += f3;
        ligne1[3].style.removeProperty("background");
        ligne1[3].style.removeProperty("fontSize");
        $(ligne1[3]).empty();
        h++;
      }
    }

    if (ligne1[1].innerHTML.length >= 1) {
      if (ligne1[0].innerHTML.length === 0) {
        h++;
        $(ligne1[1]).contents().appendTo("#case1");
      }
    }
    if (ligne1[2].innerHTML.length >= 1) {
      if (
        ligne1[1].innerHTML.length === 0 &&
        ligne1[0].innerHTML.length === 0
      ) {
        h++;
        $(ligne1[2]).contents().appendTo("#case1");
      } else if (
        ligne1[1].innerHTML.length === 0 &&
        ligne1[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne1[2]).contents().appendTo("#case2");
      }
    }
    if (ligne1[3].innerHTML.length >= 1) {
      if (
        ligne1[2].innerHTML.length === 0 &&
        ligne1[1].innerHTML.length === 0 &&
        ligne1[0].innerHTML.length === 0
      ) {
        h++;
        $(ligne1[3]).contents().appendTo("#case1");
      } else if (
        ligne1[2].innerHTML.length === 0 &&
        ligne1[1].innerHTML.length === 0 &&
        ligne1[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne1[3]).contents().appendTo("#case2");
      } else if (
        ligne1[2].innerHTML.length === 0 &&
        ligne1[1].innerHTML.length >= 1 &&
        ligne1[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne1[3]).contents().appendTo("#case3");
      }
    }

    ligne1.forEach((e) => {
      if (e.innerHTML.length === 0) {
        e.style.removeProperty("background");
        e.style.removeProperty("fontSize");
        $(e).empty();
      }
    });
    //--------------------------------------------------------------------------
    if (ligne2[1].innerHTML.length >= 1) {
      if (ligne2[0].innerHTML.length === 0) {
        h++;
        $(ligne2[1]).contents().appendTo("#case5");
      }
    }
    if (ligne2[2].innerHTML.length >= 1) {
      if (
        ligne2[1].innerHTML.length === 0 &&
        ligne2[0].innerHTML.length === 0
      ) {
        h++;
        $(ligne2[2]).contents().appendTo("#case5");
      } else if (
        ligne2[1].innerHTML.length === 0 &&
        ligne2[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne2[2]).contents().appendTo("#case6");
      }
    }
    if (ligne2[3].innerHTML.length >= 1) {
      if (
        ligne2[2].innerHTML.length === 0 &&
        ligne2[1].innerHTML.length === 0 &&
        ligne2[0].innerHTML.length === 0
      ) {
        h++;
        $(ligne2[3]).contents().appendTo("#case5");
      } else if (
        ligne2[2].innerHTML.length === 0 &&
        ligne2[1].innerHTML.length === 0 &&
        ligne2[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne2[3]).contents().appendTo("#case6");
      } else if (
        ligne2[2].innerHTML.length === 0 &&
        ligne2[1].innerHTML.length >= 1 &&
        ligne2[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne2[3]).contents().appendTo("#case7");
      }
    }

    if (ligne2[0].innerHTML === ligne2[1].innerHTML) {
      let f4 = ligne2[0].innerHTML * 2;
      if (f4 === 0) {
      } else {
        ligne2[0].innerHTML = f4;
        score += f4;
        ligne2[1].style.removeProperty("background");
        ligne2[1].style.removeProperty("fontSize");
        $(ligne2[1]).empty();
        h++;
      }
    }

    if (
      ligne2[2].innerHTML === ligne2[1].innerHTML &&
      ligne2[1].innerHTML !== ligne2[0].innerHTML
    ) {
      let f5 = ligne2[1].innerHTML * 2;
      if (f5 === 0) {
      } else {
        ligne2[1].innerHTML = f5;
        score += f5;
        ligne2[2].style.removeProperty("background");
        ligne2[2].style.removeProperty("fontSize");
        $(ligne2[2]).empty();
        h++;
      }
    }

    if (
      ligne2[3].innerHTML === ligne2[2].innerHTML &&
      ligne2[2].innerHTML !== ligne2[1].innerHTML
    ) {
      let f6 = ligne2[2].innerHTML * 2;
      if (f6 === 0) {
      } else {
        ligne2[2].innerHTML = f6;
        score += f6;
        ligne2[3].style.removeProperty("background");
        ligne2[3].style.removeProperty("fontSize");
        $(ligne2[3]).empty();
        h++;
      }
    }

    if (ligne2[1].innerHTML.length >= 1) {
      if (ligne2[0].innerHTML.length === 0) {
        h++;
        $(ligne2[1]).contents().appendTo("#case5");
      }
    }
    if (ligne2[2].innerHTML.length >= 1) {
      if (
        ligne2[1].innerHTML.length === 0 &&
        ligne2[0].innerHTML.length === 0
      ) {
        h++;
        $(ligne2[2]).contents().appendTo("#case5");
      } else if (
        ligne2[1].innerHTML.length === 0 &&
        ligne2[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne2[2]).contents().appendTo("#case6");
      }
    }
    if (ligne2[3].innerHTML.length >= 1) {
      if (
        ligne2[2].innerHTML.length === 0 &&
        ligne2[1].innerHTML.length === 0 &&
        ligne2[0].innerHTML.length === 0
      ) {
        h++;
        $(ligne2[3]).contents().appendTo("#case5");
      } else if (
        ligne2[2].innerHTML.length === 0 &&
        ligne2[1].innerHTML.length === 0 &&
        ligne2[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne2[3]).contents().appendTo("#case6");
      } else if (
        ligne2[2].innerHTML.length === 0 &&
        ligne2[1].innerHTML.length >= 1 &&
        ligne2[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne2[3]).contents().appendTo("#case7");
      }
    }
    //---------------------------------------------------------------------------------------
    if (ligne3[1].innerHTML.length >= 1) {
      if (ligne3[0].innerHTML.length === 0) {
        h++;
        $(ligne3[1]).contents().appendTo("#case9");
      }
    }
    if (ligne3[2].innerHTML.length >= 1) {
      if (
        ligne3[1].innerHTML.length === 0 &&
        ligne3[0].innerHTML.length === 0
      ) {
        h++;
        $(ligne3[2]).contents().appendTo("#case9");
      } else if (
        ligne3[1].innerHTML.length === 0 &&
        ligne3[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne3[2]).contents().appendTo("#case10");
      }
    }
    if (ligne3[3].innerHTML.length >= 1) {
      if (
        ligne3[2].innerHTML.length === 0 &&
        ligne3[1].innerHTML.length === 0 &&
        ligne3[0].innerHTML.length === 0
      ) {
        h++;
        $(ligne3[3]).contents().appendTo("#case9");
      } else if (
        ligne3[2].innerHTML.length === 0 &&
        ligne3[1].innerHTML.length === 0 &&
        ligne3[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne3[3]).contents().appendTo("#case10");
      } else if (
        ligne3[2].innerHTML.length === 0 &&
        ligne3[1].innerHTML.length >= 1 &&
        ligne3[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne3[3]).contents().appendTo("#case11");
      }
    }

    if (ligne3[0].innerHTML === ligne3[1].innerHTML) {
      let f7 = ligne3[0].innerHTML * 2;
      if (f7 === 0) {
      } else {
        ligne3[0].innerHTML = f7;
        score += f7;
        ligne3[1].style.removeProperty("background");
        ligne3[1].style.removeProperty("fontSize");
        $(ligne3[1]).empty();
        h++;
      }
    }

    if (
      ligne3[2].innerHTML === ligne3[1].innerHTML &&
      ligne3[1].innerHTML !== ligne3[0].innerHTML
    ) {
      let f8 = ligne3[1].innerHTML * 2;
      if (f8 === 0) {
      } else {
        ligne3[1].innerHTML = f8;
        score += f8;
        ligne3[2].style.removeProperty("background");
        ligne3[2].style.removeProperty("fontSize");
        $(ligne3[2]).empty();
        h++;
      }
    }

    if (
      ligne3[3].innerHTML === ligne3[2].innerHTML &&
      ligne3[2].innerHTML !== ligne3[1].innerHTML
    ) {
      let f9 = ligne3[2].innerHTML * 2;
      if (f9 === 0) {
      } else {
        ligne3[2].innerHTML = f9;
        score += f9;
        ligne3[3].style.removeProperty("background");
        ligne3[3].style.removeProperty("fontSize");
        $(ligne3[3]).empty();
        h++;
      }
    }

    if (ligne3[1].innerHTML.length >= 1) {
      if (ligne3[0].innerHTML.length === 0) {
        h++;
        $(ligne3[1]).contents().appendTo("#case9");
      }
    }
    if (ligne3[2].innerHTML.length >= 1) {
      if (
        ligne3[1].innerHTML.length === 0 &&
        ligne3[0].innerHTML.length === 0
      ) {
        h++;
        $(ligne3[2]).contents().appendTo("#case9");
      } else if (
        ligne3[1].innerHTML.length === 0 &&
        ligne3[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne3[2]).contents().appendTo("#case10");
      }
    }
    if (ligne3[3].innerHTML.length >= 1) {
      if (
        ligne3[2].innerHTML.length === 0 &&
        ligne3[1].innerHTML.length === 0 &&
        ligne3[0].innerHTML.length === 0
      ) {
        h++;
        $(ligne3[3]).contents().appendTo("#case9");
      } else if (
        ligne3[2].innerHTML.length === 0 &&
        ligne3[1].innerHTML.length === 0 &&
        ligne3[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne3[3]).contents().appendTo("#case10");
      } else if (
        ligne3[2].innerHTML.length === 0 &&
        ligne3[1].innerHTML.length >= 1 &&
        ligne3[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne3[3]).contents().appendTo("#case11");
      }
    }
    //---------------------------------------------------------------------------------------
    if (ligne4[1].innerHTML.length >= 1) {
      if (ligne4[0].innerHTML.length === 0) {
        h++;
        $(ligne4[1]).contents().appendTo("#case13");
      }
    }
    if (ligne4[2].innerHTML.length >= 1) {
      if (
        ligne4[1].innerHTML.length === 0 &&
        ligne4[0].innerHTML.length === 0
      ) {
        h++;
        $(ligne4[2]).contents().appendTo("#case13");
      } else if (
        ligne4[1].innerHTML.length === 0 &&
        ligne4[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne4[2]).contents().appendTo("#case14");
      }
    }
    if (ligne4[3].innerHTML.length >= 1) {
      if (
        ligne4[2].innerHTML.length === 0 &&
        ligne4[1].innerHTML.length === 0 &&
        ligne4[0].innerHTML.length === 0
      ) {
        h++;
        $(ligne4[3]).contents().appendTo("#case13");
      } else if (
        ligne4[2].innerHTML.length === 0 &&
        ligne4[1].innerHTML.length === 0 &&
        ligne4[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne4[3]).contents().appendTo("#case14");
      } else if (
        ligne4[2].innerHTML.length === 0 &&
        ligne4[1].innerHTML.length >= 1 &&
        ligne4[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne4[3]).contents().appendTo("#case15");
      }
    }

    if (ligne4[0].innerHTML === ligne4[1].innerHTML) {
      let f10 = ligne4[0].innerHTML * 2;
      if (f10 === 0) {
      } else {
        ligne4[0].innerHTML = f10;
        score += f10;
        ligne4[1].style.removeProperty("background");
        ligne4[1].style.removeProperty("fontSize");
        $(ligne4[1]).empty();
        h++;
      }
    }

    if (
      ligne4[2].innerHTML === ligne4[1].innerHTML &&
      ligne4[1].innerHTML !== ligne4[0].innerHTML
    ) {
      let f11 = ligne4[1].innerHTML * 2;
      if (f11 === 0) {
      } else {
        ligne4[1].innerHTML = f11;
        score += f11;
        ligne4[2].style.removeProperty("background");
        ligne4[2].style.removeProperty("fontSize");
        $(ligne4[2]).empty();
        h++;
      }
    }

    if (
      ligne4[3].innerHTML === ligne4[2].innerHTML &&
      ligne4[2].innerHTML !== ligne4[1].innerHTML
    ) {
      let f12 = ligne4[2].innerHTML * 2;
      if (f12 === 0) {
      } else {
        ligne4[2].innerHTML = f12;
        score += f12;
        ligne4[3].style.removeProperty("background");
        ligne4[3].style.removeProperty("fontSize");
        $(ligne4[3]).empty();
        h++;
      }
    }

    if (ligne4[1].innerHTML.length >= 1) {
      if (ligne4[0].innerHTML.length === 0) {
        h++;
        $(ligne4[1]).contents().appendTo("#case13");
      }
    }
    if (ligne4[2].innerHTML.length >= 1) {
      if (
        ligne4[1].innerHTML.length === 0 &&
        ligne4[0].innerHTML.length === 0
      ) {
        h++;
        $(ligne4[2]).contents().appendTo("#case13");
      } else if (
        ligne4[1].innerHTML.length === 0 &&
        ligne4[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne4[2]).contents().appendTo("#case14");
      }
    }
    if (ligne4[3].innerHTML.length >= 1) {
      if (
        ligne4[2].innerHTML.length === 0 &&
        ligne4[1].innerHTML.length === 0 &&
        ligne4[0].innerHTML.length === 0
      ) {
        h++;
        $(ligne4[3]).contents().appendTo("#case13");
      } else if (
        ligne4[2].innerHTML.length === 0 &&
        ligne4[1].innerHTML.length === 0 &&
        ligne4[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne4[3]).contents().appendTo("#case14");
      } else if (
        ligne4[2].innerHTML.length === 0 &&
        ligne4[1].innerHTML.length >= 1 &&
        ligne4[0].innerHTML.length >= 1
      ) {
        h++;
        $(ligne4[3]).contents().appendTo("#case15");
      }
    }
  }
  //---------------------------------------------------------------------------------------
  if (event.code == "ArrowRight") {
    if (ligne1[2].innerHTML.length >= 1) {
      if (ligne1[3].innerHTML.length === 0) {
        h++;
        $(ligne1[2]).contents().appendTo(ligne1[3]);
      }
    }
    if (ligne1[1].innerHTML.length >= 1) {
      if (
        ligne1[2].innerHTML.length === 0 &&
        ligne1[3].innerHTML.length === 0
      ) {
        h++;
        $(ligne1[1]).contents().appendTo(ligne1[3]);
      } else if (
        ligne1[2].innerHTML.length === 0 &&
        ligne1[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne1[1]).contents().appendTo(ligne1[2]);
      }
    }
    if (ligne1[0].innerHTML.length >= 1) {
      if (
        ligne1[1].innerHTML.length === 0 &&
        ligne1[2].innerHTML.length === 0 &&
        ligne1[3].innerHTML.length === 0
      ) {
        h++;
        $(ligne1[0]).contents().appendTo(ligne1[3]);
      } else if (
        ligne1[1].innerHTML.length === 0 &&
        ligne1[2].innerHTML.length === 0 &&
        ligne1[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne1[0]).contents().appendTo(ligne1[2]);
      } else if (
        ligne1[1].innerHTML.length === 0 &&
        ligne1[2].innerHTML.length >= 1 &&
        ligne1[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne1[0]).contents().appendTo(ligne1[1]);
      }
    }

    if (ligne1[3].innerHTML === ligne1[2].innerHTML) {
      let f13 = ligne1[3].innerHTML * 2;
      if (f13 === 0) {
      } else {
        ligne1[3].innerHTML = f13;
        score += f13;
        ligne1[2].style.removeProperty("background");
        ligne1[2].style.removeProperty("fontSize");
        $(ligne1[2]).empty();
        h++;
      }
    }

    if (
      ligne1[1].innerHTML === ligne1[2].innerHTML &&
      ligne1[2].innerHTML !== ligne1[3].innerHTML
    ) {
      let f14 = ligne1[1].innerHTML * 2;
      if (f14 === 0) {
      } else {
        ligne1[2].innerHTML = f14;
        score += f14;
        ligne1[1].style.removeProperty("background");
        ligne1[1].style.removeProperty("fontSize");
        $(ligne1[1]).empty();
        h++;
      }
    }

    if (
      ligne1[0].innerHTML === ligne1[1].innerHTML &&
      ligne1[1].innerHTML !== ligne1[2].innerHTML
    ) {
      let f15 = ligne1[1].innerHTML * 2;
      if (f15 === 0) {
      } else {
        ligne1[1].innerHTML = f15;
        score += f15;
        ligne1[0].style.removeProperty("background");
        ligne1[0].style.removeProperty("fontSize");
        $(ligne1[0]).empty();
        h++;
      }
    }

    if (ligne1[2].innerHTML.length >= 1) {
      if (ligne1[3].innerHTML.length === 0) {
        h++;
        $(ligne1[2]).contents().appendTo(ligne1[3]);
      }
    }
    if (ligne1[1].innerHTML.length >= 1) {
      if (
        ligne1[2].innerHTML.length === 0 &&
        ligne1[3].innerHTML.length === 0
      ) {
        h++;
        $(ligne1[1]).contents().appendTo(ligne1[3]);
      } else if (
        ligne1[2].innerHTML.length === 0 &&
        ligne1[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne1[1]).contents().appendTo(ligne1[2]);
      }
    }
    if (ligne1[0].innerHTML.length >= 1) {
      if (
        ligne1[1].innerHTML.length === 0 &&
        ligne1[2].innerHTML.length === 0 &&
        ligne1[3].innerHTML.length === 0
      ) {
        h++;
        $(ligne1[0]).contents().appendTo(ligne1[3]);
      } else if (
        ligne1[1].innerHTML.length === 0 &&
        ligne1[2].innerHTML.length === 0 &&
        ligne1[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne1[0]).contents().appendTo(ligne1[2]);
      } else if (
        ligne1[1].innerHTML.length === 0 &&
        ligne1[2].innerHTML.length >= 1 &&
        ligne1[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne1[0]).contents().appendTo(ligne1[1]);
      }
    }
    //--------------------------------------------------------------------------
    if (ligne2[2].innerHTML.length >= 1) {
      if (ligne2[3].innerHTML.length === 0) {
        h++;
        $(ligne2[2]).contents().appendTo("#case8");
      }
    }
    if (ligne2[1].innerHTML.length >= 1) {
      if (
        ligne2[2].innerHTML.length === 0 &&
        ligne2[3].innerHTML.length === 0
      ) {
        h++;
        $(ligne2[1]).contents().appendTo("#case8");
      } else if (
        ligne2[2].innerHTML.length === 0 &&
        ligne2[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne2[1]).contents().appendTo("#case7");
      }
    }
    if (ligne2[0].innerHTML.length >= 1) {
      if (
        ligne2[1].innerHTML.length === 0 &&
        ligne2[2].innerHTML.length === 0 &&
        ligne2[3].innerHTML.length === 0
      ) {
        h++;
        $(ligne2[0]).contents().appendTo("#case8");
      } else if (
        ligne2[1].innerHTML.length === 0 &&
        ligne2[2].innerHTML.length === 0 &&
        ligne2[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne2[0]).contents().appendTo("#case7");
      } else if (
        ligne2[1].innerHTML.length === 0 &&
        ligne2[2].innerHTML.length >= 1 &&
        ligne2[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne2[0]).contents().appendTo("#case6");
      }
    }

    if (ligne2[3].innerHTML === ligne2[2].innerHTML) {
      let f16 = ligne2[3].innerHTML * 2;
      if (f16 === 0) {
      } else {
        ligne2[3].innerHTML = f16;
        score += f16;
        ligne2[2].style.removeProperty("background");
        ligne2[2].style.removeProperty("fontSize");
        $(ligne2[2]).empty();
        h++;
      }
    }

    if (
      ligne2[1].innerHTML === ligne2[2].innerHTML &&
      ligne2[2].innerHTML !== ligne2[3].innerHTML
    ) {
      let f17 = ligne2[1].innerHTML * 2;
      if (f17 === 0) {
      } else {
        ligne2[2].innerHTML = f17;
        score += f17;
        ligne2[1].style.removeProperty("background");
        ligne2[1].style.removeProperty("fontSize");
        $(ligne2[1]).empty();
        h++;
      }
    }

    if (
      ligne2[0].innerHTML === ligne2[1].innerHTML &&
      ligne2[1].innerHTML !== ligne2[2].innerHTML
    ) {
      let f18 = ligne2[1].innerHTML * 2;
      if (f18 === 0) {
      } else {
        ligne2[1].innerHTML = f18;
        score += f18;
        ligne2[0].style.removeProperty("background");
        ligne2[0].style.removeProperty("fontSize");
        $(ligne2[0]).empty();
        h++;
      }
    }

    if (ligne2[2].innerHTML.length >= 1) {
      if (ligne2[3].innerHTML.length === 0) {
        h++;
        $(ligne2[2]).contents().appendTo("#case8");
      }
    }
    if (ligne2[1].innerHTML.length >= 1) {
      if (
        ligne2[2].innerHTML.length === 0 &&
        ligne2[3].innerHTML.length === 0
      ) {
        h++;
        $(ligne2[1]).contents().appendTo("#case8");
      } else if (
        ligne2[2].innerHTML.length === 0 &&
        ligne2[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne2[1]).contents().appendTo("#case7");
      }
    }
    if (ligne2[0].innerHTML.length >= 1) {
      if (
        ligne2[1].innerHTML.length === 0 &&
        ligne2[2].innerHTML.length === 0 &&
        ligne2[3].innerHTML.length === 0
      ) {
        h++;
        $(ligne2[0]).contents().appendTo("#case8");
      } else if (
        ligne2[1].innerHTML.length === 0 &&
        ligne2[2].innerHTML.length === 0 &&
        ligne2[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne2[0]).contents().appendTo("#case7");
      } else if (
        ligne2[1].innerHTML.length === 0 &&
        ligne2[2].innerHTML.length >= 1 &&
        ligne2[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne2[0]).contents().appendTo("#case6");
      }
    }
    //---------------------------------------------------------------------------------------
    if (ligne3[2].innerHTML.length >= 1) {
      if (ligne3[3].innerHTML.length === 0) {
        h++;
        $(ligne3[2]).contents().appendTo("#case12");
      }
    }
    if (ligne3[1].innerHTML.length >= 1) {
      if (
        ligne3[2].innerHTML.length === 0 &&
        ligne3[3].innerHTML.length === 0
      ) {
        h++;
        $(ligne3[1]).contents().appendTo("#case12");
      } else if (
        ligne3[2].innerHTML.length === 0 &&
        ligne3[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne3[1]).contents().appendTo("#case11");
      }
    }
    if (ligne3[0].innerHTML.length >= 1) {
      if (
        ligne3[1].innerHTML.length === 0 &&
        ligne3[2].innerHTML.length === 0 &&
        ligne3[3].innerHTML.length === 0
      ) {
        h++;
        $(ligne3[0]).contents().appendTo("#case12");
      } else if (
        ligne3[1].innerHTML.length === 0 &&
        ligne3[2].innerHTML.length === 0 &&
        ligne3[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne3[0]).contents().appendTo("#case11");
      } else if (
        ligne3[1].innerHTML.length === 0 &&
        ligne3[2].innerHTML.length >= 1 &&
        ligne3[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne3[0]).contents().appendTo("#case10");
      }
    }

    if (ligne3[3].innerHTML === ligne3[2].innerHTML) {
      let f19 = ligne3[3].innerHTML * 2;
      if (f19 === 0) {
      } else {
        ligne3[3].innerHTML = f19;
        score += f19;
        ligne3[2].style.removeProperty("background");
        ligne3[2].style.removeProperty("fontSize");
        $(ligne3[2]).empty();
        h++;
      }
    }

    if (
      ligne3[1].innerHTML === ligne3[2].innerHTML &&
      ligne3[2].innerHTML !== ligne3[3].innerHTML
    ) {
      let f20 = ligne3[1].innerHTML * 2;
      if (f20 === 0) {
      } else {
        ligne3[2].innerHTML = f20;
        score += f20;
        ligne3[1].style.removeProperty("background");
        ligne3[1].style.removeProperty("fontSize");
        $(ligne3[1]).empty();
        h++;
      }
    }

    if (
      ligne3[0].innerHTML === ligne3[1].innerHTML &&
      ligne3[1].innerHTML !== ligne3[2].innerHTML
    ) {
      let f21 = ligne3[1].innerHTML * 2;
      if (f21 === 0) {
      } else {
        ligne3[1].innerHTML = f21;
        score += f21;
        ligne3[0].style.removeProperty("background");
        ligne3[0].style.removeProperty("fontSize");
        $(ligne3[0]).empty();
        h++;
      }
    }

    if (ligne3[2].innerHTML.length >= 1) {
      if (ligne3[3].innerHTML.length === 0) {
        h++;
        $(ligne3[2]).contents().appendTo("#case12");
      }
    }
    if (ligne3[1].innerHTML.length >= 1) {
      if (
        ligne3[2].innerHTML.length === 0 &&
        ligne3[3].innerHTML.length === 0
      ) {
        h++;
        $(ligne3[1]).contents().appendTo("#case12");
      } else if (
        ligne3[2].innerHTML.length === 0 &&
        ligne3[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne3[1]).contents().appendTo("#case11");
      }
    }
    if (ligne3[0].innerHTML.length >= 1) {
      if (
        ligne3[1].innerHTML.length === 0 &&
        ligne3[2].innerHTML.length === 0 &&
        ligne3[3].innerHTML.length === 0
      ) {
        h++;
        $(ligne3[0]).contents().appendTo("#case12");
      } else if (
        ligne3[1].innerHTML.length === 0 &&
        ligne3[2].innerHTML.length === 0 &&
        ligne3[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne3[0]).contents().appendTo("#case11");
      } else if (
        ligne3[1].innerHTML.length === 0 &&
        ligne3[2].innerHTML.length >= 1 &&
        ligne3[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne3[0]).contents().appendTo("#case10");
      }
    }
    //---------------------------------------------------------------------------------------
    if (ligne4[2].innerHTML.length >= 1) {
      if (ligne4[3].innerHTML.length === 0) {
        h++;
        $(ligne4[2]).contents().appendTo("#case16");
      }
    }
    if (ligne4[1].innerHTML.length >= 1) {
      if (
        ligne4[2].innerHTML.length === 0 &&
        ligne4[3].innerHTML.length === 0
      ) {
        h++;
        $(ligne4[1]).contents().appendTo("#case16");
      } else if (
        ligne4[2].innerHTML.length === 0 &&
        ligne4[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne4[1]).contents().appendTo("#case15");
      }
    }
    if (ligne4[0].innerHTML.length >= 1) {
      if (
        ligne4[1].innerHTML.length === 0 &&
        ligne4[2].innerHTML.length === 0 &&
        ligne4[3].innerHTML.length === 0
      ) {
        h++;
        $(ligne4[0]).contents().appendTo("#case16");
      } else if (
        ligne4[1].innerHTML.length === 0 &&
        ligne4[2].innerHTML.length === 0 &&
        ligne4[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne4[0]).contents().appendTo("#case15");
      } else if (
        ligne4[1].innerHTML.length === 0 &&
        ligne4[2].innerHTML.length >= 1 &&
        ligne4[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne4[0]).contents().appendTo("#case14");
      }
    }

    if (ligne4[3].innerHTML === ligne4[2].innerHTML) {
      let f22 = ligne4[3].innerHTML * 2;
      if (f22 === 0) {
      } else {
        ligne4[3].innerHTML = f22;
        score += f22;
        ligne4[2].style.removeProperty("background");
        ligne4[2].style.removeProperty("fontSize");
        $(ligne4[2]).empty();
        h++;
      }
    }

    if (
      ligne4[1].innerHTML === ligne4[2].innerHTML &&
      ligne4[2].innerHTML !== ligne4[3].innerHTML
    ) {
      let f23 = ligne4[1].innerHTML * 2;
      if (f23 === 0) {
      } else {
        ligne4[2].innerHTML = f23;
        score += f23;
        ligne4[1].style.removeProperty("background");
        ligne4[1].style.removeProperty("fontSize");
        $(ligne4[1]).empty();
        h++;
      }
    }

    if (
      ligne4[0].innerHTML === ligne4[1].innerHTML &&
      ligne4[1].innerHTML !== ligne4[2].innerHTML
    ) {
      let f24 = ligne4[1].innerHTML * 2;
      if (f24 === 0) {
      } else {
        ligne4[1].innerHTML = f24;
        score += f24;
        ligne4[0].style.removeProperty("background");
        ligne4[0].style.removeProperty("fontSize");
        $(ligne4[0]).empty();
        h++;
      }
    }

    if (ligne4[2].innerHTML.length >= 1) {
      if (ligne4[3].innerHTML.length === 0) {
        h++;
        $(ligne4[2]).contents().appendTo("#case16");
      }
    }
    if (ligne4[1].innerHTML.length >= 1) {
      if (
        ligne4[2].innerHTML.length === 0 &&
        ligne4[3].innerHTML.length === 0
      ) {
        h++;
        $(ligne4[1]).contents().appendTo("#case16");
      } else if (
        ligne4[2].innerHTML.length === 0 &&
        ligne4[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne4[1]).contents().appendTo("#case15");
      }
    }
    if (ligne4[0].innerHTML.length >= 1) {
      if (
        ligne4[1].innerHTML.length === 0 &&
        ligne4[2].innerHTML.length === 0 &&
        ligne4[3].innerHTML.length === 0
      ) {
        h++;
        $(ligne4[0]).contents().appendTo("#case16");
      } else if (
        ligne4[1].innerHTML.length === 0 &&
        ligne4[2].innerHTML.length === 0 &&
        ligne4[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne4[0]).contents().appendTo("#case15");
      } else if (
        ligne4[1].innerHTML.length === 0 &&
        ligne4[2].innerHTML.length >= 1 &&
        ligne4[3].innerHTML.length >= 1
      ) {
        h++;
        $(ligne4[0]).contents().appendTo("#case14");
      }
    }
  }
  //---------------------------------------------------------------------------------------
  if (event.code == "ArrowUp") {
    if (colonne1[1].innerHTML.length >= 1) {
      if (colonne1[0].innerHTML.length === 0) {
        h++;
        $(colonne1[1]).contents().appendTo("#case1");
      }
    }
    if (colonne1[2].innerHTML.length >= 1) {
      if (
        colonne1[1].innerHTML.length === 0 &&
        colonne1[0].innerHTML.length === 0
      ) {
        h++;
        $(colonne1[2]).contents().appendTo("#case1");
      } else if (
        colonne1[1].innerHTML.length === 0 &&
        colonne1[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne1[2]).contents().appendTo("#case5");
      }
    }
    if (colonne1[3].innerHTML.length >= 1) {
      if (
        colonne1[2].innerHTML.length === 0 &&
        colonne1[1].innerHTML.length === 0 &&
        colonne1[0].innerHTML.length === 0
      ) {
        h++;
        $(colonne1[3]).contents().appendTo("#case1");
      } else if (
        colonne1[2].innerHTML.length === 0 &&
        colonne1[1].innerHTML.length === 0 &&
        colonne1[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne1[3]).contents().appendTo("#case5");
      } else if (
        colonne1[2].innerHTML.length === 0 &&
        colonne1[1].innerHTML.length >= 1 &&
        colonne1[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne1[3]).contents().appendTo("#case9");
      }
    }

    if (colonne1[0].innerHTML === colonne1[1].innerHTML) {
      let f25 = colonne1[0].innerHTML * 2;
      if (f25 === 0) {
      } else {
        colonne1[0].innerHTML = f25;
        score += f25;
        colonne1[1].style.removeProperty("background");
        colonne1[1].style.removeProperty("fontSize");
        $(colonne1[1]).empty();
        h++;
      }
    }

    if (
      colonne1[2].innerHTML === colonne1[1].innerHTML &&
      colonne1[1].innerHTML !== colonne1[0].innerHTML
    ) {
      let f26 = colonne1[1].innerHTML * 2;
      if (f26 === 0) {
      } else {
        colonne1[1].innerHTML = f26;
        score += f26;
        colonne1[2].style.removeProperty("background");
        colonne1[2].style.removeProperty("fontSize");
        $(colonne1[2]).empty();
        h++;
      }
    }

    if (
      colonne1[3].innerHTML === colonne1[2].innerHTML &&
      colonne1[2].innerHTML !== colonne1[1].innerHTML
    ) {
      let f27 = colonne1[2].innerHTML * 2;
      if (f27 === 0) {
      } else {
        colonne1[2].innerHTML = f27;
        score += f27;
        colonne1[3].style.removeProperty("background");
        colonne1[3].style.removeProperty("fontSize");
        $(colonne1[3]).empty();
        h++;
      }
    }

    if (colonne1[0].innerHTML.length === 0) {
      h++;
      $(colonne1[1]).contents().appendTo("#case1");
    }

    if (colonne1[2].innerHTML.length >= 1) {
      if (
        colonne1[1].innerHTML.length === 0 &&
        colonne1[0].innerHTML.length === 0
      ) {
        h++;
        $(colonne1[2]).contents().appendTo("#case1");
      } else if (
        colonne1[1].innerHTML.length === 0 &&
        colonne1[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne1[2]).contents().appendTo("#case5");
      }
    }
    if (colonne1[3].innerHTML.length >= 1) {
      if (
        colonne1[2].innerHTML.length === 0 &&
        colonne1[1].innerHTML.length === 0 &&
        colonne1[0].innerHTML.length === 0
      ) {
        h++;
        $(colonne1[3]).contents().appendTo("#case1");
      } else if (
        colonne1[2].innerHTML.length === 0 &&
        colonne1[1].innerHTML.length === 0 &&
        colonne1[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne1[3]).contents().appendTo("#case5");
      } else if (
        colonne1[2].innerHTML.length === 0 &&
        colonne1[1].innerHTML.length >= 1 &&
        colonne1[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne1[3]).contents().appendTo("#case9");
      }
    }
    //--------------------------------------------------------------------------
    if (colonne2[1].innerHTML.length >= 1) {
      if (colonne2[0].innerHTML.length === 0) {
        h++;
        $(colonne2[1]).contents().appendTo("#case2");
      }
    }
    if (colonne2[2].innerHTML.length >= 1) {
      if (
        colonne2[1].innerHTML.length === 0 &&
        colonne2[0].innerHTML.length === 0
      ) {
        h++;
        $(colonne2[2]).contents().appendTo("#case2");
      } else if (
        colonne2[1].innerHTML.length === 0 &&
        colonne2[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne2[2]).contents().appendTo("#case6");
      }
    }
    if (colonne2[3].innerHTML.length >= 1) {
      if (
        colonne2[2].innerHTML.length === 0 &&
        colonne2[1].innerHTML.length === 0 &&
        colonne2[0].innerHTML.length === 0
      ) {
        h++;
        $(colonne2[3]).contents().appendTo("#case2");
      } else if (
        colonne2[2].innerHTML.length === 0 &&
        colonne2[1].innerHTML.length === 0 &&
        colonne2[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne2[3]).contents().appendTo("#case6");
      } else if (
        colonne2[2].innerHTML.length === 0 &&
        colonne2[1].innerHTML.length >= 1 &&
        colonne2[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne2[3]).contents().appendTo("#case10");
      }
    }

    if (colonne2[0].innerHTML === colonne2[1].innerHTML) {
      let f28 = colonne2[0].innerHTML * 2;
      if (f28 === 0) {
      } else {
        colonne2[0].innerHTML = f28;
        score += f28;
        colonne2[1].style.removeProperty("background");
        colonne2[1].style.removeProperty("fontSize");
        $(colonne2[1]).empty();
        h++;
      }
    }

    if (
      colonne2[2].innerHTML === colonne2[1].innerHTML &&
      colonne2[1].innerHTML !== colonne2[0].innerHTML
    ) {
      let f29 = colonne2[1].innerHTML * 2;
      if (f29 === 0) {
      } else {
        colonne2[1].innerHTML = f29;
        score += f29;
        colonne2[2].style.removeProperty("background");
        colonne2[2].style.removeProperty("fontSize");
        $(colonne2[2]).empty();
        h++;
      }
    }

    if (
      colonne2[3].innerHTML === colonne2[2].innerHTML &&
      colonne2[2].innerHTML !== colonne2[1].innerHTML
    ) {
      let f30 = colonne2[2].innerHTML * 2;
      if (f30 === 0) {
      } else {
        colonne2[2].innerHTML = f30;
        score += f30;
        colonne2[3].style.removeProperty("background");
        colonne2[3].style.removeProperty("fontSize");
        $(colonne2[3]).empty();
        h++;
      }
    }

    if (colonne2[1].innerHTML.length >= 1) {
      if (colonne2[0].innerHTML.length === 0) {
        h++;
        $(colonne2[1]).contents().appendTo("#case2");
      }
    }
    if (colonne2[2].innerHTML.length >= 1) {
      if (
        colonne2[1].innerHTML.length === 0 &&
        colonne2[0].innerHTML.length === 0
      ) {
        h++;
        $(colonne2[2]).contents().appendTo("#case2");
      } else if (
        colonne2[1].innerHTML.length === 0 &&
        colonne2[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne2[2]).contents().appendTo("#case6");
      }
    }
    if (colonne2[3].innerHTML.length >= 1) {
      if (
        colonne2[2].innerHTML.length === 0 &&
        colonne2[1].innerHTML.length === 0 &&
        colonne2[0].innerHTML.length === 0
      ) {
        h++;
        $(colonne2[3]).contents().appendTo("#case2");
      } else if (
        colonne2[2].innerHTML.length === 0 &&
        colonne2[1].innerHTML.length === 0 &&
        colonne2[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne2[3]).contents().appendTo("#case6");
      } else if (
        colonne2[2].innerHTML.length === 0 &&
        colonne2[1].innerHTML.length >= 1 &&
        colonne2[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne2[3]).contents().appendTo("#case10");
      }
    }
    //---------------------------------------------------------------------------------------
    if (colonne3[1].innerHTML.length >= 1) {
      if (colonne3[0].innerHTML.length === 0) {
        h++;
        $(colonne3[1]).contents().appendTo("#case3");
      }
    }
    if (colonne3[2].innerHTML.length >= 1) {
      if (
        colonne3[1].innerHTML.length === 0 &&
        colonne3[0].innerHTML.length === 0
      ) {
        h++;
        $(colonne3[2]).contents().appendTo("#case3");
      } else if (
        colonne3[1].innerHTML.length === 0 &&
        colonne3[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne3[2]).contents().appendTo("#case7");
      }
    }
    if (colonne3[3].innerHTML.length >= 1) {
      if (
        colonne3[2].innerHTML.length === 0 &&
        colonne3[1].innerHTML.length === 0 &&
        colonne3[0].innerHTML.length === 0
      ) {
        h++;
        $(colonne3[3]).contents().appendTo("#case3");
      } else if (
        colonne3[2].innerHTML.length === 0 &&
        colonne3[1].innerHTML.length === 0 &&
        colonne3[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne3[3]).contents().appendTo("#case7");
      } else if (
        colonne3[2].innerHTML.length === 0 &&
        colonne3[1].innerHTML.length >= 1 &&
        colonne3[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne3[3]).contents().appendTo("#case11");
      }
    }

    if (colonne3[0].innerHTML === colonne3[1].innerHTML) {
      let f31 = colonne3[0].innerHTML * 2;
      if (f31 === 0) {
      } else {
        colonne3[0].innerHTML = f31;
        score += f31;
        colonne3[1].style.removeProperty("background");
        colonne3[1].style.removeProperty("fontSize");
        $(colonne3[1]).empty();
        h++;
      }
    }

    if (
      colonne3[2].innerHTML === colonne3[1].innerHTML &&
      colonne3[1].innerHTML !== colonne3[0].innerHTML
    ) {
      let f32 = colonne3[1].innerHTML * 2;
      if (f32 === 0) {
      } else {
        colonne3[1].innerHTML = f32;
        score += f32;
        colonne3[2].style.removeProperty("background");
        colonne3[2].style.removeProperty("fontSize");
        $(colonne3[2]).empty();
        h++;
      }
    }

    if (
      colonne3[3].innerHTML === colonne3[2].innerHTML &&
      colonne3[2].innerHTML !== colonne3[1].innerHTML
    ) {
      let f33 = colonne3[2].innerHTML * 2;
      if (f33 === 0) {
      } else {
        colonne3[2].innerHTML = f33;
        score += f33;
        colonne3[3].style.removeProperty("background");
        colonne3[3].style.removeProperty("fontSize");
        $(colonne3[3]).empty();
        h++;
      }
    }

    if (colonne3[1].innerHTML.length >= 1) {
      if (colonne3[0].innerHTML.length === 0) {
        h++;
        $(colonne3[1]).contents().appendTo("#case3");
      }
    }
    if (colonne3[2].innerHTML.length >= 1) {
      if (
        colonne3[1].innerHTML.length === 0 &&
        colonne3[0].innerHTML.length === 0
      ) {
        h++;
        $(colonne3[2]).contents().appendTo("#case3");
      } else if (
        colonne3[1].innerHTML.length === 0 &&
        colonne3[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne3[2]).contents().appendTo("#case7");
      }
    }
    if (colonne3[3].innerHTML.length >= 1) {
      if (
        colonne3[2].innerHTML.length === 0 &&
        colonne3[1].innerHTML.length === 0 &&
        colonne3[0].innerHTML.length === 0
      ) {
        h++;
        $(colonne3[3]).contents().appendTo("#case3");
      } else if (
        colonne3[2].innerHTML.length === 0 &&
        colonne3[1].innerHTML.length === 0 &&
        colonne3[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne3[3]).contents().appendTo("#case7");
      } else if (
        colonne3[2].innerHTML.length === 0 &&
        colonne3[1].innerHTML.length >= 1 &&
        colonne3[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne3[3]).contents().appendTo("#case11");
      }
    }
    //---------------------------------------------------------------------------------------
    if (colonne4[1].innerHTML.length >= 1) {
      if (colonne4[0].innerHTML.length === 0) {
        h++;
        $(colonne4[1]).contents().appendTo("#case4");
      }
    }
    if (colonne4[2].innerHTML.length >= 1) {
      if (
        colonne4[1].innerHTML.length === 0 &&
        colonne4[0].innerHTML.length === 0
      ) {
        h++;
        $(colonne4[2]).contents().appendTo("#case4");
      } else if (
        colonne4[1].innerHTML.length === 0 &&
        colonne4[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne4[2]).contents().appendTo("#case8");
      }
    }
    if (colonne4[3].innerHTML.length >= 1) {
      if (
        colonne4[2].innerHTML.length === 0 &&
        colonne4[1].innerHTML.length === 0 &&
        colonne4[0].innerHTML.length === 0
      ) {
        h++;
        $(colonne4[3]).contents().appendTo("#case4");
      } else if (
        colonne4[2].innerHTML.length === 0 &&
        colonne4[1].innerHTML.length === 0 &&
        colonne4[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne4[3]).contents().appendTo("#case8");
      } else if (
        colonne4[2].innerHTML.length === 0 &&
        colonne4[1].innerHTML.length >= 1 &&
        colonne4[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne4[3]).contents().appendTo("#case12");
      }
    }

    if (colonne4[0].innerHTML === colonne4[1].innerHTML) {
      let f34 = colonne4[0].innerHTML * 2;
      if (f34 === 0) {
      } else {
        colonne4[0].innerHTML = f34;
        score += f34;
        colonne4[1].style.removeProperty("background");
        colonne4[1].style.removeProperty("fontSize");
        $(colonne4[1]).empty();
        h++;
      }
    }

    if (
      colonne4[2].innerHTML === colonne4[1].innerHTML &&
      colonne4[1].innerHTML !== colonne4[0].innerHTML
    ) {
      let f35 = colonne4[1].innerHTML * 2;
      if (f35 === 0) {
      } else {
        colonne4[1].innerHTML = f35;
        score += f35;
        colonne4[2].style.removeProperty("background");
        colonne4[2].style.removeProperty("fontSize");
        $(colonne4[2]).empty();
        h++;
      }
    }

    if (
      colonne4[3].innerHTML === colonne4[2].innerHTML &&
      colonne4[2].innerHTML !== colonne4[1].innerHTML
    ) {
      let f36 = colonne4[2].innerHTML * 2;
      if (f36 === 0) {
      } else {
        colonne4[2].innerHTML = f36;
        score += f36;
        colonne4[3].style.removeProperty("background");
        colonne4[3].style.removeProperty("fontSize");
        $(colonne4[3]).empty();
        h++;
      }
    }

    if (colonne4[1].innerHTML.length >= 1) {
      if (colonne4[0].innerHTML.length === 0) {
        h++;
        $(colonne4[1]).contents().appendTo("#case4");
      }
    }
    if (colonne4[2].innerHTML.length >= 1) {
      if (
        colonne4[1].innerHTML.length === 0 &&
        colonne4[0].innerHTML.length === 0
      ) {
        h++;
        $(colonne4[2]).contents().appendTo("#case4");
      } else if (
        colonne4[1].innerHTML.length === 0 &&
        colonne4[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne4[2]).contents().appendTo("#case8");
      }
    }
    if (colonne4[3].innerHTML.length >= 1) {
      if (
        colonne4[2].innerHTML.length === 0 &&
        colonne4[1].innerHTML.length === 0 &&
        colonne4[0].innerHTML.length === 0
      ) {
        h++;
        $(colonne4[3]).contents().appendTo("#case4");
      } else if (
        colonne4[2].innerHTML.length === 0 &&
        colonne4[1].innerHTML.length === 0 &&
        colonne4[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne4[3]).contents().appendTo("#case8");
      } else if (
        colonne4[2].innerHTML.length === 0 &&
        colonne4[1].innerHTML.length >= 1 &&
        colonne4[0].innerHTML.length >= 1
      ) {
        h++;
        $(colonne4[3]).contents().appendTo("#case12");
      }
    }
  }
  //---------------------------------------------------------------------------------------
  if (event.code == "ArrowDown") {
    if (colonne1[2].innerHTML.length >= 1) {
      if (colonne1[3].innerHTML.length === 0) {
        h++;
        $(colonne1[2]).contents().appendTo("#case13");
      }
    }
    if (colonne1[1].innerHTML.length >= 1) {
      if (
        colonne1[2].innerHTML.length === 0 &&
        colonne1[3].innerHTML.length === 0
      ) {
        h++;
        $(colonne1[1]).contents().appendTo("#case13");
      } else if (
        colonne1[2].innerHTML.length === 0 &&
        colonne1[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne1[1]).contents().appendTo("#case9");
      }
    }
    if (colonne1[0].innerHTML.length >= 1) {
      if (
        colonne1[1].innerHTML.length === 0 &&
        colonne1[2].innerHTML.length === 0 &&
        colonne1[3].innerHTML.length === 0
      ) {
        h++;
        $(colonne1[0]).contents().appendTo("#case13");
      } else if (
        colonne1[1].innerHTML.length === 0 &&
        colonne1[2].innerHTML.length === 0 &&
        colonne1[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne1[0]).contents().appendTo("#case9");
      } else if (
        colonne1[1].innerHTML.length === 0 &&
        colonne1[2].innerHTML.length >= 1 &&
        colonne1[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne1[0]).contents().appendTo("#case5");
      }
    }

    if (colonne1[3].innerHTML === colonne1[2].innerHTML) {
      let f37 = colonne1[3].innerHTML * 2;
      if (f37 === 0) {
      } else {
        colonne1[3].innerHTML = f37;
        score += f37;
        colonne1[2].style.removeProperty("background");
        colonne1[2].style.removeProperty("fontSize");
        $(colonne1[2]).empty();
        h++;
      }
    }

    if (
      colonne1[1].innerHTML === colonne1[2].innerHTML &&
      colonne1[2].innerHTML !== colonne1[3].innerHTML
    ) {
      let f38 = colonne1[1].innerHTML * 2;
      if (f38 === 0) {
      } else {
        colonne1[2].innerHTML = f38;
        score += f38;
        colonne1[1].style.removeProperty("background");
        colonne1[1].style.removeProperty("fontSize");
        $(colonne1[1]).empty();
        h++;
      }
    }

    if (
      colonne1[0].innerHTML === colonne1[1].innerHTML &&
      colonne1[1].innerHTML !== colonne1[2].innerHTML
    ) {
      let f39 = colonne1[1].innerHTML * 2;
      if (f39 === 0) {
      } else {
        colonne1[1].innerHTML = f39;
        score += f39;
        colonne1[0].style.removeProperty("background");
        colonne1[0].style.removeProperty("fontSize");
        $(colonne1[0]).empty();
        h++;
      }
    }

    if (colonne1[2].innerHTML.length >= 1) {
      if (colonne1[3].innerHTML.length === 0) {
        h++;
        $(colonne1[2]).contents().appendTo("#case13");
      }
    }
    if (colonne1[1].innerHTML.length >= 1) {
      if (
        colonne1[2].innerHTML.length === 0 &&
        colonne1[3].innerHTML.length === 0
      ) {
        h++;
        $(colonne1[1]).contents().appendTo("#case13");
      } else if (
        colonne1[2].innerHTML.length === 0 &&
        colonne1[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne1[1]).contents().appendTo("#case9");
      }
    }
    if (colonne1[0].innerHTML.length >= 1) {
      if (
        colonne1[1].innerHTML.length === 0 &&
        colonne1[2].innerHTML.length === 0 &&
        colonne1[3].innerHTML.length === 0
      ) {
        h++;
        $(colonne1[0]).contents().appendTo("#case13");
      } else if (
        colonne1[1].innerHTML.length === 0 &&
        colonne1[2].innerHTML.length === 0 &&
        colonne1[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne1[0]).contents().appendTo("#case9");
      } else if (
        colonne1[1].innerHTML.length === 0 &&
        colonne1[2].innerHTML.length >= 1 &&
        colonne1[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne1[0]).contents().appendTo("#case5");
      }
    }
    //--------------------------------------------------------------------------
    if (colonne2[2].innerHTML.length >= 1) {
      if (colonne2[3].innerHTML.length === 0) {
        h++;
        $(colonne2[2]).contents().appendTo("#case14");
      }
    }
    if (colonne2[1].innerHTML.length >= 1) {
      if (
        colonne2[2].innerHTML.length === 0 &&
        colonne2[3].innerHTML.length === 0
      ) {
        h++;
        $(colonne2[1]).contents().appendTo("#case14");
      } else if (
        colonne2[2].innerHTML.length === 0 &&
        colonne2[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne2[1]).contents().appendTo("#case10");
      }
    }
    if (colonne2[0].innerHTML.length >= 1) {
      if (
        colonne2[1].innerHTML.length === 0 &&
        colonne2[2].innerHTML.length === 0 &&
        colonne2[3].innerHTML.length === 0
      ) {
        h++;
        $(colonne2[0]).contents().appendTo("#case14");
      } else if (
        colonne2[1].innerHTML.length === 0 &&
        colonne2[2].innerHTML.length === 0 &&
        colonne2[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne2[0]).contents().appendTo("#case10");
      } else if (
        colonne2[1].innerHTML.length === 0 &&
        colonne2[2].innerHTML.length >= 1 &&
        colonne2[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne2[0]).contents().appendTo("#case6");
      }
    }

    if (colonne2[3].innerHTML === colonne2[2].innerHTML) {
      let f40 = colonne2[3].innerHTML * 2;
      if (f40 === 0) {
      } else {
        colonne2[3].innerHTML = f40;
        score += f40;
        colonne2[2].style.removeProperty("background");
        colonne2[2].style.removeProperty("fontSize");
        $(colonne2[2]).empty();
        h++;
      }
    }

    if (
      colonne2[1].innerHTML === colonne2[2].innerHTML &&
      colonne2[2].innerHTML !== colonne2[3].innerHTML
    ) {
      let f41 = colonne2[1].innerHTML * 2;
      if (f41 === 0) {
      } else {
        colonne2[2].innerHTML = f41;
        score += f41;
        colonne2[1].style.removeProperty("background");
        colonne2[1].style.removeProperty("fontSize");
        $(colonne2[1]).empty();
        h++;
      }
    }

    if (
      colonne2[0].innerHTML === colonne2[1].innerHTML &&
      colonne2[1].innerHTML !== colonne2[2].innerHTML
    ) {
      let f42 = colonne2[1].innerHTML * 2;
      if (f42 === 0) {
      } else {
        colonne2[1].innerHTML = f42;
        score += f42;
        colonne2[0].style.removeProperty("background");
        colonne2[0].style.removeProperty("fontSize");
        $(colonne2[0]).empty();
        h++;
      }
    }

    if (colonne2[2].innerHTML.length >= 1) {
      if (colonne2[3].innerHTML.length === 0) {
        h++;
        $(colonne2[2]).contents().appendTo("#case14");
      }
    }
    if (colonne2[1].innerHTML.length >= 1) {
      if (
        colonne2[2].innerHTML.length === 0 &&
        colonne2[3].innerHTML.length === 0
      ) {
        h++;
        $(colonne2[1]).contents().appendTo("#case14");
      } else if (
        colonne2[2].innerHTML.length === 0 &&
        colonne2[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne2[1]).contents().appendTo("#case10");
      }
    }
    if (colonne2[0].innerHTML.length >= 1) {
      if (
        colonne2[1].innerHTML.length === 0 &&
        colonne2[2].innerHTML.length === 0 &&
        colonne2[3].innerHTML.length === 0
      ) {
        h++;
        $(colonne2[0]).contents().appendTo("#case14");
      } else if (
        colonne2[1].innerHTML.length === 0 &&
        colonne2[2].innerHTML.length === 0 &&
        colonne2[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne2[0]).contents().appendTo("#case10");
      } else if (
        colonne2[1].innerHTML.length === 0 &&
        colonne2[2].innerHTML.length >= 1 &&
        colonne2[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne2[0]).contents().appendTo("#case6");
      }
    }
    //---------------------------------------------------------------------------------------
    if (colonne3[2].innerHTML.length >= 1) {
      if (colonne3[3].innerHTML.length === 0) {
        h++;
        $(colonne3[2]).contents().appendTo("#case15");
      }
    }
    if (colonne3[1].innerHTML.length >= 1) {
      if (
        colonne3[2].innerHTML.length === 0 &&
        colonne3[3].innerHTML.length === 0
      ) {
        h++;
        $(colonne3[1]).contents().appendTo("#case15");
      } else if (
        colonne3[2].innerHTML.length === 0 &&
        colonne3[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne3[1]).contents().appendTo("#case11");
      }
    }
    if (colonne3[0].innerHTML.length >= 1) {
      if (
        colonne3[1].innerHTML.length === 0 &&
        colonne3[2].innerHTML.length === 0 &&
        colonne3[3].innerHTML.length === 0
      ) {
        h++;
        $(colonne3[0]).contents().appendTo("#case15");
      } else if (
        colonne3[1].innerHTML.length === 0 &&
        colonne3[2].innerHTML.length === 0 &&
        colonne3[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne3[0]).contents().appendTo("#case11");
      } else if (
        colonne3[1].innerHTML.length === 0 &&
        colonne3[2].innerHTML.length >= 1 &&
        colonne3[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne3[0]).contents().appendTo("#case7");
      }
    }

    if (colonne3[3].innerHTML === colonne3[2].innerHTML) {
      let f43 = colonne3[3].innerHTML * 2;
      if (f43 === 0) {
      } else {
        colonne3[3].innerHTML = f43;
        score += f43;
        colonne3[2].style.removeProperty("background");
        colonne3[2].style.removeProperty("fontSize");
        $(colonne3[2]).empty();
        h++;
      }
    }

    if (
      colonne3[1].innerHTML === colonne3[2].innerHTML &&
      colonne3[2].innerHTML !== colonne3[3].innerHTML
    ) {
      let f44 = colonne3[1].innerHTML * 2;
      if (f44 === 0) {
      } else {
        colonne3[2].innerHTML = f44;
        score += f44;
        colonne3[1].style.removeProperty("background");
        colonne3[1].style.removeProperty("fontSize");
        $(colonne3[1]).empty();
        h++;
      }
    }

    if (
      colonne3[0].innerHTML === colonne3[1].innerHTML &&
      colonne3[1].innerHTML !== colonne3[2].innerHTML
    ) {
      let f45 = colonne3[1].innerHTML * 2;
      if (f45 === 0) {
      } else {
        colonne3[1].innerHTML = f45;
        score += f45;
        colonne3[0].style.removeProperty("background");
        colonne3[0].style.removeProperty("fontSize");
        $(colonne3[0]).empty();
        h++;
      }
    }

    if (colonne3[2].innerHTML.length >= 1) {
      if (colonne3[3].innerHTML.length === 0) {
        h++;
        $(colonne3[2]).contents().appendTo("#case15");
      }
    }
    if (colonne3[1].innerHTML.length >= 1) {
      if (
        colonne3[2].innerHTML.length === 0 &&
        colonne3[3].innerHTML.length === 0
      ) {
        h++;
        $(colonne3[1]).contents().appendTo("#case15");
      } else if (
        colonne3[2].innerHTML.length === 0 &&
        colonne3[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne3[1]).contents().appendTo("#case11");
      }
    }
    if (colonne3[0].innerHTML.length >= 1) {
      if (
        colonne3[1].innerHTML.length === 0 &&
        colonne3[2].innerHTML.length === 0 &&
        colonne3[3].innerHTML.length === 0
      ) {
        h++;
        $(colonne3[0]).contents().appendTo("#case15");
      } else if (
        colonne3[1].innerHTML.length === 0 &&
        colonne3[2].innerHTML.length === 0 &&
        colonne3[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne3[0]).contents().appendTo("#case11");
      } else if (
        colonne3[1].innerHTML.length === 0 &&
        colonne3[2].innerHTML.length >= 1 &&
        colonne3[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne3[0]).contents().appendTo("#case7");
      }
    }
    //---------------------------------------------------------------------------------------
    if (colonne4[2].innerHTML.length >= 1) {
      if (colonne4[3].innerHTML.length === 0) {
        h++;
        $(colonne4[2]).contents().appendTo("#case16");
      }
    }
    if (colonne4[1].innerHTML.length >= 1) {
      if (
        colonne4[2].innerHTML.length === 0 &&
        colonne4[3].innerHTML.length === 0
      ) {
        h++;
        $(colonne4[1]).contents().appendTo("#case16");
      } else if (
        colonne4[2].innerHTML.length === 0 &&
        colonne4[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne4[1]).contents().appendTo("#case12");
      }
    }
    if (colonne4[0].innerHTML.length >= 1) {
      if (
        colonne4[1].innerHTML.length === 0 &&
        colonne4[2].innerHTML.length === 0 &&
        colonne4[3].innerHTML.length === 0
      ) {
        h++;
        $(colonne4[0]).contents().appendTo("#case16");
      } else if (
        colonne4[1].innerHTML.length === 0 &&
        colonne4[2].innerHTML.length === 0 &&
        colonne4[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne4[0]).contents().appendTo("#case12");
      } else if (
        colonne4[1].innerHTML.length === 0 &&
        colonne4[2].innerHTML.length >= 1 &&
        colonne4[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne4[0]).contents().appendTo("#case8");
      }
    }

    if (colonne4[3].innerHTML === colonne4[2].innerHTML) {
      let f46 = colonne4[3].innerHTML * 2;
      if (f46 === 0) {
      } else {
        colonne4[3].innerHTML = f46;
        score += f46;
        colonne4[2].style.removeProperty("background");
        colonne4[2].style.removeProperty("fontSize");
        $(colonne4[2]).empty();
        h++;
      }
    }

    if (
      colonne4[1].innerHTML === colonne4[2].innerHTML &&
      colonne4[2].innerHTML !== colonne4[3].innerHTML
    ) {
      let f47 = colonne4[1].innerHTML * 2;
      if (f47 === 0) {
      } else {
        colonne4[2].innerHTML = f47;
        score += f47;
        colonne4[1].style.removeProperty("background");
        colonne4[1].style.removeProperty("fontSize");
        $(colonne4[1]).empty();
        h++;
      }
    }

    if (
      colonne4[0].innerHTML === colonne4[1].innerHTML &&
      colonne4[1].innerHTML !== colonne4[2].innerHTML
    ) {
      let f48 = colonne4[1].innerHTML * 2;
      if (f48 === 0) {
      } else {
        colonne4[1].innerHTML = f48;
        score += f48;
        colonne4[0].style.removeProperty("background");
        colonne4[0].style.removeProperty("fontSize");
        $(colonne4[0]).empty();
        h++;
      }
    }

    if (colonne4[2].innerHTML.length >= 1) {
      if (colonne4[3].innerHTML.length === 0) {
        h++;
        $(colonne4[2]).contents().appendTo("#case16");
      }
    }
    if (colonne4[1].innerHTML.length >= 1) {
      if (
        colonne4[2].innerHTML.length === 0 &&
        colonne4[3].innerHTML.length === 0
      ) {
        h++;
        $(colonne4[1]).contents().appendTo("#case16");
      } else if (
        colonne4[2].innerHTML.length === 0 &&
        colonne4[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne4[1]).contents().appendTo("#case12");
      }
    }
    if (colonne4[0].innerHTML.length >= 1) {
      if (
        colonne4[1].innerHTML.length === 0 &&
        colonne4[2].innerHTML.length === 0 &&
        colonne4[3].innerHTML.length === 0
      ) {
        h++;
        $(colonne4[0]).contents().appendTo("#case16");
      } else if (
        colonne4[1].innerHTML.length === 0 &&
        colonne4[2].innerHTML.length === 0 &&
        colonne4[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne4[0]).contents().appendTo("#case12");
      } else if (
        colonne4[1].innerHTML.length === 0 &&
        colonne4[2].innerHTML.length >= 1 &&
        colonne4[3].innerHTML.length >= 1
      ) {
        h++;
        $(colonne4[0]).contents().appendTo("#case8");
      }
    }
  }

  //Spawn des chiffres & score---------------------------------------------------------------------------------------
  if (
    event.code == "ArrowUp" ||
    event.code == "ArrowDown" ||
    event.code == "ArrowLeft" ||
    event.code == "ArrowRight"
  ) {
    if (h >= 1) {
      let random22 = Math.floor(Math.random() * tableau.length);
      var randomnew = Math.floor(Math.random() * (5 - 2) + 2);
      if (randomnew === 3) {
        var randomnew = 2;
      }
      if (
        tableau[0].innerHTML.length >= 1 &&
        tableau[1].innerHTML.length >= 1 &&
        tableau[2].innerHTML.length >= 1 &&
        tableau[3].innerHTML.length >= 1 &&
        tableau[4].innerHTML.length >= 1 &&
        tableau[5].innerHTML.length >= 1 &&
        tableau[6].innerHTML.length >= 1 &&
        tableau[7].innerHTML.length >= 1 &&
        tableau[8].innerHTML.length >= 1 &&
        tableau[9].innerHTML.length >= 1 &&
        tableau[10].innerHTML.length >= 1 &&
        tableau[11].innerHTML.length >= 1 &&
        tableau[12].innerHTML.length >= 1 &&
        tableau[13].innerHTML.length >= 1 &&
        tableau[14].innerHTML.length >= 1 &&
        tableau[15].innerHTML.length >= 1
      ) {
        return false;
      }

      while (tableau[random22].innerHTML.length !== 0) {
        random22 = Math.floor(Math.random() * tableau.length);
        if ((tableau[random22].length = 0)) {
          break;
        }
      }
      tableau[random22].innerHTML = randomnew;
    }
    scorec.innerHTML = `score : ${score}`;
    tableau.forEach((e) => {
      if (e.innerHTML.length === 0) {
        e.style.removeProperty("background");
        e.style.removeProperty("fontSize");
      }
    });
  }

  if (
    case1.innerHTML.length >= 1 &&
    case2.innerHTML.length >= 1 &&
    case3.innerHTML.length >= 1 &&
    case4.innerHTML.length >= 1 &&
    case5.innerHTML.length >= 1 &&
    case6.innerHTML.length >= 1 &&
    case7.innerHTML.length >= 1 &&
    case8.innerHTML.length >= 1 &&
    case9.innerHTML.length >= 1 &&
    case10.innerHTML.length >= 1 &&
    case11.innerHTML.length >= 1 &&
    case12.innerHTML.length >= 1 &&
    case13.innerHTML.length >= 1 &&
    case14.innerHTML.length >= 1 &&
    case15.innerHTML.length >= 1 &&
    case16.innerHTML.length >= 1 &&
    case1.innerHTML != case2.innerHTML &&
    case1.innerHTML != case5.innerHTML &&
    case2.innerHTML != case3.innerHTML &&
    case2.innerHTML != case6.innerHTML &&
    case3.innerHTML != case4.innerHTML &&
    case3.innerHTML != case7.innerHTML &&
    case4.innerHTML != case8.innerHTML &&
    case5.innerHTML != case6.innerHTML &&
    case5.innerHTML != case9.innerHTML &&
    case6.innerHTML != case7.innerHTML &&
    case6.innerHTML != case10.innerHTML &&
    case7.innerHTML != case8.innerHTML &&
    case7.innerHTML != case11.innerHTML &&
    case8.innerHTML != case12.innerHTML &&
    case9.innerHTML != case10.innerHTML &&
    case9.innerHTML != case13.innerHTML &&
    case10.innerHTML != case11.innerHTML &&
    case10.innerHTML != case14.innerHTML &&
    case11.innerHTML != case12.innerHTML &&
    case11.innerHTML != case15.innerHTML &&
    case12.innerHTML != case16.innerHTML &&
    case13.innerHTML != case14.innerHTML &&
    case14.innerHTML != case15.innerHTML &&
    case15.innerHTML != case16.innerHTML
  ) {
    loose.classList.add("gameovervisible");
    console.log("looser");
  }
  h *= 0;
});
// Style a chaque Keydown---------------------------------------------------------
document.addEventListener("keydown", function (event) {
  tableau.forEach((e) => {
    if (e.innerHTML == 2) {
      e.style.background = "#FFFDDE";
    }
    if (e.innerHTML == 4) {
      e.style.background = "#E8E1BE";
    }
    if (e.innerHTML == 8) {
      e.style.background = "#E7FBBE";
    }
    if (e.innerHTML == 16) {
      e.style.background = "#F5E196";
    }
    if (e.innerHTML == 32) {
      e.style.background = "#F5E16E";
    }
    if (e.innerHTML == 64) {
      e.style.background = "#FFABA0";
    }
    if (e.innerHTML == 128) {
      e.style.background = "#FF8178";
    }
    if (e.innerHTML == 256) {
      e.style.background = "#FF675D";
    }
    if (e.innerHTML == 512) {
      e.style.background = "#D9D7F1";
    }
    if (e.innerHTML == 1024) {
      e.style.background = "#E49BF5";
      e.style.fontSize = "45px";
    }
    if (e.innerHTML == 2048) {
      e.style.background = "#D96DF1";
      e.style.fontSize = "45px";
    }
    if (e.innerHTML == 4096) {
      e.style.background = "#F5ED12";
      e.style.fontSize = "45px";
    }
  });

  tableau.forEach((e) => {
    if (e.innerHTML == 2048 && z < 2) {
      win.classList.add("gagnervisible");
      z++;
    }
  });
  tableau.forEach((e) => {
    if (e.innerHTML == 4096 && p < 2) {
      window.alert("Bravo : Joris (le jeune biensur)");
      p++;
    }
  });
  event.preventDefault();
});
//---------------------------------------------------------------------------------

// Style en fonction du chiffre-nombre---------------------------------------------

tableau.forEach((e) => {
  if (e.innerHTML == 2) {
    e.style.background = "#FFFDDE";
  }
  if (e.innerHTML == 4) {
    e.style.background = "#E8E1BE";
  }
  if (e.innerHTML == 8) {
    e.style.background = "#E7FBBE";
  }
  if (e.innerHTML == 16) {
    e.style.background = "#F5E196";
  }
  if (e.innerHTML == 32) {
    e.style.background = "#F5E16E";
  }
  if (e.innerHTML == 64) {
    e.style.background = "#FFABA0";
  }
  if (e.innerHTML == 128) {
    e.style.background = "#FF8178";
  }
  if (e.innerHTML == 256) {
    e.style.background = "#FF675D";
  }
  if (e.innerHTML == 512) {
    e.style.background = "#D9D7F1";
  }
  if (e.innerHTML == 1024) {
    e.style.background = "#E49BF5";
    e.style.fontSize = "45px";
  }
  if (e.innerHTML == 2048) {
    e.style.background = "#D96DF1";
    e.style.fontSize = "45px";
  }
  if (e.innerHTML == 4096) {
    e.style.background = "#F5ED12";
    e.style.fontSize = "45px";
  }
});
