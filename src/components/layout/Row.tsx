/** @jsxImportSource @emotion/react */
import { forwardRef, ComponentProps } from 'react'
import { Flex } from './Flex'

export const Row = forwardRef<HTMLDivElement, Omit<ComponentProps<typeof Flex>, 'direction'>>((props, ref) => (
  <Flex ref={ref} direction="row" {...props} />
))
