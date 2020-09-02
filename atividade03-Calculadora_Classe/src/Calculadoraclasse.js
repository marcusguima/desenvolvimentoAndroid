import React, {Component} from 'react'
import {Text, View, TextInput, Button, StyleSheet, Alert} from 'react-native'

export default class Calculadoraclasse extends Component{


    state = {
        numero1: this.props.numero1,
        numero2: this.props.numero2,
        resultado: this.props.resultado
    }

    alterarValor1(num1){
        this.setState({numero1:num1});
    }

    alterarValor2(num2){
        this.setState({numero2:num2});
    }
    

    somar(){
        this.resultado = parseFloat(this.numero1) + parseFloat(this.numero2);
         Alert.alert("Resposta da Soma: " + String(this.resultado));
     }

    subtrair(){
        this.resultado = parseFloat(this.numero1) - parseFloat(this.numero2);
        Alert.alert("Resposta da Subtração: " + String(this.resultado));
    }

    multiplicar(){
        this.resultado = parseFloat(this.numero1) * parseFloat(this.numero2);
        Alert.alert("Resposta da Multiplicação: " + String(this.resultado));
    }

    dividir(){
        if(n2 == 0){
            Alert.alert("Erro: Não é possível dividir por zero!")

        }
        else{
            this.resultado = parseFloat(this.numero1) / parseFloat(this.numero2);
            Alert.alert("Resposta da Divisão: " + String(this.resultado));
        }
        
    }
    
    render(){ 
        return(
        
        <React.Fragment>
            <View>
                <Text style={styles.text}>Calculadora</Text>
            </View>

            <View>
            
                <TextInput
                    style={styles.input}
                    keyboardType="decimal-pad"
                    placeholder="Digite o Primeiro Número"
                    value= {this.numero1}
                    onChangeText={(num1) => this.alterarValor1(num1)} 
                />
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    keyboardType="decimal-pad"
                    placeholder="Digite o Segundo Número"
                    value={this.numero2}
                    onChangeText={(num2) => this.alterarValor2(num2)} 
                />
            </View>

            <View style={styles.view4}>
                <Button title="Somar"  onPress={this.somar}/>           
                <Button title="Subtrair"  onPress={this.subtrair}/>
                <Button title="Multiplicar"  onPress={this.multiplicar}/>
                <Button title="Dividir"  onPress={this.dividir}/>
            </View>
        </React.Fragment>
    
        );
    } 
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