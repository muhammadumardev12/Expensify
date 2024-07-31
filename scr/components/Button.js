import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Button = ({onPress,btnTxt,style,disabled}) => {
  return (
    <TouchableOpacity style={[styles.editContainer,{...style}]} onPress={onPress} disabled={disabled}>
    <Text style={styles.editText}>{btnTxt}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    editContainer:{
        height:responsiveHeight(5),
        width:responsiveWidth(20),
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
       },
       editText:{
           color:'#438883',
           fontWeight:'bold',
           fontSize:responsiveFontSize(2)
       }
})