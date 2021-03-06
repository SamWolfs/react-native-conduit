import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from './ArticleDetail.styles';
import { FunctionNavigationOptions, useNavigation } from '../hooks';
import { Article } from '../data';
import { ArticleHeader } from '../ui';
import { getArticle } from '../reducks/article';
import { connect } from 'react-redux';

type Props = {
  article: Article;
  isLoading: boolean;
  getArticle: any;
};

const ArticleDetail: React.FunctionComponent<Props> & FunctionNavigationOptions = (props): JSX.Element => {
  const navigation = useNavigation();
  const { slug } = navigation.state.params;
  useEffect(() => {
    props.getArticle(slug);
  }, [slug]);
  return (
    <View>
      {props.isLoading ? (
        <Text>Loading</Text>
      ) : (
        <>
          <ArticleHeader {...props.article} />
          <Text style={styles.bodyContainer}>{props.article.body}</Text>
        </>
      )}
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

const mapStateToProps = state => ({ article: state.article.detail, isLoading: state.article.isLoadingDetail });
const mapDispatchToProps = dispatch => ({ getArticle: (slug: string) => dispatch(getArticle(slug)) });

const ArticleDetailPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetail);
export default ArticleDetailPage; 
