/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MenuBerita from './Component/MenuBerita';
import MenuGame from './Component/MenuGame';
import MenuHits from './Component/MenuHits';
import MenuUtama from './Component/MenuUtama';

const Footer = () => {
  var niomic="@Niomic";
    return (
        <View>
          <Text>Ini adalah Footer Niomic</Text>
          <Text>{niomic}</Text>
        </View>
    );
}

export default class App extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="blue" />
        <Text>Halaman Header</Text>
        <MenuUtama />
        <MenuGame />
        <MenuBerita />
        <MenuHits />
        <Footer />
      </View>
    );
  }
}