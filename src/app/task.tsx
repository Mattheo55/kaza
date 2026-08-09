import CreateTaskModal from '@/components/Modal/CreateTaskModal'
import ModulePage from '@/components/ModulePage'
import TaskItem from '@/components/Task/TaskItem'
import { db } from '@/db/db'
import { tasks } from '@/db/schema'
import NiceModal from '@ebay/nice-modal-react'
import { eq } from 'drizzle-orm'
import { useLiveQuery } from 'drizzle-orm/expo-sqlite'
import { FlatList } from 'react-native'

export default function task() {
    const {data: task} = useLiveQuery(db.select().from(tasks))
    const taskLeft = task.filter(t => t.isComplete === false);

    const handleOpenModal = () => {
        NiceModal.show(CreateTaskModal)
    }

    const clearAllTaskComplete = async () => {
        await db.delete(tasks).where(eq(tasks.isComplete, true))
    }

  return (
    <ModulePage
        title='Tâches'
        subtitle={`${taskLeft.length} à faire`}
        actions={[
            {title: "Ajouter une tâche", icon: "add", onPress: handleOpenModal},
            {title: "Supprimer les tâches terminées", icon: "trash", onPress: clearAllTaskComplete},
        ]}
    >
        <FlatList
            data={task}
            renderItem={({item}) => <TaskItem task={item} />}
            className='p-5 bg-white rounded-xl flex-none'
            contentContainerClassName='gap-5'
        />
    </ModulePage>
  )
}