import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';

import CustomHeader from '~components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {dataDummy} from '~store/data';

export default function HomeScreen() {
  return (
    <View style={styles.home}>
      <CustomHeader />
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={styles.browse}>Browse</Text>
          <View style={styles.searchBar}>
            <TextInput style={styles.txtInput} defaultValue="Robert" />
            <Ionicons name="search" size={20} color="gray" />
          </View>
          <ScrollView
            horizontal={true}
            style={styles.browsingList}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.categories}>
              <TouchableOpacity style={styles.categoriesButton}>
                <MaterialIcons
                  name="category"
                  color="white"
                  size={20}
                  style={styles.iconInactive}
                />
              </TouchableOpacity>
              <Text style={styles.optionInactive}>Categories</Text>
            </View>
            <View style={styles.categories}>
              <TouchableOpacity style={styles.categoriesButton}>
                <Ionicons
                  name="globe"
                  color="white"
                  size={20}
                  style={styles.iconInactive}
                />
              </TouchableOpacity>
              <Text style={styles.optionInactive}>Topics</Text>
            </View>
            <View style={styles.categories}>
              <TouchableOpacity style={styles.categoriesButton}>
                <Ionicons
                  name="sad"
                  color="red"
                  size={20}
                  style={styles.iconInactive}
                />
              </TouchableOpacity>
              <Text style={styles.optionActive}>Authors</Text>
            </View>
            <View style={styles.categories}>
              <TouchableOpacity style={styles.categoriesButton}>
                <MaterialCommunityIcons
                  name="microphone"
                  color="white"
                  size={20}
                  style={styles.iconInactive}
                />
              </TouchableOpacity>
              <Text style={styles.optionInactive}>Podcasts</Text>
            </View>
            <View style={styles.categories}>
              <TouchableOpacity style={styles.categoriesButton}>
                <Ionicons
                  name="albums"
                  color="white"
                  size={20}
                  style={styles.iconInactive}
                />
              </TouchableOpacity>
              <Text style={styles.optionInactive}>Episodes</Text>
            </View>
          </ScrollView>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.authorsList}>Authors</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {dataDummy.map(item => (
              <TouchableOpacity activeOpacity={0.8} style={styles.unit}>
                <Image
                  source={{uri: item.userImage}}
                  style={styles.authorImg}
                />
                <View style={styles.authorInfo}>
                  <Text style={styles.authorName}>{item.userName}</Text>
                  <Text style={styles.authorName}>{item.message}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  unit: {
    flexDirection: 'row',
    height: Dimensions.get('screen').height * 0.17,
    marginTop: '10%',
  },
  authorInfo: {
    alignSelf: 'flex-end',
    backgroundColor: 'black',
    width: '100%',
    padding: '8%',
    borderBottomRightRadius: 0,
    borderRadius: Math.round((Dimensions.get('screen').height * 0.05) / 2),
  },
  authorName: {
    textAlign: 'right',
    color: 'white',
  },
  authorImg: {
    width: '50%',
    height: '100%',
    borderRadius: Math.round((Dimensions.get('screen').height * 0.05) / 2),
    marginLeft: '3%',
    position: 'absolute',
    zIndex: 1,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  authorsList: {
    marginTop: '10%',
    color: 'gray',
    fontSize: 18,
    marginBottom: '2%',
  },
  optionActive: {
    color: 'red',
    marginTop: 10,
  },
  optionInactive: {
    color: 'gray',
    marginTop: 10,
  },
  iconInactive: {
    padding: 20,
  },
  categoriesButton: {
    backgroundColor: 'rgba(73, 56, 71, 1)',
    borderRadius: 40,
  },
  categories: {
    alignItems: 'center',
    marginRight: 25,
  },
  browsingList: {
    flexDirection: 'row',
    marginTop: '10%',
  },
  txtInput: {
    color: 'white',
    width: '94%',
  },
  searchBar: {
    marginTop: '10%',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'black',
    padding: '4%',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  browse: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: '5%',
  },
  container: {
    marginHorizontal: '8%',
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  home: {
    flex: 1,
    backgroundColor: 'rgba(53, 4, 47, 1)',
  },
});
