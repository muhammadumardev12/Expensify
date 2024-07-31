import {SafeAreaView, StyleSheet, Text,View} from 'react-native';
import React, {useEffect} from 'react';

import {useSelector} from 'react-redux';
import Income from '../components/Income';
import Expense from '../components/Expense';
import EditExpenses from '../components/EditExpenses';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const EditScreen = () => {
  const expenseList = useSelector(state => state.balance.expenses);
  console.log('🚀 ~ EditScreen ~ income:', expenseList);
  const balance = useSelector(state => state.balance.balance);
  console.log('🚀 ~ EditScreen ~ balance:', balance);
  const expense = useSelector(state => state.balance.expense);
  console.log('🚀 ~ EditScreen ~ expense:', expense);
  const income = useSelector(state => state.balance.income);
  console.log('🚀 ~ EditScreen ~ income:', income);
  const savedDataFirebase = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (userId) {
        const userDocRef = firestore().collection('users').doc(userId);
        await userDocRef.set(
          {
            balance,
            income,
            expenses: expenseList,
            expense,
          },
          {merge: true},
        );
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    savedDataFirebase();
  }, [balance, income, expense, expenseList]);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Income />
      {income > 0 ? (
        <>
          <Expense />
          <EditExpenses />
        </>
      ) : (
        <View style={styles.errorView}>
          <Text style={styles.errorText}>Please Enter Income First</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  errorView:{
    backgroundColor:'#438883',
    paddingHorizontal:responsiveWidth(2)
  },
  errorText:{
    color:'#fff',
    fontSize:responsiveFontSize(2),
    fontWeight:'bold'
  }
});
