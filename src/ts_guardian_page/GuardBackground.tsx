/* eslint-disable react/no-array-index-key */
/** @jsxImportSource @emotion/react */
import { AbsoluteCol } from 'components/layout'
import { Text } from 'components/presentational'
import { useMemo } from 'react'
import { useBreakpoint } from 'theme/BreakpointProvider'
import { useTheme } from 'theme/ThemeProvider'

const guardText = [
  `isInstanceOf(RegExp)`,
  `isInstanceOf(Date)`,
  `is(['string', 'number'])`,
  `is(['number', isStringOrUndefined])`,
  `isArrayOf(isStringOrNumber)`,
  `isArrayOf(is('string').or('number'))`,
  `isArrayOf('string').orArrayOf('number')`,
  `isUndefined.orArrayOf('boolean')`,
  `isArrayOf('boolean')`,
  `isArrayOf('null')`,
  `isArrayOf('number')`,
  `isArrayOf('string')`,
  `is('boolean')`,
  `is('bigint')`,
  `is('null')`,
  `is('number')`,
  `is('string')`,
  `is('symbol')`,
  `is('undefined')`,
  `is('boolean').or('undefined')`,
  `is('null').or('undefined')`,
  `is('number').or('bigint')`,
  `is('string').or('number')`,
  `isBoolean`,
  `isNull`,
  `isNumber`,
  `isString`,
  `isUndefined`,
  `isBooleanOrNull`,
  `isNumberOrNull`,
  `isStringOrNull`,
  `isBooleanOrUndefined`,
  `isNumberOrUndefined`,
  `isStringOrUndefined`,
  `isSymbolOrUndefined`,
  `isNullOrUndefined`,
  `isLiterally('sm', 'md', 'lg')`,
  `isInstanceOf(Date)`,
  `isInstanceOf(RegExp)`,
  `isInstanceOf(Buffer)`,
]

const createRandomLines = (texts: string[], count: number) =>
  Array(count)
    .fill(undefined)
    .map(() =>
      Array(16)
        .fill(undefined)
        .map(() => texts[Math.floor(Math.random() * (texts.length - 1))])
    )

export const GuardBackgroundText = () => {
  const { theme, isDarkMode } = useTheme()
  const isDesktop = useBreakpoint('lg')

  const backgroundColor = theme.colors.background(Number(!isDarkMode))

  const lines = useMemo(() => createRandomLines(guardText, 8), [])

  const textColors = useMemo(() => {
    const colors = [theme.colors.primary(), theme.colors.text(0.375), theme.colors.text(0.75)]
    return lines.map(l => l.map(() => colors[Math.floor(Math.random() * colors.length)]))
  }, [lines, theme.colors])

  return (
    <AbsoluteCol css={{ pointerEvents: 'none', userSelect: 'none', overflow: 'hidden' }}>
      <AbsoluteCol
        css={{
          fontFamily: '"Share Tech Mono", monospace',
          opacity: isDarkMode ? (isDesktop ? 0.3 : 0.15) : isDesktop ? 0.4 : 0.3,
          top: '-0.25rem',
        }}
      >
        {lines.map((line, i) => (
          <Text key={i} css={{ whiteSpace: 'nowrap' }}>
            {line.map((t, ii) => (
              <span key={ii} css={{ color: textColors[i][ii] }}>
                {t}
              </span>
            ))}
          </Text>
        ))}
      </AbsoluteCol>
      <AbsoluteCol
        css={{
          background: `linear-gradient(90deg, ${backgroundColor} 0%, ${backgroundColor} 33%, transparent 66%, ${backgroundColor} 87.5%, ${backgroundColor} 100%)`,
        }}
      />
      <AbsoluteCol
        css={{
          background: `linear-gradient(0deg, ${backgroundColor} 0%, transparent 12.5%, transparent 87.5%, ${backgroundColor} 100%)`,
        }}
      />
    </AbsoluteCol>
  )
}
