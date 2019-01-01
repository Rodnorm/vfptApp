// import React from 'react';
// import { StyleSheet, TextInput, Text, View, TouchableOpacity, Platform } from 'react-native';
// import { StackNavigator, DrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
// import { Container, Header, Button, Icon } from 'native-base';
// import { Root, Icon } from 'native-base';

// import Articles from './components/Article';
// import ArticleList from './components/ArticleList';
// import Main from './components/Main';

// const Drawer = DrawerNavigator({
//   Home: { screen: Articles },
//   ArticleList: { screen: ArticleList },
// },
//   {
//     initialRouteName: "Home",
//     contentOptions: {
//       activeTintColor: "#e91e63"
//     },
//     contentComponent: props => <SideBar {...props} />
//   });

// const appNavigator = StackNavigator({
//   Drawer: { screen: Drawer }
// },
//   {
//     initialRouteName: "Drawer",
//     headerMode: "none"
//   });


// export default () =>
//   <Root>
//     <appNavigator />
//   </Root>


// export class SideBar extends React.Component {

//   render() {
//     return (
//       <View style={[styles.container, { backgroundColor: '#fff' }]}>
//         <Text>
//           <Icon name="home" size={30} color="#900" />
//           Conteúdo side bar
//         </Text>
//       </View>
//     );
//   }
// };


// ------------------------------------------------------------
// const Root = createStackNavigator({
//   Main: Main,
//   Articles: Articles,
//   ArticleList: ArticleList
// });

// const MainContainer = createAppContainer(Root);

// export class Api extends React.Component {
//   render() {
//     return (
//       <MainContainer />
//     );
//   }
// }










// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,' +
//     'Shake or press menu button for dev menu',
// });


// class SideBar extends React.Component {

//   render() {

//     return (
//       <View style={[styles.container, { backgroundColor: '#fff' }]}>
//         <Text>
//           <Icon name="logo-whatsapp" size={30} color="#900" />
//           Conteúdo side bar
//         </Text>
//       </View>
//     );
//   }
// };
// export default class App extends React.Component {
//   closeDrawer = () => {
//     this.drawer._root.close()
//   };
//   openDrawer = () => {
//     this.drawer._root.open()
//   };
//   render() {
//     return (
//       <Drawer
//         ref={(ref) => { this.drawer = ref; }}
//         content={<SideBar navigator={this.navigator} />}
//         onClose={() => this.closeDrawer()}>
//         <Container>
//           <Header>
//             <Icon style={{ flexDirection: 'row', marginTop: 20 }} onPress={() => this.openDrawer()} name="md-mail" size={30} color="#fff" />
//           </Header>

//           <View style={styles.container}>
//             <Text style={styles.welcome}>
//               Welcome to React Native!
//             </Text>
//             <Text style={styles.instructions}>
//               To get started, edit App.js
//             </Text>
//             <Text style={styles.instructions}>
//               {instructions}
//             </Text>
//           </View>

//         </Container>
//       </Drawer>

//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
















// --------------------------------------------------------

// export default class DrawerExample extends React.Component {
//   render() {
//     closeDrawer = () => {
//       this.drawer._root.close()
//     };
//     openDrawer = () => {
//       this.drawer._root.open()
//     };
//     return (
//       <Drawer
//         ref={(ref) => { this.drawer = ref; }}
//         content={<SideBar />}
//         onClose={() => this.closeDrawer()} >
//         <Dashboard openDrawer={this.openDrawer} />
//         <App />
//       </Drawer>
//     );
//   }
// }

// const Dashboard = (props) => {
//   return (
//       <Button onPress={props.openDrawer} title="Testee" />
//   );
// }


// export class SideBar extends React.Component {

//   render() {
//     return (
//       <View style={[styles.container, { backgroundColor: '#fff' }]}>
//         <Text>
//           <Icon name="home" size={30} color="#900" />
//           Conteúdo side bar
//         </Text>
//       </View>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   }
// });






















