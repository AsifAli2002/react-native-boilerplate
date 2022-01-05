import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
  Easing,
SectionList,
Animated
} from 'react-native'
// import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch } from 'react-redux'
// import {Animated} from 'react-native-reanimated'


import { Carousel } from '../../components/Carousel'
const { width, height } = Dimensions.get('window')
import { CustomScrollview } from '../../components/CustomScrollView/CustomScrollBar'
import { Dimensions } from 'react-native'
import PressableButton from '../../components/Pressable/Pressable'
import {CustomScrollView} from '../../components/CustomScrollView/CustomScrollView'
import { fetchDataUser } from '../../stores/actions/user.action'
import { ToggleSwitch } from '../../components/ToggleSwitch/index'
import LinearGradient from 'react-native-linear-gradient'
import LoanCard from '../../components/LoanCard/index'
import Radio from '../../components/CategoryComponent/radio'
import {EasingAnim} from '../../components/EasingAnim/Easing';



const SECTIONS = [
  {
    title: "Predefined animations",
    data: [
      { title: "Bounce", easing: Easing.bounce },
      { title: "Ease", easing: Easing.ease },
      { title: "Elastic", easing: Easing.elastic(4) }
    ]
  },
  {
    title: "Standard functions",
    data: [
      { title: "Linear", easing: Easing.linear },
      { title: "Quad", easing: Easing.quad },
      { title: "Cubic", easing: Easing.cubic }
    ]
  },
  {
    title: "Additional functions",
    data: [
      {
        title: "Bezier",
        easing: Easing.bezier(0, 2, 1, -1)
      },
      { title: "Circle", easing: Easing.circle },
      { title: "Sin", easing: Easing.sin },
      { title: "Exp", easing: Easing.exp }
    ]
  },
  {
    title: "Combinations",
    data: [
      {
        title: "In + Bounce",
        easing: Easing.in(Easing.bounce)
      },
      {
        title: "Out + Exp",
        easing: Easing.out(Easing.exp)
      },
      {
        title: "InOut + Elastic",
        easing: Easing.inOut(Easing.elastic(1))
      }
    ]
  }
];



const Home1 = ({ navigation, user }) => {


    let opacity = new Animated.Value(0);
  
    const animate = easing => {
      opacity.setValue(0);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1200,
        easing
      }).start();
    };
  
    const size = opacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 80]
    });
  
    const animatedStyles = [
      styles.box,
      {
        opacity,
        width: size,
        height: size
      }
    ];


  
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.mainContainer}>
      <View style={{justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:20}}>Home - 1 </Text>
        </View>
      <PressableButton title='Next' onPress={()=> navigation.navigate('Home2')}/>





    <View style={styles.View}>

    <View style={styles.container}>
      {/* <StatusBar hidden={true} /> */}
      <Text style={styles.title}>
        Press rows below to preview the Easing!
      </Text>
      <View style={styles.boxContainer}>
        <Animated.View style={animatedStyles} />
      </View>
      <SectionList
        style={styles.list}
        sections={SECTIONS}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => animate(item.easing)}
            style={styles.listRow}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.listHeader}>{title}</Text>
        )}
      />
    </View>




     




        </View>
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5eeb0'
  },
View:{
    flex: 1,
    backgroundColor:"#fff",
    justifyContent:"center", 
    alignItems:"center",
         
  },
  container: {
    flex: 1,
    backgroundColor: "#20232a"
  },
  title: {
    marginTop: 10,
    textAlign: "center",
    color: "#61dafb"
  },
  boxContainer: {
    height: 160,
    alignItems: "center"
  },
  box: {
    marginTop: 32,
    borderRadius: 4,
    backgroundColor: "#61dafb"
  },
  list: {
    backgroundColor: "#fff"
  },
  listHeader: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#f4f4f4",
    color: "#999",
    fontSize: 12,
    textTransform: "uppercase"
  },
  listRow: {
    padding: 8
  }

})

export default connect(mapStateToProps, null)(Home1)
