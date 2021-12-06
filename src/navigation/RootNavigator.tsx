import * as React from 'react';

import {StyleSheet, View} from 'react-native';

import HomeScreen from '~screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import SettingsScreen from '~screens/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  const {t} = useTranslation();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="message-text-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="A"
          component={HomeScreen}
          options={{
            tabBarLabel: t('navigate:home'),
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account-multiple-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="B"
          component={HomeScreen}
          options={{
            tabBarLabel: t('navigate:home'),
            tabBarIcon: ({color, size}) => (
              <LinearGradient
                colors={['#bc1004', '#ff1100', '#f24a3d']}
                style={styles.btnAdd}>
                <Ionicons
                  name="add"
                  color="white"
                  size={size}
                  style={styles.icAdd}
                />
              </LinearGradient>
            ),
          }}
        />
        <Tab.Screen
          name="C"
          component={HomeScreen}
          options={{
            tabBarLabel: t('navigate:home'),
            tabBarIcon: ({color, size}) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: t('navigate:settings'),
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  btnAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 35,
  },
  icAdd: {
    marginLeft: 3,
  },
});
