export const parsePrice = ({ currency, amount, decimals }) =>{
  currency = (currency === 'ARS') ? '$' : 'U$D';
  amount = new Intl.NumberFormat('es-AR', { minimumSignificantDigits: 1 }).format(amount);
  // Hack to add zero to single character decimals
  decimals = decimals.toString();
  if((decimals.length === 1) || (decimals === '0')) {
    decimals = decimals + '0';
  }
  return { currency, amount, decimals };
};
