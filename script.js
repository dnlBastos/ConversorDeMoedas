function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumérico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumérico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Real é R$" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}