import { contrast, darken, lighten } from 'helpers/color'
import { useTheme } from 'theme/ThemeProvider'

type Variant = 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'neutral'

export const useButtonVariantStyle = (variant: Variant = 'neutral') => {
  const {
    theme: { colors },
    isDarkMode,
  } = useTheme()

  const v = variant === 'neutral' ? (isDarkMode ? 'dark' : 'light') : variant

  const color = {
    primary: colors.primary(),
    info: colors.info(),
    success: colors.success(),
    warning: colors.warning(),
    danger: colors.danger(),
    dark: colors.background(1),
    light: colors.background(1),
  }[v]

  const hover = {
    primary: lighten(color, 0.3),
    secondary: lighten(color, 0.3),
    info: lighten(color, 0.3),
    success: lighten(color, 0.3),
    warning: lighten(color, 0.3),
    danger: lighten(color, 0.3),
    dark: lighten(color, 0.3),
    light: lighten(color, 0.15),
    brand: lighten(color, 0.3),
  }[v]

  const active = {
    primary: darken(color, 0.5),
    secondary: darken(color, 0.5),
    info: darken(color, 0.5),
    success: darken(color, 0.5),
    warning: darken(color, 0.5),
    danger: darken(color, 0.5),
    dark: darken(color, 0.5),
    light: darken(color, 0.5),
    brand: darken(color, 0.5),
  }[v]

  return {
    color: contrast(color),
    backgroundColor: color,
    '@media (pointer: fine)': {
      '&:hover:not([disabled])': { backgroundColor: hover },
      '&:focus:not([disabled])': { backgroundColor: hover },
    },
    '&:active:not([disabled])': { backgroundColor: active },
  }
}
