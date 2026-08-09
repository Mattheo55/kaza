import { ReactNode } from 'react';
import { Pressable, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface KazaTextProps {
    children: ReactNode,
    elevation?: boolean,
    className?: string;
    onPress?: () => void;
}

export default function Card({children, elevation, className, onPress}: KazaTextProps) {
  return (
    <View className={twMerge('bg-white rounded-xl p-5', elevation && 'elevation-sm', className)}>
      <Pressable onPress={onPress}>
        {children}
      </Pressable>
    </View>
  )
}