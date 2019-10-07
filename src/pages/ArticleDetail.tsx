import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { NavigationContext, NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation';
import { ARTICLES } from '../../assets/articles.js';
import { NavigationStackOptions } from 'react-navigation-stack';
import { styles } from './ArticleDetail.styles';
import { AuthorMeta, H1 } from '../ui';

const useNavigation = () => {
  return useContext(NavigationContext) as NavigationScreenProp<NavigationRoute, NavigationParams>;
};

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

export const ArticleDetail: React.FunctionComponent & { navigationOptions?: NavigationStackOptions } = (): JSX.Element => {
  const navigation = useNavigation();
  const { slug } = navigation.state.params;
  const article = (ARTICLES as Article[]).find(article => article.slug === slug);
  return (
    <View>
      <ArticleHeader {...article} />
      <Text style={styles.bodyContainer}>{article.body}</Text>
    </View>
  );
};

ArticleDetail.navigationOptions = () => ({
  title: 'Article',
  headerStyle: {
    backgroundColor: '#333'
  },
  headerTitleStyle: {
    color: '#FFF'
  },
  headerBackTitleStyle: {
    color: '#FFF'
  }
});

type ArticleHeader = {
  title: string;
  createdAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

const ArticleHeader: React.FunctionComponent<ArticleHeader> = (headerInfo) => {
  return (
    <View style={styles.header}>
      <H1>{headerInfo.title}</H1>
      <View style={styles.authorRow}>
        <AuthorMeta {...headerInfo.author} createdAt={headerInfo.createdAt} />
        <View style={styles.buttonRow}>
          <Text>Follow</Text>
          <Text>{headerInfo.favoritesCount}</Text>
        </View>
      </View>
    </View>
  );
};
