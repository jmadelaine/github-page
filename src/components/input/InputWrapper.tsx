/** @jsxImportSource @emotion/react */

import { Col } from 'components/layout'
import { Text } from 'components/presentational/Text'
import { FC, ComponentProps, useEffect, useRef } from 'react'
import { useTheme } from 'theme/ThemeProvider'
import { Label } from './Label'

type InputWrapperProps = {
  label: string
  required?: boolean
  labelPosition?: ComponentProps<typeof Label>['position']
  help?: string | false
  error?: string | false
}

export const InputWrapper: FC<InputWrapperProps> = ({
  required,
  label,
  labelPosition,
  help,
  error,
  children,
  ...props
}) => {
  const { theme } = useTheme()

  const labelRef = useRef<HTMLLabelElement | null>(null)

  useEffect(() => {
    const labelEl = labelRef.current
    if (!labelEl) return

    const inputChild = labelEl.querySelector('input') ?? labelEl.querySelector('textarea')

    if (!inputChild) return

    // Remove required asterisks from placeholder
    const placeholderTextWithoutAsterisk = inputChild.placeholder.replace(/[*]+$/, '')
    // Set placeholder based on required state
    inputChild.placeholder =
      required && labelPosition === 'hidden' ? `${placeholderTextWithoutAsterisk}*` : placeholderTextWithoutAsterisk
  }, [required, labelPosition])

  return (
    <Col gap={theme.space.xxs} {...props}>
      <Label rref={labelRef} position={labelPosition} required={required} text={label}>
        {children}
      </Label>

      {!!error && (
        <Text variant="subtext" weight="semibold" css={{ color: theme.colors.danger() }}>
          {error}
        </Text>
      )}

      {!!help && (
        <Text variant="subtext" css={{ color: theme.colors.text(0.5) }}>
          {help}
        </Text>
      )}
    </Col>
  )
}
