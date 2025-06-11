 let tentativas = 0;

  const dicas = [
  "Dica 1: Palavra que não pode faltar no BOA NOITE...",
  "Dica 2: + um animal que te representa kkk❤️",
  "Dica 3: + dia que passei vergonha indo conhecer sua familia inteira kk (dia-mês-ano) ✨",
  "Dica 4: + minha comida favorita 😴💘",
  "Dica 5: + complete a frase (Meu namorado é _____ mas eu ___ ele)😴💘",
  "Dica 6: Agora só juntar todas a respostas"
  ];

function validarLogin() {
  const nome = document.getElementById('nome').value.toLowerCase().trim();
  const senha = document.getElementById('senha').value;
  

  // Coloque o nome exato que sua namorada deve digitar, exemplo "Bruna"
  if (nome === "bruna" && senha === "teamopreguiça24122024churrascochatoamo") {
    mostrarMensagem();
  } else {
    const dicaAtual = dicas[tentativas % dicas.length]; // pega uma dica cíclica
    document.getElementById('erro').innerText = `Nome ou senha incorretos 😢\n${dicaAtual}`;
    tentativas++; // incrementa as tentativas
  }

  return false; // impede o envio do formulário
}

function mostrarMensagem() {
  document.body.innerHTML = `
    <link rel="stylesheet" href="style.css">
    <div class="container">

      <!-- Controle de música -->
      <div class="player-musica">
      <audio id="musica" src="minha-musica.mp3"></audio>
     <div class="info-musica">
      <span id="titulo-musica">💿 Lady Gaga - Always Remember Us This Way </span>
      </div>
      <button id="btnPlayPause">
      <svg width="32" height="32" viewBox="0 0 20 20" fill="#1db954" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3v18l16-9z" fill="currentColor"/>
      </svg>
      </button>
     </div>

      <h1>💖 Bem-vinda, meu amor! 💖</h1>
      <p>Eu preparei isso com muito carinho. Da um play na música kkk e clique nas setinhas para ver cada foto!</p>

      <div class="carousel-container">
      <div class="coracoes-animados">
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        <div class="coracao">❤️</div>
        
      </div>
        <button class="arrow left" onclick="mudarSlide(-1)">❮</button>
        <div class="carousel" id="carrossel">
          <div class="slide ativo">
            <img src="foto1.jpg" alt="Foto 1">
            <div class="legenda-carrossel">Essas fotos são poucas comparado ao meu sentimento por você vida😍</div>
          </div>
          <div class="slide">
            <img src="foto2.jpg" alt="Foto 2">
            <div class="legenda-carrossel">Esse foi o dia em que fomos no parque SJP de noite, fomos só pra comer milho e passar frio kkkk💘</div>
          </div>
          <div class="slide">
            <img src="foto3.jpg" alt="Foto 3">
            <div class="legenda-carrossel">O dia que fomos passar um tempo com a sua família no parque Naútico❤️</div>
          </div>
          <div class="slide">
            <img src="foto4.jpg" alt="Foto 4">
            <div class="legenda-carrossel">Teu sorriso ilumina meu mundo ❤️</div>
          </div>
          <div class="slide">
            <img src="foto5.jpg" alt="Foto 5">
            <div class="legenda-carrossel">Sua chatisse me estressa, mas não vivo sem hehe ❤️</div>
          </div>
          <div class="slide">
            <img src="foto6.jpg" alt="Foto 6">
            <div class="legenda-carrossel">Meu ❤️ Te amo!! ❤️</div>
          </div>
        </div>
        <button class="arrow right" onclick="mudarSlide(1)">❯</button>
      </div>

      <!-- Texto fixo -->
      <div class="texto-fixo" style="margin-top: 20px; font-size: 16px; color: #555;">
        Vida, fiz um pouco melhor dessa vez, você não deixou eu terminar pela ansidade kkkkk mas dessa vez fiz uns pequenos ajustes e espero que goste vida, sério passar nosso primeiro dia dos namorados e não estarei presente é complicado amorzinho, mas esse será o primeiro de muitos outros Dia dos Namorados que iremos passar juntos, você vem sendo meu abrigo, meu refugio quando as coisas começam a desmoronar, você me acalma e me faz sentir um homem foda, mas isso tudo por você ser essa mulher foda e incrível que é, simplesmente a melhor namorado do mundo.
      </div>
      <div class="texto-fixo" style="margin-top: 20px; font-size: 16px; color: #555;">
        ❤️❤️❤️TE AMO!!!!!❤️❤️❤️
      </div>
    </div>
  `;

  // Lógica do botão de música
  const musica = document.getElementById('musica');
  const btnPlayPause = document.getElementById('btnPlayPause');

  // Estado inicial
  const playIcon = `
  <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: pink;">
    <path d="M6 2v20l12-10z" fill="currentColor"/>
  </svg>
`;

  const pauseIcon = `
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: pink;">
    <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
    <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
  </svg>
  `;

  btnPlayPause.innerHTML = playIcon; // inicia com play

  btnPlayPause.addEventListener('click', () => {
  if (musica.paused) {
    musica.play();
    btnPlayPause.innerHTML = pauseIcon;
  } else {
    musica.pause();
    btnPlayPause.innerHTML = playIcon;
  }
  });

// Caso a música termine sozinha
musica.addEventListener('ended', () => {
  btnPlayPause.textContent = '▶️';
  tocando = false;
});

  // Carrossel de slides
  let slideAtual = 0;
  const slides = document.querySelectorAll('.slide');

  function mostrarSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('ativo', i === index);
    });
  }

  function mudarSlide(direcao) {
    slideAtual = (slideAtual + direcao + slides.length) % slides.length;
    mostrarSlide(slideAtual);
  }

  window.mudarSlide = mudarSlide;
}
