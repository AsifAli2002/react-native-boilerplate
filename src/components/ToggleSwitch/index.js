import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Pressable,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native'
import { Images } from '../../constants/images'
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
// import {Animated} from 'react-native-reanimated'
import LinearGradient from 'react-native-linear-gradient'
import PressableButton from '../Pressable/Pressable'

export const ToggleSwitch = ({
  navigation,
  isOn = true,
  onSwitch = e => {},
  duration = {},
  containerStyle = {},
  circleStyle = {}
}) => {
  const animatedValue = React.useRef(new Animated.Value(isOn ? 1 : 0)).current

  const left = animatedValue.interpolate({
    inputRange: [0, 1,],
    outputRange: [2, 22,],
    // inputRange: [0, 1],
    // outputRange: [0, 80],
    // inputRange: [0, 50, 100],
    // outputRange: [0, 1, 0],
    extrapolate: 'clamp'
  })

  const [isOnToggle, setIsOn] = useState(isOn)

  const updatedSwitchData = () => {
    if (isOnToggle) {
      setIsOn(false)
      onSwitch(false)
      startAnimation(0)
    } else {
      setIsOn(true)
      onSwitch(true)
      startAnimation(1)
    }
  }

  const startAnimation = toValue => {
    Animated.timing(animatedValue, {
      toValue,
      duration: duration,
      easing: Easing.linear,
      useNativeDriver: false
    }).start()
  }

  return (
    <View style={{ width: 44 }}>
      <LinearGradient
        colors={!isOnToggle ? ['orange', '#000'] : ['#000','orange' ]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ borderRadius: 125 }}>
        <TouchableOpacity
          // onTouchEnd={() => alert(e)}
          style={[styles.sliderContainer, containerStyle]}
          activeOpacity={0.95}
          onPress={() => {
            updatedSwitchData()
          }}>
          <Animated.View style={{ left }}>
            <LinearGradient
              colors={
                !isOnToggle ? ['#fff',"blue", '#fff'] : ['#fff',"red", '#fff']
              }
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={[styles.sliderCircle, circleStyle]}></LinearGradient>
          </Animated.View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  sliderContainer: {
    width: 44,
    height: 23,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  sliderCircle: {
    width: 20,
    height: 20,
    borderRadius: 10
  }
})
