import { useRef, useState } from "react";

 
enum Operadores {
    sumar,restar,multiplicar,dividir
}

export const useCalculadora = () => {
  
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setnumeroAnterior] = useState('0');

    const finishOperation = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0');
        setnumeroAnterior('0');
    }
    const armarNumero = (numeroTexto: string) => {

        // No aceptar doble Punto
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            // Punto decimal
            if (numeroTexto === '.') return setNumero(numero + numeroTexto)
            // Evaluar si es otro cero y hay otro punto
            if (numeroTexto=== '0' && numero.includes('.')) return setNumero(numero + numeroTexto)
            //Evaluar si es diferente de cero y no tiene un punto
            if (numeroTexto !== '0' && !numero.includes('.')) return setNumero(numeroTexto)
            //Evitar 0000.0
            if (numeroTexto === '0' && !numero.includes('.')) return setNumero(numero)
         }



        setNumero(numero + numeroTexto);
    }

    const btnDelete= () =>{
        let negativo = '';
        let numeroTemp = numero;

        if(numero.includes('-')){
            negativo='-';
            numeroTemp = numero.substr(1);
        }

        if(numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0,-1));
        }else{
            setNumero('0');
        }

    }

    const changeNumAnterior = () => {
        if(numero.endsWith('.')){
            setnumeroAnterior(numero.slice(0,-1));
        }else{
            setnumeroAnterior(numero);
        }
 
        setNumero('0');
    }
    

    const postNeg = () => {
        if(numero.includes('-')){
            setNumero( numero.replace('-',''));
        }else{
            setNumero( '-' + numero);
        }
    }

    const btnDividir = () =>{
        changeNumAnterior();
        finishOperation.current = Operadores.dividir;
    }
    
    const btnMultiplicar = () =>{
        changeNumAnterior();
        finishOperation.current = Operadores.multiplicar;
    }
    
    const btnRestar = () =>{
        changeNumAnterior();
        finishOperation.current = Operadores.restar;
    }
    
    const btnSumar = () =>{
        changeNumAnterior();
        finishOperation.current = Operadores.sumar;
    }

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);
         
        switch ( finishOperation.current ){
            case Operadores.sumar:
                setNumero( `${ num1 + num2 }` )
                break;
            case Operadores.restar:
                setNumero( `${ num2 - num1 }` )
                break;
            case Operadores.multiplicar:
                setNumero( `${ num1 * num2 }` )
                break;
            case Operadores.dividir:
                // setNumero( `${ num2 / num1 }` )
                
                const result = Number(`${ num2 / num1 }`); 

                if (!isFinite(result)) {
                    setNumero('división no valida')
                } else {
                    setNumero(`${(result)}`);      
                }

                break;                    
            default:
                break;
        }
        
        setnumeroAnterior('0');
    }

    return {
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
    }
}
