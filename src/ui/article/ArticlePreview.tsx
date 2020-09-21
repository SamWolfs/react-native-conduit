import React from 'react';
import { View, Text } from 'react-native';
import { AuthorMeta } from '../author/AuthorMeta';
import { ArticlePreviewBody } from './ArticlePreviewBody';
import { styles } from './ArticlePreview.styles';

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

// You could also declare all separate components in this file since they're not yet being re-used
// Try to find a workflow that works for yourself and/or your team, sometimes it's perfectly fine to have
// a bunch of smaller, related components bundled in a single file; the important part is communicating/documenting
// the workflow and keeping it consistent throughout the project/team
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
