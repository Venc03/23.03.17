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
  let i;
  let txt = ""
  

    txt += `<table>`
    for (let index = 0; index < lista.length + 1; index++) {
        let listai = lista[i];
        txt += `<tr>
            <td>${listai.nev}</td>
            <td>${listai.tul1}</td>
            <td>${listai.tul2}</td>
        </tr>`
    }
    txt += `</table>`;
  return txt;
}


