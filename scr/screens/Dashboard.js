import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Balance from '../components/Balance';
import {useNavigation} from '@react-navigation/native';
import {NAVIGATION_ROUTES} from '../utils/routes/RouteConst';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../components/Button';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logOut} from '../redux/slices/BalanceSlice';

const Dashboard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const income = useSelector(state => state.balance.income);
  const expense = useSelector(state => state.balance.expense);
  const balance = useSelector(state => state.balance.balance);
  const expenseList = useSelector(state => state.balance.expenses);
  console.log("🚀 ~ Dashboard ~ expenseList:", expenseList)

  const handleLogOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      await auth().signOut();
      dispatch(logOut());
      await AsyncStorage.removeItem('userToken');
      navigation.navigate(NAVIGATION_ROUTES.ONBOARDING);
    } catch (error) {
      console.log('Error', error);
    }
  };

  console.log('income', income);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.Header}>
          <Text style={styles.HeaderText}>Hi !</Text>
          <Text style={styles.HeaderText}>Well Come To Expensify</Text>
        </View>
        <Balance
          balance={balance}
          income={income}
          expense={expense}
          onPress={() => navigation.navigate(NAVIGATION_ROUTES.EDITSCREEN)}
        />
      </View>
      <View style={styles.itemsContainer}>
        <Text style={styles.HeaderText}>Expenses</Text>
        <FlatList
          data={expenseList}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.itemsDisplay} onPress={()=>navigation.navigate(NAVIGATION_ROUTES.EDITSCREEN)}>
              <Text style={styles.itemColor}>{item.name}</Text>
              <Text style={styles.itemColor}>$ {item.amount}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <Button
        btnTxt={'Logout'}
        style={{backgroundColor: '#E1C16E', marginTop: responsiveHeight(5)}}
        onPress={handleLogOut}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    height: responsiveHeight(25),
    width: responsiveWidth(100),
    backgroundColor: '#438883',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // overflow:'visible'
  },
  Header: {
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(4),
  },
  HeaderText: {
    color: '#ffff',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
  },
  itemsContainer: {
    marginTop: responsiveHeight(16),
    //  height:responsiveHeight(6),
    width: responsiveWidth(90),
    backgroundColor: '#438883',
    borderRadius: 10,
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(1),
  },
  itemsDisplay: {
    height: responsiveHeight(5),
    width: responsiveWidth(80),
    backgroundColor: '#1B5C58',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(3),
    alignItems: 'center',
  },
  itemColor: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
