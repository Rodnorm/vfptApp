import React from 'react';
import Articles from './components/Article';
import ArticleList from './components/ArticleList';
import { createDrawerNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from 'react-navigation';



const AppDrawer = createDrawerNavigator({
    Articles: Articles,
    ArticleList: ArticleList
});

const MainContainer = createAppContainer(AppDrawer);

export default class App extends React.Component {

    render() {
        return (
            <MainContainer />
        );
    }
}