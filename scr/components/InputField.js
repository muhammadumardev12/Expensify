import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const InputField = ({onChange}) => {
  return (
    <View style={styles.inputContainer}>
    <TextInput
     placeholder='Enter Your Income'
     placeholderTextColor={'#fff'}
     keyboardType='Numeric'
     style={styles.textInput}
     onChangeText={onChange}
     selectionColor='#fff' 
    />
  </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    inputContainer:{
        height:responsiveHeight(6),
        width:responsiveWidth(80),
        alignSelf:'center',
        borderColor:'#fff',
        borderWidth:2,
        borderRadius:10,
       },
       textInput:{
          fontSize:responsiveFontSize(2),
          height:responsiveHeight(5.5),
          padding:responsiveHeight(1),
          color:'#fff'
       }
})