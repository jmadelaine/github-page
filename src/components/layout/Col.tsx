/** @jsxImportSource @emotion/react */
import { forwardRef, ComponentProps } from 'react'
import { Flex } from './Flex'

export const Col = forwardRef<HTMLDivElement, Omit<ComponentProps<typeof Flex>, 'direction'>>((props, ref) => (
  <Flex ref={ref} direction="col" {...props} />
))
