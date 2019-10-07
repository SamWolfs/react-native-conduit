import React from 'react';
import { View, Text } from 'react-native';
import { AuthorMeta } from '../author/AuthorMeta';
import { ArticlePreviewBody } from './ArticlePreviewBody';
import { styles } from './ArticlePreview.styles';

// TODO: Add a new prop: navigateDetail to the Article type, optionally rename the type to ArticlePreview or ArticlePreviewProps
// TODO: Build a Touchable of your choice around ArticlePreviewBody and bind onPress to the navigateDetail function
type Article = {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
};

type Author = {
  username: string;
  bio?: string;
  image?: string;
  following: boolean;
};

export const ArticlePreview: React.FunctionComponent<Article> = (article): JSX.Element => {
  return (
    <View style={styles.container}>
      <View
        style={styles.header}
      >
        <AuthorMeta {...article} {...article.author} />
        <Text>{article.favoritesCount}</Text>
      </View>
      <ArticlePreviewBody {...article} />
    </View>
  );
};
