// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {connect, Connect} from 'react-redux';
// import {tambahinAngka, kuranginAngka} from './action/index';

// class Counter extends React.Component {
//   render() {
//     return (
//       <View style={styles.counterContainer}>
//         <Text style={styles.counterInfo}>
//           HITUNG: {this.props.reducerAngka.angkaSekarang}
//           </Text>
//         <View style={styles.counterBtnContainer}>
//           <TouchableOpacity style={styles.counterButtonMinus}>
//             <Text style={styles.counterText}>KURANG (-)</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.counterButtonPlus}>
//             <Text style={styles.counterText}>TAMBAH (+)</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     reducerAngka: state.angkaReducer,
//   };
// };

// const mapDispatchToProps = {
//   tambahinAngka,
//   kuranginAngka,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// const styles = StyleSheet.create({
//   counterContainer: {
//     width: '100%',
//     padding: 20,
//     backgroundColor: 'white',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,

//     elevation: 5,
//     marginBottom: 10,
//   },
//   counterBtnContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//     width: '100%',
//   },
//   counterInfo: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     fontSize: 18,
//   },
//   counterButtonMinus: {
//     backgroundColor: '#db6767',
//     marginLeft: 5,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   counterButtonPlus: {
//     backgroundColor: '#90db7d',
//     marginLeft: 5,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   counterText: {
//     color: '#e0e0e0',
//     padding: 10,
//   },
// });
