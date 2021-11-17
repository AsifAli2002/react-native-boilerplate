import React, { useState } from 'react'
import {
  StyleSheet,
  Pressable,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native'
import { Images } from '../../constants/images'
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
import LinearGradient from 'react-native-linear-gradient'

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
    inputRange: [0, 1],
    outputRange: [2, 22],
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
      duration:duration,
      easing: Easing.linear,
      useNativeDriver: false
    }).start()
  }

  return (
    <LinearGradient
      colors={!isOnToggle ? ['#000', '#E0E5F2'] : ['#E0E5F2', '#680000']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ borderRadius: 125 }}>
      <TouchableOpacity
        style={[styles.sliderContainer, containerStyle]}
        activeOpacity={0.95}
        onPress={() => {
          updatedSwitchData()
        }}>
        <Animated.View style={{ left }}>
          <LinearGradient
            colors={!isOnToggle ? ['#E0E5F2', '#000'] : ['pink', '#680000']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={[styles.sliderCircle, circleStyle]}></LinearGradient>
        </Animated.View>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  sliderContainer: {
    width: 44,
    height: 23,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sliderCircle: {
    width: 20,
    height: 20,
    borderRadius: 10
  }
})
