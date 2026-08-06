import { Text as RNText } from 'react-native'
import { twMerge } from "tailwind-merge"

interface KazaTextProps {
  children?: string,
  className?: string,
}

export default function Text({children, className}: KazaTextProps) {
  return (
    <RNText className={twMerge("font-sn", className)}>{children}</RNText>
  )
}