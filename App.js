import React, {Component} from 'react';
import { StyleSheet,
     Text,
     TouchableOpacity,
     FlatList,
     View
 } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import AddItem from './AddItem';

export default class App extends React.Component {
    render() {
        return (
            <ListNavigator />
        );
    }
}

class ShoppingList extends React.Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    /**
     * shouldComponentUpdate should update the data state variable
     * for the FlatList component whenever AddItem.js navigates back here
     * TO BE CHANGED
     *
     */
    async shouldComponentUpdate(nextProps) {
        await this.setState({
            data: nextProps.state.data
        });
    }

    render() {
        return(
            <View style = {styles.mainContainer}>
                <View style = {styles.titleContainer}>
                    <Text style = {styles.titleLabel}>Shopping List</Text>
                </View>
                <View style = {styles.listContainer}>
                    <FlatList
                        data = {this.state.data}
                        renderItem = {({item}) => {

                        }}/>
                </View>
                <TouchableOpacity style = {styles.buttonContainer}
                    onPress = {() => {this.props.navigation.navigate('AddItemName', {data: this.state.data})}}>
                    <Text style = {styles.buttonLabel}>Add Item</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#f1f1f2'
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#1995ad',
        borderBottomWidth: 1,
        borderBottomColor: '#1995ad',
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.2
    },
    listContainer: {
        flex: 7,
        flexDirection: 'row',
        backgroundColor: '#f1f1f2'
    },
    buttonContainer: {
        flex: 0.75,
        justifyContent: 'center',
        backgroundColor: '#bcbabe',
        borderRadius: 10
    },
    titleLabel: {
        fontSize: 30,
        paddingTop: 25,
        paddingBottom: 25,
        fontWeight: 'bold',
        fontFamily: 'Avenir',
        alignSelf: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.2
    },
    buttonLabel: {
        alignSelf: 'center',
        alignItems: 'center',
        fontSize: 25,
        fontFamily: 'Avenir',
        color: '#000000',
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.2
    }
});


const routeConfigs = {
    ShoppingListName: {
        screen: ShoppingList,
        navigationOptions: {
            headerVisible: false
        }
    },
    AddItemName: AddItem
};

const StackNavigatorConfigs = {
    initialRouteName: 'ShoppingListName'
};

const ListNavigator = createStackNavigator(routeConfigs, StackNavigatorConfigs);
