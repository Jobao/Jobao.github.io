function Calcular(numero, numero2, operador) {

    let num1 = parseInt(numero);
    let num2 = parseInt(numero2);
    console.log(num1);
    console.log(num2);
    if(!Number.isNaN(num1) && !Number.isNaN(num2)){
        switch (operador) {
            case "0":
                document.getElementById("resultado").innerHTML = num1 + num2;
                break;
    
            case "1":
                document.getElementById("resultado").innerHTML = num1 - num2;
                break;
    
            case "2":
                document.getElementById("resultado").innerHTML = num1 * num2;
                break;
    
            case "3":
                document.getElementById("resultado").innerHTML = num1 / num2;
                break;
        
            default:
                alert("MMM");
                break;
        }

    }
    else{
        alert("Debe ingresar un numero valido");
    }

    
}