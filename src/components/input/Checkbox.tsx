/** @jsxImportSource @emotion/react */

import { darken, lighten } from 'helpers/color'
import { forwardRef, InputHTMLAttributes } from 'react'
import { useTheme } from 'theme/ThemeProvider'

export const Checkbox = forwardRef<
  HTMLInputElement,
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'placeholder'>
>(({ ...props }, ref) => {
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
            color: theme.colors.background(0.5),
          },
          '&:disabled + span': { opacity: theme.opacity.disabled, cursor: 'not-allowed' },
        }}
        {...props}
      />
      <span
        css={{
          transition: `background-color ${transitionMs}ms, border-color ${transitionMs}ms, color ${transitionMs}ms`,
          position: 'relative',
          cursor: 'pointer',
          padding: 0,
          boxSizing: 'content-box',
          border: `2px solid ${neutral}`,
          display: 'inline-block',
          width: '1.25rem',
          height: '1.25rem',
          backgroundColor: neutral,
          borderRadius: theme.radius.max,
          color: 'transparent',
        }}
        {...props}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          css={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '1.5rem',
            height: '1.5rem',
          }}
        >
          <path d="M 17.589844 6.5800781 L 10 14.169922 L 6.4101562 10.589844 L 5 12 L 10 17 L 19 8 L 17.589844 6.5800781 z " />
        </svg>
      </span>
    </>
  )
})
