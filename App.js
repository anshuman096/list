import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import AddItem from './screens/addItem';
import ShoppingList from './screens/shoppingList';

export default class App extends React.Component {
    render() {
        return (
            <ListNavigator />
        );
    }
}

const routeConfigs = {
    ShoppingListName: ShoppingList,
    AddItemName: AddItem
};

const StackNavigatorConfigs = {
    initialRouteName: 'ShoppingListName'
};

const ListNavigator = createStackNavigator(routeConfigs, StackNavigatorConfigs);
