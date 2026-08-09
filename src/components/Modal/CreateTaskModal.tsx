import { db } from "@/db/db";
import { tasks } from "@/db/schema";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { useState } from "react";
import { TextInput } from "react-native";
import BottomSheet from "./BottomSheet";

const CreateTaskModal = NiceModal.create(() => {
    const [name, setName] = useState<string>("");
    const [isSubmiting, setIsSubmitting] = useState<boolean>(false)
    const modal = useModal();

    const handleValide = async () => {
        const taskName = name.trim();
        if(taskName.length === 0 && isSubmiting) return;
        await db.insert(tasks).values({name: taskName});
        setIsSubmitting(true)
        modal.remove();
    }

    return (
        <BottomSheet visible={modal.visible} onClose={modal.remove} title="Nouvelle tâche" action={{title: "Ajouter", onPress: handleValide}}>
            <TextInput value={name} onChangeText={setName} placeholder="Nom de la tâche" placeholderTextColor={"grey"} className="bg-white rounded-xl font-sn text-black" />
        </BottomSheet>
    );
});

export default CreateTaskModal;