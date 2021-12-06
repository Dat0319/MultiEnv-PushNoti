import {StyleSheet, View} from 'react-native';

import React from 'react';
import Selector from '../component/LanguageSelector';

export default function SettingsScreen() {
  return (
    <View style={styles.settings}>
      <Selector />
    </View>
  );
}

const styles = StyleSheet.create({
  settings: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
