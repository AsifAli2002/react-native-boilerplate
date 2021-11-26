import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Icon } from 'react-native-vector-icons/Ionicons'
import { Images } from '../../constants/images'
import PressableButton from '../Pressable/Pressable'

export default function LoanCard({
  LoanAmount = '$ 7,500.00',
  Frequency = 'Monthly',
  InstallmentAmount = '$5000',
  onPress = () => {},
  data = [],
  targetKey = '1',
  ImageStyle = {}
}) {
  const [value, setValue] = useState(null)
  return (
    <>
      <View style={styles.rbWrapper}>
        <TouchableOpacity
          // onPress={() => setValue(!value)}
          activeOpacity={.95}
          style={[
            styles.mainContainer,
            { borderColor: value ? '#0c36ac' : '#fff' }
          ]}>
          <View style={styles.loanView}>
            <View style={styles.loanTextView}>
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Rubik-Medium',
                  color: '#00000050'
                }}>
                Loan Amount
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Rubik-Medium',
                  color: '#00000050'
                }}>
                Frequency
              </Text>
            </View>

            <View style={styles.loanTextView}>
              <Text
                style={{
                  fontSize: 17,
                  color: '#0c36ac',
                  fontFamily: 'Rubik-Bold'
                }}>
                {LoanAmount}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  color: '#00000099',
                  fontFamily: 'Rubik-Bold'
                }}>
                {Frequency}
              </Text>
            </View>
          </View>

          <View style={styles.borderView} />

          <View style={styles.installmentView}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Rubik-Medium',
                color: '#00000050'
              }}>
              Installment{''}{' '}
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Rubik-Bold',
                  color: '#00000099'
                }}>
                {InstallmentAmount}
              </Text>
            </Text>

            <PressableButton 
            onPress={() => setValue(!value)}
             title="Cash Advance"
             buttonStyle={{height:18, width:90, backgroundColor:"#e8ebf5"}}
             textStyle={{ fontSize: 9,fontFamily: 'Rubik-Medium',color: '#0c36ac80'}} 
              rippleRadius={50}
              borderRadius={15}
              rippleColor="#0c36ac30"
          
            />
              {/* <Text
                style={{
                  fontSize: 9,
                  fontFamily: 'Rubik-Medium',
                  color: '#0c36ac80'
                }}>
                Cash Advance
              </Text> */}
            {/* </PressableButton> */}
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  rbWrapper: {
    height: 130,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#0c36ac20',
    marginBottom: 15
  },
  mainContainer: {
    height: 130,
    width: '100%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6
  },

  loanView: {
    width: '90%',
    height: 80,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  loanTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  borderView: {
    width: '94%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: '#00000010'
  },

  installmentView: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  // buttonStyle: {
  //   // width: 90,
  //   // height: 15,
  //   backgroundColor: '#e8ebf5',
  //   borderRadius: 10,
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // }
})

// {data.map((item, i) => {

//   return (
//     <>

//       <TouchableOpacity>

//       </TouchableOpacity>
//     </>
//   )
// })}

// export default function LoanCard({
//   onPress = () => {},
//   data = [],
//   targetKey = "1",
//   ImageStyle = {},
// }) {

//   const [click, setClick] = useState(true)
//   const [selected, setSelected] = useState([])

//   const onSelect = (item) => {
//     var arr = []
//     const isSelected =  selected.findIndex((e) => e[targetKey] == item[targetKey] )
//     if (isSelected == -1) {
//       arr.push(item)
//       setSelected([...selected, ...arr])
//       setClick(!click)
//     }else {
//       var newArr = selected
//       newArr.splice(isSelected, 1)
//       setClick(!click)
//       setSelected(newArr)
//     }
//   }

//   // console.log("selected", selected)

//   return (
//     <>
//     <Text style={{height:30,fontSize: 17,marginTop:15,fontFamily:'Rubik-Medium'}}>
//       Selected Categories {data.length - selected.length}
//     </Text>
//       {data.map((item, i) => {
//         const isInclude =  selected.findIndex((e) => e[targetKey] == item[targetKey])
//         const isSelected = isInclude == -1 ? true : false
//         // console.log('isSelected', isSelected)
//         return (
//           <>

//             <TouchableOpacity
//               onPress={() => onSelect(item)}
//               key={i}
//               style={[
//                 styles.mainContainer,
//                 {
//                   backgroundColor: isSelected
//                     ? item.backgroundColor
//                     : `${item.backgroundColor}18`,
//                   borderColor: item.backgroundColor
//                 }
//               ]}
//               activeOpacity={1}>
//               <View style={[styles.ImageView, ImageStyle]}>
//                 <Image source={item.Image} style={{height:"100%", width:"100%", borderRadius:5}} />
//               </View>
//               <View style={{ flex: 1, marginLeft: 15 }}>
//                 <View style={{ alignItems: 'flex-end', marginTop: 4 }}>
//                   <View
//                     style={{
//                       height: 12,
//                       width: 12,
//                       borderRadius: 6,
//                       borderWidth: 1.4,
//                       borderColor: isSelected ? '#fff' : item.backgroundColor,
//                       alignItems: 'center',
//                       justifyContent: 'center'
//                     }}>
//                     <View
//                       style={{
//                         height: 5.5,
//                         width: 5.5,
//                         borderRadius: 3,
//                         backgroundColor: isSelected ? '#fff' : item.backgroundColor
//                       }}
//                     />
//                   </View>
//                 </View>
//                 <View style={styles.TextView}>
//                   <Text
//                     style={{
//                       fontSize: 14,
//                       fontFamily: 'Rubik-Medium',
//                       lineHeight: 17,
//                       letterSpacing: 0.08,
//                       marginBottom: 3,
//                       color: isSelected ? '#fff' : item.backgroundColor
//                     }}>
//                     {item.title}
//                   </Text>
//                   <Text
//                     style={{
//                       fontSize: 11,
//                       fontFamily: 'Rubik-Thin',
//                       lineHeight: 15,
//                       letterSpacing: 0.08,
//                       color: isSelected ? '#fff' : '#000'
//                     }}>
//                     {item.description}
//                   </Text>
//                 </View>
//               </View>
//             </TouchableOpacity>
//           </>
//         )
//       })}
//     </>
//   )
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     height: 100,
//     width: '90%',
//     flexDirection: 'row',
//     paddingHorizontal: 12,
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 5,
//     borderWidth: 1.4
//   },
//   ImageView: {
//     height: 80,
//     width: 78,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#ffff',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 4
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 4.65,

//     elevation: 8
//   },
//   TextView: {
//     height: 75,
//   }
// })
