import React, { useEffect } from 'react';
import { View, TextInput, Button, ToastAndroid, Text } from 'react-native';
import { Colors } from '../styles/_colors';
import { styles } from './CreateArticle.styles';
import { ArticleForCreate } from '../data';
import { createArticle } from '../reducks/article';
import { connect } from 'react-redux';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { FunctionNavigationOptions } from '../hooks';

type Props = {
  postArticle: any;
  isLoading: boolean;
};

const CreateArticle: React.FunctionComponent<Props> & FunctionNavigationOptions = (props): JSX.Element => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [body, setBody] = React.useState('');
  const [taglist, setTaglist] = React.useState('');
  const [location, setLocation] = React.useState(null);

  const createArticle = () => {
    const article: ArticleForCreate = {
      title: title,
      description: description,
      body: body,
      tagList: taglist.split(' ')
    };
    props.postArticle(article);
  };

  useEffect(() => {
    _getLocationAsync();
  }, []);

  const _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== Permissions.PermissionStatus.GRANTED) {
      ToastAndroid.show('Location Permission Denied', ToastAndroid.SHORT);
      setLocation('Location unknown');
    } else {
      const position = await Location.getCurrentPositionAsync();
      const [location] = await Location.reverseGeocodeAsync(position.coords);
      setLocation(location);
    }
  }


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
      <Text>{location ? location.city : location}</Text>
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
