/* eslint-disable @typescript-eslint/no-explicit-any */
export enum HapticFeedback {
  light = 'light', // для клайма, покупка, апгрейд
  medium = 'medium',
  heavy = 'heavy',
  rigid = 'rigid', // лайтовые запросы на сервак
  soft = 'soft', // переходы по элементам приложения
}

export const runHapticFeedback = (type: HapticFeedback) => {
  if (import.meta.env.VITE_PRODUCTION === "true" ) {
    if ((window as any)?.Telegram?.WebApp?.HapticFeedback) {
      (window as any)?.Telegram?.WebApp?.HapticFeedback.impactOccurred(type);
    } else if (navigator.vibrate) {
      navigator.vibrate(200);
    }
  }
};
