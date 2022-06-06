import { useRef, useState, useEffect } from 'react'
import useIsMounted from './useIsMounted'

export const useDebounce = <T extends unknown>(value: T, ms: number): T => {
  const isMounted = useIsMounted()

  const [state, setState] = useState(value)

  const nextValueRef = useRef(value)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    if (value !== nextValueRef.current) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      nextValueRef.current = value
      timeoutRef.current = setTimeout(() => {
        if (isMounted()) setState(nextValueRef.current)
      }, ms)
    }
  }, [value, ms, isMounted])

  return state
}
