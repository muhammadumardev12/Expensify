import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Button from './Button'

const Balance = ({balance,income,expense,onPress}) => {
  return (
    <View style={styles.balanceContainer}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <View>
    <Text style={styles.totalText}>Total Balance</Text>
    <Text style={styles.totalAmount}>$ {balance}</Text>
    </View>
     <Button onPress={onPress} btnTxt={'Edit'} style={{marginLeft:responsiveWidth(30)}}/>
    </View>

    <View style={styles.expenseContainer}>
        <View>
           <Text style={styles.incomeText}>Income</Text>
           <Text  style={styles.amount}>$ {income}</Text>
        </View>
        <View>
           <Text  style={styles.incomeText}>Expenses</Text>
           <Text  style={styles.amount}>$ {expense}</Text>
        </View>
    </View>
 </View>
  )
}

export default Balance

const styles = StyleSheet.create({
    balanceContainer:{
        height:responsiveHeight(25),
        width:responsiveWidth(90), 
        backgroundColor:'#1B5C58',
        alignSelf:'center',
        marginTop:responsiveHeight(4),
       borderRadius:20,
       paddingHorizontal:responsiveWidth(5),
       paddingVertical:responsiveHeight(2),
       elevation:20,
  
    },
    expenseContainer:{
     flexDirection:'row',
     justifyContent:'space-between',
     marginTop:responsiveHeight(3)
    },
    totalText:{
        color:'#fff',
        fontSize:responsiveFontSize(2.5),
        fontWeight:'bold'
    },
    totalAmount:{
        color:'#fff',
        fontSize:responsiveFontSize(4),
        fontWeight:'bold'
    },
    incomeText:{
        color:'#D0E5E4',
        fontSize:responsiveFontSize(2.5),
    },
    amount:{
        color:'#fff',
        fontSize:responsiveFontSize(3),
        fontWeight:'bold' 
    },

})