
import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Menu from './Menu';
import { Card, CardItem, Text, Body } from "native-base";


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
export default class ArticleList extends React.Component {

    render() {
        return (
            <View>
                <Menu action={this.props} />
                <View>
                    <ScrollView sytle={styles.scroll}>

                        {article.map(element => {
                            return <TouchableOpacity key={element.id - 1 } onPress={
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
        paddingTop: 10
    }
});