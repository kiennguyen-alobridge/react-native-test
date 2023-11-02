/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View,StyleSheet} from 'react-native';
import Modalize from './src/modalize';

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <Modalize />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingTop:100
  },
});

export default App;
