import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import { NAVIGATION_ROUTES } from '../utils/routes/RouteConst';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation()
  const [display, setDisplay] = useState(false);
   useEffect(()=>{
    const timer = setTimeout(() => {
      setDisplay(true);
    }, 2000);
    const checkToken = async ()=>{
     const userToken = await AsyncStorage.getItem('userToken')
     if(userToken){
      setTimeout(() => {
      navigation.navigate(NAVIGATION_ROUTES.DASHBOARD)
      }, 1000);
     }
     else{
      const timer1 = setTimeout(() => {
        navigation.navigate(NAVIGATION_ROUTES.ONBOARDING);
      }, 3000);

      return () => {
        clearTimeout(timer);
        clearTimeout(timer1);
      };
     }
    }
    checkToken()
   },[navigation])
 
  return (
   <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.mainText}>Expensify</Text>
      <View
            style={[
              styles.indicatorContainer,
              {display: display ? 'flex' : 'none'},
            ]}>
            <ActivityIndicator />
          </View>
   </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    mainContainer:{
     flex:1,
     backgroundColor:'#5aa7a2',
     justifyContent:'center',
     alignItems:'center'
    },
    mainText:{
        color:'#ffffff',
        fontSize:responsiveFontSize(4),
        fontWeight:'bold'
    },
    indicatorContainer: {
        marginTop: responsiveHeight(3),
      },
})