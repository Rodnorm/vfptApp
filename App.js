// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';

// import { ArticleList } from './components/ArticleList';
// import { Articles } from './components/Article';




// const Root = createStackNavigator({
//   Article: Articles
// });

// const MainContainer = createAppContainer(Root);

// export default class App extends React.Component {
//   render() {
//     return (
//       <MainContainer />
//     );
//   }
// }


import React from 'react';
import { Articles } from './components/Article';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const Root = createStackNavigator({
  Login: Articles
});

const MainContainer = createAppContainer(Root);

export default class App extends React.Component {
  
  render() {
    return (
        <MainContainer />
    );
  }
}