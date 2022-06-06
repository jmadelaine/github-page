/** @jsxImportSource @emotion/react */

import { forwardRef, ComponentProps } from 'react'
import { Button } from './Button'
import { Icon } from 'components/presentational/Icon'

export const IconButton = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<typeof Button>, 'size'> & ComponentProps<typeof Icon>
>(({ icon, size = 'md', ...props }, ref) => {
  const buttonSize = { xs: '1rem', sm: '1.5rem', md: '2rem', lg: '3rem' }[size]
  return (
    <Button ref={ref} css={{ blockSize: buttonSize, inlineSize: buttonSize, borderRadius: '50%' }} {...props}>
      <Icon
        css={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        icon={icon}
        size={size}
      />
    </Button>
  )
})
