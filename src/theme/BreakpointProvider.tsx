import { FC, useCallback, useEffect, useLayoutEffect } from 'react'
import create from 'zustand'

export const appBreakpoints = { sm: 512, md: 992, lg: 1240 }

type Breakpoint = keyof typeof appBreakpoints
type State = { viewportWidth: number }
type Actions = { setViewportWidth: (viewportWidth: number) => void }

const defaultState: State = { viewportWidth: 0 }

const useStore = create<State & Actions>(set => ({
  ...defaultState,
  setViewportWidth: viewportWidth => set({ viewportWidth }),
}))

const useSetViewportWidth = () => useStore(s => s.setViewportWidth)

export const BreakpointProvider: FC = ({ children }) => {
  const setViewportWidth = useSetViewportWidth()
  const onResize = useCallback(() => setViewportWidth(window.innerWidth), [setViewportWidth])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [onResize])

  useLayoutEffect(onResize, [onResize])

  return <>{children}</>
}

export const useBreakpoint = (bp: Breakpoint | number) =>
  useStore(s => {
    if (typeof bp === 'string') return appBreakpoints[bp] <= s.viewportWidth
    return bp <= s.viewportWidth
  })
