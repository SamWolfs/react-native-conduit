import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CircledImage } from './src/ui';

// TODO: under the src/ui/article directory, create a new file `ArticlePreview.tsx`
// TODO: create a new component `ArticlePreview` that accepts an article through props (check assets/articles.js for the type signature)
// TODO: create an interface or type that describes an article. (Tip: Build a separate interface/type for the author)
// TODO: Combine Flexbox, CircledImage and Text elements to build a reusable ArticlePreview component
// TODO: Focus on building the layout; Favourite-button, tags and text will be styled later

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
