/** @jsxImportSource @emotion/react */

import { darken, lighten } from 'helpers/color'
import { forwardRef, InputHTMLAttributes } from 'react'
import { useTheme } from 'theme/ThemeProvider'

export const Switch = forwardRef<HTMLInputElement, Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'placeholder'>>(
  ({ ...props }, ref) => {
    const { theme, isDarkMode } = useTheme()

    const neutral = isDarkMode
      ? lighten(theme.colors.background.dark(1), 0.75)
      : darken(theme.colors.background.light(), 0.35)

    const transitionMs = theme.transitionMillis.sh

    return (
      <>
        <input
          ref={ref}
          type="checkbox"
          css={{
            position: 'absolute',
            opacity: 0,
            width: '1px',
            height: '1px',
            '&:checked + span': {
              backgroundColor: theme.colors.primary(),
              borderColor: theme.colors.primary(),
              '&:after': { backgroundColor: '#fff', transform: 'translateX(1rem)' },
            },
            '&:disabled + span': { opacity: theme.opacity.disabled, cursor: 'not-allowed' },
          }}
          {...props}
        />
        <span
          css={{
            transition: `background-color ${transitionMs}ms, border-color ${transitionMs}ms`,
            position: 'relative',
            cursor: 'pointer',
            padding: 0,
            boxSizing: 'content-box',
            border: `2px solid ${neutral}`,
            display: 'inline-block',
            width: '2.25rem',
            height: '1.25rem',
            backgroundColor: neutral,
            borderRadius: theme.radius.max,
            '&:after': {
              transition: `transform ${transitionMs}ms, background-color ${transitionMs}ms`,
              backgroundColor: '#fff',
              content: '""',
              display: 'block',
              borderRadius: '100%',
              width: '1.25rem',
              height: '1.25rem',
              transform: 'translateX(0)',
            },
          }}
        />
      </>
    )
  }
)
