import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable
} from 'react-native'
// import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch } from 'react-redux'
import { Carousel } from '../../components/Carousel'
const { width, height } = Dimensions.get('window')
import { CustomScrollview } from '../../components/CustomScrollView/CustomScrollBar'
import { Dimensions } from 'react-native'
import PressableButton from '../../components/Pressable/Pressable'
import {CustomScrollView} from '../../components/CustomScrollView/CustomScrollView'
import { fetchDataUser } from '../../stores/actions/user.action'
import { ToggleSwitch } from '../../components/ToggleSwitch/index'
import LinearGradient from 'react-native-linear-gradient'
import CategoryComp from '../../components/CategoryComponent/index'


const Home4 = ({ navigation, user }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.mainContainer}>
      <View style={{justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:20}}>Home - 4 </Text>
        </View>
      <PressableButton title='Next' onPress={()=> navigation.navigate('Home5')}/>
    <View style={styles.View}>
 
       
    <View style={{ height:height, backgroundColor:"orange" }}>
            <CustomScrollview/>
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
    backgroundColor:"#fff"       
  },

})

export default connect(mapStateToProps, null)(Home4)
