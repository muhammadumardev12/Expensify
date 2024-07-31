import {
    StyleSheet,
    Text,
    TextInput,
    View,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import InputField from '../components/InputField';
  import { useDispatch, useSelector } from 'react-redux';
  import Header from '../components/Header';
import Button from './Button';
import { addExpenses } from '../redux/slices/BalanceSlice';
const Expense = () => {
    const [showExpense,setShowExpense] = useState(false)
    const [NameOfExpense,setNameOFExpense] = useState('')
    const [ExpenseAmount,setExpenseAmount] = useState(0)
    const [disable,setDisable] = useState(false)
    const dispatch  = useDispatch();
    const balance = useSelector(state=>state.balance.income)
    console.log("🚀 ~ Expense ~ balance:", balance)
    const addExpense =()=>{
        setShowExpense(!showExpense)
        const expenseId = Math.floor(Math.random()*1000000).toString()
        dispatch(addExpenses({name:NameOfExpense,amount:ExpenseAmount,id:expenseId}))
      }
      useEffect(() => {
        if (ExpenseAmount > balance) {
          setDisable(true);
        } else {
          setDisable(false);
        }
      }, [ExpenseAmount, balance]);
  return (
    <>
    <Header text={'Expense'} onPress={()=>setShowExpense(!showExpense)}/>
        {
          showExpense && (
        <View style={styles.Container}>
          <Text style={styles.text}>Name of Expense:</Text>
          <TextInput
             placeholder='Name of Expense'
             placeholderTextColor={'#fff'}
             style={styles.textInput}
             selectionColor='#fff' 
             onChangeText={(text)=>setNameOFExpense(text)}
          />
          <Text style={styles.text}>Expense Amount:</Text>
          <InputField onChange={(num)=>(setExpenseAmount(num))}/>
          <Button btnTxt={'Add'} onPress={addExpense} style={{alignSelf:'center',marginTop:responsiveHeight(2)}}  disabled={disable} />
          {disable&&(
          <Text style={styles.errorText}>Enter Amount According to Remaining Balance</Text>
          )
          }
        </View>
        )}
        </>
  )
}

export default Expense

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
      },
      Container: {
        backgroundColor: '#438883',
        paddingBottom:responsiveHeight(2)
      },
     textInput:{
      borderColor:'#ffff',
      borderBottomWidth:2,
      width:responsiveWidth(80),
      alignSelf:'center',
      color:'#fff'
    
     },
     text:{
      color:'#fff',
      fontSize:responsiveFontSize(2),
      fontWeight:'bold',
      marginLeft:responsiveWidth(4),
      marginVertical:responsiveHeight(2),
     },
     errorText:{
      color:'red',
      marginTop:responsiveHeight(1),
      alignItems:'center',
      alignSelf:'center',
      fontWeight:'bold'
     }
})