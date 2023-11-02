import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';
import { Modalize } from 'react-native-modalize';
import DraggableFlatList, {
  ScaleDecorator,
} from 'react-native-draggable-flatlist';

const DraggableView = () => {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };

  const initialData = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const [data, setData] = useState(initialData);
  const renderItem = ({ item, drag, isActive }) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onLongPress={drag}
        disabled={isActive}
        style={[styles.rowItem]}>
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'yellow' }}>
      <TouchableOpacity onPress={onOpen}>
        <Text style={styles.title}>React Native Sortable List</Text>
      </TouchableOpacity>
      <Modalize
        tapGestureEnabled={false}
        closeSnapPointStraightEnabled={false}
        ref={modalizeRef}
        childrenStyle={{
          flex: 1,
          backgroundColor: 'green',
        }}
        withHandle={false}
        snapPoint={500}
        HeaderComponent={
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.title}>Close</Text>
          </TouchableOpacity>
        }
        customRenderer={
          <Animated.View
            style={{
              backgroundColor: 'red',
              alignItems: 'center',
              flex: 1,
            }}>
            <View style={{ flex: 1 }}>
              <DraggableFlatList
                data={data}
                onDragEnd={({ data }) => setData(data)}
                keyExtractor={item => item}
                renderItem={renderItem}
              />
            </View>
          </Animated.View>
        }
      />
    </View>
  );
};

export default DraggableView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
});
