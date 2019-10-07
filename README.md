# React Native Course

## Exercise 1-1

1. Create new file in the src/ui directory named CircledImage.tsx
2. Build a custom component `CircledImage` that uses the built-in [Image](https://facebook.github.io/react-native/docs/image) element and accepts a size and an optional image link and style
3. Add a TypeScript type or interface for your component props
4. Use `https://static.productionready.io/images/smiley-cyrus.jpg` as fallback image in case non is provided
5. **optional**: Barrel your exports in an index.ts file under the src/ui directory

## Exercise 1-2

1. under the src/ui/article directory, create a new file `ArticlePreview.tsx`
2. create a new component `ArticlePreview` that accepts an article through props (check assets/articles.js for the type signature)
3. create an interface or type that describes an article. (Tip: Build a separate interface/type for the author)
4. Combine Flexbox, CircledImage and Text elements to build a reusable ArticlePreview component
5. Focus on building the layout; Favourite-button, tags and text will be styled later

## Exercise 1-3

1. Split up into reusable and/or logical components.
2. Under src/ui/author create AuthorMeta.tsx, this component contains the image, username of the author as well as the creation time of the article
3. Under src/ui/article create ArticlePreviewBody.tsx, this component contains the title, description, call to action (Read more...) and tags
4. As always create the correct type/interfaces for each reusable component
5. Rebuild ArticlePreview using your refactored components
6. Use stylesheets to remove all in-line styling from the components, you can leave the stylesheets in the same file as the component or create an external style (e.g. AuthorMeta.styles.ts)

## Exercise 1-4

1. Use FlatList and your custom ArticlePreview item to render a list of articles (assets/articles.js)

## Exercise 1-5

1. Under src/pages add ArticlesList.tsx and refactor your code by moving all ArticlesList logic to your new component
2. Install React Native's Navigation packages: npm i react-navigation react-navigation-stack
3. use react-navigation's createStackNavigator function to build our navigation stack (1 route: Home)
4. use react-navigation's createAppContainer function to create our new app container using the previously created Stack
5. Render AppContainer inside App's container View
6. In ArticlesList.tsx, set your Navigation Bar's title to 'Conduit' using NavigationScreenOptions

## Exercise 1-6

### ArticlesList.tsx

1. Use the useNavigation hook to add navigation to the ArticlesList component
2. TODO: Write a function `navigateArticle` that navigates to the Article route, passing slug as a param {slug: slug}
3. TODO: Under src/pages create a new component ArticleDetail.tsx; for now let it display the slug you passed to it through the navigator
4. TODO: You can get route params through the navigation object of your component

### App.tsx

1. Add a new route `Article` that routes to the ArticleDetail component

### ArticlePreview.tsx

1. Add a new prop: navigateDetail to the Article type, optionally rename the type to ArticlePreview or ArticlePreviewProps
2. Build a Touchable of your choice around ArticlePreviewBody and bind onPress to the navigateDetail function

## Exercise 1-7

Finish building the detail component and add styling throughout the application
