let CreationTableauLangages =  () => {
    return ["Html", "CSS", "Java", "PHP"]
}

let CreationTableauNombres =  () => {
    return [0, 1, 2, 3, 4, 5];
}

let RemplacementElement =  (langages) => {//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice
    langages.splice(2, 1, "Javascript");
    return langages;
}

let AjoutElementLangages =  (langages) => {
    langages.push('Ruby', 'Python');
    return langages;
}

let AjoutElementNombres =  (nombres) => {//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/unshift
    nombres.unshift(-2, -1);
    return nombres;
}

let SuppressionPremierElement =  (langages) => {//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/shift
    langages.shift();
    return langages;
}

let SuppressionDernierElement =  (langages) => {
    langages.pop();
    return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split
    return reseaux_sociaux_chaine.split(',');
}

let ConversionTableauChaine =  (langages) => {//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray/join
    return langages.join(',');
}

let TriTableau =  (reseaux_sociaux) => {//https://www.w3schools.com/jsref/jsref_sort.asp
    return reseaux_sociaux.sort();
    
}

let InversionTableau =  (reseaux_sociaux) =>{//https://www.w3schools.com/jsref/jsref_reverse.asp
    return reseaux_sociaux.reverse();
}
