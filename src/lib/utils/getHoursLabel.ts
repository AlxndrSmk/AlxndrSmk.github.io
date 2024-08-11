export const getHourLabel = (count: number, lng: string): string => {
  if (lng === 'ru') {
    const isFractional = count % 1 !== 0; // Проверка, является ли число дробным
    if (count % 100 >= 11 && count % 100 <= 19) {
      return 'hours';
    }
    if (isFractional || (count % 10 >= 2 && count % 10 <= 4)) {
      return 'fewHours';
    }
    switch (count % 10) {
      case 1:
        return 'hour';
      default:
        return 'hours';
    }
  } else {
    // English or fallback to hours
    return count === 1 ? 'hour' : 'hours';
  }
};
