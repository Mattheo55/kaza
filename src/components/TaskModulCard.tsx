import { ChevronRight } from '@getpapillon/papicons'
import { useRouter } from 'expo-router'
import { Pressable, View } from 'react-native'
import Card from './Card'
import IconBackground from './IconBackground'
import Text from './Text'

export default function TaskModulCard() {
  const router = useRouter();
  
  const handleClick = () => {
    router.push("/task");
  }

  return (
    <Pressable onPress={handleClick}>
      <Card>
        <View className='justify-between flex-row'>
          <View className='flex-row items-center gap-4'>
              <IconBackground icon='check' color='#0057ff'/>
              <Text bold>Tâches</Text>
          </View>
          <ChevronRight color='grey'/>
        </View>
      </Card>
    </Pressable>
  )
}