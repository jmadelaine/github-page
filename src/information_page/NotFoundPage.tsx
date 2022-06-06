/** @jsxImportSource @emotion/react */
import { useTranslation } from 'i18n/I18nProvider'
import { NoChildren } from 'types'
import { Text } from 'components/presentational'
import InformationPage from './InformationPage'

export default ({
  message,
  title,
  ...props
}: {
  title?: string
  message?: string
} & NoChildren) => {
  const t = useTranslation('information')
  return (
    <InformationPage
      feature={
        <Text variant="heading" css={{ fontSize: '5.625rem', textAlign: 'center' }}>
          {t('not_found_status_code')}
        </Text>
      }
      title={title || t('not_found_title')}
      message={message}
      {...props}
    />
  )
}
