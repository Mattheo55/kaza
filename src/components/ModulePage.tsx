import { FAbAction } from '@/type/FABAction'
import { Home } from '@getpapillon/papicons'
import { useRouter } from 'expo-router'
import { ReactNode } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MultiFAB from './MultiFAB'
import Text from './Text'

interface ModulCardProps {
    children?: ReactNode,
    title?: string,
    subtitle?: string,
    actions?: FAbAction[];
}

export default function ModulePage({children, title, subtitle, actions}: ModulCardProps) {
    const router = useRouter();

    const handleBackHome = () => {
        router.back();
    }

  return (
    <SafeAreaView className='flex-1 p-5'>
        <View>
            <Text className='text-3xl' bold>{title}</Text>
            <Text className='text-gray-300 text-sm'>{subtitle}</Text>
        </View>
        {children}
        <TouchableOpacity className='bg-white rounded-full w-[50px] h-[50px] items-center justify-center absolute bottom-20 left-10 elevation-sm z-50' onPress={handleBackHome}>
            <Home color='#0057FF' size={30}/>
        </TouchableOpacity>
        {actions && <MultiFAB actions={actions}/>}
    </SafeAreaView>
  )
}