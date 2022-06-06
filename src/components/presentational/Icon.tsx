/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { BuiltTheme, useTheme } from 'theme/ThemeProvider'
import { NoChildren } from 'types'
import * as Icons from 'theme/icons'

type RemoveIconSuffix<T extends string> = T extends `${infer Rest}Icon` ? Rest : T
type IconName = RemoveIconSuffix<Uncapitalize<keyof typeof Icons>>

const convertToIconKey = <T extends IconName>(iconName: T): `${Capitalize<T>}Icon` =>
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  `${iconName.slice(0, 1).toUpperCase()}${iconName.slice(1)}Icon` as `${Capitalize<T>}Icon`

export const Icon: FC<{ icon: IconName; size?: keyof BuiltTheme['icon']; className?: string } & NoChildren> = ({
  icon,
  size = 'md',
  ...props
}) => {
  const { theme } = useTheme()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const C: any = Icons[convertToIconKey(icon)]
  const s = theme.icon[size]
  return <C css={{ width: s, height: s }} {...props} />
}
