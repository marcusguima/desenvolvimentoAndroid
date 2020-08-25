import React from 'react'
import {View,StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default () => {
    return (
        <View style={styles.FlexV1}>
            <Quadrado cor='#7fffd4' lado={15}/>
            <Quadrado cor='#ff801a' lado={20}/>
            <Quadrado cor='#50d1f6' lado={25}/>
            <Quadrado cor='#dd22c1' lado={30}/>
            <Quadrado cor='#8312ed' lado={35}/>
        </View>
    );
}

const styles = StyleSheet.create({
    FlexV1:{
        flexGrow:0.5,
        backgroundColor:'black',
        justifyContent:'space-evenly',
        width:'100%',       
        flexDirection:'row',
        
    }
})