import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Right, Icon, Text } from 'native-base';


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Header style={styles.header}>
                    <Right>
                        <Icon name="menu" onPress={() => this.props.action.navigation.openDrawer()}></Icon>
                    </Right>
                </Header>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#1ac182'
    }
});