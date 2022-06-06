/** @jsxImportSource @emotion/react */
import { useTheme } from 'theme/ThemeProvider'
import { Trans } from 'react-i18next'
import { GuardBackgroundText } from './GuardBackground'
import { Col, Row } from 'components/layout'
import { Text } from 'components/presentational'
import { SimpleButton } from 'components/input'
import { useTranslation } from 'i18n/I18nProvider'

export const TopBlurb = () => {
  const t = useTranslation('tsGuardian')
  const { theme, bp } = useTheme()

  return (
    <Row distribute="center">
      <Row align="center" flex={1} css={{ blockSize: '40vh', maxWidth: '80rem' }}>
        <GuardBackgroundText />
        <Col css={bp({ paddingLeft: [theme.space.md, theme.space.xl] })} gap={theme.space.lg}>
          <Text element="h1" size="xxl" weight="bold">
            <Trans
              i18nKey="tsGuardian:title"
              components={{ br: <br />, highlight: <span css={{ color: theme.colors.primary() }} /> }}
            />
          </Text>
          <Row gap={theme.space.md}>
            <SimpleButton variant="primary" size="lg">
              {t('docs_button')}
            </SimpleButton>
            <SimpleButton size="lg" css={{ color: theme.colors.primary() }}>
              {t('source_code_button')}
            </SimpleButton>
          </Row>
        </Col>
      </Row>
    </Row>
  )
}
