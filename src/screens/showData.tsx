// src/components/DataDisplayScreen.tsx

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../constants/typesLoca";

type DataDisplayScreenRouteProp = RouteProp<RootStackParamList, 'DataDisplayScreen'>;

const DataDisplayScreen: React.FC = () => {
    const route = useRoute<DataDisplayScreenRouteProp>();
    const { data } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.container}>
                <Text style={styles.label}>Dados da Verificação</Text>

                <Text style={styles.label}>Nome do Fazendeiro:</Text>
                <Text style={styles.label}>{data.from}</Text>

                <Text style={styles.label}>Fiscalização Manual:</Text>
                <Text style={styles.label}>{data.hadSupervision}</Text>

                <Text style={styles.label}>Nome do Fiscal:</Text>
                <Text style={styles.label}>{data.to}</Text>

                <Text style={styles.label}>Cidade da Fazenda:</Text>
                <Text style={styles.label}>{data.farmCity}</Text>

                <Text style={styles.label}>Nome da Fazenda:</Text>
                <Text style={styles.label}>{data.farmName}</Text>

                <Text style={styles.label}>Tipo da Lista:</Text>
                <Text style={styles.label}>{data.type}</Text>

                <Text style={styles.label}>Quantidade de Leite Produzido (em litros):</Text>
                <Text style={styles.label}>{data.amountOfMilk}</Text>

                <Text style={styles.label}>Número de Cabeças de Gado:</Text>
                <Text style={styles.label}>{data.numberOfCows}</Text>

                <Text style={styles.label}>Latitude:</Text>
                <Text style={styles.label}>{data.latitude}</Text>

                <Text style={styles.label}>Longitude:</Text>
                <Text style={styles.label}>{data.longitude}</Text>
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
});
export default DataDisplayScreen;
