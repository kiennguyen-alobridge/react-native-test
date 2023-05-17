/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TreeView from 'react-native-final-tree-view';

const family = [
  {
    id: 'Grandparent',
    name: 'Grandpa',
    age: 78,
    children: [
      {
        id: 'Me',
        name: 'Me',
        age: 30,
        children: [
          {
            id: 'Erick',
            name: 'Erick',
            age: 10,
            children: [
              {
                id: 'Lisa',
                name: 'Lisa',
                age: 10,
              },
            ],
          },
          {
            id: 'Rose',
            name: 'Rose',
            age: 12,
            children: [
              {
                id: 'Lisa',
                name: 'Lisa',
                age: 10,
              },
            ],
          },
        ],
      },
    ],
  },
];
const family2 = [
  {
    id: 'Grandparent',
    name: 'Grandpa',
    age: 78,
    children: [
      {
        id: 'Me',
        name: 'Me',
        age: 30,
        children: [
          {
            id: 'Erick',
            name: 'Erick',
            age: 10,
            children: [
              {
                id: 'Lisa',
                name: 'Lisa',
                age: 10,
              },
            ],
          },
          {
            id: 'Rose',
            name: 'Rose',
            age: 12,
            children: [
              {
                id: 'Lisa',
                name: 'Lisa',
                age: 10,
                children: [
                  {
                    id: 'jenifer',
                    name: 'jenifer',
                    age: 10,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
/**
 * TreeView example. Show hierarchical data of company structure.
 */
const TreeViewExample = () => {
  const [data, setData] = useState(family);
  function getIndicator(isExpanded, hasChildrenNodes, level, node) {
    if (!hasChildrenNodes) {
      return (
        <Text style={{flex: 1, marginLeft: 25 * level}}>
          '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'{node.name}
        </Text>
      );
    } else {
      return (
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            flex: 1,
            marginLeft: 25 * level,
          }}>
          =========================={node.name}
        </Text>
      );
    }
  }

  return (
    <View style={{flex: 1}}>
      <TreeView
        data={data} // defined above
        renderNode={({node, level, isExpanded, hasChildrenNodes}) => {
          return (
            <View style={styles.wrap}>
              {getIndicator(isExpanded, hasChildrenNodes, level, node)}
            </View>
          );
        }}
      />
      <Text
        style={{position: 'absolute', bottom: 10, left: 10}}
        onPress={() => {
          setData(family2);
        }}>
        adddd
      </Text>
    </View>
  );
};
export default TreeViewExample;
const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    backgroundColor: '#00000010',
    paddingVertical: 20,
  },
});
