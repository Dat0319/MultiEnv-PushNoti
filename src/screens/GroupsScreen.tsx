import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import CustomHeader from '~components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {dataDummy} from '~store/data';

export default function HomeScreen() {
  return (
    <View style={styles.home}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={[
            'rgba(53, 4, 47, 1)',
            'rgba(69, 3, 61, 0.9444152661064426)',
            'rgba(54, 54, 85, 94)',
          ]}
          start={{x: 1, y: 1}}
          end={{x: 0, y: 1}}
          style={styles.bgLinear}>
          <CustomHeader />
          <TouchableOpacity style={styles.group} activeOpacity={0.8}>
            <View style={styles.bannerNew}>
              <Text style={styles.textNew}>NEW</Text>
            </View>
            <ImageBackground
              source={{
                uri: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/05/cyperpunk-aesthetic-city-nightlife-1.jpg?q=50&fit=crop&w=2002&dpr=1.5',
              }}
              style={styles.imgEpisode}
              imageStyle={styles.imgStyle}>
              <Text style={styles.nameEpisode}>
                About flow and our motivations
              </Text>
              <Text style={styles.durationEpisode}>
                23.05.2019 {'   '}
                <MaterialCommunityIcons name="clock" /> 24:15:05
              </Text>
              <View style={styles.author}>
                <TouchableOpacity activeOpacity={0.8} style={styles.infoAuthor}>
                  <Image
                    source={{
                      uri: 'https://heroichollywood.com/wp-content/uploads/2021/05/Robert_Pattinson_Bruce_Wayne_The_Batman-1280x720.jpg',
                    }}
                    style={styles.imgAuthor}
                  />
                  <Text style={styles.nameAuthor}>Bruce Wayne</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnPlay}>
                  <Ionicons
                    name="md-play-outline"
                    color={'white'}
                    size={20}
                    style={styles.icPlay}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.podcasts}>
          <Text style={styles.listenPodcasts}>Listen Podcasts</Text>
          <View style={styles.filter}>
            <Text style={styles.filterActive}>Recent</Text>
            <Text style={styles.filterInactive}>Topics</Text>
            <Text style={styles.filterInactive}>Authors</Text>
            <Text style={styles.filterInactive}>Episodes</Text>
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={dataDummy}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.flatList}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.itemListenPodcast}>
                  <Image
                    source={{uri: item.userImage}}
                    style={styles.itemListenImg}
                  />
                  <Text style={styles.itemListenGroup} numberOfLines={1}>
                    {item.group}
                  </Text>
                  <Text style={styles.itemListenAuthor}>{item.userName}</Text>
                </TouchableOpacity>
              );
            }}
          />
          <View style={styles.headerLine} />
          <Text style={styles.listenPodcasts}>Podcasts authors</Text>
          <View style={styles.filter}>
            <Text style={styles.filterInactive}>Recent</Text>
            <Text style={[styles.filterInactive]}>Most podcasts</Text>
            <Text style={styles.filterInactive}>Most followed</Text>
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={dataDummy}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.flatList}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.itemPodcastAuthor}>
                  <Image
                    source={{uri: item.userImage}}
                    style={styles.itemImgPodcastAuthor}
                  />
                  <Text style={styles.itemPodcastAuthorName}>
                    {item.userName}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerLine: {
    height: 0.5,
    backgroundColor: 'gray',
  },
  itemPodcastAuthorName: {
    color: 'white',
    marginTop: '8%',
  },
  itemImgPodcastAuthor: {
    width: '70%',
    height: '100%',
    borderRadius: Math.round(
      ((Dimensions.get('screen').height * 0.2 +
        Dimensions.get('screen').width) *
        0.2) /
        2,
    ),
  },
  itemPodcastAuthor: {
    width: Dimensions.get('screen').width * 0.32,
    height: '40%',
    marginRight: 20,
  },
  itemListenAuthor: {
    color: 'white',
    marginTop: '3%',
  },
  itemListenGroup: {
    color: 'white',
    marginTop: '6%',
    fontWeight: 'bold',
  },
  itemListenImg: {
    width: '100%',
    height: '50%',
    borderRadius: Math.round(
      ((Dimensions.get('screen').height * 0.1 +
        Dimensions.get('screen').width) *
        0.1) /
        2,
    ),
    borderBottomRightRadius: 0,
  },
  itemListenPodcast: {
    width: Dimensions.get('screen').width * 0.4,
    marginRight: 30,
    height: '100%',
  },
  flatList: {
    alignItems: 'center',
  },
  podcasts: {
    marginHorizontal: '8%',
    height: Dimensions.get('screen').height,
  },
  filter: {
    flexDirection: 'row',
    marginTop: '8%',
    justifyContent: 'space-between',
  },
  icPlay: {
    paddingLeft: '5%',
    padding: '4%',
  },
  infoAuthor: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  bgLinear: {
    height: Dimensions.get('screen').height * 0.5,
    borderBottomLeftRadius: Math.round(
      ((Dimensions.get('screen').height * 0.2 +
        Dimensions.get('screen').width) *
        0.2) /
        2,
    ),
  },
  scroll: {
    flex: 1,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '12%',
    marginTop: '5%',
  },
  durationEpisode: {
    color: 'white',
    marginLeft: '12%',
    marginTop: '5%',
  },
  nameAuthor: {
    color: 'white',
    marginLeft: '6%',
  },
  bannerNew: {
    position: 'absolute',
    zIndex: 1,
    marginLeft: '10%',
    top: '-8%',
    borderRadius: Math.round(
      ((Dimensions.get('screen').height * 0.2 +
        Dimensions.get('screen').width) *
        0.2) /
        2,
    ),
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  imgEpisode: {
    width: '100%',
    height: '100%',
  },
  imgStyle: {
    borderRadius: Math.round(
      ((Dimensions.get('screen').height * 0.1 +
        Dimensions.get('screen').width) *
        0.1) /
        2,
    ),
    borderBottomRightRadius: 0,
  },
  nameEpisode: {
    color: 'white',
    fontSize: 27,
    fontWeight: '500',
    marginHorizontal: '12%',
    marginTop: '8%',
  },
  listenPodcasts: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '8%',
  },
  filterInactive: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '500',
  },
  filterActive: {
    color: 'red',
    fontSize: 16,
    fontWeight: '500',
  },
  textNew: {
    fontWeight: 'bold',
    color: 'white',
    padding: '2%',
    textAlign: 'center',
  },
  home: {
    flex: 1,
    backgroundColor: 'rgba(53, 4, 47, 1)',
  },
  group: {
    width: '85%',
    height: '60%',
    margin: '4%',
    elevation: 3,
    alignSelf: 'center',
  },
  imgAuthor: {
    height: '60%',
    width: '18%',
    borderRadius: Math.round(
      ((Dimensions.get('screen').height * 0.1 +
        Dimensions.get('screen').width) *
        0.1) /
        2,
    ),
  },
  btnPlay: {
    backgroundColor: 'red',
    borderRadius: Math.round(
      (Dimensions.get('screen').height + Dimensions.get('screen').width) / 2,
    ),
  },
});
