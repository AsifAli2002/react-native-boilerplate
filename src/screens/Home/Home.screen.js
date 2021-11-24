import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch } from 'react-redux'
import { fetchDataUser } from '../../stores/actions/user.action'
import { ToggleSwitch } from '../../components/ToggleSwitch/index'

const Home1 = ({ navigation, user }) => {

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />

      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <Icon name={'ios-home'} size={100} color={'purple'} />
          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('Home1')}
              // onPress={() => dispatch(fetchDataUser())}
              >
              <Text style={styles.text}>Click here to show User data:</Text>
            </TouchableOpacity>

          </View>
        </View>
        {/* <View style={{ alignItems: 'center', marginBottom: 50 }}>
          <ToggleSwitch duration={100} 
          // onSwitch={e => alert(e)} 
          />
        </View> */}
      </SafeAreaView>

      
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}

export default connect(mapStateToProps, null)(Home1)
