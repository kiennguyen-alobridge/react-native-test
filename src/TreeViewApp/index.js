/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Recursive from './ListView';

const family = [
  {
    id: 'Grandparent',
    name: 'Grandpa',
    age: 78,
  },
  {
    id: 'Me',
    name: 'Me',
    age: 30,
  },
  {
    id: 'Erick',
    name: 'Erick',
    age: 10,
  },
  {
    id: 'Lisa',
    name: 'Lisa',
    age: 10,
  },
  {
    id: 'Rose',
    name: 'Rose',
    age: 12,
  },
  {
    id: 'Lisa2',
    name: 'Lisa',
    age: 10,
  },
];
const data = [
  {
    name: 'Cheese',
    value: 'cheese-value',
  },
  {
    name: 'Cheese',
    value: 'cheese-value',
    items: [
      {
        name: 'Spicy',
        value: 'spicy-value',
      },
      {
        name: 'Cheese',
        value: 'cheese-value',
        items: [
          {
            name: 'Spicy',
            value: 'spicy-value',
          },
          {
            name: 'Spicy',
            value: 'spicy-value',
          },
        ],
      },
    ],
  },
];
const TreeViewApp = () => {
  // const renderItem = ({item}) => {
  //   return (
  //     <View style={styles.item}>
  //       <Text>{item.name}</Text>
  //     </View>
  //   );
  // };
  return (
    <View style={styles.wrap}>
      <Recursive data={data} />
    </View>
  );
};
export default TreeViewApp;
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  item: {
    height: 50,
    backgroundColor: '#00000030',
    margin: 10,
  },
});
