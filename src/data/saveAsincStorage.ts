import AsyncStorage from '@react-native-async-storage/async-storage';

const isWeb = typeof window !== 'undefined' && window.localStorage;

const saveChecklistData = async (checklistData: any) => {
    

    try {
        const jsonValue = JSON.stringify(checklistData);
        
        if (isWeb) {
            localStorage.setItem('checklistData', jsonValue);
        } else {
            await AsyncStorage.setItem('checklistData', jsonValue);
        }
        console.log("Dados salvos com sucesso!");
    } catch (error) {
        console.error("Erro ao salvar dados:", error);
    }
};