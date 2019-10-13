import React, { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { ArticlePreview } from '../ui';
import { styles } from './ArticlesList.styles';
import { NavigationStackOptions } from 'react-navigation-stack';
import { useNavigation } from '../hooks';
import { Article } from '../data';
import { connect } from 'react-redux';
import { getArticleList } from '../reducks/article';

type Props = {
  articles: Article[];
  isLoading: boolean;
  getArticleList: () => (dispatch: any) => Promise<void>;
};

const ArticlesList: React.FunctionComponent<Props> & { navigationOptions?: NavigationStackOptions } = (props): JSX.Element => {
  const navigation = useNavigation();
  const navigateArticle = (slug: string) => navigation.navigate('Article', { slug: slug });

  useEffect(() => {
    props.getArticleList();
  });

  const renderItem = ({ item }: { item: Article }): JSX.Element => {
    return (
      <View style={styles.articleContainer}>
        <ArticlePreview {...item} navigateArticle={navigateArticle} />
      </View>
    );
  };

  const RenderSeparator = () => <View style={styles.separator}></View>;

  return (
    <View>
      {props.isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={props.articles}
          renderItem={renderItem}
          ItemSeparatorComponent={RenderSeparator}
          keyExtractor={article => article.slug}
        />
      )}
    </View>
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

const mapStateToProps = state => ({ articles: state.article.list, loading: state.article.isLoadingList });
const mapDispatchToProps = dispatch => ({ getArticleList: () => dispatch(getArticleList()) });
const ArticlesListPage = connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
export default ArticlesListPage;
