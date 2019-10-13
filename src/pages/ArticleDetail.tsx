import React from 'react';
import { Text, View } from 'react-native';
import { ARTICLES } from '../../assets/articles.js';
import { NavigationStackOptions } from 'react-navigation-stack';
import { styles } from './ArticleDetail.styles';
import { useNavigation } from '../hooks';
import { Article } from '../data';
import { ArticleHeader } from '../ui';

// TODO: create new props for ArticleDetail (2 props: article, getArticle)

export const ArticleDetail: React.FunctionComponent & { navigationOptions?: NavigationStackOptions } = (): JSX.Element => {
  const navigation = useNavigation();
  const { slug } = navigation.state.params;
  // TODO: Remove (or move to reducer) the article detail getter logic
  // TODO: use useEffect hook to load an article detail, make sure useEffect only fires when slug is changed
  const article = (ARTICLES as Article[]).find(article => article.slug === slug);
  return (
    // TODO: Use a conditional statement to render a <Text> element when article is undefined, and the actual detail component when the article is loaded
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

// TODO: create a `mapStateToProps` function that takes a `state` as param and returns a Props object
// TODO: create a `mapDispatchToProps` function that takes `dispatch` as param and returns a Props object
// EXAMPLE: dispatch => ({ doSomething: (var?) => dispatch(doSomething(var))})
// TODO use react-redux's `connect()` function to bind the Redux store to our component. TIP: use export default connect()
