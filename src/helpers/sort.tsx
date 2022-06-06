/* eslint-disable @typescript-eslint/consistent-type-assertions */

type SortParams<T extends unknown> = [a: number, b: number] | [a: string, b: string] | [(x: T) => number | string]
type SortReturnType<T extends unknown, TArgs extends SortParams<T>> = TArgs extends [number, number] | [string, string]
  ? number
  : (a: T, b: T) => number

export const byAscending = <T extends unknown, TArgs extends SortParams<T>>(
  ...args: TArgs
): SortReturnType<T, TArgs> => {
  const [a0, a1] = args
  if (typeof a0 === 'number') {
    return (a0 - (a1 as number)) as SortReturnType<T, TArgs>
  } else if (typeof a0 === 'string') {
    return (a0.toLowerCase() < (a1 as string).toLowerCase() ? -1 : 1) as SortReturnType<T, TArgs>
  } else {
    return ((a: T, b: T) => {
      const va = a0(a)
      const vb = a0(b)
      if (typeof va === 'string') {
        return va.toLowerCase() < (vb as string).toLowerCase() ? -1 : 1
      }
      return va - (vb as number)
    }) as SortReturnType<T, TArgs>
  }
}

export const byDescending = <T extends unknown, TArgs extends SortParams<T>>(
  ...args: TArgs
): SortReturnType<T, TArgs> => {
  const [a0, a1] = args
  if (typeof a0 === 'number') {
    return ((a1 as number) - a0) as SortReturnType<T, TArgs>
  } else if (typeof a0 === 'string') {
    return ((a1 as string).toLowerCase() < a0.toLowerCase() ? -1 : 1) as SortReturnType<T, TArgs>
  } else {
    return ((a: T, b: T) => {
      const va = a0(a)
      const vb = a0(b)
      if (typeof va === 'string') {
        return (vb as string).toLowerCase() < va.toLowerCase() ? -1 : 1
      }
      return (vb as number) - va
    }) as SortReturnType<T, TArgs>
  }
}
