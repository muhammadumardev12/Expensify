import { Alert, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'
import { NAVIGATION_ROUTES } from '../utils/routes/RouteConst'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { userFireBaseData } from '../redux/slices/BalanceSlice'
const OnBoarding = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    useEffect(()=>{
      GoogleSignin.configure({
         webClientId: '471176714331-uvhnnpqvu8a128ab59oqph6ud84idf9o.apps.googleusercontent.com', 
       });
    },[])
    const onGoogleButtonPress = async () => {
      try {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const { idToken } = await GoogleSignin.signIn();
        console.log("🚀 ~ onGoogleButtonPress ~ idToken:", idToken);
  
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const userCredential = await auth().signInWithCredential(googleCredential);
        const userId = userCredential.user.uid;
        const userEmail = userCredential.user.email;
  
        await AsyncStorage.setItem('userId', userId);
        const userDocRef = firestore().collection('users').doc(userId);
        const userDoc = await userDocRef.get()
        if(userDoc.exists){
          const userData = userDoc.data()
          dispatch(userFireBaseData(userData))}
        else{
        await userDocRef.set({
          email: userEmail
        });
      }
        await AsyncStorage.setItem('userToken', idToken);
        Alert.alert("Successful login");
        navigation.navigate(NAVIGATION_ROUTES.DASHBOARD);
      } catch (error) {
        console.log("Error", error);
        Alert.alert("Login failed", error.message);
      }
    };
  return (
    <SafeAreaView style={styles.mainContainer}>    
     <ImageBackground source={require('../assets/images/onboarding.png')} resizeMode='cover' style={styles.backImage}>
      <Image source={require("../assets/images/man.png")} resizeMode='cover' />
      <Text style={styles.text}>Spend Smarter Save More</Text>
     </ImageBackground>
     <TouchableOpacity style={styles.button} onPress={onGoogleButtonPress}>
        <Text style={styles.btnText}>Get Started With Google</Text>
     </TouchableOpacity>
    </SafeAreaView>
  )
}

export default OnBoarding

const styles = StyleSheet.create({
 mainContainer:{
  flex:1,
  alignItems:'center'
 },
 backImage:{
    height:responsiveHeight(80),
    width:responsiveWidth(100),
    overflow:'hide',
    justifyContent:'center',
    alignItems:'center'
 },
 text:{
  color:'#438883',
  fontSize:responsiveFontSize(3.5),
  fontWeight:'bold',
  width:responsiveWidth(60),
  textAlign:'center',
  paddingTop:responsiveHeight(5)
 },
 button:{
    height:responsiveHeight(6),
    width:responsiveWidth(70),
    backgroundColor:'#5aa7a2',
    marginTop:responsiveHeight(1),
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center',
    marginTop:responsiveHeight(4),
    elevation:10
 },
 btnText:{
  color:'#fff',
  fontSize:responsiveFontSize(2),
  fontWeight:'bold'
 }
})