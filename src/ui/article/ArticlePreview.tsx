import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AuthorMeta } from '../author/AuthorMeta';
import { ArticlePreviewBody } from './ArticlePreviewBody';
import { styles } from './ArticlePreview.styles';

type ArticlePreview = {
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
  navigateArticle: (slug: string) => void;
};

type Author = {
  username: string;
  bio?: string;
  image?: string;
  following: boolean;
};

export const ArticlePreview: React.FunctionComponent<ArticlePreview> = (article): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AuthorMeta {...article} {...article.author} />
        <Text>{article.favoritesCount}</Text>
      </View>
      <TouchableOpacity onPress={() => article.navigateArticle(article.slug)}>
        <ArticlePreviewBody {...article} />
      </TouchableOpacity>
    </View>
  );
};
