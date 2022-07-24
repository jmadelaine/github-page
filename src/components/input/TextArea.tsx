/** @jsxImportSource @emotion/react */

import { forwardRef, InputHTMLAttributes } from 'react'
import { useTheme } from 'theme/ThemeProvider'

type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  initialValue?: string
  isError?: boolean
  rows?: number
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ initialValue, isError, ...props }, ref) => {
  const { theme } = useTheme()

  return (
    <textarea
      ref={ref}
      cols={1}
      css={{
        appearance: 'none',
        background: theme.colors.background(1),
        border: `1px solid ${isError ? theme.colors.danger() : 'transparent'}`,
        boxSizing: 'border-box',
        color: theme.colors.text(),
        display: 'inline-block',
        fontFamily: 'inherit',
        fontSize: theme.font.size.md,
        lineHeight: 1.25,
        position: 'relative',
        verticalAlign: 'middle',
        WebkitTapHighlightColor: 'transparent',
        '::placeholder': { color: theme.colors.text(theme.opacity.placeholder) },
        '&:disabled': {
          cursor: 'not-allowed',
          color: theme.colors.text(theme.opacity.disabled),
          '::placeholder': { color: theme.colors.text(theme.opacity.disabled) },
        },
        resize: 'none',
        padding: theme.space('sm', 'lg'),
        borderRadius: theme.radius.sm,
        outline: 0,
      }}
      defaultValue={initialValue}
      {...props}
    />
  )
})
