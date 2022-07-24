const colors = {
  primary: { dark: '#30DB75', light: '#30DB75' },
  info: { dark: '#0D91FD', light: '#0D91FD' },
  success: { dark: '#0AD651', light: '#0AD651' },
  warning: { dark: '#FFD800', light: '#FFD800' },
  danger: { dark: '#FF2E47', light: '#FF2E47' },
  background0: { dark: '#1C2024', light: '#EDF0F2' },
  background1: { dark: '#2A2E33', light: '#F7F9FA' },
  background2: { dark: '#3D4045', light: '#FFFFFF' },
  text: { dark: '#FEFEFF', light: '#1F1F1F' },
  link: { dark: '#0D91FD', light: '#0270CA' },
}

const font = {
  size: { xs: '0.75rem', sm: '0.875rem', md: '1rem', lg: '1.375rem', xl: '1.875rem', xxl: '2.5rem' },
  weight: { normal: 400, semibold: 500, bold: 700 },
}

const icon = { xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.75rem' }

const radius = { sm: '0.375rem', md: '0.5rem', lg: '1rem', max: '99999999px' }

const shadow = {
  1: [
    { offsetX: 0, offsetY: 1, blur: 2, spread: 0, transparency: 0.03 },
    { offsetX: 0, offsetY: 2, blur: 4, spread: 0, transparency: 0.04 },
    { offsetX: 0, offsetY: 6, blur: 9, spread: -1, transparency: 0.2 },
  ],
  2: [
    { offsetX: 0, offsetY: 4, blur: 8, spread: 0, transparency: 0.03 },
    { offsetX: 0, offsetY: 8, blur: 16, spread: -2, transparency: 0.04 },
    { offsetX: 0, offsetY: 24, blur: 36, spread: -4, transparency: 0.2 },
  ],
  3: [
    { offsetX: 0, offsetY: 12, blur: 24, spread: 0, transparency: 0.03 },
    { offsetX: 0, offsetY: 24, blur: 48, spread: -6, transparency: 0.04 },
    { offsetX: 0, offsetY: 72, blur: 108, spread: -12, transparency: 0.2 },
  ],
}

const space = {
  xxs: '0.25rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
}

const transitionMillis = { xs: 50, sh: 200, md: 300, lg: 400 }

const opacity = { disabled: 0.25, placeholder: 0.5 }

export const theme = { colors, font, radius, shadow, space, icon, transitionMillis, opacity }
