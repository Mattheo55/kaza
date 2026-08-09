import { db } from '@/db/db'
import { tasks } from '@/db/schema'
import { ChevronRight } from '@getpapillon/papicons'
import { desc } from 'drizzle-orm'
import { useLiveQuery } from 'drizzle-orm/expo-sqlite'
import { useRouter } from 'expo-router'
import { View } from 'react-native'
import Card from './Card'
import IconBackground from './IconBackground'
import TaskItem from './Task/TaskItem'
import Text from './Text'

export default function TaskModulCard() {
  const {data} = useLiveQuery(db.select().from(tasks).orderBy(desc(tasks.id)).limit(3))
  const router = useRouter();
  
  const handleClick = () => {
    router.push("/task");
  }

  return (
      <Card onPress={handleClick}>
        <View className='justify-between flex-row'>
          <View className='flex-row items-center gap-4'>
              <IconBackground icon='check' color='#0057ff'/>
              <Text bold>Tâches</Text>
          </View>
          <ChevronRight color='grey'/>
        </View>
        <View className='mt-5 gap-2'>
          {data.map(task => (
            <TaskItem key={task.id} task={task}/>
          ))}
        </View>
      </Card>
  )
}