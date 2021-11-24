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


const Home3 = ({ navigation, user }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.mainContainer}>
      <View style={{justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:20}}>Home - 3 </Text>
        </View>
      <PressableButton title='Next' onPress={()=> navigation.navigate('Home4')}/>
    <View style={styles.View}>


        <View>
            <CustomScrollView scrollContainer={{backgroundColor:"red"}}
            ContentArea="
            <Text style={styles.ContentTextStyle}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, sit
justo vel in sapien ultrices id quam nam. Fames urna, tellus aliquam
sed mi.
</Text>
<Text style={styles.ContentTextStyle}>
Augue tristique eu vulputate massa sed. Enim, montes, sit semper
venenatis. Adipiscing venenatis arcu a quis sit id euismod nisl,
purus. Augue tristique eu vulputate massa sed. Enim, montes, sit
semper venenatis. Adipiscing venenatis arcu a quis sit id euismod
nisl, purus.
</Text>
<Text style={styles.ContentTextStyle}>
Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
Adipiscing venenatis arcu a quis sit id euismod nisl, purus.
Adipiscing venenatis arcu a quis sit id euismod nisl, purus.
</Text>
<Text style={styles.ContentTextStyle}>
Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
</Text>

<Text style={styles.ContentTextStyle}>
Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
</Text>
<Text style={styles.ContentTextStyle}>
Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
</Text>
<Text style={styles.ContentTextStyle}>
Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
</Text>
<Text style={styles.ContentTextStyle}>
Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
</Text>
<Text style={styles.ContentTextStyle}>
Adipiscing venenatis arcu a quis sit id euismod nisl, purus. Augue
tristique eu vulputate massa sed. Enim, montes, sit semper venenatis.
Adipiscing venenatis arcu a quis sit id euismod nisl, purus.
Adipiscing venenatis arcu a quis sit id euismod nisl, purus.
</Text>"
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
    backgroundColor:"#fff"       
  },

})

export default connect(mapStateToProps, null)(Home3)
