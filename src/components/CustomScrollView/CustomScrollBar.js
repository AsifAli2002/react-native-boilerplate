// import React, { useState, useRef, PureComponent } from 'react'
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   TextInput,
//   StatusBar,
//   Animated,

// } from 'react-native'
// import { ScrollView } from 'react-native-gesture-handler'

// export class CustomScrollview extends PureComponent {
//     state = {
//         indicator: new Animated.Value(0),
//         wholeHeight: 1,
//         visibleHeight: 0
//     }
//     render() {
//         const indicatorSize = this.state.wholeHeight > this.state.visibleHeight ?
//             this.state.visibleHeight * this.state.visibleHeight / this.state.wholeHeight :
//             this.state.visibleHeight

//         const difference = this.state.visibleHeight > indicatorSize ? this.state.visibleHeight - indicatorSize : 1
//         return (
//             <View >
//                 <ScrollView
//                     showsVerticalScrollIndicator={true}
//                     onContentSizeChange={(width, height) => {
//                         this.setState({ wholeHeight: height })
//                     }}
//                     onLayout={({ nativeEvent: { layout: { x, y, width, height } } }) => this.setState({ visibleHeight: height })}
//                     scrollEventThrottle={16}
//                     onScroll={Animated.event(
//                         [{ nativeEvent: { contentOffset: { y: this.state.indicator } } }]
//                     )}>

// <Text style={styles.ContentTextStyle}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, sit
//           justo vel in sapien ultrices id quam nam. Fames urna, tellus aliquam
//           sed mi.
//         </Text>
//         <Text style={styles.ContentTextStyle}>
//           Augue tristique eu vulputate massa sed. Enim, montes, sit semper
//           venenatis. Adipiscing venenatis arcu a quis sit id euismod nisl,
//           purus. Augue tristique eu vulputate massa sed. Enim, montes, sit
//           semper venenatis. Adipiscing venenatis arcu a quis sit id euismod
//           nisl, purus.
//         </Text>
//         <Text style={styles.ContentTextStyle}>
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
//           tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus.
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus.
//         </Text>
//         <Text style={styles.ContentTextStyle}>
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
//           tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
//         </Text>

//         <Text style={styles.ContentTextStyle}>
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
//           tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
//         </Text>
//         <Text style={styles.ContentTextStyle}>
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
//           tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
//         </Text>
//         <Text style={styles.ContentTextStyle}>
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
//           tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
//         </Text>
//         <Text style={styles.ContentTextStyle}>
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
//           tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
//         </Text>
//         <Text style={styles.ContentTextStyle}>
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
//           tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus.
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus.
//         </Text>
//         <Text style={styles.ContentTextStyle}>
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
//           tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
//         </Text>
//         <Text style={styles.ContentTextStyle}>
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
//           tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
//         </Text>

//         <Text style={styles.ContentTextStyle}>
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
//           tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
//         </Text>
//         <Text style={styles.ContentTextStyle}>
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
//           tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
//         </Text>
//         <Text style={styles.ContentTextStyle}>
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
//           tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
//         </Text>
//         <Text style={styles.ContentTextStyle}>
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
//           tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
//         </Text>
//         <Text style={styles.ContentTextStyle}>
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
//           tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus.
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus.
//         </Text>
//         <Text style={styles.ContentTextStyle}>
//           Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
//           tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
//         </Text>


//                 </ScrollView >
//                 <View style={styles.indicatorWrapper} />
//                 <Animated.View style={[
//                     styles.indicator, {
//                         height: indicatorSize,
//                         transform: [{
//                             translateY: Animated.multiply(this.state.indicator, this.state.visibleHeight / this.state.wholeHeight).interpolate({
//                                 inputRange: [0, difference],
//                                 outputRange: [0, difference],
//                                 extrapolate: 'clamp'
//                             })
//                         }]
//                     }]} />

//             </View>
//         )
//     }
// }



// const styles = StyleSheet.create({

//     indicator:{

//         backgroundColor: '#DF0707',
//         borderRadius: 3,
//         width: 5
// },


//     scrollContainer: {
//       flexDirection: 'row',
//       width: '100%'
//     },
//     petItemListContainer: {
//       width: '100%'
//     },
//     customScrollBar: {
//       backgroundColor: '#DF0707',
//       borderRadius: 3,
//       width: 5
//     },
//     customScrollBarBackground: {
//       backgroundColor: '#FDEBEB',
//       borderRadius: 3,
//       height: '100%',
//       width: 15
//     },
//     ContentTextStyle: {
//       fontSize: 12,
//       fontFamily:"Rubik-Regular",
//       color: '#383838',
//       textAlign: 'left',
//       paddingHorizontal: 12,
//       marginVertical: 8,
//       lineHeight: 15,
//       letterSpacing: 0.8
//     }
//   })