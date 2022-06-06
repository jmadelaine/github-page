/** @jsxImportSource @emotion/react */

import { keyframes } from '@emotion/react'
import { Block } from 'components/layout'
import { FC } from 'react'

export const LoadingSpinner: FC<{ size?: number; className?: string }> = ({ size = 128, ...props }) => {
  const ballSize = size / 3
  const displacement = size / 4
  const shrinkScale = 0.8
  return (
    <Block
      data-tid="loading-spinner"
      css={{ width: `${size}px`, height: `${size}px`, filter: `url('#goo')` }}
      {...props}
    >
      <Block
        css={{
          width: `${size}px`,
          height: `${size}px`,
          animation: `${keyframes({
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          })} 1700ms linear infinite`,
        }}
      >
        {[displacement, -displacement].map(d => (
          <svg
            key={d}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            fill="currentColor"
            width={ballSize}
            height={ballSize}
            viewBox="0 0 2 2"
            css={{
              position: 'absolute',
              top: `${ballSize}px`,
              left: `${ballSize}px`,
              width: `${ballSize}px`,
              height: `${ballSize}px`,
              animation: `${keyframes({
                '0%': { transform: 'translateY(0) scale(1)' },
                '50%': { transform: `translateY(${d}px) scale(${shrinkScale})` },
                '100%': { transform: 'translateY(0) scale(1)' },
              })} 1500ms ease-in-out infinite`,
            }}
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
        ))}
      </Block>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation={size / 10} result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values={`1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${size / 4} -${size / 12}`}
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </Block>
  )
}

export const EncodingSpinner: FC<{ size?: number }> = ({ size = 128, ...props }) => {
  const squareSize = size / 5
  return (
    <Block data-tid="encoding-spinner" css={{ width: `${size}px`, height: `${size}px` }} {...props}>
      <Block
        css={{
          width: `${size}px`,
          height: `${size}px`,
          animation: `${keyframes({
            '0%': { transform: 'rotate(0deg)' },
            '25%': { transform: 'rotate(90deg)' },
            '50%': { transform: 'rotate(180deg)' },
            '75%': { transform: 'rotate(270deg)' },
            '100%': { transform: 'rotate(360deg)' },
          })} 10000ms infinite`,
        }}
      >
        {[
          [-1200, -1000, -800],
          [-1000, -800, -600],
          [-800, -600, -400],
        ].map((row, i) =>
          row.map((delay, j) => (
            <svg
              // eslint-disable-next-line react/no-array-index-key
              key={`${i}-${j}`}
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              fill="currentColor"
              width={squareSize}
              height={squareSize}
              viewBox="0 0 1 1"
              css={{
                position: 'absolute',
                borderRadius: `${size / 20}px`,
                animation: `${keyframes({
                  '0%': { transform: 'scale(1, 1)', opacity: 1 },
                  '100%': { transform: 'scale(0, 0)', opacity: 0 },
                })} 800ms alternate infinite`,
                animationDelay: `${delay}ms`,
                top: `${i * squareSize * 1.5 + squareSize * 0.5}px`,
                left: `${j * squareSize * 1.5 + squareSize * 0.5}px`,
                width: `${squareSize}px`,
                height: `${squareSize}px`,
              }}
            >
              <rect width="1" height="1" />
            </svg>
          ))
        )}
      </Block>
    </Block>
  )
}

export const MiniLoadingSpinner: FC<{ size?: number }> = ({ size = 32, ...props }) => {
  const ballSize = size / 4
  return (
    <Block data-tid="mini-loading-spinner" css={{ width: `${size}px`, height: `${size}px` }} {...props}>
      <Block css={{ width: `${size}px`, height: `${size}px` }}>
        {[0, 1, 2].map((d, i) => (
          <svg
            key={d}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            fill="currentColor"
            width={ballSize}
            height={ballSize}
            viewBox="0 0 2 2"
            css={{
              position: 'absolute',
              top: `${size / 2 - ballSize / 2}px`,
              left: `${i * 1.5 * ballSize}px`,
              width: `${ballSize}px`,
              height: `${ballSize}px`,
              transform: 'scale(0)',
              animation: `${keyframes({
                '0%': { transform: 'scale(0)' },
                '17%': { transform: 'scale(0)' },
                '50%': { transform: `scale(1)` },
                '83%': { transform: 'scale(0)' },
                '100%': { transform: 'scale(0)' },
              })} 1000ms ease-in-out infinite`,
              animationDelay: `${i * 166}ms`,
            }}
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
        ))}
      </Block>
    </Block>
  )
}

export const ButtonLoadingSpinner: FC<{ size?: string }> = ({ size = '1rem', ...props }) => {
  return (
    <span css={{ width: size, height: size }} {...props}>
      <span css={{ width: size, height: size }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          fill="currentColor"
          width={'100%'}
          height={'100%'}
          viewBox="0 0 2 2"
          css={{
            width: size,
            height: size,
            animation: `${keyframes({
              '0%': { transform: 'rotate(0)' },
              '100%': { transform: 'rotate(360deg)' },
            })} 1000ms linear infinite`,
          }}
        >
          <defs>
            <mask id="hole">
              <rect width="2" height="2" fill="white" />
              <circle cx="1" cy="1" r="0.67" fill="black" />
            </mask>
          </defs>
          <circle cx="1" cy="1" r="1" fill="currentColor" fillOpacity="0.33" mask="url(#hole)" />
          <path d="M1,0 A1,1 0 0,1 2,1 L1,1" fill="currentColor" mask="url(#hole)" />
        </svg>
      </span>
    </span>
  )
}
