// src/components/SimpleChecklistForm.tsx
import React, { useState } from "react";
import { View,  Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useScrollToTop, NavigationProp  } from '@react-navigation/native';

import { RootStackParamList } from "../constants/typesLoca";
import { getLocation } from "../constants/getDeviceLocation";
import { generateIdWithTimestamp } from "../constants/nameToId"
import { getTimesTamp, getDataHoraISO } from "../constants/takeDate"
import Popup from '../components/popUp'


import emitirEvento from "../constants/emitEvent"
import MyComponent from '../constants/permissionMoba'
import { localEmitCaps } from "../constants/localEmitCaps"



type SimpleChecklistFormProps = {
    navigation: NavigationProp<RootStackParamList, 'SimpleChecklistForm'>;
};

const SimpleChecklistForm:  React.FC<SimpleChecklistFormProps> = ({ navigation }) => {
    
    const ref = React.useRef(null);

    useScrollToTop(ref);
    //dataBase
    const [type, setType] = useState("");
    const [amountOfMilk, setAmountOfMilk] = useState("");
    const [numberOfCows, setNumberOfCows] = useState("");
    const [farmCity, setFarmCity] = useState("");
    const [farmName, setFarmName] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [hadSupervision, setHadSupervision] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    


    //states of popUp
    const [alet, setAlerts] = useState([""])
    const [alertVisible, setAlertVisible] = useState(false)
    const [goToHome, setGoToHome] = useState(false)
    const toggleModal = () => {
        setAlertVisible(!alertVisible);
    };
    
    
    
    //filter to only numbers
    const OnlyNumber = (text: any, setValue: any): void => {
        
        if (/^\d*$/.test(text)) {
            setValue(text);
        }
    };
    
    // validates the data
    function validateData(){
        const noResp:Array<string> = []

        if (from == "") noResp.push("Nome do Fazendeiro");
        if (hadSupervision == "") noResp.push("Fiscalização Manual");
        if (to == "") noResp.push("Nome do Fiscal");
        if (farmCity == "") noResp.push("Cidade da Fazenda");
        if (farmName == "") noResp.push("Nome da Fazenda");
        if (type == "") noResp.push("Tipo da Lista");
        if (amountOfMilk == "") noResp.push("Quantidade de Leite Produzido");
        if (numberOfCows == "") noResp.push("Número de Cabeças de Gado")
        
        if (noResp.length > 0) {
            setAlerts([])
            setAlerts(() => [
                "Ops, essas perguntas não foram respondidas:",
                ...noResp,
            ]);} else {
            // Se todos os campos estiverem preenchidos, limpa o estado e prossegue
            setAlerts([])
            setAlerts(["Todos os campos foram preenchidos. Dados salvos com sucesso!"]);
            
        }

        return noResp.length
    }

    const handleSubmit = () => {

        const timesTamp = getTimesTamp()
        const getDHISO = getDataHoraISO()
        const hadSupervisionB = hadSupervision == "Sim" ? true : false ;
        const makeId = generateIdWithTimestamp(farmName, timesTamp)
        const checkData = validateData()

        getLocation().then((location) => { setLatitude(location.latitude);setLongitude(location.longitude);}).catch(() => {setLatitude(0);setLongitude(0)});
        
        const checklistData = {
            id: makeId,
            type: type,
            amount_of_milk_produced: parseInt(amountOfMilk),
            number_of_cows_head: parseInt(numberOfCows),
            from: from, 
            to: to,
            hadSupervision: hadSupervisionB,
            farmCity: farmCity,
            farmName:farmName,
            updatedAt: getDHISO,
            createdAt: getDHISO,
        };
        
        if(checkData === 0) {
            const caps = localEmitCaps(
                checklistData.id,
                checklistData.type,
                checklistData.amount_of_milk_produced,
                checklistData.number_of_cows_head,
                checklistData.hadSupervision,
                checklistData.farmName,
                checklistData.farmCity,
                checklistData.from,
                checklistData.to,
                latitude,
                longitude,
                checklistData.createdAt,
                checklistData.updatedAt,
                false
            )
            emitirEvento("CapsForm", caps)
            setGoToHome(!goToHome)
            
        } else{
            toggleModal()
        }
        
    };

    return (
        
        
            
            <ScrollView contentContainerStyle={styles.container} ref={ref}>
                <View style={styles.container}>
                    <MyComponent></MyComponent>
                        <Text style={styles.label}>Nome Do fazendeiro</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o nome do fazendeiro aqui"
                                value={from}
                                onChangeText={setFrom}
                            />
                        <Text style={styles.label}>Houve uma fiscalização manual?:</Text>
                            <RNPickerSelect
                                onValueChange={(hadSupervision) => setHadSupervision(hadSupervision)}
                                items={[
                                    { label: "Sim", value: "Sim" },
                                    { label: "Não", value: "Não" },
                                ]}
                                placeholder={{ label: "Selecione uma opção"}}
                                style={{
                                    inputAndroid: styles.picker,
                                    inputIOS: styles.picker,
                                    inputWeb: styles.picker,
                                }}
                            />
                        
                        
                        <Text style={styles.label}>Nome Do fiscal</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o nome do fiscal aqui"
                            value={to}
                            onChangeText={setTo}
                        />

                        <Text style={styles.label}>Cidade da fazenda</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite a cidade da fazenda aqui"
                            value={farmCity}
                            onChangeText={setFarmCity}
                        />

                        <Text style={styles.label}>Nome da fazenda</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o nome da fazenda aqui"
                            value={farmName}
                            onChangeText={setFarmName}
                        />


                        <Text style={styles.label}>Tipo da lista:</Text>
                        <RNPickerSelect
                            
                            onValueChange={(value) => setType(value)}
                            items={[
                                { label: "BPA", value: "BPA" },
                                { label: "Antibiótico", value: "Antibiótico" },
                                { label: "BPF", value: "BPF" },
                            ]}
                            placeholder={{ label: "Selecione uma opção" }}
                            
                            style={{
                                inputAndroid: styles.picker,
                                inputIOS: styles.picker,
                                inputWeb: styles.picker,
                                
                            }}
                            
                        />
                        
                        

                        <Text style={styles.label}>Quantidade de Leite Produzido (em litros)</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Apenas números"
                            keyboardType="numeric"
                            value={amountOfMilk}
                            onChangeText={(amountOfMilk) => OnlyNumber(amountOfMilk, setAmountOfMilk)}
                        />

                        <Text style={styles.label}>Número de Cabeças de Gado</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Apenas números"
                            keyboardType="numeric"
                            value={numberOfCows}
                            onChangeText={(numberOfCows) => OnlyNumber(numberOfCows, setNumberOfCows)}
                        />

                        
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                            <Text style={styles.textButom}>Clique Aqui</Text>
                        </TouchableOpacity>
                        
                        <Popup
                            visible={alertVisible}
                            message={alet.join("\n")}
                            textButton = "OK!"
                            onClose={toggleModal}
                        />

                        <Popup
                            visible={goToHome}
                            message={alet.join("\n")}
                            textButton = "OK!"
                            onClose={() => {navigation.navigate('second'), setGoToHome(!goToHome)}}
                        />
                
                </View>
                    
        </ScrollView>
                

    );
};

const styles = StyleSheet.create({
    
    container: {
        padding: 20,
        paddingTop: 0,
        backgroundColor:"rgb(59 130 246)",
    },
    
    label: {
        color:"white",
        fontSize: 16,
        marginBottom: 10,
        marginTop: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        backgroundColor: "white",
    },

    textButom:{
        color:"black",
    },

    button:{
        backgroundColor: 'white',
        paddingVertical: 15, 
        paddingHorizontal: 30,
        borderRadius: 10, 
        alignItems: 'center',
        marginTop: 25, 
    },
    
    picker: {
        height: 50,
        width: "100%",
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        
        color: 'black', 
    },
    selectedText: {
        marginTop: 15,
        fontSize: 16,
        color: "blue",
    },
});

export default SimpleChecklistForm;
