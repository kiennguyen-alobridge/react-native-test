/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TreeViewApp from './src/TreeViewApp';

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <TreeViewApp />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
