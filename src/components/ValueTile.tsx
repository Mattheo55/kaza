import { View } from 'react-native';
import Text from './Text';

interface ValueTileProps {
    title: string;
    children: string | string[]; // value
}

export default function ValueTile({title, children}: ValueTileProps) {
  return (
    <View>
      <Text className='text-sm text-gray-300'>{title}</Text>
      <Text className='text-[#0057FF]' bold>{children}</Text>
    </View>
  )
}