/**
 * Format a numeric price into a localized currency string.
 * @param {number} amount
 * @param {string} [currency='USD']
 * @returns {string}
 */
export function formatPrice(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
