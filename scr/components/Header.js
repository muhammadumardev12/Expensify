import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { AddIcon } from '../assets/svgs'

const Header = ({text,onPress}) => {
  return (
    <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: responsiveHeight(0.1),
      paddingHorizontal: responsiveWidth(2),
      backgroundColor: '#438883',
      paddingVertical: responsiveHeight(2),
    }}>
    <Text style={styles.incomeText}>{text}</Text>
    <TouchableOpacity onPress={onPress}>
      <AddIcon height={30} width={30} />
    </TouchableOpacity>
  </View>
  )
}

export default Header

const styles = StyleSheet.create({
    incomeText: {
        color: '#fff',
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
      },
})