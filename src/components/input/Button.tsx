/** @jsxImportSource @emotion/react */

import { VisuallyHidden } from 'components/layout'
import { forwardRef, ButtonHTMLAttributes } from 'react'
import { useTheme } from 'theme/ThemeProvider'

const validButtonTypes = ['button', 'reset', 'submit'] as const

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: typeof validButtonTypes[number]
  alt?: string
}

/** A CSS reset button used as a base to create different buttons */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', alt, children, ...props }, ref) => {
    const { theme } = useTheme()

    return (
      // eslint-disable-next-line jsx-a11y/no-redundant-roles
      <button
        ref={ref}
        css={{
          appearance: 'none',
          background: 0,
          border: 0,
          boxSizing: 'border-box',
          color: 'inherit',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          lineHeight: 1.25,
          outline: 0,
          overflow: 'hidden',
          padding: 0,
          pointerEvents: 'auto',
          position: 'relative',
          textOverflow: 'ellipsis',
          userSelect: 'none',
          verticalAlign: 'middle',
          WebkitTapHighlightColor: 'transparent',
          WebkitTouchCallout: 'none',
          whiteSpace: 'nowrap',
          '&:disabled': { cursor: 'not-allowed', opacity: theme.opacity.disabled },
        }}
        type={type}
        aria-label={alt}
        {...props}
      >
        {!!alt && <VisuallyHidden>{alt}</VisuallyHidden>}
        {children}
      </button>
    )
  }
)
