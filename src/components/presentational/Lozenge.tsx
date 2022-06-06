/** @jsxImportSource @emotion/react */
import { Row } from 'components/layout'
import { contrast } from 'helpers/color'
import { forwardRef } from 'react'
import { useTheme } from 'theme/ThemeProvider'
import { Text } from './Text'

type Variant = 'primary' | 'neutral' | 'dark' | 'light'

const useBackgroundColor = () => {
  const {
    theme: {
      colors: { primary, background },
    },
  } = useTheme()
  return {
    primary: primary(),
    neutral: background(1),
    dark: background.dark(1),
    light: background.light(1),
  }
}

export const Lozenge = forwardRef<HTMLDivElement, { variant?: Variant; text: string; className?: string }>(
  ({ variant = 'neutral', text, ...props }, ref) => {
    const { theme } = useTheme()
    return (
      <Row
        ref={ref}
        css={{
          blockSize: '1.25rem',
          color: contrast(useBackgroundColor()[variant]),
          backgroundColor: useBackgroundColor()[variant],
          borderRadius: theme.radius.sm,
          textTransform: 'uppercase',
          padding: theme.space.sm,
        }}
        align="center"
        distribute="center"
        {...props}
      >
        <Text variant="subtext" weight="semibold">
          {text}
        </Text>
      </Row>
    )
  }
)
