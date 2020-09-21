import React from 'react';
import { Text, View } from 'react-native';
import { ARTICLES } from '../../assets/articles.js';
import { NavigationStackOptions } from 'react-navigation-stack';
import { styles } from './ArticleDetail.styles';
import { useNavigation } from '../hooks';
import { Article } from '../data';
import { ArticleHeader } from '../ui';

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

ArticleDetail.navigationOptions = {
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
};
