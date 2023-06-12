function contadorLikes(botaoId, contadorId, numInicial) {
  const botao = document.getElementById(botaoId);
  const contador = document.getElementById(contadorId);

  let conta = numInicial;

  botao.addEventListener('click', () => {
      conta++;
      contador.innerText = conta;
  })
}

contadorLikes("likeFortaleza", "contagemFortaleza", 900)
contadorLikes("likeOutsider", "contagemOutsider", 300)
contadorLikes('likeInterestelar', 'contagemInterestelar', 2500);
contadorLikes("likeHipotese", "contagemHipotese", 1000)
contadorLikes("likeConto", "contagemConto", 800)
contadorLikes("likeBusca", "contagemBusca", 500)