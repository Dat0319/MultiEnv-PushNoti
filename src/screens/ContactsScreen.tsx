import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useCallback} from 'react';
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

const UnitItem = ({source, name}: {source: string; name: string}) => {
  return (
    <TouchableOpacity style={styles.user}>
      <View style={styles.userInfo}>
        <Image source={{uri: source}} style={styles.image} />
        <Text style={styles.userName}>{name}</Text>
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
};

export default function ContactsScreen() {
  const checkPermissionNotification = useCallback(() => {
    if (Platform.OS === 'ios') {
      PushNotificationIOS.requestPermissions();
    } else {
      // check permission for android
    }
  }, []);

  const handlePushNotification = useCallback((ttl: string, desc: string) => {
    PushNotification.createChannel(
      {
        channelId: 'test-channel', // (required)
        channelName: ttl, // (required)
        channelDescription: desc, // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created: boolean) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }, []);

  useEffect(() => {
    checkPermissionNotification();
    handlePushNotification(
      'My channel',
      'A channel to categorize your notifications',
    );
  }, [checkPermissionNotification, handlePushNotification]);

  return (
    // Nên đặt tên class là general tham khảo cách đặt tên của bootstrap
    <View style={styles.container}>
      <CustomHeader />
      {/* <LanguageSelector /> */}
      <View style={styles.searchBarContainer}>
        <TouchableOpacity style={styles.searchBar}>
          <TextInput style={styles.searchInput} placeholder="Search friends" />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.status}>Online ({dataDummy.length})</Text>
        <View style={styles.unit}>
          {/* Sự khác biệt của function thường và arrow function là gì */}
          {dataDummy
            .filter(item => item.userStatus === 'online')
            .map(({userName, userImage}) => (
              <UnitItem source={userImage} name={userName} />
            ))}
        </View>
        <Text style={styles.status}>Others</Text>
        <View style={styles.unit}>
          {dataDummy
            .filter(item => item.userStatus !== 'online')
            .map(({userName, userImage}) => (
              <UnitItem source={userImage} name={userName} />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    justifyContent: 'center',
    backgroundColor: '#e2d9d9',
    height: Dimensions.get('screen').height * 0.08,
    width: Dimensions.get('screen').width,
    // Nên viết ra một hàm responsive riêng
    // const reponsiveHeight = (number: number) => {
    //   return Dimensions.get('screen').height * (number / 375);
    // }
    // 3375 là width và height cơ bản của iphone 6 bên ios em có thể check lại
  },
  searchBar: {
    marginTop: 3,
    // Các phần về cả margin và padding cũng responsive
    backgroundColor: 'white',
    width: '90%',
    height: '80%',
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  searchInput: {
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
  unit: {
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
