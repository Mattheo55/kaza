import ModulePage from '@/components/ModulePage'

export default function task() {
  return (
    <ModulePage
        title='Tâches'
        subtitle='0 à faire'
        actions={[
            {title: "Nouvelle tâche", icon: "add"}
        ]}
    >

    </ModulePage>
  )
}