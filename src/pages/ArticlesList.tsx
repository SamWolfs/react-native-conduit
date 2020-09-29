import React from 'react';
import { View, FlatList } from 'react-native';
import { ArticlePreview } from '../ui';
import { styles } from './ArticlesList.styles';
import { NavigationStackOptions } from 'react-navigation-stack';
import { useNavigation } from '../hooks';
import { Article } from '../data';
import { connect } from 'react-redux';

type Props = {
  articles: Article[]
}

const ArticlesList: React.FunctionComponent<Props> & { navigationOptions?: NavigationStackOptions} = (props): JSX.Element => {
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
    <FlatList data={props.articles} renderItem={renderItem} ItemSeparatorComponent={RenderSeparator} keyExtractor={article => article.slug} />
  );
};

ArticlesList.navigationOptions = {
  title: 'Conduit',
  headerStyle: {
    backgroundColor: '#5CB85C'
  },
  headerTitleStyle: {
    color: '#FFF'
  }
};

const mapStateToProps = (state) => ({articles: state.article.list});
const ArticlesListPage = connect(mapStateToProps)(ArticlesList);
export default ArticlesListPage;
