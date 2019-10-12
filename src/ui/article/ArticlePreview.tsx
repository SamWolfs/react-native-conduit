import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AuthorMeta } from '../author/AuthorMeta';
import { ArticlePreviewBody } from './ArticlePreviewBody';
import { styles } from './ArticlePreview.styles';
import { FavoriteButton } from '../buttons/FavoriteButton';
import { Author } from '../../data';

type Props = {
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

export const ArticlePreview: React.FunctionComponent<Props> = (article): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AuthorMeta {...article} {...article.author} />
        <FavoriteButton favoritesCount={article.favoritesCount} />
      </View>
      <TouchableOpacity onPress={() => article.navigateArticle(article.slug)}>
        <ArticlePreviewBody {...article} />
      </TouchableOpacity>
    </View>
  );
};
