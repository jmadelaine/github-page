/** @jsxImportSource @emotion/react */

import { FC, ReactNode, useRef } from 'react'
import { Col } from './Col'
import { Row } from './Row'
import { SafeArea } from './SafeArea'

interface PageProps {
  isLoading?: boolean
  header?: ReactNode
  footer?: ReactNode
}

export const Page: FC<PageProps> = ({ children, header, footer, ...props }) => {
  const contentElRef = useRef<HTMLDivElement | null>(null)

  return (
    <Col {...props}>
      {!!header && <SafeArea.Top css={{ zIndex: 3 }}>{header}</SafeArea.Top>}
      <Col
        ref={contentElRef}
        flex={1}
        css={{
          ...(!header && { paddingTop: `env(safe-area-inset-top)` }),
          ...(!footer && { paddingBottom: `env(safe-area-inset-bottom)` }),
          minBlockSize: 0,
          zIndex: 1,
        }}
      >
        {children}
      </Col>
      {!!footer && <Row css={{ paddingBottom: `env(safe-area-inset-bottom)`, zIndex: 2 }}>{footer}</Row>}
    </Col>
  )
}
