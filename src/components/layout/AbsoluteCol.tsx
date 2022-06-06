/** @jsxImportSource @emotion/react */
import { ComponentProps, forwardRef } from 'react'
import { Col } from './Col'

export const AbsoluteCol = forwardRef<HTMLDivElement, ComponentProps<typeof Col>>((props, ref) => (
  <Col ref={ref} css={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} {...props} />
))
