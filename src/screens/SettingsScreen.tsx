import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import React, {useCallback, useMemo} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

interface DataType {
  id: string;
  title: string;
  note?: string;
}

// FIle này viết tốt nhá cần xem lại bên contact screen đối chiếu lại xem
// Em xem lại có gì chưa hiểu thì hỏi a sau nhá.

export default function SettingsScreen() {
  const options = useMemo(
    () => [
      {
        id: '1',
        title: 'Email address',
        note: 'viego@symu.co',
      },
      {
        id: '2',
        title: 'Telephone',
        note: '00 22 333 4444',
      },
      {
        id: '3',
        title: 'Notifications',
      },
      {
        id: '4',
        title: 'Settings',
      },
      {
        id: '5',
        title: 'Feedback',
      },
      {
        id: '6',
        title: 'Get help',
      },
      {
        id: '7',
        title: 'Delete account',
      },
    ],
    [],
  );

  const renderItem = useCallback(({item}: {item: DataType}) => {
    return (
      <>
        <TouchableOpacity style={styles.options}>
          {item.title === 'Delete account' ? (
            <Text style={[styles.title, styles.titleDel]}>{item.title}</Text>
          ) : (
            <Text style={styles.title}>{item.title}</Text>
          )}
          <View style={styles.interact}>
            <Text style={[styles.title, styles.note]}>{item.note}</Text>
            {item.title === 'Notifications' ||
            item.title === 'Delete account' ? null : (
              <Ionicons name="arrow-forward" size={20} color="gray" />
            )}
          </View>
        </TouchableOpacity>
      </>
    );
  }, []);

  return (
    <View style={styles.settings}>
      <LinearGradient
        colors={['#bc1004', '#ff1100', '#f24a3d']}
        style={styles.account}>
        <View style={styles.header}>
          <Text style={styles.btnEdit}>Edit</Text>
          <Ionicons name="log-out-outline" size={30} color="white" />
        </View>
        <View style={styles.user}>
          <Image
            source={{
              uri: 'https://heroichollywood.com/wp-content/uploads/2021/05/Robert_Pattinson_Bruce_Wayne_The_Batman-1280x720.jpg',
            }}
            style={styles.image}
          />
          <Text style={styles.name}>Bruce Wayne</Text>
          <Text style={styles.quote}>
            She was the star that lit my path. {'\n'}Without her, darkness.
          </Text>
        </View>
      </LinearGradient>
      <FlatList
        data={options}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  settings: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  account: {
    height: Dimensions.get('screen').height * 0.4,
  },
  btnEdit: {
    fontSize: 18,
    color: 'white',
  },
  name: {
    fontSize: 20,
    marginVertical: 15,
    color: 'white',
    textAlign: 'center',
  },
  quote: {
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  user: {
    alignItems: 'center',
  },
  options: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
  },
  note: {
    color: 'gray',
    marginRight: 5,
  },
  interact: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleDel: {
    color: 'red',
  },
});
