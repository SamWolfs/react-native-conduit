import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { NavigationStackOptions } from 'react-navigation-stack';
import { styles } from './ArticleDetail.styles';
import { useNavigation } from '../hooks';
import { Article } from '../data';
import { ArticleHeader } from '../ui';
import { getArticle } from '../reducks/article';
import { connect } from 'react-redux';

// TODO: Add loading prop to Props type and mapStatetoProps

type Props = {
  article: Article;
  getArticle: any;
};

const ArticleDetail: React.FunctionComponent<Props> & { navigationOptions?: NavigationStackOptions } = (props): JSX.Element => {
  const navigation = useNavigation();
  const { slug } = navigation.state.params;
  useEffect(() => {
    props.getArticle(slug);
  }, [slug]);
  // TODO: Use loading prop to show Loading message or Detail Component
  return (
    <View>
      {!props.article ? (
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

const mapStateToProps = state => ({ article: state.article.detail });
const mapDispatchToProps = dispatch => ({ getArticle: (slug: string) => dispatch(getArticle(slug)) });

const ArticleDetailPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetail);
export default ArticleDetailPage; 
