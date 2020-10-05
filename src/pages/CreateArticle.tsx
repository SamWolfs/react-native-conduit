import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { NavigationStackOptions } from 'react-navigation-stack';
import { Colors } from '../styles/_colors';
import { styles } from './CreateArticle.styles';

type Props = {
  postArticle: any;
};

const CreateArticle: React.FunctionComponent<Props> & { navigationOptions?: NavigationStackOptions } = (props): JSX.Element => {
  // TODO: create a state variable and setter for each input using React.useState()
  // TODO: bind state variable and setter to the input value and change event respectively
  // TODO: write a submit function that creates an ArticleForCreate, use the `string.split()` function to create a space separated taglist

  return (
    <View style={{padding: 8}}>
      <TextInput key="title" style={styles.input} placeholder="An interesting title"/>
      <TextInput key="description" style={styles.input} multiline numberOfLines={2} placeholder="A small description"/>
      <TextInput key="body" style={styles.input} multiline numberOfLines={10} placeholder="Your text post"/>
      <TextInput key="tagList" style={styles.lastInput} placeholder="Space separated tags (optional)"/>
      <Button title="Submit" color={Colors.primaryDark} onPress={() => console.log('button pressed')}></Button>
    </View>
  );
};

CreateArticle.navigationOptions = {
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
};

// TODO: wire up the component to Redux by defining mapDispatchToProps and linking it to a postArticle action creator
// TODO: define CreateArticlePage and use react-redux's connect function to link the component to the Redux store

export default CreateArticle;
