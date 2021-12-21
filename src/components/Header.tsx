import {StyleSheet, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {useRoute} from '@react-navigation/core';

const CustomHeader = () => {
  const route = useRoute();

  const renderHeader = (routeName: string) => {
    switch (routeName) {
      case 'Groups':
        break;
      case 'Messages':
        break;
      case 'Contacts':
        break;
    }
    return (
      <>
        <Ionicons name="arrow-back" color="white" size={25} />
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
  header: {
    marginTop: 20,
    padding: 15,
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
