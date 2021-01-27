import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';

import time from './src/text/time';

const NUM_ITEMS = 24;

/*
//rgb(0,128,0) => 
//	255, 255, 0
//	255, 0, 0
*/
function getColor(i: number) {
  const multiplier = 255 / (NUM_ITEMS);
  const colorVal = i * multiplier;
 
  const moitie = 128  *i / NUM_ITEMS;
  const decr = 255 -  2 * (i -NUM_ITEMS/2 ) * multiplier ;
  return `rgb(${colorVal <=255? 2*colorVal: 255}, ${i <= NUM_ITEMS/2? 128 + moitie: decr}, ${0})`;
}

const exampleData: Item[] = time.military.map((d, index) => {
  const backgroundColor = getColor(index);
  return {
    key: `item-${backgroundColor}`,
    label: String(d),
    backgroundColor,
  };
});

type Item = {
  key: string;
  label: string;
  backgroundColor: string;
};

function App() {
  const [data, setData] = useState(exampleData);

  const renderItem = useCallback(
    ({ item, index, drag, isActive }: RenderItemParams<Item>) => {
      return (
        <TouchableOpacity
          style={{
            height: 100,
            backgroundColor: isActive ? 'red' : item.backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onLongPress={drag}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 32,
            }}>
            {item.label}
          </Text>
        </TouchableOpacity>
      );
    },
    []
  );

  return (
    <View style={{ flex: 1 }}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.key}`}
        onDragEnd={({ data }) => setData(data)}
      />
    </View>
  );
}

export default App;