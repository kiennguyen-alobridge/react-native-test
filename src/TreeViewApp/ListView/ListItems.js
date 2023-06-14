import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default ListItem = props => {
  const {
    listItemStyle,
    onPress,
    leftImageStyle,
    leftImage,
    text,
    textStyle,
    rightImage,
    rightImageStyle,
    rightImageWrapperStyle,
  } = props;
  return (
    <TouchableOpacity
      style={styles.touchableHighlightStyle}
      activeOpacity={0.5}
      onPress={onPress}>
        <View style={styles.container2}>
        <View style={[styles.area]}>

      {leftImage && (
        <Image
          style={styles.image}
          source={{uri: 'https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc'}}
          resizeMode="contain"
        />
      )}
      <Text style={textStyle || styles.text}>{text}</Text>
      {rightImage && (
        <View style={rightImageWrapperStyle || styles.rightImageWrapperStyle}>
          <Image
            style={styles.iconRight}
            source={rightImage}
            resizeMode="contain"
          />
        </View>
      )}
      </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  area: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    height: 27,
    width: 27,
    marginRight: 12,
    resizeMode: "contain",
  }, 
  iconRight: {
    color: '#706D65',
    fontSize: 27,
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
    marginLeft: 10,
    marginRight: 10,
  },
  rightImageWrapperStyle: {
    alignItems: 'flex-end',
    flex: 1,
    paddingRight: 10,
  },
  touchableHighlightStyle: {
    borderRadius: 10,
    paddingLeft: 16,
  },
});
