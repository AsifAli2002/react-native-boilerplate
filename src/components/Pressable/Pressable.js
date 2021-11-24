import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const PressableButton = ({
  title = 'title',
  rippleColor = '#70707020',
  rippleRadius = 200,
  textStyle = {},
  buttonStyle = {},
  containerStyle = {},
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
    <View style={[styles.container, containerStyle]}>
      <Pressable
        style={[styles.button, buttonStyle]}
        onPress={onPress}
        android_ripple={{
          color: rippleColor,
          borderless: true,
          radius: rippleRadius
        }}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow:"hidden",
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 10
  },
  button: {
    width: '100%',
    backgroundColor: 'cyan',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText: {
    fontSize: 16,
    color: 'black'
  }
})

export default PressableButton
