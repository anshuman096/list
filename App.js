import React, { Component } from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import AddItem from './screens/addItem';
import ShoppingList from './screens/shoppingList';
import CompletedList from './screens/completedList';

export default class App extends React.Component {
    render() {
        return (
            <AppNavigator />
        );
    }
}

// Navigation configurations for a tab navigator that will
// navigate between the to do list of active items and in active items.
const tabRouteConfigs = {
    ActiveList: ShoppingList,
    InactiveList: CompletedList
};

const TabNavigatorConfigs = {
    initialRouteName: 'ActiveList'
};

const ListNavigator = createBottomTabNavigator(tabRouteConfigs, TabNavigatorConfigs);


// Navigation configurations for a stack navigator that represents
// navigation throughout the entire app. Navigates between the TabNavigator for lists
// and the addItem component
const stackRouteConfigs = {
    ShoppingListName: ListNavigator,
    AddItemName: AddItem
};

const StackNavigatorConfigs = {
    initialRouteName: 'ShoppingListName'
};

const AppNavigator = createStackNavigator(stackRouteConfigs, StackNavigatorConfigs);
