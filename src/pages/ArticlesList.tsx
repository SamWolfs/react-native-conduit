import React, { useEffect } from 'react';
import { View, FlatList, Text, TouchableWithoutFeedback } from 'react-native';
import { ArticlePreview } from '../ui';
import { styles } from './ArticlesList.styles';
import { NavigationStackOptions } from 'react-navigation-stack';
import { FunctionNavigationOptions, useNavigation } from '../hooks';
import { Article } from '../data';
import { connect } from 'react-redux';
import { getArticleList } from '../reducks/article';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../styles/_colors';


type Props = {
  articles: Article[];
  isLoading: boolean;
  getArticleList: () => (dispatch: any) => Promise<void>;
};

const ArticlesList: React.FunctionComponent<Props> & FunctionNavigationOptions = (props): JSX.Element => {
  const navigation = useNavigation();
  const navigateArticle = (slug: string) => navigation.navigate('Article', { slug: slug });

  useEffect(() => {
    props.getArticleList();
  }, []);

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

ArticlesList.navigationOptions = ({navigation}) => ({
  title: 'Conduit',
  headerStyle: {
    backgroundColor: '#5CB85C'
  },
  headerTitleStyle: {
    color: '#FFF'
  },
  headerRight: (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('CreateArticle')}>
        <Icon name="plus" style={{fontSize: 20, margin: 14}} color={Colors.fontLight} />
    </TouchableWithoutFeedback>
  )
});

const mapStateToProps = state => ({ articles: state.article.list, loading: state.article.isLoadingList });
const mapDispatchToProps = dispatch => ({ getArticleList: () => dispatch(getArticleList()) });
const ArticlesListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesList);
export default ArticlesListPage;
