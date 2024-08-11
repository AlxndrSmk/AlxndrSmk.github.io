import { FrontUser, IFooterButton } from '../types/types';

export const FOOTER_BUTTONS: IFooterButton[] = [
  { name: 'home', icon: 'home', isAnimated: false },
  { name: 'tasks', icon: 'tasks', isAnimated: false },
  { name: 'improve', icon: 'improve', isAnimated: true },
  { name: 'profile', icon: 'profile', isAnimated: false },
];

export const frontUser: FrontUser = {
  boosts: [
    { type: 'potion', level: 1, value: 24, upgradePrice: 5, nextValue: 20 },
    { type: 'cookie', level: 1, value: 1, upgradePrice: 5, nextValue: 1.2 },
    { type: 'clover', level: 1, value: 0, upgradePrice: 5, nextValue: 5 },
  ],
  balance: 1500,
  level: 1,
};

// export const IMPROVE_CARDS: Boost[] = [
//   { type: 'potion', level: 0, value: 24, upgradePrice: 0 },
//   { type: 'potion', level: 1, value: 20, upgradePrice: 5 },
//   { type: 'potion', level: 2, value: 18, upgradePrice: 15 },
//   { type: 'potion', level: 3, value: 16, upgradePrice: 25 },
//   { type: 'potion', level: 4, value: 14, upgradePrice: 50 },
//   { type: 'potion', level: 5, value: 12, upgradePrice: 75 },
//   { type: 'potion', level: 6, value: 10, upgradePrice: 100 },
//   { type: 'potion', level: 7, value: 8, upgradePrice: 200 },
//   { type: 'potion', level: 8, value: 6, upgradePrice: 400 },
//   { type: 'potion', level: 9, value: 4, upgradePrice: 800 },
//   { type: 'potion', level: 10, value: 2, upgradePrice: 1600 },
//   { type: 'potion', level: 11, value: 1.5, upgradePrice: 100000 },
//   { type: 'cookie', level: 0, value: 1, upgradePrice: 0 },
//   { type: 'cookie', level: 1, value: 1.2, upgradePrice: 5 },
//   { type: 'cookie', level: 2, value: 1.5, upgradePrice: 15 },
//   { type: 'cookie', level: 3, value: 2, upgradePrice: 25 },
//   { type: 'cookie', level: 4, value: 2.2, upgradePrice: 50 },
//   { type: 'cookie', level: 5, value: 2.5, upgradePrice: 75 },
//   { type: 'cookie', level: 6, value: 2.7, upgradePrice: 100 },
//   { type: 'cookie', level: 7, value: 5, upgradePrice: 200 },
//   { type: 'cookie', level: 8, value: 7, upgradePrice: 400 },
//   { type: 'cookie', level: 9, value: 10, upgradePrice: 800 },
//   { type: 'cookie', level: 10, value: 15, upgradePrice: 1600 },
//   { type: 'cookie', level: 11, value: 16, upgradePrice: 100000 },
//   { type: 'clover', level: 0, value: 0, upgradePrice: 0 },
//   { type: 'clover', level: 1, value: 5, upgradePrice: 5 },
//   { type: 'clover', level: 2, value: 10, upgradePrice: 15 },
//   { type: 'clover', level: 3, value: 15, upgradePrice: 25 },
//   { type: 'clover', level: 4, value: 20, upgradePrice: 50 },
//   { type: 'clover', level: 5, value: 25, upgradePrice: 75 },
//   { type: 'clover', level: 6, value: 30, upgradePrice: 100 },
//   { type: 'clover', level: 7, value: 35, upgradePrice: 200 },
//   { type: 'clover', level: 8, value: 40, upgradePrice: 400 },
//   { type: 'clover', level: 9, value: 45, upgradePrice: 800 },
//   { type: 'clover', level: 10, value: 50, upgradePrice: 1600 },
//   { type: 'clover', level: 11, value: 52, upgradePrice: 100000 },
// ];
