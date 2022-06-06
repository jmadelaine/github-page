/** @jsxImportSource @emotion/react */
import { FC, forwardRef, ImgHTMLAttributes, useState } from 'react'
import { useTheme } from 'theme/ThemeProvider'
import { NoChildren } from 'types'

const ImgPlaceholder: FC<{ className?: string | undefined }> = props => {
  return (
    <svg viewBox="0 0 600 338" fill="currentColor" {...props}>
      <path
        css={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
        d="M260.1,129.1c-7.4,0-13.3,6-13.3,13.3v53.3c0,7.4,6,13.3,13.3,13.3h79.9c7.4,0,13.3-6,13.3-13.3v-53.3
			c0-7.4-6-13.3-13.3-13.3H260.1z M339.9,137.9h-79.9c-2.5,0-4.4,2-4.4,4.4v53.3c0,2.5,2,4.4,4.4,4.4h19.1l30.5-30.5
			c5.2-5.2,13.6-5.2,18.8,0l15.8,15.8v-43C344.4,139.9,342.4,137.9,339.9,137.9z M339.9,200.1h-48.2l24.3-24.3c1.7-1.7,4.5-1.7,6.3,0
			l21.7,21.7C343.3,199,341.7,200.1,339.9,200.1z"
      />
      <path
        css={{ fillRule: 'evenodd', clipRule: 'evenodd' }}
        d="M277.8,146.8c-7.4,0-13.3,6-13.3,13.3c0,7.4,6,13.3,13.3,13.3c7.4,0,13.3-6,13.3-13.3
			C291.1,152.8,285.2,146.8,277.8,146.8z M273.4,160.1c0-2.5,2-4.4,4.4-4.4s4.4,2,4.4,4.4c0,2.5-2,4.4-4.4,4.4
			S273.4,162.6,273.4,160.1z"
      />
    </svg>
  )
}

export const Img = forwardRef<
  HTMLImageElement,
  {
    alt: string | undefined
    src: string | undefined
    onLoad?: ImgHTMLAttributes<HTMLImageElement>['onLoad']
    className?: string | undefined
  } & NoChildren
>(({ alt, src, className, ...props }, ref) => {
  const { theme } = useTheme()
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {!isLoaded && <ImgPlaceholder className={className} css={{ color: theme.colors.text(0.15) }} />}
      <img
        onLoad={e => {
          props.onLoad?.(e)
          setIsLoaded(true)
        }}
        css={{ display: isLoaded ? 'block' : 'none' }}
        alt={alt}
        src={src}
        ref={ref}
        className={className}
        {...props}
      />
    </>
  )
})
