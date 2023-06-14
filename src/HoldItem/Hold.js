import React, { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, Modal, PanResponder, Text, View ,TouchableOpacity} from 'react-native';

const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]
const ListItem = ({onPress,styles}) => {
    console.log("🚀🚀🚀🚀🚀🚀 ~ file: Hold.js:9 ~ ListItem ~ onPress🚀🚀🚀🚀🚀🚀", onPress)
    const listItemRef = useRef(null);
    const handleLayout = () => {
        if (listItemRef.current) {
          listItemRef.current.measureInWindow((x, y, width, height) => {
            console.log('Item position:', { x, y, width, height });
            onPress(y)
          });
        }
      };
    return (
        <TouchableOpacity ref={listItemRef}
        onPress={handleLayout}
            style={[{paddingVertical:20, width: '100%', backgroundColor: 'gray', marginVertical: 10, alignItems: 'center', justifyContent: 'center' },styles]} >
            <Text>{1}</Text>
        </TouchableOpacity>
    )
}

const Hold = () => {
    const [isShow, setIsShow] = useState({
        isShow: false,
        y: 0
    })

    return (
        <View >
            <FlatList data={data} renderItem={()=> <ListItem onPress={ (y) =>setIsShow({isShow:true,y}) } />} keyExtractor={(item) => item} />
           {
            isShow.isShow &&
            <View style={{backgroundColor:'#00000080',position:'absolute',top:0,left:0,right:0,bottom:0}}>
            <ListItem  styles={{marginTop:isShow.y}} onPress={ () =>setIsShow({isShow:false,y:0}) } />
        </View>
           }
            
        </View>
    );
};

export default Hold;
