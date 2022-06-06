import { ReactElement, FC } from 'react'
import {
  render as tlRender,
  configure as tlConfigure,
  screen as tlScreen,
  waitFor as tlWaitFor,
  act as tlAct,
} from '@testing-library/react'
import { I18nProvider } from 'i18n/I18nProvider'
import { ThemeProvider } from 'theme/ThemeProvider'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ue from '@testing-library/user-event'
import { SupportedLanguage } from 'i18n/i18nInstance'
import { BreakpointProvider } from 'theme/BreakpointProvider'

export const screen = tlScreen
export const waitFor = tlWaitFor
export const act = tlAct
export const userEvent = ue

tlConfigure({ testIdAttribute: 'data-tid' })

const MockRouter: FC<{ route?: string; routeSuffix?: string }> = ({ children, route = '/', routeSuffix }) => {
  window.history.replaceState(
    {},
    '',
    // Replace any trailing '*' or '/' on route before appending suffix
    `${route.replace(/\*$/, '').replace(/\/$/, '')}${routeSuffix ? `/${routeSuffix}` : ''}`
  )
  // Allows testing components that implement "useLocation" and "useParams"
  return (
    <BrowserRouter>
      <Routes>
        <Route path={route} element={<>{children}</>} />
        {/* Error boundary redirects to something went wrong page, so this route
         * prevent infinite loop when testing error boundary */}
        <Route path="/something-went-wrong" element={<div>{'Something went wrong'}</div>} />
        {/* Empty catch all route prevents errors when changing to unmatched routes during tests */}
        <Route path="*" element={null} />
      </Routes>
    </BrowserRouter>
  )
}

export const render = (
  component: ReactElement,
  options?: { route?: string; routeSuffix?: string; i18n?: { language: SupportedLanguage } }
) => {
  // Deliberately not returning render result. Use 'screen' to query the DOM.
  tlRender(component, {
    wrapper: ({ children }) => (
      <BreakpointProvider>
        <ThemeProvider>
          {/* Setting language to cimode will print out translation keys instead of translations */}
          {/* eslint-disable-next-line @typescript-eslint/consistent-type-assertions */}
          <I18nProvider language={options?.i18n?.language ?? ('cimode' as unknown as 'en-NZ')}>
            <MockRouter route={options?.route} routeSuffix={options?.routeSuffix}>
              {children}
            </MockRouter>
          </I18nProvider>
        </ThemeProvider>
      </BreakpointProvider>
    ),
  })
}
