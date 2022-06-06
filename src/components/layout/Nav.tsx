/** @jsxImportSource @emotion/react */

import { forwardRef, HTMLAttributes } from 'react'

export const Nav = forwardRef<HTMLElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <nav ref={ref} css={{ boxSizing: 'border-box', position: 'relative' }} {...props} />
))
