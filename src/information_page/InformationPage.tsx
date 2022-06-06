/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react'
import { Text } from 'components/presentational/Text'
import { NoChildren } from 'types'
import { Col, Page } from 'components/layout'
import { useTheme } from 'theme/ThemeProvider'

export default ({
  feature,
  title,
  message,
  ...props
}: { feature?: ReactNode; title?: string; message?: string } & NoChildren) => {
  const { theme } = useTheme()
  return (
    <Page {...props}>
      <Col flex={1} distribute="center" align="center" gap={theme.space.xl} css={{ padding: theme.space.xl }}>
        <Col flex={1} distribute="end">
          {feature}
        </Col>
        <Col gap={theme.space.lg}>
          {!!title && (
            <Text css={{ textAlign: 'center' }} element="h1" weight="bold" size="xxl">
              {title}
            </Text>
          )}
          {!!message && <Text css={{ textAlign: 'center' }}>{message}</Text>}
        </Col>
        {/* Empty col with flex: 1 keeps title and message positioned center, while feature is above them  */}
        <Col flex={1} />
      </Col>
    </Page>
  )
}
