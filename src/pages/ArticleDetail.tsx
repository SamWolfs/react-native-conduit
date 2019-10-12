import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '../hooks';



export const ArticleDetail: React.FunctionComponent = (): JSX.Element => {
  const navigation = useNavigation();
  const { slug } = navigation.state.params;
  return (
    <View>
      <Text>
        { slug }
      </Text>
    </View>
  );
}