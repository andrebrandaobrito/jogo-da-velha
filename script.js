let a1 = '';
let a2 = '';
let a3 = '';

let b1 = '';
let b2 = '';
let b3 = '';

let c1 = '';
let c2 = '';
let c3 = '';

/*
alert(`
  Seja bem-vinde ao jogo da velha!
  Marque as coordenadas com x e o conforme as instruções!
`);
*/

iniciarJogo();

function iniciarJogo() {
  // 1 jogada
  marcaPosicao('o');
  mostraTabuleiro();

  // 2 jogada
  marcaPosicao('x');
  mostraTabuleiro();

  // 3 jogada
  marcaPosicao('o');
  mostraTabuleiro();

  // 4 jogada
  marcaPosicao('x');
  mostraTabuleiro();

  // 5 jogada
  marcaPosicao('o');
  mostraTabuleiro();

  if(bolinhaVenceu()) {
    alert('O jogador "o" venceu!');
    return;
  }

  // 6 jogada
  marcaPosicao('x');
  mostraTabuleiro();

  if(xisVenceu()) {
    alert('O jogador "x" venceu!');
    return;
  }

  // 7 jogada
  marcaPosicao('o');
  mostraTabuleiro();

  if(bolinhaVenceu()) {
    alert('O jogador "o" venceu!');
    return;
  }

  // 8 jogada
  marcaPosicao('x');
  mostraTabuleiro();

  if(xisVenceu()) {
    alert('O jogador "x" venceu!');
    return;
  }

  // 9 jogada
  marcaPosicao('o');
  mostraTabuleiro();

  if(bolinhaVenceu()) {
    alert('O jogador "o" venceu!');
    return;
  }
}

function marcaPosicao(marcador) {
  const tabuleiro = pegaTabuleiro();

  const coluna = prompt(`
    Digite a coluna (a, b, c) para marcar com ${marcador}!
    ${tabuleiro}
  `);
  
  const linha = prompt(`
    Digite a linha (1, 2, 3) para marcar com ${marcador}!
    ${tabuleiro}
  `);

  if (linha === '1') {
    switch (coluna) {
      case 'a':
        a1 = marcador;
        break;
      case 'b':
        b1 = marcador;
        break;
      case 'c':
        c1 = marcador;
        break;
    }
  } else if (linha === '2') {
    switch (coluna) {
      case 'a':
        a2 = marcador;
        break;
      case 'b':
        b2 = marcador;
        break;
      case 'c':
        c2 = marcador;
        break;
    }
  } else if (linha === '3') {
    switch (coluna) {
      case 'a':
        a3 = marcador;
        break;
      case 'b':
        b3 = marcador;
        break;
      case 'c':
        c3 = marcador;
        break;
    }
  }
}

function mostraTabuleiro() {
  const tabuleiro = pegaTabuleiro();
  alert(tabuleiro);
}

function pegaTabuleiro() {
  const tabuleiro = `
       a   b   c
    1 [ ${a1} ] [ ${b1} ] [ ${c1} ]
    2 [ ${a2} ] [ ${b2} ] [ ${c2} ]
    3 [ ${a3} ] [ ${b3} ] [ ${c3} ]  
  `

  return tabuleiro;
}

function bolinhaVenceu() {
  if(a1 === 'o' && b1 === 'o' && c1 === 'o') {
    return true;
  } else if(a2 === 'o' && b2 === 'o' && c2 === 'o') {
    return true;
  } else if(a3 === 'o' && b3 === 'o' && c3 === 'o') {
    return true;
  } else if(a1 === 'o' && a2 === 'o' && a3 === 'o') {
    return true;
  } else if(b1 === 'o' && b2 === 'o' && b3 === 'o') {
    return true;
  } else if(c1 === 'o' && c2 === 'o' && c3 === 'o') {
    return true;
  } else if(a1 === 'o' && b2 === 'o' && c3 === 'o') {
    return true;
  } else if(c1 === 'o' && b2 === 'o' && a3 === 'o') {
    return true;
  } else {
    return false;
  }
}

function xisVenceu() {
  if(a1 === 'x' && b1 === 'x' && c1 === 'x') {
    return true;
  } else if(a2 === 'x' && b2 === 'x' && c2 === 'x') {
    return true;
  } else if(a3 === 'x' && b3 === 'x' && c3 === 'x') {
    return true;
  } else if(a1 === 'x' && a2 === 'x' && a3 === 'x') {
    return true;
  } else if(b1 === 'x' && b2 === 'x' && b3 === 'x') {
    return true;
  } else if(c1 === 'x' && c2 === 'x' && c3 === 'x') {
    return true;
  } else if(a1 === 'x' && b2 === 'x' && c3 === 'x') {
    return true;
  } else if(c1 === 'x' && b2 === 'x' && a3 === 'x') {
    return true;
  } else {
    return false;
  }
}
