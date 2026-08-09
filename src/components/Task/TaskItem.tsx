import { db } from '@/db/db';
import { Task, tasks } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { View } from 'react-native';
import CheckBox from '../CheckBox';
import Text from '../Text';

interface TaskItemProps {
    task: Task
}

export default function TaskItem({task}: TaskItemProps) {
    const handleChangeValue = async () => {
        await db.update(tasks).set({isComplete: !task.isComplete}).where(eq(tasks.id, task.id))
    }

  return (
    <View className='flex-row items-center gap-2'>
        <CheckBox value={task.isComplete} onValueChange={handleChangeValue} />
        <Text>{task.name}</Text>
    </View>
  )
}