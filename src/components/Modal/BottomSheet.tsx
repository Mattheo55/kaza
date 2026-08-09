import { Action } from "@/type/Action";
import { ReactNode } from "react";
import { TouchableOpacity, View } from "react-native";
import Modal from 'react-native-modal';
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../Text";

interface BottomSheetProps {
    children: ReactNode;
    visible: boolean;
    onClose: () => void;
    title?: string;
    action?: Action
}

const BottomSheet = ({ children, visible, onClose, title, action }: BottomSheetProps) => {
    return (
        <Modal isVisible={visible} onBackdropPress={onClose} animationIn="slideInUp" animationOut="slideOutDown" onDismiss={onClose} style={{ justifyContent: "flex-end", margin: 0 }} swipeDirection={['down']} onSwipeComplete={onClose} avoidKeyboard>

                <SafeAreaView className="rounded-t-2xl p-5 bg-[#F8F7F4]">
                    <Text className="text-2xl" bold>{title}</Text>
                    <View className="my-5">
                        {children}
                    </View>
                    <View className="flex-row gap-4">
                        <TouchableOpacity className="border rounded-xl py-4 items-center border-gray-300 flex-1" onPress={onClose}>
                            <Text>Annuler</Text>
                        </TouchableOpacity>
                        {action && (
                            <TouchableOpacity className="rounded-xl py-4 items-center bg-[#0057ff] flex-1" onPress={action.onPress}>
                                <Text className="text-white">{action.title}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </SafeAreaView>
        </Modal>
    );
}

export default BottomSheet;