/** @jsxImportSource @emotion/react */

import { Block, Flex, VisuallyHidden } from 'components/layout'
import { FC, MutableRefObject } from 'react'
import { useTheme } from 'theme/ThemeProvider'

export const Label: FC<{
  rref?: MutableRefObject<HTMLLabelElement | null>
  text: string
  required?: boolean
  position?: 'above' | 'before' | 'after' | 'hidden'
}> = ({ position = 'above', required, text, children, rref }) => {
  const { theme } = useTheme()

  const isInlineLabel = position === 'after' || position === 'before'

  const visibleLable = (
    <Block
      css={{
        ...(isInlineLabel && { flex: 1 }),
        display: 'inline-block',
        fontWeight: theme.text.weight.semibold,
        ...(required && { '&:after': { content: '"*"' } }),
      }}
    >
      {text}
    </Block>
  )

  return (
    <label css={{ flex: 1 }} ref={rref}>
      <VisuallyHidden>{text}</VisuallyHidden>
      <Flex
        direction={isInlineLabel ? 'row' : 'col'}
        gap={theme.space(isInlineLabel ? 'xxs' : 'sm')}
        {...(isInlineLabel && { align: 'center' })}
      >
        {(position === 'above' || position === 'before') && visibleLable}
        {children}
        {position === 'after' && visibleLable}
      </Flex>
    </label>
  )
}
