import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
// import styles fro/m './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch } from 'react-redux'
import { Carousel } from '../../components/Carousel'
import { fetchDataUser } from '../../stores/actions/user.action'
import { ToggleSwitch } from '../../components/ToggleSwitch/index'

const Home = ({ navigation, user }) => {
  
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={{ alignItems: 'center', marginBottom: 50 }}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('Home1')}>
            <Text style={styles.text}>Click here to show User data:</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Carousel/>
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
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  SafeAreaView1: { backgroundColor: '#FFF', flex: 0 },
  SafeAreaView2: { flex: 1, backgroundColor: '#FFF' },
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  buttonStyle: {
    backgroundColor: '#EEE',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    borderRadius: 10
  },
  text: { fontSize: 18, color: '#808080', fontWeight: 'bold' }
})

export default connect(mapStateToProps, null)(Home)
