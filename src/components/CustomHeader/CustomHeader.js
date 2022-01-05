import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const CustomHeader = ({
  title = 'title',
  rippleColor = '#70707020',
  rippleRadius = 200,
  textStyle = {},
  buttonStyle = {},
  onPress= () => {}
}) => {
  const [timesPressed, setTimesPressed] = useState(0)

  let textLog = ''
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress'
  } else if (timesPressed > 0) {
    textLog = 'onPress'
  }

  return (
    <View style={[styles.button, buttonStyle]}>
      <Pressable
        hitSlop={{right:15, left:15, top:20, bottom:20}}
        onPress={onPress}
        android_ripple={{
          color: rippleColor,
          borderless: true,
          radius: rippleRadius
        }}>
        <Text style={textStyle}>{title}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {  
    overflow:"hidden",
    alignSelf: 'auto',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor:"#edc45320",
    height:40,
  },
})

export default PressableButton
