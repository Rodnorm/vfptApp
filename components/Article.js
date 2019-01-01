import React from 'react';
import { Text, View } from 'react-native';

export default class Articles extends React.Component {

    static navigationOptions = {
        title: 'Article',
        headerStyle: {
            backgroundColor: '#8400d5',
        },
        headerTitleStyle: {
            color: '#f3f1e5',
        }
    };

    render() {
        return (
            <View>
                <Text>Componente do artigo</Text>
            </View>
        );
    }
}