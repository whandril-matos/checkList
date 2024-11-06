// src/components/Popup.tsx
import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';

// Definindo as propriedades que o componente receberá
interface PopupProps {
    visible: boolean;  // Controla a visibilidade do modal
    message: string;   // Mensagem a ser exibida
    textButton: string; // Texto do botão
    onClose: () => void; // Função chamada ao fechar o modal
}

const Popup: React.FC<PopupProps> = ({ visible, message, textButton, onClose }) => {
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
                    
                    <TouchableOpacity style={styles.button}  onPress={onClose}>
                        <Text style={styles.textButomStyle}>{textButton}</Text>
                    </TouchableOpacity>
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
    

    button:{
        backgroundColor: "rgb(59 130 246)",
        paddingVertical: 15, 
        paddingHorizontal: 30, 
        borderRadius: 10, 
        alignItems: 'center',
        marginTop: 15, 
    },
    textButomStyle:{
        color:"white",
    },
});

export default Popup;
