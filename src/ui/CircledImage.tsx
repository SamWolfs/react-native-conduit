import React from 'react';
import { Image, ImageStyle } from 'react-native';

type CircledImage = {
  size: number;
  style?: ImageStyle;
  uri?: string;
}

export const CircledImage = (image: CircledImage): JSX.Element => {
  const imageStyle = {
    width: image.size,
    height: image.size,
    // css circle: square with border-radius equal to half its width
    borderRadius: image.size / 2
  }

  // The || (OR) operator can also be used to short-circuit statements
  // it stops at the first truthy value
  return (
    <Image
          style={[imageStyle, image.style]}
          source={{
            uri: image.uri || "https://static.productionready.io/images/smiley-cyrus.jpg"
          }}
        />
  );
};