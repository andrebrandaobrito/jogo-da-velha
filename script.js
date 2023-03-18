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
  marcaPosicao('o');
  mostraTabuleiro();
}

function marcaPosicao(marcador) {
  const tabuleiro = pegaTabuleiro();
  const coluna = prompt(`
    Digite a coluna (a, b, c) para marcar com ${marcador}!
    ${tabuleiro}
  `)
  const linha = prompt(`
    Digite a linha (1, 2, 3) para marcar com ${marcador}!
    ${tabuleiro}
  `);

  if (linha === '1') {
    switch(coluna) {
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
    switch(coluna) {
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
    switch(coluna) {
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
