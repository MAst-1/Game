var carta1 = {
  imagem: "https://i1.sndcdn.com/avatars-C8u9Y3lnYo0OQ6Ge-4wkUeA-t240x240.jpg",
  nome: "Harry Potter",
  atributos: {
    ataque: 9,
    defesa: 10,
    magia: 9
  }
};

var carta2 = {
  imagem:
    "http://pm1.narvii.com/6512/ea7c0e4df0371ad9933eb962effa84f0a61b9210_00.jpg",
  nome: "Lord Voldemort",
  atributos: {
    ataque: 10,
    defesa: 8,
    magia: 8
  }
};

var carta3 = {
  imagem:
    "https://i.pinimg.com/originals/bf/84/be/bf84be0f87e866cfb3cca625b261af12.jpg",
  nome: "Ron Weasley",
  atributos: {
    ataque: 8,
    defesa: 9,
    magia: 7
  }
};

var carta4 = {
  imagem:
    "https://criticalhits.com.br/wp-content/uploads/2021/05/image19_5cpr-910x607.jpg",
  nome: "Hermione Granger",
  atributos: {
    ataque: 7,
    defesa: 10,
    magia: 10
  }
};

var carta5 = {
  imagem:
    "https://rollingstone.uol.com.br/media/uploads/alan-rickman-harry-potter_reproducao_widelg_1.jpg",
  nome: "Severus Snape",
  atributos: {
    ataque: 9,
    defesa: 9,
    magia: 9
  }
};

var carta6 = {
  imagem:
    "https://i.pinimg.com/originals/f7/2e/e9/f72ee99bb6dd4a68efbfae3f1cae87be.jpg",
  nome: "Draco Malfoy",
  atributos: {
    ataque: 9,
    defesa: 7,
    magia: 7
  }
};

var carta7 = {
  imagem:
    "https://epipoca.com.br/wp-content/uploads/2021/11/Dobby-em-Harry-Potter-Reproducao-1200x900.jpg",
  nome: "Dobby",
  atributos: {
    ataque: 4,
    defesa: 7,
    magia: 8
  }
};

var carta8 = {
  imagem:
    "http://pm1.narvii.com/5802/c23d73d9e605c1d87cad68375caeaca202e64424_00.jpg",
  nome: "Albus Dumbledore",
  atributos: {
    ataque: 8,
    defesa: 10,
    magia: 10
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var botaoSortear = document.getElementById("btnSortear");
  var botaoJogar = document.getElementById("btnJogar");

  var numeroCartaMaquina = parseInt(Math.random() * 8.5);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 8.5);

  while (numeroCartaMaquina === numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 8.5);
  }

  cartaJogador = cartas[numeroCartaJogador];

  botaoSortear.disabled = true;
  botaoJogar.disabled = false;

  exibeCardJogador();
}

function exibeCardJogador() {
  var card = document.getElementById("opcoes");
  var cardTexto = "";

  cardTexto += `
    <div class="cartao">
      <img class="cartao__imagem" src="${cartaJogador.imagem}" alt="">
      <div class="cartao__info" id="cartao-info">
        <p>${cartaJogador.nome}</p>

      </div>
    </div>
  `;

  card.innerHTML = cardTexto;

  exibeOpcoes();
}

function exibeOpcoes() {
  var opcoes = document.getElementById("cartao-info");
  var opcoesTexto = `<p class="info__titulo">${cartaJogador.nome}</p>`;

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += `
      <div class="info__atributos">
        <label class="atributo">
          <input type="radio" name="atributo" value="${atributo}" checked> 
          ${atributo}
        </label>
        <p class="atributo__valor">${cartaJogador.atributos[atributo]}</p>
      </div>
    `;
  }

  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked === true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  var botaoJogarNovamente = document.getElementById("btnJogarNovamente");
  var botaoJogar = document.getElementById("btnJogar");

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = `O atributo selecionado foi ${atributoSelecionado}. Você venceu. Parabéns!`;
  } else if (valorCartaJogador === valorCartaMaquina) {
    elementoResultado.innerHTML = `O atributo selecionado foi ${atributoSelecionado}. Você empatou.`;
  } else {
    elementoResultado.innerHTML = `O atributo selecionado foi ${atributoSelecionado}. Você perdeu. Que pena!`;
  }

  botaoJogar.disabled = true;
  botaoJogarNovamente.disabled = false;

  exibeCardMaquina();
}

function exibeCardMaquina() {
  var card = document.getElementById("opcoes");
  var cardTexto = "";
  cardTexto += `<div class="cartao">
      <img class="cartao__imagem" src="${cartaJogador.imagem}" alt="">
      <div class="cartao__info cartao__info--novo" id="cartao-info">
        <p class="info__titulo">${cartaJogador.nome}</p>
        <div>
          <p>ATAQUE</p>
          <p>${cartaJogador.atributos["ataque"]}</p>
        </div>
        <div>
          <p>DEFESA</p>
          ${cartaJogador.atributos["defesa"]}
        </div>
        <div>
          <p>MAGIA</p>
          ${cartaJogador.atributos["magia"]}
        </div>
      </div>
    </div>
  `;

  cardTexto += `
    <div class="cartao">
      <img class="cartao__imagem" src="${cartaMaquina.imagem}" alt="">
      <div class="cartao__info cartao__info--novo" id="cartao-info">
        <p class="info__titulo">${cartaMaquina.nome}</p>
        <div>
          <p>ATAQUE</p>
          <p>${cartaMaquina.atributos["ataque"]}</p>
        </div>
        <div>
          <p>DEFESA</p>
          <p>${cartaMaquina.atributos["defesa"]}</p>
        </div>
        <div>
          <p>MAGIA</p>
          <p>${cartaMaquina.atributos["magia"]}</p>
        </div>
      </div>
    </div>
  `;

  card.innerHTML = cardTexto;
}

function reiniciar() {
  var botaoJogar = document.getElementById("btnJogar");
  var botaoSortear = document.getElementById("btnSortear");
  var botaoJogarNovamente = document.getElementById("btnJogarNovamente");
  var elementoResultado = document.getElementById("resultado");
  var card = document.getElementById("opcoes");

  cartaJogador = "";
  cartaMaquina = "";
  elementoResultado.innerHTML = "";
  card.innerHTML = "";

  botaoJogar.disabled = true;
  botaoSortear.disabled = false;
  botaoJogarNovamente.disabled = true;
}