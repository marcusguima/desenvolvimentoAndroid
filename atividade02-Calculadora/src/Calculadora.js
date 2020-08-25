import React,{useState, Fragment} from 'react'
import {Text, View, TextInput, Button, StyleSheet, Alert} from 'react-native'



export default props => {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);

    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    
    let resultado;

    function somar(){
        resultado = n1 + n2;
        Alert.alert("Resposta da Soma: " + String(resultado));
    }

    function subtrair(){
        resultado = n1 - n2;
        Alert.alert("Resposta da Subtração: " + String(resultado));
    }

    function multiplicar(){
        resultado = n1 * n2;
        Alert.alert("Resposta da Multiplicação: " + String(resultado));
    }

    function dividir(){
        if(n2 == 0){
            Alert.alert("Erro: Não é possível dividir por zero!")

        }
        else{
            resultado = n1 / n2;
            Alert.alert("Resposta da Divisão: " + String(resultado));
        }
        
    }
    
    
    
    return (    
    <React.Fragment>
        <View style={styles.view1}>
            <Text style={styles.text}>Calculadora</Text>
        </View>

        <View>
            
            <TextInput
                style={styles.input}
                keyboardType="decimal-pad"
                placeholder="Digite o Primeiro Número"
                value= {numero1}
                onChangeText={setNumero1}
            />
        </View>

        <View>
            <TextInput
                style={styles.input}
                keyboardType="decimal-pad"
                placeholder="Digite o Segundo Número"
                value={numero2}
                onChangeText={setNumero2}
            />
        </View>

        <View style={styles.view4}>
            <Button title="Somar"  onPress={somar}/>           
            <Button title="Subtrair"  onPress={subtrair}/>
            <Button title="Multiplicar"  onPress={multiplicar}/>
            <Button title="Dividir"  onPress={dividir}/>
        </View>
    </React.Fragment>         
    );
 
}

const styles = StyleSheet.create({
    text:{
        
        fontSize: 45,
        color:'darkorange',
        fontWeight:'bold',
        
        
    },

    view4:{
        paddingTop: 20,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly'

    },
    
    input:{
        borderColor:'dodgerblue',
        padding:10,
        margin:15,
        borderWidth: 1,
        backgroundColor:'whitesmoke'
      
        
    },

    
})