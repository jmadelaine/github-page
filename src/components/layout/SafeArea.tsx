/** @jsxImportSource @emotion/react */
import { ComponentProps, forwardRef } from 'react'
import { Col } from './Col'

const Top = forwardRef<HTMLDivElement, ComponentProps<typeof Col>>((props, ref) => (
  <Col ref={ref} css={{ marginTop: 'env(safe-area-inset-top)' }} {...props} />
))

const Bottom = forwardRef<HTMLDivElement, ComponentProps<typeof Col>>((props, ref) => (
  <Col ref={ref} css={{ marginBottom: 'env(safe-area-inset-bottom)' }} {...props} />
))

export const SafeArea = Object.assign(
  forwardRef<HTMLDivElement, ComponentProps<typeof Col>>((props, ref) => (
    <Col
      ref={ref}
      css={{ marginTop: 'env(safe-area-inset-top)', marginBottom: 'env(safe-area-inset-bottom)' }}
      {...props}
    />
  )),
  { Top, Bottom }
)
