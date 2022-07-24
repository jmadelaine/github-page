import { FC, useState, Dispatch, SetStateAction, useMemo, useLayoutEffect, useEffect } from 'react'
import facepaint from 'facepaint'
import { theme as themeBase } from './theme'
import { buildTheme } from './themeBuilder'
import { Global } from '@emotion/react'
import { globalStyle } from './global'
import { createSafeContext } from 'helpers/createSafeContext'
import { appBreakpoints } from './BreakpointProvider'
import { byAscending } from 'helpers/sort'
import { storage } from 'helpers/storage'
import { isBoolean } from 'ts-guardian'

interface IThemeContext {
  theme: ReturnType<typeof buildTheme>
  setThemeBase: Dispatch<SetStateAction<typeof themeBase>>
  isDarkMode: boolean
  setIsDarkMode: Dispatch<SetStateAction<boolean>>
  bp: (style: Parameters<ReturnType<typeof facepaint>>[0]) => facepaint.DynamicStyle
}

export type BuiltTheme = ReturnType<typeof useTheme>['theme']

const breakPointsAsMediaQueries = Object.values(appBreakpoints)
  .sort(byAscending)
  .map(bp => `@media(min-width: ${bp}px)`)

const isDarkModeStorageKey = 'isDarkMode'

const getInitialIsDarkMode = () => {
  // Check if user has set manually in app (uses local storage)
  const stored = storage.get(isDarkModeStorageKey)
  if (isBoolean(stored)) return stored
  // Get light theme preference, and default to dark if no match
  return !window.matchMedia('(prefers-color-scheme: light)').matches
}

export const ThemeContext = createSafeContext<IThemeContext>('ThemeContext not defined')

export const useTheme = ThemeContext.useContext

export const ThemeProvider: FC = ({ children }) => {
  const [themeBaseState, setThemeBaseState] = useState(themeBase)

  // Breakpoints
  const bp = (style: Parameters<ReturnType<typeof facepaint>>[0]) => facepaint(breakPointsAsMediaQueries)(style)[0]

  const [isDarkMode, setIsDarkMode] = useState(false)
  // If jest testing, we don't try fetching dark mode
  const [hasInitialisedDarkMode, setHasInitialisedDarkMode] = useState(!!process.env.JEST_WORKER_ID)

  useLayoutEffect(() => {
    if (hasInitialisedDarkMode) return
    const dm = getInitialIsDarkMode()
    setIsDarkMode(dm)
    setHasInitialisedDarkMode(true)
  }, [hasInitialisedDarkMode])

  useEffect(() => {
    if (hasInitialisedDarkMode) storage.set(isDarkModeStorageKey, isDarkMode)
  }, [isDarkMode, hasInitialisedDarkMode])

  // Theme is constructed from base theme and includes helper functions
  const theme = useMemo(() => buildTheme(themeBaseState, isDarkMode), [themeBaseState, isDarkMode])

  return (
    <ThemeContext.Provider value={{ theme, setThemeBase: setThemeBaseState, isDarkMode, setIsDarkMode, bp }}>
      <Global styles={globalStyle} />
      <Global
        styles={{
          body: {
            backgroundColor: theme.colors.background(isDarkMode ? 0 : 2),
            color: theme.colors.text(),
          },
        }}
      />
      {hasInitialisedDarkMode && children}
    </ThemeContext.Provider>
  )
}
