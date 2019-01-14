import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainPlayer from './player/MainPlayer';
export default class LoaderClass extends React.Component {

    render() {
        let tracks = this.props.navigation.getParam('tracks');
        let selectedTr = this.props.navigation.getParam('selectedTrack');
        return (
            <View style={{ flex: 1 }}>
                <MainPlayer tracks={tracks} />
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