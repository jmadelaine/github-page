/** @jsxImportSource @emotion/react */
import { Button, TextArea } from 'components/input'
import { Block, Col, Flex, Row } from 'components/layout'
import { Text } from 'components/presentational'
import { darken } from 'helpers/color'
import { FC, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from 'theme/BreakpointProvider'
import { useTheme } from 'theme/ThemeProvider'

export const LiveExample = () => {
  const { t } = useTranslation('tsGuardian')
  const { theme, bp, isDarkMode } = useTheme()
  const [inputText, setInputText] = useState(`'Hello, World.'`)
  const [guardText, setGuardText] = useState(`is('string')`)
  const [isMatch, setIsMatch] = useState(true)

  const isMobile = !useBreakpoint('sm')

  const evaluate = useCallback(() => {
    try {
      // eslint-disable-next-line
      setIsMatch(Function(`return window.TSG.${guardText}(${inputText})`)())
    } catch {
      setIsMatch(false)
    }
  }, [guardText, inputText])

  // Evaluate once on load (timeout allows window.TSG to load)
  useEffect(() => {
    setTimeout(evaluate, 2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Evaluate whenever guardText or InputText changes
  useEffect(evaluate, [evaluate])

  return (
    <Row
      distribute="center"
      css={{
        background: theme.colors.background(0.5),
        borderTop: `1px solid ${theme.colors.text(0.125)}`,
        borderBottom: `1px solid ${theme.colors.text(0.125)}`,
      }}
    >
      <Col
        flex={1}
        distribute="center"
        gap={theme.space.lg}
        css={bp({
          padding: [theme.space.md, theme.space.xl],
          maxWidth: '80rem',
        })}
      >
        <Text element="h2" variant="heading" align="center">
          {t('live_example_heading')}
        </Text>
        <Flex
          direction={isMobile ? 'col' : 'row'}
          gap={theme.space.xl}
          css={bp({ paddingBottom: [theme.space.md, theme.space.xl] })}
        >
          <Col flex={1}>
            <TextArea
              css={{
                flex: 1,
                resize: 'none',
                background: theme.colors.background(isDarkMode ? 1 / 6 : 1),
                borderRadius: theme.radius.md,
                padding: theme.space.md,
                fontFamily: '"Share Tech Mono", monospace',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: theme.colors.text(0.125),
                '&:focus': { borderColor: theme.colors.text(0.5) },
                paddingTop: '1.75rem',
              }}
              value={inputText}
              onChange={e => setInputText(e.currentTarget.value)}
              rows={3}
              spellCheck={false}
            />
            <Text
              css={{
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                fontSize: '0.75rem',
                color: theme.colors.text(0.625),
                padding: '0.5rem 1rem',
                textTransform: 'uppercase',
              }}
            >
              {t('live_example_value_textbox_label')}
            </Text>
            <Row
              css={{
                pointerEvents: 'none',
                '& > *': { pointerEvents: 'auto' },
                position: 'absolute',
                top: 0,
                right: 0,
                padding: '0.375rem 1rem',
                fontSize: '0.875rem',
                color: theme.colors.primary(),
              }}
              gap="0.5rem"
            >
              <Button
                css={{ '&:hover': { color: darken(theme.colors.primary()) } }}
                onClick={() => setInputText(`'Hello, World.'`)}
              >
                {t('live_example_preset_string')}
              </Button>
              <Button css={{ '&:hover': { color: darken(theme.colors.primary()) } }} onClick={() => setInputText(`99`)}>
                {t('live_example_preset_number')}
              </Button>
              <Button
                css={{ '&:hover': { color: darken(theme.colors.primary()) } }}
                onClick={() => setInputText(`[1,2,3]`)}
              >
                {t('live_example_preset_array')}
              </Button>
              <Button
                css={{ '&:hover': { color: darken(theme.colors.primary()) } }}
                onClick={() => setInputText(`{ foo: 'bar', baz: 1 }`)}
              >
                {t('live_example_preset_object')}
              </Button>
            </Row>
          </Col>
          <Block
            css={{
              alignSelf: 'center',
              blockSize: '4rem',
              inlineSize: '4rem',
            }}
          >
            <Circle isSuccess={isMatch} />
          </Block>
          <Col flex={1}>
            <TextArea
              css={{
                flex: 1,
                resize: 'none',
                background: theme.colors.background(isDarkMode ? 1 / 6 : 1),
                borderRadius: theme.radius.md,
                padding: theme.space.md,
                fontFamily: '"Share Tech Mono", monospace',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: theme.colors.text(0.125),
                '&:focus': { borderColor: theme.colors.text(0.5) },
                paddingTop: '1.75rem',
              }}
              value={guardText}
              onChange={e => setGuardText(e.currentTarget.value)}
              rows={3}
              spellCheck={false}
            />
            <Text
              css={{
                position: 'absolute',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                fontSize: '0.75rem',
                color: theme.colors.text(0.625),
                padding: '0.5rem 1rem',
                textTransform: 'uppercase',
              }}
            >
              {t('live_example_type_guard_textbox_label')}
            </Text>
            <Row
              css={{
                pointerEvents: 'none',
                '& > *': { pointerEvents: 'auto' },
                position: 'absolute',
                top: 0,
                right: 0,
                padding: '0.375rem 1rem',
                fontSize: '0.875rem',
                color: theme.colors.primary(),
              }}
              gap="0.5rem"
            >
              <Button
                css={{ '&:hover': { color: darken(theme.colors.primary()) } }}
                onClick={() => setGuardText(`is('string')`)}
              >
                {t('live_example_preset_string')}
              </Button>
              <Button
                css={{ '&:hover': { color: darken(theme.colors.primary()) } }}
                onClick={() => setGuardText(`is('number')`)}
              >
                {t('live_example_preset_number')}
              </Button>
              <Button
                css={{ '&:hover': { color: darken(theme.colors.primary()) } }}
                onClick={() => setGuardText(`isArrayOf('number')`)}
              >
                {t('live_example_preset_array')}
              </Button>
              <Button
                css={{ '&:hover': { color: darken(theme.colors.primary()) } }}
                onClick={() => setGuardText(`is({ foo: 'string', baz: 'number' })`)}
              >
                {t('live_example_preset_object')}
              </Button>
            </Row>
          </Col>
        </Flex>
      </Col>
    </Row>
  )
}

const Circle: FC<{ isSuccess: boolean }> = ({ isSuccess }) => {
  const { theme } = useTheme()

  const size = '4rem'
  const radius = 0.4375
  const circumference = 2 * Math.PI * radius

  const circleProps = {
    cx: '0.5',
    cy: '0.5',
    r: String(radius),
    fill: 'none',
    stroke: isSuccess ? theme.colors.primary() : theme.colors.danger(),
    strokeWidth: String((1 - radius - 0.5) * 2),
  }

  return (
    <Block css={{ width: size, height: size }}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 1 1">
        <circle
          {...circleProps}
          strokeOpacity="0.33"
          css={{ width: size, height: size, transition: 'stroke 333ms linear' }}
        />
        <circle
          {...circleProps}
          strokeLinecap="round"
          css={{
            transformOrigin: '50% 50%',
            transform: `rotate(-90deg)`,
            transition: 'stroke-dashoffset 333ms ease-in-out, stroke 333ms linear',
            strokeDashoffset: isSuccess ? 0 : `${circumference}px`,
            strokeDasharray: `${circumference}px`,
          }}
        />
      </svg>
      <Block
        css={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          fontSize: '1.5rem',
          transform: `translate(-50%,-50%) scale(${isSuccess ? 1 : 0})`,
          transitionDuration: isSuccess ? '333ms' : '50ms',
          transitionTimingFunction: 'cubic-bezier(0,.55,.45,1)',
          transitionProperty: 'top, transform, opacity',
          transitionDelay: isSuccess ? '50ms' : '0ms',
        }}
      >
        {'🥳'}
      </Block>
      <Block
        css={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          fontSize: '1.5rem',
          transform: `translate(-50%,-50%) scale(${isSuccess ? 0 : 1})`,
          transitionDuration: isSuccess ? '50ms' : '333ms',
          transitionTimingFunction: 'cubic-bezier(0,.55,.45,1)',
          transitionProperty: 'top, transform, opacity',
          transitionDelay: isSuccess ? '0ms' : '50ms',
        }}
      >
        {'🥴'}
      </Block>
    </Block>
  )
}
