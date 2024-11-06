import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import * as Location from 'expo-location';

// Função para solicitar permissão de localização
const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    return status === 'granted';
};

const MyComponent = () => {
    useEffect(() => {
        const checkPermission = async () => {
            const permissionGranted = await requestLocationPermission();
            if (permissionGranted) {
                console.log('Permissão de localização concedida');
            } else {
                console.log('Permissão de localização não concedida');
            }
        };

        checkPermission();
    }, []);
    return(
        <></>
    )
};

export default MyComponent;
