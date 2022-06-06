import { Global } from '@emotion/react'
import { ComponentProps } from 'react'

export const globalStyle: ComponentProps<typeof Global>['styles'] = {
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    margin: 0,
    outline: 0,
    padding: 0,
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    WebkitTouchCallout: 'none',
  },
  html: {
    fontFamily: 'Inter, -apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif',
    fontWeight: 400,
    fontSize: '100%',
    lineHeight: 1.25,
    textSizeAdjust: '100%',
  },
  body: {
    MsContentZooming: 'none',
    textRendering: 'optimizeLegibility',
    touchAction: 'none',
    WebkitUserDrag: 'none',
    wordWrap: 'break-word',
  },
  'p, h1, h2, h3, h4, h5, h6': { fontSize: 'inherit' },
  // Ionic overrides
  '.alert-message.sc-ion-alert-ios': { fontSize: '1rem' },
}
