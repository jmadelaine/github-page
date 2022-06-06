/** @jsxImportSource @emotion/react */
import { forwardRef, HTMLAttributes, ReactElement, Children } from 'react'

const distributeOptions = {
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
}

const alignOptions = { start: 'flex-start', center: 'center', end: 'flex-end', stretch: 'stretch' }

export const Flex = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & {
    direction?: 'col' | 'row'
    gap?: string | ReactElement
    distribute?: keyof typeof distributeOptions
    align?: keyof typeof alignOptions
    grow?: number
    shrink?: number
    basis?: number | string
    flex?: number | string
  }
>(({ direction = 'row', gap, distribute, align, grow, shrink, basis, flex, children, ...props }, ref) => {
  const marginForGap = direction === 'col' ? 'marginBottom' : 'marginRight'

  return (
    <div
      ref={ref}
      css={{
        flex,
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        alignItems: align ? alignOptions[align] : alignOptions.stretch,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: direction === 'col' ? 'column' : 'row',
        justifyContent: distribute ? distributeOptions[distribute] : distributeOptions.start,
        position: 'relative',
        '& > *': {
          flexShrink: 0,
          // css 'gap' not yet supported in Safari and iOS native, so we use margin instead
          ...(typeof gap === 'string' && gap && { [marginForGap]: gap, '&:last-child': { [marginForGap]: 0 } }),
        },
      }}
      {...props}
    >
      {/* TODO: how do we prevent a null values in position 0 from causing a spacer to be rendered */}
      {gap && typeof gap !== 'string'
        ? Children.map(children, (c, i) =>
            c ? (
              <>
                {i !== 0 && gap}
                {c}
              </>
            ) : null
          )
        : children}
    </div>
  )
})
