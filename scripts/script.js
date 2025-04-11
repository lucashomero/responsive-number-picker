function sortearNumeros(qtd, min, max) {
  const numeros = new Set();

  while (numeros.size < qtd) {
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;
    numeros.add(numero);
  }

  return Array.from(numeros);
}

// Função exibir Resultado
function exibirResultado(numeros) {
  const resultado = document.getElementById('result');
  resultado.textContent = `Números sorteados: ${numeros.join(', ')}`;
}

// Função iniciar Sorteio
function iniciarSorteio() {
  const qtd = parseInt(document.getElementById('numberCard1').value);
  const min = parseInt(document.getElementById('numberCard2').value);
  const max = parseInt(document.getElementById('numberCard3').value);

  if (isNaN(qtd) || isNaN(min) || isNaN(max) || min > max || qtd <= 0) {
    alert('Verifique os valores inseridos.');
    return;
  }

  const totalPossiveis = max - min + 1;
  if (qtd > totalPossiveis) {
    alert('Quantidade maior que o intervalo disponível.');
    return;
  }

  const numerosSorteados = sortearNumeros(qtd, min, max);
  exibirResultado(numerosSorteados);
}
