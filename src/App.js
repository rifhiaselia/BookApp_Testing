import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Router';
import NetInfo from '@react-native-community/netinfo';
import {Store, Persistor} from './store';
import {useState} from 'react';
import {NoInternet} from './Components';
import {PersistGate} from 'redux-persist/integration/react';

function App() {
  const [isOffline, setOfflineStatus] = useState(false);

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });
    return () => removeNetInfoSubscription();
  }, []);

  return (
    <>
      {isOffline ? (
        <NoInternet />
      ) : (
        <Provider store={Store}>
          <PersistGate loading={null} persistor={Persistor}>
            <NavigationContainer>
              <Router />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      )}
    </>
  );
}

export default App;

// import { SafeAreaView, ScrollView, useColorScheme, } from 'react-native'
// import React from 'react'
// import { Colors } from 'react-native/Libraries/NewAppScreen'
// import { Provider } from 'react-redux'
// import { store } from './src/store'
// import Counter from './src/Counter'
// import BookApp from './src/Container'

// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark'

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   }

//   return (
//     <Provider store={store}>
//       <SafeAreaView style={backgroundStyle}>
//         <ScrollView
//         contentInsetAdjustmentBehavior='automatic'
//         style={backgroundStyle}>
//           <BookApp/>
//         </ScrollView>
//       </SafeAreaView>
//     </Provider>
//   )
// }

// export default App
