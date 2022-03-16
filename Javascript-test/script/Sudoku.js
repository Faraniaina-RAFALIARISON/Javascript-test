import SudokuCase from './SudokuCase.js'
import SudokuCurseur from './SudokuCurseur.js'

export default class Sudoku {
    constructor(grille) {
      this.grille = []
      this.evenements = new Map()
  
      // Parcourir toutes les lignes et toutes les colonnes
      for (let ligne = 0; ligne < 9; ligne++) {
        const grilleLigne = []
  
        for (let col = 0; col < 9; col++) {
          const valeur = grille[ligne][col]
          const cellule = new SudokuCase()
  
          // Si la case a une valeur
          if (valeur !== '') {
            // Indiquer le fait qu'elle puisse pas être modifié
            // Et définir la valeur
            cellule.definirValeurInitiale(valeur)
          }
    
          grilleLigne.push(cellule)
        }
  
        this.grille.push(grilleLigne)
      }
    }

    // Retourne Si OUI ou NON le sudoku est validé
    //càd q"'il ne comporte pas d'erreur
    estValide() {
        // Vérifer que y ait pas de doublons dans les lignes

    // Parcourir les lignes
    for (let ligne = 0; ligne < 9 ; ligne++) {
        const liste = new Set()

        // parcourir les éléments de la ligne
        for (let col = 0; col < 9; col++) {
            const sudukuCase = this.grille[ligne][col]
            const valeur = sudukuCase.valeur
            const anomalie = this.grille[ligne]
           // Tester si la valeur est vide
           // Si la valeur est vide, ne rien faire
           if (valeur == null) {

           } else {
            // Sinon
            const valeurExiste = liste.has(valeur)

             // Verifier que l'élément n'et pas dans la liste
            if (valeurExiste) {
                console.log('Erreur doublon' + ligne + '-' + col + ':' + valeur)
        
                return false
            } else {
                // Ajouter l'élément à une liste
                liste.add(valeur)
            }
             
        }

    }
}

    // Parcourir les colonnes
    for (let col = 0; col < 9 ; col++) {
        const liste = new Set()

        // parcourir les éléments de la ligne
        for (let ligne = 0; ligne < 9; ligne++) {
            const sudukuCase = this.grille[ligne][col]
            const valeur = sudukuCase.valeur
        
        // Tester si la valeur est vide
        // Si la valeur est vide, ne rien faire
        if (valeur == null) {

        } else {
            // Sinon
            const valeurExiste = liste.has(valeur)

            // Verifier que l'élément n'et pas dans la liste
            if (valeurExiste) {
                console.log('Erreur doublon' + ligne + '-' + col + ':' + valeur)
               return false
            } else {
                // Ajouter l'élément à une liste
                liste.add(valeur)
                }
            }
        }   
    }

    // Indices des carrés
    const carres = [
        [
            [0, 0], [0, 1], [0, 2],
            [1, 0], [1, 1], [1, 2],
            [2, 0], [2, 1], [2, 2],
        ],
        [
            [0, 3], [0, 4], [0, 5],
            [1, 3], [1, 4], [1, 5],
            [2, 3], [2, 4], [2, 5],
        ],
        [
            [0, 6], [0, 7], [0, 8],
            [1, 6], [1, 7], [1, 8],
            [2, 6], [2, 7], [2, 8],
        ],
        [
            [3, 0], [3, 1], [3, 2],
            [4, 0], [4, 1], [4, 2],
            [5, 0], [5, 1], [5, 2],
        ],
        [
            [3, 3], [3, 4], [3, 5],
            [4, 3], [4, 4], [4, 5],
            [5, 3], [5, 4], [5, 5],
        ],
        [
            [3, 6], [3, 7], [3, 8],
            [4, 6], [4, 7], [4, 8],
            [5, 6], [5, 7], [5, 8],
        ],
        [
            [6, 0], [6, 1], [6, 2],
            [7, 0], [7, 1], [7, 2],
            [8, 0], [8, 1], [8, 2],
        ],
        [
            [6, 3], [6, 4], [6, 5],
            [7, 3], [7, 4], [7, 5],
            [8, 3], [8, 4], [8, 5],
        ],
        [
            [6, 6], [6, 7], [6, 8],
            [7, 6], [7, 7], [7, 8],
            [8, 6], [8, 7], [8, 8],
        ],
    ]

    // Parcourir les carrés
    for (const carre of carres) {
        const liste = new Set()

        //Pour chaque caré
        for (const element of carre) {
            const ligne = element[0]
            const col = element[1]

            const sudukuCase = this.grille[ligne][col]
            const valeur = sudukuCase.valeur
            // Tester si la valeur est vide
           // Si la valeur est vide, ne rien faire
           if (valeur == null) {

        } else {
         // Sinon
         const valeurExiste = liste.has(valeur)

          // Verifier que l'élément n'est pas dans la liste
         if (valeurExiste) {
             console.log('Erreur doublon' + ligne + '-' + col + ':' + valeur)

             return false
        } else {
             // Ajouter l'élément à une liste
             liste.add(valeur)
            } 
        }
    }
    
    }
    
    return true

    }

    ajouterEvenement(nom, callback) {
        this.evenements.set(nom, callback)
    }
    
}



