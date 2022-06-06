/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react'
import { AbsoluteCol } from './AbsoluteCol'
import { useTheme } from 'theme/ThemeProvider'

type BackdropProps = { isVisible: boolean; hide?: () => void }

export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(({ isVisible, hide, ...props }, ref) => {
  const { theme, isDarkMode } = useTheme()
  return (
    <AbsoluteCol
      ref={ref}
      css={{
        cursor: 'pointer',
        opacity: isVisible ? (isDarkMode ? 0.5 : 0.35) : 0,
        backgroundColor: '#000',
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: `opacity ${theme.transitionMillis.sh}ms`,
      }}
      onClick={hide}
      {...props}
    />
  )
})
