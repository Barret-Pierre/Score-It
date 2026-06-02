import { primitives } from './primitives';

export const text = {
  primary: primitives.colors.graphite[500],
  accent: primitives.colors.pink[500],
  error: primitives.colors.pink[500],
  inverse: primitives.colors.white,
  disabled: primitives.colors.graphite[200],
  info: primitives.colors.violet[500],
  placeholder: primitives.colors.graphite[200],
  danger: primitives.colors.orange[500],
} as const;

export const typography = {
  display: {
    xl: {
      fontFamily: primitives.font.family.kumbh,
      fontSize: primitives.font.size[40],
      fontWeight: primitives.font.weight.bold,
      lineHeight: primitives.font.lineHeight[48],
    },
    lg: {
      fontFamily: primitives.font.family.kumbh,
      fontSize: primitives.font.size[32],
      fontWeight: primitives.font.weight.bold,
      lineHeight: primitives.font.lineHeight[40],
    },
  },

  heading: {
    xl: {
      fontFamily: primitives.font.family.kumbh,
      fontSize: primitives.font.size[28],
      fontWeight: primitives.font.weight.bold,
      lineHeight: primitives.font.lineHeight[36],
    },
    lg: {
      fontFamily: primitives.font.family.kumbh,
      fontSize: primitives.font.size[24],
      fontWeight: primitives.font.weight.bold,
      lineHeight: primitives.font.lineHeight[32],
    },
    md: {
      fontFamily: primitives.font.family.kumbh,
      fontSize: primitives.font.size[20],
      fontWeight: primitives.font.weight.semibold,
      lineHeight: primitives.font.lineHeight[28],
    },
    sm: {
      fontFamily: primitives.font.family.kumbh,
      fontSize: primitives.font.size[18],
      fontWeight: primitives.font.weight.semibold,
      lineHeight: primitives.font.lineHeight[26],
    },
  },

  body: {
    lg: {
      fontFamily: primitives.font.family.inter,
      fontSize: primitives.font.size[17],
      fontWeight: primitives.font.weight.regular,
      lineHeight: primitives.font.lineHeight[26],
    },
    md: {
      fontFamily: primitives.font.family.inter,
      fontSize: primitives.font.size[16],
      fontWeight: primitives.font.weight.regular,
      lineHeight: primitives.font.lineHeight[24],
    },
    accent: {
      fontFamily: primitives.font.family.inter,
      fontSize: primitives.font.size[16],
      fontWeight: primitives.font.weight.semibold,
      lineHeight: primitives.font.lineHeight[24],
    },
    sm: {
      fontFamily: primitives.font.family.inter,
      fontSize: primitives.font.size[14],
      fontWeight: primitives.font.weight.regular,
      lineHeight: primitives.font.lineHeight[22],
    },
  },

  caption: {
    md: {
      fontFamily: primitives.font.family.inter,
      fontSize: primitives.font.size[13],
      fontWeight: primitives.font.weight.medium,
      lineHeight: primitives.font.lineHeight[18],
    },
    sm: {
      fontFamily: primitives.font.family.inter,
      fontSize: primitives.font.size[12],
      fontWeight: primitives.font.weight.medium,
      lineHeight: primitives.font.lineHeight[16],
    },
  },

  button: {
    md: {
      fontFamily: primitives.font.family.inter,
      fontSize: primitives.font.size[16],
      fontWeight: primitives.font.weight.semibold,
      lineHeight: primitives.font.lineHeight[24],
    },
    sm: {
      fontFamily: primitives.font.family.inter,
      fontSize: primitives.font.size[14],
      fontWeight: primitives.font.weight.semibold,
      lineHeight: primitives.font.lineHeight[20],
    },
  },
} as const;

export const screen = {
  bg: primitives.colors.white,
  padding: primitives.spacing.md,
  gap: primitives.spacing.md,
} as const;

export const icon = {
  primary: primitives.colors.graphite[500],
  focused: primitives.colors.pink[500],
  unfocused: primitives.colors.graphite[100],
  onPrimary: primitives.colors.white,
  enabled: primitives.colors.violet[500],
  disabled: primitives.colors.graphite[200],
  gold: primitives.colors.amber[600],
  silver: primitives.colors.graphite[200],
  bronze: primitives.colors.orange[600],

  size: {
    sm: primitives.font.size[16],
    md: primitives.font.size[24],
    lg: primitives.font.size[32],
  },
} as const;

export const divider = {
  color: primitives.colors.graphite[50],
  weight: primitives.border.weight[2],
} as const;

export const header = {
  bg: primitives.colors.white,
  padding: primitives.spacing.md,
} as const;

export const bottom = {
  bg: primitives.colors.white,
  padding: primitives.spacing.md,
  borderWeight: primitives.border.weight[1],
} as const;

export type Text = typeof text;
export type Typography = typeof typography;
export type Screen = typeof screen;
export type Icon = typeof icon;
export type Divider = typeof divider;
export type Header = typeof header;
export type Bottom = typeof bottom;
