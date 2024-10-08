function calcularIMC() {
    var nome = document.getElementById('nome').value;
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    
    if (peso > 0 && altura > 0) {
        var imc = peso / (altura * altura);
        document.getElementById('resultado').innerText = nome + ", seu IMC é " + imc.toFixed(2);
    } else {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
    }
}
