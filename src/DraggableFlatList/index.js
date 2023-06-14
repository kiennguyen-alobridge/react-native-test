import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Animated,
  Image,
  Easing,
  Platform,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
// import { TouchableHighlight } from 'react-native-gesture-handler';
import SortableList from 'react-native-sortable-list';

const testData = [
  [
    {id: 'id_1', name: 'Name 1'},
    {id: 'id_2', name: 'Name 2'},
    {id: 'id_3', name: 'Name 3'},
    {id: 'id_4', name: 'Name 4'},
    {id: 'id_5', name: 'Name 5'},
    {id: 'id_6', name: 'Name 6'},
    {id: 'id_7', name: 'Name 7'},
    {id: 'id_8', name: 'Name 8'},
    {id: 'id_9', name: 'Name 9'},
    {id: 'id_10', name: 'Name 10'},
  ],
  [
    {id: 'id_11', name: 'Name 11'},
    {id: 'id_12', name: 'Name 12'},
    {id: 'id_13', name: 'Name 13'},
    {id: 'id_14', name: 'Name 14'},
    {id: 'id_15', name: 'Name 15'},
    {id: 'id_16', name: 'Name 16'},
    {id: 'id_17', name: 'Name 17'},
    {id: 'id_18', name: 'Name 18'},
    {id: 'id_19', name: 'Name 19'},
    {id: 'id_110', name: 'Name 110'},
  ],
];

const Draggable = () => {
  const [data1, setData1] = useState(testData[0]);
  const [data2, setData2] = useState(testData[1]);

  const [edit, setEdit] = useState(false);
  const handleEditPress = () => {
    setEdit(!edit);
  };

  const renderItem = useCallback(
    ({item, index, drag, isActive}) => {
      return (
        <View>
          <View
            style={[
              styles.item,
              {backgroundColor: isActive ? 'blue' : 'green'},
            ]}>
            <View style={styles.item2}>
              {edit && <View style={styles.checkboxContainer} />}
              <Text>{item.name}</Text>
            </View>
            {edit && <TouchableOpacity style={styles.touch} onPressIn={drag} />}
          </View>
        </View>
      );
    },
    [edit],
  );
  const scrollViewRef = React.useRef(null);
  const onScroll = React.useCallback(event => {
    const {y} = event.nativeEvent.contentOffset;
    scrollViewRef.current.setNativeProps({scrollEnabled: y === 0});
  }, []);

  const data = {
    0: {
      image: 'https://placekitten.com/200/240',
      text: 'Chloe',
    },
    1: {
      image: 'https://placekitten.com/200/201',
      text: 'Jasper',
    },
    2: {
      image: 'https://placekitten.com/200/202',
      text: 'Pepper',
    },
    3: {
      image: 'https://placekitten.com/200/203',
      text: 'Oscar',
    },
    4: {
      image: 'https://placekitten.com/200/204',
      text: 'Dusty',
    },
    5: {
      image: 'https://placekitten.com/200/205',
      text: 'Spooky',
    },
    6: {
      image: 'https://placekitten.com/200/210',
      text: 'Kiki',
    },
    7: {
      image: 'https://placekitten.com/200/215',
      text: 'Smokey',
    },
    8: {
      image: 'https://placekitten.com/200/220',
      text: 'Gizmo',
    },
    9: {
      image: 'https://placekitten.com/220/239',
      text: 'Kitty',
    },
  };

  const data3 = {
    10: {
      image: 'https://placekitten.com/200/240',
      text: 'Chloe',
    },
    11: {
      image: 'https://placekitten.com/200/201',
      text: 'Jasper',
    },
    12: {
      image: 'https://placekitten.com/200/202',
      text: 'Pepper',
    },
    13: {
      image: 'https://placekitten.com/200/203',
      text: 'Oscar',
    },
    14: {
      image: 'https://placekitten.com/200/204',
      text: 'Dusty',
    },
    5: {
      image: 'https://placekitten.com/200/205',
      text: 'Spooky',
    },
    16: {
      image: 'https://placekitten.com/200/210',
      text: 'Kiki',
    },
    17: {
      image: 'https://placekitten.com/200/215',
      text: 'Smokey',
    },
    18: {
      image: 'https://placekitten.com/200/220',
      text: 'Gizmo',
    },
    19: {
      image: 'https://placekitten.com/220/239',
      text: 'Kitty',
    },
  };

  const renderRow = useCallback(({data, active}) => {
    return <Row data={data} active={active} />;
  }, []);
  return (
    // <ScrollView
    //   ref={scrollViewRef}
    //   onScroll={onScroll}
    //   scrollEventThrottle={16}>
    //   <View style={styles.container}>
    //     {testData.map((item, index) => (
    //       <DraggableFlatList
    //         key={index}
    //         dragHitSlop={{top: 0, left: 0, bottom: 0, right: 0}}
    //         // scrollEnabled={false}
    //         data={item}
    //         renderItem={renderItem}
    //         keyExtractor={item2 => `${index}-draggable-item-${item2.name}`}
    //         onDragEnd={res => {
    //           console.log('~~~~~~~~~~~~~~~~', res);
    //           // setData(res.data);
    //         }}
    //       />
    //     ))}
    //   </View>
    //   <Button title="edit" style={styles.buton} onPress={handleEditPress} />
    // </ScrollView>
    <View>
      <ScrollView>
        <Text style={styles.title}>React Native Sortable List</Text>
        <SortableList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          data={data}
          renderRow={renderRow}
        />
        <Text style={styles.title}>React Native Sortable List3</Text>
        <SortableList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          data={data3}
          renderRow={renderRow}
        />
      </ScrollView>
    </View>
  );
};

function Row(props) {
  const {active, data} = props;

  const activeAnim = useRef(new Animated.Value(0));
  const style = useMemo(
    () => ({
      ...Platform.select({
        ios: {
          transform: [
            {
              scale: activeAnim.current.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.07],
              }),
            },
          ],
          shadowRadius: activeAnim.current.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 10],
          }),
        },

        android: {
          transform: [
            {
              scale: activeAnim.current.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.07],
              }),
            },
          ],
          elevation: activeAnim.current.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 6],
          }),
        },
      }),
    }),
    [],
  );
  useEffect(() => {
    Animated.timing(activeAnim.current, {
      duration: 300,
      easing: Easing.bounce,
      toValue: Number(active),
      useNativeDriver: true,
    }).start();
  }, [active]);

  return (
    <Animated.View style={[{paddingVertical: 20}, styles.row, style]}>
      <Image source={{uri: data.image}} style={[styles.image]} />
      <Text style={styles.text}>{data.text}</Text>
    </Animated.View>
  );
}

export default Draggable;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: '#DDD',
    marginVertical: 20,
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  item2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buton: {
    backgroundColor: 'red',
  },
  checkboxContainer: {
    backgroundColor: 'blue',
    width: 30,
    height: 10,
    borderRadius: 10,
  },
  touch: {
    backgroundColor: 'red',
    width: 30,
    height: 10,
    borderRadius: 10,
  },
});
