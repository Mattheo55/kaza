import { ReactNode } from 'react';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface KazaTextProps {
    children: ReactNode,
    elevation?: boolean,
    className?: string;
}

export default function Card({children, elevation, className}: KazaTextProps) {
  return (
    <View className={twMerge('bg-white rounded-xl p-5', elevation && 'elevation-sm', className)}>
      {children}
    </View>
  )
}