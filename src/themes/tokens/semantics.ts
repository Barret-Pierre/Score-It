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
      fontFamily: primitives.font.family.kumbh.bold,
      fontSize: primitives.font.size[40],
      lineHeight: primitives.font.lineHeight[48],
    },
    lg: {
      fontFamily: primitives.font.family.kumbh.bold,
      fontSize: primitives.font.size[32],
      lineHeight: primitives.font.lineHeight[40],
    },
  },

  heading: {
    xl: {
      fontFamily: primitives.font.family.kumbh.bold,
      fontSize: primitives.font.size[28],
      lineHeight: primitives.font.lineHeight[36],
    },
    lg: {
      fontFamily: primitives.font.family.kumbh.bold,
      fontSize: primitives.font.size[24],
      lineHeight: primitives.font.lineHeight[32],
    },
    md: {
      fontFamily: primitives.font.family.kumbh.semibold,
      fontSize: primitives.font.size[20],
      lineHeight: primitives.font.lineHeight[28],
    },
    sm: {
      fontFamily: primitives.font.family.kumbh.semibold,
      fontSize: primitives.font.size[18],
      lineHeight: primitives.font.lineHeight[26],
    },
  },

  body: {
    lg: {
      fontFamily: primitives.font.family.inter.regular,
      fontSize: primitives.font.size[17],
      lineHeight: primitives.font.lineHeight[26],
    },
    md: {
      fontFamily: primitives.font.family.inter.regular,
      fontSize: primitives.font.size[16],
      lineHeight: primitives.font.lineHeight[24],
    },
    accent: {
      fontFamily: primitives.font.family.inter.semibold,
      fontSize: primitives.font.size[16],
      lineHeight: primitives.font.lineHeight[24],
    },
    sm: {
      fontFamily: primitives.font.family.inter.regular,
      fontSize: primitives.font.size[14],
      lineHeight: primitives.font.lineHeight[22],
    },
  },

  caption: {
    md: {
      fontFamily: primitives.font.family.inter.medium,
      fontSize: primitives.font.size[13],
      lineHeight: primitives.font.lineHeight[18],
    },
    sm: {
      fontFamily: primitives.font.family.inter.medium,
      fontSize: primitives.font.size[12],
      lineHeight: primitives.font.lineHeight[16],
    },
  },

  button: {
    md: {
      fontFamily: primitives.font.family.inter.semibold,
      fontSize: primitives.font.size[16],
      lineHeight: primitives.font.lineHeight[24],
    },
    sm: {
      fontFamily: primitives.font.family.inter.semibold,
      fontSize: primitives.font.size[14],
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
  borderRadius: primitives.radius.full,
} as const;

export const header = {
  bg: primitives.colors.white,
  padding: primitives.spacing.md,

  gameFlow: {
    gap: primitives.spacing.sm,
    marginRight: primitives.spacing.xl,
  },
} as const;

export const bottom = {
  bg: primitives.colors.white,
  padding: primitives.spacing.md,
  borderWeight: primitives.border.weight[1],
  borderColor: primitives.colors.graphite[50],
} as const;

export const cards = {
  bg: primitives.colors.white,
  padding: primitives.spacing.md,
  borderRadius: primitives.radius.rounded,
  borderWeight: primitives.border.weight[1],
  borderColor: primitives.colors.graphite[50],
  gap: primitives.spacing.sm,
} as const;

// export const buttons = {
//   bg: primitives.colors.pink[500],
//   paddingHorizontal: primitives.spacing.xl,
//   paddingVertical: primitives.spacing.md,
//   borderRadius: primitives.radius.rounded,
//   gap: primitives.spacing.sm,

//   disabled: {
//     bg: primitives.colors.graphite[50],
//   },

//   active: {
//     bg: primitives.colors.pink[600],
//   },
// } as const;

export const buttons = {
  default: {
    background: primitives.colors.pink[500],
    backgroundPressed: primitives.colors.pink[600],
    backgroundDisabled: primitives.colors.graphite[50],

    text: text.inverse,
    textDisabled: text.disabled,

    icon: icon.onPrimary,
    iconDisabled: icon.disabled,

    borderWidth: 0,
    borderColor: primitives.colors.transparent,
    borderColorDisabled: primitives.colors.transparent,
    borderStyle: 'solid',
  },

  outlined: {
    background: primitives.colors.transparent,
    backgroundPressed: primitives.colors.pink[50],
    backgroundDisabled: primitives.colors.transparent,

    text: text.accent,
    textDisabled: text.disabled,

    icon: icon.focused,
    iconDisabled: icon.disabled,

    borderWidth: primitives.border.weight[2],
    borderColor: primitives.colors.pink[500],
    borderColorDisabled: primitives.colors.graphite[50],

    borderStyle: 'solid',
  },

  dashed: {
    background: primitives.colors.transparent,
    backgroundPressed: primitives.colors.violet[50],
    backgroundDisabled: primitives.colors.transparent,

    text: text.info,
    textDisabled: text.disabled,

    icon: icon.enabled,
    iconDisabled: icon.disabled,

    borderWidth: primitives.border.weight[2],
    borderColor: primitives.colors.violet[500],
    borderColorDisabled: primitives.colors.graphite[50],

    borderStyle: 'dashed',
  },

  common: {
    paddingHorizontal: primitives.spacing.xl,
    paddingVertical: primitives.spacing.md,
    borderRadius: primitives.radius.rounded,
    gap: primitives.spacing.sm,
  },
} as const;

export type Text = typeof text;
export type Typography = typeof typography;
export type Screen = typeof screen;
export type Icon = typeof icon;
export type Divider = typeof divider;
export type Header = typeof header;
export type Bottom = typeof bottom;
export type Cards = typeof cards;
export type Buttons = typeof buttons;
