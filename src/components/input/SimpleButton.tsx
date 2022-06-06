/** @jsxImportSource @emotion/react */

import { useButtonVariantStyle } from 'theme/buttonVariants'
import { forwardRef, ComponentProps } from 'react'
import { useTheme } from 'theme/ThemeProvider'
import { Button } from './Button'

type Size = 'md' | 'lg'

interface ButtonProps extends ComponentProps<typeof Button> {
  variant?: Parameters<typeof useButtonVariantStyle>[0]
  size?: Size
}

export const SimpleButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'neutral', size = 'md', ...props }, ref) => {
    const { theme } = useTheme()

    const variantStyle = useButtonVariantStyle(variant)

    return (
      <Button
        ref={ref}
        css={{
          blockSize: size === 'lg' ? '3.75rem' : '2.5rem',
          borderRadius: { md: theme.radius.sm, lg: theme.radius.sm }[size],
          fontSize: theme.text.size.md,
          fontWeight: theme.text.weight.semibold,
          padding: size === 'lg' ? theme.space(0, 'xl') : theme.space(0, 'md'),
          ...variantStyle,
        }}
        {...props}
      />
    )
  }
)
