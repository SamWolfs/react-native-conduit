import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { NavigationContext, NavigationScreenProp, NavigationRoute, NavigationParams } from 'react-navigation';

const useNavigation = () => {
  return useContext(NavigationContext) as NavigationScreenProp<
  NavigationRoute,
  NavigationParams
>;
};

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