/** @jsxImportSource @emotion/react */
import { useTheme } from 'theme/ThemeProvider'
import { Trans } from 'react-i18next'
import { GuardBackgroundText } from './GuardBackground'
import { Col, Row } from 'components/layout'
import { Text } from 'components/presentational'
import { useTranslation } from 'i18n/I18nProvider'
import { Icon } from 'components/presentational/Icon'
import { ComponentProps, FC } from 'react'

export const TopBlurb = () => {
  const t = useTranslation('tsGuardian')
  const { theme } = useTheme()

  return (
    <Row distribute="center">
      <Row align="center" flex={1} distribute="between" css={{ maxWidth: '80rem', padding: theme.space('xl', 'lg') }}>
        <GuardBackgroundText />
        <Col gap={theme.space.xs}>
          <Text element="h1" size="xxl" weight="bold">
            {t('title')}
          </Text>
          <Text>
            <Trans
              i18nKey="tsGuardian:subtitle"
              components={{ highlight: <span css={{ color: theme.colors.primary() }} /> }}
            />
          </Text>
        </Col>
        <Row css={{ alignSelf: 'start' }} gap={theme.space.md}>
          <ExternalLinkButton icon="gitHub" to="https://github.com/jmadelaine/ts-guardian" />
          <ExternalLinkButton icon="npm" to="https://www.npmjs.com/package/ts-guardian" />
        </Row>
      </Row>
    </Row>
  )
}

const ExternalLinkButton: FC<{ icon: ComponentProps<typeof Icon>['icon']; to: string }> = ({ icon, to, ...props }) => {
  const { theme } = useTheme()
  return (
    <a
      css={{ color: theme.colors.text(), '&:hover': { color: theme.colors.primary() } }}
      target="_blank"
      rel="noreferrer"
      href={to}
      {...props}
    >
      <Icon icon={icon} />
    </a>
  )
}
