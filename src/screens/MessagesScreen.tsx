import {StyleSheet, View} from 'react-native';

import CustomHeader from '~components/Header';
import {FlatList} from 'react-native-gesture-handler';
import MessageTab from '~components/MessageTab';
import React from 'react';
import {dataDummy} from '~store/data';

export default function MessagesScreen() {
  const renderMessage = (data: {
    userName: string;
    message: string;
    time: string;
    userImage: string;
  }) => {
    return (
      <MessageTab
        userName={data.userName}
        message={data.message}
        time={data.time}
        userImage={data.userImage}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* File này nhìn cách viết là ổn rồi đó e  */}
      <CustomHeader />
      <FlatList
        data={dataDummy}
        renderItem={({item}) => renderMessage(item)}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
});
