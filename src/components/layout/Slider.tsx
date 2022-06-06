/** @jsxImportSource @emotion/react */
import { forwardRef, ReactNode } from 'react'
import { Col } from './Col'
import { Row } from './Row'
import { useTheme } from 'theme/ThemeProvider'
import { NoChildren } from 'types'

export const Slider = forwardRef<
  HTMLDivElement,
  { start: ReactNode; end: ReactNode; isOpen: boolean; ms?: number } & NoChildren
>(({ start, end, isOpen, ms }, ref) => {
  const { theme } = useTheme()

  return (
    <Row flex={1} css={{ minBlockSize: 0, maxInlineSize: '100%' }}>
      <Row
        style={{ left: isOpen ? '-100%' : '0%' }}
        ref={ref}
        flex="0 0 200%"
        css={{
          maxInlineSize: '200%',
          transition: `left ${ms ?? theme.transitionMillis.md}ms ease`,
        }}
      >
        <Col flex="0 0 50%" css={{ maxInlineSize: '50%' }}>
          {start}
        </Col>
        <Col flex="0 0 50%" css={{ maxInlineSize: '50%' }}>
          {end}
        </Col>
      </Row>
    </Row>
  )
})
