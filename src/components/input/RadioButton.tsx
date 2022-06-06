/** @jsxImportSource @emotion/react */

import { forwardRef, InputHTMLAttributes } from 'react'
import { useTheme } from 'theme/ThemeProvider'

type RadioButtonProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'placeholder' | 'onChange' | 'value'> & {
  onCheck?: () => void
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(({ onCheck, ...props }, ref) => {
  const { theme, isDarkMode } = useTheme()

  const transitionMs = theme.transitionMillis.sh

  return (
    <>
      <input
        ref={ref}
        type="radio"
        css={{
          position: 'absolute',
          opacity: 0,
          width: '1px',
          height: '1px',
          '&:checked + span > span': {
            borderColor: theme.colors.primary(),
            '&:after': { backgroundColor: theme.colors.primary() },
          },
          '&:disabled + span > span': { opacity: theme.opacity.disabled, cursor: 'not-allowed' },
        }}
        onChange={e => e.target.checked && onCheck?.()}
        {...props}
      />
      <span css={{ position: 'relative', width: '1.5rem', height: '1.5rem' }}>
        <span
          css={{
            backgroundColor: theme.colors.background(1),
            transition: `border-color ${transitionMs}ms`,
            position: 'relative',
            cursor: 'pointer',
            padding: 0,
            border: `2px solid ${theme.colors.text(isDarkMode ? 0.5 : 0.25)}`,
            display: 'inline-block',
            width: '1rem',
            height: '1rem',
            borderRadius: theme.radius.max,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            '&:after': {
              transition: `background-color ${transitionMs}ms`,
              backgroundColor: 'transparent',
              content: '""',
              display: 'block',
              borderRadius: '100%',
              width: '0.5rem',
              height: '0.5rem',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            },
          }}
        />
      </span>
    </>
  )
})
