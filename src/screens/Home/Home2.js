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



const Data = [
  {
    key: 1,
    title: 'Killing',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, sit justo vel',
    Image: require('../../assets/images/1.jpg'),
    backgroundColor: '#DF0707'
  },
  {
    key: 2,
    title: 'Harrasment',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, sit justo vel in sapien ultrices id quam nam.',
      Image: require('../../assets/images/2.jpg'),
    backgroundColor: '#FFA724'
  },
  {
    key: 3,
    title: 'Kidnapping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, sit justo vel in sapien ultrices id quam nam.',
      Image: require('../../assets/images/3.jpg'),
    backgroundColor: '#CF00BA'
  },
  {
    key: 4,
    title: 'Robery',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, sit justo vel in sapien ultrices id quam nam.',
      Image: require('../../assets/images/4.jpg'),
    backgroundColor: '#5819C1'
  },
  {
    key: 5,
    title: 'Snatching',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, sit justo vel in sapien ultrices id quam nam.',
      Image: require('../../assets/images/5.jpg'),
    backgroundColor: '#211DE8'
  },
  {
    key: 6,
    title: 'Assault',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, sit justo vel in sapien ultrices id quam nam.',
      Image: require('../../assets/images/1.jpg'),
    backgroundColor: '#0CB9A2'
  },
];


const Home2 = ({ navigation, user }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.mainContainer}>
      <View style={{justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:20}}>Home - 2 </Text>
        </View>
      <PressableButton title='Next' onPress={()=> navigation.navigate('Home3')}/>
    <View style={styles.View}>


    <ScrollView contentContainerStyle={{flexGrow:1, justifyContent:"center", alignItems:"center"}} showsVerticalScrollIndicator={false}
      style={{flex:1}}
        >
        <CategoryComp data={Data} targetKey={"key"} />
      </ScrollView>      




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

export default connect(mapStateToProps, null)(Home2)
