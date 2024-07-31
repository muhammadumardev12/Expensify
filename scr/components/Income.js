import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Button from '../components/Button';
import InputField from '../components/InputField';
import {useDispatch} from 'react-redux';
import {addIncome, updateIncome} from '../redux/slices/BalanceSlice';
import Header from '../components/Header';

const Income = () => {
  const [income, setIncome] = useState(0);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  updateAmount = () => {
    setShow(!show);
    dispatch(updateIncome(income));
  };
  addAmount = () => {
    setShow(!show);
    dispatch(addIncome(income));
  };
  return (
    <>
      <Header text={'Income'} onPress={() => setShow(!show)} />
      {show && (
        <View style={styles.Container}>
          <InputField onChange={txt => setIncome(txt)} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button
              btnTxt={'UPDATE'}
              style={{margin: responsiveHeight(2)}}
              onPress={updateAmount}
            />
            <Button
              btnTxt={'ADD'}
              style={{margin: responsiveHeight(2)}}
              onPress={addAmount}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default Income;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#438883',
    paddingBottom: responsiveHeight(2),
  },
  textInput: {
    borderColor: '#ffff',
    borderBottomWidth: 2,
    width: responsiveWidth(80),
    alignSelf: 'center',
    color: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginLeft: responsiveWidth(4),
    marginVertical: responsiveHeight(2),
  },
});
