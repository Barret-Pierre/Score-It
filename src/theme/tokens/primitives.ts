export const primitives = {
  colors: {
    white: '#FFFFFF',
    smoky: '#3030304D',
    transparent: 'transparent',

    orange: {
      50: '#FFF1EB',
      100: '#FEC8AF',
      200: '#FDAC86',
      300: '#FD905E',
      400: '#FC7536',
      500: '#FB5607',
      600: '#DD4803',
    },

    pink: {
      50: '#FFEBF3',
      100: '#FFADD1',
      200: '#FF85BA',
      300: '#FF5CA3',
      400: '#FF338B',
      500: '#FF006E',
      600: '#E00061',
    },

    graphite: {
      50: '#EBEBEB',
      100: '#CCCCCC',
      200: '#ADADAD',
      300: '#8F8F8F',
      400: '#707070',
      500: '#303030',
      600: '#1F1F1F',
    },

    amber: {
      50: '#FFFAEB',
      100: '#FFE9AD',
      200: '#FFDE85',
      300: '#FFD35C',
      400: '#FFC933',
      500: '#FFBE0B',
      600: '#E0A500',
    },

    violet: {
      50: '#F3ECFD',
      100: '#E8DAFC',
      200: '#D1B4F8',
      300: '#B98FF5',
      400: '#A26AF1',
      500: '#8338EC',
      600: '#741FEA',
    },
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 40,
    '3xl': 48,
  },

  radius: {
    small: 8,
    rounded: 16,
    full: 999,
  },

  border: {
    weight: {
      1: 1,
      2: 2,
    },
  },

  font: {
    family: {
      kumbh: 'Kumbh Sans',
      inter: 'Inter',
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    size: {
      12: 12,
      13: 13,
      14: 14,
      16: 16,
      17: 17,
      18: 18,
      20: 20,
      24: 24,
      28: 28,
      32: 32,
      40: 40,
    },
    lineHeight: {
      16: 16,
      18: 18,
      20: 20,
      22: 22,
      24: 24,
      26: 26,
      28: 28,
      32: 32,
      36: 36,
      40: 40,
      48: 48,
    },
  },

  offset: {
    0: 0,
  },

  opacity: {
    8: 8,
  },
} as const;

export type Primitives = typeof primitives;
