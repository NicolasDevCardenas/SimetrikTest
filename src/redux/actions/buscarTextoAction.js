export const BUSCAR_TEXTO = 'BUSCAR_TEXTO';

export const buscar_texto_action = (word, check) => ({
  type: BUSCAR_TEXTO,
  word,
  check,
});
