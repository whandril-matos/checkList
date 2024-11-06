import React from 'react';
import { View, Text, Pressable, Modal, StyleSheet } from 'react-native';

// Definindo as propriedades que o componente receberá
interface alert {
    visible: boolean;  
    message: string;   
    onClose: () => void;
}

const Popup: React.FC<alert> = ({ visible, message, onClose }) => {
    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.message}>{message}</Text>
                    <Button title="Fechar" onPress={onClose} />
                    <Pressable></Pressable>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        
        
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    message: {
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default alert;
