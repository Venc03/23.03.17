window.addEventListener("load", main);
let lista = [
  { nev: "Dani",
    tul1: "balfek",
    tul2: "kitarto"
},

  { nev: "Dominik",
    tul1: "profi",
    tul2: "gyors"    
},

  { nev: "mustang",
    tul1: "gyors",
    tul2: "faszan nez ki"    
}
];



function main() {
  let txt = textKiir();
  const ARTICLE = $("article");
  ARTICLE.html(txt);
}



function textKiir(){
  let txt = ""
    txt += `<table>`
    for (let i = 0; i < lista.length + 1; i++) {
        txt += `<tr>
            <td>${lista[i].nev}</td>
            <td>${lista[i].tul1}</td>
            <td>${lista[i].tul2}</td>
        </tr>`
    }
    txt += `</table>`;
  return txt;
}


