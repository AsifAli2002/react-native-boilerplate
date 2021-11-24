import React, { useRef } from 'react'
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions
} from 'react-native'

// const images = new Array(6).fill('http://i.imgur.com/Vv4bmwR.jpg');

const images = [
  require('../../assets/images/5.jpg'),
  require('../../assets/images/2.jpg'),
  require('../../assets/images/3.jpg'),
  require('../../assets/images/4.jpg'),
  require('../../assets/images/1.jpg')
]

export const Carousel = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current

  const { width: windowWidth } = useWindowDimensions()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ])}
          scrollEventThrottle={1}>
          {images.map((image, imageIndex) => {
            // console.log("image", image, images)
            return (
              <View style={{ width: windowWidth }} key={imageIndex}>
                <ImageBackground source={image} style={styles.card}>
                  {/* <View style={styles.textContainer}>
                  <Text style={styles.infoText}>
                        {"Image - " + imageIndex}
                      </Text>
                  </View> */}
                </ImageBackground>
              </View>
            )
          })}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1)
              ],
              outputRange: [8, 18, 8],
              extrapolate: 'clamp'
            })
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            )
          })}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000030'
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    marginHorizontal: 4
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 15
  }
})
