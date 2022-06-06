export const log = {
  error: (error: string | Error, customData?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error(error, customData)
    }
  },
}
