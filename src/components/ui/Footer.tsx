import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FONTS } from '../../utils/Constants'
import { RFValue } from 'react-native-responsive-fontsize'

export default function Footer() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> Linking.openURL('https://www.linkedin.com/in/munnawar-hussain-aa544b227/')} > 
        <Text style={styles.text}>Made with 🥰</Text>
        <Text style={styles.text2}>by - Munnawar Hussain</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 20,
        alignSelf: 'center'
    },
    text:{
        fontFamily: FONTS.twinkle,
        fontSize: RFValue(12),
        color: "#fff",
        textAlign: "center",
        textShadowColor: 'rgba(0,0,0,0.75)',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
    },
    text2:{
        fontFamily: FONTS.twinkle,
        fontSize: RFValue(16),
        color: "#fff",
        textAlign: "center",
        textShadowColor: 'rgba(0,0,0,0.75)',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 3,
    }
})