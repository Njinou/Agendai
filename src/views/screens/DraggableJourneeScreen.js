import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';

import time from '../../text/time';
import {getColor} from '../../helpers/helpers';

const NUM_ITEMS = time.military.length-1;

const exampleData: Item[] = time.military.map((d, index) => {
  const backgroundColor = getColor(index,NUM_ITEMS);
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

function DraggableJourneeScreen() {
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

export default DraggableJourneeScreen;