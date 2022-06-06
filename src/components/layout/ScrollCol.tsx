/** @jsxImportSource @emotion/react */
import { ComponentProps, forwardRef } from 'react'
import { Col } from './Col'

export const ScrollCol = forwardRef<HTMLDivElement, ComponentProps<typeof Col>>((props, ref) => (
  <Col ref={ref} flex="1 1 0" css={{ minBlockSize: 0, overflowY: 'auto' }} {...props} />
))
