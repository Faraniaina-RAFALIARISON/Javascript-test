 export default class SudokuCase {
    constructor() {
        this.estValeurInitiale = false
        this.initialiserValeurs()
    }

    initialiserValeurs() {
        this.valeursPossible = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

    definirValeurInitiale(valeur) {
        this.valeur = valeur
        this.estValeurInitiale = true
    }

    prochaineValeur() {
        // Récuperer la première valeur du tableau 
        this.valeur = this.valeursPossible.shift()

        // Retourner cette valeur
        return this.valeur
    }
}