
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



// function afficherResultat(score, NbrTotalMotsPropose) {
//     console.log("Votre score est de " + score + " sur " + NbrTotalMotsPropose)
//     return
// }

// function lancerJeu() {
//     let choix = choisirPhrasesOuMots()
//     let score = 0
//     let NbrTotalMotsPropose = 0

//     if (choix === "mots") {
//         score = lancerBoucleDeJeu(listeMots)
//         NbrTotalMotsPropose = listeMots.length
//     } else {
//         score = lancerBoucleDeJeu(listePhrases)
//         NbrTotalMotsPropose = listePhrases.length
//     }

//     afficherResultat(score, NbrTotalMotsPropose)
// }

