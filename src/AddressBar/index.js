/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
const URL =
  'https://cse.google.co.jp/cse?cx=partner-pub-0789722191899489%3A8228794694&ie=UTF-8';
const AddressBar = () => {
  return (
    <View style={styles.container}>
      <WebView source={{uri: URL}} style={styles.webview} />
    </View>
  );
};

export default AddressBar;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  webview: {
    flex: 1,
    backgroundColor: '#DDD',
  },
});
