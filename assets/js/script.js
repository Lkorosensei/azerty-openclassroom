// function choisirPhrasesOuMots() {
//     let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
//     while (choix !== "mots" && choix !== "phrases") {
//         choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
//     }
//     return choix
// }

// function lancerBoucleDeJeu(listeProposition) {
//     let score = 0
//     for (let i = 0; i < listeProposition.length; i++) {
//         let motUtilisateur = prompt("Entrez : " + listeProposition[i])
//         if (motUtilisateur === listeProposition[i]) {
//             score++
//         }
//     }
//     return score
// }



function afficherResultat(score, NbrTotalMotsPropose) {
    scoreAffichage = document.querySelector(".zoneScore span")
    scoreAffichage.innerText = `${score} / ${NbrTotalMotsPropose}`
    console.log("Votre score est de " + score + " sur " + NbrTotalMotsPropose)
}


function afficherProposition(proposition) {
    let zoneProposition = document.querySelector(".zoneProposition");
    zoneProposition.innerText = proposition;
}


function lancerJeu() {
    // Initialisation
    let score = 0
    let i = 0;

    let boutonValider = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");
    let scoreAffichage = document.getElementById(".zoneScore span")

    afficherProposition(listeMots[i]);
    boutonValider.addEventListener("click", () => {
        if (inputEcriture.value === listeMots[i]) {
            score++;
        }
        i++;
        afficherResultat(score, i)
        console.log("compteur : ",i);
        console.log("J'ai cliqué !");
        console.log("inputEcriture ", inputEcriture.value);

        inputEcriture.value = "";
        if (listeMots[i] === undefined) {
            afficherProposition("Le jeu esr fini !");
            boutonValider.disabled = true
        } else {
        afficherProposition(listeMots[i]);
        }       
    })
    afficherResultat(score, i)
}


// /*********************************************************************************
//  * 
//  * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
//  * 
//  *********************************************************************************/

// /**
//  * Cette fonction affiche dans la console le score de l'utilisateur
//  * @param {number} score : le score de l'utilisateur
//  * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
//  */
// function afficherResultat(score, nbMotsProposes) {
//     console.log("Votre score est de " + score + " sur " + nbMotsProposes)
// }

// /**
//  * Cette fonction demande à l'utilisateur de choisir entre "mots" et "phrases" et retourne le choix de l'utilisateur
//  * @return {string} : le choix de l'utilisateur, ce choix est nécessairement "mots" ou "phrases
//  */
// function choisirPhrasesOuMots() {
//     // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
//     let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
//     while (choix !== "mots" && choix !== "phrases") {
//         choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
//     }
//     return choix
// }

// /**
//  * Cette fonction lance la boucle de jeu, c'est à dire qu'elle demande à l'utilisateur de saisir tous les mots
//  * contenus dans le tableau listePropositions. A chaque mot saisi, on incrémente le score de l'utilisateur
//  * 
//  * @param {array[string]} listePropositions 
//  * @return {number} : le score de l'utilisateur
//  */
// function lancerBoucleDeJeu(listePropositions) {
//     let score = 0
//     for (let i = 0; i < listePropositions.length; i++) {
//         // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
//         let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
//         if (motUtilisateur === listePropositions[i]) {
//             // Si le mot saisi par l'utilisateur est correct, on incrémente le score
//             score++
//         }
//     }
//     return score
// }

// /**
//  * Cette fonction lance le jeu. 
//  * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
//  */
// function lancerJeu() {
//     // Initialisations
//     let choix = choisirPhrasesOuMots()
//     let score = 0
//     let nbMotsProposes = 0

//     // On détermine la liste des mots ou des phrases à proposer à l'utilisateur
//     if (choix === "mots") {
//         score = lancerBoucleDeJeu(listeMots)
//         nbMotsProposes = listeMots.length
//     } else {
//         score = lancerBoucleDeJeu(listePhrases)
//         nbMotsProposes = listePhrases.length
//     }

//     afficherResultat(score, nbMotsProposes)
// }