import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const SignUpScreen = () => {
  return (
   <SafeAreaView style={styles.mainContainer}>
          <Text style={styles.mainText}>Expensify</Text>
        <View style={styles.subContainer}>

        </View>
   </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#5aa7a2',
        alignItems:'center'
    },
    mainText:{
        color:'#ffffff',
        fontSize:responsiveFontSize(3),
        fontWeight:'bold',
        paddingTop:responsiveHeight(2)
    },
    subContainer:{
        height:responsiveHeight(80),
        width:responsiveWidth(85),
        backgroundColor:'#fff',
        borderRadius:20,
        marginTop:responsiveHeight(3)
    }
  
})