let lien = new URLSearchParams(location.search);
let page = lien.get('page');

/* Affichage du titre et des infos principales */

document.querySelector(".titre").innerHTML += page;
document.querySelector(".sae").innerHTML += SAE[page]["description"];
document.querySelector(".competence").innerHTML += "<h2>Compétence</h2> " + SAE[page]["compétences"]



/* AC */

let AC = Object.keys(SAE[page]["AC"])
let ac = "<div><h2>AC</h2></div>"

AC.forEach(function (element) {
    ac += '<div class= "AC">' + element + ' : ' + SAE[page]["AC"][element] + '</div>'
})

document.querySelector(".pageAC").innerHTML += ac

/* Bouton Pdf justificatif des AC */
document.querySelector(".boutonPdf").innerHTML = "<a href='../pdf/" + page + ".pdf' target= '_blank'> <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='#FFFFFF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z'/><path d='M14 3v5h5M16 13H8M16 17H8M10 9H8'/></svg> <div> Voir le pdf </div>"



/* Ressources */

let ressources = Object.keys(SAE[page]["ressources"])
let listeressource = "<div><h2>Ressources</h2></div>"

ressources.forEach(function (element) {
    listeressource += '<div class= "ressource">' + element + ' : ' + SAE[page]["ressources"][element] + '</div>'
})

document.querySelector(".pageressource").innerHTML += listeressource

/* Semestre  */
document.querySelector(".semestre").innerHTML += "<h2>Semestre " + SAE[page]["semestre"] + "</h2>";
