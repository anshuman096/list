import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import AddItem from './src/AddItem';
import ShoppingList from './src/ShoppingList';

export default class App extends React.Component {
    render() {
        return (
            <ListNavigator />
        );
    }
}

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
