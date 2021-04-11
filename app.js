var primeiroValor = parseFloat(prompt("Digite o primeiro valor:"))

var segundoValor = parseFloat(prompt("Digite o segundo valor:"))

var opcao = prompt("Digite 1 para fazer uma soma; 2 para subtração; 3 para multiplicação e 4 para divisão.")

if(opcao == 1){
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if(opcao == 2){
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
} else if(opcao == 3){
  var resultado = primeiroValor*segundoValor
  document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
} else if(opcao == 4){
  var resultado = primeiroValor/segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
} else{
  document.write("<h2>Opção inválida!</h2>")
}