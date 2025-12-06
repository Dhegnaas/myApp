import { View, Text } from 'react-native'
import React from 'react'

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <Text>soo dhawaaw muuse nin daalan aa tehee</Text>

      <View 
        style={{ width: 200, height: 200, backgroundColor: "lightblue" }}
      />

      <View 
        style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}
      />

      <View 
        style={{ width: 200, height: 200, backgroundColor: "lightblue" }}
      />
    </View>
  );
}
