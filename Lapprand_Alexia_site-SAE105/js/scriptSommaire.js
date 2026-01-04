
/*tu récupères la liste des noms de toutes les SAE.*/
let nom_sae = Object.keys(SAE)

/*stocker le code HTML que tu vas générer dans la boucle*/
let sae = ""

console.log(nom_sae)

/*traiter chaque SAE une par une.*/

nom_sae.forEach(function (element) {

    /*carte HTML pour afficher la SAE.*/

    /* <a href="page_SAE.html?page=SAE101">  
    → le lien vers la page de détails, avec un paramètre page=SAE101
    <div class="element">  
    → un bloc visuel pour la SAE
    element  
    → le nom de la SAE (ex : "SAE101")
    <p> + SAE[element]["titre"]  
    → le titre de la SAE (ex : "Réaliser un site web")*/

    sae = '<a href = "detailSAE.html?page=' + element + '"><div class = "element">' + element + '<p>' + SAE[element]["titre"] + '</p>' + '</div>' + '</a>'

    /*Tu affiches chaque SAE dans la page.*/

    document.querySelector(".sae").innerHTML += sae

    console.log(element)
})
