/** @jsxImportSource @emotion/react */
import { forwardRef, ComponentProps } from 'react'
import { VisuallyHidden } from './VisuallyHidden'
import { Flex } from './Flex'

export const FlexAsButton = forwardRef<
  HTMLDivElement,
  ComponentProps<typeof Flex> & { onClick?: () => void; alt?: string; disabled?: boolean }
>(({ onClick, direction = 'row', alt, children, disabled, ...props }, ref) => {
  return (
    <Flex
      ref={ref}
      css={{
        cursor: 'pointer',
        outline: 0,
        pointerEvents: 'auto',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
        '& > *:not(button):not(input):not(textarea):not([role=button])': { pointerEvents: 'none' },
      }}
      direction={direction}
      role="button"
      aria-label={alt}
      tabIndex={0}
      onClick={e => {
        // prevents this button firing child buttons
        e.preventDefault()
        // prevents child buttons firing this button
        if (e.target === e.currentTarget && !disabled) onClick?.()
      }}
      onKeyDown={e => {
        // prevents child onKeyDown events from firing this event
        if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ') && !disabled) onClick?.()
      }}
      {...props}
    >
      {!!alt && <VisuallyHidden>{alt}</VisuallyHidden>}
      {children}
    </Flex>
  )
})
