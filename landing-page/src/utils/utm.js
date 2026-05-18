/**
 * Pega todos os parâmetros da URL atual (utm_source, utm_campaign, fbclid, etc.)
 * e os anexa ao link de checkout informado.
 *
 * Exemplo:
 *   URL atual  → meusite.com/?utm_source=facebook&fbclid=abc
 *   checkout   → https://lastlink.com/p/CF68141D3/checkout-payment
 *   resultado  → https://lastlink.com/p/CF68141D3/checkout-payment?utm_source=facebook&fbclid=abc
 */
export function buildCheckoutUrl(baseUrl) {
  if (typeof window === 'undefined') return baseUrl;

  const currentParams = new URLSearchParams(window.location.search);

  // Nenhum parâmetro na URL atual → retorna o link limpo
  if (!currentParams.toString()) return baseUrl;

  // Garante que o baseUrl não quebre se já tiver uma query string
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}${currentParams.toString()}`;
}
