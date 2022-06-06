/** @jsxImportSource @emotion/react */
import { forwardRef, HTMLAttributes } from 'react'

export const Grid = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & {
    cols?: number | string
    rows?: number | string
    colGap?: string
    rowGap?: string
  }
>(({ cols, rows, colGap, rowGap, ...props }, ref) => {
  return (
    <div
      ref={ref}
      css={{
        boxSizing: 'border-box',
        display: 'inline-grid',
        position: 'relative',
        ...(typeof cols === 'string' && { gridTemplateColumns: cols }),
        ...(typeof cols === 'number' && { gridTemplateColumns: '1fr '.repeat(cols).trimEnd() }),
        ...(typeof cols === 'undefined' && { gridAutoColumns: '1fr' }),
        ...(typeof rows === 'string' && { gridTemplateRows: rows }),
        ...(typeof rows === 'number' && { gridTemplateRows: '1fr '.repeat(rows).trimEnd() }),
        ...(typeof rows === 'undefined' && { gridAutoRows: '1fr' }),
        columnGap: colGap,
        rowGap,
      }}
      {...props}
    />
  )
})
