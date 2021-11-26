import React, {useState,  useEffect} from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch } from 'react-redux'
import { fetchDataUser } from '../../stores/actions/user.action'
import { ToggleSwitch } from '../../components/ToggleSwitch/index'
import LoanCard from '../../components/LoanCard'
import Radio from '../../components/CategoryComponent/radio'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


// const [state, setState] = useState(){
//   data: [

//   ]
// })

const data =[
  {
    text:'Button-1',
    key: 'Button-1',
    
  },
  {
    text:'Button-2',
    key: 'Button-2',
    
  },
  {
    text:'Button-3',
    key: 'Button-3',
    
  },

]

const Home1 = ({ navigation, user }) => {

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />

      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
          <Icon name={'ios-home'} size={100} color={'purple'} />
          <View style={{marginBottom:10}}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('Home1')}
              // onPress={() => dispatch(fetchDataUser())}
              >
              <Text style={styles.text}>Click here to show User data:</Text>
            </TouchableOpacity>

          </View>
        </View>

    
        <View style={{ alignItems: 'center', marginBottom:10}}>
          <ToggleSwitch duration={200}  
          // onSwitch={e => alert(e)} 
          />
        </View>

        <View style={{ alignItems: 'center', marginBottom: 10 }}>
<LoanCard/>
        </View>
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
<Radio data={data}/>
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

export default connect(mapStateToProps, null)(Home1)
