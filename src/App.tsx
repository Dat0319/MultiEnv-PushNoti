// import {
//   NativeModules,
//   Platform,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useEffect} from 'react';

// import PushNotification from 'react-native-push-notification';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';

// const App = () => {
//   const env = NativeModules.RNConfig.ENV;

//   useEffect(() => {
//     if (Platform.OS === 'ios') {
//       PushNotificationIOS.requestPermissions();
//     } else {
//       PushNotification.createChannel(
//         {
//           channelId: 'test-channel', // (required)
//           channelName: 'My channel', // (required)
//           channelDescription: 'A channel to categorize your notifications', // (optional) default: undefined.
//           playSound: false, // (optional) default: true
//           soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
//           vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
//         },
//         (created: boolean) =>
//           console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
//       );
//     }
//   }, []);

//   const handleNotification = () => {
//     PushNotification.localNotification({
//       channelId: 'test-channel',
//       title: 'AnotherTSProject',
//       message: 'OK',
//       bigText: 'Notifications worked',
//       color: 'red',
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>This is</Text>
//       <TouchableOpacity onPress={handleNotification}>
//         <Text style={styles.envText}>{env}</Text>
//       </TouchableOpacity>
//       <Text style={styles.text}>Environment</Text>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 32,
//   },
//   envText: {
//     fontSize: 48,
//     fontWeight: 'bold',
//     color: 'red',
//   },
// });

import './translations/IMLocalize';

import React from 'react';
import RootNavigator from './navigation/RootNavigator';

export default function App() {
  return <RootNavigator />;
}
