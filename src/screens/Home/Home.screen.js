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
import { ScrollView } from 'react-native-gesture-handler'
import { CustomScrollView } from '../../components/CustomScrollView/CustomScrollView'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


// const [state, setState] = useState(){
//   data: [

//   ]
// })

const LoanData =[
  {
    LoanAmount:'$ 7,500.00',
    Frequency: 'Monthly',
    Installment: "$5000",
    buttonText: "Cash Advance",
    key: '1',
    
  },
  {
    LoanAmount:'$ 8,900.00',
    Frequency: 'Quarterly',
    Installment: "$7000",
    buttonText: "Loan",
    key: '2',
  },
  {
    LoanAmount:'$ 10,500.00',
    Frequency: 'Yearly',
    Installment: "$10,000",
    buttonText: "Cash Advance",
    key: '3',    
  },
  {
    LoanAmount:'$ 7,500.00',
    Frequency: 'Monthly',
    Installment: "$5000",
    buttonText: "Cash Advance",
    key: '4',
    
  },
  {
    LoanAmount:'$ 8,900.00',
    Frequency: 'Quarterly',
    Installment: "$7000",
    buttonText: "Loan",
    key: '5',
  },
  {
    LoanAmount:'$ 10,500.00',
    Frequency: 'Yearly',
    Installment: "$10,000",
    buttonText: "Cash Advance",
    key: '6',    
  },

]
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
          <SafeAreaView style={styles.container}>

          <View style={{ flex:1,alignItems: 'center', marginBottom:10}}>
          <Icon name={'ios-home'} size={100} color={'purple'} />
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('Home1')}
              // onPress={() => dispatch(fetchDataUser())}
              >
              <Text style={styles.text}>Click here to show User data:</Text>
            </TouchableOpacity>
            </View>

    
        <View style={{ flex:.2,alignItems: 'center', marginBottom:10}}>
          <ToggleSwitch duration={200}  
          // onSwitch={e => alert(e)} 
          />
        </View>



<CustomScrollView scrollContainer={{flex:1.5, backgroundColor:"silver",paddingVertical:10}} indicatorStyle={{backgroundColor:"#00000050"}} ScrollBarStyle={{ }} >
<LoanCard LoanData={LoanData}/>
</CustomScrollView>






        <View style={{flex:1, alignItems: 'center', marginBottom: 10 }}>
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
