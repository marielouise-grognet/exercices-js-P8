let currentInput = '' // variable pour stocker la saisie de l'utilisateur
const display = document.getElementById('display')

// fonction pour mettre à jour l'input html avec le contenu de currentInput
function updateDisplay() {
    display.value = currentInput
}

// fonction pour ajouter une valeur à l'affichage de l'input
function appendToDisplay(value) {
    const lastChar = currentInput.slice(-1) // avant son affichage... récupère la dernière valeur entrée 
    if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(lastChar)) return     // empêche la saisie consécutive de deux opérateurs identiques 
    currentInput += value // ajoute le chiffre ou l'opérateur 
    updateDisplay() // actualise l'affichage de l'input 
}

// fonction pour effacer l'affichage
function clearDisplay() {
    currentInput = ''
    updateDisplay()
}

// fonction pour calculer le résultat
function calculateResult() {
    try {
        // vérifie si l'utilisateur essaie de diviser par zéro
        if (/\/0(?!\d)/.test(currentInput)) {
            currentInput = "Division by zero is not allowed";
            updateDisplay();
            return;
        }

        const result = eval(currentInput) // fait le calcul et donne un résultat
        currentInput = result.toString() // convertit le résultat en chaine de caractère (pour pouvoir l'afficher ensuite...)
        updateDisplay()
    } catch {
        currentInput = "Expression invalide !"
        updateDisplay()
    }
}
