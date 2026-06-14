// Lista de versículos
const listaVersiculos = [
  { texto: "O Senhor é o meu pastor, nada me faltará.", ref: "Salmos 23:1" },
  { texto: "Porque Deus tanto amou o mundo que deu o seu Filho Unigênito...", ref: "João 3:16" },
  { texto: "Tudo posso naquele que me fortalece.", ref: "Filipenses 4:13" },
  { texto: "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.", ref: "Provérbios 16:3" },
  { texto: "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore...", ref: "Josué 1:9" },
  { texto: "O próprio Senhor irá à sua frente e estará com você; ele nunca o deixará...", ref: "Deuteronômio 31:8" },
  { texto: "Lâmpada para os meus pés é tua palavra e luz para o meu caminho.", ref: "Salmos 119:105" },
  { texto: "O amor é paciente, o amor é bondoso.", ref: "1 Coríntios 13:4" }
];

let versiculoAtual = listaVersiculos[0];

// Função que sorteia um versículo sem repetir o atual
function sortearVersiculo() {
  let novoIndex;
  do {
    novoIndex = Math.floor(Math.random() * listaVersiculos.length);
  } while (listaVersiculos[novoIndex].texto === versiculoAtual.texto);

  versiculoAtual = listaVersiculos[novoIndex];
  
  // Atualiza o texto na tela
  document.getElementById("verse-text").innerText = `"${versiculoAtual.texto}"`;
  document.getElementById("verse-reference").innerText = versiculoAtual.ref;
}

// Função para enviar o versículo para o WhatsApp
function compartilharZap() {
  const mensagem = encodeURIComponent(`${versiculoAtual.texto} — ${versiculoAtual.ref}`);
  window.open(`https://api.whatsapp.com/send?text=${mensagem}`, '_blank');
}

// Função que alterna entre o modo claro e o modo escuro
function alternarTema() {
  const body = document.body;
  const card = document.getElementById("app-card");
  const botaoTema = document.getElementById("btn-theme");
  
  // Alterna a classe 'modo-escuro' no body e no card
  body.classList.toggle("modo-escuro");
  card.classList.toggle("modo-escuro");
  
  // Muda o ícone do botão
  if (body.classList.contains("modo-escuro")) {
    botaoTema.innerText = "☀️"; // Modo escuro ligado, mostra sol
  } else {
    botaoTema.innerText = "🌙"; // Modo claro ligado, mostra lua
  }
}
