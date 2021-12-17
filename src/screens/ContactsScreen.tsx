import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import CustomHeader from '~components/Header';
import LanguageSelector from '~components/LanguageSelector';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {dataDummy} from '~store/data';

export default function ContactsScreen() {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      PushNotificationIOS.requestPermissions();
    } else {
      PushNotification.createChannel(
        {
          channelId: 'test-channel', // (required)
          channelName: 'My channel', // (required)
          channelDescription: 'A channel to categorize your notifications', // (optional) default: undefined.
          playSound: false, // (optional) default: true
          soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
          vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
        },
        (created: boolean) =>
          console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
      );
    }
  }, []);

  return (
    <View style={styles.home}>
      <CustomHeader />
      {/* <LanguageSelector /> */}
      <View style={styles.searchBarContainer}>
        <TouchableOpacity style={styles.searchBar}>
          <TextInput style={styles.txtInput} placeholder="Search friends" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.status}>Online (5)</Text>
        <View style={styles.tab}>
          {dataDummy
            .filter(function (item) {
              return item.userStatus === 'online';
            })
            .map(function ({userName, userImage}) {
              return (
                <TouchableOpacity style={styles.user}>
                  <View style={styles.userInfo}>
                    <Image source={{uri: userImage}} style={styles.image} />
                    <Text style={styles.userName}>{userName}</Text>
                  </View>
                  <View style={styles.userInfo}>
                    <Ionicons
                      name="information-circle-outline"
                      size={30}
                      color="gray"
                      style={styles.icInfo}
                    />
                    <MaterialIcons name="chat" size={30} color="gray" />
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
        <Text style={styles.status}>Others</Text>
        <View style={styles.tab}>
          {dataDummy
            .filter(function (item) {
              return item.userStatus !== 'online';
            })
            .map(function ({userName, userImage}) {
              return (
                <TouchableOpacity style={styles.user}>
                  <View style={styles.userInfo}>
                    <Image source={{uri: userImage}} style={styles.image} />
                    <Text style={styles.userName}>{userName}</Text>
                  </View>
                  <View style={styles.userInfo}>
                    <Ionicons
                      name="information-circle-outline"
                      size={30}
                      color="gray"
                      style={styles.icInfo}
                    />
                    <MaterialIcons name="chat" size={30} color="gray" />
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  searchBarContainer: {
    justifyContent: 'center',
    backgroundColor: '#e2d9d9',
    height: Dimensions.get('screen').height * 0.08,
    width: Dimensions.get('screen').width,
  },
  searchBar: {
    marginTop: 3,
    backgroundColor: 'white',
    width: '90%',
    height: '80%',
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtInput: {
    flex: 1,
  },
  user: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    justifyContent: 'space-between',
  },
  userImage: {
    width: 40,
    height: 40,
    marginVertical: 15,
    marginHorizontal: 5,
  },
  status: {
    color: 'gray',
    marginVertical: 8,
    marginHorizontal: 10,
  },
  image: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 15,
  },
  userName: {
    fontSize: 18,
  },
  tab: {
    borderTopWidth: 0.5,
    borderColor: 'gray',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icInfo: {
    marginRight: 10,
  },
});
