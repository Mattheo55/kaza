import { Papicons } from "@getpapillon/papicons";
import { View } from 'react-native';

interface IconBackgroundProps {
    icon: string,
    color: string
}

export default function IconBackground({icon, color}: IconBackgroundProps) {
  return (
    <View className="p-2 rounded-xl self-start" style={{backgroundColor: `${color}20`}}>
      <Papicons name={icon} size={18} color={color}/>
    </View>
  )
}