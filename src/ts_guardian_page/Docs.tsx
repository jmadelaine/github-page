/** @jsxImportSource @emotion/react */
import { Col } from 'components/layout'
import { useTheme } from 'theme/ThemeProvider'
import { html } from './docs.md'
import Prism from 'prismjs'
Prism.manual = true

const addTsClasses = (code: string) => Prism.highlight(code, Prism.languages.typescript, 'typescript')

const replaceHTMLTokens = (str: string) =>
  str.replaceAll('&gt;', '>').replaceAll('&lt;', '<').replaceAll('&quot;', '"').replaceAll('&amp;', '&')

export const Docs = () => {
  const { theme, isDarkMode } = useTheme()
  let html1 = replaceHTMLTokens(html)

  let lastEndIndex = 0
  let matches = Array.from(html1.matchAll(/<code class="language-(.+?)">([\S\s]+?)<\/code>/g))
  let html2 = ''
  for (const match of matches) {
    const [group1, language, code] = match
    const index = match.index
    if (index === undefined) continue

    html2 += html1.slice(lastEndIndex, index)
    lastEndIndex = index + group1.length

    switch (language) {
      case 'typescript':
      case 'ts': {
        html2 += group1.replace(code, addTsClasses(code))
        break
      }

      // case 'html': {
      //   codeHighlightedHtml = codeHighlightedHtml.replace(code, Prism.highlight(code, Prism.languages.markup, 'markup'))
      //   break
      // }
      default: {
        html2 += group1
        break
      }
    }
  }
  html2 += html1.slice(lastEndIndex)

  return (
    <Col align="center" css={{ padding: '1rem' }}>
      <Col
        dangerouslySetInnerHTML={{ __html: html2 }}
        gap="1.5rem"
        css={{
          maxWidth: 'min(720px,100%)',
          lineHeight: '1.25rem',
          fontSize: '0.9375rem',
          color: theme.colors.text(isDarkMode ? 0.75 : 0.875),
          '& *': { fontSize: 'inherit', color: 'inherit' },
          '& h1': { fontSize: '2.5rem', fontWeight: 700, color: theme.colors.text() },
          '& h2': {
            color: theme.colors.text(),
            fontSize: '1.875rem',
            fontWeight: 700,
            padding: '1rem 2rem',
            borderBottom: `1px solid ${theme.colors.text(0.375)}`,
            paddingTop: '2rem',
            marginLeft: '-2rem',
            marginRight: '-2rem',
            '&::first-of-type': { paddingTop: 0 },
          },
          '& h3': {
            color: theme.colors.text(0.875),
            fontSize: '1.375rem',
            fontWeight: 500,
            padding: '0.5rem 0',
            paddingTop: '1.5rem',
            '&::first-of-type': { paddingTop: 0 },
          },
          '& h4': { fontSize: '1rem', fontWeight: 500, color: theme.colors.text(0.875) },
          '& blockquote': {
            backgroundColor: theme.colors.warning(0.03125),
            fontSize: '0.875rem',
            color: theme.colors.text(0.625),
            padding: '0.5rem 1rem',
            borderLeft: `1px solid ${theme.colors.warning()}`,
            borderRadius: '0 0.5rem 0.5rem 0',
          },
          '& code': {
            color: '#fff',
            fontFamily: '"Share Tech Mono", monospace',
          },
          '& ul': { marginLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' },
          '& code:not(.language-ts)': { color: theme.colors.primary() },
          '& code .token.keyword': { color: '#c792ea' },
          '& code .token.string': { color: '#c3e88d' },
          '& code .token.number': { color: '#f07178' },
          '& code .token.function': { color: '#82aaff' },
          '& code .token.operator': { color: '#89ddff' },
          '& code .token.punctuation': { color: '#ffd700' },
          '& code .token.comment': { color: '#fff', opacity: 0.25 },
          '& code .token.comment *': { color: '#fff !important' },
          '& code .token.regex-delimiter,.token.regex-source': { color: '#89ddff' },
          '& code .token.class-name': { color: '#ffcb6b' },
          '& code .token.builtin': { color: '#ffcb6b' },
          '& pre': {
            padding: '1rem 2rem',
            backgroundColor: theme.colors.background.dark(1),
            border: `1px solid ${theme.colors.background.dark(2)}`,
            borderRadius: '0.5rem',
            overflowX: 'auto',
            marginLeft: '-2rem',
            marginRight: '-2rem',
            fontSize: 'inherit',
          },
          '& table': { borderSpacing: `0px` },
          '& thead th': {
            borderBottom: `1px solid ${theme.colors.text(0.25)}`,
            backgroundColor: theme.colors.text(0.25),
            padding: '0.25rem',
          },
          '& tbody td': {
            borderBottom: `1px solid ${theme.colors.text(0.125)}`,
            padding: '0.25rem',
            borderLeft: `1px solid ${theme.colors.text(0.125)}`,
            borderRight: `1px solid ${theme.colors.text(0.125)}`,
          },
          '& .heading-anchor': {
            position: 'absolute',
            left: 0,
            textDecoration: 'none',
            transition: 'opacity 160ms',
            opacity: 0.5,
            '&:hover': { opacity: 1 },
          },
          '& h3 .heading-anchor': { transform: 'translateX(-150%)' },
        }}
      />
    </Col>
  )
}
