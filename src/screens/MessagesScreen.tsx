import * as Progress from 'react-native-progress';

import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import CustomHeader from '~components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {dataDummy} from '~store/data';

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={{
            uri: 'https://st2.depositphotos.com/4155807/8838/v/600/depositphotos_88386512-stock-illustration-vertical-cartoon-night-background.jpg',
          }}
          style={styles.imgBackground}>
          <CustomHeader />
          <Text style={styles.title}>
            About flow and our {'\n'} motivations
          </Text>
          <Text style={styles.author}>John Doe & Amanda Smith</Text>
          <View style={styles.btnActions}>
            <Ionicons name="ios-chevron-back-outline" size={35} color="white" />
            <TouchableOpacity activeOpacity={0.8} style={styles.btnPause}>
              <Ionicons
                name="pause-outline"
                size={30}
                color="white"
                style={styles.icPause}
              />
            </TouchableOpacity>
            <Ionicons
              name="ios-chevron-forward-outline"
              size={35}
              color="white"
            />
          </View>
          <View style={styles.content}>
            <Progress.Bar
              progress={0.65}
              width={Dimensions.get('screen').width * 0.85}
              color={'red'}
            />
            <View style={styles.overview}>
              <Text style={styles.duration}>24:15:05</Text>
              <View style={styles.ratings}>
                <View style={styles.like}>
                  <TouchableOpacity activeOpacity={0.8}>
                    <Ionicons name="heart" style={styles.icLike} />
                  </TouchableOpacity>
                  <Text style={styles.duration}>37.501</Text>
                </View>
                <View style={styles.dislike}>
                  <TouchableOpacity activeOpacity={0.8}>
                    <Ionicons name="heart-dislike" style={styles.icLike} />
                  </TouchableOpacity>
                  <Text style={styles.dislikeNum}>4.000</Text>
                </View>
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <View style={styles.ratings}>
                <View style={styles.like}>
                  <TouchableOpacity activeOpacity={0.8} style={styles.btnWave}>
                    <MaterialCommunityIcons
                      name="waveform"
                      style={styles.icWave}
                      size={20}
                    />
                  </TouchableOpacity>
                  <Text style={styles.duration}>Episode 2</Text>
                </View>
                <View style={styles.download}>
                  <TouchableOpacity activeOpacity={0.8} style={styles.btnWave}>
                    <MaterialCommunityIcons
                      name="download"
                      style={styles.icWave}
                      size={20}
                    />
                  </TouchableOpacity>
                  <Text style={styles.duration}>Download: 50mb</Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="dots-vertical"
                style={styles.icDots}
                size={20}
              />
            </View>
            <Text style={styles.description}>
              The Big Oxmax advised her not to do so, because there were
              thousands of bad Commas, with Question Marks and devious Semikoli,
              but the Little Blind Text didn't listen.
            </Text>
            <Text style={styles.episodes}>Episodes (10)</Text>
            {dataDummy.map(item => (
              <TouchableOpacity
                activeOpacity={0.8}
                key={item.id}
                style={styles.unit}>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnPlay}>
                  <Ionicons name="md-play-outline" color={'white'} size={20} />
                </TouchableOpacity>
                <View>
                  <Text style={styles.duration}>{item.userName}</Text>
                  <Text style={styles.dislikeNum}>{item.message}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  btnPlay: {
    backgroundColor: 'red',
    marginRight: 10,
    padding: 10,
    borderRadius: 20,
  },
  unit: {
    backgroundColor: 'black',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(53, 4, 47, 1)',
  },
  tab: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  imgBackground: {
    height: '100%',
  },
  scroll: {
    flex: 1,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 23,
    fontWeight: '600',
    marginTop: 25,
  },
  author: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 15,
  },
  btnActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  icPause: {
    padding: 10,
  },
  btnPause: {
    backgroundColor: 'red',
    borderRadius: 30,
    marginHorizontal: 20,
  },
  content: {
    height: '100%',
    backgroundColor: 'rgba(53, 4, 47, 1)',
    marginTop: 40,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 30,
  },
  duration: {
    color: 'white',
    fontWeight: '600',
  },
  dislikeNum: {
    color: 'gray',
    fontWeight: '600',
  },
  description: {
    color: 'gray',
    fontWeight: '600',
  },
  icLike: {
    color: 'white',
    marginRight: 5,
  },
  icDots: {
    color: 'white',
  },
  icWave: {
    color: 'white',
    padding: 5,
  },
  like: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  download: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  dislike: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratings: {
    flexDirection: 'row',
  },
  overview: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionContainer: {
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnWave: {
    backgroundColor: 'rgba(73, 56, 71, 1)',
    borderRadius: 30,
    marginRight: 5,
  },
  episodes: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    paddingVertical: 30,
  },
});
