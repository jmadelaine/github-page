const set = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

const get = (key: string): unknown => {
  try {
    const v = localStorage.getItem(key)
    return v === null ? undefined : JSON.parse(v)
  } catch {
    return undefined
  }
}

const remove = (key: string) => {
  try {
    localStorage.removeItem(key)
    return true
  } catch {
    return false
  }
}

export const storage = { get, set, remove }
