import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {useRoute} from '@react-navigation/core';

const CustomHeader = () => {
  const route = useRoute();

  const renderHeader = (routeName: string) => {
    let icName = '',
      icColor,
      icSize,
      screenName;
    switch (routeName) {
      case 'Groups':
        screenName = 'pcast';
        break;
      case 'Messages':
        icName = 'arrow-back';
        icColor = 'white';
        icSize = 23;
        break;
      case 'Contacts':
        screenName = 'pcast';
        break;
      default:
        break;
    }
    return (
      <>
        <View style={styles.headerLeft}>
          {routeName === 'Messages' ? (
            <Ionicons name={icName} color={icColor} size={icSize} />
          ) : (
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8TnQPf7Y6McEsOk4S0OP0F5rrbKktPYZ6w&usqp=CAU',
              }}
              style={styles.imgBanner}
            />
          )}
          <Text style={styles.txtBanner}>{screenName}</Text>
        </View>
        <View style={styles.btnActions}>
          <Ionicons
            name="search"
            color="white"
            size={25}
            style={styles.icSearch}
          />
          <Ionicons name="list" color="white" size={25} />
        </View>
      </>
    );
  };

  return <View style={styles.header}>{renderHeader(route.name)}</View>;
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  imgBanner: {
    height: '100%',
    width: '23%',
    borderRadius: Math.round(
      ((Dimensions.get('screen').height * 0.1 +
        Dimensions.get('screen').width) *
        0.1) /
        2,
    ),
  },
  txtBanner: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: '8%',
  },
  header: {
    marginTop: '10%',
    marginHorizontal: '8%',
    marginBottom: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  edit: {
    color: 'red',
  },
  message: {
    fontSize: 16,
  },
  icSearch: {
    marginRight: 30,
  },
  btnActions: {
    flexDirection: 'row',
  },
});
