function calculateAverage(numbers) {
    // Vérifie que numbers est défini et que c'est un tableau
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return "No numbers to calculate average";
    }

    // Calcul de la somme
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }

    // Retourne la moyenne
    return sum / numbers.length;
}

// Exemples d'utilisation
console.log(calculateAverage([5, 10, 15]));      // 10
console.log(calculateAverage([10, 20, 30, 20])); // 20
console.log(calculateAverage());                 // "No numbers to calculate average"
console.log(calculateAverage([]));               // "No numbers to calculate average"

export default calculateAverage;
