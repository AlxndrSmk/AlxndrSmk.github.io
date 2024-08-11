/* eslint-disable @typescript-eslint/no-explicit-any */
export interface User {
  id: string;
  balance: number;
  created: Date;
  last_login: Date;
  ownPromoCode: string;
  promoCode: string;
  userName: string;
  telegramId: string | number;
}

export interface FrontUser {
  boosts: Boost[];
  balance: number;
  level: number;
}

export interface IFooterButton {
  name: string;
  icon: string;
  isAnimated: boolean;
}

export interface Boost {
  type: string;
  level: number;
  value: number;
  upgradePrice: number;
  nextValue: number;
}
