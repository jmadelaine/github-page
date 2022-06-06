/** @jsxImportSource @emotion/react */

import { forwardRef, PropsWithChildren } from 'react'
import { BuiltTheme, useTheme } from 'theme/ThemeProvider'

type TextProps = {
  element?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  variant?: 'body1' | 'body2' | 'heading' | 'subheading' | 'subtext' | 'button'
  format?: 'truncate' | 'preserve' | 'default'
  align?: 'start' | 'center' | 'end'
  weight?: keyof BuiltTheme['text']['weight']
  size?: keyof BuiltTheme['text']['size']
  className?: string
}

type ElementRef = HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement

const getVariant = (theme: BuiltTheme, variant: NonNullable<TextProps['variant']>) => {
  return {
    body1: { fontSize: theme.text.size.md, fontWeight: theme.text.weight.normal },
    body2: { fontSize: theme.text.size.sm, fontWeight: theme.text.weight.normal },
    subtext: { fontSize: theme.text.size.xs, fontWeight: theme.text.weight.normal },
    heading: { fontSize: theme.text.size.lg, fontWeight: theme.text.weight.semibold },
    subheading: { fontSize: theme.text.size.md, fontWeight: theme.text.weight.semibold },
    button: { fontSize: theme.text.size.md, fontWeight: theme.text.weight.semibold },
  }[variant]
}

export const Text = forwardRef<ElementRef, PropsWithChildren<TextProps>>(
  (
    { element: Element = 'div', format = 'default', variant = 'body1', align, weight, size, children, ...props },
    ref
  ) => {
    const { theme } = useTheme()
    const v = getVariant(theme, variant)
    return (
      <Element
        ref={ref}
        css={{
          boxSizing: 'border-box',
          position: 'relative',
          textAlign: align,
          ...v,
          ...(!!weight && { fontWeight: theme.text.weight[weight] }),
          ...(!!size && { fontSize: theme.text.size[size] }),
          ...(format === 'truncate'
            ? {
                /* Add aria-label with full text, and wrap truncated text with aria-ignore */
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                flex: 1,
              }
            : format === 'preserve'
            ? { whiteSpace: 'pre-wrap', wordWrap: 'break-word' }
            : undefined),
        }}
        {...props}
      >
        {children}
      </Element>
    )
  }
)
