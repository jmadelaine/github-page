/** @jsxImportSource @emotion/react */
import { ComponentProps, forwardRef } from 'react'
import { Lozenge } from './Lozenge'
import { useTheme } from 'theme/ThemeProvider'

export const Badge = forwardRef<
  HTMLDivElement,
  { variant?: ComponentProps<typeof Lozenge>['variant']; number: number }
>(({ variant, number, ...props }, ref) => {
  const { theme } = useTheme()
  return (
    <Lozenge
      ref={ref}
      {...props}
      css={{ borderRadius: theme.radius.max, blockSize: '1.5rem', minInlineSize: '1.5rem' }}
      variant={variant}
      text={String(number)}
    />
  )
})
