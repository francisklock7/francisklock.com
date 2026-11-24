/* ===== CONFIGURAÇÃO: é aqui que tu mexe ===== */
const CONFIG = {
  endpoint: "https://formspree.io/f/mnppvozd",   // Formspree que recebe as inscrições
  linkEvento: "https://mpago.la/2J9HNC4",        // R$ 59
  linkUpsell: "https://mpago.la/1ii3QUk",        // R$ 199
  linkCombo: "",                                  // opcional: link único de R$ 258 (encontro + orientação)
  video: "video-evento.mp4",                      // vídeo da capa (arquivo .mp4 na raiz, ou link do YouTube/Vimeo). Vazio = espaço reservado
  poster: "video-evento-poster.jpg",              // imagem de capa do vídeo (só pra .mp4)
  precoEvento: 59,
  precoUpsell: 199,
  vagasTotal: 20,
  vagasRestantes: 20                              // atualiza conforme os pagamentos aprovados no Mercado Pago
};
/* ============================================ */
