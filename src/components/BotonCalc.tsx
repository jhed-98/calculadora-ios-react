import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props {
    texto: string;
    color?: string;
    textoColor?: string;
    ancho?: boolean;
    // position?: 'br' |  'bl';
    accion: (numeroTexto: string) => void;
}

export const BotonCalc = ( {texto,color = "#2D2D2D",textoColor ="black", ancho=false, accion} : Props) => {
  return (
    <TouchableOpacity
        onPress={() => accion ( texto)}
    >
        <View style={{
        ...styles.button,
        backgroundColor: color,
        width: (ancho) ? 180:80
        }}>
            <Text style={{
                ...styles.buttonTexto,
                color: textoColor
            }}>
                {texto}
            </Text>
        </View>
    </TouchableOpacity>
  )
}
