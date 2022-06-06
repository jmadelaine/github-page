/** @jsxImportSource @emotion/react */

import { forwardRef, ReactNode } from 'react'

export const VisuallyHidden = forwardRef<HTMLSpanElement, { children?: ReactNode }>(({ ...props }, ref) => {
  return (
    <span
      ref={ref}
      css={{
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: '1px',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
      }}
      {...props}
    />
  )
})
