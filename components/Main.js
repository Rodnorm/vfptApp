import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MAIN</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8b3cf9'
    }
});