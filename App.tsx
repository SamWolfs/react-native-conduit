import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// TODO: Create new file in the src/ui directory named CircledImage.tsx
// TODO: Build a custom component `CircledImage` that uses the built-in <Image>-element and accepts a size and an optional image link
// https://facebook.github.io/react-native/docs/image
// TODO: Add a TypeScript type or interface for your component props
// TODO: Use `https://static.productionready.io/images/smiley-cyrus.jpg` as fallback image in case non is provided
// TODO (optional): Barrel your exports in an index.ts file under the src/ui directory

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello PXL!</Text>
      <Text>Time to get started!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
