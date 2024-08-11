import { extendTheme } from '@chakra-ui/react';

import { config } from './config';

export const theme = extendTheme({
  colors: {
    border: {
      100: 'rgba(4, 87, 119, 0.8)',
      80: 'rgba(4, 87, 119, 0.6)',
      50: 'rgba(4, 87, 119, 0.5)',
    },
    transparent: 'transparent',
    green: '#86bb9f',
    transparentGreen: 'rgba(134, 187, 159, 0.50)',
    transparentWhite: 'rgba(255, 255, 255, 0.2)',
    red: 'red',
    black: {
      100: '#000000',
      50: 'rgba(0, 0, 0, 0.5)',
    },
    white: {
      100: '#ffffff',
      10: 'rgba(255, 255, 255, 0.1)',
    },
    gray: {
      50: '#f7fafc',
      900: '#171923',
    },
    space: '#82aac1',
    spaceText: '#96b2bf',
    notificationBadge: '#0fc6fc',
    cyan: 'rgba(0, 255, 255, 0.8)',
    colorSelected: '#fed338;',
    disabled: '#808080',
    borderColor: 'rgba(130, 170, 193, 0.7)',
    background: {
      10: 'rgba(130, 170, 193, 0.1)',
    },
    backgroundColor: 'rgba(95, 158, 160, 0.1)',
    level1: 'rgb(137, 132, 177)',
    level2: 'rgb(43, 214, 0)',
    level3: 'rgb(3, 225, 228)',
    level4: 'rgb(255, 47, 209)',
    level5: 'rgb(255, 220, 0)',
    level6: 'rgb(235, 0, 0)',
    level7: 'rgb(252, 247, 204)',
    level8: 'rgb(75, 0, 176)',
    level9: 'rgb(250, 88, 155)',
    level10: 'rgb(255, 170, 187)',
    colorTier1: '#82aac1',
    colorTier2: '#00FF00',
    colorTier3: '#00FFFF',
    colorTier4: '#7F00FF',
    colorTier5: '#FFD700',
    shadowDrone: '#FF0000',
  },
  styles: {
    global: () => ({
      body: {
        bg: '#181928',
        color: '#ffffff',
      },
    }),
  },
  fonts: {
    heading: 'Plus Jakarta Sans, sans-serif',
    body: 'Plus Jakarta Sans, sans-serif',
  },
  components: {
    // Button: {
    // }
  },
  config,
});
