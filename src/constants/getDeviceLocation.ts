import Geolocation from "@react-native-community/geolocation";

import * as Location from 'expo-location';

export const getLocation = async (): Promise<{ latitude: number; longitude: number }> => {
    // Solicitar permissão de localização
    const { status } = await Location.requestForegroundPermissionsAsync();

    // Verificar se a permissão foi concedida
    if (status !== 'granted') {
        throw new Error('Permission to access location was denied');
    }

    // Obter a localização atual
    const location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
    });

    const { latitude, longitude } = location.coords;
    return { latitude, longitude };
};
