/** @jsxImportSource @emotion/react */
import { forwardRef, ComponentProps } from 'react'
import { useTheme } from 'theme/ThemeProvider'
import { Button } from './Button'

type ButtonAsTextProps = ComponentProps<typeof Button> & {
  /** Styles button as a link */
  asLink?: boolean
}

/** A button that looks like text */
export const ButtonAsText = forwardRef<HTMLButtonElement, ButtonAsTextProps>(({ asLink, ...props }, ref) => {
  const { theme } = useTheme()

  return (
    <Button
      ref={ref}
      css={{
        ...(asLink && {
          color: theme.colors.link(),
          textDecoration: 'underline',
          display: 'inline',
        }),
        fontSize: 'inherit',
        lineHeight: 'inherit',
        verticalAlign: 'baseline',
      }}
      {...props}
    />
  )
})
