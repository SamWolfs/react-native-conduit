import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './ArticlePreviewBody.styles';

type ArticlePreviewBody = {
  title: string;
  description: string;
  tagList: string[];
}

export const ArticlePreviewBody: React.FunctionComponent<ArticlePreviewBody> = article => {
  return (
    <View>
      <Text>{article.title}</Text>
      <Text>{article.description}</Text>
      <View style={styles.row}>
        <Text>Read more...</Text>
        <View style={styles.tags}>
          {article.tagList.map(tag => (
            <Text key={tag}>{tag}&nbsp;</Text>
          ))}
        </View>
      </View>
    </View>
  );
};
