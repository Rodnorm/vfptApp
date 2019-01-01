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
    {
        name: 'Artigo 4',
        description: 'blablablablablabla balbla bla bl b blablabla blablabla blablabla',
        id: 4
    },
    {
        name: 'Artigo 5',
        description: 'blablablablablabla balbla bla bl b blablabla blablabla blablabla',
        id: 5
    },
    {
        name: 'Artigo 6',
        description: 'blablablablablabla balbla bla bl b blablabla blablabla blablabla',
        id: 6
    },
];
export default class Articles extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Menu action={this.props} />
                <View style={styles.view}>
                    {this.props.navigation.getParam('id') && (<TextContent />)}

                </View>
            </View>
        );
    }
}

export class TextContent extends React.Component {
    render() {
        return (
            <View>
                <Text>{article[this.props.navigation.getParam('id')].name}</Text>
                <Text>{article[this.props.navigation.getParam('id')].description}</Text>
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