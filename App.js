import React from 'react';
import Articles from './components/Article';
import ArticleList from './components/ArticleList';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';



const AppDrawer = createDrawerNavigator(
    {
        'Article List': ArticleList,
        'Articles': Articles
    },
    {
        initialRouteName: 'Article List',
        contentOptions: {
            activeBackgroundColor: '#4076e0',
        }
    }
);

const MainContainer = createAppContainer(AppDrawer);

export default class App extends React.Component {

    render() {
        return (
            <MainContainer />
        );
    }
}