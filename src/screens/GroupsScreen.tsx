import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CustomHeader from '~components/Header';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {dataDummy} from '~store/data';

export default function HomeScreen() {
  return (
    <View style={styles.home}>
      <CustomHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.group}>
          <Text style={styles.groupName}>Gotham City Police Department</Text>
          <View style={styles.members}>
            <Text style={styles.groupStatus}>5 minutes ago</Text>
            <Text style={styles.groupStatus}>-</Text>
            <Text style={styles.groupStatus}>4 members</Text>
          </View>
          <View style={styles.members}>
            {dataDummy
              .filter(function (item) {
                return item.group === 'Gotham City Police Department';
              })
              .map(function ({userImage}) {
                return (
                  <View style={styles.userImage}>
                    <Image source={{uri: userImage}} style={styles.image} />
                  </View>
                );
              })}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.group}>
          <Text style={styles.groupName}>Wayne Enterprises</Text>
          <View style={styles.members}>
            <Text style={styles.groupStatus}>2 days ago</Text>
            <Text style={styles.groupStatus}>-</Text>
            <Text style={styles.groupStatus}>5 members</Text>
          </View>
          <View style={styles.members}>
            {dataDummy
              .filter(function (item) {
                return item.group === 'Wayne Enterprises';
              })
              .map(function ({userImage}) {
                return (
                  <View style={styles.userImage}>
                    <Image source={{uri: userImage}} style={styles.image} />
                  </View>
                );
              })}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.group}>
          <Text style={styles.groupName}>Falcone Crime Family</Text>
          <View style={styles.members}>
            <Text style={styles.groupStatus}>Saturday</Text>
            <Text style={styles.groupStatus}>-</Text>
            <Text style={styles.groupStatus}>7 members</Text>
          </View>
          <View style={styles.members}>
            {dataDummy
              .filter(function (item) {
                return item.group === 'Falcone Crime Family';
              })
              .map(function ({userImage}) {
                return (
                  <View style={styles.userImage}>
                    <Image source={{uri: userImage}} style={styles.image} />
                  </View>
                );
              })}
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  group: {
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').height * 0.25,
    margin: 15,
    elevation: 3,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  members: {
    flexDirection: 'row',
  },
  userImage: {
    width: 40,
    height: 40,
    marginVertical: 15,
    marginHorizontal: 5,
  },
  groupStatus: {
    color: 'gray',
    marginHorizontal: 5,
  },
  groupName: {
    fontSize: 20,
  },
  image: {
    flex: 1,
    borderRadius: 20,
  },
});
