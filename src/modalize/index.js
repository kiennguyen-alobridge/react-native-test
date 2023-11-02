/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Platform,
  Dimensions,
  PanResponder,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
const {height} = Dimensions.get('window');

const MyWeb = () => {
  const modalizeRef = useRef(null);
  const contentRef = useRef(null);
  const onOpen = () => {
    modalizeRef?.current?.open();
  };
  const onClose = () => {
    modalizeRef?.current?.close();
  };
  const FooterScreen = () => {
    return (
      <View
        style={{
          height: 50,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          borderTopWidth: 0.5,
          borderTopColor: 'gray',
          paddingHorizontal: 20
        }}>
        <Text>delete</Text>
        <Text>edit</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={onOpen}>
        <Text> onOpen</Text>
      </TouchableOpacity>
      <Modalize
        ref={modalizeRef}
        modalStyle={[styles.modalStyle]}
        scrollViewProps={{
          showsVerticalScrollIndicator: false,
          scrollEnabled: false,
        }}
        reactModalProps={{
          onTouchMove: e => {
            console.log('onTouchMove', e.nativeEvent.locationY);
          },
        }}
        {...(Platform.OS === 'android' && {panGestureComponentEnabled: true})}
        withHandle={false}
        closeModal={onClose}
        snapPoint={400}
        // FooterComponent={renderFooterScreen}
        // FloatingComponent={renderFooterScreen}
        FloatingDragComponent={FooterScreen}
        useNativeDriver={true}
        tapGestureEnabled={false}
        modalHeight={700}
        closeSnapPointStraightEnabled={false}
        customRenderer={
          <Animated.View
            // onTouchStart={(e) => {console.log('onTouchStart',e.nativeEvent.locationY)}}
            // onResponderMove={(e) => {console.log('onResponderMove',e.nativeEvent.locationY)}}

            style={{
              flex: 1,
            marginTop:100,
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={onClose}>
              <Text>onClose</Text>
            </TouchableOpacity>
          </Animated.View>
        }
      />
    </View>
  );
};

export default MyWeb;
const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
  },
});
