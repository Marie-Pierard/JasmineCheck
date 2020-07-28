
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1 + texte2;
}
let afficherCar5 =  (texte) => {//https://www.w3schools.com/jsref/jsref_substr.asp
    return texte.substr(4, 1); 
}
let afficher9Car =  (texte) => {
    return texte.substr(0, 9);
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {//https://www.w3schools.com/jsref/jsref_trim_string.asp
    return texte.trim();
}
let IsString =  (texte) => {//https://www.w3schools.com/js/tryit.asp?filename=tryjs_typeof_all
    return typeof texte === "string";
}

let AfficherExtensionString =  (texte) => {
    return texte.slice(texte.lastIndexOf('.') + 1)
}
let NombreEspaceString =  (texte) => {
    return texte.split(' ').length - 1;
}
let InverseString =  (texte) => {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/pow
    return Math.pow (x, y);
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = valeurAbsolue(array[i]);
        }
    return array
}
let sufaceCercle =  (rayon) => {//http://java.mesexemples.com/collections/java-source-calculer-la-surface-dun-cercle/
    return Math.round(Math.PI * (rayon * rayon));
}
let hypothenuse =  (ab, ac) => {//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/sqrt
    return Math.sqrt(ab * ab + ac * ac);
}
let calculIMC =  (poids, taille) => {//https://stackoverflow.com/questions/41259253/how-to-round-down-number-2-decimal-places
    return Math.floor((poids / (taille * taille)) * 100) / 100;
}
