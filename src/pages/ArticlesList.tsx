import React from 'react';
import { View, FlatList } from 'react-native';
import { ArticlePreview } from '../ui';
import { styles } from './ArticlesList.styles';
import { NavigationStackOptions } from 'react-navigation-stack';
import { useNavigation } from '../hooks';
import { Article } from '../data';
import { connect } from 'react-redux';

// TODO: Add loading prop to Props type and mapStatetoProps
// TODO: Add list getter to props

type Props = {
  articles: Article[]
}

const ArticlesList: React.FunctionComponent<Props> & { navigationOptions?: NavigationStackOptions} = (props): JSX.Element => {
  const navigation = useNavigation();
  const navigateArticle = (slug: string) => navigation.navigate('Article', {slug: slug});

  // TODO: use useEffect hook to load data

  const renderItem = ({ item }: { item: Article }): JSX.Element => {
    return (
      <View style={styles.articleContainer}>
        <ArticlePreview {...item} navigateArticle={navigateArticle} />
      </View>
    );
  };

  const RenderSeparator = () => <View style={styles.separator}></View>;

  return (
    // TODO: use conditional with loading prop to display a loading message or articles list
    <FlatList data={props.articles} renderItem={renderItem} ItemSeparatorComponent={RenderSeparator} keyExtractor={article => article.slug} />
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

// TODO: Add mapDispatchToProps to bind the articles getter

const mapStateToProps = (state) => ({articles: state.article.list});
const ArticlesListPage = connect(mapStateToProps)(ArticlesList);
export default ArticlesListPage;
