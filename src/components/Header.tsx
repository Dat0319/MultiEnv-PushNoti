import {StyleSheet, Text, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {useRoute} from '@react-navigation/core';

const CustomHeader = () => {
  const route = useRoute();

  let iconName: string;

  const renderHeader = (routeName: string) => {
    switch (routeName) {
      case 'Groups':
        iconName = 'add';
        break;
      case 'Messages':
        iconName = 'search';
        break;
      case 'Contacts':
        iconName = 'add';
        break;
    }
    return (
      <>
        <Text style={[styles.edit, styles.message]}>Edit</Text>
        <Text style={styles.message}>{routeName}</Text>
        <Ionicons name={iconName} color="red" size={20} />
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
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  edit: {
    color: 'red',
  },
  message: {
    fontSize: 16,
  },
});
