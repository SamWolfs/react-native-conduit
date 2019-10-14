import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { NavigationStackOptions } from 'react-navigation-stack';
import { Colors } from '../styles/_colors';
import { styles } from './CreateArticle.styles';
import { ArticleForCreate } from '../data';
import { createArticle } from '../reducks/article';
import { connect } from 'react-redux';

type Props = {
  postArticle: any;
  isLoading: boolean;
};

const CreateArticle: React.FunctionComponent<Props> & { navigationOptions?: NavigationStackOptions } = (props): JSX.Element => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [body, setBody] = React.useState('');
  const [taglist, setTaglist] = React.useState('');

  const createArticle = () => {
    const article: ArticleForCreate = {
      title: title,
      description: description,
      body: body,
      tagList: taglist.split(' ')
    };
    props.postArticle(article);
  };

  // TODO: Run `expo install expo-location` and `expo install expo-permissions` to install the necessary dependencies
  // TODO: In the useEffect hook, use Permissions API to request LOCATION permission (see docs: https://docs.expo.io/versions/v35.0.0/sdk/location/)
  // TODO: Create a local state variable to hold the location, if permission is granted, otherwise show a Toast (https://facebook.github.io/react-native/docs/toastandroid) with a descriptive error message
  // TODO: Add a Text element to the form that shows from which Location the user is sending the article, or 'Location disabled' in case no permission was granted


  return (
    <View style={{ padding: 8 }}>
      <TextInput
        key="title"
        style={styles.input}
        placeholder="An interesting title"
        value={title}
        onChangeText={text => setTitle(text)}
        editable={!props.isLoading}
      />
      <TextInput
        key="description"
        style={styles.input}
        multiline
        numberOfLines={2}
        placeholder="A small description"
        value={description}
        onChangeText={text => setDescription(text)}
        editable={!props.isLoading}
      />
      <TextInput
        key="body"
        style={styles.input}
        multiline
        numberOfLines={10}
        placeholder="Your text post"
        value={body}
        onChangeText={text => setBody(text)}
        editable={!props.isLoading}
      />
      <TextInput
        key="taglist"
        style={styles.lastInput}
        placeholder="Space separated tags (optional)"
        value={taglist}
        onChangeText={text => setTaglist(text)}
        editable={!props.isLoading}
      />
      <Button title="Submit" color={Colors.primaryDark} onPress={() => createArticle()}></Button>
    </View>
  );
};

CreateArticle.navigationOptions = () => ({
  title: 'Create Article',
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

const mapStateToProps = state => ({ isLoading: state.article.isLoadingCreate });
const mapDispatchToProps = dispatch => ({ postArticle: (article: ArticleForCreate) => dispatch(createArticle(article)) });
const CreateArticlePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateArticle);
export default CreateArticlePage;
