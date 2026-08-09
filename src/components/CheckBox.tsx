import { Check } from '@getpapillon/papicons';
import { TouchableOpacity } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface CheckBoxProps {
    value: boolean;
    onValueChange: () => void;
}

export default function CheckBox({value, onValueChange}: CheckBoxProps) {
  return (
    <TouchableOpacity className={twMerge('h-6 w-6 rounded-full items-center justify-center', value ? "bg-[#0057ff]" : "border border-[#0057ff]")} onPress={onValueChange} activeOpacity={0.7}>
        {value && <Check size={14} color='white'/>}
    </TouchableOpacity>
  )
}