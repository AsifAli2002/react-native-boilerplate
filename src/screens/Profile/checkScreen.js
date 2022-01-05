import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  StyleSheet
} from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const CheckScreen = ({ navigation }) => {
  const options = {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: true
    },


    detectText = base64 => {
      fetch(
        'https://vision.googleapis.com/v1/images:annotate?key=' +
          "AIzaSyCRqapKfPvsVTyk4XyYtsN3Fz413Iixz_w",
        {
          method: 'POST',
          body: JSON.stringify({
            requests: [
              {
                image: { content: base64 },
                features: [{ type: 'TEXT_DETECTION' }]
              }
            ]
          })
        }
      )
        .then(response => {
          return response.json()
        })
        .then(jsonRes => {
        //   let text = jsonRes.responses[0].fullTextAnnotation.text
          console.log("text", jsonRes)
          //this.props.navigation.navigate('ContactScreen', { text: text })
        })
        .catch(err => {
          console.log('Error', err)
        })
    }

  const openCamera = async () => {
    const result = await launchCamera(options)
    // console.log('result camera', result.assets[0].base64)
    detectText(result.assets[0].base64)
    return result
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.mainContainer}>
        <Text style={styles.textStyle}>check screen</Text>
      </View>

      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => openCamera()}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>
            {'<'} Launch Camera {'>'}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ebeff5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    height: 50,
    width: '80%',
    backgroundColor: 'pink',
    alignSelf: 'center',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50
  },
  textStyle: {
    fontWeight: 'bold',
    color: 'green',
    // textTransform: ['uppercase'],
    fontSize: 20
  }
})

export default CheckScreen
