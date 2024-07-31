import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import {useDispatch, useSelector} from 'react-redux';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Items from './Items';
import {removeExpense, updateExpense} from '../redux/slices/BalanceSlice';
import Button from './Button';
import {SearchIcon} from '../assets/svgs';

const EditExpenses = () => {
  const [show, setShow] = useState(false);
  const [showing, setShowing] = useState(false);
  const [editingExpense, setEditingExpense] = useState();
  const [newExpense, setNewExpense] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [disable, setDisable] = useState(false);
  const [searchText,setSearchText] =  useState()
  console.log("🚀 ~ EditExpenses ~ searchText:", searchText)
  const expenseDetails = useSelector(state => state.balance.expenses);
  const dispatch = useDispatch();
  removeIt = id => {
    setEditingExpense(false);
    dispatch(removeExpense(id));
  };
  handleEdit = expense => {
    setShowing(true);
    setEditingExpense(expense);
    setNewExpense(expense.name);
    setNewAmount(expense.amount.toString());
  };
  const handleSave = () => {
    console.log('first');

    if (editingExpense) {
      dispatch(
        updateExpense({
          id: editingExpense.id,
          name: newExpense,
          amount: Number(newAmount),
        }),
      );
      setShowing(!showing);
      setEditingExpense(null);
      setNewExpense('');
      setNewAmount('');
    }
  };
  const balance = useSelector(state => state.balance.income);
  useEffect(() => {
    if (newAmount > balance) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [newAmount, balance]);
  const filteredExpenses = expenseDetails.filter(expense =>
    expense.name.toLowerCase().includes((searchText || '').toLowerCase())
  );
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header text={'Edit Your Expense'} onPress={() => setShow(!show)} />

      {show && (
        <>
          {showing && (
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                value={newExpense}
                onChangeText={setNewExpense}
                placeholder="New Name"
              />
              <TextInput
                style={styles.input}
                value={newAmount}
                keyboardType="numeric"
                onChangeText={setNewAmount}
                placeholder="New Amount"
              />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Button
                  btnTxt={'Update'}
                  onPress={handleSave}
                  disabled={disable}
                />
                <Button btnTxt={'Cancel'} onPress={() => setShowing(false)} />
              </View>
              {disable && (
                <Text style={styles.errorText}>
                  Enter Amount According to Remaining Balance
                </Text>
              )}
            </View>
          )}
          <View style={{flex: 1}}>
            <View style={styles.searchContainer}>
              <TextInput
               style={styles.searchInput}
               placeholder='Search Your Expense'
               onChangeText={setSearchText}
               />
              <TouchableOpacity>
                <SearchIcon height={25} width={25} />
              </TouchableOpacity>
            </View>
            {filteredExpenses.length > 0 ? (
            <FlatList
              data={filteredExpenses}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <Items
                  keyExtractor={item => item.id}
                  id={item.id}
                  name={item.name}
                  price={item.amount}
                  rmvPress={() => removeIt(item.id)}
                  editPress={() => handleEdit(item)}
                />
              )}
            />
            ):(
              <Text>Data is not found</Text>
            )}
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default EditExpenses;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#438883',
    marginTop: responsiveHeight(0.1),
    flex: 1,
  },
  formContainer: {
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(3),
    backgroundColor: '#438883',
  },
  input: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  errorText: {
    color: 'red',
    marginTop: responsiveHeight(1),
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  searchContainer: {
    backgroundColor: '#fff',
    width: responsiveWidth(80),
    alignSelf: 'center',
    height: responsiveHeight(5),
    marginVertical: responsiveHeight(2),
    borderRadius: 20,
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(2),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    // backgroundColor:'pink',
    width: responsiveWidth(65),
    height: responsiveHeight(8),
  },
});
