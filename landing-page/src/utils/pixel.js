/**
 * Utilitário para lidar com o Pixel da Meta/Facebook em um ambiente React/Vite.
 * 
 * O script base de inicialização (init) e PageView está no index.html 
 * para garantir que o pixel carregue o mais rápido possível e de 
 * forma confiável (evitando bloqueios de navegadores a injeções dinâmicas).
 */

/**
 * Dispara um evento padrão do Facebook Pixel
 * @param {string} eventName - Nome do evento padrão (ex: 'ViewContent', 'InitiateCheckout', 'Purchase')
 * @param {object} data - Dados adicionais do evento (ex: { value: 17.90, currency: 'BRL' })
 */
export const trackPixelEvent = (eventName, data = {}) => {
  if (window.fbq) {
    window.fbq('track', eventName, data);
    console.log(`[Meta Pixel] Evento disparado: ${eventName}`, data);
  } else {
    console.warn(`[Meta Pixel] fbq não está definido. Evento ${eventName} não foi disparado.`);
  }
};

/**
 * Dispara um evento customizado do Facebook Pixel
 * @param {string} eventName - Nome do evento customizado
 * @param {object} data - Dados adicionais do evento
 */
export const trackCustomPixelEvent = (eventName, data = {}) => {
  if (window.fbq) {
    window.fbq('trackCustom', eventName, data);
    console.log(`[Meta Pixel] Evento Customizado disparado: ${eventName}`, data);
  } else {
    console.warn(`[Meta Pixel] fbq não está definido. Evento customizado ${eventName} não foi disparado.`);
  }
};

/**
 * PREPARAÇÃO PARA O EVENTO DE COMPRA (Purchase)
 * 
 * Instruções para o futuro:
 * Quando houver uma página de "Obrigado" (Thank You Page) após a compra,
 * ou um webhook/callback de conversão, você deverá chamar esta função.
 * 
 * Exemplo de uso na Thank You Page:
 * 
 * useEffect(() => {
 *   trackPurchase({ value: 17.90, currency: 'BRL', content_name: 'Kit 267+ Atividades' });
 * }, []);
 */
export const trackPurchase = (purchaseData) => {
  // Dispara o evento de Purchase com o valor da compra
  trackPixelEvent('Purchase', {
    currency: 'BRL',
    value: 17.90, // Valor padrão, pode ser sobrescrito pelo purchaseData
    ...purchaseData
  });
};
