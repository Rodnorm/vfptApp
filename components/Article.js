import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';

export default class Articles extends React.Component {



    render() {
        return (
            <View style={{flex:1}}>
                <Header style={styles.header}>
                    <Right>
                        <Icon name="menu" onPress={ ()=> this.props.navigation.openDrawer() }></Icon>
                    </Right>
                </Header>
                <View style={{flex: 1, alignItems: "center", justifyContent:"center"}}>
                    <Text>Home</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff'
    }
});