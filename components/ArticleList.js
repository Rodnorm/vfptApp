
import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Card, CardItem, Text, Body } from "native-base";

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
export default class ArticleList extends React.Component {
    render() {
        return (
            <View style={styles.background}>
                <StatusBar hidden={true} />
                <Menu action={this.props} />
                <View sytle={{ flex: 1 }}>
                    <ScrollView sytle={styles.scroll}>

                        {article.map(element => {
                            return <TouchableOpacity key={element.id - 1} onPress={
                                () => this.props.navigation.navigate('Articles', { id: element.id - 1 })
                            }>
                                <List article={element} />
                            </TouchableOpacity>
                        })}
                    </ScrollView>
                </View>
            </View>
        );
    }
}


class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card>
                <CardItem header bordered>
                    <Text>{this.props.article.name}</Text>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <Text>{this.props.article.description}</Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}


const styles = StyleSheet.create({
    scroll: {
        paddingTop: 10,
        flex: 1
    },
    background: {
        backgroundColor: '#b4ff85',
        flex: 1
    }
});