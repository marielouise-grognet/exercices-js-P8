function convertToBinary() { // fonction qui sera exécutée quand on clique sur le bouton "Convertir" (fichier html)
        let input = document.getElementById("decimalInput") // récupère l'élément html qui contient le nombre décimal saisi par l'utilisateur
        let output = document.getElementById("binaryResult")  // récupère l'élément html  qui servira à afficher le résultat binaire
        let decimal = input.value // accède à la valeur de la variable input
        let binary = [] // crée un tavleau vide qui servira à stocker les restes successifs de la division par 2
        let result = "" // crée une chaine vide qui contiendra le nombre binaire final après conversion

        while (decimal > 0){ // tant que chiffre > 0
            binary.push(decimal % 2); // on prend le reste de la division par 2 grace à %
            decimal = Math.floor(decimal / 2); // on divise par 2 et on garde que la partie entière grace à math.floor qui arondit
        }

        for (let i = binary.length - 1; i >= 0; i--) {
            result += binary[i]
        }

        output.innerText = result;


    }