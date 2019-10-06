import React from 'react';
import { View, Text } from 'react-native';
import { CircledImage } from '../CircledImage';

type Article = {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
};

type Author = {
  username: string;
  bio?: string;
  image?: string;
  following: boolean;
};

// TODO: Split up into reusable and/or logical components.
// TODO: Under src/ui/author create AuthorMeta.tsx, this component contains the image, username of the author as well as the creation time of the article
// TODO: Under src/ui/article create ArticlePreviewBody.tsx, this component contains the title, description, call to action (Read more...) and tags
// TODO: As always create the correct type/interfaces for each reusable component
// TODO: Rebuild ArticlePreview using your refactored components
// TODO: Use stylesheets to remove all in-line styling from the components, you can leave the stylesheets in the same file as the component or create an external style (e.g. AuthorMeta.styles.ts)

export const ArticlePreview: React.FunctionComponent<Article> = (article): JSX.Element => {
  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignContent: 'stretch' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center'
        }}
      >
        <View style={{ width: 'auto', flexDirection: 'row', justifyContent: 'center' }}>
          <CircledImage size={36} uri={article.author.image} />
          <View>
            <Text>{article.author.username}</Text>
            <Text>{article.createdAt}</Text>
          </View>
        </View>
        <Text>{article.favoritesCount}</Text>
      </View>
      <View>
        <Text>{article.title}</Text>
        <Text>{article.description}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
          <Text>Read more...</Text>
          <View style={{ flex: 0, flexDirection: 'row' }}>
            {article.tagList.map(tag => (
              <Text key={tag}>{tag}&nbsp;</Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};
