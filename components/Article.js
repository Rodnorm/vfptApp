import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';
import Menu from './Menu';


const article = [
    {
        name: 'Artigo 1',
        description: 'blablablablablabla balbla bla bl b blablabla blablabla blablabla',
        id: 1
    },
    {
        name: 'Artigo 2',
        description: 'blablablablablabla balbla bla bl b blablabla blablabla blablabla',
        id: 2
    },
    {
        name: 'Artigo 3',
        description: 'blablablablablabla balbla bla bl b blablabla blablabla blablabla',
        id: 3
    },
];
export default class Articles extends React.Component {
    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Menu action={this.props}/>
                <View style={styles.view}>
                    <Text>{article[this.props.navigation.getParam('id')].name}</Text>
                    <Text>{article[this.props.navigation.getParam('id')].description}</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff'
    },
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});