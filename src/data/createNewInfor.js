// src/data/ChecklistService.js
import { realm } from "./RealmConfig";
import { Platform } from 'react-native';


export function addChecklist({
    id,
    type,
    amount_of_milk_produced,
    number_of_cows_head,
    had_supervision,
    farmName,
    farmCity,
    from,
    to,
    locationLatitude,
    locationlongitude,
    created_at,
    updated_at,
    inNetWork
}) {
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
        const Realm = require('realm');
        try {
            realm.write(() => {
                realm.create("Checklist", {
                    id,
                    type,
                    amount_of_milk_produced,
                    number_of_cows_head,
                    had_supervision,
                    farmName,
                    farmCity,
                    from,
                    to,
                    locationLatitude,
                    locationlongitude,
                    created_at,
                    updated_at,
                    inNetWork,
                });
            });
            return "Checklist added successfully!";
        } catch (error) {
            console.error("Error adding checklist:", error);
            throw new Error("Failed to add checklist. Please try again.");
        } 
    } else {
        // Se for web ou outro, você pode deixar a variável como null
        const Realm = null;
    }
}


