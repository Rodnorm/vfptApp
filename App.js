import React from 'react';
import Article from './components/Article';
import ArticleList from './components/ArticleList';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';



const AppDrawer = createDrawerNavigator({
    'Article List': ArticleList,
    'Articles': Article
});

const MainContainer = createAppContainer(AppDrawer);

export default class App extends React.Component {

    render() {
        return (
            <MainContainer />
        );
    }
}