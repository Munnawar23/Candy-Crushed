import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { commonStyles } from '../styles/commonStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { levelStyles } from '../styles/levelStyles'
import ScalePress from '../components/ui/ScalePress'
import { goBack } from '../utils/NavigationUtil'

const LevelScreen = () => {
  return (
    <ImageBackground
    style={commonStyles.container}
    source={require('../assets/images/forest.jpeg')}
    >
    <SafeAreaView />
    <View style={levelStyles.flex1}>
      <ScalePress onPress={()=> goBack()}>
        <Image
        source={require('../assets/icons/back.png')}
        style={levelStyles.backIcon}
        />
      </ScalePress>
      <ImageBackground source={require('../assets/images/lines.jpg')} style={levelStyles.levelContainer}>
      <View style={levelStyles.subLevelContainer}>

      </View>

      </ImageBackground>
      <View style={levelStyles.flex2}>
        <Text style={levelStyles.text}>
          Rule: Collect the minimun amount of candy before the time runs out!
        </Text>
      </View>
    </View>
    </ImageBackground>
  )
}

export default LevelScreen