/** @jsxImportSource @emotion/react */
import { IconButton } from 'components/input'
import { Row } from 'components/layout'
import { Text } from 'components/presentational'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'theme/ThemeProvider'

export const Header: FC = () => {
  const { t } = useTranslation('tsGuardian')
  const { theme, bp, isDarkMode, setIsDarkMode } = useTheme()

  return (
    <Row distribute="center">
      <Row
        flex={1}
        align="center"
        distribute="between"
        css={bp({
          paddingLeft: [theme.space.lg, theme.space.lg],
          paddingRight: [theme.space.lg, theme.space.lg],
          blockSize: '4rem',
          maxWidth: '80rem',
        })}
      >
        <Text size="xl" weight="bold">
          {t('app_name')}
        </Text>
        <Row align="center" gap={theme.space.md} css={{ blockSize: '100%' }}>
          <IconButton
            icon={isDarkMode ? 'darkTheme' : 'lightTheme'}
            onClick={() => setIsDarkMode(v => !v)}
            aria-hidden="true"
          />
          <Nav />
        </Row>
      </Row>
    </Row>
  )
}

const Nav = () => {
  const { t } = useTranslation('tsGuardian')
  const { theme } = useTheme()

  const navLinks = [
    { label: t('nav_docs'), to: '/docs' },
    { label: t('nav_github'), to: '/examples' },
  ]

  return (
    <Row gap={theme.space.sm}>
      {navLinks.map(l => (
        <Text key={l.to}>{l.label}</Text>
      ))}
    </Row>
  )
}
