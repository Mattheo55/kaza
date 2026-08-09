import CreateTaskModal from '@/components/Modal/CreateTaskModal'
import ModulePage from '@/components/ModulePage'
import { db } from '@/db/db'
import { tasks } from '@/db/schema'
import NiceModal from '@ebay/nice-modal-react'
import { useLiveQuery } from 'drizzle-orm/expo-sqlite'

export default function task() {
    const {data: task} = useLiveQuery(db.select().from(tasks))
    const taskLeft = task.filter(t => t.isComplete === false);

    const handleOpenModal = () => {
        NiceModal.show(CreateTaskModal)
    }

  return (
    <ModulePage
        title='Tâches'
        subtitle={`${taskLeft.length} à faire`}
        actions={[
            {title: "Ajouter une tâche", icon: "add", onPress: handleOpenModal},
            {title: "Supprimer les tâches finis", icon: "trash"},
        ]}
    >

    </ModulePage>
  )
}