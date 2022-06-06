import { DependencyList, useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useAnyEffect = (callback: () => any, deps?: DependencyList) => {
  useEffect(() => {
    callback()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, ...(deps ?? [])])
}
