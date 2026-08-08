import { View } from 'react-native';
import Card from './Card';
import IconBackground from './IconBackground';
import Text from './Text';

interface ModulCardProps {
    icon: string;
    color: string;
    title: string;
    description?: string;
}

export default function ModulCard({icon, color, title, description}: ModulCardProps) {
  return (
    <Card className='flex-1 self-stretch gap-2'>
        <IconBackground icon={icon} color={color} />
        <View>
            <Text bold>{title}</Text>
            <Text className='text-gray-300 text-wrap truncate' numberOfLines={2}>{description}</Text>
        </View>
    </Card>
  )
}