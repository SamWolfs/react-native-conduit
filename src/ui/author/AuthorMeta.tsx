import React from 'react';
import { View, Text } from 'react-native';
import { CircledImage } from '../CircledImage';
import { styles } from './AuthorMeta.styles';

type AuthorMeta = {
  username: string;
  image?: string;
  createdAt: string;
}

export const AuthorMeta: React.FunctionComponent<AuthorMeta> = (meta): JSX.Element => {
  return (
    <View style={styles.container}>
      <CircledImage size={36} uri={meta.image} />
      <View>
        <Text>{meta.username}</Text>
        <Text>{meta.createdAt}</Text>
      </View>
    </View>
  );
};
