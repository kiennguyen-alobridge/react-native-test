/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import DraggableFlatList from './src/DraggableFlatList';

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <DraggableFlatList/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
