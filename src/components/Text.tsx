import { Text as RNText, TextProps } from 'react-native';
import { twMerge } from "tailwind-merge";

interface KazaTextProps extends TextProps {
  children?: string | string[];
  className?: string;
  bold?: boolean;
}

export default function Text({children, className, bold, ...props}: KazaTextProps) {

  return (
    <RNText className={twMerge(bold ? "font-sn-bold" : "font-sn", className)} {...props}>{children}</RNText>
  )
}