import { Text as RNText } from 'react-native';
import { twMerge } from "tailwind-merge";

interface KazaTextProps {
  children?: string | string[];
  className?: string;
  bold?: boolean;
}

export default function Text({children, className, bold}: KazaTextProps) {

  return (
    <RNText className={twMerge(bold ? "font-sn-bold" : "font-sn", className)}>{children}</RNText>
  )
}