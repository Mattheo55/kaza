import { FABAction } from '@/type/FABAction'
import { Papicons } from '@getpapillon/papicons'
import { useState } from 'react'
import { Pressable, TouchableOpacity, View } from 'react-native'
import Text from './Text'

interface MultiFABProps {
    actions: FABAction[]
}

export default function MultiFAB({actions}: MultiFABProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <View className='absolute bottom-20 right-10 items-end transition-all'>
            {isOpen && (
                <View className='bg-white rounded-2xl mb-4 mr-2 elevation-sm'>
                    {actions.map(action => (
                        <Pressable key={action.title} onPress={action.onPress} className='flex-row gap-2 items-center p-4'>
                            <Papicons name={action.icon} color='#0057ff'/>
                            <Text>{action.title}</Text>
                        </Pressable>
                    ))}
                </View>
            )}
            <TouchableOpacity className='bg-[#0057FF] rounded-full w-[50px] h-[50px] elevation-sm items-center justify-center z-50' onPress={handleOpen}>
                <Papicons name={isOpen ? "cross" : "add"} color='white' size={30} />
            </TouchableOpacity>
        </View>
    )
}