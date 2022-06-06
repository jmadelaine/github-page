import { createContext, useContext } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createSafeContext = <T extends any>(errorMessage?: string) => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const Context = createContext<T>(undefined as unknown as T)
  const useCtx = () => {
    const ctx = useContext(Context)
    if (ctx === undefined) throw new Error(errorMessage || 'Context Provider is missing')
    return ctx
  }
  return Object.assign(Context, { useContext: useCtx })
}
