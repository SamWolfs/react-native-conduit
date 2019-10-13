import React from 'react';
import { View, FlatList } from 'react-native';
import { ArticlePreview } from '../ui';
import { ARTICLES } from '../../assets/articles.js';
import { styles } from './ArticlesList.styles';
import { NavigationStackOptions } from 'react-navigation-stack';
import { useNavigation } from '../hooks';
import { Article } from '../data';

// TODO: create new props for ArticlesList (1 prop: articles)

export const ArticlesList: React.FunctionComponent & { navigationOptions?: NavigationStackOptions} = (): JSX.Element => {
  // TODO: remove static articles
  const articles: Article[] = ARTICLES;
  const navigation = useNavigation();
  const navigateArticle = (slug: string) => navigation.navigate('Article', {slug: slug});

  const renderItem = ({ item }: { item: Article }): JSX.Element => {
    return (
      <View style={styles.articleContainer}>
        <ArticlePreview {...item} navigateArticle={navigateArticle} />
      </View>
    );
  };

  const RenderSeparator = () => <View style={styles.separator}></View>;

  return (
    <FlatList data={articles} renderItem={renderItem} ItemSeparatorComponent={RenderSeparator} keyExtractor={article => article.slug} />
  );
};

ArticlesList.navigationOptions = () => ({
  title: 'Conduit',
  headerStyle: {
    backgroundColor: '#5CB85C'
  },
  headerTitleStyle: {
    color: '#FFF'
  }
});

// TODO: create a `mapStateToProps` function that takes a `state` as param and returns a Props object
// TODO: use react-redux's `connect()` function to bind the Redux store to our component. TIP: use export default connect()
