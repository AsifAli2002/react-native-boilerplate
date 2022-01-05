import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native'
import styles from '../Home/Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { State } from 'react-native-gesture-handler'

const Home = ({ navigation }) => {

  // const counter = 1;

  // while(counter <=10){
  //   "Asif"
  //   counter++

  // }


// for (i+1; i<=10; i++){
//   State, setState = useState() 
//   (`2 * ${i} = ${2*i}`)
// ('\n')

// }


  var person = "John Doe",
  carName = "Volvo",
  price = 200;
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
 
        <View style={styles.outerWrapper}>
          <Icon name={'ios-settings'} size={100} color={'green'} />
          <View>
            <TouchableOpacity
            // onPress={() => Alert.alert('this is Profile Screen')}
              onPress={() => navigation.navigate('CheckScreen')}
              style={styles.buttonStyle}>
              <Text style={styles.text}>
                this is{' '}
                <Text style={{ fontWeight: 'bold', color: 'green' }}>
                  {' '}
                  PROFILE{' '}
                </Text>{' '}
                screen
              </Text>
            </TouchableOpacity>
          </View >


          <View style={{flex:1, width:"100%", justifyContent:"center", alignItems:"center"}}>
            <Text>
       

            </Text>




          </View>
        </View>
        <View
          style={{
            alignContent: 'flex-end',
            alignItems: 'flex-end',
            padding: 10
          }}>

        </View>

    </>
  )
}

export default Home
