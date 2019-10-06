import React from 'react';
import { Image } from 'react-native';

type CircledImage = {
  size: number;
  uri?: string;
}

export const CircledImage = (image: CircledImage): JSX.Element => {
  const imageStyle = {
    width: image.size,
    height: image.size,
    borderRadius: image.size / 2
  }

  return (
    <Image
          style={imageStyle}
          source={{
            uri: image.uri || "https://static.productionready.io/images/smiley-cyrus.jpg"
          }}
        />
  );
};