import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CircledImage } from './src/ui';

export default function App() {
  return (
    <View style={styles.container}>
      <CircledImage size={100} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
