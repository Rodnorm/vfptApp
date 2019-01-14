import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Articles, { TRACKS } from './components/Article';
import ArticleList from './components/ArticleList';
import MainPlayer from './components/player/MainPlayer';
import LoaderClass from './components/LoaderClass';



const AppDrawer = createDrawerNavigator(
    {
        'Article List': ArticleList,
        'Articles': Articles,
        'Player': MainPlayer, 
        'Loader': LoaderClass, 
    },
    {
        initialRouteName: 'Article List',
        contentOptions: {
            activeBackgroundColor: '#4076e0',
            activeTintColor: 'white',
        }
    }
);

const MainContainer = createAppContainer(AppDrawer);

export default class App extends React.Component {

    render() {
        return (
            <MainContainer />
            // <MainPlayer tracks={TRACKS}/>
        );
    }
}