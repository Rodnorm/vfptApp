import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Content } from 'native-base';


import Menu from './Menu';


const article = [
    {
        name: 'Artigo 1',
        description: 'blablablablablabla balbla bla bl b blablabla blablabla blablabla',
        id: 1,
        content: ['Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' +
            ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
            'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
            ' and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' +
            'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
        ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
        'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
        ' and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' +
        'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' +
        ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
        'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
        ' and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' +
        'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' +
        ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
        'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,',
        ' and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' +
        ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
        'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
        ' and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' +
        ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
        'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,',
        ' and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' +
        ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
        'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
        ' and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' +
        'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' +
        ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
        'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
        ' and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' +
        'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' +
        ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
        'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
        ' and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' +
        'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' +
        ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
        'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
        ' and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
        ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
        'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
        ' and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' + 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' +
        ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
        'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
        ' and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        ]
    },
    {
        name: 'Artigo 2',
        description: 'blablablablablabla balbla bla bl b blablabla blablabla blablabla',
        id: 2,
        content: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' +
            ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
            'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
            ' and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
    {
        name: 'Artigo 3',
        description: 'blablablablablabla balbla bla bl b blablabla blablabla blablabla',
        id: 3,
        content: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' +
            ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
            'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
            ' and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
    {
        name: 'Artigo 4',
        description: 'blablablablablabla balbla bla bl b blablabla blablabla blablabla',
        id: 4,
        content: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' +
            ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
            'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
            ' and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
    {
        name: 'Artigo 5',
        description: 'blablablablablabla balbla bla bl b blablabla blablabla blablabla',
        id: 5,
        content: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' +
            ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
            'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
            ' and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
    {
        name: 'Artigo 6',
        description: 'blablablablablabla balbla bla bl b blablabla blablabla blablabla',
        id: 6,
        content: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' +
            ' when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into' +
            'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
            ' and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
];
export default class Articles extends React.Component {

    render() {
        if (this.props.navigation.getParam('id') != null) {
            let article = this.props.navigation.getParam('id');
            return (
                <View style={{ flex: 1 }}>
                    <Menu action={this.props} />
                    <View style={styles.view}>
                        <TextContent article={article} />
                    </View>
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Menu action={this.props} />
                    <View style={styles.view}>
                        <Text>Nothing here</Text>
                    </View>
                </View>
            );
        }
    }
}

export class TextContent extends React.Component {
    render() {

        return (
            <View>
                <Content>
                    <Text style={styles.title}>
                        {article[this.props.article].name}
                    </Text>
                    {article[this.props.article].content.map(paragraph => {
                        return <Text key={paragraph} style={styles.content}>
                            {paragraph}
                        </Text>
                    })}

                </Content>
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
    },
    title: {
        fontSize: 20,
        padding: 20,
        fontFamily: 'monospace'
    },
    content: {
        padding: 20,
        fontFamily: 'monospace',
        textAlign: 'left'
    }
});