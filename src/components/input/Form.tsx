/** @jsxImportSource @emotion/react */

import { Col } from 'components/layout'
import { FC, HTMLAttributes, ComponentProps, forwardRef } from 'react'
import { useTheme } from 'theme/ThemeProvider'
import { SimpleButton } from './SimpleButton'

const Submit = forwardRef<HTMLButtonElement, Omit<ComponentProps<typeof SimpleButton>, 'type' | 'variant'>>(
  (props, ref) => {
    return <SimpleButton ref={ref} type="submit" variant="primary" {...props} />
  }
)

interface GroupProps {
  legend?: string
}

const Group: FC<GroupProps> = ({ legend, children, ...props }) => {
  const { theme } = useTheme()
  return (
    <fieldset css={{ border: 0, padding: 0 }} {...props}>
      {!!legend && (
        <legend
          css={{
            fontWeight: theme.font.weight.semibold,
            padding: 0,
            marginBottom: theme.space.sm,
            color: theme.colors.text(0.5),
          }}
        >
          {legend}
        </legend>
      )}
      <Col flex={1} gap={theme.space.sm}>
        {children}
      </Col>
    </fieldset>
  )
}

type FormProps = HTMLAttributes<HTMLFormElement> & { gap?: string }

export const Form: FC<FormProps> & { Group: typeof Group; Submit: typeof Submit } = ({
  onSubmit,
  gap,
  children,
  ...props
}) => {
  const { theme } = useTheme()

  return (
    <form
      css={{ display: 'flex', flexDirection: 'column', flex: 1 }}
      noValidate={true}
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault()
        onSubmit?.(e)
      }}
      {...props}
    >
      <Col gap={gap ?? theme.space.md} flex={1}>
        {children}
      </Col>
    </form>
  )
}

Form.Group = Group
Form.Submit = Submit
