// lancerJeu()

// Methode getElementById
let inputSaisieTexte = document.getElementById("inputEcriture");
let btnValider = document.getElementById("btnValiderMot");
console.log("c'est l'endroit où je vais saisir mon texte : ", inputSaisieTexte);
console.log("c'est le bouton pour valider : ",btnValider);

// Methode querySelector
let motAfficher = document.querySelector(".zoneProposition");
let score = document.querySelector(".zoneScore span")
console.log("c'est l'endroit ou les mots vont être affiché : ", motAfficher);
console.log("c'est le score : ", score);

// Methode querySelectorAll
let btnRadioChoice = document.querySelectorAll("input[type='radio']")
console.log("c'est les boutons radio : ", btnRadioChoice);

