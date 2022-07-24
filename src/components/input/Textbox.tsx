/** @jsxImportSource @emotion/react */

import { Col } from 'components/layout'
import { ComponentProps, forwardRef, InputHTMLAttributes } from 'react'
import { useTheme } from 'theme/ThemeProvider'
import { IconButton } from './IconButton'

type TextboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  type?: 'email' | 'hidden' | 'password' | 'tel' | 'text' | 'url'
  isError?: boolean
  endButtonIcon?: ComponentProps<typeof IconButton>['icon']
  onClickEndButton?: () => void
}

export const Textbox = forwardRef<HTMLInputElement, TextboxProps>(
  ({ type = 'text', isError, endButtonIcon, onClickEndButton, disabled, ...props }, ref) => {
    const { theme } = useTheme()

    return (
      <Col>
        <input
          ref={ref}
          css={{
            pointerEvents: 'auto',
            appearance: 'none',
            background: theme.colors.background(1),
            border: `1px solid ${isError ? theme.colors.danger() : 'transparent'}`,
            borderRadius: theme.radius.sm,
            boxSizing: 'border-box',
            color: theme.colors.text(),
            display: 'inline-block',
            fontFamily: 'inherit',
            fontSize: theme.font.size.md,
            lineHeight: 1.25,
            padding: theme.space.md,
            ...(!!endButtonIcon && {
              paddingRight: `calc(2.25rem + ${theme.space.md} * 2)`,
            }),
            position: 'relative',
            verticalAlign: 'middle',
            WebkitTapHighlightColor: 'transparent',
            '::placeholder': { color: theme.colors.text(theme.opacity.placeholder) },
            '&:disabled': {
              cursor: 'not-allowed',
              color: theme.colors.text(theme.opacity.disabled),
              '::placeholder': { color: theme.colors.text(theme.opacity.disabled) },
            },
            '&:focus': { zIndex: 1 },
          }}
          disabled={disabled}
          {...props}
          type={type}
        />
        {!!endButtonIcon && (
          <IconButton
            css={{
              position: 'absolute',
              top: '50%',
              right: theme.space.md,
              transform: 'translateY(-50%)',
              zIndex: 1,
              opacity: 0.75,
            }}
            onClick={onClickEndButton}
            icon={endButtonIcon}
            disabled={disabled}
          />
        )}
      </Col>
    )
  }
)
