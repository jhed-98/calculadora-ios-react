import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../themes/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';
 
export const CalculadoraScreen = () => {

    const { 
        numeroAnterior,
        numero,
        limpiar,
        postNeg,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
     } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
        {
            (numeroAnterior !== '0') && (
                <Text style={styles.resultadoSub}> {numeroAnterior} </Text>
            )
        }
        
        <Text style={styles.resultado}
            numberOfLines={ 1 }
            adjustsFontSizeToFit
        >
            {numero}
        </Text>

        {/* Fila Button */}
         <View style={styles.fila}>
                {/* Button */} 
                <BotonCalc accion={limpiar} textoColor="white" texto="C" color="#ff0000" />
                <BotonCalc accion={postNeg} textoColor="black" texto="+/-" color="#9B9B9B" />
                <BotonCalc accion={btnDelete} textoColor="black" texto="<x" color="#9B9B9B" />
                <BotonCalc accion={btnDividir} textoColor="black" texto="/" color="#FF9427" />
                
         </View>

        {/* Fila Button */}
         <View style={styles.fila}>
                {/* Button */} 
                <BotonCalc accion={armarNumero} textoColor="white" texto="7" />
                <BotonCalc accion={armarNumero} textoColor="white" texto="8" />
                <BotonCalc accion={armarNumero} textoColor="white" texto="9" />
                <BotonCalc accion={btnMultiplicar} textoColor="black" texto="X" color="#FF9427" />
                
         </View>
         
        {/* Fila Button */}
        <View style={styles.fila}>
                {/* Button */} 
                <BotonCalc accion={armarNumero} textoColor="white" texto="4" />
                <BotonCalc accion={armarNumero} textoColor="white" texto="5" />
                <BotonCalc accion={armarNumero} textoColor="white" texto="6" />
                <BotonCalc accion={btnRestar} textoColor="black" texto="-" color="#FF9427" />
                
         </View>
         
        {/* Fila Button */}
        <View style={styles.fila}>
                {/* Button */} 
                <BotonCalc accion={armarNumero} textoColor="white" texto="1" />
                <BotonCalc accion={armarNumero} textoColor="white" texto="2" />
                <BotonCalc accion={armarNumero} textoColor="white" texto="3" />
                <BotonCalc accion={btnSumar} textoColor="black" texto="+" color="#FF9427" />
                
         </View>

        {/* Fila Button */}
        <View style={styles.fila}>
                {/* Button */}  
                <BotonCalc accion={armarNumero} textoColor="white" texto="0" ancho />
                <BotonCalc accion={armarNumero} textoColor="white" texto="." />
                <BotonCalc accion={calcular} textoColor="black" texto="=" color="#FF9427" />
                
         </View>

    </View>
  )
}
