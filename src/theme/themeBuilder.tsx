/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { transparent } from 'helpers/color'
import { theme } from './theme'
import { mix as mixColor } from 'helpers/color'

const buildSpace = (space: typeof theme.space) =>
  Object.assign(
    (...args: (0 | '0' | keyof typeof space)[]) => args.map(s => (s === 0 || s === '0' ? '0' : space[s])).join(' '),
    space
  )

const buildRadius = (radius: typeof theme.radius) =>
  Object.assign(
    (...args: (0 | '0' | keyof typeof radius)[]) => args.map(s => (s === 0 || s === '0' ? '0' : radius[s])).join(' '),
    radius
  )

const buildColors = (colors: typeof theme.colors, isDarkMode: boolean) => {
  const { background: backgroundColor, ...other } = colors
  type OtherColors = typeof other
  type GeneratedOtherColors = Record<
    keyof OtherColors,
    ((transparency?: number) => string) & {
      dark: (transparency?: number) => string
      light: (transparency?: number) => string
    }
  >

  const transparencyFn = (c: string, tr?: number) => (tr !== undefined ? transparent(c, tr) : c)
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const colorFunctions = (Object.keys(other) as (keyof OtherColors)[]).reduce<GeneratedOtherColors>(
    (res, k) => {
      res[k] = Object.assign(
        (transparency?: number) => transparencyFn(isDarkMode ? other[k].dark : other[k].light, transparency),
        {
          dark: (transparency?: number) => transparencyFn(other[k].dark, transparency),
          light: (transparency?: number) => transparencyFn(other[k].light, transparency),
        }
      )
      return res
    },
    // eslint-disable-next-line
    {} as GeneratedOtherColors
  )

  const backgroundMixFn = (bgs: string[], elevation = 0) => {
    elevation = Math.max(0, Math.min(1, elevation))

    if (elevation === 0) return bgs[0]
    if (elevation === 1) return bgs[bgs.length - 1]

    const bg0Index = Math.floor((bgs.length - 1) * elevation)
    const bg1Index = Math.min(bg0Index + 1, bgs.length - 1)
    const bg0 = bgs[bg0Index]
    const bg1 = bgs[bg1Index]
    const displacement = (elevation - bg0Index / (bgs.length - 1)) * (bgs.length - 1)

    return mixColor(bg0, bg1, displacement)
  }

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const backgroundDark = (elevation?: number) => backgroundMixFn(backgroundColor.dark, elevation)
  const backgroundLight = (elevation?: number) => backgroundMixFn(backgroundColor.light, elevation)

  const background = Object.assign(
    (elevation?: number) => (isDarkMode ? backgroundDark(elevation) : backgroundLight(elevation)),
    { dark: backgroundDark, light: backgroundLight }
  )

  return {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    ...(Object.keys(other) as (keyof OtherColors)[]).reduce<GeneratedOtherColors>((res, k) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/consistent-type-assertions
      res[k] = other[k][isDarkMode ? 'dark' : 'light'] as any
      return res
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/prefer-reduce-type-parameter
    }, {} as GeneratedOtherColors),
    ...colorFunctions,
    background,
  }
}

const buildShadow = (shadow: typeof theme.shadow, isDarkMode: boolean) => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return (Object.keys(shadow) as unknown as (keyof typeof shadow)[]).reduce<Record<keyof typeof shadow, string>>(
    (res, key) => {
      res[key] = shadow[key].reduce<string>((s, { offsetX, offsetY, blur, spread, transparency }) => {
        const sh = s ? `${s}, ` : ''
        const alpha = isDarkMode ? transparency * 4 : transparency
        return `${sh}${offsetX}px ${offsetY}px ${blur}px ${spread}px rgba(0, 0, 0, ${alpha})`
      }, '')
      return res
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/consistent-type-assertions, @typescript-eslint/prefer-reduce-type-parameter
    {} as any
  )
}

export const buildTheme = (themeBase: typeof theme, isDarkMode: boolean) => ({
  space: buildSpace(themeBase.space),
  font: themeBase.font,
  colors: buildColors(themeBase.colors, isDarkMode),
  radius: buildRadius(themeBase.radius),
  transitionMillis: themeBase.transitionMillis,
  shadow: buildShadow(themeBase.shadow, isDarkMode),
  icon: themeBase.icon,
  opacity: themeBase.opacity,
})
