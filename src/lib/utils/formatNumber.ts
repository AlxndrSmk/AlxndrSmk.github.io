const formatNumber = (number: number | undefined): string => {
  if (number === undefined || isNaN(number) || number === 0) return '0';

  const SI_POSTFIXES = ['', 'K', 'M', 'B', 'T', 'P', 'E'];
  const absNumber = Math.abs(number);
  const tier = Math.floor(Math.log10(absNumber) / 3);

  if (tier === 0) {
    return number.toString().replace('.', ',');
  }

  const postfix = SI_POSTFIXES[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = absNumber / scale;
  const floored = Math.floor(scaled * 100) / 100;
  let str = floored.toFixed(2);

  // Заменяем точку на запятую
  str = str.replace('.', ',');

  if (str.endsWith(',00')) return `${str.slice(0, -3)}${postfix}`;
  if (str.endsWith('0')) return `${str.slice(0, -1)}${postfix}`;

  str = /,0$/.test(str) ? str.substr(0, str.length - 2) : str;

  return `${str}${postfix}`;
};

export default formatNumber;
