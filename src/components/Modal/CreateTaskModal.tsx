import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { TextInput } from "react-native";
import BottomSheet from "./BottomSheet";

const CreateTaskModal = NiceModal.create(() => {
    const modal = useModal();

    const handleValide = () => {
        modal.remove();
    }

    return (
        <BottomSheet visible={modal.visible} onClose={modal.remove} title="Nouvelle tâche" action={{title: "Enregistrer", onPress: handleValide}}>
            <TextInput placeholder="Nom de la tâche" placeholderTextColor={"grey"} className="bg-white rounded-xl font-sn text-black" />
        </BottomSheet>
    );
});

export default CreateTaskModal;