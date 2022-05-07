import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo:{
        flex: 1,
        backgroundColor: 'black'
    },
    calculadoraContainer:{
        flex: 1,
        paddingHorizontal: 20, 
        justifyContent: 'flex-end'
    },
    resultado:{
        color: 'white',
        fontSize: 60,
        textAlign: "right",
        marginBottom: 10
    },
    resultadoSub:{
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: "right"
    },
    fila:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },

    button:{
        height: 80,
        width: 80,
        backgroundColor: '#9B9B9B',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal:10
    },
    buttonTexto:{
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold'
    }
})