/** @jsxImportSource @emotion/react */

import {
  forwardRef,
  HTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
  ReactElement,
  Children,
  ComponentProps,
} from 'react'
import { FlexAsButton } from './FlexAsButton'
import { Row } from './Row'

const Item = forwardRef<HTMLLIElement, ComponentProps<typeof Row> & { onClick?: () => void }>(
  ({ onClick, children, align, distribute, flex, grow, shrink, basis, gap, ...props }, ref) => {
    const Inner = onClick ? FlexAsButton : Row

    return (
      <li ref={ref} css={{ boxSizing: 'border-box', position: 'relative' }}>
        <Inner
          align={align ?? 'center'}
          distribute={distribute}
          flex={flex}
          grow={grow}
          shrink={shrink}
          basis={basis}
          gap={gap}
          onClick={onClick}
          {...props}
        >
          {children}
        </Inner>
      </li>
    )
  }
)

export const List: ForwardRefExoticComponent<
  HTMLAttributes<HTMLUListElement> & RefAttributes<HTMLUListElement> & { spacer?: ReactElement }
> & { Item: typeof Item } = Object.assign(
  forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement> & { spacer?: ReactElement }>(
    ({ spacer, children, ...props }, ref) => (
      <ul
        ref={ref}
        css={{
          boxSizing: 'border-box',
          position: 'relative',
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
        }}
        {...props}
      >
        {spacer
          ? Children.map(children, (c, i) =>
              c ? (
                <>
                  {i !== 0 && spacer}
                  {c}
                </>
              ) : null
            )
          : children}
      </ul>
    )
  ),
  { Item }
)
