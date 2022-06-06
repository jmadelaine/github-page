/** @jsxImportSource @emotion/react */
import { SimpleButton } from 'components/input'
import { AbsoluteCol, Col } from 'components/layout'
import { Text } from 'components/presentational'
import { useTranslation } from 'i18n/I18nProvider'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'theme/ThemeProvider'

export default () => {
  const t = useTranslation('information')
  const { theme } = useTheme()
  const navigate = useNavigate()
  return (
    <AbsoluteCol flex={1} distribute="center" align="center" gap={theme.space.xl} css={{ padding: theme.space.lg }}>
      <Col gap={theme.space.md}>
        <Text css={{ textAlign: 'center' }} element="h1" weight="bold" size="xxl">
          {t('something_went_wrong_title')}
        </Text>
        <Text css={{ textAlign: 'center' }}>{t('something_went_wrong_message')}</Text>
      </Col>
      <SimpleButton onClick={() => navigate('/')}>{t('something_went_wrong_go_back_button')}</SimpleButton>
    </AbsoluteCol>
  )
}
