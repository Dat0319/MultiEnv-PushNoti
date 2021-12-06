import {NativeModules, Pressable, StyleSheet, Text, View} from 'react-native';

import PushNotification from 'react-native-push-notification';
import React from 'react';
import {useTranslation} from 'react-i18next';

const LANGUAGES = [
  {code: 'en', label: 'English'},
  {code: 'fr', label: 'Français'},
];

const Selector = () => {
  const {t, i18n} = useTranslation();
  const selectedLanguageCode = i18n.language;
  const env = NativeModules.RNConfig.ENV;

  const setLanguage = (code: string) => {
    return i18n.changeLanguage(code);
  };

  const handleNotification = (language: string) => {
    setLanguage(language);
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'AnotherTSProject',
      message: 'OK',
      bigText: 'Notifications worked',
      color: 'red',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.environment}>{env}</Text>
        <Text style={styles.title}>{t('common:languageSelector')}</Text>
      </View>
      {LANGUAGES.map(language => {
        const selectedLanguage = language.code === selectedLanguageCode;

        return (
          <Pressable
            key={language.code}
            style={styles.buttonContainer}
            disabled={selectedLanguage}
            onPress={() => handleNotification(language.code)}>
            <Text
              style={[selectedLanguage ? styles.selectedText : styles.text]}>
              {language.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  row: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
  },
  environment: {
    color: 'red',
    fontSize: 28,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    color: 'black',
    paddingVertical: 4,
  },
  selectedText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'red',
    paddingVertical: 4,
  },
});

export default Selector;
