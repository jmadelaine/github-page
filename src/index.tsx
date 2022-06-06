import App from 'App'
import { ThemeProvider } from 'theme/ThemeProvider'
import { I18nProvider } from 'i18n/I18nProvider'
import { BreakpointProvider } from 'theme/BreakpointProvider'
import { createRoot } from 'react-dom/client'
import { Buffer } from 'buffer'

/*
  Buffer is included by default when building with node but not with vite.
  So we have to manually declare buffer when doing vite builds.
  There is probably a cleaner way to do this but this works for the meantime.
*/
window.Buffer = Buffer

createRoot(document.getElementById('root')!).render(
  <BreakpointProvider>
    <ThemeProvider>
      <I18nProvider>
        <App />
      </I18nProvider>
    </ThemeProvider>
  </BreakpointProvider>
)
