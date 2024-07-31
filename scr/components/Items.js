import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {EditIcon, RemoveIcon} from '../assets/svgs';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
const Items = ({rmvPress,editPress,name,price}) => {
  return (
    <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>$ {price}</Text>
          </View>
          <TouchableOpacity onPress={editPress}>
            <EditIcon height={25} width={25} />
          </TouchableOpacity>
          <TouchableOpacity  onPress={rmvPress}>
            <RemoveIcon height={25} width={25} style={{marginLeft:responsiveWidth(3)}}/>
          </TouchableOpacity>
        </View>
  )
}

export default Items

const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(8),
        width: responsiveWidth(90),
        backgroundColor: '#1B5C58',
        alignSelf: 'center',
        marginBottom: responsiveHeight(2),
        borderColor: '#fff',
        borderWidth: 0.5,
        borderRadius: 10,
        elevation: 10,
        flexDirection: 'row',
        alignItems: 'center',
      },
      textContainer: {
        marginLeft: responsiveWidth(3),
        width:responsiveWidth(67)
      },
      text: {
        color: '#fff',
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
      },
})