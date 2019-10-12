import React from 'react';
import { Image, ImageStyle } from 'react-native';

type Props = {
  size: number;
  style?: ImageStyle;
  uri?: string;
}

export const CircledImage: React.FunctionComponent<Props> = (image): JSX.Element => {
  const imageStyle = {
    width: image.size,
    height: image.size,
    borderRadius: image.size / 2
  }

  return (
    <Image
          style={[imageStyle, image.style]}
          source={{
            uri: image.uri || "https://static.productionready.io/images/smiley-cyrus.jpg"
          }}
        />
  );
};