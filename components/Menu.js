import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Header, Right, Icon } from 'native-base';


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        if (this.props.showArrow) {
            return (
                <View>
                    <Header style={styles.header}>
                        <TouchableOpacity style={styles.menu}>
                            <Icon name="md-arrow-back" onPress={() => this.props.action.navigation.goBack()}></Icon>
                        </TouchableOpacity>
                        <Right style={styles.menu}>
                            <Icon name="menu" onPress={() => this.props.action.navigation.openDrawer()}></Icon>
                        </Right>
                    </Header>
                </View>
            );
        }

        return (
            <View>
                <Header style={styles.header}>
                    <Right style={styles.menu}>
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
    },
    menu: {
        marginTop: 25
    }
});