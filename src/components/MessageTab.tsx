import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Swipeable} from 'react-native-gesture-handler';

interface Props {
  userName: string;
  message: string;
  time: string;
  userImage: string;
}

const MessageTab: FC<Props> = ({userName, message, time, userImage}) => {
  const [selected, setSelected] = useState(false);
  const rightSwipeActions = () => {
    return (
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btnMore}>
          <MaterialIcons
            name="more-horiz"
            color="black"
            size={30}
            style={styles.icDelete}
          />
          <Text style={[styles.txtDelete, styles.txtMore]}>More</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient
            colors={['#bc1004', '#ff1100', '#f24a3d']}
            style={styles.btnDelete}>
            <Ionicons
              name="trash"
              color="white"
              size={30}
              style={styles.icDelete}
            />
            <Text style={styles.txtDelete}>Delete</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Swipeable
      renderRightActions={rightSwipeActions}
      containerStyle={styles.swipeTab}>
      <TouchableOpacity
        activeOpacity={1}
        style={selected ? styles.tabActive : styles.tabInactive}
        onPress={() => setSelected(!selected)}>
        <Image source={{uri: userImage}} style={styles.userImage} />
        <View style={styles.userMessage}>
          <Text style={styles.userName}>{userName}</Text>
          <Text numberOfLines={1} style={styles.message}>
            {message}
          </Text>
        </View>
        <Text style={[styles.message, styles.time]}>{time}</Text>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default MessageTab;

const styles = StyleSheet.create({
  tabInactive: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
  },
  tabActive: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eeeeee',
    padding: 10,
  },
  userMessage: {
    width: Dimensions.get('screen').width * 0.5,
    marginTop: 10,
  },
  userName: {
    fontSize: 18,
  },
  message: {
    marginTop: 3,
    color: 'gray',
  },
  time: {
    fontSize: 16,
    width: Dimensions.get('screen').width * 0.2,
    textAlign: 'right',
    marginTop: 10,
  },
  userImage: {
    width: Dimensions.get('screen').width * 0.18,
    height: Dimensions.get('screen').height * 0.1,
    borderRadius: 35,
    backgroundColor: 'red',
  },
  icDelete: {
    marginTop: 5,
  },
  txtDelete: {
    color: 'white',
    fontWeight: '600',
    marginHorizontal: 20,
  },
  txtMore: {
    color: 'black',
  },
  btnMore: {
    backgroundColor: '#e2d9d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnDelete: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bgDelete: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  swipeTab: {
    backgroundColor: 'white',
  },
  buttons: {
    flexDirection: 'row',
  },
});
